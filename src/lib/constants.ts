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
    methodologyNote: "Esta unidad representa la relación más crítica para tu bienestar a largo plazo. Según Rainer Strack, no se trata solo de convivir, sino de invertir en 'conectividad emocional'. El descuido sistemático de esta área es uno de los mayores riesgos estratégicos detectados en profesionales de alto rendimiento. Requiere rituales de conexión que trasciendan la logística diaria para mantener el vínculo vivo y resiliente.",
    examples: ["Citas semanales sin dispositivos móviles", "Planificación de objetivos de vida en conjunto", "Conversaciones profundas de vulnerabilidad", "Apoyar activamente sus proyectos y pasiones", "Viajes de reconexión a solas", "Pequeños gestos de aprecio diarios"],
    areaId: 1
  },
  {
    id: "family", name: "Familia",
    description: "Interactuar con hijos, padres, hermanos.",
    methodologyNote: "Tu red de seguridad biológica y ancestral. La estrategia aquí se centra en la 'presencia deliberada'. No es tiempo residual que queda después del trabajo; es tiempo protegido para construir la cultura familiar y el sentido de identidad. La calidad del tiempo con hijos en sus etapas formativas tiene un impacto generacional irreversible. Con los padres, representa el cierre de ciclos y la gratitud activa.",
    examples: ["Juegos y lectura con hijos sin interrupciones", "Cena familiar diaria sin pantallas", "Llamadas de escucha a padres", "Rituales familiares como salidas dominicales", "Planificación de vacaciones familiares", "Ayuda en tareas escolares o proyectos"],
    areaId: 1
  },
  {
    id: "friendship", name: "Amistad",
    description: "Tiempo dedicado a tus amigos y círculos sociales cercanos.",
    methodologyNote: "Los amigos funcionan como un amortiguador vital contra el estrés. Proporcionan perspectivas externas indispensables y un sentido de pertenencia social que reduce el riesgo de aislamiento cognitivo. La amistad estratégica requiere proactividad para mantenerse, ya que la inercia de la vida adulta tiende a disolver los vínculos si no hay un flujo constante de interacciones de calidad.",
    examples: ["Salidas grupales o cenas en casa", "Llamadas de control para saber cómo están", "Participación en hobbies compartidos", "Apoyo práctico en momentos de crisis", "Celebración de hitos y éxitos personales", "Viajes o escapadas con amigos cercanos"],
    areaId: 1
  },
  // Area 2: Cuerpo, Mente y Espiritualidad
  {
    id: "physical-health", name: "Salud Física / Deportes",
    description: "Mantenimiento proactivo de tu cuerpo.",
    methodologyNote: "Tu cuerpo es el hardware sobre el que corre todo tu sistema de vida. Sin mantenimiento preventivo, el rendimiento se degrada exponencialmente. El ejercicio no es un lujo, es una inversión en longevidad cognitiva y energía vital. En la estrategia Strack, la salud física es la base de la pirámide; si fallas aquí, el costo de oportunidad en las otras áreas será devastador.",
    examples: ["Entrenamiento de fuerza o pesas", "Sesiones de cardio (correr, nadar, bici)", "Preparación de un plan nutricional saludable", "Fisioterapia y masajes de recuperación", "Chequeos médicos preventivos anuales", "Higiene postural y estiramientos diarios"],
    areaId: 2
  },
  {
    id: "mental-health", name: "Salud Mental / Mindfulness",
    description: "Bienestar emocional y psicológico.",
    methodologyNote: "La claridad mental es tu mayor ventaja competitiva en un mundo de distracciones constantes. Invertir en salud mental permite procesar el estrés, reducir el ruido emocional y mejorar la calidad de cada decisión que tomas. Es el equivalente a desfragmentar tu disco duro emocional para que el sistema funcione sin errores. El mindfulness entrena tu capacidad de atención, lo que hace que cada hora invertida en otras unidades sea mucho más efectiva.",
    examples: ["Terapia psicológica o coaching emocional", "Práctica diaria de meditación", "Journaling para procesar pensamientos", "Retiros de silencio o desconexión digital", "Lectura de libros sobre psicología", "Práctica de la gratitud al final del día"],
    areaId: 2
  },
  {
    id: "spirituality", name: "Espiritualidad / Fe",
    description: "Práctica que conecta con algo más grande.",
    methodologyNote: "Esta unidad busca dar una narrativa de sentido a tu existencia más allá de los logros materiales. Proporciona una brújula ética que trasciende las crisis momentáneas. Ya sea a través de la religión, la conexión con la naturaleza o la filosofía, la espiritualidad aporta paz interior y una perspectiva de largo plazo que ancla tu estrategia de vida frente a la incertidumbre.",
    examples: ["Asistencia a servicios religiosos", "Estudio de textos sagrados o filosóficos", "Senderismo introspectivo en la naturaleza", "Servicio desinteresado y actos de caridad", "Participación en comunidades de fe", "Momentos de contemplación y silencio"],
    areaId: 2
  },
  // Area 3: Comunidad y Sociedad
  {
    id: "community", name: "Comunidad / Ciudadanía",
    description: "Participación en grupos locales o cívicos.",
    methodologyNote: "Tu ecosistema inmediato. Participar en tu comunidad no solo mejora tu entorno, sino que construye capital social y reputación. Sentirse parte integrante de un grupo local satisface la necesidad humana de pertenencia cívica. Los individuos bien integrados reportan mayores niveles de felicidad y seguridad, creando un entorno estable para desarrollar su estrategia personal.",
    examples: ["Asociaciones de vecinos o juntas de barrio", "Membresía en clubes deportivos locales", "Voluntariado en escuelas de la zona", "Participación en procesos de voto y civismo", "Apoyo a negocios locales", "Organización de eventos comunitarios"],
    areaId: 3
  },
  {
    id: "social-engagement", name: "Compromiso Social",
    description: "Acciones para mejorar la sociedad.",
    methodologyNote: "La trascendencia a través del servicio. En el marco de Rainer Strack, el compromiso social es lo que transforma una vida 'exitosa' en una vida 'significativa'. Impactar positivamente fuera de tus propios intereses genera satisfacción profunda (Eudaimonia). Es el uso estratégico de tus recursos (tiempo, dinero o talento) para resolver problemas que afectan a otros.",
    examples: ["Activismo por causas sociales", "Trabajo pro-bono profesional", "Mentoring gratuito para jóvenes", "Donaciones de tiempo a ONGs", "Creación de contenido social", "Liderazgo en campañas de ayuda"],
    areaId: 3
  },
  // Area 4: Trabajo, Aprendizaje y Finanzas
  {
    id: "work", name: "Trabajo / Carrera",
    description: "Ejecución de actividades laborales y profesionales.",
    methodologyNote: "Tu principal vehículo de creación de valor. Una estrategia de vida exitosa requiere que el trabajo sea un medio para un fin, no un fin en sí mismo. El objetivo es maximizar la eficiencia y el crecimiento profesional dentro de límites saludables, asegurando que el éxito en la carrera potencie, y no destruya, tus relaciones y salud.",
    examples: ["Sesiones de trabajo profundo (deep work)", "Liderazgo y mentoría de equipos", "Networking y desarrollo estratégico", "Ejecución de proyectos clave", "Viajes de negocios imprescindibles", "Formación técnica específica"],
    areaId: 4
  },
  {
    id: "education", name: "Educación / Aprendizaje",
    description: "Inversión en conocimiento y habilidades.",
    methodologyNote: "La mejor póliza de seguro contra la obsolescencia. Invertir en tu 'Capital Humano' aumenta tu valor intrínseco y expande tus horizontes. El aprendizaje debe ser un proceso estratégico continuo que te permita adaptarte a nuevas realidades. Es lo que Strack define como 'mantener el software actualizado' para seguir siendo relevante.",
    examples: ["Estudios de postgrado o certificaciones", "Aprender una nueva lengua o instrumento", "Lectura de libros de no ficción", "Asistencia a seminarios", "Práctica de nuevas habilidades técnicas", "Participación en grupos de estudio"],
    areaId: 4
  },
  {
    id: "finances", name: "Finanzas",
    description: "Gestión y planificación de recursos económicos.",
    methodologyNote: "La administración del combustible que financia tu estrategia global. Una gestión financiera inteligente busca la 'Libertad de Elección'. Tener tus finanzas bajo control reduce el estrés diario y te otorga el lujo de poder dedicar más tiempo a las áreas que realmente importan. Es la logística del capital aplicada a tus objetivos.",
    examples: ["Análisis de carteras de inversión", "Seguimiento del presupuesto mensual", "Planificación de ahorro futuro", "Educación en finanzas e impuestos", "Revisión de cuentas y gastos", "Búsqueda de ingresos pasivos"],
    areaId: 4
  },
  // Area 5: Intereses y Entretenimiento
  {
    id: "hobbies", name: "Hobbies / Intereses",
    description: "Actividades recreativas elegidas por placer.",
    methodologyNote: "El santuario de la curiosidad y el juego. Los hobbies permiten entrar en estado de 'Flujo', donde el tiempo parece detenerse y la satisfacción es inmediata. Permite un 'reseteo' cognitivo completo, alejando la mente de las presiones productivas y permitiendo que la creatividad florezca de forma lateral.",
    examples: ["Cocina gourmet y experimentación", "Fotografía artística", "Carpintería o jardinería", "Coleccionismo o modelismo", "Escritura creativa o pintura", "Actividades artesanales manuales"],
    areaId: 5
  },
  {
    id: "online-ent", name: "Entretenimiento Online",
    description: "Consumo de medios y entretenimiento en línea.",
    methodologyNote: "ADVERTENCIA: Esta es la unidad más peligrosa y propensa a ser un 'agujero negro' de tiempo. Debe ser un consumo intencional y recreativo, evitando a toda costa el 'scroll infinito' pasivo en redes sociales que drena energía sin aportar descanso real o valor estratégico.",
    examples: ["Cine y series seleccionadas", "Videojuegos con valor artístico", "Escucha atenta de podcasts", "Exploración de arte digital", "Participación en juegos sociales", "Consumo de canales especializados"],
    areaId: 5
  },
  {
    id: "offline-ent", name: "Entretenimiento Offline",
    description: "Experiencias recreativas físicas.",
    methodologyNote: "La reconexión radical con el mundo tangible. Las experiencias fuera de la pantalla son multisensoriales y generan recuerdos más profundos. El objetivo es vivir el presente a través de los sentidos y la interacción física, lo que proporciona una sensación de vitalidad que el mundo digital raramente iguala.",
    examples: ["Teatro, ópera o conciertos en vivo", "Visitas a museos y galerías", "Viajes de exploración", "Gastronomía y catas sensoriales", "Eventos deportivos en vivo", "Experiencias de spa y bienestar"],
    areaId: 5
  },
  // Area 6: Cuidado Personal
  {
    id: "physiological", name: "Necesidades Fisiológicas",
    description: "Funciones biológicas fundamentales.",
    methodologyNote: "El pilar base no negociable. El sueño reparador, la nutrición consciente y el descanso básico son los cimientos. Es imposible ejecutar una estrategia de vida compleja con un sistema biológico degradado. Optimizar tu descanso es el mayor multiplicador de productividad y claridad que existe.",
    examples: ["Dormir de 7 a 9 horas de calidad", "Alimentación equilibrada", "Higiene y cuidado de la piel", "Siestas o descanso activo", "Hidratación constante", "Inactividad física total"],
    areaId: 6
  },
  {
    id: "daily-activities", name: "Actividades Diarias",
    description: "Mantenimiento de la vida cotidiana.",
    methodologyNote: "El 'ruido logístico' necesario para que la vida funcione. Esta área es puramente instrumental. El objetivo estratégico debe ser siempre: 'Minimizar, Optimizar o Delegar'. Cada hora que logres liberar aquí es una hora que puedes reasignar a tus áreas de alto impacto estratégico.",
    examples: ["Aseo del hogar y limpieza", "Trámites burocráticos y facturas", "Desplazamientos y conmuting", "Compras del súper y recados", "Mantenimiento del hogar", "Logística familiar diaria"],
    areaId: 6
  },
];

export interface LifeUnitState {
  unitId: string;
  hours: number;
  importance: number;
  satisfaction: number;
}
