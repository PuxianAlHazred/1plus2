<template>
    <nuxt-link to="/" id="scene" class="logo-link">
      <div class="carre bleu" data-depth="0.2"></div>
      <div class="carre jaune" data-depth="0.4"></div>
      <div class="carre rouge" data-depth="0.6"><img class="logo" src="https://www.1plus2.fr/images/logo.png"></div>
    </nuxt-link>
</template>

<script>
export default {
  components: {
  },
  mounted: () => { 
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene, {
      relativeInput: true,
      hoverOnly: true
    });
  
  },
  methods: {
  }
}
</script>
