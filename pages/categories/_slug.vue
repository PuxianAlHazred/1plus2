<template>
  <main class="page-actu">
    <div class="grid">
      <article class="article" v-for="a in actualites" >
          <nuxt-link class="article-padding" :to="a._path+'/'">
              <div class="thumb">
                  <img class="cover" :src="a.thumbnail">
              </div>
              <div class="content" :data-date="a.date">
                  <p class="description-article"><b class="category" v-for="c in a.catt">{{ c.cat }}</b></p>
                  <h3 class="title-article">{{ a.title }}</h3>
                  <p class="description">{{ a.intro }}</p>
              </div>
          </nuxt-link>
       </article>
    </div>
  </main>
</template>
<script>
  import $ from 'jquery'
  let Isotope;
  if (process.browser) { Isotope = require("isotope-layout"); }  
  import VueLazyload from 'vue-lazyload'
  // export
export default {
    layout: 'default',
    components: { VueLazyload },
    transition: { name: 'intro', mode: 'out-in' },
    head() {
      return { 
        title: 'ACTUALITÉS | 1+2 – Photographie & Sciences',
        meta: [
          { hid: 'description', name: 'description', content: `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:title', 'content': `ACTUALITÉS | 1+2 – Photographie & Sciences`, 'vmid': 'og:titre' },
          { 'property': 'og:description', 'content': `1+2 est un programme de création artistique à vocation européenne, ancré à Toulouse, associant la photographie et les sciences.` },
          { 'property': 'og:image', 'content': ``, 'vmid': 'og:image' }
        ]
      }
    },
    data() {
      const context = require.context('~/content/actualites/page/', false, /\.json$/);
      const actualites = context.keys().map(key => ({
        ...context(key),
        _path: `/actualites/${key.replace('.json', '').replace('./', '')}`
      }));
      return {
        actualites,
        grid: null
      };
    },
  mounted() {
      $("body").removeClass('red-page yellow-page blue-page');
      this.titre();
      this.ea();
      this.annee();
      
  },
  methods: {
     titre(){
      var modif = '<a href="/actualites/" >ACTUALITÉS</a>';
      $('.page-title').html( modif );           
     },
     annee(){
        $('.date').each( function( ) {
           var modif = $(this).html().substr(0, 4);
           $(this).html(modif);
        });        
     },
     ea() {
     
        var href = location.href;
        var filtercat = href.match(/([^\/]*)\/*$/)[1];
     
        $('.article').each( function( ) {
             var cat = $(this).find('.category');
             cat.each( function( ) {
                 var select = $(this).html();
                 $(this).parent().parent().parent().parent('.article').addClass(select);
             });
        });
        
        var grid = new Isotope(".grid", {
          itemSelector: ".article",
          getSortData : {
           date : function ($elem) {
            return $($elem).find('.content').attr('data-date');
           }
          },
          filter: '.'+filtercat ,
          sortBy : 'date',
          sortAscending : false
        });
        $(grid.filteredItems[0].element).addClass('big-article');
        setTimeout(function(){grid.layout(); }, 100);
        

        
     }
  }
}
</script>
