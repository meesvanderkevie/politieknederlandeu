<template>
    <div class="header">
        <img src="@/images/pnl.jpg" alt="PNL logo" id="header-icon">

        <div id="nav">
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
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
#header-icon {
    height: 50px;
    justify-self: left;
    position: relative;
    top: 5px;
}

.header {
    display: grid;
    grid-template-columns: 50px auto;
    padding: 10px;
    
    gap: 2rem;
    background: #780001;
    box-shadow: 0 5px 5px rgba(1, 1, 1, 0.5);
}

.header #nav {
    display: flex;
    justify-content: left;
    align-items: center;
}

a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    font-family: 'Gulzar', serif;
    margin-right: 12px;
}

a:hover {
    text-decoration: underline;
}

/* On mobile */
@media screen and (max-width: 600px) {
    .header {
        grid-template-columns: auto;
        text-align: center;
        display: block;
    }

    a {
        font-size: 20px;
        display: block;
        margin-right: 0;
    }

    #header-icon {
        display: inline-block;
        width: 100px;
        height: 100px;
    }
    
    .header #nav {
        display: block;
    }
    
}
</style>