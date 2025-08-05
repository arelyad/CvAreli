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