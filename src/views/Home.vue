<script>


export default {
  components: {
  }
}
</script>

<template>
    
  <h1>Politiek Nederland</h1>

  <img src="../images/pnlbanner.png" class="img" />

  <iframe class='discord-widget' src="https://discord.com/widget?id=988867113907273729&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

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
</template>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Gulzar&display=swap');

  #app {
    text-align: center;
  }

  h1 {
    font-family: 'Gulzar', serif;
    font-weight: bold;
    font-size: 3rem;
    color: #590015;
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
    width: 30em;
    height: 30em;
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
    color: #9f0000;
  }

  p {
    font-family: 'Gulzar', serif;
    font-weight: 500;
    font-size: 1.5rem;
    line-height: 1cm;
  }
</style>
