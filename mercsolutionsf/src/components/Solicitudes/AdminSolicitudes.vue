<template>
    <div v-if="esRh || esAdministrador" >
        <h2 class="text-center">Administrador de solicitudes</h2>
        <app-panel></app-panel>
    </div>
    <div v-else>
        <h2 class="text-center">No tienes permisos para ver este contenido</h2>
    </div>
</template>

<script>
    import Panel from "./subcomponents/Panel.vue";
    export default {
        components:{
            appPanel:Panel,
        },

         computed: {
            logueado(){
                return this.$store.state.usuario;
            },

            esAdministrador(){
                return this.$store.state.usuario && this.$store.state.usuario.rol == 'ADMIN_ROL'
            },

            esRh(){
                return this.$store.state.usuario && this.$store.state.usuario.rol == 'RH_ROL'
            },

            esMedia(){
                return this.$store.state.usuario && this.$store.state.usuario.rol == 'MEDIA_ROL'
            }
        },

        created() {
            this.$store.dispatch("autoLogin")
        },

        methods: {
            
        },
    }
</script>
