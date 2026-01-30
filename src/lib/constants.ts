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
    description: "Vínculo emocional primario.",
    methodologyNote: "Activo crítico para la resiliencia a largo plazo. Riesgo: Desatención por inercia profesional. Objetivo: Conectividad intencional y apoyo mutuo.",
    examples: ["Citas sin dispositivos", "Planificación de vida común", "Conversaciones de vulnerabilidad", "Apoyo en proyectos personales", "Rituales de conexión", "Viajes de pareja a solas"],
    areaId: 1
  },
  {
    id: "family", name: "Familia",
    description: "Hijos, padres, hermanos.",
    methodologyNote: "Red de seguridad ancestral. La 'presencia deliberada' construye el legado emocional. Riesgo: Tratarla como tiempo residual.",
    examples: ["Juego activo con hijos", "Cuidado de padres", "Diálogo con hermanos", "Rituales familiares", "Vacaciones enfocadas", "Apoyo en el desarrollo"],
    areaId: 1
  },
  {
    id: "friendship", name: "Amistad",
    description: "Círculos sociales elegidos.",
    methodologyNote: "Sistema de alerta temprana contra el estrés. Proporciona perspectivas externas vitales para evitar la ceguera estratégica personal.",
    examples: ["Cenas sociales", "Apoyo mutuo honesto", "Hobbies compartidos", "Escucha activa", "Contactos de largo plazo", "Colaboración en proyectos"],
    areaId: 1
  },
  // Area 2: Cuerpo, Mente y Espiritualidad
  {
    id: "physical-health", name: "Salud Física / Deportes",
    description: "Mantenimiento del hardware biológico.",
    methodologyNote: "Inversión fundamental en energía y longevidad. Sin mantenimiento preventivo, el rendimiento cognitivo y profesional colapsa.",
    examples: ["Entrenamiento de fuerza", "Cardio para energía", "Nutrición consciente", "Chequeos médicos", "Descanso activo", "Deporte competitivo"],
    areaId: 2
  },
  {
    id: "mental-health", name: "Salud Mental / Mindfulness",
    description: "Bienestar emocional.",
    methodologyNote: "Ventaja competitiva en la era del ruido. El procesamiento emocional previene el burnout y agudiza la toma de decisiones.",
    examples: ["Meditación diaria", "Terapia o coaching", "Journaling reflexivo", "Desconexión digital", "Lectura filosófica", "Práctica de gratitud"],
    areaId: 2
  },
  {
    id: "spirituality", name: "Espiritualidad / Fe",
    description: "Conexión trascendente.",
    methodologyNote: "Brújula moral y sentido de propósito. Ancla la estrategia vital durante las crisis externas inevitables.",
    examples: ["Oración o estudio", "Naturaleza introspectiva", "Investigación ética", "Servicio por fe", "Participación comunitaria", "Silencio contemplativo"],
    areaId: 2
  },
  // Area 3: Comunidad y Sociedad
  {
    id: "community", name: "Comunidad / Ciudadanía",
    description: "Participación cívica local.",
    methodologyNote: "Construcción de capital social y reputación. Mejora el ecosistema inmediato donde operas y vives.",
    examples: ["Juntas de vecinos", "Clubes locales", "Voto e información", "Apoyo a proximidad", "Eventos de barrio", "Liderazgo ciudadano"],
    areaId: 3
  },
  {
    id: "social-engagement", name: "Compromiso Social",
    description: "Mejorar el mundo.",
    methodologyNote: "Uso del talento excedente para la trascendencia. Transforma el éxito personal en significado social (Eudaimonia).",
    examples: ["Voluntariado en ONG", "Mentoring gratuito", "Activismo global", "Trabajo pro-bono", "Donaciones de tiempo", "Liderazgo en causas"],
    areaId: 3
  },
  // Area 4: Trabajo, Aprendizaje y Finanzas
  {
    id: "work", name: "Trabajo / Carrera",
    description: "Creación de valor económico.",
    methodologyNote: "Motor profesional. El reto es maximizar el impacto sin permitir que canibalice las demás áreas fundamentales.",
    examples: ["Deep work enfocado", "Gestión de equipos", "Networking estratégico", "Proyectos de impacto", "Desarrollo de negocio", "Planificación de carrera"],
    areaId: 4
  },
  {
    id: "education", name: "Educación / Aprendizaje",
    description: "Inversión en capital humano.",
    methodologyNote: "Única ventaja sostenible en entornos volátiles. El aprendizaje continuo es el seguro contra la obsolescencia.",
    examples: ["Postgrados o cursos", "Actualización técnica", "Idiomas o artes", "Lectura de no ficción", "Seminarios y congresos", "Nuevas habilidades"],
    areaId: 4
  },
  {
    id: "finances", name: "Finanzas",
    description: "Planificación de recursos.",
    methodologyNote: "Logística del capital. Una gestión deficiente genera un estrés prohibitivo para la creatividad y la libertad de elección.",
    examples: ["Inversiones", "Control presupuestario", "Educación fiscal", "Planes de retiro", "Optimización de gastos", "Ingresos diversificados"],
    areaId: 4
  },
  // Area 5: Intereses y Entretenimiento
  {
    id: "hobbies", name: "Hobbies / Intereses",
    description: "Placer recreativo.",
    methodologyNote: "Santuarío de la creatividad lateral. Permite el 'estado de flujo', reseteando procesos cognitivos saturados.",
    examples: ["Cocina creativa", "Fotografía o artes", "Carpintería/Jardinería", "Coleccionismo", "Escritura o música", "Actividades manuales"],
    areaId: 5
  },
  {
    id: "online-ent", name: "Entretenimiento Online",
    description: "Consumo digital.",
    methodologyNote: "Riesgo: Consumo pasivo infinito. Debe ser ocio intencional (cine, videojuegos artísticos) para aportar descanso real.",
    examples: ["Cine/Series de calidad", "Videojuegos narrativos", "Podcasts educativos", "Arte digital", "Juegos sociales", "Contenido visual"],
    areaId: 5
  },
  {
    id: "offline-ent", name: "Entretenimiento Offline",
    description: "Experiencias físicas.",
    methodologyNote: "Reconexión sensorial radical. Genera recuerdos más profundos y vitalidad que las simulaciones digitales.",
    examples: ["Teatro o conciertos", "Viajes de aventura", "Museos y galerías", "Eventos presenciales", "Gastronomía", "Bienestar físico"],
    areaId: 5
  },
  // Area 6: Cuidado Personal
  {
    id: "physiological", name: "Necesidades Fisiológicas",
    description: "Fundamentos biológicos.",
    methodologyNote: "Base no negociable. El sueño de calidad es el multiplicador de productividad definitivo del sistema.",
    examples: ["Dormir 7-9 horas", "Nutrición equilibrada", "Higiene personal", "Siestas breves", "Hidratación", "Descanso total"],
    areaId: 6
  },
  {
    id: "daily-activities", name: "Actividades Diarias",
    description: "Mantenimiento cotidiano.",
    methodologyNote: "Inercia logística. El objetivo es optimizar o delegar para liberar tiempo hacia las áreas de alto impacto estratégico.",
    examples: ["Tareas del hogar", "Trámites y facturas", "Traslados (commute)", "Compras y recados", "Mantenimiento", "Logística familiar"],
    areaId: 6
  },
];

export interface LifeUnitState {
  unitId: string;
  hours: number;
  importance: number;
  satisfaction: number;
}
