<template>
    <div>
        <div class="mx-4 my-2">
            <h1 class="text-lg text-center">login</h1>
            
            <form id="form_login" @submit.prevent="onSubmit()" >
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
    emits:{
        sucesseSubmit(payload){
            return payload;
        }
    },
    data(){
        return {
            email: "",
            password:'',
            jsValidator: undefined
        }
    },
    mounted () {
        this.jsValidator = new JSValidator('form_login').init();
    },
    methods:{
        onSubmit(){
            let formData = new FormData();
            formData.append('email', this.email);
            formData.append('password', this.password);
            if (this.jsValidator.status) {
                axios.post('/login',formData)
                .then(res => {
                    this.$emit('sucesseSubmit', {
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
        }
    }
}
</script>