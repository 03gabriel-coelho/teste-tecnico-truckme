<script setup>
import { ref } from 'vue';

const isExpanded = ref(false);
const hideButton = ref(false);

function toggleExpandText() {
  isExpanded.value = !isExpanded.value;
  hideButton.value = !hideButton.value;
}

defineProps({})
</script>

<template>
  <section class="about" id="about">
    <h1 class="title">Sobre nós</h1>
    <p>
      Através da nossa Plataforma Web, garantimos serviço com todos os
      requisitos e obrigações da transportadora tradicional.
    </p>
    <p id="second-paragraph" :class="{ 'show-flex': isExpanded }">
      Conectamos vocês Embarcadores aos mais qualificados transportadores
      autônomos, através de um criterioso processo de gestão e simplificação
      de processos do frete!
    </p>
    <button
      @click="toggleExpandText"
      id="button-expand-text"
      :class="{ 'button-remover': hideButton }"
    >
      Leia mais!
    </button>
  </section>
</template>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
}

.about p {
  font-size: 18px;
}

.about #second-paragraph {
  display: none;
}

.about #second-paragraph.show-flex {
  display: flex;
}

.about #button-expand-text.button-remover {
  display: none;
}
</style>
