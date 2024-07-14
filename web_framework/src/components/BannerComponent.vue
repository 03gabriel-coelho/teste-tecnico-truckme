<script setup>
defineProps({})
</script>

<template>
  <div class="banner" id="home-banner">
    <h1>Bem vindo ao Truckme!</h1>
    <h1>Solução Inteligente em Fretes.</h1>
  </div>
</template>

<style scoped>
.banner {
  background-image: url("https://cpfabbri.com.br/wp-content/uploads/2022/05/Tipos-de-caminhao.jpg");
  width: 100%;
  height: 70vh;
  margin-top: 80px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.banner h1 {
  color: #FFF;
  font-size: 50px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}

@media (max-width: 700px) {
  .banner {
    height: 40vh;
  }

  .banner h1 {
    font-size: 25px;
  }
}
</style>
