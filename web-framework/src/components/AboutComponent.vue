<script setup>
defineProps({})
</script>

<template>
  <section class="about" id="about">
    <h1 class="title">Sobre nós</h1>
    <p>
      Através da nossa Plataforma Web, garantimos serviço com todos os
      requisitos e obrigações da transportadora tradicional.
    </p>
    <p id="second-paragraph">
      Conectamos vocês Embarcadores aos mais qualificados transportadores
      autônomos, através de um criterioso processo de gestão e simplificação
      de processos do frete!
    </p>
    <button id="button-expand-text">Leia mais!</button>
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
</style>
