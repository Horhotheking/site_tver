/**
 * ============================================
 * APP.JS — Основная логика сайта аренды
 * ============================================
 * Vanilla JS, без fetch, без фреймворков
 */

(function() {
  'use strict';

  // ============================================
  // SVG ICONS LIBRARY
  // ============================================
  const ICONS = {
    // Navigation
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    chevronDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6,9 12,15 18,9"/></svg>',
    chevronUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="18,15 12,9 6,15"/></svg>',
    chevronRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,6 15,12 9,18"/></svg>',
    arrowUp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5,12 12,5 19,12"/></svg>',
    
    // Theme
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    
    // Contact
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    mapPin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>',
    
    // Perks
    location: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    traffic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    parking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 0 1 0 6H9"/></svg>',
    security: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>',
    internet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    elevator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><polyline points="8,12 12,8 16,12"/></svg>',
    bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 6v6"/><path d="M16 6v6"/><path d="M2 12h20"/><path d="M4 8h16V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
    fire: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>',
    vent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/></svg>',
    access: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10,17 15,12 10,7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>',
    
    // Misc
    building: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9.01" y2="6"/><line x1="15" y1="6" x2="15.01" y2="6"/><line x1="9" y1="10" x2="9.01" y2="10"/><line x1="15" y1="10" x2="15.01" y2="10"/><line x1="9" y1="14" x2="9.01" y2="14"/><line x1="15" y1="14" x2="15.01" y2="14"/><line x1="9" y1="18" x2="15" y2="18"/></svg>',
    floor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/></svg>',
    area: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg>',
    window: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="3" x2="12" y2="21"/><line x1="3" y1="12" x2="21" y2="12"/></svg>',
    image: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21,15 16,10 5,21"/></svg>',
    list: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    grid: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
    download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"/></svg>',
    percent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
    money: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
    calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    
    // Messengers
    whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    viber: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.398.002C9.473.028 5.331.344 3.014 2.467 1.294 4.105.693 6.507.602 9.5.511 12.493.334 18.108 5.283 19.534v2.27s-.038.919.569 1.106c.733.228 1.163-.472 1.864-1.225l1.277-1.46c3.349.281 5.93-.361 6.222-.461.675-.232 4.508-.71 5.134-5.8.648-5.257-.307-8.578-2.009-10.058l-.006-.007c-.472-.426-2.32-1.973-6.7-1.91a27.374 27.374 0 00-.836.013zm.076 1.68c.94-.014 1.793.038 2.536.13 2.654.327 4.086 1.407 4.481 1.76 1.392 1.238 2.063 4.16 1.542 8.36-.5 4.065-3.396 4.403-3.96 4.596-.238.082-2.466.621-5.257.433 0 0-2.077 2.508-2.729 3.173-.102.104-.225.144-.304.125-.113-.028-.144-.159-.143-.352l.022-3.453c-4.034-1.157-3.8-5.538-3.727-8.037.073-2.5.534-4.476 1.935-5.836 1.73-1.68 5.034-1.857 5.604-1.899zm.176 1.888a.344.344 0 100 .688.344.344 0 000-.688zm-2.931.295a.344.344 0 10-.002.688.344.344 0 00.002-.688zm5.835.001a.344.344 0 10-.001.687.344.344 0 00.001-.687zM7.628 5.499a1.203 1.203 0 00-.424.089c-.196.084-.378.222-.524.357-.265.243-.427.5-.512.79-.092.31-.102.651-.049.982.129.802.532 1.706 1.206 2.645.447.622.979 1.243 1.65 1.837.249.221.52.433.807.636.287.203.59.397.908.58.946.544 1.955.915 2.807.978.455.033.89-.017 1.253-.17.278-.117.527-.297.706-.523.173-.219.282-.475.298-.748.01-.165-.008-.32-.077-.459-.126-.254-.353-.43-.58-.588a17.642 17.642 0 00-.639-.41c-.276-.171-.577-.31-.9-.356a.668.668 0 00-.573.147l-.43.396c-.157.144-.36.174-.515.11-.4-.165-1.03-.554-1.525-1.026-.495-.471-.927-1.069-1.114-1.459-.073-.153-.05-.355.1-.516l.375-.446a.668.668 0 00.11-.583c-.065-.32-.225-.612-.418-.879a17.642 17.642 0 00-.46-.598c-.178-.216-.367-.427-.626-.535a.634.634 0 00-.254-.05z"/></svg>',
    telegram: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
  };

  // ============================================
  // HEADER TEMPLATE
  // ============================================
  function getHeaderHTML(activePage = '', basePath = '') {
    // Determine basePath from current location if not provided
    if (!basePath) {
      const path = window.location.pathname;
      if (path.includes('/pages/info/')) {
        basePath = '../../';
      } else if (path.includes('/pages/')) {
        basePath = '../';
      }
    }
    
    return `
      <header class="header" id="header">
        <div class="header__inner">
          <a href="${basePath}index.html" class="header__logo" aria-label="На главную">
            <span class="header__logo-icon">${ICONS.building}</span>
            <span>От собственника</span>
          </a>
          
          <nav class="header__nav" aria-label="Основная навигация">
            <a href="${basePath}index.html" class="header__nav-link ${activePage === 'index' ? 'active' : ''}">Главная</a>
            <a href="${basePath}pages/gallery.html" class="header__nav-link ${activePage === 'gallery' ? 'active' : ''}">Галерея</a>
            <a href="${basePath}pages/tenants.html" class="header__nav-link ${activePage === 'tenants' ? 'active' : ''}">Арендаторы</a>
            <a href="${basePath}pages/info/news.html" class="header__nav-link ${activePage === 'news' ? 'active' : ''}">Новости</a>
            <a href="${basePath}pages/contacts.html" class="header__nav-link ${activePage === 'contacts' ? 'active' : ''}">Контакты</a>
          </nav>
          
          <div class="header__actions">
            <button class="theme-toggle" id="themeToggle" aria-label="Переключить тему">
              <span class="theme-toggle__sun">${ICONS.sun}</span>
              <span class="theme-toggle__moon hidden">${ICONS.moon}</span>
            </button>
            
            <button class="btn btn--primary btn--sm" id="openModalBtn">
              Оставить заявку
            </button>
            
            <button class="burger" id="burgerBtn" aria-label="Открыть меню" aria-expanded="false">
              <span class="burger__lines">
                <span class="burger__line"></span>
                <span class="burger__line"></span>
                <span class="burger__line"></span>
              </span>
            </button>
          </div>
        </div>
      </header>
      
      <nav class="mobile-menu" id="mobileMenu" aria-label="Мобильное меню">
        <div class="mobile-menu__nav">
          <a href="${basePath}index.html" class="mobile-menu__link">Главная</a>
          <a href="${basePath}pages/altair.html" class="mobile-menu__link">ТЦ Альтаир</a>
          <a href="${basePath}pages/kapital.html" class="mobile-menu__link">ТЦ Капитал</a>
          <a href="${basePath}pages/sputnik.html" class="mobile-menu__link">ТОЦ Спутник</a>
          <div class="mobile-menu__divider"></div>
          <a href="${basePath}pages/gallery.html" class="mobile-menu__link">Галерея</a>
          <a href="${basePath}pages/tenants.html" class="mobile-menu__link">Арендаторы</a>
          <a href="${basePath}pages/info/news.html" class="mobile-menu__link">Новости</a>
          <a href="${basePath}pages/info/security.html" class="mobile-menu__link">Безопасность</a>
          <a href="${basePath}pages/info/advertisers.html" class="mobile-menu__link">Рекламодателям</a>
          <a href="${basePath}pages/info/jobs.html" class="mobile-menu__link">Вакансии</a>
          <a href="${basePath}pages/contacts.html" class="mobile-menu__link">Контакты</a>
        </div>
      </nav>
    `;
  }

  // ============================================
  // FOOTER TEMPLATE
  // ============================================
  function getFooterHTML(basePath = '') {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer__grid">
            <div class="footer__brand">
              <a href="${basePath}index.html" class="footer__logo">
                <span class="footer__logo-icon">${ICONS.building}</span>
                <span>От собственника</span>
              </a>
              <p class="footer__tagline">Аренда коммерческих помещений в Твери. Прямые договоры без посредников.</p>
              <div class="footer__socials">
                <a href="#" class="footer__social" aria-label="WhatsApp">${ICONS.whatsapp}</a>
                <a href="#" class="footer__social" aria-label="Viber">${ICONS.viber}</a>
                <a href="#" class="footer__social" aria-label="Telegram">${ICONS.telegram}</a>
              </div>
            </div>
            
            <div class="footer__column">
              <h4 class="footer__column-title">Объекты</h4>
              <nav class="footer__links">
                <a href="${basePath}pages/altair.html" class="footer__link">ТЦ Альтаир</a>
                <a href="${basePath}pages/kapital.html" class="footer__link">ТЦ Капитал</a>
                <a href="${basePath}pages/sputnik.html" class="footer__link">ТОЦ Спутник</a>
              </nav>
            </div>
            
            <div class="footer__column">
              <h4 class="footer__column-title">Информация</h4>
              <nav class="footer__links">
                <a href="${basePath}pages/info/news.html" class="footer__link">Новости</a>
                <a href="${basePath}pages/info/security.html" class="footer__link">Безопасность</a>
                <a href="${basePath}pages/info/advertisers.html" class="footer__link">Рекламодателям</a>
                <a href="${basePath}pages/info/jobs.html" class="footer__link">Вакансии</a>
              </nav>
            </div>
            
            <div class="footer__column">
              <h4 class="footer__column-title">Контакты</h4>
              <nav class="footer__links">
                <a href="tel:+79040280033" class="footer__link">8-904-028-00-33</a>
                <a href="mailto:altair_tver@mail.ru" class="footer__link">altair_tver@mail.ru</a>
                <a href="${basePath}pages/contacts.html" class="footer__link">Все контакты</a>
              </nav>
            </div>
          </div>
          
          <div class="footer__bottom">
            <p class="footer__copy">© ${new Date().getFullYear()} Все права защищены</p>
            <div class="footer__legal">
              <a href="#" class="footer__legal-link">Политика конфиденциальности</a>
              <a href="#" class="footer__legal-link">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  // ============================================
  // MODAL TEMPLATE
  // ============================================
  function getModalHTML() {
    const centers = window.APP_DATA?.centers || [];
    const centerOptions = centers.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
    
    return `
      <div class="modal-overlay" id="modalOverlay" aria-hidden="true"></div>
      <div class="modal" id="modal" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="modal__header">
          <h3 class="modal__title" id="modalTitle">Оставить заявку</h3>
          <button class="modal__close" id="modalClose" aria-label="Закрыть">
            ${ICONS.close}
          </button>
        </div>
        <div class="modal__body">
          <form class="form" id="applicationForm" novalidate>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label form-label--required" for="formName">Ваше имя</label>
                <input type="text" class="form-input" id="formName" name="name" required>
                <span class="form-error" id="formNameError"></span>
              </div>
              <div class="form-group">
                <label class="form-label form-label--required" for="formPhone">Телефон</label>
                <input type="tel" class="form-input" id="formPhone" name="phone" placeholder="+7 (___) ___-__-__" required>
                <span class="form-error" id="formPhoneError"></span>
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="formCenter">Объект</label>
                <select class="form-select" id="formCenter" name="center">
                  <option value="">Любой</option>
                  ${centerOptions}
                </select>
              </div>
              <div class="form-group">
                <label class="form-label" for="formArea">Желаемая площадь</label>
                <input type="text" class="form-input" id="formArea" name="area" placeholder="от 10 м²">
              </div>
            </div>
            
            <div class="form-group">
              <label class="form-label" for="formComment">Комментарий</label>
              <textarea class="form-textarea" id="formComment" name="comment" placeholder="Расскажите о ваших пожеланиях..."></textarea>
            </div>
            
            <button type="submit" class="btn btn--primary btn--lg btn--full">
              Отправить заявку
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // ============================================
  // TOAST CONTAINER
  // ============================================
  function getToastContainerHTML() {
    return '<div class="toast-container" id="toastContainer"></div>';
  }

  // ============================================
  // SCROLL TO TOP BUTTON
  // ============================================
  function getScrollTopHTML() {
    return `
      <button class="scroll-top" id="scrollTop" aria-label="Наверх">
        ${ICONS.arrowUp}
      </button>
    `;
  }

  // ============================================
  // ICON GETTER
  // ============================================
  window.getIcon = function(name) {
    return ICONS[name] || '';
  };

  // ============================================
  // THEME MANAGEMENT
  // ============================================
  function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = savedTheme || (prefersDark ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', theme);
    updateThemeToggle(theme);
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
  }

  function updateThemeToggle(theme) {
    const toggle = document.getElementById('themeToggle');
    if (!toggle) return;
    
    const sunIcon = toggle.querySelector('.theme-toggle__sun');
    const moonIcon = toggle.querySelector('.theme-toggle__moon');
    
    if (theme === 'dark') {
      sunIcon?.classList.add('hidden');
      moonIcon?.classList.remove('hidden');
    } else {
      sunIcon?.classList.remove('hidden');
      moonIcon?.classList.add('hidden');
    }
  }

  // ============================================
  // MOBILE MENU
  // ============================================
  function initMobileMenu() {
    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');
    
    if (!burger || !menu) return;
    
    burger.addEventListener('click', () => {
      const isOpen = menu.classList.contains('active');
      
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });
    
    // Close on link click
    menu.querySelectorAll('.mobile-menu__link').forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });
    
    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menu.classList.contains('active')) {
        closeMobileMenu();
      }
    });
  }

  function openMobileMenu() {
    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');
    
    burger?.classList.add('active');
    burger?.setAttribute('aria-expanded', 'true');
    menu?.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  function closeMobileMenu() {
    const burger = document.getElementById('burgerBtn');
    const menu = document.getElementById('mobileMenu');
    
    burger?.classList.remove('active');
    burger?.setAttribute('aria-expanded', 'false');
    menu?.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;
    
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    }, { passive: true });
  }

  // ============================================
  // SCROLL TO TOP
  // ============================================
  function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    }, { passive: true });
    
    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================
  // MODAL
  // ============================================
  let focusableElements = [];
  let firstFocusable = null;
  let lastFocusable = null;

  function initModal() {
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('modalClose');
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    
    if (!modal) return;
    
    openBtn?.addEventListener('click', openModal);
    closeBtn?.addEventListener('click', closeModal);
    overlay?.addEventListener('click', closeModal);
    
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
      
      // Trap focus
      if (e.key === 'Tab' && modal.classList.contains('active')) {
        if (e.shiftKey && document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    });
    
    // Additional open buttons
    document.querySelectorAll('[data-open-modal]').forEach(btn => {
      btn.addEventListener('click', openModal);
    });
  }

  function openModal() {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    
    overlay?.classList.add('active');
    modal?.classList.add('active');
    document.body.classList.add('no-scroll');
    
    // Set up focus trap
    focusableElements = modal?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) || [];
    firstFocusable = focusableElements[0];
    lastFocusable = focusableElements[focusableElements.length - 1];
    
    firstFocusable?.focus();
  }

  function closeModal() {
    const overlay = document.getElementById('modalOverlay');
    const modal = document.getElementById('modal');
    
    overlay?.classList.remove('active');
    modal?.classList.remove('active');
    document.body.classList.remove('no-scroll');
    
    document.getElementById('openModalBtn')?.focus();
  }

  // ============================================
  // FORM VALIDATION & SUBMISSION
  // ============================================
  function initForm() {
    const form = document.getElementById('applicationForm');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('formName');
      const phone = document.getElementById('formPhone');
      let isValid = true;
      
      // Reset errors
      clearFormErrors();
      
      // Validate name
      if (!name.value.trim()) {
        showFieldError('formName', 'Введите ваше имя');
        isValid = false;
      } else if (name.value.trim().length < 2) {
        showFieldError('formName', 'Имя должно содержать минимум 2 символа');
        isValid = false;
      }
      
      // Validate phone
      const phoneValue = phone.value.replace(/\D/g, '');
      if (!phoneValue) {
        showFieldError('formPhone', 'Введите номер телефона');
        isValid = false;
      } else if (phoneValue.length < 10) {
        showFieldError('formPhone', 'Введите корректный номер телефона');
        isValid = false;
      }
      
      if (isValid) {
        const formData = {
          name: name.value.trim(),
          phone: phone.value,
          center: document.getElementById('formCenter')?.value || '',
          area: document.getElementById('formArea')?.value || '',
          comment: document.getElementById('formComment')?.value || '',
          timestamp: new Date().toISOString()
        };
        
        console.log('📧 Заявка отправлена:', formData);
        
        // Show success
        showToast('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.', 'success');
        
        // Reset form
        form.reset();
        
        // Close modal
        setTimeout(closeModal, 1500);
      }
    });
    
    // Phone mask
    const phoneInput = document.getElementById('formPhone');
    if (phoneInput) {
      phoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        
        if (value.length > 0) {
          if (value[0] === '7' || value[0] === '8') {
            value = value.slice(1);
          }
          
          let formatted = '+7';
          if (value.length > 0) formatted += ' (' + value.slice(0, 3);
          if (value.length > 3) formatted += ') ' + value.slice(3, 6);
          if (value.length > 6) formatted += '-' + value.slice(6, 8);
          if (value.length > 8) formatted += '-' + value.slice(8, 10);
          
          e.target.value = formatted;
        }
      });
    }
  }

  function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(fieldId + 'Error');
    
    field?.classList.add('error');
    if (error) error.textContent = message;
  }

  function clearFormErrors() {
    document.querySelectorAll('.form-input.error, .form-select.error').forEach(el => {
      el.classList.remove('error');
    });
    document.querySelectorAll('.form-error').forEach(el => {
      el.textContent = '';
    });
  }

  // ============================================
  // TOAST NOTIFICATIONS
  // ============================================
  function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    if (!container) return;
    
    const icons = {
      success: ICONS.check,
      error: ICONS.close,
      warning: ICONS.fire,
      info: ICONS.email
    };
    
    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    toast.innerHTML = `
      <span class="toast__icon">${icons[type]}</span>
      <span class="toast__message">${message}</span>
      <button class="toast__close" aria-label="Закрыть">${ICONS.close}</button>
    `;
    
    container.appendChild(toast);
    
    // Animate in
    requestAnimationFrame(() => {
      toast.classList.add('active');
    });
    
    // Close button
    toast.querySelector('.toast__close').addEventListener('click', () => {
      removeToast(toast);
    });
    
    // Auto remove
    setTimeout(() => {
      removeToast(toast);
    }, 5000);
  }

  function removeToast(toast) {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 300);
  }

  // Make global
  window.showToast = showToast;

  // ============================================
  // SCROLL REVEAL ANIMATIONS
  // ============================================
  function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });
    
    reveals.forEach(el => observer.observe(el));
  }

  // ============================================
  // FAQ ACCORDION
  // ============================================
  function initFaqAccordion() {
    const items = document.querySelectorAll('.faq-item');
    
    items.forEach(item => {
      const question = item.querySelector('.faq-item__question');
      
      question?.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        
        // Close all
        items.forEach(i => i.classList.remove('active'));
        
        // Open clicked if it was closed
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    });
  }

  // ============================================
  // VIEW TOGGLE (Premises/Tenants)
  // ============================================
  function initViewToggle() {
    document.querySelectorAll('.view-toggle').forEach(toggle => {
      const buttons = toggle.querySelectorAll('.view-toggle__btn');
      const targetGrid = document.querySelector(toggle.dataset.target + '-grid');
      const targetList = document.querySelector(toggle.dataset.target + '-list');
      
      buttons.forEach(btn => {
        btn.addEventListener('click', () => {
          buttons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          
          const view = btn.dataset.view;
          
          if (view === 'grid') {
            targetGrid?.classList.remove('hidden');
            targetList?.classList.add('hidden');
          } else {
            targetGrid?.classList.add('hidden');
            targetList?.classList.remove('hidden');
          }
        });
      });
    });
  }

  // ============================================
  // PREMISES FILTER
  // ============================================
  function initPremisesFilter() {
    const filterForm = document.getElementById('premisesFilter');
    if (!filterForm) return;
    
    const filterInputs = filterForm.querySelectorAll('select, input');
    
    filterInputs.forEach(input => {
      input.addEventListener('change', applyPremisesFilter);
    });
    
    // Initial render
    applyPremisesFilter();
  }

  function applyPremisesFilter() {
    const centerSelect = document.getElementById('filterCenter');
    const floorSelect = document.getElementById('filterFloor');
    const minArea = document.getElementById('filterMinArea');
    const maxArea = document.getElementById('filterMaxArea');
    const sortSelect = document.getElementById('filterSort');
    
    let premises = window.getAllFreePremises ? window.getAllFreePremises() : [];
    
    // Filter by center
    if (centerSelect?.value) {
      premises = premises.filter(p => p.centerId === centerSelect.value);
    }
    
    // Filter by floor
    if (floorSelect?.value) {
      premises = premises.filter(p => p.floor === parseInt(floorSelect.value));
    }
    
    // Filter by area
    if (minArea?.value) {
      premises = premises.filter(p => p.area >= parseFloat(minArea.value));
    }
    if (maxArea?.value) {
      premises = premises.filter(p => p.area <= parseFloat(maxArea.value));
    }
    
    // Sort
    if (sortSelect?.value === 'area-asc') {
      premises.sort((a, b) => a.area - b.area);
    } else if (sortSelect?.value === 'area-desc') {
      premises.sort((a, b) => b.area - a.area);
    }
    
    renderPremises(premises);
  }

  function renderPremises(premises) {
    const grid = document.getElementById('premisesGrid');
    const list = document.getElementById('premisesList');
    
    if (!grid && !list) return;
    
    if (premises.length === 0) {
      const emptyHTML = '<p class="text-center text-muted">Помещения не найдены</p>';
      if (grid) grid.innerHTML = emptyHTML;
      if (list) list.innerHTML = emptyHTML;
      return;
    }
    
    // Render grid view
    if (grid) {
      grid.innerHTML = premises.map(p => `
        <div class="premise-card">
          <div class="premise-card__image">
            <span class="premise-card__image-placeholder">${ICONS.building}</span>
            <span class="premise-card__status premise-card__status--free">Свободно</span>
          </div>
          <div class="premise-card__content">
            <div class="premise-card__area">${p.area} м²</div>
            <div class="premise-card__details">
              <span class="premise-card__detail">${ICONS.floor} ${p.floor} этаж</span>
              <span class="premise-card__detail">${ICONS.window} ${p.glazed ? 'Витрина' : 'Без витрины'}</span>
            </div>
            <div class="premise-card__note">${p.note || ''}</div>
            <div class="premise-card__center">${p.centerName}</div>
          </div>
        </div>
      `).join('');
    }
    
    // Render list view
    if (list) {
      list.innerHTML = premises.map(p => `
        <div class="premise-row">
          <span class="premise-row__area">${p.area} м²</span>
          <span class="premise-row__info">${p.floor} этаж • ${p.glazed ? 'Витрина' : 'Без витрины'}</span>
          <span class="premise-row__info">${p.note || ''}</span>
          <span class="premise-row__info">${p.centerName}</span>
          <span class="premise-row__status premise-card__status--free">Свободно</span>
        </div>
      `).join('');
    }
  }

  // ============================================
  // CONTACTS ACCORDION (Object Cards)
  // ============================================
  function initContactsAccordion() {
    document.querySelectorAll('[data-toggle-contacts]').forEach(btn => {
      btn.addEventListener('click', () => {
        const card = btn.closest('.object-card');
        const contacts = card?.querySelector('.object-card__contacts');
        
        if (contacts) {
          const isOpen = contacts.classList.contains('active');
          
          if (isOpen) {
            contacts.classList.remove('active');
            btn.textContent = 'Показать контакты';
          } else {
            contacts.classList.add('active');
            btn.textContent = 'Скрыть контакты';
          }
        }
      });
    });
  }

  // ============================================
  // DOWNLOAD BANNER
  // ============================================
  function initDownloadBanner() {
    const banner = document.getElementById('downloadBanner');
    const closeBtn = banner?.querySelector('.download-banner__close');
    
    // Check if already dismissed
    if (sessionStorage.getItem('bannerDismissed') === 'true') {
      banner?.remove();
      return;
    }
    
    closeBtn?.addEventListener('click', () => {
      banner?.remove();
      sessionStorage.setItem('bannerDismissed', 'true');
    });
  }

  // ============================================
  // SCROLLSPY (Object pages)
  // ============================================
  function initScrollspy() {
    const nav = document.querySelector('.object-nav');
    if (!nav) return;
    
    const links = nav.querySelectorAll('.object-nav__link');
    const sections = [];
    
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const section = document.querySelector(href);
        if (section) sections.push({ link, section });
      }
    });
    
    if (sections.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('active'));
          const activeLink = sections.find(s => s.section === entry.target)?.link;
          activeLink?.classList.add('active');
        }
      });
    }, {
      rootMargin: '-50% 0px -50% 0px'
    });
    
    sections.forEach(({ section }) => observer.observe(section));
  }

  // ============================================
  // GALLERY MODAL
  // ============================================
  function initGalleryModal() {
    // Use the global lightbox for gallery items
    document.querySelectorAll('.gallery-item').forEach(item => {
      item.style.cursor = 'pointer';
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        if (img && typeof window.openPhotoLightbox === 'function') {
          // Collect all gallery images for navigation
          const allItems = document.querySelectorAll('.gallery-item');
          const photoList = Array.from(allItems).map(el => {
            const imgEl = el.querySelector('img');
            const titleEl = el.querySelector('.gallery-item__title');
            return {
              src: imgEl?.src || '',
              alt: titleEl?.textContent || imgEl?.alt || ''
            };
          });
          const idx = Array.from(allItems).indexOf(item);
          window.openPhotoLightbox(photoList, idx >= 0 ? idx : 0);
        }
      });
    });
  }

  // ============================================
  // RENDER HELPERS
  // ============================================
  window.renderObjectCards = function(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !window.APP_DATA) return;
    
    const centers = window.APP_DATA.centers;
    const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
    
    container.innerHTML = centers.map(center => {
      const freePremises = center.premises.filter(p => p.status === 'free');
      const totalFreeArea = freePremises.reduce((sum, p) => sum + p.area, 0);
      
      return `
        <div class="object-card reveal">
          <div class="object-card__image">
            <img src="${basePath}assets/img/center-${center.id}.svg" alt="${center.name}" loading="lazy">
            ${center.specialOffer ? `<span class="object-card__badge">${center.specialOffer.discount}</span>` : ''}
          </div>
          <div class="object-card__content">
            <h3 class="object-card__name">${center.name}</h3>
            <p class="object-card__offer">${center.heroOffer}</p>
            
            <div class="object-card__stats">
              <div class="object-card__stat">
                <div class="object-card__stat-value">${freePremises.length}</div>
                <div class="object-card__stat-label">Свободных</div>
              </div>
              <div class="object-card__stat">
                <div class="object-card__stat-value">${Math.round(totalFreeArea)}</div>
                <div class="object-card__stat-label">м² доступно</div>
              </div>
            </div>
            
            <div class="object-card__actions">
              <a href="${basePath}pages/${center.id}.html" class="btn btn--primary">Подробнее</a>
              <button class="btn btn--secondary" data-toggle-contacts>Показать контакты</button>
            </div>
            
            <div class="object-card__contacts">
              <div class="object-card__contact-row">
                ${ICONS.mapPin}
                <span>${center.address}</span>
              </div>
              <div class="object-card__contact-row">
                ${ICONS.clock}
                <span>${center.hours}</span>
              </div>
              <div class="object-card__contact-row">
                ${ICONS.phone}
                <a href="tel:${center.phone.replace(/\D/g, '')}">${center.phone}</a>
              </div>
              <div class="object-card__contact-row">
                ${ICONS.email}
                <a href="mailto:${center.email}">${center.email}</a>
              </div>
              ${center.messengers.whatsapp || center.messengers.viber || center.messengers.telegram ? `
                <div class="object-card__messengers">
                  ${center.messengers.whatsapp ? `<a href="https://wa.me/${center.messengers.whatsapp}" class="object-card__messenger" aria-label="WhatsApp">${ICONS.whatsapp}</a>` : ''}
                  ${center.messengers.viber ? `<a href="viber://chat?number=${center.messengers.viber}" class="object-card__messenger" aria-label="Viber">${ICONS.viber}</a>` : ''}
                  ${center.messengers.telegram ? `<a href="https://t.me/${center.messengers.telegram}" class="object-card__messenger" aria-label="Telegram">${ICONS.telegram}</a>` : ''}
                </div>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join('');
    
    // Re-init contacts accordion
    initContactsAccordion();
    initScrollReveal();
  };

  // ============================================
  // IMAGE SLIDER
  // ============================================
  window.initSlider = function(containerSelector) {
    const sliders = document.querySelectorAll(containerSelector);
    
    sliders.forEach(slider => {
      const track = slider.querySelector('.slider__track');
      const slides = slider.querySelectorAll('.slider__slide');
      const prevBtn = slider.querySelector('.slider__nav--prev');
      const nextBtn = slider.querySelector('.slider__nav--next');
      const dotsContainer = slider.querySelector('.slider__dots');
      const counter = slider.querySelector('.slider__counter');
      
      if (!track || slides.length === 0) return;
      
      let currentIndex = 0;
      const totalSlides = slides.length;
      
      // Create dots
      if (dotsContainer) {
        slides.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = `slider__dot ${i === 0 ? 'is-active' : ''}`;
          dot.setAttribute('aria-label', `Слайд ${i + 1}`);
          dot.addEventListener('click', () => goToSlide(i));
          dotsContainer.appendChild(dot);
        });
      }
      
      function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots
        if (dotsContainer) {
          dotsContainer.querySelectorAll('.slider__dot').forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentIndex);
          });
        }
        
        // Update counter
        if (counter) {
          counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
        }
      }
      
      function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        updateSlider();
      }
      
      function nextSlide() {
        goToSlide(currentIndex + 1);
      }
      
      function prevSlide() {
        goToSlide(currentIndex - 1);
      }
      
      if (prevBtn) prevBtn.addEventListener('click', prevSlide);
      if (nextBtn) nextBtn.addEventListener('click', nextSlide);
      
      // Keyboard navigation
      slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
      });
      
      // Touch support
      let touchStartX = 0;
      let touchEndX = 0;
      
      track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) nextSlide();
          else prevSlide();
        }
      }, { passive: true });
      
      updateSlider();
    });
  };

  window.renderStats = function(containerId) {
    const container = document.getElementById(containerId);
    if (!container || !window.getStats) return;
    
    const stats = window.getStats();
    
    container.innerHTML = `
      <div class="stats-bar__item">
        <div class="stats-bar__value">${stats.centersCount}</div>
        <div class="stats-bar__label">Торговых центра</div>
      </div>
      <div class="stats-bar__item">
        <div class="stats-bar__value">${stats.freePremises}</div>
        <div class="stats-bar__label">Свободных помещений</div>
      </div>
      <div class="stats-bar__item">
        <div class="stats-bar__value">${stats.freeArea}</div>
        <div class="stats-bar__label">м² доступно</div>
      </div>
      <div class="stats-bar__item">
        <div class="stats-bar__value">0%</div>
        <div class="stats-bar__label">Комиссия</div>
      </div>
    `;
  };

  window.renderFaq = function(containerId, faqData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const items = faqData || window.APP_DATA?.globalFaq || [];
    
    container.innerHTML = items.map(item => `
      <div class="faq-item">
        <button class="faq-item__question" aria-expanded="false">
          <span>${item.q}</span>
          <span class="faq-item__icon">${ICONS.chevronDown}</span>
        </button>
        <div class="faq-item__answer">
          <div class="faq-item__answer-inner">${item.a}</div>
        </div>
      </div>
    `).join('');
    
    initFaqAccordion();
  };

  window.renderNews = function(containerId, newsData) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const items = newsData || window.APP_DATA?.globalNews || [];
    
    container.innerHTML = items.slice(0, 6).map(item => `
      <article class="news-card reveal">
        <div class="news-card__image"></div>
        <div class="news-card__content">
          <time class="news-card__date">${formatDate(item.date)}</time>
          <h3 class="news-card__title">${item.title}</h3>
          <p class="news-card__text">${item.text}</p>
          <a href="#" class="news-card__link">
            Читать полностью ${ICONS.chevronRight}
          </a>
        </div>
      </article>
    `).join('');
    
    initScrollReveal();
  };

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('ru-RU', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  }

  // ============================================
  // PHOTO LIGHTBOX TEMPLATE
  // ============================================
  function getLightboxHTML() {
    return `
      <div class="photo-lightbox" id="photoLightbox" role="dialog" aria-modal="true" aria-label="Просмотр фотографии" aria-hidden="true">
        <div class="photo-lightbox__backdrop"></div>
        <button class="photo-lightbox__close" aria-label="Закрыть (Esc)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <button class="photo-lightbox__nav photo-lightbox__nav--prev" aria-label="Предыдущее фото (←)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15,18 9,12 15,6"/></svg>
        </button>
        <div class="photo-lightbox__content">
          <img class="photo-lightbox__img" src="" alt="">
        </div>
        <button class="photo-lightbox__nav photo-lightbox__nav--next" aria-label="Следующее фото (→)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,6 15,12 9,18"/></svg>
        </button>
        <div class="photo-lightbox__footer">
          <span class="photo-lightbox__caption"></span>
          <span class="photo-lightbox__counter"></span>
        </div>
      </div>
    `;
  }

  // ============================================
  // PHOTO LIGHTBOX INITIALIZATION
  // ============================================
  function initPhotoLightbox() {
    const lightbox = document.getElementById('photoLightbox');
    if (!lightbox) return;
    
    const backdrop = lightbox.querySelector('.photo-lightbox__backdrop');
    const closeBtn = lightbox.querySelector('.photo-lightbox__close');
    const prevBtn = lightbox.querySelector('.photo-lightbox__nav--prev');
    const nextBtn = lightbox.querySelector('.photo-lightbox__nav--next');
    const content = lightbox.querySelector('.photo-lightbox__content');
    const img = lightbox.querySelector('.photo-lightbox__img');
    const caption = lightbox.querySelector('.photo-lightbox__caption');
    const counter = lightbox.querySelector('.photo-lightbox__counter');
    
    let photos = [];
    let currentIndex = 0;
    let isAnimating = false;
    
    function openLightbox(photoList, startIndex = 0) {
      if (!photoList || photoList.length === 0) return;
      photos = photoList;
      currentIndex = startIndex;
      updateLightbox();
      lightbox.setAttribute('aria-hidden', 'false');
      lightbox.classList.add('is-open');
      document.body.style.overflow = 'hidden';
      
      // Dispatch event for other components
      document.dispatchEvent(new CustomEvent('lightbox:open'));
      
      // Focus trap
      setTimeout(() => closeBtn.focus(), 100);
    }
    
    function closeLightbox() {
      lightbox.setAttribute('aria-hidden', 'true');
      lightbox.classList.remove('is-open');
      document.body.style.overflow = '';
      photos = [];
      currentIndex = 0;
      
      // Dispatch event for other components
      document.dispatchEvent(new CustomEvent('lightbox:close'));
    }
    
    function updateLightbox() {
      if (!photos.length) return;
      const photo = photos[currentIndex];
      
      // Show loading state
      content.classList.add('is-loading');
      img.classList.add('is-loading');
      
      // Preload image
      const newImg = new Image();
      newImg.onload = function() {
        img.src = photo.src;
        img.alt = photo.alt || '';
        content.classList.remove('is-loading');
        img.classList.remove('is-loading');
        isAnimating = false;
      };
      newImg.onerror = function() {
        content.classList.remove('is-loading');
        img.classList.remove('is-loading');
        isAnimating = false;
      };
      newImg.src = photo.src;
      
      // Update caption and counter
      caption.textContent = photo.alt || '';
      counter.textContent = `${currentIndex + 1} / ${photos.length}`;
      
      // Update nav visibility
      prevBtn.style.display = photos.length > 1 ? '' : 'none';
      nextBtn.style.display = photos.length > 1 ? '' : 'none';
    }
    
    function navigate(dir) {
      if (isAnimating || photos.length <= 1) return;
      isAnimating = true;
      currentIndex = (currentIndex + dir + photos.length) % photos.length;
      updateLightbox();
    }
    
    // Event listeners
    backdrop.addEventListener('click', closeLightbox);
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(-1); });
    nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigate(1); });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      
      switch(e.key) {
        case 'Escape':
          closeLightbox();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigate(-1);
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigate(1);
          break;
      }
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchStartY = 0;
    
    lightbox.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });
    
    lightbox.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;
      
      // Only swipe if horizontal movement is greater than vertical
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
        if (diffX > 0) navigate(1);
        else navigate(-1);
      }
    }, { passive: true });
    
    // Global function to open lightbox
    window.openPhotoLightbox = openLightbox;
    window.closeLightbox = closeLightbox;
    
    // Auto-bind photo grids
    document.querySelectorAll('.photo-grid').forEach(grid => {
      const items = grid.querySelectorAll('.photo-grid__item');
      items.forEach((item, i) => {
        item.style.cursor = 'pointer';
        item.setAttribute('role', 'button');
        item.setAttribute('tabindex', '0');
        item.setAttribute('aria-label', 'Открыть фото');
        
        const openHandler = () => {
          const photoList = Array.from(items).map(el => {
            const imgEl = el.querySelector('img');
            const labelEl = el.querySelector('.photo-grid__label');
            return { 
              src: imgEl?.src || '', 
              alt: labelEl?.textContent || imgEl?.alt || '' 
            };
          });
          openLightbox(photoList, i);
        };
        
        item.addEventListener('click', openHandler);
        item.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openHandler();
          }
        });
      });
    });
    
    // Auto-bind slider images to lightbox
    document.querySelectorAll('.object-hero .slider').forEach(slider => {
      const slideImgs = slider.querySelectorAll('.slider__slide img');
      
      slideImgs.forEach((slideImg, i) => {
        slideImg.style.cursor = 'zoom-in';
        slideImg.setAttribute('role', 'button');
        slideImg.setAttribute('tabindex', '0');
        slideImg.setAttribute('aria-label', 'Увеличить фото');
        
        const openHandler = () => {
          const photoList = Array.from(slideImgs).map(el => ({
            src: el.src,
            alt: el.alt || ''
          }));
          openLightbox(photoList, i);
        };
        
        slideImg.addEventListener('click', (e) => {
          e.stopPropagation();
          openHandler();
        });
        
        slideImg.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openHandler();
          }
        });
      });
    });
  }

  // ============================================
  // OBJECT PAGE SLIDERS
  // ============================================
  function initObjectSliders() {
    const sliders = document.querySelectorAll('.slider:not([data-slider-init])');
    
    sliders.forEach(slider => {
      slider.setAttribute('data-slider-init', 'true');
      
      const track = slider.querySelector('.slider__track');
      const slides = slider.querySelectorAll('.slider__slide');
      const prevBtn = slider.querySelector('.slider__nav--prev');
      const nextBtn = slider.querySelector('.slider__nav--next');
      const counterEl = slider.querySelector('.slider__counter');
      const dotsContainer = slider.querySelector('.slider__dots');
      
      if (!track || slides.length === 0) return;
      
      let currentSlide = 0;
      const total = slides.length;
      let autoPlayInterval = null;
      let isPaused = false;
      
      // Create dots if container exists and empty
      if (dotsContainer && dotsContainer.children.length === 0) {
        slides.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = `slider__dot ${i === 0 ? 'is-active' : ''}`;
          dot.setAttribute('aria-label', `Слайд ${i + 1}`);
          dot.addEventListener('click', (e) => {
            e.stopPropagation();
            goTo(i);
            resetAutoPlay();
          });
          dotsContainer.appendChild(dot);
        });
      }
      
      function updateSlider() {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        if (counterEl) counterEl.textContent = `${currentSlide + 1} / ${total}`;
        
        // Update dots
        if (dotsContainer) {
          dotsContainer.querySelectorAll('.slider__dot').forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentSlide);
          });
        }
        
        // Update aria
        slides.forEach((slide, i) => {
          slide.setAttribute('aria-hidden', i !== currentSlide);
        });
      }
      
      function goTo(index) {
        currentSlide = (index + total) % total;
        updateSlider();
      }
      
      function next() { 
        if (document.querySelector('.photo-lightbox.is-open')) return;
        goTo(currentSlide + 1); 
      }
      
      function prev() { 
        if (document.querySelector('.photo-lightbox.is-open')) return;
        goTo(currentSlide - 1); 
      }
      
      function startAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
        autoPlayInterval = setInterval(next, 5000);
      }
      
      function stopAutoPlay() {
        if (autoPlayInterval) {
          clearInterval(autoPlayInterval);
          autoPlayInterval = null;
        }
      }
      
      function resetAutoPlay() {
        stopAutoPlay();
        if (!isPaused) startAutoPlay();
      }
      
      // Navigation buttons
      if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          prev();
          resetAutoPlay();
        });
      }
      
      if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          next();
          resetAutoPlay();
        });
      }
      
      // Keyboard navigation when slider is focused
      slider.setAttribute('tabindex', '0');
      slider.addEventListener('keydown', (e) => {
        if (document.querySelector('.photo-lightbox.is-open')) return;
        
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          prev();
          resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          next();
          resetAutoPlay();
        }
      });
      
      // Touch support
      let touchStartX = 0;
      let touchStartY = 0;
      
      track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
      }, { passive: true });
      
      track.addEventListener('touchend', (e) => {
        const diffX = touchStartX - e.changedTouches[0].screenX;
        const diffY = touchStartY - e.changedTouches[0].screenY;
        
        // Only navigate if horizontal swipe is dominant
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
          if (diffX > 0) next();
          else prev();
          resetAutoPlay();
        }
      }, { passive: true });
      
      // Pause on hover/focus
      slider.addEventListener('mouseenter', () => {
        isPaused = true;
        stopAutoPlay();
      });
      
      slider.addEventListener('mouseleave', () => {
        isPaused = false;
        if (!document.querySelector('.photo-lightbox.is-open')) {
          startAutoPlay();
        }
      });
      
      // Stop autoplay when lightbox opens
      document.addEventListener('lightbox:open', stopAutoPlay);
      document.addEventListener('lightbox:close', () => {
        if (!isPaused) startAutoPlay();
      });
      
      // Initial state
      updateSlider();
      startAutoPlay();
    });
  }

  // ============================================
  // INITIALIZATION
  // ============================================
  // Helper: find element by multiple possible IDs
  function getEl(...ids) {
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) return el;
    }
    return null;
  }

  function init() {
    // Determine current page
    const path = window.location.pathname;
    let activePage = 'index';
    let basePath = '';
    
    if (path.includes('/pages/info/')) {
      basePath = '../../';
      if (path.includes('news')) activePage = 'news';
      else if (path.includes('security')) activePage = 'security';
      else if (path.includes('advertisers')) activePage = 'advertisers';
      else if (path.includes('jobs')) activePage = 'jobs';
    } else if (path.includes('/pages/')) {
      basePath = '../';
      if (path.includes('gallery')) activePage = 'gallery';
      else if (path.includes('tenants')) activePage = 'tenants';
      else if (path.includes('contacts')) activePage = 'contacts';
      else if (path.includes('altair')) activePage = 'altair';
      else if (path.includes('kapital')) activePage = 'kapital';
      else if (path.includes('sputnik')) activePage = 'sputnik';
      else if (path.includes('tver')) activePage = 'tver';
    }
    
    // Inject header (support both ID variants)
    const headerPlaceholder = getEl('header-placeholder', 'headerPlaceholder');
    if (headerPlaceholder) {
      headerPlaceholder.outerHTML = getHeaderHTML(activePage, basePath);
    }
    
    // Inject footer (support both ID variants)
    const footerPlaceholder = getEl('footer-placeholder', 'footerPlaceholder');
    if (footerPlaceholder) {
      footerPlaceholder.outerHTML = getFooterHTML(basePath);
    }
    
    // Inject modal (support both ID variants)  
    const modalPlaceholder = getEl('modal-placeholder', 'modalPlaceholder');
    if (modalPlaceholder) {
      modalPlaceholder.outerHTML = getModalHTML();
    }
    
    // Inject toast container (support both ID variants)
    if (!getEl('toast-container', 'toastContainer')) {
      document.body.insertAdjacentHTML('beforeend', getToastContainerHTML());
    }
    
    // Inject scroll top button (support both ID variants)
    if (!getEl('scroll-top', 'scrollTop', 'back-to-top')) {
      document.body.insertAdjacentHTML('beforeend', getScrollTopHTML());
    }
    
    // Inject lightbox if not exists
    if (!document.getElementById('photoLightbox')) {
      document.body.insertAdjacentHTML('beforeend', getLightboxHTML());
    }
    
    // Initialize all components
    initTheme();
    initMobileMenu();
    initHeaderScroll();
    initScrollTop();
    initModal();
    initForm();
    initScrollReveal();
    initFaqAccordion();
    initViewToggle();
    initPremisesFilter();
    initContactsAccordion();
    initDownloadBanner();
    initScrollspy();
    initGalleryModal();
    initPhotoLightbox();
    initObjectSliders();
    
    // Premium features
    initNoiseOverlay();
    initTiltEffect();
    initSpotlightEffect();
    initCounterAnimation();
    initStaggerReveal();
    initMobileActionBar();
    initStickyContacts();
    initPremiumSlider();
    
    // Theme toggle event
    document.getElementById('themeToggle')?.addEventListener('click', toggleTheme);
    
    console.log('✅ APP.JS initialized successfully');
  }

  // ============================================
  // PREMIUM FEATURES
  // ============================================
  
  // Noise overlay for premium texture
  function initNoiseOverlay() {
    if (document.querySelector('.noise-overlay')) return;
    
    const noise = document.createElement('div');
    noise.className = 'noise-overlay';
    noise.setAttribute('aria-hidden', 'true');
    document.body.appendChild(noise);
  }
  
  // Tilt effect for cards
  function initTiltEffect() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const cards = document.querySelectorAll('.tilt-card, .object-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const tiltX = (y - centerY) / centerY * 5; // max 5 degrees
        const tiltY = (centerX - x) / centerX * 5;
        
        card.style.setProperty('--tilt-x', `${tiltX}deg`);
        card.style.setProperty('--tilt-y', `${tiltY}deg`);
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.02)`;
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
  
  // Spotlight effect on cards
  function initSpotlightEffect() {
    const cards = document.querySelectorAll('.spotlight-card, .perk-card, .object-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        
        card.style.setProperty('--mouse-x', `${x}%`);
        card.style.setProperty('--mouse-y', `${y}%`);
      });
    });
  }
  
  // Counter animation when in view
  function initCounterAnimation() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const counters = document.querySelectorAll('.stat-card__number, .stats-bar__value');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('is-counted')) {
          entry.target.classList.add('is-counted');
          animateCounter(entry.target);
        }
      });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => observer.observe(counter));
  }
  
  function animateCounter(element) {
    const text = element.textContent.trim();
    const match = text.match(/^(\d+(?:[.,]\d+)?)/);
    
    if (!match) return;
    
    const target = parseFloat(match[1].replace(',', '.'));
    const suffix = text.replace(match[1], '');
    const isDecimal = match[1].includes('.') || match[1].includes(',');
    const duration = 1500;
    const startTime = performance.now();
    
    element.classList.add('counter-animate', 'is-counting');
    
    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4); // ease out quart
      const current = target * eased;
      
      element.textContent = (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        element.classList.remove('is-counting');
      }
    }
    
    requestAnimationFrame(update);
  }
  
  // Stagger reveal animations
  function initStaggerReveal() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    
    const containers = document.querySelectorAll('.stagger-reveal, .objects-grid, .perks-grid');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    containers.forEach(container => observer.observe(container));
  }
  
  // Mobile action bar
  function initMobileActionBar() {
    if (document.querySelector('.mobile-action-bar')) return;
    
    // Get phone from data
    let phone = '8-904-028-00-33';
    if (window.APP_DATA && window.APP_DATA.centers && window.APP_DATA.centers[0]) {
      phone = window.APP_DATA.centers[0].phone;
    }
    
    const bar = document.createElement('div');
    bar.className = 'mobile-action-bar';
    bar.innerHTML = `
      <a href="tel:${phone.replace(/\D/g, '')}" class="mobile-action-bar__btn">
        ${ICONS.phone}
        <span>Позвонить</span>
      </a>
      <button class="mobile-action-bar__btn mobile-action-bar__btn--primary" data-modal-open>
        ${ICONS.email}
        <span>Заявка</span>
      </button>
      <a href="https://wa.me/79040280033" class="mobile-action-bar__btn" target="_blank" rel="noopener">
        ${ICONS.whatsapp}
        <span>WhatsApp</span>
      </a>
    `;
    
    document.body.appendChild(bar);
    
    // Re-init modal triggers
    bar.querySelector('[data-modal-open]')?.addEventListener('click', () => {
      document.querySelector('.modal-overlay')?.classList.add('is-active');
      document.body.classList.add('no-scroll');
    });
  }
  
  // Sticky contacts sidebar
  function initStickyContacts() {
    // Only on object pages
    if (!window.location.pathname.includes('/pages/') || window.location.pathname.includes('/info/')) return;
    if (document.querySelector('.sticky-contacts')) return;
    
    let phone = '8-904-028-00-33';
    let whatsapp = '79040280033';
    
    // Try to get current center's contacts
    const centerId = window.location.pathname.match(/\/pages\/(\w+)\.html/)?.[1];
    if (centerId && window.APP_DATA) {
      const center = window.APP_DATA.centers.find(c => c.id === centerId);
      if (center) {
        phone = center.phone;
        whatsapp = center.messengers?.whatsapp || '79040280033';
      }
    }
    
    const sidebar = document.createElement('div');
    sidebar.className = 'sticky-contacts';
    sidebar.innerHTML = `
      <a href="tel:${phone.replace(/\D/g, '')}" class="sticky-contacts__btn" aria-label="Позвонить">
        ${ICONS.phone}
      </a>
      <button class="sticky-contacts__btn" data-modal-open aria-label="Оставить заявку">
        ${ICONS.email}
      </button>
      <a href="https://wa.me/${whatsapp}" class="sticky-contacts__btn" target="_blank" rel="noopener" aria-label="WhatsApp">
        ${ICONS.whatsapp}
      </a>
    `;
    
    document.body.appendChild(sidebar);
    
    sidebar.querySelector('[data-modal-open]')?.addEventListener('click', () => {
      document.querySelector('.modal-overlay')?.classList.add('is-active');
      document.body.classList.add('no-scroll');
    });
  }
  
  // Premium slider with touch support
  function initPremiumSlider() {
    const sliders = document.querySelectorAll('.premium-slider');
    
    sliders.forEach(slider => {
      const track = slider.querySelector('.premium-slider__track');
      const slides = slider.querySelectorAll('.premium-slider__slide');
      const prevBtn = slider.querySelector('.premium-slider__nav--prev');
      const nextBtn = slider.querySelector('.premium-slider__nav--next');
      const dotsContainer = slider.querySelector('.premium-slider__dots');
      
      if (!track || slides.length === 0) return;
      
      let currentIndex = 0;
      const totalSlides = slides.length;
      
      // Create dots
      if (dotsContainer) {
        dotsContainer.innerHTML = '';
        slides.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = `premium-slider__dot ${i === 0 ? 'is-active' : ''}`;
          dot.setAttribute('aria-label', `Слайд ${i + 1}`);
          dot.addEventListener('click', () => goToSlide(i));
          dotsContainer.appendChild(dot);
        });
      }
      
      function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        if (dotsContainer) {
          dotsContainer.querySelectorAll('.premium-slider__dot').forEach((dot, i) => {
            dot.classList.toggle('is-active', i === currentIndex);
          });
        }
      }
      
      function goToSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        updateSlider();
      }
      
      function nextSlide() {
        goToSlide(currentIndex + 1);
      }
      
      function prevSlide() {
        goToSlide(currentIndex - 1);
      }
      
      if (prevBtn) prevBtn.addEventListener('click', prevSlide);
      if (nextBtn) nextBtn.addEventListener('click', nextSlide);
      
      // Touch support
      let touchStartX = 0;
      let touchEndX = 0;
      
      track.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });
      
      track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0) nextSlide();
          else prevSlide();
        }
      }, { passive: true });
      
      // Auto-advance
      let autoPlay = setInterval(nextSlide, 5000);
      
      slider.addEventListener('mouseenter', () => clearInterval(autoPlay));
      slider.addEventListener('mouseleave', () => {
        autoPlay = setInterval(nextSlide, 5000);
      });
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
