export interface LifeUnit {
  id: string;
  name: string;
  description: string;
  areaId: number;
}

export interface LifeArea {
  id: number;
  name: string;
  color: string;
}

export const LIFE_AREAS: LifeArea[] = [
  { id: 1, name: "Relaciones", color: "var(--area-1)" },
  { id: 2, name: "Cuerpo, Mente y Espiritualidad", color: "var(--area-2)" },
  { id: 3, name: "Comunidad y Sociedad", color: "var(--area-3)" },
  { id: 4, name: "Trabajo, Aprendizaje y Finanzas", color: "var(--area-4)" },
  { id: 5, name: "Intereses y Entretenimiento", color: "var(--area-5)" },
  { id: 6, name: "Cuidado Personal", color: "var(--area-6)" },
];

export const LIFE_UNITS: LifeUnit[] = [
  // Area 1: Relaciones
  { id: "partner", name: "Pareja", description: "Tiempo con la pareja, citas.", areaId: 1 },
  { id: "family", name: "Familia", description: "Interactuar con hijos, padres, hermanos.", areaId: 1 },
  { id: "friendship", name: "Amistad", description: "Tiempo con amigos.", areaId: 1 },
  // Area 2: Cuerpo, Mente y Espiritualidad
  { id: "physical-health", name: "Salud Física / Deportes", description: "Ejercicio, terapia física.", areaId: 2 },
  { id: "mental-health", name: "Salud Mental / Mindfulness", description: "Psicoterapia, meditación.", areaId: 2 },
  { id: "spirituality", name: "Espiritualidad / Fe", description: "Práctica religiosa o espiritual.", areaId: 2 },
  // Area 3: Comunidad y Sociedad
  { id: "community", name: "Comunidad / Ciudadanía", description: "Membresía en clubes locales, deberes cívicos.", areaId: 3 },
  { id: "social-engagement", name: "Compromiso Social", description: "Voluntariado, activismo.", areaId: 3 },
  // Area 4: Trabajo, Aprendizaje y Finanzas
  { id: "work", name: "Trabajo / Carrera", description: "Horas laborales.", areaId: 4 },
  { id: "education", name: "Educación / Aprendizaje", description: "Clases, entrenamiento, formación.", areaId: 4 },
  { id: "finances", name: "Finanzas", description: "Planificación financiera, inversiones.", areaId: 4 },
  // Area 5: Intereses y Entretenimiento
  { id: "hobbies", name: "Hobbies / Intereses", description: "Lectura, coleccionismo, pasatiempos.", areaId: 5 },
  { id: "online-ent", name: "Entretenimiento Online", description: "Redes sociales, TV, Gaming.", areaId: 5 },
  { id: "offline-ent", name: "Entretenimiento Offline", description: "Vacaciones, teatro, eventos deportivos.", areaId: 5 },
  // Area 6: Cuidado Personal
  { id: "physiological", name: "Necesidades Fisiológicas", description: "Comer, dormir.", areaId: 6 },
  { id: "daily-activities", name: "Actividades Diarias", description: "Transporte, tareas domésticas.", areaId: 6 },
];

export interface LifeUnitState {
  unitId: string;
  hours: number;
  importance: number;
  satisfaction: number;
}
