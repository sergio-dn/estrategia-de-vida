"use client";

import React from 'react';
import { useLife } from '@/context/LifeContext';
import { LIFE_UNITS, LIFE_AREAS } from '@/lib/constants';
import MatrixChart from '@/components/MatrixChart';
import InsightsPanel from '@/components/InsightsPanel';
import Onboarding from '@/components/Onboarding';
import { Settings, Heart, Zap, Target, Users, Coffee, Info, AlertTriangle, RotateCcw } from 'lucide-react';

export default function Home() {
  const { units, updateUnit, totalHours, remainingHours, isOnboardingComplete, userVision, resetAll } = useLife();

  if (!isOnboardingComplete) {
    return <Onboarding />;
  }

  const getIcon = (areaId: number) => {
    switch (areaId) {
      case 1: return <Users size={16} />;
      case 2: return <Heart size={16} />;
      case 3: return <Target size={16} />;
      case 4: return <Zap size={16} />;
      case 5: return <Coffee size={16} />;
      case 6: return <Settings size={16} />;
      default: return <Info size={16} />;
    }
  };

  return (
    <main className="min-h-screen p-4 sm:p-6 lg:p-12 animate-fade-in">
      <header className="mb-8 sm:mb-12 flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold premium-gradient-text mb-2 tracking-tight">Estrategia de Vida</h1>
          <p className="text-text-dim max-w-lg mb-4">Transforma tu vida aplicando principios de estrategia corporativa.</p>
          {userVision && (
            <div className="inline-block px-4 py-2 rounded-lg bg-indigo-500/5 border border-indigo-500/10 text-indigo-400 text-sm italic">
              &ldquo;{userVision}&rdquo;
            </div>
          )}
        </div>

        <div className={`glass-card px-6 py-4 flex flex-col items-center justify-center border-2 shrink-0 ${totalHours === 168 ? 'border-emerald-500' : 'border-pink-500/50'}`}>
          <span className="text-xs uppercase font-bold tracking-widest text-text-dim mb-1">Total Horas</span>
          <span className={`text-2xl font-black ${totalHours === 168 ? 'text-emerald-400' : 'text-pink-400'}`}>
            {totalHours.toFixed(1)} / 168
          </span>
          {remainingHours > 0 && (
            <div className="text-[10px] text-text-dim mt-1 font-bold">
              Restantes: {remainingHours.toFixed(1)}h
            </div>
          )}
          {totalHours !== 168 && remainingHours <= 0 && (
            <div className="flex items-center gap-1 text-[10px] text-pink-400 mt-1 font-bold">
              <AlertTriangle size={10} />
              Exceso de tiempo
            </div>
          )}
        </div>
      </header>

      <div className="flex flex-col lg:grid lg:grid-cols-3 gap-8">
        {/* Visual Matrix */}
        <div className="lg:col-span-2 glass-card overflow-hidden flex flex-col">
          <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-dim">Matriz Estratégica</h2>
            <div className="flex gap-4 text-[10px] text-text-dim uppercase font-bold">
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-400" /> Urgencia</span>
              <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400" /> Éxito</span>
            </div>
          </div>
          <div className="flex-1 min-h-[300px] sm:min-h-[400px]">
            <MatrixChart />
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="glass-card flex flex-col overflow-hidden">
          <div className="p-4 border-b border-white/5 flex justify-between items-center">
            <h2 className="text-sm font-bold uppercase tracking-widest text-text-dim">Simulador de Cartera</h2>
            <span className={`text-xs font-mono font-bold ${remainingHours >= 0 ? 'text-emerald-500' : 'text-pink-500'}`}>
              Libres: {remainingHours.toFixed(1)}h
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-4 pt-10 custom-scrollbar">
            {LIFE_AREAS.map((area) => {
              const areaUnits = LIFE_UNITS.filter(u => u.areaId === area.id);
              return (
                <div key={area.id} className="mb-8 last:mb-0">
                  <h3 className="text-xs font-black uppercase tracking-widest mb-4 flex items-center gap-2" style={{ color: area.color }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: area.color }} />
                    {area.name}
                  </h3>

                  <div className="space-y-4">
                    {areaUnits.map((u) => {
                      const state = units.find(val => val.unitId === u.id)!;
                      return (
                        <div key={u.id} className="group relative">
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors cursor-help peer">
                                {u.name}
                              </span>
                              {/* Tooltip */}
                              <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-72 sm:w-80 p-4 bg-white border border-slate-200 shadow-2xl rounded-2xl z-[100] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 pointer-events-none origin-bottom scale-95 group-hover:scale-100 backdrop-blur-sm bg-white/95">
                                <div className="relative">
                                  <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2">Metodología Rainer Strack</p>
                                  <p className="text-xs text-slate-700 mb-3 leading-relaxed font-medium">{u.methodologyNote}</p>
                                  <div className="h-px bg-slate-100 mb-3" />
                                  <p className="text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-2">Ejemplos Clave</p>
                                  <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                                    {u.examples.map((ex, i) => (
                                      <div key={i} className="flex items-start gap-1">
                                        <div className="w-1 h-1 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                                        <span className="text-[10px] text-slate-500 leading-tight">{ex}</span>
                                      </div>
                                    ))}
                                  </div>
                                  {/* Triangle pointer */}
                                  <div className="absolute -bottom-[21px] left-1/2 -translate-x-1/2 border-8 border-transparent border-t-white drop-shadow-sm" />
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2">
                              <input
                                type="number"
                                min="0"
                                max={state.hours + remainingHours}
                                step="0.5"
                                value={state.hours}
                                onChange={(e) => updateUnit(u.id, { hours: parseFloat(e.target.value) || 0 })}
                                className="w-16 h-8 text-xs font-mono font-bold text-center bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                              />
                              <span className="text-[10px] font-bold text-slate-400 uppercase">hrs</span>
                            </div>
                          </div>

                          <div className="flex gap-4">
                            <div className="flex-1 flex items-center gap-2">
                              <span className="text-[9px] uppercase font-bold text-slate-400 shrink-0 w-8">Sat</span>
                              <input
                                type="range"
                                min="0"
                                max="10"
                                step="1"
                                value={state.satisfaction}
                                onChange={(e) => updateUnit(u.id, { satisfaction: parseInt(e.target.value) })}
                                className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                              />
                            </div>
                            <div className="flex-1 flex items-center gap-2">
                              <span className="text-[9px] uppercase font-bold text-slate-400 shrink-0 w-8">Imp</span>
                              <input
                                type="range"
                                min="0"
                                max="10"
                                step="1"
                                value={state.importance}
                                onChange={(e) => updateUnit(u.id, { importance: parseInt(e.target.value) })}
                                className="w-full h-1 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-pink-500"
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <InsightsPanel />

      <footer className="mt-8 flex flex-col items-center gap-4">
        <button
          onClick={resetAll}
          className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 text-text-dim text-sm font-semibold hover:bg-white/5 hover:text-white transition-all"
        >
          <RotateCcw size={14} />
          Reiniciar
        </button>
        <p className="text-text-dim text-xs opacity-50">
          &ldquo;La suerte es cuando la preparación se encuentra con la oportunidad&rdquo; — Séneca
        </p>
      </footer>
    </main>
  );
}
