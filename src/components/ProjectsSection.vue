<script setup lang="ts">
import { computed } from 'vue'
import { featuredProjects } from '../data/resume'
import { useReveal } from '../composables/useReveal'
import ProjectCard from './ProjectCard.vue'

const revealRef = useReveal()
const projectCount = computed(() => String(featuredProjects.length).padStart(2, '0'))
</script>

<template>
  <section id="projects" class="section section--soft">
    <div class="container">
      <div class="projects-head reveal" ref="revealRef">
        <div class="projects-head-top">
          <p class="eyebrow">Selected work</p>
          <span class="projects-count">{{ projectCount }} Projects</span>
        </div>
        <h2 class="section-title">Projects</h2>
        <p class="section-sub">
          A selection of products and platforms I've designed, built, optimized and maintained across different
          domains.
        </p>
      </div>

      <div class="projects-grid">
        <ProjectCard v-for="project in featuredProjects" :key="project.name" :project="project" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-head {
  max-width: none;
  margin-bottom: 40px;
}

.projects-head-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 12px;
}

.projects-head-top .eyebrow {
  margin-bottom: 0;
}

.projects-count {
  flex-shrink: 0;
  font-size: 12.5px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-faint);
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 999px;
  white-space: nowrap;
}

.projects-head .section-sub {
  max-width: 640px;
  font-size: 16px;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  align-items: stretch;
}

@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .projects-head-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
