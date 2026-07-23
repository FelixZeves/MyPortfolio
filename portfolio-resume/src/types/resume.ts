import type {
    Profile
} from './profile'

import type {
    Contact
} from './contact'

import type {
    ProfessionalExperience
} from './professionalExperience'

import type {
    Project
} from './project'

import type {
    Education
} from './education'

import type {
    Skill
} from './skill'

import type {
    SoftSkill
} from './softSkill'

import type {
    Language
} from './language'

export interface Resume{
    profile: Profile

    contacts: Contact[]

    experience: ProfessionalExperience[]

    projects: Project[]

    education: Education[]

    skills: Skill[]

    languages: Language[]

    softSkills: SoftSkill[]
}