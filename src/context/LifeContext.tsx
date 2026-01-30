"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LIFE_UNITS, LifeUnitState } from '@/lib/constants';

const TOTAL_WEEKLY_HOURS = 168;

function getDefaultHours(unitId: string): number {
    if (unitId === 'physiological') return 56;
    if (unitId === 'work') return 40;
    if (unitId === 'daily-activities') return 7;
    return 5;
}

interface LifeContextType {
    units: LifeUnitState[];
    updateUnit: (unitId: string, updates: Partial<LifeUnitState>) => void;
    totalHours: number;
    remainingHours: number;
    isValid168: boolean;
    userVision: string;
    setUserVision: (vision: string) => void;
    isOnboardingComplete: boolean;
    setOnboardingComplete: (complete: boolean) => void;
    resetAll: () => void;
}

const LifeContext = createContext<LifeContextType | undefined>(undefined);

export function LifeProvider({ children }: { children: React.ReactNode }) {
    const [isOnboardingComplete, setOnboardingComplete] = useState(false);
    const [userVision, setUserVision] = useState("");
    const [units, setUnits] = useState<LifeUnitState[]>(() =>
        LIFE_UNITS.map(unit => ({
            unitId: unit.id,
            hours: getDefaultHours(unit.id),
            importance: 5,
            satisfaction: 5
        }))
    );
    const [isMounted, setIsMounted] = useState(false);

    // Load from localStorage only after mounting to avoid hydration mismatch
    useEffect(() => {
        setIsMounted(true);
        const savedData = localStorage.getItem('strategize_life_data');
        if (savedData) {
            try {
                const parsed = JSON.parse(savedData);
                if (parsed.units) setUnits(parsed.units);
                if (parsed.userVision) setUserVision(parsed.userVision);
                if (parsed.isOnboardingComplete !== undefined) setOnboardingComplete(parsed.isOnboardingComplete);
            } catch (e) {
                console.error("Error parsing saved data", e);
            }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        if (isMounted && units.length > 0) {
            localStorage.setItem('strategize_life_data', JSON.stringify({
                units,
                userVision,
                isOnboardingComplete
            }));
        }
    }, [units, userVision, isOnboardingComplete, isMounted]);

    const updateUnit = (unitId: string, updates: Partial<LifeUnitState>) => {
        setUnits(prev => {
            return prev.map(u => {
                if (u.unitId !== unitId) return u;
                const newState = { ...u, ...updates };
                // Clamp hours so total never exceeds TOTAL_WEEKLY_HOURS
                if (updates.hours !== undefined) {
                    const othersTotal = prev.reduce((sum, item) => item.unitId === unitId ? sum : sum + item.hours, 0);
                    const maxAllowed = TOTAL_WEEKLY_HOURS - othersTotal;
                    newState.hours = Math.max(0, Math.min(updates.hours, maxAllowed));
                }
                return newState;
            });
        });
    };

    const totalHours = units.reduce((acc, current) => acc + current.hours, 0);
    const remainingHours = TOTAL_WEEKLY_HOURS - totalHours;
    const isValid168 = Math.abs(totalHours - TOTAL_WEEKLY_HOURS) < 0.01;

    const resetAll = () => {
        localStorage.removeItem('strategize_life_data');
        setUnits(LIFE_UNITS.map(unit => ({
            unitId: unit.id,
            hours: getDefaultHours(unit.id),
            importance: 5,
            satisfaction: 5
        })));
        setUserVision("");
        setOnboardingComplete(false);
    };

    if (!isMounted) {
        return <div style={{ background: '#0a0a0c', minHeight: '100vh' }} />;
    }

    return (
        <LifeContext.Provider value={{
            units,
            updateUnit,
            totalHours,
            remainingHours,
            isValid168,
            userVision,
            setUserVision,
            isOnboardingComplete,
            setOnboardingComplete,
            resetAll
        }}>
            {children}
        </LifeContext.Provider>
    );
}

export function useLife() {
    const context = useContext(LifeContext);
    if (context === undefined) {
        throw new Error('useLife must be used within a LifeProvider');
    }
    return context;
}
