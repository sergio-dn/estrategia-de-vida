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

    const [hoveredUnitId, setHoveredUnitId] = useState<string | null>(null);
    const hoveredUnit = LIFE_UNITS.find(u => u.id === hoveredUnitId);

    return (
        <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 bg-slate-50">
            <div className={`max-w-2xl w-full glass-card p-4 sm:p-6 md:p-12 animate-fade-in bg-white/80 transition-all duration-500 ${step === 2 ? 'max-w-4xl' : 'max-w-2xl'}`}>

                {/* Progress Bar */}
                <div className="flex gap-2 mb-8 sm:mb-12">
                    {[1, 2, 3].map(i => (
                        <div key={i} className={`h-1 flex-1 rounded-full transition-all duration-500 ${step >= i ? 'bg-indigo-600 shadow-[0_0_10px_rgba(79,70,229,0.3)]' : 'bg-slate-200'}`} />
                    ))}
                </div>

                {/* Step 1: Vision */}
                {step === 1 && (
                    <div className="animate-fade-in">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 bg-indigo-50 rounded-2xl text-indigo-600"><Target size={32} /></div>
                            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold premium-gradient-text tracking-tight">Define tu Propósito</h2>
                        </div>
                        <p className="text-slate-600 mb-8">Una estrategia de vida comienza con una dirección clara. ¿Cómo describirías tu &ldquo;Gran Vida&rdquo; en una frase?</p>
                        <textarea
                            value={userVision}
                            onChange={(e) => setUserVision(e.target.value)}
                            placeholder="Ej: Vivir una vida equilibrada donde mi salud y mis relaciones sean el motor de mi éxito profesional."
                            className="w-full h-32 bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all mb-8 resize-none"
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

                {/* Step 2: 168h Inventory — Simplified Grouped Inputs */}
                {step === 2 && (
                    <div className="animate-fade-in">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-3 bg-pink-50 rounded-2xl text-pink-600"><AlarmClock size={32} /></div>
                                    <h2 className="text-xl sm:text-2xl font-bold premium-gradient-text tracking-tight">Tus 168 Horas</h2>
                                </div>
                                <p className="text-sm text-slate-600 mb-6">Distribuye semanalmente. Sé honesto sobre tu tiempo real hoy.</p>

                                {/* Sticky remaining hours counter */}
                                <div className={`sticky top-0 z-10 py-3 px-4 mb-6 rounded-xl text-center font-bold text-sm shadow-sm transition-colors ${isValid168 ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-pink-50 text-pink-700 border border-pink-100'}`}>
                                    {isValid168
                                        ? '✨ 168h distribuidas perfectamente'
                                        : `Faltan: ${remainingHours.toFixed(0)}h`
                                    }
                                </div>

                                <div className="max-h-[40vh] overflow-y-auto mb-8 pr-2 custom-scrollbar">
                                    {unitsByArea.map(({ area, units: areaUnits }) => (
                                        <div key={area.id} className="mb-8">
                                            <h3
                                                className="text-[10px] font-black uppercase tracking-widest mb-4 pb-2 border-b border-slate-100 flex items-center gap-2"
                                                style={{ color: area.color }}
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: area.color }} />
                                                {area.name}
                                            </h3>
                                            <div className="grid grid-cols-1 gap-3">
                                                {areaUnits.map(u => {
                                                    const state = units.find(val => val.unitId === u.id)!;
                                                    return (
                                                        <div
                                                            key={u.id}
                                                            onMouseEnter={() => setHoveredUnitId(u.id)}
                                                            onMouseLeave={() => setHoveredUnitId(null)}
                                                            className={`group relative flex items-center justify-between p-2.5 rounded-xl border transition-all duration-200 ${hoveredUnitId === u.id ? 'bg-indigo-50/50 border-indigo-200' : 'bg-slate-50 border-slate-100 hover:border-slate-200'}`}
                                                        >
                                                            <span className="text-xs font-bold text-slate-700">
                                                                {u.name}
                                                            </span>
                                                            <div className="flex items-center gap-2">
                                                                <input
                                                                    type="number"
                                                                    min="0"
                                                                    max={state.hours + remainingHours}
                                                                    step="1"
                                                                    value={state.hours}
                                                                    onChange={(e) => updateUnit(u.id, { hours: parseInt(e.target.value) || 0 })}
                                                                    className="w-12 h-7 text-[10px] font-mono font-bold text-center bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                                                                />
                                                                <span className="text-[9px] font-black text-slate-400">H</span>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Explorer Panel */}
                            <div className="hidden md:flex flex-col w-72 shrink-0 h-[60vh] sticky top-0 justify-center">
                                <div className={`p-6 rounded-2xl border transition-all duration-300 min-h-[300px] flex flex-col justify-center ${hoveredUnit ? 'bg-indigo-50/30 border-indigo-200 shadow-xl shadow-indigo-500/5' : 'bg-slate-50 border-slate-100 italic text-slate-400'}`}>
                                    {hoveredUnit ? (
                                        <div className="animate-fade-in">
                                            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-3">Metodología Rainer Strack</p>
                                            <h4 className="text-lg font-bold text-slate-900 mb-2">{hoveredUnit.name}</h4>
                                            <p className="text-xs text-slate-600 mb-6 leading-relaxed font-medium">{hoveredUnit.methodologyNote}</p>
                                            <div className="h-px bg-indigo-100 mb-5" />
                                            <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-3">Ejemplos Estratégicos</p>
                                            <div className="space-y-2">
                                                {hoveredUnit.examples.map((ex, i) => (
                                                    <div key={i} className="flex items-start gap-2">
                                                        <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                                        <span className="text-[11px] text-slate-500 leading-tight">{ex}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <p className="text-xs">Pasa el ratón sobre una actividad para explorar su importancia estratégica.</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Info (only visible on small screens when hovered) */}
                        <div className={`md:hidden p-4 rounded-xl mb-6 transition-all duration-300 ${hoveredUnit ? 'bg-indigo-50/50 border border-indigo-200' : 'hidden'}`}>
                            {hoveredUnit && (
                                <div className="text-xs">
                                    <p className="font-bold text-indigo-600 mb-1">{hoveredUnit.name}</p>
                                    <p className="text-slate-600 leading-relaxed">{hoveredUnit.methodologyNote}</p>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button onClick={prevStep} className="flex-1 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 text-sm">
                                <ChevronLeft size={18} /> Atrás
                            </button>
                            <button
                                onClick={nextStep}
                                disabled={!isValid168}
                                className="btn-primary flex-[2] flex items-center justify-center gap-2 shadow-lg text-sm"
                            >
                                {isValid168 ? 'Ver Resumen' : `Asigna ${remainingHours.toFixed(0)}h más`}
                                {isValid168 && <ChevronRight size={18} />}
                            </button>
                        </div>
                    </div>
                )}


                {/* Step 3: Final Verification */}
                {step === 3 && (
                    <div className="animate-fade-in text-center">
                        <div className="flex justify-center mb-6">
                            <div className="p-5 bg-emerald-50 rounded-full text-emerald-600 shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                <CheckCircle size={64} />
                            </div>
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold premium-gradient-text tracking-tight mb-4">¡Todo listo!</h2>
                        <p className="text-slate-600 mb-12">Tu portafolio de vida ha sido inicializado. Ahora puedes analizar tu estrategia en el tablero principal con una visión clara de tus 168 horas.</p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={prevStep} className="flex-1 px-6 py-3 rounded-xl border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                                <ChevronLeft size={18} /> Atrás
                            </button>
                            <button
                                onClick={() => setOnboardingComplete(true)}
                                className="btn-primary flex-[2] flex items-center justify-center gap-2 shadow-xl"
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
