const{createApp}= Vue
createApp({
    data(){
        return{
            newTask: '',
            task: [
                'fare ecc...',
                'fare ecc...',
                'fare ecc...',
            ]
        }
    },
    created(){

    },
    methods:{
        // unshift aggiunge al primo posto una nuova task
        // push aggiunge in fondo posto una nuova task
        addTask(){
            // se non c'è nessuna parola non crea nessuna task
            if(this.newTask !== ''){
                this.task.unshift(this.newTask)
            }
            // scrive solo la prima task
            this.newTask = ''
        },

        removeTask(index){
            // splice rimuove una task, n.2 toglie due task
            this.task.splice(index, 1)
        },



        
    }
}).mount('#app')
