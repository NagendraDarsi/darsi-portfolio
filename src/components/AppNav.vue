<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { navLinks, profile } from '../data/resume'
import { useScrollSpy } from '../composables/useScrollSpy'

const isOpen = ref(false)
const isScrolled = ref(false)
const activeId = useScrollSpy(navLinks.map((l) => l.id))

function onScroll() {
  isScrolled.value = window.scrollY > 12
}

function closeMenu() {
  isOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': isScrolled }">
    <div class="container nav__inner">
      <a href="#top" class="nav__brand">{{ profile.name }}</a>

      <nav class="nav__links">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav__link"
          :class="{ 'nav__link--active': activeId === link.id }"
        >
          {{ link.label }}
        </a>
      </nav>

      <a href="#contact" class="btn btn--primary nav__cta">Let's talk</a>

      <button
        class="nav__toggle"
        :class="{ 'nav__toggle--open': isOpen }"
        aria-label="Toggle menu"
        @click="isOpen = !isOpen"
      >
        <span></span><span></span><span></span>
      </button>
    </div>

    <transition name="slide">
      <nav v-if="isOpen" class="nav__mobile">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="nav__mobile-link"
          @click="closeMenu"
        >
          {{ link.label }}
        </a>
        <a href="#contact" class="btn btn--primary" @click="closeMenu">Let's talk</a>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: saturate(180%) blur(14px);
  -webkit-backdrop-filter: saturate(180%) blur(14px);
  border-bottom: 1px solid transparent;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.nav--scrolled {
  border-color: var(--border);
  box-shadow: 0 4px 20px -12px rgba(20, 22, 35, 0.15);
}

.nav__inner {
  display: flex;
  align-items: center;
  gap: 24px;
  height: 72px;
}

.nav__brand {
  font-weight: 800;
  font-size: 1.05rem;
  letter-spacing: -0.01em;
  margin-right: auto;
}

.nav__links {
  display: flex;
  gap: 4px;
}

.nav__link {
  position: relative;
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.92rem;
  font-weight: 500;
  color: var(--text-muted);
  transition: color 0.18s ease, background 0.18s ease;
}

.nav__link:hover {
  color: var(--text);
  background: var(--bg-soft);
}

.nav__link--active {
  color: var(--accent);
  background: var(--accent-soft);
}

.nav__cta {
  padding: 10px 18px;
  font-size: 0.88rem;
}

.nav__toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid var(--border);
  border-radius: 8px;
  cursor: pointer;
}

.nav__toggle span {
  display: block;
  height: 2px;
  margin: 0 7px;
  background: var(--text);
  border-radius: 2px;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.nav__toggle--open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.nav__toggle--open span:nth-child(2) {
  opacity: 0;
}

.nav__toggle--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.nav__mobile {
  display: none;
}

@media (max-width: 860px) {
  .nav__links,
  .nav__cta {
    display: none;
  }

  .nav__toggle {
    display: flex;
  }

  .nav__mobile {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 24px 20px;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
  }

  .nav__mobile-link {
    padding: 12px 4px;
    font-weight: 500;
    border-bottom: 1px solid var(--border);
  }

  .nav__mobile .btn {
    margin-top: 14px;
    justify-content: center;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>
