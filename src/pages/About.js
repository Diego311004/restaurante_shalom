import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 className="about-title">Sobre Restaurante Shalom</h1>
          <p className="about-subtitle">
            Más de 15 años sirviendo los mejores sabores de México y América
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="section historia">
        <div className="container">
          <div className="historia-content">
            <div className="historia-text">
              <h2>Nuestra Historia</h2>
              <p>
                Restaurante Shalom nació en 2008 con la visión de llevar los auténticos sabores 
                de la cocina mexicana y americana a todos nuestros clientes. Fundado por la 
                familia González, nuestro restaurante comenzó como un pequeño local con apenas 
                cuatro mesas y un sueño grande.
              </p>
              <p>
                Con el tiempo, gracias a la calidad de nuestros ingredientes, la pasión por 
                la cocina y el servicio excepcional, hemos crecido hasta convertirnos en uno 
                de los restaurantes más queridos de la comunidad.
              </p>
              <p>
                Hoy en día, seguimos manteniendo las mismas recetas tradicionales que nos 
                hicieron famosos, pero con la comodidad y el ambiente moderno que nuestros 
                clientes merecen.
              </p>
            </div>
            <div className="historia-image">
              <div className="historia-placeholder">
                🏪
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="section valores">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="valores-grid">
            <div className="valor-card card">
              <div className="valor-icon">🌱</div>
              <h3>Ingredientes Frescos</h3>
              <p>
                Utilizamos solo ingredientes frescos y de la más alta calidad. 
                Todos nuestros productos son seleccionados diariamente para 
                garantizar el mejor sabor.
              </p>
            </div>
            
            <div className="valor-card card">
              <div className="valor-icon">👨‍🍳</div>
              <h3>Cocina Tradicional</h3>
              <p>
                Nuestras recetas han sido transmitidas de generación en generación. 
                Mantenemos las técnicas tradicionales que hacen que cada platillo 
                sea único y delicioso.
              </p>
            </div>
            
            <div className="valor-card card">
              <div className="valor-icon">🤝</div>
              <h3>Servicio Familiar</h3>
              <p>
                Tratamos a cada cliente como parte de nuestra familia. 
                Nos esforzamos por crear una experiencia cálida y acogedora 
                en cada visita.
              </p>
            </div>
            
            <div className="valor-card card">
              <div className="valor-icon">🌟</div>
              <h3>Excelencia</h3>
              <p>
                Buscamos la excelencia en cada detalle, desde la preparación 
                de los alimentos hasta la atención al cliente. 
                Tu satisfacción es nuestra prioridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="section equipo">
        <div className="container">
          <h2 className="section-title">Nuestro Equipo</h2>
          <div className="equipo-grid">
            <div className="equipo-card card">
              <div className="equipo-avatar">👨‍🍳</div>
              <h3>Chef Carlos González</h3>
              <p className="equipo-cargo">Chef Principal</p>
              <p>
                Con más de 20 años de experiencia en la cocina mexicana, 
                el Chef Carlos es el corazón de nuestra cocina.
              </p>
            </div>
            
            <div className="equipo-card card">
              <div className="equipo-avatar">👩‍🍳</div>
              <h3>María González</h3>
              <p className="equipo-cargo">Cocinera</p>
              <p>
                Especialista en platillos tradicionales y la responsable 
                de mantener vivas nuestras recetas familiares.
              </p>
            </div>
            
            <div className="equipo-card card">
              <div className="equipo-avatar">👨‍💼</div>
              <h3>Roberto González</h3>
              <p className="equipo-cargo">Gerente</p>
              <p>
                Se encarga de que cada cliente tenga la mejor experiencia 
                posible en nuestro restaurante.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Logros Section */}
      <section className="section logros">
        <div className="container">
          <h2 className="section-title">Nuestros Logros</h2>
          <div className="logros-grid">
            <div className="logro-item">
              <div className="logro-number">15+</div>
              <div className="logro-text">Años de Experiencia</div>
            </div>
            
            <div className="logro-item">
              <div className="logro-number">50+</div>
              <div className="logro-text">Platillos Diferentes</div>
            </div>
            
            <div className="logro-item">
              <div className="logro-number">1000+</div>
              <div className="logro-text">Clientes Satisfechos</div>
            </div>
            
            <div className="logro-item">
              <div className="logro-number">5</div>
              <div className="logro-text">Premios Gastronómicos</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 