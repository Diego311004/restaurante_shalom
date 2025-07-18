import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>🍽️ Restaurante Shalom</h3>
            <p>Los mejores sabores de México y América en un solo lugar. Disfruta de nuestra auténtica cocina casera.</p>
          </div>
          
          <div className="footer-section">
            <h4>Enlaces Rápidos</h4>
            <ul>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/menu">Menú</Link></li>
              <li><Link to="/about">Nosotros</Link></li>
              <li><Link to="/contact">Contacto</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Horarios</h4>
            <ul>
              <li>Lunes - Viernes: 8:00 AM - 10:00 PM</li>
              <li>Sábados: 9:00 AM - 11:00 PM</li>
              <li>Domingos: 10:00 AM - 9:00 PM</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contacto</h4>
            <ul>
              <li>📞 (555) 123-4567</li>
              <li>📧 info@restauranteshalom.com</li>
              <li>📍 Av. Principal #123, Centro</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Restaurante Shalom. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 