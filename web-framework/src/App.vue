<script setup>
  import HeaderComponent from './components/HeaderComponent.vue'
</script>

<template>
  <HeaderComponent />
  <RouterView />
</template>

<style scoped>
body {
  font-family: "Montserrat", sans-serif;
  font-optical-sizing: auto;
  font-style: normal;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  overflow-x: hidden;
}

.title {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 5px;
  color: #F05123;
  font-size: 25px;
}

button {
  font-family: "Montserrat", sans-serif;
  font-size: 15px;
  padding: 5px 25px 5px 25px;
  background-color: #f05123;
  color: #FFF;
  border-radius: 15px;
  border: none;
  transition: 500ms;
  cursor: pointer;
}

button:hover {
  font-size: 17px;
}
</style>
