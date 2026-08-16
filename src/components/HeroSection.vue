<script setup lang="ts">
import { profile, heroStack } from '../data/resume'
</script>

<template>
  <section id="top" class="hero">
    <div class="container hero__inner">
      <p class="eyebrow">Available for backend / full-stack roles</p>
      <h1 class="hero__title">
        Hi, I'm {{ profile.name.split(' ')[0] }} —
        <span class="gradient-text">backend-focused</span>
        full-stack engineer.
      </h1>
      <p class="hero__lead">{{ profile.summary }}</p>

      <div class="hero__stack">
        <span v-for="tech in heroStack" :key="tech" class="chip">{{ tech }}</span>
      </div>

      <div class="hero__actions">
        <a href="#projects" class="btn btn--primary">View projects</a>
        <a href="#contact" class="btn btn--ghost">Get in touch</a>
      </div>
    </div>

    <div class="hero__glow" aria-hidden="true"></div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  overflow: hidden;
  padding: 168px 0 96px;
}

.hero__inner {
  position: relative;
  z-index: 1;
  max-width: 760px;
}

.hero__title {
  font-size: clamp(2.1rem, 5vw, 3.4rem);
  line-height: 1.15;
  margin-bottom: 24px;
}

.hero__lead {
  color: var(--text-muted);
  font-size: 1.08rem;
  max-width: 640px;
  margin-bottom: 32px;
}

.hero__stack {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 36px;
}

.hero__actions {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
}

.hero__glow {
  position: absolute;
  top: -160px;
  right: -160px;
  width: 480px;
  height: 480px;
  background: radial-gradient(circle, rgba(79, 70, 229, 0.16) 0%, rgba(14, 165, 163, 0.08) 45%, transparent 70%);
  filter: blur(10px);
  z-index: 0;
}

@media (max-width: 720px) {
  .hero {
    padding: 132px 0 64px;
  }
}
</style>
