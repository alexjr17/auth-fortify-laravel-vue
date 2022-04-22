<template>
    <a href="#" @click="logout" class="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
        <slot />
    </a>
</template>

<script>
export default {
    emits: {
        logout(payload){
            return payload;
        }
    },
    methods: {
        logout(){
            axios.post('/logout').then( res => {
                this.$emit('logout', {
                    msg: 'sesion cerrada!',
                    res: res
                });
            }).catch( err => {
                console.error('error inesperado');
            });
        }
    }
}
</script>