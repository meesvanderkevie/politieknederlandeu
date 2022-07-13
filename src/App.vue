<template>
  <div class="nav">
    <RouterLink to="/">
      <a>Home</a>
    </RouterLink>
    <RouterLink to="/nieuws">
      <a>Nieuws</a>
    </RouterLink>
   <RouterLink to="/bibliotheek">
      <a>Bibliotheek</a>
   </RouterLink>
   <RouterLink to="/over">
      <a>Over</a>
    </RouterLink>

    <!--
    <RouterLink to="/aanmelden">
    <a><img class="icon" src="./images/profile.png"></a>
    </RouterLink>
    -->
    
    </div>

    <RouterView/>
</template>
<script>
export default {
    
}
</script>
<style>
    .nav {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      margin-top: 1rem;
      border: 3px solid #590015;
      border-radius: 3rem;
    }

    a {
      text-decoration: none;
      color: #940000;
      font-weight: bold;
      font-size: 1.5rem;
      font-family: 'Gulzar', serif;
      transition: all 0.5s ease-in-out;
    }

    .icon {
      width: 2rem;
      margin-top: 1.5rem;
      height: 2rem;
    }

    a:hover {
      color: #8d0000;
      text-decoration: underline;
      font-size: 1.7rem;
    }
</style>