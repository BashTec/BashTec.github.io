<script setup lang="ts">
type Product = {
  title: string
  description: string[]
  imageFolder: string
  images: string[]
  price: string
}

defineProps<{
  product: Product
}>()
</script>
<template>
  <div class="flex flex-col bg-white rounded overflow-hidden w-80">
    <img :src="`/assets/img/${product.imageFolder}/${product.images[0]}.jpg`" alt="bild" class="" />
    <div class="p-4">
      <h2>{{ product.title }}</h2>
      <p class="font-bold">{{ product.price }}</p>
    </div>
  </div>
</template>
