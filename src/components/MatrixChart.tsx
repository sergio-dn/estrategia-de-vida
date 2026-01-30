"use client";

import React, { useMemo } from 'react';
import {
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Tooltip,
    Legend,
    ChartOptions,
    ChartData,
    TooltipItem
} from 'chart.js';
import { Bubble } from 'react-chartjs-2';
import { useLife } from '@/context/LifeContext';
import { LIFE_UNITS, LIFE_AREAS } from '@/lib/constants';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

interface BubbleDataPoint {
    x: number;
    y: number;
    r: number;
    _hours: number;
}

export default function MatrixChart() {
    const { units } = useLife();

    const data: ChartData<'bubble'> = useMemo(() => {
        return {
            datasets: units.map((unit) => {
                const fullUnit = LIFE_UNITS.find(u => u.id === unit.unitId);
                const area = LIFE_AREAS.find(a => a.id === fullUnit?.areaId);

                return {
                    label: fullUnit?.name || unit.unitId,
                    data: [{
                        x: unit.satisfaction,
                        y: unit.importance,
                        r: Math.max(5, unit.hours * 2),
                        _hours: unit.hours,
                    } as BubbleDataPoint],
                    backgroundColor: area?.color || 'rgba(99, 102, 241, 0.5)',
                    borderColor: 'rgba(255, 255, 255, 0.5)',
                    borderWidth: 1,
                    hoverRadius: 30,
                };
            }),
        };
    }, [units]);

    const options: ChartOptions<'bubble'> = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                min: 0,
                max: 10,
                title: {
                    display: true,
                    text: 'Satisfacción',
                    color: '#94a3b8',
                    font: { size: 12, weight: 'bold' }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: { color: '#94a3b8', font: { size: 10 } }
            },
            y: {
                min: 0,
                max: 10,
                title: {
                    display: true,
                    text: 'Importancia',
                    color: '#94a3b8',
                    font: { size: 12, weight: 'bold' }
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                },
                ticks: { color: '#94a3b8', font: { size: 10 } }
            },
        },
        plugins: {
            legend: {
                display: false,
            },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<'bubble'>) => {
                        const label = context.dataset.label || '';
                        const dataPoint = context.raw as BubbleDataPoint;
                        return `${label}: Horas=${dataPoint._hours.toFixed(1)}, Sat=${dataPoint.x}, Imp=${dataPoint.y}`;
                    }
                }
            }
        },
    };

    return (
        <div className="w-full h-full p-4 relative">
            {/* Quadrant Labels */}
            <div className="absolute top-6 sm:top-8 left-[15%] sm:left-1/4 text-[10px] sm:text-xs font-bold text-red-400 opacity-50 uppercase tracking-widest">Zona de Urgencia</div>
            <div className="absolute top-6 sm:top-8 right-[5%] sm:right-1/4 text-[10px] sm:text-xs font-bold text-green-400 opacity-50 uppercase tracking-widest">Zona de Éxito</div>
            <div className="absolute bottom-6 sm:bottom-8 right-[5%] sm:right-1/4 text-[10px] sm:text-xs font-bold text-blue-400 opacity-50 uppercase tracking-widest">Zona de Distracción</div>
            <div className="absolute bottom-6 sm:bottom-8 left-[15%] sm:left-1/4 text-[10px] sm:text-xs font-bold text-slate-400 opacity-50 uppercase tracking-widest">Mantenimiento</div>

            <Bubble data={data} options={options} />
        </div>
    );
}
