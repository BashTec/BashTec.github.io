<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TopNav from '@/components/TopNav.vue'
import DetailModal from '@/components/DetailModal.vue'
</script>

<template>
  <TopNav />
  <DetailModal />
  <RouterView class="mt-16 p-4 max-w-screen-lg mx-auto flex flex-col gap-8" />
</template>

<style scoped></style>
