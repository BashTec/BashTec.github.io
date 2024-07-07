<script setup lang="ts">
import {
  detailModalProduct,
  showDetailModal,
  detailModalImageIndex
} from '@/composables/useDetailModal'

const closeModal = () => {
  showDetailModal.value = false
  detailModalProduct.value = undefined
  detailModalImageIndex.value = 0
}

const changeImage = () => {
  if (
    detailModalProduct.value?.images &&
    detailModalImageIndex.value < detailModalProduct.value?.images.length - 1
  ) {
    detailModalImageIndex.value += 1
  } else {
    detailModalImageIndex.value = 0
  }
}
</script>

<template>
  <div
    v-if="showDetailModal"
    @click.self="closeModal"
    class="bg-gray-900/75 w-full h-full fixed top-0 left-0 flex justify-center items-center"
  >
    <div class="bg-white rounded p-4 max-w-screen-lg m-4">
      <div class="flex flex-col sm:flex-row gap-6 mb-6">
        <div class="flex-shrink-0 bg-gray-100 shadow">
          <img
            :src="`/assets/img/${detailModalProduct?.imageFolder}/${detailModalProduct?.images[detailModalImageIndex]}.jpg`"
            alt="bild"
            class="h-80 w-96 object-contain"
            @click="changeImage"
          />
        </div>
        <div class="flex-grow-0">
          <h2 class="font-semibold text-2xl mb-6">{{ detailModalProduct?.title }}</h2>
          <p class="font-bold text-2xl">{{ detailModalProduct?.price }}</p>
          <p>zzgl. Versandkosten</p>
        </div>
      </div>
      <p v-for="(description, index) in detailModalProduct?.description" :key="index" class="mb-2">
        {{ description }}
      </p>
    </div>
  </div>
</template>
