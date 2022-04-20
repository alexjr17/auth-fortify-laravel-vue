<template>
    <div id="app_wrapper">
        <header-component
        :is_auth="isAuth"
        ></header-component>
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
    },
    beforeCreate: function(){
        store.dispatch('setAuthUser');
    },
    computed:{
        isAuth: function(){
            return (state.authUser) ? true : false;
        }
    }
}
</script>