export type ContactType = 
    | 'email'
    | 'phone'
    | 'telegram'
    | 'github'
    | 'location'

export interface Contact {
    type: ContactType
    value: string
    url?: string
}