<template>
  <img src="@/images/wallpaper.jpg" alt="" id="wallpaper">

  <div id="title">
    <h1>Politiek Nederland</h1>
  </div>
  
  <Restrictor :width="1000">
    <CollapsableDivider>
      <template #left>
        <div id="text">
          <h2>De Bibliotheek</h2>

          <p>
            In de bibliotheek van Politiek Nederland kan je over alles en nog wat lezen.
            Bijvoorbeeld over ideologieën, gebeurtenissen, partijen en nog veel meer.
            De bibliotheek is nog niet af, deze wordt momenteel gebouwd op deze website.
            In de discord is er al een kleine tijdelijke bibliotheek. Wil je bijdragen aan de bibliotheek?
            Stuur ItzJustMees#1984 een berichtje!
          </p>

          <h2>De Simulatie</h2>

          <p>
            In de discord server hebben wij ook een politieke simulatie, richt je eigen partij op, voer campagne en win de verkiezingen!
          </p>
        </div>
      </template>
      <template #right>
        <iframe class='discord-widget' src="https://discord.com/widget?id=988867113907273729&theme=dark" width="200" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
      </template>
    </CollapsableDivider>
  </Restrictor>
</template>

<script>
import CollapsableDivider from '../components/CollapsableDivider.vue'
import Restrictor from "../components/Restrictor.vue"

export default {
  components: {
    CollapsableDivider,
    Restrictor
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Gulzar&display=swap');

#wallpaper {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
}

h1 {
  font-family: 'Gulzar', serif;
  font-weight: bold;
  font-size: 3rem;
  height: 90px;
  margin: 0;
  color: white;
  background: rgba(0, 0, 0, 0.369420);
  display: inline-block;
  padding: 10px 40px;
  margin-top: -200px;
  position: relative;
  top: -150px;
}

#title {
  text-align: center;
  width: 100vw;
}

.img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 3rem;
}

.discord-widget {
  margin-top: 1rem;
  border-radius: 2rem;
  width: calc(100% - 20px);
  height: calc(100% - 80px);
  padding: 10px;
  margin-top: 40px;
}

@media screen and (max-width: 600px) {
  .img {
    width: 100%;
  }

  .discord-widget {
    width: 100%;
  }
}

h2 {
  font-family: 'Gulzar', serif;
  font-weight: bold;
  font-size: 2rem;
  height: 35px;
  color: #9f0000;
  text-align: left;
}

p {
  font-family: 'Gulzar', serif;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1cm;
  text-align: left;
  font-size: 20px;
  line-height: 25px;
}

#text {
  padding: 0 30px;
}

/* On mobile */
@media screen and (max-width: 600px) {
  .discord-widget {
    width: calc(100% - 20px);
    height: 400px;
  }

  h1 {
    top: -100px;
  }
}

</style>
