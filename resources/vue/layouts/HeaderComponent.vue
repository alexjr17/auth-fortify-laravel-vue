<template>
    <div class="haeder_wrapper">
        <nav class="h-auto bg-blue-500">
            <!-- <ul>
                <li>home</li>
                <li>nosotros</li>
            </ul> -->
            <a-link :as="'a'" @click="loginModal()" v-if="!is_auth">login</a-link>
            <a-link :as="'a'" @click="registerModal()" v-if="!is_auth">registrar</a-link>
            <logout-component v-if="is_auth"
                @logout="logout">Logout</logout-component>

        </nav>

        <modal :show="showLogin" :maxWidth="'md'">
            <div class="static">
                <div>
                    <form-login
                    @submit="formSubmit"></form-login>
                </div>
                <div class="absolute top-0 right-2">
                    <a class="text-lg text-red-600" @click="loginModal()">X</a>
                </div>
            </div>
        </modal>

        <modal :show="showRegister" :maxWidth="'md'">
            <div class="static">
                <div>
                    <form-register
                    @submit="formSubmit"></form-register>
                </div>
                <div class="absolute top-0 right-2">
                    <a class="text-lg text-red-600" @click="registerModal()">X</a>
                </div>
            </div>
        </modal>        
    </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import ALink from '../components/DropdownLink.vue'
import FormLogin from '../views/auth/Login.vue'
import FormRegister from '../views/auth/Register.vue'
import ButtonComponent from '../components/Button.vue'
import LogoutComponent from '../components/LogoutComponent.vue'

export default {
    components: {
        Modal,
        FormLogin,
        FormRegister,
        ALink,
        ButtonComponent,
        LogoutComponent
    },
    props:{
        is_auth: {
            type: Boolean,
            required: true
        }
    },
    data(){
        return {
            loginAuth: false,
            registerAuth: false,
        }
    },
    methods:{
        formSubmit(payload){
            store.dispatch('setAuthUser');
            if (this.showLogin) {
                this.loginModal();
            }
            if (this.showRegister) {
                this.registerModal();
            }
        },
        loginModal(){
            this.loginAuth = !this.loginAuth;
        },
        registerModal(){
            this.registerAuth = !this.registerAuth;
        }, 
        logout(payload){
            store.commit('auth', null);            
            console.log(payload);
            window.location = '//' + location.host;
        }
    },
    computed:{
        showLogin(){
            return this.loginAuth;
        },
        showRegister(){
            return this.registerAuth;
        }
    }
}
</script>