<script setup lang="ts">
import { ref } from 'vue'

const showMore = ref(false)
</script>

<template>
  <div class="bg-white rounded p-4">
    <div class="flex sm:flex-row flex-col sm:justify-center gap-4 items-center mb-6">
      <img src="/assets/img/avatar.jpg" alt="avatar" class="rounded-full" />
      <p class="text-xl italic">
        "Ich habe mir als Ziel gesetzt Produkte für das Handling von Wolle, sprich elektrisch
        betriebene Wollwickler, Umwickler zum Teilen von Konen, Haspeln, zu möglichst günstigen
        Preisen anzubieten."
      </p>
    </div>
    <div v-if="showMore">
      <ul class="list-disc ml-6 mb-6">
        <li>Selbstverständlich werden dabei die gängigen Sicherheitsstandards eingehalten.</li>
        <li>
          Ich verzichte aus den oben genannten Gründen auf z.B. die Lackierung von Gehäusen und
          andere arbeitsintensive "Design-verbesserungen".
        </li>
        <li>
          Die eingebauten Motoren sind i.A. gebraucht und überholt, anders lassen sich die günstigen
          Preise nicht halten.
        </li>
        <li>
          Die Elektroniken, Netzteile usw. sind neu. Von daher wird Garantie nur auf die verwendeten
          Neuteile angeboten. Motoren sind von der Garantie ausgenommen.
        </li>
        <li>
          Die in den Angeboten genannten Lieferzeiten sind maximale Richtwerte, Reparaturen werden
          immer sofort erledigt und erfolgen zu Selbstkosten + Porto.
        </li>
        <li>
          Anregungen werden gerne angenommen. Wünsche nach Sonderanfertigungen werden, soweit es die
          Produktionsmöglichkeiten erlauben, mit aufgenommen. Hierfür werden allerdings keine festen
          Lieferfristen genannt. Normale Bestellungen haben immer Vorrang.
        </li>
      </ul>
      <p class="mb-2">
        Und wenn ich zwischendurch mal nicht weiß, was ich tun soll...... fertige ich
        Maschenmarkierer und das eine oder andere Teil aus Holz oder auch Kerzen, was mir gerade so
        einfällt. Lasst euch überraschen!
      </p>
    </div>
    <button @click="showMore = !showMore" class="text-blue-600">
      {{ showMore ? 'weniger anzeigen' : 'mehr anzeigen' }}
    </button>
  </div>
</template>
