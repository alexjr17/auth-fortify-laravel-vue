<template>
  <div>
    <div class="h-full">
      <div class="mx-36 my-14 p-6 bg-gray-300">
        <form id="form_reset_password" @submit.prevent="onSubmit">
            <h1>Recuperacion de cuenta</h1>
          <div>
            <label-component>Email</label-component>
            <input-component
              customClass="jsValidator"
              name="email"
              validators="required email"
              v-model="email"
            ></input-component>
          </div>
          <div>
            <label-component>Nueva contraseña</label-component>
            <input-component
              customClass="jsValidator"
              type="password"
              name="password"
              validators="required length"
              min_length="8"
              max_length="20"
              v-model="password"
            ></input-component>
          </div>
          <div>
            <label-component>Confirmar Nueva contraseña</label-component>
            <input-component
              customClass="jsValidator"
              type="password"
              name="password"
              validators="required password_confirmation"
              v-model="password_confirmation"
            ></input-component>
          </div>
          <div>
              <button-component
              type="submit">Recuperar</button-component>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import InputComponent from "../components/forms/ImputComponent.vue";
import ButtonComponent from "../components/ButtonComponent.vue";
import LabelComponent from "../components/forms/LabelComponent.vue";
export default {
  components: {
    InputComponent,
    LabelComponent,
    ButtonComponent,
  },
  props:{
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  emits: {
    submit(payload) {
      return payload
    }
  },
  mounted() {
    this.jsValidator = new JSValidator("form_reset_password").init();
  },
  data() {
    return {
      jsValidator: undefined,
      password:'',
      password_confirmation: ''
    };
  },
  methods: {
    onSubmit() {
      //console.log("formulario reset password");

      let formData = new FormData();
      formData.append('token', this.token);
      formData.append('email', this.email);
      formData.append('password', this.password);
      formData.append('password_confirmation', this.password_confirmation);

      if (this.jsValidator.status) {
        
        axios.post('/reset-password', formData)
          .then(res => {
            this.$emit('submit', {
              smg: 'contraseña restablecida',
              res: res
            });
          }).catch( err => {
            console.log('Error inesperado');
          })

      } else {
        console.error('Error de validacion');
      }

    },
  },
};
</script>