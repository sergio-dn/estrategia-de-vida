"use client";

import React, { useState } from 'react';
import { useLife } from '@/context/LifeContext';
import { LIFE_UNITS, LIFE_AREAS } from '@/lib/constants';
import { ChevronRight, ChevronLeft, Target, AlarmClock, CheckCircle } from 'lucide-react';

export default function Onboarding() {
    const [step, setStep] = useState(1);
    const { userVision, setUserVision, units, updateUnit, totalHours, remainingHours, isValid168, setOnboardingComplete } = useLife();

    const nextStep = () => setStep(s => s + 1);
    const prevStep = () => setStep(s => s - 1);

    // Group units by area
    const unitsByArea = LIFE_AREAS.map(area => ({
        area,
        units: LIFE_UNITS.filter(u => u.areaId === area.id),
    }));

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-[#0a0a0c]">
            <div className="max-w-2xl w-full glass-card p-4 sm:p-6 md:p-12 animate-fade-in">

                {/* Progress Bar */}
                <div className="flex gap-2 mb-8 sm:mb-12">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-indigo-500 shadow-[0_0_10px_var(--primary)]' : 'bg-white/10'}`} />
                    ))}
                </div>

                {/* Step 1: Vision */}
                {step === 1 && (
                    <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400"><Target size={32} /></div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold premium-gradient-text tracking-tight">Define tu Propósito</h2>
                        </div>
                        <p className="text-text-dim mb-8">Una estrategia de vida comienza con una dirección clara. ¿Cómo describirías tu &ldquo;Gran Vida&rdquo; en una frase?</p>
                        <textarea
                            value={userVision}
                            onChange={(e) => setUserVision(e.target.value)}
                            placeholder="Ej: Vivir una vida equilibrada donde mi salud y mis relaciones sean el motor de mi éxito profesional."
                            className="w-full h-32 bg-white/5 border border-white/10 rounded-xl p-4 text-[var(--foreground)] placeholder:text-white/20 focus:outline-none focus:border-indigo-500/50 transition-colors mb-8 resize-none"
                        />
                        <button
                            onClick={nextStep}
                            disabled={!userVision.trim()}
                            className="btn-primary w-full flex items-center justify-center gap-2"
                        >
                            Continuar <ChevronRight size={18} />
                        </button>
                    </div>
                )}

                {/* Step 2: 168h Inventory — All 16 units grouped by area */}
                {step === 2 && (
                    <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-pink-500/10 rounded-2xl text-pink-400"><AlarmClock size={32} /></div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold premium-gradient-text tracking-tight">Tus 168 Horas</h2>
                        </div>
                        <p className="text-text-dim mb-4">Todos tenemos 168 horas a la semana. Distribúyelas entre tus áreas clave para ver tu realidad actual.</p>

                        {/* Sticky remaining hours counter */}
                        <div className={`sticky top-0 z-10 py-3 px-4 mb-4 rounded-xl text-center font-bold text-sm ${isValid168 ? 'bg-emerald-500/10 text-emerald-400' : 'bg-pink-500/10 text-pink-400'}`}>
                            {isValid168
                                ? '168h distribuidas correctamente'
                                : `Horas restantes: ${remainingHours.toFixed(0)}h`
                            }
                        </div>

                        <div className="max-h-[50vh] overflow-y-auto mb-6 pr-2 custom-scrollbar">
                            {unitsByArea.map(({ area, units: areaUnits }) => (
                                <div key={area.id} className="mb-6">
                                    <h3
                                        className="text-xs font-bold uppercase tracking-widest mb-3 pb-1 border-b border-white/10"
                                        style={{ color: area.color }}
                                    >
                                        {area.name}
                                    </h3>
                                    {areaUnits.map(u => {
                                        const state = units.find(val => val.unitId === u.id)!;
                                        const maxHours = state.hours + remainingHours;
                                        return (
                                            <div key={u.id} className="mb-4">
                                                <div className="flex justify-between mb-1">
                                                    <span className="text-sm font-semibold">{u.name}</span>
                                                    <span className="text-xs font-mono text-text-dim">{state.hours}h</span>
                                                </div>
                                                <input
                                                    type="range" min="0" max={maxHours} step="1"
                                                    value={state.hours}
                                                    onChange={(e) => updateUnit(u.id, { hours: parseInt(e.target.value) })}
                                                    aria-label={`Horas para ${u.name}`}
                                                    className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={prevStep} className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                <ChevronLeft size={18} /> Atrás
                            </button>
                            <button
                                onClick={nextStep}
                                disabled={!isValid168}
                                className="btn-primary flex-[2] flex items-center justify-center gap-2"
                            >
                                {isValid168 ? 'Casi listo' : `Distribuye exactamente 168 horas (${totalHours.toFixed(0)}h)`}
                                {isValid168 && <ChevronRight size={18} />}
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3: Final Verification */}
                {step === 3 && (
                    <div className="animate-fade-in text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-5 bg-emerald-500/10 rounded-full text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                                <CheckCircle size={64} />
                            </div>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold premium-gradient-text tracking-tight mb-4">¡Todo listo!</h2>
                        <p className="text-text-dim mb-12">Tu portafolio de vida ha sido inicializado. Ahora puedes analizar tu estrategia en el tablero principal.</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={prevStep} className="flex-1 px-6 py-3 rounded-xl border border-white/10 text-white font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                                <ChevronLeft size={18} /> Atrás
                            </button>
                            <button
                                onClick={() => setOnboardingComplete(true)}
                                className="btn-primary flex-[2] flex items-center justify-center gap-2"
                            >
                                Entrar al Dashboard <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}
