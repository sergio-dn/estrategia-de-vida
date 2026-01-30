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
    methodologyNote: "Esta unidad es el núcleo de tu soporte emocional primario. El objetivo no es solo 'estar juntos', sino 'conectar profundamente'. La inversión en tu pareja tiene un retorno exponencial en estabilidad mental y resiliencia ante crisis externas.",
    examples: ["Citas sin pantallas", "Planificación de vida común", "Conversaciones de vulnerabilidad", "Apoyar sus proyectos personales"],
    areaId: 1
  },
  {
    id: "family", name: "Familia",
    description: "Interactuar con hijos, padres, hermanos.",
    methodologyNote: "Tu red de seguridad ancestral. En estrategia de vida, la familia requiere tiempo intencional para construir memorias y legados. Es un error común tratar este tiempo como 'residual' en lugar de estratégico.",
    examples: ["Juegos sin interrupciones con hijos", "Cuidado de padres", "Rituales familiares", "Conversaciones profundas con hermanos"],
    areaId: 1
  },
  {
    id: "friendship", name: "Amistad",
    description: "Tiempo dedicado a tus amigos y círculos sociales cercanos.",
    methodologyNote: "Los amigos son la familia que eliges. Proporcionan perspectivas externas y un apoyo social que reduce drásticamente el cortisol y aumenta el sentido de pertenencia en el mundo.",
    examples: ["Salidas grupales", "Apoyo en momentos difíciles", "Hobbies compartidos", "Mantener contacto con amigos lejanos"],
    areaId: 1
  },
  // Area 2: Cuerpo, Mente y Espiritualidad
  {
    id: "physical-health", name: "Salud Física / Deportes",
    description: "Mantenimiento proactivo de tu cuerpo.",
    methodologyNote: "Tu cuerpo es tu único activo no reemplazable. El ejercicio y el deporte no son ocio, son 'mantenimiento preventivo crítico'. Sin energía física, todas las demás estrategias de vida colapsarán eventualmente.",
    examples: ["Entrenamiento de fuerza", "Cardio", "Preparación de comida saludable", "Fisioterapia y masajes"],
    areaId: 2
  },
  {
    id: "mental-health", name: "Salud Mental / Mindfulness",
    description: "Bienestar emocional y psicológico.",
    methodologyNote: "La claridad mental es tu ventaja competitiva. El tiempo dedicado a procesar emociones y reducir el ruido cognitivo es vital para la toma de decisiones complejas y la paz interior.",
    examples: ["Terapia psicológica", "Meditación diaria", "Journaling (escribir)", "Retiros de silencio"],
    areaId: 2
  },
  {
    id: "spirituality", name: "Espiritualidad / Fe",
    description: "Práctica que conecta con algo más grande.",
    methodologyNote: "Busca dar sentido al sufrimiento y encontrar propósito más allá del ego. Proporciona una brújula moral y una sensación de paz que trasciende las circunstancias externas.",
    examples: ["Oración o prácticas religiosas", "Conexión profunda con la naturaleza", "Estudio filosófico", "Servicio desinteresado"],
    areaId: 2
  },
  // Area 3: Comunidad y Sociedad
  {
    id: "community", name: "Comunidad / Ciudadanía",
    description: "Participación en grupos locales o cívicos.",
    methodologyNote: "Tu impacto en el entorno inmediato. Ser un ciudadano activo fortalece el tejido social y te posiciona como un colaborador valioso en tu ecosistema local.",
    examples: ["Asociaciones de vecinos", "Clubes deportivos locales", "Voluntariado en colegios", "Deberes cívicos activos"],
    areaId: 3
  },
  {
    id: "social-engagement", name: "Compromiso Social",
    description: "Acciones para mejorar la sociedad.",
    methodologyNote: "Trasciende tu beneficio personal para impactar positivamente al mundo. Generar valor social produce un nivel de satisfacción profunda que el consumo personal nunca puede igualar.",
    examples: ["Activismo por causas globales", "Mentoring gratuito", "Donaciones de tiempo estratégicas", "Proyectos pro-bono"],
    areaId: 3
  },
  // Area 4: Trabajo, Aprendizaje y Finanzas
  {
    id: "work", name: "Trabajo / Carrera",
    description: "Ejecución de actividades laborales y profesionales.",
    methodologyNote: "Tu motor de creación de valor económico y profesional. El desafío es maximizar el impacto y el crecimiento sin permitir que esta unidad canibalice injustificadamente a las demás.",
    examples: ["Deep work o trabajo profundo", "Gestión de equipo", "Networking profesional", "Ejecución de proyectos clave"],
    areaId: 4
  },
  {
    id: "education", name: "Educación / Aprendizaje",
    description: "Inversión en conocimiento y habilidades.",
    methodologyNote: "Inversión en 'Capital Humano'. En un mundo volátil, tu capacidad de aprender es tu mayor seguro. El aprendizaje no termina nunca; es un proceso estratégico de por vida.",
    examples: ["Postgrados o certificaciones", "Aprender un idioma o instrumento", "Lectura de libros no ficción", "Práctica de nuevas habilidades"],
    areaId: 4
  },
  {
    id: "finances", name: "Finanzas",
    description: "Gestión y planificación de recursos económicos.",
    methodologyNote: "Administración del capital que financia tu estilo de vida. Una gestión financiera inteligente reduce el estrés y te otorga el lujo de poder elegir con qué personas y en qué proyectos pasar el tiempo.",
    examples: ["Revisión de inversiones", "Planificación fiscal", "Presupuesto familiar", "Educación financiera personal"],
    areaId: 4
  },
  // Area 5: Intereses y Entretenimiento
  {
    id: "hobbies", name: "Hobbies / Intereses",
    description: "Actividades recreativas elegidas por placer.",
    methodologyNote: "El espacio para el juego y la curiosidad. Los hobbies inducen estados de 'Flujo' donde el tiempo desaparece, permitiendo un reseteo cognitivo fundamental para la creatividad.",
    examples: ["Cocina creativa", "Fotografía", "Bricolaje", "Coleccionismo o modelismo"],
    areaId: 5
  },
  {
    id: "online-ent", name: "Entretenimiento Online",
    description: "Consumo de medios y entretenimiento en línea.",
    methodologyNote: "Atención: Es la unidad más propensa al consumo pasivo destructivo. Debe ser ocio recreativo real (cine, videojuegos artísticos) en lugar de scroll infinito sin propósito.",
    examples: ["Ver cine o series de calidad", "Videojuegos seleccionados", "Podcasts educativos", "Arte digital"],
    areaId: 5
  },
  {
    id: "offline-ent", name: "Entretenimiento Offline",
    description: "Experiencias recreativas físicas.",
    methodologyNote: "Desconexión radical de las pantallas. Las experiencias en el mundo físico generan memorias multisensoriales mucho más potentes y duraderas que las digitales.",
    examples: ["Teatro", "Conciertos", "Museos y galerías", "Viajes recreativos"],
    areaId: 5
  },
  // Area 6: Cuidado Personal
  {
    id: "physiological", name: "Necesidades Fisiológicas",
    description: "Funciones biológicas fundamentales.",
    methodologyNote: "El pilar no negociable. El sueño, la nutrición y el descanso básico son los cimientos. Son el combustible sobre el cual se construye todo tu sistema de vida.",
    examples: ["Dormir 7-9 horas", "Alimentación consciente", "Cuidado de la piel e higiene", "Descanso activo"],
    areaId: 6
  },
  {
    id: "daily-activities", name: "Actividades Diarias",
    description: "Mantenimiento de la vida cotidiana.",
    methodologyNote: "El 'ruido' logístico. Estas actividades deben ser minimizadas, optimizadas o automatizadas. Menos tiempo aquí significa más tiempo para tus áreas de alto impacto estratégico.",
    examples: ["Aseo del hogar", "Trámites", "Desplazamientos", "Compras del súper"],
    areaId: 6
  },
];



export interface LifeUnitState {
  unitId: string;
  hours: number;
  importance: number;
  satisfaction: number;
}
