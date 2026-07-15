import { defineStore } from 'pinia'

import type { Project } from  '@/types/project'

interface PortfolioState {
    activeProject: Project | null
    printMode: boolean
}

export const usePortfolioStore = defineStore(
    'portfolio',
    {
        state: ():PortfolioState => ({
            activeProject: null,
            printMode: false,
        }),

        actions: {
            openProject(project: Project) {
                this.activeProject = project
            },

            closeProject(){
                this.activeProject = null
            }
        }
    }
)