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
    methodologyNote: "Esta unidad representa el vínculo emocional primario. Rainer Strack enfatiza que el éxito en esta área no es 'tiempo compartido', sino 'conectividad intencional'. Los profesionales de alto desempeño a menudo subestiman este activo, resultando en un agotamiento emocional que drena la productividad laboral.",
    examples: ["Citas semanales sin distracciones digitales", "Planificación estratégica de vida en pareja", "Conversaciones de vulnerabilidad y apoyo", "Viajes de reconexión profunda", "Gestos de aprecio significativos", "Rituales de comunicación diaria"],
    areaId: 1
  },
  {
    id: "family", name: "Familia",
    description: "Interactuar con hijos, padres, hermanos.",
    methodologyNote: "Tu red de soporte ancestral y biológica. La estrategia aquí se basa en la 'presencia deliberada' para construir un legado emocional. Ignorar a la familia bajo la excusa del trabajo crea una deuda estratégica que raras veces se puede saldar retrospectivamente.",
    examples: ["Tiempo recreativo con hijos sin pantallas", "Cuidar la relación con los padres", "Conversaciones profundas con hermanos", "Rituales familiares y tradiciones", "Vacaciones familiares enfocadas en conexión", "Apoyo en el desarrollo de los hijos"],
    areaId: 1
  },
  {
    id: "friendship", name: "Amistad",
    description: "Tiempo dedicado a tus amigos y círculos sociales.",
    methodologyNote: "Los amigos son tu familia elegida y actúan como un sistema de alerta temprana contra el estrés. Proporcionan perspectivas externas que evitan el pensamiento de túnel y fomentan la resiliencia social indispensable para el liderazgo.",
    examples: ["Salidas grupales o cenas sociales", "Conversaciones honestas de apoyo mutuo", "Actividades recreativas compartidas", "Escuchar y aconsejar estratégicamente", "Mantener vivo el contacto de largo plazo", "Colaborar en proyectos de amigos"],
    areaId: 1
  },
  // Area 2: Cuerpo, Mente y Espiritualidad
  {
    id: "physical-health", name: "Salud Física / Deportes",
    description: "Mantenimiento proactivo de tu cuerpo.",
    methodologyNote: "Tu cuerpo es el hardware único de tu existencia. Sin mantenimiento preventivo (ejercicio y nutrición), el rendimiento del sistema decae, afectando la toma de decisiones y la longevidad de tu carrera profesional.",
    examples: ["Entrenamiento de fuerza y resistencia", "Cardio para optimización de energía", "Preparación consciente de comidas", "Chequeos médicos preventivos", "Sesiones de fisioterapia o descanso activo", "Actividades deportivas competitivas"],
    areaId: 2
  },
  {
    id: "mental-health", name: "Salud Mental / Mindfulness",
    description: "Bienestar emocional y psicológico.",
    methodologyNote: "La claridad mental es tu ventaja competitiva en la era de la distracción. Invertir tiempo en procesar pensamientos y emociones previene el 'burnout' y permite una ejecución precisa de tu estrategia vital.",
    examples: ["Meditación diaria y respiración", "Terapia o coaching profesional", "Escritura introspectiva (Journaling)", "Retiros de silencio para enfoque", "Lectura de psicología y filosofía", "Práctica diaria de gratitud"],
    areaId: 2
  },
  {
    id: "spirituality", name: "Espiritualidad / Fe",
    description: "Práctica que conecta con algo más grande.",
    methodologyNote: "Proporciona una brújula moral y un sentido de propósito que trasciende el ego. Actúa como el 'sentido de dirección' de tu estrategia, anclándote durante las crisis externas inevitables.",
    examples: ["Oración o estudio religioso", "Contemplación introspectiva en la naturaleza", "Investigación filosófica profunda", "Servicio desinteresado por fe", "Participación en comunidades de fe", "Momentos de silencio sagrado"],
    areaId: 2
  },
  // Area 3: Comunidad y Sociedad
  {
    id: "community", name: "Comunidad / Ciudadanía",
    description: "Participación en grupos locales o cívicos.",
    methodologyNote: "Tu impacto en el ecosistema inmediato. Ser un ciudadano activo construye capital social y reputación, factores que indirectamente potencian tu red profesional y tu seguridad personal a largo plazo.",
    examples: ["Asociaciones de vecinos o juntas locales", "Participación en clubes deportivos", "Activismo cívico o voto informado", "Apoyo a negocios de proximidad", "Organización de eventos de barrio", "Liderazgo en iniciativas ciudadanas"],
    areaId: 3
  },
  {
    id: "social-engagement", name: "Compromiso Social",
    description: "Acciones para mejorar la sociedad.",
    methodologyNote: "La trascendencia a través del servicio social transforma una vida exitosa en una vida significativa (Eudaimonia). Es el uso del talento excedente para equilibrar las desigualdades del sistema.",
    examples: ["Voluntariado en ONGs", "Mentoring gratuito para talentos jóvenes", "Activismo por causas globales", "Proyectos pro-bono profesionales", "Donaciones estratégicas de tiempo", "Liderazgo en causas sociales"],
    areaId: 3
  },
  // Area 4: Trabajo, Aprendizaje y Finanzas
  {
    id: "work", name: "Trabajo / Carrera",
    description: "Ejecución de actividades laborales.",
    methodologyNote: "Tu principal motor de creación de valor. El reto estratégico es maximizar el retorno profesional sin permitir que esta unidad canibalice ciegamente las otras 5 áreas fundamentales de tu vida.",
    examples: ["Trabajo profundo de alta concentración", "Gestión estratégica de equipos", "Networking y alianzas claves", "Ejecución de proyectos de impacto", "Planificación de carrera a 5 años", "Desarrollo de nuevos modelos de negocio"],
    areaId: 4
  },
  {
    id: "education", name: "Educación / Aprendizaje",
    description: "Inversión en conocimiento y habilidades.",
    methodologyNote: "Inversión en tu Capital Humano. En un entorno volátil, tu capacidad de aprendizaje es tu única ventaja sostenible. Como dice Strack, el aprendizaje debe ser un proceso continuo de por vida.",
    examples: ["Estudios universitarios o postgrados", "Cursos de actualización técnica", "Aprender idiomas o nuevas artes", "Lectura crítica de libros de no ficción", "Asistencia a conferencias y seminarios", "Práctica de nuevas habilidades digitales"],
    areaId: 4
  },
  {
    id: "finances", name: "Finanzas",
    description: "Gestión y planificación de recursos económicos.",
    methodologyNote: "Administración del capital que financia tu estrategia. Una gestión deficiente genera un estrés que inhabilita la toma de decisiones creativas en las demás áreas de tu portafolio personal.",
    examples: ["Planificación de inversiones", "Control y revisión de presupuestos", "Educación financiera y fiscal", "Revisión de planes de retiro", "Optimización de gastos fijos", "Búsqueda de ingresos diversificados"],
    areaId: 4
  },
  // Area 5: Intereses y Entretenimiento
  {
    id: "hobbies", name: "Hobbies / Intereses",
    description: "Actividades recreativas elegidas por placer.",
    methodologyNote: "El espacio para la creatividad lateral y el 'Flujo'. Los hobbies permiten resetear los procesos cognitivos saturados por el trabajo, fomentando una agilidad mental superior.",
    examples: ["Cocina creativa como hobby", "Fotografía o artes visuales", "Carpintería o jardinería manual", "Coleccionismo o modelismo", "Escritura creativa o música", "Cualquier actividad de 'flujo' personal"],
    areaId: 5
  },
  {
    id: "online-ent", name: "Entretenimiento Online",
    description: "Consumo de medios en línea.",
    methodologyNote: "CUIDADO: Es la unidad más propensa al consumo pasivo. Debe ser ocio recreativo real y elegido (cine, videojuegos artísticos) para evitar el desperdicio involuntario de tiempo estratégico.",
    examples: ["Ver cine o series seleccionadas", "Videojuegos con valor narrativo", "Escucha atenta de podcasts", "Arte digital y exploración online", "Participación en juegos sociales", "Búsqueda de contenido educativo visual"],
    areaId: 5
  },
  {
    id: "offline-ent", name: "Entretenimiento Offline",
    description: "Experiencias recreativas físicas.",
    methodologyNote: "Reconexión con el mundo real y sensorial. Las experiencias fuera de la pantalla generan recuerdos más duraderos y una sensación de vitalidad que las simulaciones digitales no pueden igualar.",
    examples: ["Teatro, ópera o conciertos", "Viajes de exploración y turismo", "Visitas a museos y exposiciones", "Eventos deportivos presenciales", "Gastronomía y catas fuera de casa", "Experiencias multisensoriales físicas"],
    areaId: 5
  },
  // Area 6: Cuidado Personal
  {
    id: "physiological", name: "Necesidades Fisiológicas",
    description: "Funciones biológicas fundamentales.",
    methodologyNote: "La base no negociable. El sueño de calidad es el multiplicador número uno de la productividad. Descuidar esta base hace que cada hora invertida en otras áreas sea ineficiente y propensa al error.",
    examples: ["Dormir un mínimo de 7-8 horas", "Alimentación equilibrada y atenta", "Higiene y cuidado físico básico", "Siestas de recuperación corta", "Hidratación y cuidado de la piel", "Momentos de descanso biológico"],
    areaId: 6
  },
  {
    id: "daily-activities", name: "Actividades Diarias",
    description: "Mantenimiento de la vida cotidiana.",
    methodologyNote: "El 'ruido logístico' inevitable. El objetivo estratégico debe ser siempre : Minimizar, Optimizar o Delegar, para liberar tiempo hacia las áreas de alto impacto directo en tu visión.",
    examples: ["Tareas domésticas y de orden", "Trámites administrativos y facturas", "Traslados y conmuting inevitable", "Compras de logística doméstica", "Mantenimiento del hogar o coche", "Gestiones familiares de rutina"],
    areaId: 6
  },
];

export interface LifeUnitState {
  unitId: string;
  hours: number;
  importance: number;
  satisfaction: number;
}
