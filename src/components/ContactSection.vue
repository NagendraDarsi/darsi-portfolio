<script setup lang="ts">
import { profile } from '../data/resume'
import { useReveal } from '../composables/useReveal'

const revealRef = useReveal()
</script>

<template>
  <section id="contact" class="section section--soft">
    <div class="container">
      <div class="contact card reveal" ref="revealRef">
        <div class="contact__text">
          <p class="eyebrow">Contact</p>
          <h2 class="section-title">Let's build something reliable together</h2>
          <p class="section-sub">
            Open to backend and full-stack opportunities. Reach out by email or phone and I'll get back to you quickly.
          </p>
        </div>

        <div class="contact__links">
          <a :href="`mailto:${profile.email}`" class="contact__link">
            <span class="contact__icon">✉️</span>
            <span>
              <span class="contact__label">Email</span>
              <span class="contact__value">{{ profile.email }}</span>
            </span>
          </a>
          <a :href="`tel:${profile.phone.replace(/\\s/g, '')}`" class="contact__link">
            <span class="contact__icon">📞</span>
            <span>
              <span class="contact__label">Phone</span>
              <span class="contact__value">{{ profile.phone }}</span>
            </span>
          </a>
          <div class="contact__link contact__link--static">
            <span class="contact__icon">📍</span>
            <span>
              <span class="contact__label">Location</span>
              <span class="contact__value">{{ profile.location }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 48px;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 40px;
  align-items: center;
}

.contact__links {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact__link {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 18px;
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  background: var(--surface);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

a.contact__link:hover {
  transform: translateX(4px);
  border-color: var(--accent);
  box-shadow: var(--shadow-sm);
}

.contact__icon {
  font-size: 1.3rem;
}

.contact__label {
  display: block;
  font-size: 0.78rem;
  color: var(--text-faint);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.contact__value {
  display: block;
  font-weight: 600;
  margin-top: 2px;
}

@media (max-width: 860px) {
  .contact {
    grid-template-columns: 1fr;
    padding: 32px 24px;
  }
}
</style>
