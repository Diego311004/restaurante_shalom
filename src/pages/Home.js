import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text fade-in-left">
            <h1 className="hero-title">
              <span className="hero-title-main">Restaurante Shalom</span>
              <span className="hero-title-sub">Sabores que Conectan</span>
            </h1>
            <p className="hero-subtitle">
              Descubre los auténticos sabores de México y América en cada bocado. 
              Cada platillo está preparado con amor y los mejores ingredientes frescos.
            </p>
            <div className="hero-buttons">
              <Link to="/menu" className="btn btn-primary pulse">
                <span>🍽️ Ver Menú</span>
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <span>📞 Reservar Ahora</span>
              </Link>
            </div>
          </div>
          <div className="hero-image fade-in-right">
            <div className="hero-food-showcase">
              <div className="food-item float" style={{animationDelay: '0s'}}>
                <img src="https://tse2.mm.bing.net/th/id/OIP.x30IET6aqJqkHKyHuwpAlQHaE8?pid=Api&P=0&h=180" alt="Tacos" />
              </div>
              <div className="food-item float" style={{animationDelay: '0.5s'}}>
                <img src="https://tse4.mm.bing.net/th/id/OIP.fc0ECcbhPzHdL4iyo_Kh4AHaE5?pid=Api&P=0&h=180" alt="Gorditas" />
              </div>
              <div className="food-item float" style={{animationDelay: '1s'}}>
                <img src="https://tse1.mm.bing.net/th/id/OIP.M_bcErpf1Kb__ri4TCvGQgHaE7?pid=Api&P=0&h=180" alt="Hamburguesa" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Especialidades Section */}
      <section className="section specialties">
        <div className="container">
          <h2 className="section-title fade-in-up">Nuestras Especialidades</h2>
          <p className="section-subtitle fade-in-up">
            Cada platillo está preparado con ingredientes frescos y recetas tradicionales 
            que han pasado de generación en generación
          </p>
          
          <div className="specialties-grid">
            <div className="specialty-card card fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="specialty-image">
                <img src="https://tse2.mm.bing.net/th/id/OIP.x30IET6aqJqkHKyHuwpAlQHaE8?pid=Api&P=0&h=180" alt="Tacos Auténticos" />
                <div className="specialty-overlay">
                  <span className="specialty-price">Desde $45</span>
                </div>
              </div>
              <div className="specialty-content">
                <div className="specialty-icon">🌮</div>
                <h3>Tacos Auténticos</h3>
                <p>Tortillas hechas a mano con carne asada, pollo o cerdo, acompañados de salsa y guacamole fresco.</p>
                <Link to="/menu" className="specialty-link">Ver más →</Link>
              </div>
            </div>
            
            <div className="specialty-card card fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="specialty-image">
                <img src="https://tse4.mm.bing.net/th/id/OIP.fc0ECcbhPzHdL4iyo_Kh4AHaE5?pid=Api&P=0&h=180" alt="Gorditas Caseras" />
                <div className="specialty-overlay">
                  <span className="specialty-price">Desde $35</span>
                </div>
              </div>
              <div className="specialty-content">
                <div className="specialty-icon">🥙</div>
                <h3>Gorditas Caseras</h3>
                <p>Masa de maíz rellena de chicharrón prensado, frijoles, queso y otros ingredientes tradicionales.</p>
                <Link to="/menu" className="specialty-link">Ver más →</Link>
              </div>
            </div>
            
            <div className="specialty-card card fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="specialty-image">
                <img src="https://tse1.mm.bing.net/th/id/OIP.M_bcErpf1Kb__ri4TCvGQgHaE7?pid=Api&P=0&h=180" alt="Hamburguesas Gourmet" />
                <div className="specialty-overlay">
                  <span className="specialty-price">Desde $70</span>
                </div>
              </div>
              <div className="specialty-content">
                <div className="specialty-icon">🍔</div>
                <h3>Hamburguesas Gourmet</h3>
                <p>Hamburguesas con carne 100% de res, queso derretido, vegetales frescos y nuestras salsas especiales.</p>
                <Link to="/menu" className="specialty-link">Ver más →</Link>
              </div>
            </div>
            
            <div className="specialty-card card fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="specialty-image">
                <img src="https://tse4.mm.bing.net/th/id/OIP.Szyf1is2FPD70zAW8TeadAHaE8?pid=Api&P=0&h=180" alt="Burritos Gigantes" />
                <div className="specialty-overlay">
                  <span className="specialty-price">Desde $65</span>
                </div>
              </div>
              <div className="specialty-content">
                <div className="specialty-icon">🌯</div>
                <h3>Burritos Gigantes</h3>
                <p>Enormes burritos rellenos de carne, frijoles, arroz y verduras frescas. ¡Una comida completa!</p>
                <Link to="/menu" className="specialty-link">Ver más →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas Section */}
      <section className="section stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="stat-number">15+</div>
              <div className="stat-label">Años de Experiencia</div>
            </div>
            <div className="stat-item fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="stat-number">50+</div>
              <div className="stat-label">Platillos Diferentes</div>
            </div>
            <div className="stat-item fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="stat-number">1000+</div>
              <div className="stat-label">Clientes Satisfechos</div>
            </div>
            <div className="stat-item fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="stat-number">5</div>
              <div className="stat-label">Premios Gastronómicos</div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Section */}
      <section className="section hours">
        <div className="container">
          <div className="hours-content">
            <div className="hours-info fade-in-left">
              <h2>Horarios de Atención</h2>
              <p className="hours-description">
                Estamos abiertos todos los días para servirte los mejores platillos 
                en un ambiente cálido y familiar.
              </p>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="day">Lunes - Viernes</span>
                  <span className="time">8:00 AM - 10:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Sábados</span>
                  <span className="time">9:00 AM - 11:00 PM</span>
                </div>
                <div className="hours-item">
                  <span className="day">Domingos</span>
                  <span className="time">10:00 AM - 9:00 PM</span>
                </div>
              </div>
              <div className="hours-buttons">
                <Link to="/contact" className="btn btn-primary">Ver Ubicación</Link>
                <Link to="/contact" className="btn btn-outline">Llamar Ahora</Link>
              </div>
            </div>
            <div className="hours-image fade-in-right">
              <div className="hours-visual">
                <div className="hours-clock">
                  <div className="clock-face">
                    <div className="clock-hand hour"></div>
                    <div className="clock-hand minute"></div>
                    <div className="clock-center"></div>
                  </div>
                </div>
                <div className="hours-text">
                  <h3>¡Siempre Abiertos!</h3>
                  <p>Para servirte los mejores sabores</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta">
        <div className="container">
          <div className="cta-content fade-in-up">
            <h2>¿Listo para probar nuestros deliciosos platillos?</h2>
            <p>Visítanos hoy mismo y disfruta de la mejor comida mexicana y americana en un ambiente familiar y acogedor.</p>
            <div className="cta-buttons">
              <Link to="/menu" className="btn btn-primary pulse">
                <span>🍽️ Ver Menú Completo</span>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>📞 Llamar Ahora</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 