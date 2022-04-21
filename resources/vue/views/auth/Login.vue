<template>
    <div>
        <div class="mx-4 my-2">
            <h1 class="text-lg text-center">login</h1>
            
            <form @submit.prevent="logIn()">
                {{email}}
                {{password}}
                <div>
                    <label-component>Correo</label-component>
                    <input-component
                    icon="fa-solid fa-envelope"
                    name="email"
                    placeholder="ingrese email"
                    v-model="email" />
                </div>
                <div>
                    <label-component>contraseña</label-component>
                    <input-component 
                    type="password"
                    icon="fa-solid fa-lock"
                    name="email"
                    placeholder="ingrese contraseña"
                    v-model="password" />    
                </div>
                <div>
                    <button-component type="submit">Entrar</button-component>
                </div>
            </form>
        </div>
    </div>    
</template>

<script>

import InputComponent from '../../components/forms/ImputComponent.vue'
import LabelComponent from '../../components/Label.vue'
import ButtonComponent from '../../components/Button.vue'
export default {
    components:{        
        InputComponent,
        LabelComponent,
        ButtonComponent       
    },
    data(){
        return {
            email: "",
            password:''
        }
    },
    methods:{
        logIn(){
            console.log('envio formulario de logueo');
        }
    }
}
</script>