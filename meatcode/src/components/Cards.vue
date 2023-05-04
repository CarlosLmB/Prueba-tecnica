<template>
  <div class="card-container">
    <div v-for="card in filteredCards.slice(0, 6)" :key="card.id" class="card" >
      <img  :src="card.image" alt="Card Image" class="card-image">
      <h2 class="card-title">{{ card.title }}</h2>
      <p class="card-description" >{{ card.content }}</p>
      <a class="more" :href="card.url" target="_blank">Ver más</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cards',
  props: {
    cards: {
      type: Array,
      required: true
    },
    currentCategory: {
      type: String,
      required: true
    }
  },
  computed: {
    filteredCards() {
      return this.cards.filter(card => card.category === this.currentCategory || this.currentCategory === 'Todos');
    }
  }
};
</script>


