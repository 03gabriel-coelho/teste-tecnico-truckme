<script setup>
import { ref } from 'vue';

const linksImage = [
  'https://media.licdn.com/dms/image/D4D10AQEEH2sz4_V_Vw/image-shrink_800/0/1709208200567?e=2147483647&v=beta&t=YV-HxIu_o4xWBAiugUXxhYVTZgiS40ETg3Dbp4pfLpw',
  'https://scontent.fplu19-1.fna.fbcdn.net/v/t39.30808-6/425756624_920993266397781_2445657505971806548_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEZ6wixtQRNCGpD-uUMnKptP6l_ZVGCxQc_qX9lUYLFB_iXR8laRNCLb9bq9yi5qVc6JF1VT16qfTY33MHanxc4&_nc_ohc=yscmaLQIjzMQ7kNvgEUX6zp&_nc_ht=scontent.fplu19-1.fna&oh=00_AYAijKQAv0hFhi7w83SRBLaQKJcT-T9Hz8FBqROt2y-t4Q&oe=6698DF4B',
  'https://i.ytimg.com/vi/B9G4aLp7n9I/maxresdefault.jpg',
  'https://media.licdn.com/dms/image/D4D22AQHp-dGr1jjizg/feedshare-shrink_800/0/1692365158142?e=2147483647&v=beta&t=TKI8VWHkjD1mFad5vs0CJTGO4rxEox7MLrtsPEvdrwY',
  'https://estradao.estadao.com.br/wp-content/uploads/2023/07/Abre-Volvo-FH1-1160x736.jpg',
];

const indexImage = ref(0);
const carouselImage = ref(linksImage[0]);

function handleClickButton(nextImage) {
  if(nextImage) {
    if(indexImage.value < linksImage.length - 1) {
      indexImage.value += 1;
      carouselImage.value = linksImage[indexImage.value];
    } else {
      indexImage.value = 0;
      carouselImage.value = linksImage[indexImage.value];
    }
  } else {
    if(indexImage.value > 0) {
      indexImage.value -= 1;
      carouselImage.value = linksImage[indexImage.value];
    } else {
      indexImage.value = 4;
      carouselImage.value = linksImage[indexImage.value];
    }
  }
}

defineProps({})
</script>

<template>
  <footer class="footer-carousel">
    <button
      type="button"
      id="carousel-back"
      @click="handleClickButton(false)"
    >
      Anterior
    </button>
    <div>
      <img
        id="carousel-image"
        :src="carouselImage"
      />
    </div>
    <button
      type="button"
      id="carousel-next"
      @click="handleClickButton(true)"
    >
      Próximo
    </button>
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
