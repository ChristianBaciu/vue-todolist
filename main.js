const{createApp}= Vue
createApp({
    data(){
        return{
            newTask: {
                text: '',
                done: false,
            },
            tasks:[
                {
                    text: 'fare ecc...',
                    done: true,
                },
                {
                    text: 'fare ecc...',
                    done: false,
                },
                {
                    text: 'fare ecc...',
                    done: false,
                },

            ]

        }
    },
    methods:{

        addTask(){

            const task = {
                ...this.newTask
            }
            console.log(task)

            // unshift aggiunge al primo posto una nuova task
            // push aggiunge in fondo posto una nuova task
            if(task.text.length > 4){
                this.tasks.unshift(task)
            }
            // dopo aver cliccato invio, elimina quello che abbiamo scritto
            this.newTask.text = ''

        },

        // per togliere una task
        removeTask(index){
            // splice rimuove una task, n.2 toglie due task
            this.tasks.splice(index, 1)
        },
        
        // per cambiare true o false
        checkText(index){
            this.tasks[index].done = !this.tasks[index].done 
        },

    }
}).mount('#app')
