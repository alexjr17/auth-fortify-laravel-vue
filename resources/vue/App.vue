<template>
    <div id="app_wrapper">
        <header-component></header-component>
        <main-component></main-component>
        <footer-component></footer-component>
    </div>
</template>

<script>
import HeaderComponent from './layouts/HeaderComponent.vue'
import MainComponent from './layouts/MainComponent.vue'
import FooterComponent from './layouts/FooterComponent.vue'
export default {
    components:{
        HeaderComponent,
        MainComponent,
        FooterComponent
    }
}
</script>