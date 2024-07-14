<script setup>
defineProps({})
</script>

<template>
  <header class="header">
    <img
      src="https://truckme.com.br/landingpage/wp-content/uploads/2020/09/logo_truck_me_frete_plataforma.png"
    />
    <nav class="header-navbar">
      <a href="#home-banner">Home</a>
      <a href="#about">Sobre</a>
      <a href="#service-table">Serviços</a>
      <a href="#contact-form">Contato</a>
    </nav>
  </header>
</template>

<style scoped>
.header {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
}

.header img {
  width: 300px;
}

.header-navbar {
  display: flex;
  flex: 0.7;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 80px;
}

.header-navbar a {
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  cursor: pointer;
  margin: 0px 10px 0px 10px
}

.header-navbar a:hover {
  color: #f05123;
  transition: 400ms;
}

@media (max-width: 700px) {
  .header {
    flex-direction: column;
    height: 100px;
  }

  .header-navbar {
    background-color: #f05123;
    width: 100%;
  }

  .header-navbar a {
    color: #FFF;
  }

  .header-navbar a:hover {
    color: #FFF;
  }
}

</style>
