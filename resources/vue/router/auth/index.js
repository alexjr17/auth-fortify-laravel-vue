export default [
    {
        path: '/reset-password/:token',
        name: 'ResetPassword',
        component: () => import(/* webpackChuckName: "ResetPassword"*/'../../views/auth/ResetPassword.vue'),
        meta:{
            title: 'restablecer contraseña'
        }
    }
];