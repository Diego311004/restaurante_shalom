import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const menuData = {
    alimentos: [
      {
        id: 1,
        name: 'Tacos de Carne Asada',
        description: 'Tortillas de maíz con carne asada, cebolla, cilantro y salsa verde',
        price: '$45',
        category: 'tacos',
        image: 'https://tse2.mm.bing.net/th/id/OIP.x30IET6aqJqkHKyHuwpAlQHaE8?pid=Api&P=0&h=180',
        popular: true
      },
      {
        id: 2,
        name: 'Tacos de Pollo',
        description: 'Tortillas de maíz con pollo deshebrado, lechuga, crema y salsa roja',
        price: '$40',
        category: 'tacos',
        image: 'https://okdiario.com/img/2022/04/30/tacos.jpg'
      },
      {
        id: 3,
        name: 'Tacos de Cerdo',
        description: 'Tortillas de maíz con cerdo adobado, piña, cebolla y salsa habanero',
        price: '$42',
        category: 'tacos',
        image: 'https://images.ctfassets.net/ore4bgrjwvxy/6XXEK9adGnnBuTv5wPvLKv/c43df9382da6b05950258a17da1af34c/Tacos-adobada.jpg'
      },
      {
        id: 4,
        name: 'Gorditas de Chicharrón',
        description: 'Masa de maíz rellena de chicharrón prensado, lechuga, crema y queso',
        price: '$35',
        category: 'gorditas',
        image: 'https://tse4.mm.bing.net/th/id/OIP.fc0ECcbhPzHdL4iyo_Kh4AHaE5?pid=Api&P=0&h=180',
        popular: true
      },
      {
        id: 5,
        name: 'Gorditas de Frijoles',
        description: 'Masa de maíz rellena de frijoles refritos, queso y salsa',
        price: '$30',
        category: 'gorditas',
        image: 'https://tse4.mm.bing.net/th/id/OIP.sGnf8d3Bju7A3BqXKgzUhAHaFj?pid=Api&P=0&h=180'
      },
      {
        id: 6,
        name: 'Gorditas de Queso',
        description: 'Masa de maíz rellena de queso fresco, lechuga y crema',
        price: '$32',
        category: 'gorditas',
        image: 'https://tse3.mm.bing.net/th/id/OIP.-zsuQOqOOmsBgPxvxWA_egHaE6?pid=Api&P=0&h=180'
      },
      {
        id: 7,
        name: 'Burrito de Carne',
        description: 'Tortilla grande rellena de carne asada, frijoles, arroz y guacamole',
        price: '$65',
        category: 'burritos',
        image: 'https://tse4.mm.bing.net/th/id/OIP.Szyf1is2FPD70zAW8TeadAHaE8?pid=Api&P=0&h=180',
        popular: true
      },
      {
        id: 8,
        name: 'Burrito de Pollo',
        description: 'Tortilla grande rellena de pollo, frijoles, arroz y pico de gallo',
        price: '$60',
        category: 'burritos',
        image: 'https://tse1.mm.bing.net/th/id/OIP.QsA7Hkz3X8rrqgtCTbnjugHaE5?pid=Api&P=0&h=180'
      },
      {
        id: 9,
        name: 'Burrito Vegetariano',
        description: 'Tortilla grande rellena de frijoles, arroz, verduras y queso',
        price: '$55',
        category: 'burritos',
        image: 'https://tse3.mm.bing.net/th/id/OIP.htGhPNv6kVlZw-MhCMGXTwHaFj?pid=Api&P=0&h=180'
      },
      {
        id: 10,
        name: 'Keka de Carne',
        description: 'Pan de keka relleno de carne asada, queso, lechuga y tomate',
        price: '$50',
        category: 'kekas',
        image: 'https://tse4.mm.bing.net/th/id/OIP.bYFud-71jcuYc6-GauohIgHaFj?pid=Api&P=0&h=180'
      },
      {
        id: 11,
        name: 'Keka de Pollo',
        description: 'Pan de keka relleno de pollo, aguacate, crema y salsa',
        price: '$48',
        category: 'kekas',
        image: 'https://tse3.mm.bing.net/th/id/OIP.5PsHb3PX8eOhgMvUjr1sDgHaFj?pid=Api&P=0&h=180'
      },
      {
        id: 12,
        name: 'Hamburguesa Clásica',
        description: 'Carne de res, lechuga, tomate, cebolla, queso y salsa especial',
        price: '$70',
        category: 'hamburguesas',
        image: 'https://tse1.mm.bing.net/th/id/OIP.M_bcErpf1Kb__ri4TCvGQgHaE7?pid=Api&P=0&h=180',
        popular: true
      },
      {
        id: 13,
        name: 'Hamburguesa con Tocino',
        description: 'Carne de res, tocino crujiente, queso, lechuga y salsa BBQ',
        price: '$85',
        category: 'hamburguesas',
        image: 'https://tse2.mm.bing.net/th/id/OIP.-MTe_1gEXujVyh3gbh55eQHaFW?pid=Api&P=0&h=180'
      },
      {
        id: 14,
        name: 'Hamburguesa Vegetariana',
        description: 'Hamburguesa de lentejas, lechuga, tomate, cebolla y queso',
        price: '$65',
        category: 'hamburguesas',
        image: 'https://tse1.mm.bing.net/th/id/OIP.u8bmM-3Pb4f5u1OqVQnkhwHaEK?pid=Api&P=0&h=180'
      },
      {
        id: 15,
        name: 'Hot Dog Clásico',
        description: 'Pan de hot dog con salchicha, cebolla, mostaza y catsup',
        price: '$45',
        category: 'hotdogs',
        image: 'https://tse4.mm.bing.net/th/id/OIP.P2Hm9KuFrhydEG8Zw82_0AHaEK?pid=Api&P=0&h=180'
      },
      {
        id: 16,
        name: 'Hot Dog Especial',
        description: 'Pan de hot dog con salchicha, chile, cebolla, tomate y queso',
        price: '$50',
        category: 'hotdogs',
        image: 'https://tse4.mm.bing.net/th/id/OIP.fMlk9cSbL_2wWODHVsbQAQHaHY?pid=Api&P=0&h=180'
      },
      {
        id: 17,
        name: 'Torta de Carne',
        description: 'Bolillo con carne asada, aguacate, queso, lechuga y tomate',
        price: '$55',
        category: 'tortas',
        image: 'https://tse3.mm.bing.net/th/id/OIP.ugm9Fvc3DSjUlcH68v6GHQHaEK?pid=Api&P=0&h=180'
      },
      {
        id: 18,
        name: 'Torta de Pollo',
        description: 'Bolillo con pollo, aguacate, crema, lechuga y salsa',
        price: '$52',
        category: 'tortas',
        image: 'https://tse1.mm.bing.net/th/id/OIP.YiIyiXseROqmryb07kLpbQHaHa?pid=Api&P=0&h=180'
      },
      {
        id: 19,
        name: 'Torta de Jamón',
        description: 'Bolillo con jamón, queso, lechuga, tomate y mayonesa',
        price: '$48',
        category: 'tortas',
        image: 'https://tse1.mm.bing.net/th/id/OIP.48WGVrK5gl_AUEtwu8-8dwHaE7?pid=Api&P=0&h=180'
      }
    ],
    bebidas: [
      {
        id: 20,
        name: 'Coca Cola',
        description: 'Refresco de cola 600ml',
        price: '$25',
        category: 'refrescos',
        image: 'https://tse1.mm.bing.net/th/id/OIP.tKQX9UnJmLoRZ0Ht-CuuQAHaHa?pid=Api&P=0&h=180'
      },
      {
        id: 21,
        name: 'Pepsi',
        description: 'Refresco de limón 600ml',
        price: '$25',
        category: 'refrescos',
        image: 'https://sp.yimg.com/ib/th?id=OPHS.uW7kWek9I4qCxA474C474&o=5&pid=21.1&w=160&h=105'
      },
      {
        id: 22,
        name: 'Fanta',
        description: 'Refresco de naranja 600ml',
        price: '$25',
        category: 'refrescos',
        image: 'https://sp.yimg.com/ib/th?id=OPHS.3jDZzYGjZqNugQ474C474&o=5&pid=21.1&w=160&h=105'
      },
      {
        id: 23,
        name: 'Jugo de Naranja',
        description: 'Jugo natural de naranja 500ml',
        price: '$30',
        category: 'jugos',
        image: 'https://tse1.mm.bing.net/th/id/OIP.j95tIwIqUur9WveOvyTD-AHaEo?pid=Api&P=0&h=180'
      },
      {
        id: 24,
        name: 'Jugo de Manzana',
        description: 'Jugo natural de manzana 500ml',
        price: '$30',
        category: 'jugos',
        image: 'https://tse1.mm.bing.net/th/id/OIP.j95tIwIqUur9WveOvyTD-AHaEo?pid=Api&P=0&h=180'
      },
      {
        id: 25,
        name: 'Jugo de Piña',
        description: 'Jugo natural de piña 500ml',
        price: '$30',
        category: 'jugos',
        image: 'https://tse1.mm.bing.net/th/id/OIP.j95tIwIqUur9WveOvyTD-AHaEo?pid=Api&P=0&h=180'
      },
      {
        id: 26,
        name: 'Café Americano',
        description: 'Café negro tradicional',
        price: '$20',
        category: 'cafe',
        image: 'https://tse1.mm.bing.net/th/id/OIP.28uutQpUEzCxaArPR02rkgHaHa?pid=Api&P=0&h=180'
      },
      {
        id: 27,
        name: 'Café con Leche',
        description: 'Café con leche caliente',
        price: '$25',
        category: 'cafe',
        image: 'https://tse4.mm.bing.net/th/id/OIP._F8S55MBiMeDQlMrbYjvuQHaE8?pid=Api&P=0&h=180'
      },
      {
        id: 28,
        name: 'Cappuccino',
        description: 'Café con leche espumada y chocolate',
        price: '$30',
        category: 'cafe',
        image: 'https://tse3.mm.bing.net/th/id/OIP.CP6kOoGbbvKuPlyAflQ3wwHaE7?pid=Api&P=0&h=180'
      }
    ]
  };

  const categories = [
    { id: 'todos', name: 'Todo el Menú', icon: '🍽️' },
    { id: 'tacos', name: 'Tacos', icon: '🌮' },
    { id: 'gorditas', name: 'Gorditas', icon: '🥙' },
    { id: 'burritos', name: 'Burritos', icon: '🌯' },
    { id: 'kekas', name: 'Kekas', icon: '🥪' },
    { id: 'hamburguesas', name: 'Hamburguesas', icon: '🍔' },
    { id: 'hotdogs', name: 'Hot Dogs', icon: '🌭' },
    { id: 'tortas', name: 'Tortas', icon: '🥪' },
    { id: 'refrescos', name: 'Refrescos', icon: '🥤' },
    { id: 'jugos', name: 'Jugos', icon: '🧃' },
    { id: 'cafe', name: 'Café', icon: '☕' }
  ];

  const allItems = [...menuData.alimentos, ...menuData.bebidas];
  
  const filteredItems = activeCategory === 'todos' 
    ? allItems 
    : allItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      <div className="menu-hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="menu-hero-content">
            <h1 className="menu-title fade-in-up">Nuestro Menú</h1>
            <p className="menu-subtitle fade-in-up">
              Descubre todos nuestros deliciosos platillos y bebidas preparados 
              con los mejores ingredientes y recetas tradicionales
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Filtros de categorías */}
        <div className="menu-filters fade-in-up">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className="filter-icon">{category.icon}</span>
              <span className="filter-text">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Grid de productos */}
        <div className="menu-grid">
          {filteredItems.map((item, index) => (
            <div 
              key={item.id} 
              className={`menu-item card fade-in-up ${item.popular ? 'popular' : ''}`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="menu-item-image">
                <img src={item.image} alt={item.name} />
                {item.popular && (
                  <div className="popular-badge">
                    <span>🔥 Popular</span>
                  </div>
                )}
                <div className="menu-item-overlay">
                  <div className="overlay-content">
                    <span className="overlay-price">{item.price}</span>
                    <button className="overlay-btn">Ver Detalles</button>
                  </div>
                </div>
              </div>
              <div className="menu-item-content">
                <div className="menu-item-header">
                  <h3 className="menu-item-name">{item.name}</h3>
                  <span className="menu-item-price">{item.price}</span>
                </div>
                <p className="menu-item-description">{item.description}</p>
                <div className="menu-item-footer">
                  <span className="menu-item-category">
                    {categories.find(cat => cat.id === item.category)?.icon} {categories.find(cat => cat.id === item.category)?.name}
                  </span>
                  <button className="menu-item-btn">Agregar al Pedido</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-items fade-in-up">
            <div className="no-items-icon">🍽️</div>
            <h3>No hay productos en esta categoría</h3>
            <p>Prueba seleccionando otra categoría o ver todo el menú</p>
            <button 
              className="btn btn-primary"
              onClick={() => setActiveCategory('todos')}
            >
              Ver Todo el Menú
            </button>
          </div>
        )}

        {/* Sección de promociones */}
        <section className="menu-promotions fade-in-up">
          <h2>🎉 Promociones Especiales</h2>
          <div className="promotions-grid">
            <div className="promotion-card card">
              <div className="promotion-image">
                <img src="https://tse2.mm.bing.net/th/id/OIP.x30IET6aqJqkHKyHuwpAlQHaE8?pid=Api&P=0&h=180" alt="Combo Familiar" />
              </div>
              <div className="promotion-content">
                <h3>Combo Familiar</h3>
                <p>4 tacos + 2 bebidas + papas fritas</p>
                <div className="promotion-price">
                  <span className="original-price">$180</span>
                  <span className="discount-price">$150</span>
                </div>
              </div>
            </div>
            
            <div className="promotion-card card">
              <div className="promotion-image">
                <img src="https://tse1.mm.bing.net/th/id/OIP.M_bcErpf1Kb__ri4TCvGQgHaE7?pid=Api&P=0&h=180" alt="Hamburguesa + Bebida" />
              </div>
              <div className="promotion-content">
                <h3>Hamburguesa + Bebida</h3>
                <p>Cualquier hamburguesa + bebida de 600ml</p>
                <div className="promotion-price">
                  <span className="original-price">$95</span>
                  <span className="discount-price">$80</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu; 