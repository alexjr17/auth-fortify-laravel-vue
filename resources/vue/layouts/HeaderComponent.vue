<template>
    <div class="haeder_wrapper">
        <nav class="h-auto bg-blue-500">
            <ul>
                <li>home</li>
                <li>nosotros</li>
            </ul>
            <a-link :as="'a'" @click="loginModal()" v-if="!is_auth">login</a-link>
            <a-link :as="'a'" @click="registerModal()" v-if="!is_auth">registrar</a-link>
            <a-link :as="'a'">
                <router-link to="/reset-password/hih">Go to About</router-link>
            </a-link>

        </nav>

        <modal :show="showLogin" :maxWidth="'md'">
            <div class="static">
                <div>
                    <form-login></form-login>
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
                    @sucesseSutmit="resSubmit"></form-register>
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

export default {
    components: {
        Modal,
        FormLogin,
        FormRegister,
        ALink,
        ButtonComponent
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
        resSubmit(payload){
            store.dispatch('setAuthUser', payload);
            this.registerModal();
        },
        loginModal(){
            this.loginAuth = !this.loginAuth;
        },
        registerModal(){
            this.registerAuth = !this.registerAuth;
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