import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            authUser: null,
        }
    }
});

export default store;