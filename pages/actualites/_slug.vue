<template>
  <main class="page-article-actu">
      <div class="article-slug">
          <small class="date">{{ date }}</small>
          <h3 class="title-article">{{ title }}</h3>
          <div class="cover">
              <img :src="thumbnail" class="thumbnail">   
          </div>
          <p class="description-article">{{ soustitre }}</p>
          <div class="content">
              <vue-markdown>{{ description }}</vue-markdown>
          </div>
      </div>
      <div class="sidebar">
        <ui-categories/>
        <ui-articles/>
        <div class="fb-page" data-href="https://www.facebook.com/residence1plus2/" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/residence1plus2/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/residence1plus2/">Résidence 1+2</a></blockquote></div>      </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  import VueMarkdown from 'vue-markdown'
  import VueLazyload from 'vue-lazyload'
  import uiCategories from '~/components/widget/categories.vue'
  import uiArticles from '~/components/widget/derniers-articles.vue'
  export default {
    layout: 'default', 
    transition: { name: 'intro', mode: 'out-in' },
    components: { VueMarkdown, VueLazyload, uiCategories, uiArticles },
    async asyncData({ params }) {
      let page = await import('~/content/actualites/page/' + params.slug + '.json');
      return page;
    },
    head() {
      return {
        title: '1+2 – Photographie & Sciences | ' +this.title,
        meta: [
          { hid: 'description', name: 'description', content: `${this.descriptionseo}` },
          { 'property': 'og:title', 'content': `${this.title}`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `${this.descriptionseo}` },
          { 'property': 'og:image', 'content': `${this.thumbnail}`, 'vmid': 'og:image' }
        ]
      }
    },
    mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
      document.querySelectorAll('.accordeon').forEach(el => el.addEventListener('click', e => {
        e.currentTarget.classList.toggle('accordeon--open');
      }));
      $('.sidebar .accordeon:nth-child(2)').addClass('accordeon--open');

    },
    methods: {
      titre(){
          var modif = '<a href="/actualites/" >ACTUALITÉS</a>';
          $('.page-title').html( modif );           
      }
    }
  };
</script>
