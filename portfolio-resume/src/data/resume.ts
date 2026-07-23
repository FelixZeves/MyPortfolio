import type { Resume } from "@/types/resume";
import userPhoto from '@/assets/photo.png'

export const resume: Resume = {
    profile: {
        firstName: 'Феликс',
        surname: 'Зиновьев',
        patronymic: 'Викторович',
        title: "Software engineer",
        specialization: ['Frontend разработчик', 'Backend разработчик'],
        photo: userPhoto,
        about: `
Разработчик программного обеспечения с опытом создания web- приложений, микросервисных систем и программного обеспечения
для управления робототехническими платформами. Специализируюсь на Front-end разработке в Vue.js и Quasar
Framework, а также на проектировании высоконагруженных
расширяемых программных решений и систем. Имею знания по
смежным направлениям (базовые знания по Backend разработке, работе с CV и реализации специализированных AI модулей), что
позволяет быстро осваивать новые технологии и вливаться в новые
специфичные задачи. В работе ценю интересные задачи, профессиональный рост и возможность изучать современные
технологии.`.trim(),
        summary:`Создаю цифровые системы через инженерное мышление`.trim(),
        knowledges: ['Frontend', 'Backend', 'Systems']
    },

    contacts: [
        {
            type: 'location',
            value: "г. Челябинск"
        },

        {
            type: 'email',
            value: 'karpukov2002@mail.ru',
        },

        {
            type: 'phone',
            value: '+7 (929) 236-90-53'
        },

        {
            type: 'telegram',
            value: '@FilZeves',
            url: 'https://t.me/FilZeves'
        },

        {
            type: 'github',
            value: 'FelixZeves',
            url: 'https://github.com/FelixZeves'
        },
    ],

    experience: [
        {
            company: "Образовательный центр №5 г. Челябинска",
            position: "программист",
            startDate: "апрель 2025",
            endDate: "май 2026",
            achievements: [
                'Разработка CRM системы электронного документооборота.',
                'Front-end разработка на Vue.js и Quasar Framework.'
            ]
        },
    ],

    projects: [
        {
            name: "CRM система",
            description: "Микросервисное приложение документооброта с модулями ведения зада и мероприятий, а также с блок по ведению учебной деятельности",
            technologies: [
                'Python',
                'Docker',
                'Vue.js',
                'Quasar',
                'Next.js',
                'PostgreSQL'
            ],
            icon:'tdesign:ai-education',
            responsibilities: [
                'Архитектура решения, Front-end разработка, документация.',
                'Поддержка до 500 одновременных пользователей.'
            ]
        },

        {
            name: "Robot Framework",
            description: "Библиотека управления робототехническими платформами с поддержкой мобильных роботов, модулями взаимодействия с их отдельными компонентами и модулем Wi-Fi взаимодействия",
            technologies: [
                'Python',
                'RPi.GPIO',
                'WebSocket'
            ],
            icon:'streamline-sharp:ai-folder-robot',
            responsibilities: [
                'Архитектура на основе контрактных интерфейсов.',
                'Поддержка трёх- и многоколёсных, а также гусеничных платформ.',
                'Блоки: внутренние функции, управление роботами, демо-испытания.'
            ]
        },

        {
            name: "Web-приложение управления проектами",
            description: "Приложение направленное на набор студентов для выполениния как внутренних проектов университета,так и задач от сторонних заказчиков.",
            technologies: [
                'Django',
                'Bootstrap',
                'JavaScript',
                'PostgreSQL'
            ],
            icon:'octicon:project-roadmap-24',
            responsibilities: [
                'Архитектура и Front-end разработка полноценного PM-инструмента.'
            ]
        },
    ],

    education: [
        {
            institution: "Челябинский Государственный Университет (ЧелГУ)",
            faculty: "Математический факультет",
            specialization: "Фундаментальная информатика и информационные технологии",
            degree: "Бакалавр",
            startYear: 2020,
            endYear: 2024,
            achievements: ['Диплом с отличием']
        },

        {
            institution: "Челябинский Государственный Университет (ЧелГУ)",
            faculty: "Математический факультет",
            specialization: "ФИИТ - Робототехника",
            degree: "Магистр",
            startYear: 2024,
            endYear: 2026,
            achievements: ['Диплом с отличием']
        },
    ],

    skills: [
        {
            name: "Vue",
            icon: "flowbite:vue-solid",
            category: "frontend",
            level: 2
        },

        {
            name: "Quasar",
            icon: "simple-icons:quasar",
            category: "frontend",
            level: 2
        },

        {
            name: "JavaScript",
            icon: "simple-icons:javascript",
            category: "frontend",
            level: 2
        },

        {
            name: "TypeScript",
            icon: "simple-icons:typescript",
            category: "frontend",
            level: 2
        },
    
    
        {
            name: "Python",
            icon: "simple-icons:python",
            category: "backend",
            level: 2
        },

        {
            name: "C++",
            icon: "simple-icons:cplusplus",
            category: "backend",
            level: 2
        },

        {
            name: "Golang",
            icon: "simple-icons:go",
            category: "backend",
            level: 1
        },

        {
            name: "Java",
            icon: "streamline-ultimate:java-bold",
            category: "backend",
            level: 1
        },
    
    
        {
            name: "Docker",
            icon: "simple-icons:docker",
            category: "devops",
            level: 1
        },

        {
            name: "Git",
            icon: "simple-icons:git",
            category: "devops",
            level: 2
        },

        {
            name: "GitHub",
            icon: "simple-icons:github",
            category: "devops",
            level: 2
        },
    
    
        {
            name: "PostgreSQL",
            icon: "simple-icons:postgresql",
            category: "database",
            level: 2
        },

        {
            name: "MySQL",
            icon: "simple-icons:mysql",
            category: "database",
            level: 2
        },

        {
            name: "SQLite",
            icon: "simple-icons:sqlite",
            category: "database",
            level: 2
        },
    ],

    languages: [
        {
            name: "Английский",
            level: 3.5
        }
    ],

    softSkills:[
        {
            title:"Командная разработка",
            description:
                "Работа в командах 2–8 человек, согласование решений и ведение совместной разработки"
        },
    
        {
            title:"Коммуникация в разработке",
            description:
                "Обсуждение технических решений, аргументация подходов и обмен знаниями внутри команды"
        },
    
        {
            title:"Культура code review",
            description:
                "Анализ изменений, поиск улучшений и поддержание качества программного кода"
        },
    
        {
            title:"Ответственный подход",
            description:
                "Доведение задач до результата с вниманием к качеству реализации и деталям"
        },

        {
            title:"Ориентация на качество продукта",
            description:
                "Баланс между технической реализацией, удобством использования и визуальной целостностью решения"
        },
    
        {
            title:"Целеустремлённость",
            description:
                "Стремление доводить решения до функционально и визуально завершённого состояния"
        },
    
        {
            title:"Самостоятельное обучение",
            description:
                "Освоение новых технологий и инструментов через практическое применение в проектах"
        },
    
        {
            title:"Архитектурное мышление",
            description:
                "Проектирование структуры программных систем с учётом расширения и поддержки"
        },
    
        {
            title:"Работа с требованиями",
            description:
                "Анализ технических задач, уточнение требований и декомпозиция реализации"
        },
    
        {
            title:"Техническая документация",
            description:
                "Создание описаний, схем и документации для сопровождения программных решений"
        },
    
        {
            title:"Системное мышление",
            description:
                "Рассмотрение проекта как единой системы компонентов и взаимосвязей"
        },
    
        {
            title:"Внимание к деталям",
            description:
                "Поиск несоответствий и улучшение как технических, так и пользовательских аспектов"
        },
    
        {
            title:"Проектирование расширяемых систем",
            description:
                "Разработка решений с возможностью дальнейшего развития и масштабирования"
        }
    ]
}