<script setup lang="ts">
import type { Product } from '@/types/Product'
import { showDetailModal, detailModalProduct } from '@/composables/useDetailModal'

const props = defineProps<{
  product: Product
}>()

const showDetails = () => {
  detailModalProduct.value = props.product
  showDetailModal.value = true
}
</script>
<template>
  <div
    class="flex flex-col bg-white rounded overflow-hidden w-80 cursor-pointer"
    @click="showDetails"
  >
    <img
      :src="`/assets/img/${product.imageFolder}/${product.images[0]}.jpg`"
      alt="bild"
      class="h-52 w-full object-cover"
    />
    <div class="p-4">
      <h2>{{ product.title }}</h2>
      <p class="font-bold">{{ product.price }}</p>
    </div>
  </div>
</template>
