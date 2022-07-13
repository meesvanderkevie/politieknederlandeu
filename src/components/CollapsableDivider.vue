<template>
    <div id="divider">
        <div id="left">
            <slot name="left" />
        </div>
        <div id="right">
            <slot name="right" />
        </div>
    </div>
</template>

<style scoped>
#divider {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

#right, #left {
    padding: 10px;
}

/* On mobile */
@media screen and (max-width: 600px) {
    #divider {
        grid-template-columns: 1fr;
    }
}
</style>