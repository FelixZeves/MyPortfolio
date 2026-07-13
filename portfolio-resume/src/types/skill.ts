export type SkillLevel =  0 | 1 | 2 | 3

export type SkillCategory = 
    | 'frontend'
    | 'backend'
    | 'database'
    | 'devops'
    | 'hardware'
    | 'other'

export interface Skill {
    name: string

    category: SkillCategory

    level: SkillLevel
}