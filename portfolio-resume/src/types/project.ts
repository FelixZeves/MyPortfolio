export interface ProjectLink {
    title: string
    url: string
}

export interface Project {
    name: string
    description: string
    image?: string
    technologies: string[]
    responsibilities: string[]
    links?: ProjectLink
}