<script setup lang="ts">
import { ref } from 'vue'
import { experience } from '../data/resume'
import { useReveal } from '../composables/useReveal'

const revealRef = useReveal()
const openIndex = ref(0)

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? -1 : index
}
</script>

<template>
  <section id="experience" class="section">
    <div class="container">
      <div class="section-head reveal" ref="revealRef">
        <p class="eyebrow">Experience</p>
        <h2 class="section-title">Where I've built things</h2>
        <p class="section-sub">Three years across a construction-tech platform, business automation, and a property operations system.</p>
      </div>

      <ol class="timeline">
        <li v-for="(job, index) in experience" :key="job.company" class="timeline__item">
          <div class="timeline__marker"></div>

          <div class="timeline__card card">
            <button class="timeline__head" @click="toggle(index)">
              <div>
                <h3>{{ job.role }}</h3>
                <p class="timeline__company">
                  {{ job.company }}<span v-if="job.location"> · {{ job.location }}</span>
                </p>
              </div>
              <div class="timeline__meta">
                <span class="chip">{{ job.period }}</span>
                <span class="timeline__chevron" :class="{ 'timeline__chevron--open': openIndex === index }">⌄</span>
              </div>
            </button>

            <transition name="expand">
              <div v-if="openIndex === index" class="timeline__body">
                <ul class="timeline__bullets">
                  <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
                </ul>

                <div v-if="job.projects" class="timeline__projects">
                  <div v-for="project in job.projects" :key="project.name" class="timeline__project">
                    <h4>Project: {{ project.name }}</h4>
                    <ul class="timeline__bullets">
                      <li v-for="bullet in project.bullets" :key="bullet">{{ bullet }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>

<style scoped>
.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 28px;
  padding-left: 28px;
  border-left: 2px solid var(--border);
}

.timeline__item {
  position: relative;
}

.timeline__marker {
  position: absolute;
  left: -34px;
  top: 26px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 0 4px var(--accent-soft);
}

.timeline__card {
  padding: 22px 26px;
}

.timeline__head {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
  color: inherit;
  font-family: inherit;
}

.timeline__company {
  color: var(--text-muted);
  font-size: 0.92rem;
  margin-top: 4px;
}

.timeline__meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.timeline__chevron {
  display: inline-block;
  font-size: 1.2rem;
  color: var(--text-faint);
  transition: transform 0.2s ease;
}

.timeline__chevron--open {
  transform: rotate(180deg);
}

.timeline__body {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px solid var(--border);
}

.timeline__bullets {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.timeline__bullets li {
  position: relative;
  padding-left: 18px;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.timeline__bullets li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 9px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-2);
}

.timeline__projects {
  margin-top: 18px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.timeline__project h4 {
  font-size: 0.95rem;
  margin-bottom: 10px;
  color: var(--accent);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  margin-top: 0;
  padding-top: 0;
  border-top-color: transparent;
}

.expand-enter-to,
.expand-leave-from {
  max-height: 2400px;
}

@media (max-width: 600px) {
  .timeline {
    padding-left: 20px;
  }

  .timeline__marker {
    left: -26px;
  }

  .timeline__head {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
