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
            endYear: 2024
        },
        {
            institution: "Челябинский Государственный Университет (ЧелГУ)",
            faculty: "Математический факультет",
            specialization: "ФИИТ - Робототехника",
            degree: "Магистр",
            startYear: 2024,
            endYear: 2026
        },
    ],
    skills: [
        {
            name: "Vue",
            category: "frontend",
            level: 2
        },
        {
            name: "Quasar",
            category: "frontend",
            level: 2
        },
        {
            name: "JavaScript",
            category: "frontend",
            level: 2
        },
        {
            name: "TypeScript",
            category: "frontend",
            level: 1
        },
        {
            name: "Python",
            category: "backend",
            level: 2
        },
        {
            name: "C++",
            category: "backend",
            level: 1
        },
        {
            name: "Golang",
            category: "backend",
            level: 1
        },
        {
            name: "Docker",
            category: "devops",
            level: 1
        },
        {
            name: "Git",
            category: "devops",
            level: 2
        },
        {
            name: "GitHub",
            category: "devops",
            level: 2
        },
        {
            name: "PostgreSQL",
            category: "database",
            level: 2
        },
        {
            name: "MySQL",
            category: "database",
            level: 2
        },
        {
            name: "SQLite",
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
    softSkills: [
        {
            title: "Командная разработка по Git-flow"
        },
        {
            title: "Участие в code review"
        },
        {
            title: "Проектирование архитектуры ПО"
        },
        {
            title: "Техническая документация"
        },
        {
            title: "Работа с техническими заданиями"
        },
        {
            title: "Проектирование расширяемых систем"
        }
    ]
}