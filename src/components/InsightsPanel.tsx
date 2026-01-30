"use client";

import React from 'react';
import { useLife } from '@/context/LifeContext';
import { LIFE_UNITS } from '@/lib/constants';
import { AlertCircle, TrendingDown, Star } from 'lucide-react';

export default function InsightsPanel() {
    const { units } = useLife();

    const insights = React.useMemo(() => {
        const list: { type: 'urgency' | 'distraction' | 'success' | 'maintenance', text: string, unit: string }[] = [];

        units.forEach(u => {
            const fullUnit = LIFE_UNITS.find(lu => lu.id === u.unitId);
            const name = fullUnit?.name || u.unitId;

            // Urgency: High Importance, Low Satisfaction
            if (u.importance >= 7 && u.satisfaction <= 4) {
                list.push({
                    type: 'urgency',
                    unit: name,
                    text: `Crítico: La unidad "${name}" es vital para tu bienestar pero te genera poca satisfacción. Considera reasignar horas aquí pronto.`
                });
            }

            // Distraction: Low Importance, High Time
            if (u.importance <= 4 && u.hours >= 15) {
                list.push({
                    type: 'distraction',
                    unit: name,
                    text: `Distracción: Dedicas mucho tiempo (${u.hours.toFixed(1)}h) a "${name}", una unidad de baja importancia estratégica.`
                });
            }

            // Success: High Importance, High Satisfaction
            if (u.importance >= 8 && u.satisfaction >= 8) {
                list.push({
                    type: 'success',
                    unit: name,
                    text: `¡Éxito! Estás floreciendo en "${name}". No olvides celebrar este logro.`
                });
            }
        });

        return list;
    }, [units]);

    if (insights.length === 0) return null;

    return (
        <div className="mt-6 sm:mt-8 px-0">
            <h3 className="text-sm font-bold uppercase tracking-widest text-text-dim mb-3 sm:mb-4">Insights Estratégicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                {insights.map((insight, i) => (
                    <div key={i} className={`glass-card p-3 sm:p-4 flex gap-3 sm:gap-4 items-start border-l-4 ${insight.type === 'urgency' ? 'border-l-red-500' :
                        insight.type === 'distraction' ? 'border-l-pink-500' :
                            'border-l-emerald-500'
                        }`}>
                        <div className={`p-2 rounded-lg bg-white/5 shrink-0 ${insight.type === 'urgency' ? 'text-red-400' :
                            insight.type === 'distraction' ? 'text-pink-400' :
                                'text-emerald-400'
                            }`}>
                            {insight.type === 'urgency' && <AlertCircle size={20} />}
                            {insight.type === 'distraction' && <TrendingDown size={20} />}
                            {insight.type === 'success' && <Star size={20} />}
                        </div>
                        <div>
                            <p className="text-xs sm:text-sm font-medium">{insight.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
