import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí se podría implementar el envío del formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    setFormData({
      nombre: '',
      email: '',
      telefono: '',
      mensaje: ''
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="contact-hero-content">
            <h1 className="contact-title fade-in-up">Contáctanos</h1>
            <p className="contact-subtitle fade-in-up">
              Estamos aquí para servirte. ¡Visítanos o llámanos para hacer tu pedido!
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        {/* Información de Contacto */}
        <section className="section contact-info">
          <div className="contact-grid">
            <div className="contact-card card fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="contact-icon">📍</div>
              <h3>Ubicación</h3>
              <p>Av. Insurgentes Sur #1234</p>
              <p>Col. Del Valle, Benito Juárez</p>
              <p>Ciudad de México, CDMX 03100</p>
              <a href="https://maps.google.com/?q=Av.+Insurgentes+Sur+1234,+Del+Valle,+Ciudad+de+México,+CDMX" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="contact-link">
                Ver en Google Maps →
              </a>
            </div>
            
            <div className="contact-card card fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="contact-icon">📞</div>
              <h3>Teléfono</h3>
              <p>(55) 1234-5678</p>
              <p>(55) 1234-5679</p>
              <p>WhatsApp: (55) 1234-5680</p>
              <a href="tel:+525512345678" className="contact-link">
                Llamar Ahora →
              </a>
            </div>
            
            <div className="contact-card card fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="contact-icon">📧</div>
              <h3>Email</h3>
              <p>info@restauranteshalom.com</p>
              <p>reservaciones@restauranteshalom.com</p>
              <p>soporte@restauranteshalom.com</p>
              <a href="mailto:info@restauranteshalom.com" className="contact-link">
                Enviar Email →
              </a>
            </div>
            
            <div className="contact-card card fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="contact-icon">🕐</div>
              <h3>Horarios</h3>
              <p>Lunes - Viernes: 8:00 AM - 10:00 PM</p>
              <p>Sábados: 9:00 AM - 11:00 PM</p>
              <p>Domingos: 10:00 AM - 9:00 PM</p>
              <span className="status-open">🟢 Abierto Ahora</span>
            </div>
          </div>
        </section>

        {/* Mapa y Formulario */}
        <section className="section contact-main">
          <div className="contact-main-grid">
            {/* Mapa */}
            <div className="map-section fade-in-left">
              <h2>Nuestra Ubicación</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.1234567890123!2d-99.12345678901234!3d19.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ce1f1234567890%3A0xabcdef1234567890!2sRestaurante%20Shalom!5e0!3m2!1ses!2smx!4v1234567890123"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación Restaurante Shalom"
                ></iframe>
                <div className="map-info">
                  <div className="map-info-content">
                    <h3>📍 Restaurante Shalom</h3>
                    <p>Av. Insurgentes Sur #1234, Col. Del Valle</p>
                    <p>Ciudad de México, CDMX 03100</p>
                    <div className="map-buttons">
                      <a 
                        href="https://maps.google.com/?q=Av.+Insurgentes+Sur+1234,+Del+Valle,+Ciudad+de+México,+CDMX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                      >
                        📍 Ver en Google Maps
                      </a>
                      <a 
                        href="https://maps.google.com/directions?daddr=Av.+Insurgentes+Sur+1234,+Del+Valle,+Ciudad+de+México,+CDMX" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        🚗 Obtener Direcciones
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="form-section fade-in-right">
              <h2>Envíanos un Mensaje</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre Completo *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre completo"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="(55) 1234-5678"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje *</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Escribe tu mensaje aquí..."
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">
                  📧 Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Información Adicional */}
        <section className="section additional-info">
          <div className="info-grid">
            <div className="info-card card fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="info-icon">🚚</div>
              <h3>Servicio a Domicilio</h3>
              <p>
                Ofrecemos servicio a domicilio en un radio de 5km. 
                Llámanos para hacer tu pedido y lo llevaremos hasta tu puerta.
              </p>
              <p className="info-highlight">⏱️ Tiempo de entrega: 30-45 minutos</p>
              <a href="tel:+525512345678" className="info-link">📞 Llamar para Pedido</a>
            </div>
            
            <div className="info-card card fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="info-icon">🎉</div>
              <h3>Eventos Especiales</h3>
              <p>
                Organizamos eventos especiales, fiestas y celebraciones. 
                Contáctanos para reservar nuestro local o solicitar catering.
              </p>
              <p className="info-highlight">📅 Reservas con 48 horas de anticipación</p>
              <a href="mailto:reservaciones@restauranteshalom.com" className="info-link">📧 Solicitar Reserva</a>
            </div>
            
            <div className="info-card card fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="info-icon">💳</div>
              <h3>Métodos de Pago</h3>
              <p>
                Aceptamos efectivo, tarjetas de crédito y débito, 
                transferencias bancarias y pagos móviles.
              </p>
              <p className="info-highlight">✅ También aceptamos vales de comida</p>
              <div className="payment-methods">
                <span>💳</span>
                <span>🏦</span>
                <span>📱</span>
                <span>💵</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sección de Redes Sociales */}
        <section className="section social-media">
          <h2 className="section-title fade-in-up">Síguenos en Redes Sociales</h2>
          <div className="social-grid">
            <a href="#" className="social-card card fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="social-icon">📘</div>
              <h3>Facebook</h3>
              <p>@RestauranteShalom</p>
            </a>
            
            <a href="#" className="social-card card fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="social-icon">📷</div>
              <h3>Instagram</h3>
              <p>@restaurante_shalom</p>
            </a>
            
            <a href="#" className="social-card card fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="social-icon">🐦</div>
              <h3>Twitter</h3>
              <p>@ShalomRest</p>
            </a>
            
            <a href="#" className="social-card card fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="social-icon">📺</div>
              <h3>YouTube</h3>
              <p>Restaurante Shalom</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contact; 