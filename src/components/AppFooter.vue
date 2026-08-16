<script setup lang="ts">
import { profile } from '../data/resume'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer__inner">
      <p>© {{ year }} {{ profile.name }}</p>
      <p class="footer__built">Built with Vue 3 + TypeScript</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: 28px 0;
}

.footer__inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.88rem;
  color: var(--text-faint);
}
</style>
