<template>
    <div>
        <div>
            <h1>Registro</h1>
            <form @submit.prevent="logUp()">
                <div>
                    <label-component>Nombre</label-component>
                    <input-component></input-component>
                </div>
                <div>
                    <label-component>Correo</label-component>
                    <input-component></input-component>
                </div>
                <div>
                    <label-component>contraseña</label-component>
                    <input-component></input-component>     
                </div>
                <div>
                    <label-component>Confirmar contraseña</label-component>
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
        logUp(){
            console.log('envio formulario de registro');
        }
    }
}
</script>