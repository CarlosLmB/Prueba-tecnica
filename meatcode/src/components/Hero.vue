<template>
    <div class="hero">
      <div class="hero-header">
        <div class="logo">
          <h2>Logo</h2>
        </div>
        <div class="social-icons">
          <a href="https://www.facebook.com/" target="_blank" class="icon-1"><font-awesome-icon :icon="['fab', 'facebook-f']" style="color: #009CD9;"/></a>
          <a href="https://www.instagram.com/" target="_blank" class="icon-2"><font-awesome-icon :icon="['fab', 'instagram']" style="color: #b72c2c;" /></a>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" class="icon-3"><font-awesome-icon :icon="['fab', 'youtube']" style="color: #d8ad3d;" /></a>
        </div>
      </div>
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            El secreto<br>
            de tu cocina
          </h1>
          <img src="../assets/images/BRUSH-3 2.png" alt="brush" class="brush">
        </div>
      </div>
      <div class="rectangle">
    </div>
  </div>
  </template>
  
  <script>
    export default {
      name: 'Hero',
      props: {
        title: {
          type: String,
          required: true
        }
      }, mounted() {
        const socialIcons = document.querySelector('.social-icons');
        const initialOffsetTop = socialIcons.offsetTop;
            
        function updateOffset() {
          const currentOffsetTop = socialIcons.offsetTop;
          const offsetY = window.pageYOffset - initialOffsetTop;
          socialIcons.style.transform = `translateY(${offsetY}px)`;
          requestAnimationFrame(updateOffset);
        }
        requestAnimationFrame(updateOffset);
        }
}
</script>
  
  

