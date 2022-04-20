import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            authUser: null,
        }
    },
    mutations:{
        auth(state, user){
            state.authUser = user
        }
    },
    actions:{
        setAuthUser(){
            axios.get('/sanctum/csrf-cookie').then(res => {                
                axios.get('/api/get_auth_user')
                .then(res => {

                    if (res.data.validation) {
                        
                        this.commit('auth', res.data.user);

                    } else {
                        
                        this.commit('auth', null);

                    }
                    console.log(res.data);
                })
                .catch(err => {
                    this.commit('auth', null);
                    console.log(err);
                })

            }).catch( err => {
                console.log(err);
            });
        }
    }
});

export default store;