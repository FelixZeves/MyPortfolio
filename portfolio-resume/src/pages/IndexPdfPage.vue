<script setup lang="ts">

import { resume } from '@/data/resume'

import ProfileSection from '@/components/profile/pdf/PdfProfileSection.vue'

import ProjectsSection from '@/components/projects/pdf/PdfProjectsSection.vue'

import ExperienceSection from '@/components/experience/ExperienceSection.vue'

import SkillsSection from '@/components/skills/pdf/PdfSkillsSection.vue'

import FooterSection from '@/components/PdfFooterSection.vue'

import ResumeFrame from '@/components/ui/PdfResumeFrame.vue'

</script>

<template>


    <div class="pdf-page">


        <resume-frame>

            
            <ProfileSection
                :profile="resume.profile"
                :languages="resume.languages"
            />

            <div class="page-footer">

                <div class="page-divider"></div>

                <div class="page-meta">

                    <span>СТР. 1 / 3</span>

                    <span>раздел: профиль</span>

                </div>

                <div class="page-meta">

                    продолжение на следующей странице

                </div>

            </div>

            <ProjectsSection class="page"
                :projects="resume.projects"
            />

            <ExperienceSection
                :education="resume.education"
                :workExperience="resume.experience"
            />

            <div class="page-footer">

                <div class="page-divider"></div>

                <div class="page-meta">

                    <span>СТР. 2 / 3</span>

                    <span>раздел: проекты и опыт</span>

                </div>

                <div class="page-meta">

                    продолжение на следующей странице

                </div>

            </div>

            <SkillsSection class="page"
                :skills="resume.skills"
                :softSkills="resume.softSkills"
            />

            <FooterSection
                :contacts="resume.contacts"
            />

            <div class="page-footer">

                <div class="page-divider"></div>

                <div class="page-meta">

                    <span>СТР. 3 / 3</span>

                    <span>раздел: навыки и контакты</span>

                </div>

            </div>

        </resume-frame>

        
    </div>


</template>

<style scoped>

.pdf-page{

    min-height:100vh;

    display:flex;
    justify-content:center;
    align-items:flex-start;

    background: var(--signal-additional)

}

.page {

    page-break-before: always;

}

.page-footer {

    margin-top: 1.25rem;

}

.page-divider {

    width:100%;
    height:1px;

    background:
        rgba(var(--paper-dark-rgb), .35);

}

.page-meta {

    display:flex;

    justify-content:space-between;

    align-items:center;

    padding-top:.45rem;

    padding-inline: .75rem;

    font-family:var(--font-paper);

    font-size:.65rem;

    letter-spacing:.2em;

    text-transform:uppercase;

    color: rgba(var(--industrial-black-rgb), .65);

}

</style>