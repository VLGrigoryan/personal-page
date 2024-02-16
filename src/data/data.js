import avatar from '../images/avatar/avatar.jpeg'

const importImages = (folder, count) => {
  return Array.from({ length: count }, (_, index) => require(`../images/${folder}/${index + 1}.png`));
};

const createImageArray = (folder, count) => {
  return importImages(folder, count).map((image, index) => ({ image }));
};

export const StellarBurger = createImageArray('StellarBurger', 4);
export const Mesto = createImageArray('Mesto', 5);
export const Eacademy = createImageArray('Eacademy', 2);
export const RoomSeller = createImageArray('roomseller', 4);
export const RussiaTravel = createImageArray('russianTravel', 4);
export const Everland = createImageArray('Everland', 4);
export const Givenchy = createImageArray('Givenchy', 4);
export const Algososh = createImageArray('Algososh', 4);
export const HowToLearn = createImageArray('HowToLearn', 5);

export const portfolio = [
  { title: "Stellar Burger", slides: StellarBurger, link: "https://vlgrigoryan.github.io/personal-page/" },
  { title: "Mesto", slides: Mesto, link: "https://vlgrigoryan.github.io/mesto-project/" },
  { title: "Eacademy", slides: Eacademy, link: "https://vlgrigoryan.github.io/eacademy/" },
  { title: "Room Seller", slides: RoomSeller, link: "https://roomseller.ru/" },
  { title: "Russia Travel", slides: RussiaTravel, link: "https://vlgrigoryan.github.io/russian-travel/" },
  { title: "Everland", slides: Everland, link: "https://dashalalala24.github.io/everland/" },
  { title: "Givenchy", slides: Givenchy, link: "https://vlgrigoryan.github.io/GIVENCHY-2021/" },
  { title: "Algososh", slides: Algososh, link: "https://vlgrigoryan.github.io/algososh/" },
  { title: "How To Learn", slides: HowToLearn, link: "https://github.com/VLGrigoryan/how-to-learn-plus" },
];

const userInfo = {
  name: 'Vagharshak Grigoryan',
  avatar: avatar,
  specialization: 'FRONTEND DEVELOPER',
  phoneNumber: '0627409425',
  email: 'v.grigoryan@live.com',
  address: 'Nieuweweg, Den Helder, 1787AZ, Netherlands',
  aboutMe: `I am a frontend developer with a modest yet substantial experience in the IT industry. To systematically enhance my skills, I am actively studying the Full Steck of web development through Yandex Educational Technologies. In addition, I have my own startup project in which I believe and am confident it will become successful in the future.

  I can be characterized as a devoted team player with proven experience in effective collaboration. My ability to easily communicate and collaborate with colleagues and clients from different cultures is supported by fluent proficiency in English, Russian, Armenian, Spanish, and Dutch.
   
  I am ready to contribute to projects and become part of a dynamic and creative team. Thanks to my efforts and commitment to development, I am confident that I can make a valuable contribution to any professional project.`,
  motivation: `Committed to continuous learning, I stay abreast of the latest advancements in the ever-evolving IT field. Motivated and ready to go the extra mile, I am prepared to dedicate long hours to deliver exceptional results.
  My journey into the dynamic IT industry is fueled by a strong motivation to achieve significant success. I believe in embracing challenges, staying curious, and contributing my best to the exciting realm of technology.`,
  dob: '05.07.1992',
  nationality: 'Armenian',
  languages: ['Armenian', 'Russian', 'English', 'Spanish', 'Dutch'],
};

const userInfoRu = {
  name: 'Григорян Вагаршак',
  avatar: avatar,
  specialization: 'Фронтенд разработчик',
  phoneNumber: '+79850986789',
  email: 'v.grigoryan@live.com',
  address: 'Россия МО, Раменское',
  aboutMe: `Я фронтенд-разработчик с небольшим, но уже значительным опытом в ИТ-индустрии. Для систематического улучшения своих навыков я активно изучаю Full Steck веб-разработки в Образовательных технологиях Яндекса. Помимо этого, у меня есть собственный стартап-проект, в который верю и который, я уверен, станет успешным в будущем.

  Меня можно охарактеризовать как преданного командного игрока с проверенным опытом эффективного сотрудничества. Моя способность легко общаться и сотрудничать с коллегами и клиентами из разных культур поддерживается свободным владением английским, русским, армянским, испанским и голландским языками.
  
  Готов внести свой вклад в проекты и стать частью динамичной и креативной команды. Благодаря моим усилиям и стремлению к развитию, уверен, что смогу принести ценный вклад в любой профессиональный проект.`,
  motivation: `Стремясь к постоянному обучению, я всегда в курсе последних достижений в постоянно развивающейся области ИТ. Мотивированный и готовый сделать все возможное, я готов посвятить долгие часы достижению исключительных результатов.
  Мой путь в динамичную ИТ-индустрию подпитывается сильной мотивацией добиться значительного успеха. Я верю в то, что нужно преодолевать трудности, сохранять любопытство и вносить свой вклад в захватывающую сферу технологий`,
  dob: '05.07.1992',
  nationality: 'Армения',
  languages: ['Армянский', 'Русский', 'Английский', 'Испанский', 'Голландский'],
};

const userExperience = [
  {
    title: 'Junior Front-End Developer',
    company: 'RamWeb LLC',
    place: 'Ramenskoye, Moscow r., Russia',
    date: 'Jul 2021 - May 2022',
    description:
      'Participation in designing of websites. Development of web applications and services (development of product architecture and algorithms, search for balanced solutions and their effective implementation). Layout of sites, templates, e-mail newsletters, promotional pages (Landing Page). Development of interactive elements based on design layouts. Binding to the user interface of scripts that provide visualization and animation of the site pages. Optimization and expansion of the functionality of the existing code.',
  },
  {
    title: 'Executive Director',
    company: 'My Rose LLC',
    place: 'Yerevan, Armenia',
    date: 'Nov 2018 - Apr 2021',
    description:
      'Implementation of strategic tasks for the activities of the chain of flower stores, coordination of departments. Solving operational problems that department heads cannot cope with, be responsible for the profits of the company and its viability.',
  },
  {
    title: 'Executive Director',
    company: 'Fruitland LLC',
    place: 'Tbilisi, Georgia',
    date: 'Feb 2017 - Sep 2018',
    description:
      'Implementation of strategic objectives for the import and sale of tropical fruits from Ecuador. Implementation of tasks for the activities of the chain of stores, coordination of departments. Solving operational problems that department heads cannot cope with, be responsible for the profits of the company and its viability.',
  },
  {
    title: 'Lawyer',
    company: 'Catherine Group LLC',
    place: 'Yerevan, Armenia',
    date: 'May 2016 - Sep 2018',
    description: 'Legal functions, drawing up export and supply contracts.',
  }
];
const userExperienceRu = [
  {
    title: 'Фронтенд разработчик',
    company: 'Roomseller',
    place: 'Россия, Москва',
    date: 'Май 2023 — по настоящее время',
    description:
      'Разрабатывание внешнего вида веб интерфейса.',
  },
    {
    title: 'Стажер-разработчик',
    company: 'Bit Puma LLC',
    place: 'Ден Хелдер, Нидерланды',
    date: 'Декабрь 2022 — август 2023',
    description:
      'Разработка веб интерфейсов, верстка.',
  },
  {
    title: 'Исполнительный директор',
    company: 'My Rose LLC',
    place: 'Ереван, Армения',
    date: 'Ноябрь 2018 - Апрель 2021',
    description:
      'Внедрение стратегических задач для деятельности сети магазинов цветов, координация отделов. Решение операционных проблем, с которыми не справляются руководители отделов, ответственность за прибыль компании и ее жизнеспособность.',
  },
  {
    title: 'Исполнительный директор',
    company: 'Fruitland LLC',
    place: 'Тбилиси, Грузия',
    date: 'Февраль 2017 - Сентябрь 2018',
    description:
      'Внедрение стратегических задач для импорта и продажи тропических фруктов из Эквадора. Реализация задач для деятельности сети магазинов, координация отделов. Решение операционных проблем, с которыми не справляются руководители отделов, ответственность за прибыль компании и ее жизнеспособность.',
  },
  {
    title: 'Юрист',
    company: 'Catherine Group LLC',
    place: 'Ереван, Армения',
    date: 'Июль 2015 — июль 2020',
    description: 'Составление договоров и сопровождение сделок, работа с внутренним документооборотом, составление исков и претензий, работа с органами власти.',
  }
];
const userEducation = [
  {
    degree: 'Certificate',
    institution: 'Educational Technologies of Yandex',
    place: 'Moscow, Russia',
    date: '2024',
    description: 'Full stack developer: html, css, sass, webpack, git, figma, NodeJS, JavaScript, typeScript, React, Redux, OOP, MongoDB, PostgreSQL, Nest.js',
  },
  {
    degree: 'Certificate',
    institution: 'It Talent',
    place: 'Yerevan, Armenia',
    date: '2020',
    description: 'Frontend developer: html, css, sass, webpack, NodeJS, JavaScript',
  },
  {
    degree: "Master's Degree",
    institution: 'Yerevan State University',
    place: 'Yerevan, Armenia',
    date: '2016',
    description: 'Jurisprudence',
  },
  {
    degree: 'Bachelor',
    institution: 'Yerevan State University',
    place: 'Yerevan, Armenia',
    date: '2014',
    description: 'Jurisprudence',
  },
  {
    degree: 'Pre-baccalaureate',
    institution: 'Armenian Russian University',
    place: 'Yerevan, Armenia',
    date: '2009',
    description: 'Jurisprudence',
  }
];

const userEducationRu = [
  {
    degree: 'Сертификат',
    institution: 'Образовательные Технологии Яндекса',
    place: 'Москва, Россия',
    date: '2024',
    description: 'Full stack разработчик: : html, css, sass, webpack, git, figma, NodeJS, JavaScript, typeScript, React, Redux, OOP, MongoDB, PostgreSQL, Nest.js',
  },
  {
    degree: 'Сертификат',
    institution: 'It Talent',
    place: 'Ереван, Армения',
    date: '2020',
    description: 'Фронтенд разработчик: : html, css, sass, webpack, NodeJS, JavaScript',
  },
  {
    degree: 'Магистр',
    institution: 'Ереванский Государственный Университет',
    place: 'Ереван, Армения',
    date: '2016',
    description: 'Юриспруденция',
  }
]

const importIcon = (name) => require(`../images/icon/${name}.svg`);

const skillsData = [
  'HTML', 'CSS', 'Sass', 'Webpack', 'Git', 'Figma', 'Node.js', 'JavaScript',
  'TypeScript', 'React', 'Redux', 'OOP', 'BEM', 'MongoDB', 'PostgreSQL', 'NestJS',
  'Jest', 'Cypress', 'C Sharp', 'Python', 'Jupyter', 'SQL', 'Tableau',
  'Excel', 'PowerPoint', 'Azure', 'GitHub'
].map(name => ({ name, icon: importIcon(name) }));

export const data = {
  user: {
    portfolio: portfolio,
    info: userInfoRu,
    avatar: '../images/avatar/avatar.jpeg',
    experience: userExperienceRu,
    education: userEducationRu,
    skills: skillsData,
  },
};

