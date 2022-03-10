/**
 *  1. Identificar el contenedor que va a usar VUE
 *  2. Crear la app de vue en el contenedor del paso 1
 *  3. Crear la estructura del framework Vue
 */

const appVue = {
    // Controlar los componentes del DOM
    data(){
        return{
            // Simula el document.getElementById("correo").value
            // El estado
            lblAlerta:"",
            usuario:{
                // Es opcional inicializar el atributo
                correo:null
            }
        }
    },
    // Métodos o funciones que voy a utilizar en la aplicación
    methods:{
        obtenerValoresFormulario(){
            console.log(this.usuario);
            this.usuario = {}
        }
    }
}

Vue.createApp(appVue).mount('#app-vue')