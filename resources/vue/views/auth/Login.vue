<template>
    <div>
        <div class="mx-4 my-2">
            <h1>login</h1>
            <form @submit.prevent="logIn()">
                <div>
                    <label-component>Correo</label-component>
                    <input-component></input-component>
                </div>
                <div>
                    <label-component>contraseña</label-component>
                    <input-component></input-component>     
                </div>
                <div>
                    <button-component type="submit">Entrar</button-component>
                </div>
            </form>
        </div>
    </div>    
</template>

<script>

import InputComponent from '../../components/Input.vue'
import LabelComponent from '../../components/Label.vue'
import ButtonComponent from '../../components/Button.vue'
export default {
    components:{        
        InputComponent,
        LabelComponent,
        ButtonComponent       
    },
    methods:{
        logIn(){
            console.log('envio formulario de logueo');
        }
    }
}
</script>