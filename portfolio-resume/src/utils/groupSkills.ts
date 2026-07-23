import type { Skill } from '@/types/skill'


export function groupSkills(
    skills:Skill[]
){

    return skills.reduce<Record<string, Skill[]>>(
        (groups, skill)=>{

            if(!groups[skill.category]){
                groups[skill.category] = []
            }

            groups[skill.category]!.push(skill)

            return groups

        },
        {}
    )

}