<template>
  <div>
    <reset-password-form
    :email="email"
    :token="token"
    @submit="sutmitForm"
    ></reset-password-form>
  </div>
</template>
<script>
import ResetPasswordForm from "../../forms/ResetPasswordForm.vue";

export default {
  components: {
    ResetPasswordForm,
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$route.params);
    console.log(this.$route.query);
  },
  computed: {
    email() {
      return this.$route.query.email;
    },
    token() {
      return this.$route.params.token;
    },
  },
  methods:{
      sutmitForm(payload){
        store.dispatch('setAuthUser');
        console.log(payload);
      }
  }
};
</script>