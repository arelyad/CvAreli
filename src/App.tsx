import React, { useState } from 'react';

// Componente principal de la aplicación
const App = () => {
    // Estado para manejar las secciones colapsables, usando un array de IDs abiertos.
    const [openSections, setOpenSections] = useState([]);

    // Función para manejar el colapso de las secciones.
    const toggleSection = (id) => {
        setOpenSections(prevOpenSections => {
            if (prevOpenSections.includes(id)) {
                // Si la sección ya está abierta, la cerramos
                return prevOpenSections.filter(sectionId => sectionId !== id);
            } else {
                // Si la sección está cerrada, la abrimos y cerramos las demás
                return [id];
            }
        });
    };

    // Datos de la experiencia profesional
    const experienceData = [
        {
            id: 'exp1',
            title: 'Colaboración en Proyectos Empresariales con Inteligencia Artificial',
            period: 'Febrero 2024 - Actualidad',
            details: [
                'Fint Bransversal: Transformación digital y estrategia con tecnologías emergentes.',
                'AI STARS LEAGUE: Diciembre 2024 - Junio 2025.',
            ],
        },
        {
            id: 'exp2',
            title: 'Aeropuertos y Servicios Auxiliares (Gobierno)',
            period: 'Abril 2020 - Enero 2022',
            details: [
                'Jefatura de Promoción y Gestión, Dirección Técnica y Consultoría.',
                'Consultor de Proyectos.',
            ],
        },
        {
            id: 'exp3',
            title: 'Gerente Ventas a Gobierno e Infraestructura',
            period: 'Mayo 2018 - Abril 2020',
            details: [
                'Detalles sobre el rol de Gerente...',
            ],
        },
    ];

    // Datos de las habilidades
    const skillsData = [
        { emoji: '⭐', title: 'Experiencia Ejecutiva', description: 'Más de 15 años realizando gestiones administrativas clave.' },
        { emoji: '📊', title: 'Análisis de Información', description: 'Identificación de datos clave para la toma de decisiones.' },
        { emoji: '🤝', title: 'Vínculos Institucionales', description: 'Amplia experiencia en relaciones comerciales estratégicas.' },
        { emoji: '🤖', title: 'Inteligencia Artificial', description: 'Aplicación en la optimización de procesos empresariales.' },
    ];

    return (
        <div className="bg-gray-50 text-gray-800 font-sans">
            <main className="max-w-4xl mx-auto p-4 md:p-8 bg-white shadow-xl rounded-2xl my-8">

                <header className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800">ARELI AGUILAR DELGADO</h1>
                    <p className="text-lg md:text-xl text-gray-600 mt-2">Ejecutiva bilingüe con experiencia en transformación digital e IA</p>
                    <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-2 text-sm text-gray-500">
                        <span>55 4341 3490</span>
                        <span>•</span>
                        <a href="mailto:areliaguilarin@gmail.com" className="text-blue-500 hover:underline">areliaguilarin@gmail.com</a>
                    </div>
                </header>

                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4">Perfil Profesional</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Ejecutiva bilingüe (inglés/español) con más de 20 años de experiencia en desarrollo de negocios,
                        gestión estratégica de proyectos y análisis de información clave para la toma de decisiones de alta dirección.
                        Mi trayectoria combina habilidades avanzadas en planeación y gestión administrativa con una visión
                        estratégica orientada a la transformación digital. Integro tecnologías emergentes -incluida la inteligencia
                        artificial- para modernizar procesos, fortalecer la gestión empresarial y optimizar la toma de decisiones.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4">Experiencia Profesional</h2>
                    {experienceData.map(item => (
                        <div key={item.id} className="border-b border-gray-200 py-4">
                            <button
                                className="w-full flex justify-between items-center text-left focus:outline-none"
                                onClick={() => toggleSection(item.id)}
                            >
                                <div>
                                    <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                                    <p className="text-sm text-gray-500">{item.period}</p>
                                </div>
                                <svg
                                    className={`h-6 w-6 text-blue-500 transition-transform duration-300 ${openSections.includes(item.id) ? 'rotate-180' : ''}`}
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            <div
                                className={`collapsible-content ${openSections.includes(item.id) ? 'open' : ''}`}
                                style={{ maxHeight: openSections.includes(item.id) ? '1000px' : '0px' }}
                            >
                                <ul className="list-disc list-inside mt-4 pl-4 text-gray-700">
                                    {item.details.map((detail, index) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4">Habilidades Destacadas</h2>
                    
                    <p className="text-center text-gray-500 mb-4 md:text-left md:mb-8 md:text-lg italic">
                        Desliza el cursor sobre cada competencia para conocer más detalles.
                    </p>

                    <div className="flex overflow-x-scroll gap-4 pb-4 competencias-scroll-container">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="flex-none w-64 h-48 bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col justify-center items-center text-center hover:shadow-xl transition-shadow duration-300">
                                <span className="text-4xl mb-2">{skill.emoji}</span>
                                <h3 className="font-bold text-lg">{skill.title}</h3>
                                <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue-800 border-b-2 border-blue-200 pb-2 mb-4">Educación Académica</h2>
                    <div className="space-y-4">
                        <div>
                            <h3 className="font-bold text-lg">LEARNING HEROES</h3>
                            <p className="text-sm text-gray-500">2024-2025</p>
                            <p className="text-gray-700">Programa Intensivo de Transformación Digital y Especialización en IA Aplicada.</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">ITESM</h3>
                            <p className="text-sm text-gray-500">2002-2004</p>
                            <p className="text-gray-700">Master en Administración de Negocios (MBA).</p>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg">ITESM</h3>
                            <p className="text-sm text-gray-500">1991-1995</p>
                            <p className="text-gray-700">Licenciatura en Mercadotecnia (Mención Honorífica).</p>
                        </div>
                        <div className="mt-4">
                            <h3 className="font-bold text-lg">Otros estudios</h3>
                            <ul className="list-disc list-inside mt-2 text-gray-700">
                                <li>Diploma en Marketing Digital; ITAM 2022.</li>
                                <li>Diploma en Gestión Estratégica de las Finanzas Públicas.</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default App;