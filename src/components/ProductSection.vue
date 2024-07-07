<script setup lang="ts">
import ProductTile from '@/components/ProductTile.vue'
import * as data from '@/data/products.json'
</script>

<template>
  <section>
    <h2 class="text-2xl font-bold mb-4">Wollwickler</h2>
    <div class="flex gap-x-4 gap-y-8 flex-wrap justify-center md:justify-start mb-8">
      <ProductTile
        v-for="product in data.products.wickler"
        :key="product.imageFolder"
        :product="product"
      />
    </div>
    <h2 class="text-2xl font-semibold mb-4">Haspeln</h2>
    <div class="flex gap-x-4 gap-y-8 flex-wrap justify-center md:justify-start mb-8">
      <ProductTile
        v-for="product in data.products.haspeln"
        :key="product.imageFolder"
        :product="product"
      />
    </div>
    <h2 class="text-2xl font-semibold mb-4">Maschenmarkierer</h2>
    <div class="flex gap-x-4 gap-y-8 flex-wrap justify-center md:justify-start mb-8">
      <ProductTile
        v-for="product in data.products.markierer"
        :key="product.imageFolder"
        :product="product"
      />
    </div>
    <h2 class="text-2xl font-semibold mb-4">Sonstiges</h2>
    <div class="flex gap-x-4 gap-y-8 flex-wrap justify-center md:justify-start mb-8">
      <ProductTile
        v-for="product in data.products.sonstiges"
        :key="product.imageFolder"
        :product="product"
      />
    </div>
  </section>
</template>
