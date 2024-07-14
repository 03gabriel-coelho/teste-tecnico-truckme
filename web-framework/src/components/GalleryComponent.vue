<script setup>
defineProps({})
</script>

<template>
  <footer class="footer-carousel">
    <button type="button" id="carousel-back">Anterior</button>
    <div>
      <img
        id="carousel-image"
      />
    </div>
    <button type="button" id="carousel-next">Próximo</button>
  </footer>
</template>

<style scoped>
.footer-carousel {
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.footer-carousel div {
  width: 100vw;
  height: 400px;
  overflow: hidden;
  position: relative;
}

.footer-carousel button {
  display: inline-block;
  position: absolute;
}

.footer-carousel button:first-of-type  {
  left: 5.7vw;
  z-index: 1;
}

.footer-carousel button:last-of-type  {
  right: 5vw;
}

.footer-carousel img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

@media (max-width: 700px) {
  .footer-carousel {
    align-items: end;
  }

  .footer-carousel button {
    margin-bottom: 20px;
  }
}
</style>
