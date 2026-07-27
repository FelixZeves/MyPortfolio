export type ContactType = 
    | 'email'
    | 'телефон'
    | 'telegram'
    | 'github'
    | 'локация'

export interface Contact {
    type: ContactType
    value: string
    url?: string
    icon?: string
}