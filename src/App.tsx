// App.tsx COMPLETO - TODAS LAS SECCIONES INTEGRADAS

import React, { useState, useEffect, useRef } from 'react';

import {

  User, Briefcase, GraduationCap, Globe, Zap, Brain, Landmark, FileText, HardHat,

  Users, BarChart, Gem, Lightbulb, Info, Settings, Bot, Handshake, BookOpen,

  Flag, LayoutDashboard, CheckCircle, HeartHandshake, Target, FlaskConical, Scale

} from 'lucide-react';



// Componente del carrusel interactivo tipo "marquee"

const MarqueeCarousel = () => {

  // Lista completa de frases con iconos

  const phrases = [

    { text: 'Estrategia Empresarial', icon: <BarChart size={24} /> },

    { text: 'Orientación a Resultados', icon: <Target size={24} /> },

    { text: 'Pensamiento Crítico y Sistémico', icon: <FlaskConical size={24} /> },

    { text: 'IA y Tecnología en Evolución', icon: <Brain size={24} /> },

    { text: 'Gestión de Proyectos', icon: <LayoutDashboard size={24} /> },

    { text: 'Análisis para la Toma de Decisiones', icon: <Scale size={24} /> }

  ];



  const iconColor = '#f97316'; // El color naranja de los íconos de la imagen 3

  const textColor = '#047857'; // El color verde oscuro del texto



  return (

    // Contenedor principal del carrusel con desbordamiento oculto

    <div className="relative w-full overflow-hidden bg-transparent py-4 z-10 lg:mt-0">

      <style>{`

        /*

         * Animación para el desplazamiento continuo.

         * Se ha mejorado la estructura para eliminar el "salto". La animación

         * mueve el contenedor interno (marquee-track) un 50% de su propio ancho.

         * Dado que el contenido está duplicado, esto crea un bucle perfecto.

         */

        @keyframes scroll-perfect {

          0% { transform: translateX(0); }

          100% { transform: translateX(-50%); } /* Se mueve el 50% de su propio ancho */

        }

        

        /* Contenedor que se desplaza y aplica la animación */

        .marquee-track {

          display: flex;

          white-space: nowrap;

          animation: scroll-perfect 30s linear infinite; /* Velocidad: 30s */

          gap: 2rem; /* Espaciado entre frases */

          will-change: transform; /* Optimización para una animación más suave */

        }



        /* Pausa la animación al pasar el mouse por encima para mejorar la UX */

        .marquee-track:hover {

          animation-play-state: paused;

        }



        /* Estilo para cada ítem del carrusel */

        .marquee-item {

          display: inline-flex;

          align-items: center;

          font-family: 'Inter', sans-serif;

          font-weight: normal;

          font-size: 1.125rem;

          flex-shrink: 0; /* Evita que los items se reduzcan de tamaño */

        }

      `}</style>

      <div className="marquee-track">

        {/* Se duplica el contenido para asegurar un bucle visualmente perfecto sin espacios en blanco */}

        {[...phrases, ...phrases].map((item, index) => (

          <span key={index} className="marquee-item">

            <span className="mr-3" style={{ color: iconColor }}>{item.icon}</span>

            <span style={{ color: textColor }}>{item.text}</span>

          </span>

        ))}

      </div>

    </div>

  );

};



// Componente de navegación rediseñado con clases estáticas de Tailwind

const Navigation = ({ activeSection, onNavigate, isMobileMenuOpen, toggleMobileMenu }) => {

  const sections = [

    { id: 'perfil', title: 'Perfil Profesional', icon: <User size={20} /> },

    { id: 'habilidades', title: 'Habilidades Destacadas', icon: <Gem size={20} /> },

    { id: 'experiencia', title: 'Experiencia Profesional', icon: <Briefcase size={20} /> },

    { id: 'proyectos', title: 'Proyectos de Innovación y Transformación Digital', icon: <Lightbulb size={20} /> },

    { id: 'educacion', title: 'Educación Académica', icon: <GraduationCap size={20} /> },

    { id: 'idiomas', title: 'Idiomas', icon: <Globe size={20} /> },

  ];



  return (

    // Se usan clases de color estáticas para que Tailwind las detecte

    <nav className="fixed lg:left-0 top-0 w-full lg:w-80 h-16 lg:h-screen bg-gray-900 text-gray-200 shadow-2xl z-50">

      <style>{`

        /* Animación para el efecto de brillo del texto */

        @keyframes text-shine {

          0% { background-position: 200% center; }

          100% { background-position: -200% center; }

        }

        .text-gradient {

          background: linear-gradient(90deg, #047857 0%, #34d399 50%, #047857 100%);

          background-size: 200% auto;

          color: transparent;

          -webkit-background-clip: text;

          background-clip: text;

          animation: text-shine 5s ease-in-out infinite; /* Animación más lenta por defecto */

        }

        .text-gradient:hover {

          animation-play-state: running; /* Solo se anima al pasar el mouse */

        }

      `}</style>

      <div className="container mx-auto px-4 lg:px-0 h-full flex items-center justify-between lg:block">

        {/* Título unificado y más visible */}

        <div className="lg:py-8 flex items-center lg:justify-center">

          <div className="flex-shrink-0 flex items-center lg:flex-col lg:text-center">

            <User size={32} className="text-amber-600 mr-3 lg:mb-4" />

            <h1 className="text-2xl font-bold font-sans text-gray-50">

              {/* Título con el nuevo estilo de degradado y animación */}

              <span className="block text-xl font-bold tracking-wider mb-2 text-gradient">CURRICULUM VITAE</span>

              <span className="block">ARELI</span>

              <span className="block">AGUILAR</span>

              <span className="block">DELGADO</span>

            </h1>

          </div>

        </div>

        {/* Línea divisoria más sutil */}

        <div className="hidden lg:block w-3/4 mx-auto my-4 border-t border-gray-700"></div>



        {/* Botón de menú móvil */}

        <div className="lg:hidden">

          <button onClick={toggleMobileMenu} className="text-gray-200 hover:text-gray-400 focus:outline-none">

            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

              {isMobileMenuOpen ? (

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />

              ) : (

                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />

              )}

            </svg>

          </button>

        </div>



        {/* Menú de navegación principal */}

        <div className={`fixed inset-x-0 top-16 bg-gray-900 lg:static lg:block lg:h-auto lg:mt-8 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>

          <ul className="flex flex-col lg:space-y-2 p-4 lg:p-0">

            {sections.map(section => (

              <li key={section.id}>

                <a

                  href={`#${section.id}`}

                  onClick={(e) => { e.preventDefault(); onNavigate(section.id); }}

                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${

                    activeSection === section.id

                      ? 'bg-emerald-700 text-white shadow-lg'

                      : 'hover:bg-gray-800'

                  }`}

                >

                  {section.icon}

                  <span className="font-semibold">{section.title}</span>

                </a>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </nav>

  );

};



// Se eliminó la dependencia de "framer-motion"

const Section = React.forwardRef(({ id, title, children }, ref) => (

  <section

    id={id}

    ref={ref}

    className="bg-white p-8 rounded-2xl shadow-xl mb-12 transform hover:scale-[1.01] transition-transform duration-300"

  >

    <div className="flex items-center gap-4 mb-6 border-b pb-4 border-amber-600">

      <h2 className="text-3xl font-bold text-emerald-700 font-sans">{title}</h2>

    </div>

    {children}

  </section>

));



const CollapsibleExperience = ({ date, title, company, location, description, icon }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const contentRef = useRef(null);



  useEffect(() => {

    if (contentRef.current) {

      contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0px';

    }

  }, [isOpen]);



  return (

    <div className="bg-white rounded-xl shadow-md overflow-hidden mb-4 border border-gray-200">

      <button

        onClick={toggleOpen}

        className="w-full flex justify-between items-center p-6 text-left transition-colors duration-200 hover:bg-gray-50 focus:outline-none"

      >

        <div className="flex items-start">

          <div className="mr-4 text-amber-600 flex-shrink-0">{icon}</div>

          <div>

            <h3 className="text-lg font-bold text-emerald-700">{title}</h3>

            <p className="text-sm font-medium text-gray-600">{date}</p>

            {company && <p className="text-sm text-gray-500 italic">{company}</p>}

            {location && <p className="text-sm text-gray-500">{location}</p>}

          </div>

        </div>

        <svg

          className={`w-6 h-6 transform transition-transform duration-300 text-emerald-700 ${isOpen ? 'rotate-180' : ''}`}

          fill="none"

          stroke="currentColor"

          viewBox="0 0 24 24"

          xmlns="http://www.w3.org/2000/svg"

        >

          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />

        </svg>

      </button>

      <div

        ref={contentRef}

        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"

        style={{ maxHeight: '0px' }}

      >

        <div className="px-6 pb-6 pt-2 border-t border-gray-200">

          <ul className="list-none space-y-2">

            {description.map((item, index) => (

              <li key={index} className="flex items-start text-gray-700">

                <span className="text-amber-600 mr-2 flex-shrink-0">&rarr;</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>

        </div>

      </div>

    </div>

  );

};



// Componente para las tarjetas del perfil profesional

const ProfileCard = ({ icon, text }) => {

  return (

    <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-200">

      <div className="flex items-start">

        <div className="mr-4 text-emerald-700 mt-1">{icon}</div>

        <p className="text-gray-800 text-lg leading-relaxed">{text}</p>

      </div>

    </div>

  );

};



// Nuevo componente para las tarjetas de educación

const EducationCard = ({ icon, iconColor, title, period, description }) => (

  <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-200">

    <div className="flex items-start">

      <div className="mr-4 flex-shrink-0" style={{ color: iconColor }}>{icon}</div>

      <div>

        <h3 className="text-lg font-bold text-emerald-700">{title}</h3>

        <p className="text-sm font-medium text-gray-600 mb-2">{period}</p>

        {Array.isArray(description) ? (

          <ul className="list-none space-y-2">

            {description.map((item, index) => (

              <li key={index} className="flex items-start text-gray-700">

                <span className="text-amber-600 mr-2 flex-shrink-0">&rarr;</span>

                <span>{item}</span>

              </li>

            ))}

          </ul>

        ) : (

          <p className="text-gray-700">{description}</p>

        )}

      </div>

    </div>

  </div>

);



// Nuevo componente para la lista de "Otros estudios" con íconos

const OtherStudies = ({ items }) => (

  <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-200">

    <h3 className="text-lg font-bold text-emerald-700 mb-2">Otros estudios:</h3>

    <ul className="list-none space-y-2">

      {items.map((item, index) => (

        <li key={index} className="flex items-start text-gray-700">

          <BookOpen className="mr-2 flex-shrink-0 text-amber-600" size={20} />

          <span>{item}</span>

        </li>

      ))}

    </ul>

  </div>

);



// Nuevo componente para la tarjeta de idioma, actualizado con el nuevo estilo

const LanguageCard = ({ language, proficiency }) => (

  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200 flex-1 min-w-[150px] transition-all duration-300 hover:shadow-lg">

    <div className="flex items-center">

      {/* Nuevo ícono SVG para la bandera */}

      <svg

        xmlns="http://www.w3.org/2000/svg"

        viewBox="0 0 24 24"

        fill="none"

        stroke="#047857"

        strokeWidth="1.5"

        strokeLinecap="round"

        strokeLinejoin="round"

        className="w-6 h-6 mr-4 flex-shrink-0"

      >

        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>

        <line x1="4" y1="22" x2="4" y2="15"></line>

      </svg>

      <div>

        <h3 className="text-lg font-bold text-emerald-700">{language}</h3>

        <p className="text-sm font-medium text-gray-600">{proficiency}</p>

      </div>

    </div>

  </div>

);



// Componente para mostrar las habilidades, actualizado para aceptar un subtítulo

const SkillsCard = ({ title, subtitle, icon, iconColor, children }) => (

  <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-200">

    <div className="flex items-center mb-4">

      <div className="mr-4 flex-shrink-0" style={{ color: iconColor }}>{icon}</div>

      <div className="flex-1 flex justify-between items-center">

        <h3 className="text-lg font-bold text-emerald-700">{title}</h3>

        {subtitle && <p className="text-sm text-gray-500 italic">{subtitle}</p>}

      </div>

    </div>

    {children}

  </div>

);



// Mover las constantes y la lógica de datos fuera del componente principal

// para que puedan ser accesibles por la función App()

const tooltips = {

  'MS Office': 'Word, Excel, Outlook, Power Point - Nivel Avanzado',

  'Motores de búsqueda': 'Búsqueda avanzada y análisis de información',

  'Correo electrónico': 'Gestión Profesional de comunicaciones',

  'Soluciones inteligentes': 'Implementación de Inteligencia Artificial para optimización de procesos',

  'Tecnologías emergentes': 'Aplicación en gestión empresarial y análisis estratégico',

  'Gestión empresarial': 'Sólidas habilidades administrativas',

  'Análisis Estratégico': 'Evaluación y toma de decisiones empresariales'

};



const experienceData = [

  {

    date: 'Febrero 2024 – Actualidad',

    title: 'Colaboración Actual en Proyectos Empresariales con Inteligencia Artificial',

    company: 'Rol transversal | Transformación digital y estrategia con tecnologías emergentes',

    description: [

      'Participación activa en equipos multidisciplinarios dedicados al desarrollo de soluciones empresariales mediante el uso estratégico de inteligencia artificial.',

      'Diseño, conceptualización y aplicación de iniciativas de transformación digital con impacto directo en la eficiencia operativa, la gestión de información y la toma de decisiones.',

      'Colaboración en la implementación de herramientas tecnológicas emergentes para modernizar procesos clave y fortalecer el desempeño organizacional.',

      'Aportación de perspectiva estratégica, visión de negocio y experiencia ejecutiva al diseño de soluciones inteligentes adaptadas a necesidades reales del entorno empresarial.',

    ],

    icon: <Zap size={24} />

  },

  {

    date: 'Abril 2020 – Enero 2022',

    title: 'Jefatura de Promoción y Gestión',

    company: 'Aeropuertos y Servicios Auxiliares (Organización Gubernamental)',

    location: 'Dirección Técnica y Consultoría',

    description: [

      'Encargada de estructurar y gestionar información confidencial de siete áreas con el propósito de optimizar la toma de decisiones.',

      'Colaboré en la gestión y coordinación de comités, como obras públicas, transparencia, ética, licitaciones, adquisiciones y operaciones.',

      'Propuse y lideré la ejecución de una alianza estratégica con diversos "stakeholders" buscando generar ahorros significativos para la construcción y mantenimiento de infraestructuras aeroportuarias (20%).',

      'Coordiné negociaciones entre distintos departamentos, tanto internos como externos.',

      'Elaboré informes internos para el seguimiento y cumplimiento de los objetivos de la dirección.',

      'Implementé procedimientos para la clasificación de información confidencial.',

    ],

    icon: <Landmark size={24} />

  },

  {

    date: 'Mayo 2018 – Abril 2020',

    title: 'Consultor de Proyectos',

    company: '',

    description: [

      'Colaboré en el desarrollo de la estrategia comercial para el mercado de telefonía celular prepagada de la empresa AT&T.',

      'Identifiqué oportunidades de negocio para proyectos de infraestructura y fungí como enlace entre el gobierno y las empresas de construcción.',

      'Consolidé y gestioné el arrendamiento de cuatro propiedades residenciales, lo cual incluyó la búsqueda de posibles clientes, la promoción a través de sitios web especializados y redes sociales, la negociación, asï como la revisión de evaluaciones legales y contratos con firmas de abogados.',

    ],

    icon: <FileText size={24} />

  },

  {

    date: 'Marzo 2014 – Mayo 2018',

    title: 'Gerente - Ventas a Gobierno e Infraestructura',

    company: '',

    description: [

      'Mantuve y actualicé bases de datos cruciales para proyectos potenciales y clientes.',

      'Desarrollé el papel clave como intermediario principal entre el sector gubernamental y la empresa.',

      'Establecí sólidas redes institucionales para identificar valiosas oportunidades comerciales.',

      'Pronostiqué oportunidades de negocio, gestioné clientes potenciales y cerré exitosamente proyectos.',

      'Encargada de la prospección, desarrollo e implementación de proyectos de infraestructura en colaboración con el gobierno.',

      'Brindé apoyo y coordiné diversas áreas, desempeñando funciones administrativas y de gestión de proyectos (ventas, cartera, legal, calidad, planta, supervisión de obra, licitaciones, entre otros).',

      'Logré el exitoso cierre de un proyecto para pavimentar 25 calles en el centro de la Ciudad de México, en la Zona Rosa (USD $35M).',

      'Responsable de la generación de informes para la alta dirección.',

    ],

    icon: <HardHat size={24} />

  },

  {

    date: 'Mayo 2004 – Marzo 2014',

    title: 'Especialista Senior en Información y Enlace - Relaciones Institucionales',

    company: '',

    description: [

      'Al tratarse de un área nueva, desempeñé un papel fundamental en la estructuración e implementación de procesos administrativos alineados con las políticas de la empresa.',

      'Supervisé indicadores clave para facilitar la planificación estratégica, diseñar estrategias comerciales y apoyar la toma de decisiones.',

      'Encargada de la gestión integral y consolidación de información.',

      'Brindé respaldo a procesos operativos y administrativos, incluyendo la elaboración y seguimiento de presupuestos, generación de informes mensuales de resultados, preparación de presentaciones institucionales, coordinación de entregas, seguimiento de pedidos, entre otros.',

      'Participé activamente en el análisis para seleccionar proyectos y empresas a atender en esta área, en conformidad con las políticas de la empresa.',

      'Contribuí a la organización de información crucial para un proyecto de pavimentación en una de las avenidas más importantes de la Ciudad de México (USD $105M).',

    ],

    icon: <Users size={24} />

  },

  {

    date: 'Junio 1999 – Mayo 2004',

    title: 'Jefatura de Soporte Operativo - Ventas Institucionales',

    company: '',

    description: [

      'Encargada de centralizar la información de ventas a nivel nacional para clientes del sector de construcción y transformadores.',

      'Participé activamente en el análisis de términos comerciales aplicables a cada cliente del ámbito de construcción y transformación.',

      'Responsable de implementar estrategias administrativas y brindar respaldo a las tareas operativas.',

      'Coordiné el establecimiento de controles e indicadores fundamentales para empresas del sector de construcción.',

      'Contribuí al éxito en la recuperación del 40% de la cartera incobrable.',

      'Encargada de liderar la implementación de un sistema ERP (Planificación de Recursos Empresariales) a nivel nacional para el segmento institucional.',

      'Gestioné eficazmente la estrategia de precios mediante cotizaciones y negociaciones internas específicas, tales como establecer precios por volumen, gestionar entregas, tipos de productos, entre otros.',

    ],

    icon: <BarChart size={24} />

  }

];



const profileData = [

  {

    icon: <Briefcase size={24} />,

    text: "Ejecutiva bilingüe (inglés/español) con más de 20 años de experiencia en desarrollo de negocios, gestión estratégica de proyectos y análisis de información clave para la toma de decisiones de alta dirección.",

  },

  {

    icon: <Settings size={24} />,

    text: "Mi trayectoria combina habilidades avanzadas en planeación y gestión administrativa con una visión estratégica orientada a la transformación digital. Integro tecnologías emergentes —incluida la inteligencia artificial— para modernizar procesos, fortalecer la gestión empresarial y optimizar la toma de decisiones, impulsando la eficiencia operativa y la identificación de oportunidades estratégicas.",

  },

  {

    icon: <Bot size={24} />,

    text: "Actualmente participo en equipos interdisciplinarios que aplican inteligencia artificial en entornos empresariales, desarrollando soluciones innovadoras con impacto tangible en la organización.",

  },

  {

    icon: <Handshake size={24} />,

    text: "Cuento con amplia experiencia generando relaciones comerciales estratégicas entre organizaciones privadas y públicas, mediante propuestas alineadas con objetivos corporativos. Me distingo por mi capacidad para identificar necesidades del cliente, gestionar ventas de forma estructurada y construir vínculos institucionales sólidos. Tengo una orientación constante a resultados y un firme compromiso con el cumplimiento de metas organizacionales.",

  },

];



// Nuevo array de datos para la sección de Educación

const educationData = [

  {

    icon: <Brain size={24} />,

    iconColor: '#8B5CF6', // Púrpura para Learning Heroes

    title: 'LEARNING HEROES',

    period: '2024 - 2025',

    description: 'Programa Intensivo de Transformación Digital\n\nEspecialización en Inteligencia Artificial Aplicada enfocado en implementación de soluciones inteligentes, optimización de procesos empresariales y aplicación práctica de tecnologías emergentes en entornos corporativos.'

  },

  {

    icon: <Landmark size={24} />,

    iconColor: '#3B82F6', // Azul para ITESM

    title: 'ITESM',

    period: '2002 - 2004',

    description: 'Master en Administración de Negocios (MBA)'

  },

  {

    icon: <Landmark size={24} />,

    iconColor: '#3B82F6', // Azul para ITESM

    title: 'ITESM',

    period: '1991 - 1995',

    description: 'Licenciatura en Mercadotecnia (Mención Honorífica)'

  }

];



const otherStudiesData = [

  'Diploma en Marketing Digital; ITAM 2022.',

  'Diploma en Gestión Estratégica de las Finanzas Públicas; ITESM; 2016 - 2017.',

  'Diploma en Mercadotecnia Competitiva; World Trade Center, Business Center; 1997 - 1998.',

  'Diploma en Finanzas; ITESM; 1994 - 1995.'

];



const languageData = [

  { language: 'Español', proficiency: 'Lengua nativa' },

  { language: 'Inglés', proficiency: 'Fluido' },

];



const managementSkills = [

  'Altamente organizada y autónoma',

  'Precisión y confidencialidad de la información',

  'Respuesta eficaz a cambios de prioridades',

  'Habilidad destacada en negociación',

  'Fuertes habilidades analíticas y de resolución de problemas',

  'Atención al detalle',

  'Gestión múltiple de tareas y personas',

  'Capacidad de adaptación y aprendizaje independiente',

  'Habilidades interpersonales y de comunicación',

  'Filosofía orientada al trabajo en equipo'

];



const projectsData = [

  {

    title: 'AI STARS LEAGUE',

    date: 'Diciembre 2024 - Junio 2025',

    description: [

      'Participación activa en una competencia internacional de alto rendimiento en inteligencia artificial aplicada.',

      'Integré equipos multidisciplinarios para resolver desafíos reales mediante tecnologías de IA, combinando pensamiento estratégico, innovación y visión de negocio.',

      'Diseñé y presenté soluciones con impacto empresarial, aplicando habilidades avanzadas en automatización, análisis de datos, generación de contenido con IA y desarrollo de herramientas inteligentes.',

      'Colaboré en proyectos enfocados en transformación digital, visualización de datos y mejora de procesos organizacionales.',

      'Fui evaluada por un panel de expertos internacionales en IA, innovación y consultoría estratégica.',

      'La experiencia fortaleció mis competencias para integrar inteligencia artificial en contextos reales, potenciar la resolución creativa de problemas y acelerar la implementación de soluciones tecnológicas.',

      'Participé en sesiones de capacitación técnica especializada y actividades de networking internacional con líderes y profesionales de alto nivel del ecosistema tecnológico global.'

    ],

    icon: <Brain size={24} />,

  },

];



// El componente principal de la aplicación, ahora definido correctamente

function App() {

  const [activeSection, setActiveSection] = useState('perfil');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sectionRefs = useRef({});



  const handleNavigate = (sectionId) => {

    const element = sectionRefs.current[sectionId];

    if (element) {

      element.scrollIntoView({ behavior: 'smooth', block: 'start' });

    }

    setIsMobileMenuOpen(false);

  };



  const toggleMobileMenu = () => {

    setIsMobileMenuOpen(!isMobileMenuOpen);

  };



  useEffect(() => {

    const observer = new IntersectionObserver(

      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {

            setActiveSection(entry.target.id);

          }

        });

      },

      { threshold: 0.3, rootMargin: '-20px 0px -50% 0px' }

    );



    Object.values(sectionRefs.current).forEach((section) => {

      if (section) observer.observe(section);

    });



    return () => observer.disconnect();

  }, []);



  return (

    <div className="min-h-screen bg-gray-50 font-sans">

      <Navigation

        activeSection={activeSection}

        onNavigate={handleNavigate}

        isMobileMenuOpen={isMobileMenuOpen}

        toggleMobileMenu={toggleMobileMenu}

      />

      {/* Se ha ajustado el carrusel para que tenga un margen superior más grande

          para bajarlo y quede más centrado en el espacio inicial. */}

      <div className="lg:ml-80">

        <div className="mt-28 lg:mt-8"> {/* Ajuste sutil del margen superior aquí */}

          <MarqueeCarousel />

        </div>

      </div>

      <main className="lg:ml-80 p-6 lg:p-8">

        <Section ref={(el) => (sectionRefs.current.perfil = el)} id="perfil" title="Perfil Profesional">

          {/* Se itera sobre los datos del perfil para crear las tarjetas individuales */}

          {profileData.map((item, index) => (

            <ProfileCard key={index} icon={item.icon} text={item.text} />

          ))}

        </Section>



        <Section ref={(el) => (sectionRefs.current.habilidades = el)} id="habilidades" title="Habilidades Destacadas">

          <div className="space-y-6">

            {/* Tarjeta de Experiencia Ejecutiva */}

            <SkillsCard title="Experiencia Ejecutiva" icon={<Briefcase size={24} />} iconColor="#d97706">

              <p className="text-gray-700">Más de 15 años de experiencia realizando gestiones administrativas clave a nivel ejecutivo para la alta dirección.</p>

            </SkillsCard>



            {/* Tarjeta de Habilidades de Gestión Gerencial */}

            <SkillsCard title="Habilidades de Gestión Gerencial" icon={<LayoutDashboard size={24} />} iconColor="#d97706">

              <div className="grid md:grid-cols-2 gap-4">

                {managementSkills.map((skill, index) => (

                  <div key={index} className="flex items-start text-gray-700">

                    <CheckCircle size={16} className="text-emerald-700 mr-2 flex-shrink-0 mt-1" />

                    <span>{skill}</span>

                  </div>

                ))}

              </div>

            </SkillsCard>



            {/* Tarjeta de Competencias, ahora con el nuevo título */}

            <SkillsCard

              title="Competencias"

              subtitle="Desliza el cursor sobre cada competencia para conocer más detalles."

              icon={<Gem size={24} />}

              iconColor="#d97706"

            >

              <div className="flex flex-wrap gap-2">

                {Object.entries(tooltips).map(([label, tooltip], idx) => (

                  <div key={idx} className="relative group">

                    <span className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-help border border-gray-300 group-hover:shadow-md transition">

                      {label}

                      {/* Indicador visual discreto para el tooltip */}

                      <Info size={12} className="inline-block ml-1 text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                    </span>

                    {/* Tooltip con los nuevos colores */}

                    <div className="absolute z-10 hidden group-hover:block bg-amber-100 text-sm text-emerald-700 p-3 shadow-xl rounded-md w-64 top-full mt-1 left-1/2 -translate-x-1/2 border border-emerald-700">

                      {tooltip}

                    </div>

                  </div>

                ))}

              </div>

            </SkillsCard>

            {/* Tarjeta de Actitud Personal - Nueva sección */}

            <SkillsCard title="Actitud Personal" icon={<HeartHandshake size={24} />} iconColor="#d97706">

              <p className="text-gray-700">Actitud empática, asertiva y positiva.</p>

            </SkillsCard>

          </div>

        </Section>



        <Section ref={(el) => (sectionRefs.current.experiencia = el)} id="experiencia" title="Experiencia Profesional">

          {experienceData.map((exp, index) => (

            <CollapsibleExperience

              key={index}

              date={exp.date}

              title={exp.title}

              company={exp.company}

              location={exp.location}

              description={exp.description}

              icon={exp.icon}

            />

          ))}

        </Section>



        <Section ref={(el) => (sectionRefs.current.proyectos = el)} id="proyectos" title="Proyectos de Innovación y Transformación Digital">

          {projectsData.map((project, index) => (

            <CollapsibleExperience

              key={index}

              date={project.date}

              title={project.title}

              description={project.description}

              icon={project.icon}

            />

          ))}

        </Section>



        <Section ref={(el) => (sectionRefs.current.educacion = el)} id="educacion" title="Educación Académica">

          {educationData.map((edu, index) => (

            <EducationCard

              key={index}

              icon={edu.icon}

              iconColor={edu.iconColor}

              title={edu.title}

              period={edu.period}

              description={edu.description}

            />

          ))}

          <OtherStudies items={otherStudiesData} />

        </Section>



        <Section ref={(el) => (sectionRefs.current.idiomas = el)} id="idiomas" title="Idiomas">

          <div className="flex flex-col md:flex-row gap-4">

            {languageData.map((lang, index) => (

              <LanguageCard key={index} language={lang.language} proficiency={lang.proficiency} />

            ))}

          </div>

        </Section>

     