export interface Profile {
    firstName: string
    surname: string
    patronymic: string

    birthday: Date

    photo?: string

    title: string
    knowledges: string[]
    specialization: string[]

    about: string
    summary: string
}