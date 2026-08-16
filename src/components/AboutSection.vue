<script setup lang="ts">
import { profile, stats, languages } from '../data/resume'
import { useReveal } from '../composables/useReveal'

const revealRef = useReveal()
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-head reveal" ref="revealRef">
        <p class="eyebrow">About</p>
        <h2 class="section-title">A developer who ships and owns the outcome</h2>
        <p class="section-sub">
          {{ profile.summary }}
        </p>
      </div>

      <div class="about__grid">
        <div class="about__stats">
          <div v-for="stat in stats" :key="stat.label" class="stat card">
            <span class="stat__value gradient-text">{{ stat.value }}</span>
            <span class="stat__label">{{ stat.label }}</span>
          </div>
        </div>

        <div class="about__side card">
          <h3>Languages</h3>
          <ul class="about__langs">
            <li v-for="lang in languages" :key="lang">{{ lang }}</li>
          </ul>
          <h3>Based in</h3>
          <p class="about__location">{{ profile.location }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about__grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 24px;
}

.about__stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.stat {
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.stat:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
}

.stat__value {
  font-size: 2rem;
  font-weight: 800;
}

.stat__label {
  color: var(--text-muted);
  font-size: 0.92rem;
}

.about__side {
  padding: 26px 24px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about__side h3 {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-faint);
  margin-top: 14px;
}

.about__side h3:first-child {
  margin-top: 0;
}

.about__langs {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-weight: 500;
}

.about__location {
  font-weight: 500;
}

@media (max-width: 860px) {
  .about__grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 520px) {
  .about__stats {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
