<template>
    <div class="nav">
        <RouterLink to="/">
            <a>Home</a>
        </RouterLink>
        <RouterLink to="/about">
            <a>Nieuws</a>
        </RouterLink>
        <RouterLink to="/bibiotheek">
            <a>Bibiotheek</a>
        </RouterLink>
        <RouterLink to="/news">
            <a>Over</a>
        </RouterLink>

        <RouterView/>
    </div>
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

    a:hover {
        color: #8d0000;
        text-decoration: underline;
        font-size: 1.7rem;
    }
</style>