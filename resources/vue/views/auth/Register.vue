<template>
    <div>
        <div class="mx-4 my-2">
            <h1 class="text-lg text-center">Registro</h1>
            <form id="register_form" @submit.prevent="onsubmit">
                <div class="">
                    <label-component>Nombre</label-component>
                    <input-component
                        customClass='jsValidator'
                        name='name'
                        placeholder="escribe tu nombre"
                        validators="required length"
                        min_length="5"
                        max_length="100"
                        v-model="name"
                     ></input-component>
                </div>
                <div class="">
                    <label-component>Correo</label-component>
                    <input-component 
                        customClass='jsValidator'
                        type="email"
                        name='email'
                        placeholder="escribe tu correo"
                        validators="required email"
                        v-model="email"
                    ></input-component>
                </div>
                <div class="">
                    <label-component>contraseña</label-component>
                    <input-component 
                        customClass='jsValidator'
                        type="password"
                        name='password'
                        placeholder="escribe tu nombre"
                        validators="required"
                        v-model="password"
                    ></input-component>   
                </div>
                <div class="">
                    <label-component>Confirmar contraseña</label-component>
                    <input-component 
                        type="password"
                        customClass='jsValidator'
                        name='password_fonfimation'
                        placeholder="escribe tu nombre"
                        validators="required password_confirmation"
                        v-model="password_fonfimation"
                    ></input-component>     
                </div>
                <div>
                    <button-component type="submit" class="mt-2">Entrar</button-component>
                </div>
            </form>
        </div>
    </div>    
</template>

<script>

import InputComponent from '../../components/forms/ImputComponent.vue'
import LabelComponent from '../../components/forms/LabelComponent.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
export default {
    components:{        
        InputComponent,
        LabelComponent,
        ButtonComponent       
    },
    data(){
        return {
            name: '',
            email:'',
            password: '',
            password_fonfimation:'',
            // terms: false,
            registerFormValidator: undefined,
            
        }
    },
    emits:{
        sucesseSutmit(payload){
            return payload;
        }
    },
    mounted(){
        this.registerFormValidator = new JSValidator('register_form').init();
    },
    methods:{
        onsubmit(){
            let form = document.getElementById('register_form');
            let formData = new FormData();
            formData.append('name', this.name);
            formData.append('email', this.email);
            formData.append('password', this.password);
            formData.append('password_confirmation', this.password_fonfimation);
            console.log(formData.get('name'));
            console.log(formData.get('email'));
            console.log(formData.get('password'));
            console.log(formData.get('password_fonfimation'));
            console.log(formData);
            if (this.registerFormValidator.status) {
                
                axios.post('/register',formData)
                .then(res => {
                    this.$emit('sucesseSutmit', {
                        msg: 'Cuentra creada',
                        res: res
                    });
                    //console.log(res)
                })
                .catch(err => {
                    console.error(err); 
                })
            } else {
                console.log('campo vacio');
            }
            
        }
    }
}
</script>