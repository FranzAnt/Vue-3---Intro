// Usando el API Options
const options = {
    // esta funcion siempre retorna un objeto
	data: () => ({
      name: "Mi primera aplicación con Vue 3",
      counter: 0,
    }),
    // cuando se crea objeto,  solo se ejecuta un vez
    created(){
        console.log("Se creado mi aplicación")
    },
    // cuando se monta en el navegador,  solo se ejecuta un vez
    mounted(){
        console.log("Se montado mi aplicación")
        setInterval(() => {
            this.counter++
        }, 1000);
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