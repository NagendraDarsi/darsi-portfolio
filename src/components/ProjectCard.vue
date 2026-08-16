<script setup lang="ts">
import type { FeaturedProject } from '../data/resume'

defineProps<{ project: FeaturedProject }>()
</script>

<template>
  <article class="project-card" :class="{ 'project-card--highlight': project.highlight }">
    <div class="project-card-content">
      <header class="project-header">
        <h3 class="project-name">{{ project.name }}</h3>
        <span class="project-meta">{{ project.period }}</span>
      </header>

      <p class="project-description">{{ project.tagline }}</p>

      <ul class="project-bullets">
        <li v-for="item in project.highlights" :key="item">{{ item }}</li>
      </ul>
    </div>

    <div class="project-tech">
      <span v-for="tech in project.stack" :key="tech" class="tech-chip">{{ tech }}</span>
    </div>

    <a
      v-if="project.caseStudyUrl"
      :href="project.caseStudyUrl"
      class="project-link"
    >
      View case study
      <span aria-hidden="true">→</span>
    </a>
  </article>
</template>

<style scoped>
.project-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-width: 0;
  box-sizing: border-box;
  padding: 28px 28px 24px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 14px;
  box-shadow: 0 1px 2px rgba(20, 22, 35, 0.03);
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
}

.project-card:hover,
.project-card:focus-within {
  transform: translateY(-3px);
  border-color: #c7cbdb;
  box-shadow: 0 10px 28px -14px rgba(30, 34, 60, 0.22);
}

.project-card--highlight {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px rgba(79, 70, 229, 0.14);
}

.project-card--highlight:hover {
  border-color: var(--accent);
}

.project-card-content {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.project-header {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.project-name {
  min-height: 58px;
  display: flex;
  align-items: flex-start;
  font-size: 23px;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  overflow-wrap: break-word;
}

.project-meta {
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;
  font-weight: 500;
  color: var(--text-faint);
  font-family: 'JetBrains Mono', monospace;
}

.project-description {
  max-width: 100%;
  overflow-wrap: break-word;
  font-size: 14.5px;
  line-height: 1.5;
  color: var(--text-muted);
}

.project-bullets {
  display: flex;
  flex-direction: column;
  gap: 7px;
  margin-top: 2px;
  min-width: 0;
}

.project-bullets li {
  position: relative;
  padding-left: 16px;
  max-width: 100%;
  overflow-wrap: break-word;
  font-size: 13.5px;
  line-height: 1.5;
  color: var(--text-muted);
}

.project-bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 8px;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: var(--text-faint);
}

.project-tech {
  margin-top: 20px;
  padding-top: 16px;
  border-top: 1px solid var(--border);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-chip {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  background: var(--bg-soft);
  border: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 11.5px;
  font-weight: 500;
  white-space: nowrap;
  transition: border-color 180ms ease, color 180ms ease;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 14px;
  font-size: 13px;
  font-weight: 600;
  color: var(--accent);
}

.project-link span {
  transition: transform 180ms ease;
}

.project-link:hover span {
  transform: translateX(3px);
}

.project-link:focus-visible,
.project-card:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
