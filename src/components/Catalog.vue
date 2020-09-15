<template>
      <section class="catalog">
        <ul class="catalog__list">
          <li class="catalog__item" v-for="item in itemList" :key="item.id">
            <a class="catalog__pic" href="#">
              <img :src="item.image" :srcset="prepareSrcsetJpg(item.image)" :alt="item.title">
            </a>

            <h3 class="catalog__title">
              <a href="#">
                {{item.title}}
              </a>
            </h3>

            <span class="catalog__price">
              {{formatPriceInRub(item.price)}}
            </span>

            <ul class="colors colors--black">
              <li class="colors__item" v-for="color in item.colorList" :key="color">
                <label class="colors__label">
                  <input class="colors__radio sr-only" type="radio" name="color-1" :value="color"  :checked="item.colorList[0] == color">
                  <span class="colors__value" :style="'background-color: ' + color + ';'">
                  </span>
                </label>
              </li>              
            </ul>

            <ul class="sizes">
              <li class="sizes__item" v-for="size in item.sizeList" :key="size">
                <label class="sizes__label">
                  <input class="sizes__radio sr-only" type="radio" name="sizes-1" value="size" :checked="item.sizeList[0] == size">
                  <span class="sizes__value">
                    {{size}} gb
                  </span>
                </label>
              </li>              
            </ul>
          </li>
          
        </ul>

        <ul class="catalog__pagination pagination">
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow pagination__link--disabled" aria-label="Предыдущая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--current">
              1
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              2
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              3
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              4
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              ...
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link" href="#">
              10
            </a>
          </li>
          <li class="pagination__item">
            <a class="pagination__link pagination__link--arrow" href="#" aria-label="Следующая страница">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </a>
          </li>
        </ul>
      </section>
</template>

<script>
export default {
  name: 'Catalog',
  props: {
    msg: String
  },
  methods: {
    prepareSrcsetJpg(pathString) {
      return pathString.replace(".jpg", "@2x.jpg 2x")
    },
    formatPriceInRub(priceAsNum) {
      return priceAsNum.toLocaleString('ru') + " ₽"
    },
  },
  data: function() {
    return {
      itemList: [
        {
          id: 1,
          image: "img/autoRC.jpg",
          title: "Auto RC Lime Star-PX",
          price: 32690,
          colorList: ["#73B6EA", "#8BE000", "#222"],
        },
        {
          id: 2,
          image: "img/aAutoRC.jpg",
          title: "Audi RC",
          price: 74390,          
          colorList: ["#73B6EA", "#222"],
        },
        {
          id: 3,
          image: "img/skywalker.jpg",
          title: "Skywalker X8",
          price: 136990,
          colorList: [ "#8BE000", "#222"],
        },
        {
          id: 4,
          image: "img/mavicAir.jpg",
          title: "DJI Mavic Air 4K",
          price: 3690,
        },
        {
          id: 5,
          image: "img/slipStreamS.jpg",
          title: "SLIPSTREAM S",
          price: 16920,
        },
        {
          id: 6,
          image: "img/unknownFly.jpg",
          title: "Unknown fly XF",
          price: 363940,
        },
        {
          id: 7,
          image: "img/rDrone.jpg",
          title: "R Drone",
          price: 697330,
        },
        {
          id: 8,
          image: "img/aDrone.jpg",
          title: "A Drone",
          price: 369890,
        },
        {
          id: 9,
          image: "img/gliderAD.jpg",
          title: "E-Flite Radian XL 2.6m RC Glide",
          price: 186930,
        },
        {
          id: 10,
          image: "img/copterA.jpg",
          title: "Aviator RC",
          price: 36930,
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
