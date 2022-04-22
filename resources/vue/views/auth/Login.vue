<template>
    <div>
        <div class="mx-4 my-2" v-show="showLogin">
            <h1 class="text-lg text-center">login</h1>
            
            <form id="form_login" @submit.prevent="onSubmit()">
                {{email}}
                {{password}}
                <div>
                    <label-component>Correo</label-component>
                    <input-component
                    customClass="jsValidator"
                    icon="fa-solid fa-envelope"
                    name="email"
                    placeholder="ingrese email"
                    validators="required email"
                    v-model="email" />
                </div>
                <div>
                    <label-component>contraseña</label-component>
                    <input-component
                    customClass="jsValidator"
                    type="password"
                    icon="fa-solid fa-lock"
                    name="email"
                    placeholder="ingrese contraseña"
                    validators="required length"
                    min_length="8"
                    max_length="20"
                    v-model="password" />    
                </div>
                <div class="flex justify-between">
                    <button-component type="submit" class="mt-2">Entrar</button-component>
                    <link-a-component class="text-sm" @click="showforgetPassword">
                        ¿Olvido su contraseña?
                    </link-a-component>
                </div>
            </form>
        </div>
        <div class="mx-4 my-2">
            <forgot-password
            v-show="!showLogin"
            @submit="formSubmit"
            ></forgot-password>
        </div>
    </div>    
</template>

<script>

import InputComponent from '../../components/forms/ImputComponent.vue'
import LabelComponent from '../../components/forms/LabelComponent.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
import LinkAComponent from '../../components/LinkAComponent.vue'
import ForgotPassword from '../auth/ForgotPassword.vue'
export default {
    components:{        
        InputComponent,
        LabelComponent,
        ButtonComponent,
        LinkAComponent,
        ForgotPassword   
    },
    emits:{
        submit(payload){
            return payload;
        }
    },
    data(){
        return {
            email: "",
            password:'',
            jsValidator: undefined,
            show: true
        }
    },
    mounted () {
        this.jsValidator = new JSValidator('form_login').init();
    },
    methods:{
        formSubmit(payload){
            store.dispatch('setAuthUser');
            console.log(payload.msg);
        },
        onSubmit(){
            let formData = new FormData();
            formData.append('email', this.email);
            formData.append('password', this.password);
            if (this.jsValidator.status) {
                axios.post('/login',formData)
                .then(res => {
                    this.$emit('submit', {
                        msg: 'onsession',
                        res: res
                    });
                    console.log(res)
                })
                .catch(err => {
                    console.error(err); 
                })
            } else {
                
            }
        },
        showforgetPassword(){
            this.show = !this.show;
        }
    },
    computed: {
        showLogin() {
            return this.show ? true : false;
        }
    }
}
</script>