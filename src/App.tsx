import React, { useState, useEffect, useRef } from 'react';
import {
  User, Briefcase, GraduationCap, Globe, Zap, Brain, Landmark, FileText, HardHat,
  Users, BarChart, Gem, Lightbulb, Info, Settings, Bot, Handshake, BookOpen,
  Flag, LayoutDashboard, CheckCircle, HeartHandshake, Target, FlaskConical, Scale
} from 'lucid
// ============================================================================
// COMPONENTE: MarqueeCarousel (Carrusel interactivo tipo "marquee")
// ============================================================================
// Este componente crea un carrusel de frases con íconos que se desplaza
// de forma infinita y se pausa al pasar el mouse por encima.
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

// ============================================================================
// COMPONENTE: Navigation (Barra de navegación)
// ============================================================================
// Componente de navegación rediseñado para escritorio y móvil
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

// ============================================================================
// COMPONENTE: Section (Sección general)
// ============================================================================
// Se eliminó la dependencia de "framer-motion" y se usa un "forwardRef" para el scroll.
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

// ============================================================================
// COMPONENTE: CollapsibleExperience (Experiencia colapsable)
// ============================================================================
// Tarjeta de experiencia con un botón para expandir/colapsar la descripción.
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

// ============================================================================
// COMPONENTE: ProfileCard (Tarjeta del perfil profesional)
// ============================================================================
// Componente para las tarjetas del perfil profesional.
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

// ============================================================================
// COMPONENTE: EducationCard (Tarjeta de educación)
// ============================================================================
// Nuevo componente para las tarjetas de educación.
const EducationCard = ({ icon, iconColor, title, period, description }) => (
  <div className="bg-white rounded-xl shadow-md p-6 mb-4 border border-gray-200">
    <div className="flex items-start">
      <div className="mr-4 flex-shrink-0" style={{ color: iconColor }}>{icon}</div>
      <div>
        <h3 className="text-lg font-bold text-emerald-700">{title}</h3>
        <p className="text-sm font-medium text-gray-600 mb-2">{period}</p>
        {Array.isArray(description) ? (
          <ul className="list-none space-y-1 mt-2">
            {description.map((item, index) => (
              <li key={index} className="flex items-start text-gray-700">
                <span className="text-emerald-500 mr-2 flex-shrink-0">&bull;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-gray-700">{description}</p>
        )}
      </div>
    </div>
  </div>
);

// ============================================================================
// COMPONENTE PRINCIPAL: App
// ============================================================================
// Este es el componente principal que integra todas las secciones y componentes
// para crear la aplicación completa del CV.
const App = () => {
  const [activeSection, setActiveSection] = useState('perfil');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const perfilRef = useRef(null);
  const habilidadesRef = useRef(null);
  const experienciaRef = useRef(null);
  const proyectosRef = useRef(null);
  const educacionRef = useRef(null);
  const idiomasRef = useRef(null);
  const sectionRefs = {
    perfil: perfilRef,
    habilidades: habilidadesRef,
    experiencia: experienciaRef,
    proyectos: proyectosRef,
    educacion: educacionRef,
    idiomas: idiomasRef,
  };

  // Función para manejar el clic en la navegación y hacer scroll suave
  const handleNavigate = (id) => {
    setActiveSection(id);
    const element = sectionRefs[id]?.current;
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  // Observador de intersección para actualizar la sección activa al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: '-50% 0px -50% 0px', // Activa la sección cuando está en el centro
        threshold: 0,
      }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen text-gray-900 font-sans antialiased flex flex-col lg:flex-row">
      {/* Barra de navegación */}
      <Navigation
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      />

      {/* Contenido principal */}
      <main className="flex-1 lg:ml-80 pt-16 lg:pt-0 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Carrusel */}
          <MarqueeCarousel />

          {/* Sección de Perfil Profesional */}
          <Section id="perfil" title="Perfil Profesional" ref={perfilRef}>
            <p className="text-xl leading-relaxed mb-6 font-medium text-gray-700">
              Licenciado en Administración y Estrategia de Negocios, con especialidad en el sector de la salud. Experiencia en el análisis de información de clientes, identificación de oportunidades de mejora y optimización de procesos de venta. Apasionado por la inteligencia artificial y su aplicación en la generación de valor para las empresas.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProfileCard icon={<Zap size={24} />} text="Visión estratégica y enfoque en el crecimiento de unidades de negocio." />
              <ProfileCard icon={<Users size={24} />} text="Liderazgo en equipos multidisciplinarios para el logro de metas." />
              <ProfileCard icon={<Handshake size={24} />} text="Habilidades de negociación y relaciones interpersonales." />
              <ProfileCard icon={<BookOpen size={24} />} text="Constante aprendizaje y adaptación a nuevas tecnologías." />
            </div>
          </Section>

          {/* Sección de Habilidades Destacadas */}
          <Section id="habilidades" title="Habilidades Destacadas" ref={habilidadesRef}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-emerald-700 mb-2">Habilidades Técnicas</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />Análisis de datos (SQL, Python)</li>
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />BI y Dashboards (Tableau, Power BI)</li>
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />Suite de Microsoft Office (avanzado)</li>
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />CRM (Salesforce, HubSpot)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-emerald-700 mb-2">Habilidades Blandas</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />Liderazgo y gestión de equipos</li>
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />Comunicación asertiva</li>
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />Resolución de problemas</li>
                  <li className="flex items-center"><CheckCircle size={18} className="text-green-500 mr-2" />Pensamiento crítico</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-emerald-700 mb-2">Idiomas</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li className="flex items-center"><Flag size={18} className="text-red-500 mr-2" />Español (Nativo)</li>
                  <li className="flex items-center"><Flag size={18} className="text-blue-500 mr-2" />Inglés (Avanzado)</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Sección de Experiencia Profesional */}
          <Section id="experiencia" title="Experiencia Profesional" ref={experienciaRef}>
            <CollapsibleExperience
              date="2020 - Actualidad"
              title="Analista de Estrategia Digital"
              company="Innovación en Salud S.A."
              location="Ciudad de México, México"
              icon={<Briefcase size={24} />}
              description={[
                'Análisis de datos de clientes para identificar patrones de compra y oportunidades de mejora.',
                'Diseño e implementación de estrategias de venta para optimizar el rendimiento de la fuerza de ventas.',
                'Desarrollo de cuadros de mando en Power BI para el seguimiento de indicadores clave de rendimiento.',
                'Colaboración con el equipo de marketing para campañas de captación y fidelización de clientes.',
              ]}
            />
            <CollapsibleExperience
              date="2018 - 2020"
              title="Ejecutivo de Ventas"
              company="FarmaMex Distribuidora"
              location="Ciudad de México, México"
              icon={<Briefcase size={24} />}
              description={[
                'Gestión de cartera de clientes clave en el sector farmacéutico.',
                'Negociación de contratos y acuerdos comerciales con socios estratégicos.',
                'Desarrollo de nuevos mercados y penetración de productos innovadores.',
                'Supervisión del equipo de ventas y reporte de resultados a la dirección.',
              ]}
            />
          </Section>

          {/* Sección de Proyectos de Innovación */}
          <Section id="proyectos" title="Proyectos de Innovación y Transformación Digital" ref={proyectosRef}>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-emerald-700 mb-2">
                  <Lightbulb size={20} className="inline-block mr-2 text-amber-600" />
                  Implementación de Chatbot de Servicio al Cliente
                </h3>
                <p className="text-gray-700">
                  Lideré el proyecto de implementación de un chatbot con IA para mejorar la atención al cliente. Reduje los tiempos de respuesta en un 40% y aumenté la satisfacción del usuario.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-emerald-700 mb-2">
                  <Lightbulb size={20} className="inline-block mr-2 text-amber-600" />
                  Optimización de Logística con Análisis Predictivo
                </h3>
                <p className="text-gray-700">
                  Desarrollé un modelo predictivo para optimizar rutas de entrega y gestión de inventario, resultando en una reducción del 15% en costos operativos.
                </p>
              </div>
            </div>
          </Section>

          {/* Sección de Educación Académica */}
          <Section id="educacion" title="Educación Académica" ref={educacionRef}>
            <EducationCard
              icon={<GraduationCap size={24} />}
              iconColor="#4a5568"
              title="Licenciatura en Administración y Estrategia de Negocios"
              period="2014 - 2018"
              description="Especialización en gestión empresarial, finanzas y marketing. Tesis sobre la digitalización de procesos en PyMEs."
            />
            <EducationCard
              icon={<HardHat size={24} />}
              iconColor="#4a5568"
              title="Diplomado en Inteligencia Artificial para Negocios"
              period="2021"
              description="Programa enfocado en la aplicación práctica de IA en la toma de decisiones estratégicas, marketing y optimización de operaciones."
            />
          </Section>

          {/* Sección de Idiomas */}
          <Section id="idiomas" title="Idiomas" ref={idiomasRef}>
            <EducationCard
              icon={<Flag size={24} />}
              iconColor="#4299e1"
              title="Español"
              period="Nativo"
              description="Dominio completo del idioma, tanto escrito como hablado."
            />
            <EducationCard
              icon={<Flag size={24} />}
              iconColor="#e53e3e"
              title="Inglés"
              period="Avanzado (C1)"
              description="Certificado en el dominio del inglés profesional. Capacidad para mantener conversaciones de negocios y redactar documentos técnicos."
            />
          </Section>
        </div>
      </main>
    </div>
  );
};

export default App;