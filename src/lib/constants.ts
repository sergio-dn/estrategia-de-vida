export interface LifeUnit {
  id: string;
  name: string;
  description: string;
  methodologyNote: string;
  examples: string[];
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
  {
    id: "partner", name: "Pareja",
    description: "Tiempo de calidad con tu compañero/a de vida.",
    methodologyNote: "Relaciones íntimas profundas son el predictor de felicidad más robusto según estudios longitudinales.",
    examples: ["Citas nocturnas", "Conversaciones profundas", "Viajes juntos"],
    areaId: 1
  },
  {
    id: "family", name: "Familia",
    description: "Interactuar con hijos, padres, hermanos.",
    methodologyNote: "El apoyo familiar crea una red de seguridad emocional indispensable para la resiliencia.",
    examples: ["Cenas familiares", "Jugar con hijos", "Visitar a padres"],
    areaId: 1
  },
  {
    id: "friendship", name: "Amistad",
    description: "Tiempo dedicado a tus amigos y círculos sociales cercanos.",
    methodologyNote: "Las amistades reducen el estrés y aumentan el sentido de pertenencia.",
    examples: ["Salidas con amigos", "Llamadas de apoyo", "Asados o juntas"],
    areaId: 1
  },
  // Area 2: Cuerpo, Mente y Espiritualidad
  {
    id: "physical-health", name: "Salud Física / Deportes",
    description: "Mantenimiento proactivo de tu cuerpo.",
    methodologyNote: "La energía física es la base de todo rendimiento estratégico personal.",
    examples: ["Gimnasio", "Deportes", "Chequeos médicos"],
    areaId: 2
  },
  {
    id: "mental-health", name: "Salud Mental / Mindfulness",
    description: "Bienestar emocional y psicológico.",
    methodologyNote: "Invertir en claridad mental previene el agotamiento y mejora la toma de decisiones.",
    examples: ["Terapia", "Meditación", "Journaling"],
    areaId: 2
  },
  {
    id: "spirituality", name: "Espiritualidad / Fe",
    description: "Práctica que conecta con algo más grande.",
    methodologyNote: "Proporciona un marco ético y sentido de propósito trascendente.",
    examples: ["Práctica religiosa", "Conexión con la naturaleza", "Estudio de filosofía"],
    areaId: 2
  },
  // Area 3: Comunidad y Sociedad
  {
    id: "community", name: "Comunidad / Ciudadanía",
    description: "Participación en grupos locales o cívicos.",
    methodologyNote: "El capital social se construye a través del servicio y la participación activa.",
    examples: ["Clubes de barrio", "Junta de vecinos", "Eventos comunitarios"],
    areaId: 3
  },
  {
    id: "social-engagement", name: "Compromiso Social",
    description: "Acciones para mejorar la sociedad.",
    methodologyNote: "Generar impacto positivo fuera de uno mismo aumenta los niveles de satisfacción profunda.",
    examples: ["Voluntariado", "Activismo", "Donaciones activas"],
    areaId: 3
  },
  // Area 4: Trabajo, Aprendizaje y Finanzas
  {
    id: "work", name: "Trabajo / Carrera",
    description: "Ejecución de actividades laborales y profesionales.",
    methodologyNote: "Debe ser un vehículo de crecimiento, no solo una fuente de ingresos.",
    examples: ["Horas de oficina", "Reuniones", "Proyectos clave"],
    areaId: 4
  },
  {
    id: "education", name: "Educación / Aprendizaje",
    description: "Inversión en conocimiento y habilidades.",
    methodologyNote: "El aprendizaje permanente es la mejor póliza contra la obsolescencia.",
    examples: ["Cursos", "Lectura técnica", "Idiomas"],
    areaId: 4
  },
  {
    id: "finances", name: "Finanzas",
    description: "Gestión y planificación de recursos económicos.",
    methodologyNote: "La libertad financiera permite elegir con qué personas y en qué proyectos pasar el tiempo.",
    examples: ["Planificación de presupuesto", "Inversiones", "Revisión de cuentas"],
    areaId: 4
  },
  // Area 5: Intereses y Entretenimiento
  {
    id: "hobbies", name: "Hobbies / Intereses",
    description: "Actividades recreativas elegidas por placer.",
    methodologyNote: "Permiten entrar en estado de 'Flujo', esencial para la recuperación cognitiva.",
    examples: ["Música", "Pintura", "Coleccionismo"],
    areaId: 5
  },
  {
    id: "online-ent", name: "Entretenimiento Online",
    description: "Consumo de medios y entretenimiento en línea.",
    methodologyNote: "Cuidado: Puede convertirse en un sumidero de tiempo si no es intencional.",
    examples: ["Redes sociales", "Streaming", "Videojuegos"],
    areaId: 5
  },
  {
    id: "offline-ent", name: "Entretenimiento Offline",
    description: "Experiencias recreativas físicas.",
    methodologyNote: "Las experiencias fuera de pantalla tienden a generar memorias más duraderas.",
    examples: ["Teatro", "Conciertos", "Viajes recreativos"],
    areaId: 5
  },
  // Area 6: Cuidado Personal
  {
    id: "physiological", name: "Necesidades Fisiológicas",
    description: "Funciones biológicas fundamentales.",
    methodologyNote: "No negociables; el sueño de calidad es el multiplicador número uno de productividad.",
    examples: ["Dormir (Slep)", "Alimentación consciente", "Higiene"],
    areaId: 6
  },
  {
    id: "daily-activities", name: "Actividades Diarias",
    description: "Mantenimiento de la vida cotidiana.",
    methodologyNote: "Meta: Optimizar o delegar para liberar tiempo hacia áreas de mayor importancia estratégica.",
    examples: ["Aseo del hogar", "Trámites", "Desplazamientos"],
    areaId: 6
  },
];


export interface LifeUnitState {
  unitId: string;
  hours: number;
  importance: number;
  satisfaction: number;
}
