export interface ProjectLink {
    title: string
    url: string
}

export interface Project {
    name: string
    description: string
    icon?: string
    technologies: string[]
    responsibilities: string[]
    links?: ProjectLink
}