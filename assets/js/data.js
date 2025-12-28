/**
 * ============================================
 * DATA.JS — Все данные сайта аренды помещений
 * ============================================
 * Без fetch, загружается синхронно через <script>
 */

window.APP_DATA = {
  // ============================================
  // ТОРГОВЫЕ ЦЕНТРЫ
  // ============================================
  centers: [
    {
      id: 'altair',
      name: 'ТЦ «Альтаир»',
      shortName: 'Альтаир',
      address: 'ул. Благоева, д. 54',
      city: 'Тверь',
      hours: '8:00–22:00, без выходных',
      phone: '8-904-028-00-33',
      email: 'altair_tver@mail.ru',
      messengers: {
        whatsapp: '79040280033',
        viber: '79040280033',
        telegram: ''
      },
      heroOffer: 'Выгодная аренда от собственника в самом сердце города',
      heroImage: 'altair-hero.jpg',
      perks: [
        { icon: 'location', text: 'Центральное расположение' },
        { icon: 'traffic', text: 'Высокий пешеходный трафик' },
        { icon: 'parking', text: 'Бесплатная парковка' },
        { icon: 'security', text: 'Охрана 24/7' },
        { icon: 'camera', text: 'Видеонаблюдение' },
        { icon: 'internet', text: 'Скоростной интернет' }
      ],
      businessFits: ['Магазин', 'Салон красоты', 'Офис', 'Пункт выдачи', 'Кафе', 'Шоурум'],
      premises: [
        { id: 'alt-1', area: 15.2, floor: 1, glazed: true, status: 'free', note: 'Витринное остекление' },
        { id: 'alt-2', area: 28.5, floor: 1, glazed: true, status: 'free', note: 'Угловое расположение' },
        { id: 'alt-3', area: 45.0, floor: 1, glazed: false, status: 'reserved', note: 'Рядом с входом' },
        { id: 'alt-4', area: 18.0, floor: 2, glazed: true, status: 'free', note: 'Вид на центральную улицу' },
        { id: 'alt-5', area: 32.0, floor: 2, glazed: false, status: 'free', note: 'Под офис или студию' },
        { id: 'alt-6', area: 55.0, floor: 2, glazed: true, status: 'occupied', note: 'Занято до 2026' }
      ],
      tenants: [
        { name: 'Магнит Косметик', unit: '1 этаж' },
        { name: 'Связной', unit: '1 этаж' },
        { name: 'Л\'Этуаль', unit: '1 этаж' },
        { name: 'ДНС', unit: '2 этаж' },
        { name: 'Спортмастер', unit: '2 этаж' },
        { name: 'Читай-город', unit: '2 этаж' },
        { name: 'Kari', unit: '1 этаж' },
        { name: 'Fix Price', unit: '1 этаж' }
      ],
      faq: [
        { q: 'Какая минимальная площадь для аренды?', a: 'От 10 м² — подходит для островка или небольшого магазина.' },
        { q: 'Есть ли арендные каникулы?', a: 'Да, предоставляем до 2 недель на ремонт и подготовку.' },
        { q: 'Включены ли коммунальные платежи?', a: 'Коммунальные платежи оплачиваются отдельно по счётчикам.' },
        { q: 'Можно ли разместить вывеску?', a: 'Да, согласовываем размещение рекламы на фасаде.' }
      ],
      news: [
        { date: '2025-01-15', title: 'Открытие нового магазина', text: 'В ТЦ Альтаир открылся новый магазин спортивной одежды.' },
        { date: '2024-12-20', title: 'Новогодние скидки', text: 'Специальные условия аренды до конца января.' },
        { date: '2024-11-10', title: 'Обновление освещения', text: 'Установлено современное LED-освещение во всех коридорах.' }
      ],
      gallery: [
        { title: 'Фасад здания', caption: 'ТЦ Альтаир — главный вид', realPhoto: 'real/altair/altair-01.jpg' },
        { title: 'Вход в ТЦ', caption: 'Центральный вход', realPhoto: 'real/altair/altair-02.jpg' },
        { title: 'Здание', caption: 'Вид на здание', realPhoto: 'real/altair/altair-03.jpg' },
        { title: 'Вывеска', caption: 'Вывеска ТЦ Альтаир', realPhoto: 'real/altair/altair-04.jpg' },
        { title: 'Парковка', caption: 'Парковка у ТЦ', realPhoto: 'real/altair/altair-05.jpg' },
        { title: 'Территория', caption: 'Прилегающая территория', realPhoto: 'real/altair/altair-06.jpg' },
        { title: 'Фасад', caption: 'Фасад здания', realPhoto: 'real/altair/altair-07.jpg' },
        { title: 'Подъезд', caption: 'Подъезд к ТЦ', realPhoto: 'real/altair/altair-08.jpg' },
        { title: 'Общий вид', caption: 'Панорамный вид', realPhoto: 'real/altair/altair-09.jpg' }
      ],
      schemaImage: 'altair-schema.png'
    },
    {
      id: 'kapital',
      name: 'ТЦ «Капитал»',
      shortName: 'Капитал',
      address: 'ул. Паши Савельевой, д. 42а',
      city: 'Тверь',
      hours: '8:00–22:00, без выходных',
      phone: '8-900-014-22-25',
      email: 'kapital_tc@mail.ru',
      messengers: {
        whatsapp: '79000142225',
        viber: '79000142225',
        telegram: ''
      },
      heroOffer: 'Премиальные площади для вашего бизнеса',
      heroImage: 'kapital-hero.jpg',
      perks: [
        { icon: 'location', text: 'Удобная транспортная развязка' },
        { icon: 'traffic', text: 'Высокая проходимость' },
        { icon: 'parking', text: 'Парковка 100+ мест' },
        { icon: 'security', text: 'ЧОП круглосуточно' },
        { icon: 'camera', text: 'Система видеонаблюдения' },
        { icon: 'elevator', text: 'Грузовой лифт' }
      ],
      businessFits: ['Супермаркет', 'Аптека', 'Банк', 'Ресторан', 'Фитнес', 'Детский центр'],
      premises: [
        { id: 'kap-1', area: 22.0, floor: 1, glazed: true, status: 'free', note: 'Премиум-локация у входа' },
        { id: 'kap-2', area: 35.0, floor: 1, glazed: true, status: 'free', note: 'Двойная витрина' },
        { id: 'kap-3', area: 50.0, floor: 1, glazed: false, status: 'reserved', note: 'Подходит под кафе' },
        { id: 'kap-4', area: 120.0, floor: 2, glazed: false, status: 'free', note: 'Под фитнес или детский центр' },
        { id: 'kap-5', area: 40.0, floor: 2, glazed: true, status: 'free', note: 'Панорамный вид' },
        { id: 'kap-6', area: 25.0, floor: 2, glazed: false, status: 'occupied', note: 'Занято' }
      ],
      tenants: [
        { name: 'Пятёрочка', unit: '1 этаж' },
        { name: 'Сбербанк', unit: '1 этаж' },
        { name: 'Аптека Ригла', unit: '1 этаж' },
        { name: 'МТС', unit: '1 этаж' },
        { name: 'Детский мир', unit: '2 этаж' },
        { name: 'Gloria Jeans', unit: '2 этаж' },
        { name: 'Zarina', unit: '2 этаж' }
      ],
      faq: [
        { q: 'Какой депозит требуется?', a: 'Стандартный депозит — 1 месяц аренды, возвращается при выезде.' },
        { q: 'Есть ли грузовой лифт?', a: 'Да, грузовой лифт грузоподъёмностью до 1 тонны.' },
        { q: 'Можно ли работать круглосуточно?', a: 'Режим работы согласовывается индивидуально.' },
        { q: 'Как быстро можно заехать?', a: 'При готовом помещении — в течение 3 дней после подписания.' }
      ],
      news: [
        { date: '2025-01-10', title: 'Новый арендатор', text: 'ТЦ Капитал приветствует нового арендатора — сеть Gloria Jeans.' },
        { date: '2024-12-15', title: 'Ремонт фасада', text: 'Завершён косметический ремонт главного фасада.' },
        { date: '2024-11-25', title: 'Wi-Fi для посетителей', text: 'Запущен бесплатный Wi-Fi на всей территории ТЦ.' }
      ],
      gallery: [
        { title: 'Фасад здания', caption: 'ТЦ Капитал — главный вид', realPhoto: 'real/kapital/kapital-01.jpg' },
        { title: 'Вход', caption: 'Центральный вход', realPhoto: 'real/kapital/kapital-02.jpg' },
        { title: 'Здание', caption: 'Вид на здание', realPhoto: 'real/kapital/kapital-03.jpg' },
        { title: 'Вывеска', caption: 'Вывеска ТЦ Капитал', realPhoto: 'real/kapital/kapital-04.jpg' },
        { title: 'Территория', caption: 'Прилегающая территория', realPhoto: 'real/kapital/kapital-05.jpg' }
      ],
      schemaImage: 'kapital-schema.png'
    },
    {
      id: 'sputnik',
      name: 'ТОЦ «Спутник»',
      shortName: 'Спутник',
      address: 'пр-т Ленина, 35',
      city: 'Тверь',
      hours: 'Режим работы неограничен',
      phone: '+7 (4822) 42-79-52',
      email: 'tc-tver@bk.ru',
      messengers: {
        whatsapp: '79607030688',
        viber: '79607030688',
        telegram: ''
      },
      heroOffer: 'Первый месяц — скидка 20%! Аренда от собственника',
      heroImage: 'sputnik-hero.jpg',
      specialOffer: {
        discount: '20%',
        discountText: 'Скидка 20% в первый месяц',
        utilities: 'Коммунальные платежи и электричество оплачивает собственник',
        holidays: 'Предоставляем арендные каникулы',
        access: 'Охрана ЧОП + свободный доступ 24/7'
      },
      perks: [
        { icon: 'location', text: 'Первая линия, высокий трафик' },
        { icon: 'bus', text: 'Рядом остановка общественного транспорта' },
        { icon: 'traffic', text: 'Интенсивный авто и пешеходный трафик' },
        { icon: 'parking', text: 'Бесплатная выделенная парковка' },
        { icon: 'fire', text: 'Пожарная и охранная сигнализация' },
        { icon: 'vent', text: 'Приточно-вытяжная вентиляция' },
        { icon: 'security', text: 'Круглосуточная охрана ЧОП' },
        { icon: 'camera', text: 'Видеонаблюдение внутри и по периметру' },
        { icon: 'internet', text: 'Интернет (несколько провайдеров)' },
        { icon: 'phone', text: 'Телефонная связь' },
        { icon: 'access', text: 'Свободный доступ' }
      ],
      businessFits: ['Офис', 'Студия', 'Магазин', 'Салон', 'Пункт выдачи', 'Шоурум'],
      premises: [
        { id: 'spu-1', area: 3.0, floor: 1, glazed: true, status: 'free', note: 'Компактное помещение, идеально под островок' },
        { id: 'spu-2', area: 12.0, floor: 1, glazed: true, status: 'free', note: 'Витринное остекление' },
        { id: 'spu-3', area: 23.6, floor: 2, glazed: true, status: 'free', note: 'Универсальная отделка' },
        { id: 'spu-4', area: 17.8, floor: 2, glazed: true, status: 'free', note: 'Готово к заезду' }
      ],
      tenants: [
        { name: 'Появятся скоро', unit: '' }
      ],
      faq: [
        { q: 'Кто оплачивает коммунальные платежи?', a: 'Все коммунальные платежи, включая электричество, оплачивает собственник.' },
        { q: 'Есть ли скидки?', a: 'Да! Скидка 20% в первый месяц аренды.' },
        { q: 'Предоставляются ли арендные каникулы?', a: 'Да, предоставляем арендные каникулы на период подготовки помещения.' },
        { q: 'Какой режим работы?', a: 'Режим работы неограничен — можете работать в любое время.' },
        { q: 'Все помещения застеклённые?', a: 'Да, все свободные помещения имеют панорамное остекление.' }
      ],
      news: [
        { date: '2025-01-20', title: 'Старт аренды', text: 'ТОЦ Спутник открывает приём заявок на аренду помещений.' },
        { date: '2025-01-15', title: 'Специальные условия', text: 'Действует акция: скидка 20% на первый месяц аренды!' }
      ],
      gallery: [
        { title: 'Фасад здания', caption: 'ТОЦ Спутник — главный вид', realPhoto: 'real/sputnik/sputnik-01.jpg' },
        { title: 'Вход', caption: 'Центральный вход', realPhoto: 'real/sputnik/sputnik-02.jpg' },
        { title: 'Здание', caption: 'Вид на здание', realPhoto: 'real/sputnik/sputnik-03.jpg' },
        { title: 'Вывеска', caption: 'Вывеска ТОЦ Спутник', realPhoto: 'real/sputnik/sputnik-04.jpg' },
        { title: 'Территория', caption: 'Прилегающая территория', realPhoto: 'real/sputnik/sputnik-05.jpg' },
        { title: 'Парковка', caption: 'Парковка у ТЦ', realPhoto: 'real/sputnik/sputnik-06.jpg' },
        { title: 'Общий вид', caption: 'Панорамный вид', realPhoto: 'real/sputnik/sputnik-07.jpg' },
        { title: 'Фасад', caption: 'Фасад здания', realPhoto: 'real/sputnik/sputnik-08.jpg' },
        { title: 'Холл и лестница', caption: 'Просторный холл с лестницей', realPhoto: 'real/sputnik/sputnik-lobby-stairs.jpg' },
        { title: 'Коридор', caption: 'Светлый коридор здания', realPhoto: 'real/sputnik/sputnik-hallway-stairs.jpg' },
        { title: 'Витрины', caption: 'Коридор с витринами арендаторов', realPhoto: 'real/sputnik/sputnik-corridor-showcase.jpg' },
        { title: 'Фудкорт', caption: 'Зона отдыха и фудкорта', realPhoto: 'real/sputnik/sputnik-foodcourt.jpg' },
        { title: 'Fix Price', caption: 'Якорный арендатор — магазин Fix Price', realPhoto: 'real/sputnik/sputnik-corridor-fixprice.jpg' },
        { title: 'Свободное помещение', caption: 'Застеклённое помещение на 1 этаже', realPhoto: 'real/sputnik/sputnik-vacant-glass-entrance.jpg' },
        { title: 'Помещение у Fix Price', caption: 'Свободное помещение рядом с якорем', realPhoto: 'real/sputnik/sputnik-vacant-near-fixprice.jpg' },
        { title: 'Просторное помещение', caption: 'Помещение 23.6 м² на 2 этаже', realPhoto: 'real/sputnik/sputnik-vacant-wide.jpg' },
        { title: 'Отдельный вход', caption: 'Помещение с отдельным входом', realPhoto: 'real/sputnik/sputnik-vacant-front-exterior.jpg' },
        { title: 'Остановка', caption: 'Остановка общественного транспорта у входа', realPhoto: 'real/sputnik/sputnik-street-busstop.jpg' },
        { title: 'Трафик', caption: 'Интенсивный трафик у здания', realPhoto: 'real/sputnik/sputnik-street-view.jpg' },
        { title: 'Улица', caption: 'Вид на улицу и парковку', realPhoto: 'real/sputnik/sputnik-street-view-2.jpg' }
      ],
      schemaImage: 'sputnik-schema.png'
    },
    {
      id: 'tver',
      name: 'ТОЦ «Тверь»',
      shortName: 'Тверь',
      address: 'пр-т Ленина, 10',
      city: 'Тверь',
      hours: 'Режим работы неограничен',
      phone: '+7 (4822) 74-01-70',
      email: 'tc-tver@bk.ru',
      messengers: {
        whatsapp: '79040088809',
        viber: '',
        telegram: ''
      },
      heroOffer: 'Аренда от собственника в центре города',
      heroImage: 'tver-hero.jpg',
      perks: [
        { icon: 'location', text: 'Первая линия, центр города' },
        { icon: 'bus', text: 'Рядом остановка транспорта' },
        { icon: 'traffic', text: 'Высокий пешеходный трафик' },
        { icon: 'parking', text: 'Бесплатная парковка' },
        { icon: 'security', text: 'Охрана 24/7' },
        { icon: 'camera', text: 'Видеонаблюдение' }
      ],
      businessFits: ['Офис', 'Магазин', 'Салон', 'Студия', 'Пункт выдачи'],
      premises: [
        { id: 'tver-1', area: 20.0, floor: 1, glazed: true, status: 'free', note: 'Витринное остекление' },
        { id: 'tver-2', area: 35.0, floor: 1, glazed: true, status: 'free', note: 'Угловое расположение' },
        { id: 'tver-3', area: 25.0, floor: 2, glazed: true, status: 'free', note: 'Под офис или студию' }
      ],
      tenants: [
        { name: 'Арендаторы', unit: '1-2 этаж' }
      ],
      faq: [
        { q: 'Какие условия аренды?', a: 'Гибкие условия, возможны арендные каникулы.' },
        { q: 'Включены ли коммунальные?', a: 'Уточняйте у менеджера.' }
      ],
      news: [],
      gallery: [
        { title: 'Фасад здания', caption: 'ТОЦ Тверь — главный вид', realPhoto: 'real/tver/tver-01.jpg' },
        { title: 'Вход', caption: 'Центральный вход', realPhoto: 'real/tver/tver-02.jpg' },
        { title: 'Здание', caption: 'Вид на здание', realPhoto: 'real/tver/tver-03.jpg' },
        { title: 'Вывеска', caption: 'Вывеска ТОЦ Тверь', realPhoto: 'real/tver/tver-04.jpg' },
        { title: 'Территория', caption: 'Прилегающая территория', realPhoto: 'real/tver/tver-05.jpg' },
        { title: 'Парковка', caption: 'Парковка у ТЦ', realPhoto: 'real/tver/tver-06.jpg' },
        { title: 'Коридор', caption: 'Торговый коридор', realPhoto: 'real/tver/tver-07.jpg' },
        { title: 'Лестница', caption: 'Лестница на второй этаж', realPhoto: 'real/tver/tver-08.jpg' },
        { title: 'Помещение', caption: 'Свободное помещение', realPhoto: 'real/tver/tver-09.jpg' },
        { title: 'Витрины', caption: 'Витрины арендаторов', realPhoto: 'real/tver/tver-10.jpg' },
        { title: 'Второй этаж', caption: 'Второй этаж ТЦ', realPhoto: 'real/tver/tver-11.jpg' },
        { title: 'Интерьер', caption: 'Интерьер ТЦ', realPhoto: 'real/tver/tver-12.jpg' },
        { title: 'Общий вид', caption: 'Панорамный вид', realPhoto: 'real/tver/tver-13.jpg' }
      ],
      schemaImage: 'tver-schema.png'
    }
  ],

  // ============================================
  // ГЛОБАЛЬНЫЕ FAQ (общие вопросы)
  // ============================================
  globalFaq: [
    { 
      q: 'Как подать заявку на аренду?', 
      a: 'Заполните форму на сайте или позвоните по телефону. Мы свяжемся в течение часа в рабочее время.' 
    },
    { 
      q: 'Какие документы нужны для заключения договора?', 
      a: 'Для ИП: паспорт, свидетельство ИП, ИНН. Для юрлиц: устав, приказ о назначении директора, реквизиты.' 
    },
    { 
      q: 'На какой срок заключается договор?', 
      a: 'Стандартный срок — от 11 месяцев. Возможны индивидуальные условия.' 
    },
    { 
      q: 'Можно ли посмотреть помещение до заключения договора?', 
      a: 'Конечно! Позвоните, и мы организуем показ в удобное для вас время.' 
    },
    { 
      q: 'Есть ли скрытые платежи?', 
      a: 'Нет. Все условия прозрачно прописаны в договоре.' 
    },
    { 
      q: 'Можно ли сделать перепланировку?', 
      a: 'Возможно по согласованию. Обсудим ваши пожелания индивидуально.' 
    }
  ],

  // ============================================
  // ГЛОБАЛЬНЫЕ НОВОСТИ
  // ============================================
  globalNews: [
    {
      id: 'news-1',
      date: '2025-01-20',
      title: 'Новый объект — ТОЦ «Спутник»',
      text: 'Рады представить новый торгово-офисный центр на проспекте Ленина. Специальные условия для первых арендаторов!',
      center: null
    },
    {
      id: 'news-2',
      date: '2025-01-15',
      title: 'Зимние скидки на аренду',
      text: 'До конца февраля действуют специальные условия на аренду помещений во всех наших ТЦ.',
      center: null
    },
    {
      id: 'news-3',
      date: '2025-01-10',
      title: 'Обновление сайта',
      text: 'Мы полностью обновили наш сайт. Теперь ещё удобнее выбирать помещения и подавать заявки.',
      center: null
    },
    {
      id: 'news-4',
      date: '2024-12-20',
      title: 'Итоги 2024 года',
      text: 'Благодарим всех арендаторов за сотрудничество. В 2024 году мы сдали более 30 помещений.',
      center: null
    }
  ],

  // ============================================
  // ИНФОРМАЦИЯ О БЕЗОПАСНОСТИ
  // ============================================
  security: {
    title: 'Безопасность наших объектов',
    intro: 'Мы уделяем особое внимание безопасности арендаторов и посетителей.',
    features: [
      { icon: 'security', title: 'Охрана ЧОП', text: 'Круглосуточная охрана профессиональным ЧОП на всех объектах.' },
      { icon: 'camera', title: 'Видеонаблюдение', text: 'Система видеонаблюдения внутри помещений и по периметру.' },
      { icon: 'fire', title: 'Пожарная безопасность', text: 'Современная пожарная сигнализация и система пожаротушения.' },
      { icon: 'access', title: 'Контроль доступа', text: 'Системы контроля доступа в служебные помещения.' }
    ]
  },

  // ============================================
  // ИНФОРМАЦИЯ ДЛЯ РЕКЛАМОДАТЕЛЕЙ
  // ============================================
  advertisers: {
    title: 'Рекламодателям',
    intro: 'Размещайте рекламу на наших площадках с высокой проходимостью.',
    formats: [
      { name: 'Баннеры на фасаде', description: 'Крупноформатная реклама на фасаде ТЦ' },
      { name: 'Лайтбоксы', description: 'Световые короба внутри торговых залов' },
      { name: 'Видеоэкраны', description: 'Динамическая реклама на LED-экранах' },
      { name: 'Промо-зоны', description: 'Площадки для проведения промо-акций' },
      { name: 'Напольная графика', description: 'Навигация и реклама на полу' }
    ],
    contact: 'Для размещения рекламы свяжитесь с нами по телефону или email.'
  },

  // ============================================
  // ВАКАНСИИ
  // ============================================
  jobs: {
    title: 'Вакансии',
    intro: 'Присоединяйтесь к нашей команде!',
    positions: [
      { 
        title: 'Администратор ТЦ', 
        location: 'ТЦ Альтаир',
        type: 'Полная занятость',
        description: 'Контроль работы арендаторов, работа с посетителями, координация служб.' 
      },
      { 
        title: 'Специалист по аренде', 
        location: 'Офис',
        type: 'Полная занятость',
        description: 'Поиск арендаторов, проведение показов, заключение договоров.' 
      },
      { 
        title: 'Техник по обслуживанию', 
        location: 'Все объекты',
        type: 'Полная занятость',
        description: 'Техническое обслуживание инженерных систем.' 
      }
    ],
    howToApply: 'Отправьте резюме на email любого из наших ТЦ с пометкой «Вакансия».'
  },

  // ============================================
  // ОБЩИЕ КОНТАКТЫ
  // ============================================
  contacts: {
    companyName: 'Управляющая компания',
    tagline: 'Аренда коммерческих помещений от собственника',
    workingHours: 'Пн-Вс: 9:00-20:00',
    mainPhone: '8-904-028-00-33',
    mainEmail: 'info@example.com' // TODO: Заменить на реальный
  }
};

// ============================================
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// ============================================

/**
 * Получить центр по ID
 */
window.getCenter = function(id) {
  return window.APP_DATA.centers.find(c => c.id === id) || null;
};

/**
 * Получить все свободные помещения
 */
window.getAllFreePremises = function() {
  const result = [];
  window.APP_DATA.centers.forEach(center => {
    center.premises.forEach(p => {
      if (p.status === 'free') {
        result.push({
          ...p,
          centerId: center.id,
          centerName: center.shortName
        });
      }
    });
  });
  return result;
};

/**
 * Получить общую статистику
 */
window.getStats = function() {
  let totalPremises = 0;
  let freePremises = 0;
  let totalArea = 0;
  let freeArea = 0;

  window.APP_DATA.centers.forEach(center => {
    center.premises.forEach(p => {
      totalPremises++;
      totalArea += p.area;
      if (p.status === 'free') {
        freePremises++;
        freeArea += p.area;
      }
    });
  });

  return {
    centersCount: window.APP_DATA.centers.length,
    totalPremises,
    freePremises,
    totalArea: Math.round(totalArea),
    freeArea: Math.round(freeArea)
  };
};

console.log('✅ DATA.JS loaded successfully');
