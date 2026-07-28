import type { EmploymentFormat, EmploymentType } from "@/types/profile"

export function getEmploymentTypeName(type: EmploymentType): string {

    switch (type) {
        case 'full-time':
            return 'Полная занятость'

        case 'part-time':
            return 'Частичная занятость'

        case 'contract':
            return 'Проектная работа'

        case 'freelance':
            return 'Фриланс'
    }

    return 'Неопределённый тип работы'
}

export function getEmploymentFormatName(format: EmploymentFormat): string {

    switch (format) {
        case 'office':
            return 'Работа в офисе'

        case 'remote':
            return 'Удалённая работа'

        case 'hybrid':
            return 'Офисная и удалённая работа'
    }

    return 'Неопределённый формат работы'
}