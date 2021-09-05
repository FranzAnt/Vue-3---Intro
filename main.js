// Usando el API Options
const options = {
    // esta funcion siempre retorna un objeto
	data: () => ({
      name: "Mi primera aplicación con Vue 3"
    }),
    // cuando se crea objeto,  solo se ejecuta un vez
    created(){

    },
    // cuando se monta en el navegador,  solo se ejecuta un vez
    mounted(){

    },
    methods: {
        foo(){

        }
    },
    computed:{

    },
    watch:{

    }
}

const app = Vue.createApp(options)