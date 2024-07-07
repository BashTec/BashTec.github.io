import { ref } from 'vue'
import type { Product } from '@/types/Product'

const showDetailModal = ref(false)

const detailModalProduct = ref<Product | undefined>(undefined)

const detailModalImageIndex = ref(0)

export { showDetailModal, detailModalProduct, detailModalImageIndex }
