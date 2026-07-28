export type EmploymentType =
        | 'full-time'
        | 'part-time'
        | 'contract'
        | 'freelance'

export type EmploymentFormat =
        | 'office'
        | 'remote'
        | 'hybrid'

interface EmploymentInfo {

    type: EmploymentType

    format: EmploymentFormat
        
    salary?:string

}


interface PersonalInfo {

    maritalStatus:string

    drivingLicense?:string

}

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

    employment: EmploymentInfo

    personal: PersonalInfo
}