const carouselImage = document.getElementById('carousel-image');
const buttonBack = document.getElementById('carousel-back');
const buttonNext = document.getElementById('carousel-next');

const linksImage = [
  'https://media.licdn.com/dms/image/D4D10AQEEH2sz4_V_Vw/image-shrink_800/0/1709208200567?e=2147483647&v=beta&t=YV-HxIu_o4xWBAiugUXxhYVTZgiS40ETg3Dbp4pfLpw',
  'https://scontent.fplu19-1.fna.fbcdn.net/v/t39.30808-6/425756624_920993266397781_2445657505971806548_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEZ6wixtQRNCGpD-uUMnKptP6l_ZVGCxQc_qX9lUYLFB_iXR8laRNCLb9bq9yi5qVc6JF1VT16qfTY33MHanxc4&_nc_ohc=yscmaLQIjzMQ7kNvgEUX6zp&_nc_ht=scontent.fplu19-1.fna&oh=00_AYAijKQAv0hFhi7w83SRBLaQKJcT-T9Hz8FBqROt2y-t4Q&oe=6698DF4B',
  'https://i.ytimg.com/vi/B9G4aLp7n9I/maxresdefault.jpg',
  'https://media.licdn.com/dms/image/D4D22AQHp-dGr1jjizg/feedshare-shrink_800/0/1692365158142?e=2147483647&v=beta&t=TKI8VWHkjD1mFad5vs0CJTGO4rxEox7MLrtsPEvdrwY',
  'https://estradao.estadao.com.br/wp-content/uploads/2023/07/Abre-Volvo-FH1-1160x736.jpg',
];

let indexImage = 0;
carouselImage.src = linksImage[0];

function clickButton() {
  buttonBack.addEventListener('click', () => {
    moveCarousel(true);
  });

  buttonNext.addEventListener('click', () => {
   moveCarousel(false);
  });
}

function moveCarousel(nextImage) {
  if(nextImage) {
    if(indexImage < linksImage.length - 1) {
      indexImage += 1;
      carouselImage.src = linksImage[indexImage];
    } else {
      indexImage = 0;
      carouselImage.src = linksImage[indexImage];
    }
  } else {
    if(indexImage > 0) {
      indexImage -= 1;
      carouselImage.src = linksImage[indexImage];
    } else {
      indexImage = 4;
      carouselImage.src = linksImage[indexImage];
    }
  }
}

clickButton();
