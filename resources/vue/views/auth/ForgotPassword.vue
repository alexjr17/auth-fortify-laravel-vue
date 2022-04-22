<template>
    <div>
        <div class="mx-4 my-2">
            <h1 class="text-lg text-center">restablecer contraseña</h1>
            <form id="form_reset_password" @submit.prevent="resetPassword">
                <input-component
                customClass="jsValidator"
                validators="required email"
                name="email"
                v-model="email"
                 />

                <button-component
                type="submit"
                >Recuperar</button-component>
            </form>
        </div>        
    </div>
</template>

<script>
import InputComponent from '../../components/forms/ImputComponent.vue'
import ButtonComponent from '../../components/ButtonComponent.vue'
export default {
    components:{
        InputComponent,
        ButtonComponent
    },
    data(){
        return {
            email: '',
            jsValidator: undefined
        }
    },
    mounted(){
        this.jsValidator = new JSValidator('form_reset_password').init();
    },
    emits:{
        submit: (payload) => {
            return payload
        }
    },
    methods:{       
        
        resetPassword(){

            //Data Capturada
            let formData = new FormData();
            formData.append('email', this.email);

            if (this.jsValidator.status) {

                //Peticion axio de reset password
                axios.post('/forgot-password',formData)
                .then(res => {
                    console.log('correo enviado para recuperacion');
                    console.log(res)
                    this.$emit('submit', {
                        msg: 'Se envio correo de recuepacion de contraseña',
                        res: res
                    });
                })
                .catch(err => {
                    console.log('Correo no existe en nuestros registros') 
                    console.error(err);
                })

            } else {
                console.log('campos vacios');
            }
            

        }
    }
}
</script>