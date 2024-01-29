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
        addTask(){
            this.task.unshift(this.newTask)
        }   // push aggiunge in fondo posto una nuova task


    }
}).mount('#app')
