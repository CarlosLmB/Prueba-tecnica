<template>
  
  <div class="articulos">
      <h2 class="section">Nuestros artículos</h2>
      <img src="../assets/images/BRUSH-5.png" alt="">
  </div>

    
  <div class="navi-container">
    <nav class="navigator">
      <ul>
        <li><a href="#" @click.prevent="fetchCardsData('Todos')" >TODOS</a></li>
        <li><a href="#" @click.prevent="fetchCardsData('Productos')">PRODUCTOS</a></li>
        <li><a href="#" @click.prevent="fetchCardsData('Recetas')">RECETAS</a></li>
        <li><a href="#" @click.prevent="fetchCardsData('Consejos')">CONSEJOS</a></li>
      </ul>
    </nav>
    <Cards v-if="showCards" :cards="cardsData" :current-category="currentCategory" />
  </div>

</template>

<script>
  import Cards from '@/components/Cards.vue';
  import axios from 'axios';

  export default {
    name: 'Articles',
    components: {
      Cards
    },
    data() {
      return {
        showCards: false,
        cardsData: [],
        currentCategory: ''
      }
    },
    methods: {
    fetchCardsData(category) {
      let url = 'https://5eed24da4cbc340016330f0d.mockapi.io/api/articles';
      if (category && category !== 'Todos') {
        url += `?filter=${category}`;
      }

      axios.get(url)
        .then(response => {
          this.cardsData = response.data;
          this.currentCategory = category;
          this.showCards = true;
        })
        .catch(error => {
          console.log(error);
        });
      }
    },
    mounted() {
      this.fetchCardsData('Todos');
    } 
  };
</script>


