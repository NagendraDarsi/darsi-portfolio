<script setup lang="ts">
import { education } from '../data/resume'
import { useReveal } from '../composables/useReveal'

const revealRef = useReveal()
</script>

<template>
  <section id="education" class="section">
    <div class="container">
      <div class="section-head reveal" ref="revealRef">
        <p class="eyebrow">Education</p>
        <h2 class="section-title">Academic background</h2>
      </div>

      <div class="edu__list">
        <div v-for="item in education" :key="item.school" class="edu__card card">
          <div class="edu__icon">🎓</div>
          <div>
            <h3>{{ item.degree }}</h3>
            <p class="edu__school">{{ item.school }}</p>
            <p class="edu__meta">{{ item.location }} · {{ item.period }}<span v-if="item.detail"> · {{ item.detail }}</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.edu__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.edu__card {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  padding: 26px;
}

.edu__card:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.edu__icon {
  font-size: 1.6rem;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--accent-soft);
  border-radius: var(--radius-sm);
}

.edu__school {
  color: var(--text-muted);
  margin-top: 4px;
}

.edu__meta {
  color: var(--text-faint);
  font-size: 0.88rem;
  margin-top: 6px;
}
</style>
