<script setup lang="ts">
import { skillCategories } from '../data/resume'
import { useReveal } from '../composables/useReveal'

const revealRef = useReveal()
</script>

<template>
  <section id="skills" class="section section--soft">
    <div class="container">
      <div class="section-head reveal" ref="revealRef">
        <p class="eyebrow">Skills</p>
        <h2 class="section-title">Tools I reach for daily</h2>
        <p class="section-sub">
          A backend-first toolkit, rounded out with frontend, cloud and AI-assisted workflows.
        </p>
      </div>

      <div class="skills__grid">
        <div v-for="category in skillCategories" :key="category.title" class="skills__card card">
          <h3>{{ category.title }}</h3>
          <div class="skills__chips">
            <span v-for="skill in category.skills" :key="skill" class="chip chip--outline">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 18px;
}

.skills__card {
  padding: 24px;
}

.skills__card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: var(--accent);
}

.skills__card h3 {
  font-size: 1rem;
  margin-bottom: 14px;
}

.skills__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.chip--outline {
  background: var(--bg-soft);
  color: var(--text-muted);
  border: 1px solid var(--border);
  font-weight: 500;
}
</style>
