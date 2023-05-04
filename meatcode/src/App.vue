<template>
  <div id="app">
    <Hero :title="'Bienvenidos'"/>
   
    <Articles />
    
    <Contact/>
  
  </div>
</template>

<script>
  import Hero from './components/Hero.vue';
  import Articles from './components/Articles.vue';
  import Contact from './components/contact.vue';
  

  export default {
    name: 'App',
    components: {
      Articles,
      Contact,
      Hero
    }
  };
</script>


