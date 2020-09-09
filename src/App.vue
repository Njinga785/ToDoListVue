<template>
  <div id="app">  
  <MyHeader></MyHeader>
  
    <MyJumbotron @addtodo="addToList" @fait="boubou" :list="list"/> 

  </div>
</template>

<script> 
import MyJumbotron from './components/MyJumbotron.vue'
import MyHeader from './components/MyHeader.vue'
 //import HelloWorld from './components/HelloWorld.vue'
//import ListTodo from './components/ListTodo.vue'
export default {
  name: 'App',
  components: { 
     MyJumbotron, 
     MyHeader
   
    // HelloWorld
  },
  data(){
    return {
      list: [
        {id: 0, name: "Ecrire le sujet", todo: true}, 
        {id: 1, name: "Faire le sujet", todo: true}, 
        {id: 2, name: "Vendre le sujet", todo: true}, 
        {id: 3, name: "Partir en vacances", todo: true},
      ]
    }
  }, 
  methods: {
      boubou(id) { 
        console.log(this.list[id].name)
        if(this.list[id].todo === false) {
          this.list[id].todo = true
        }else if (this.list[id].todo === true){ 
          this.list[id].todo = false
          
        }

      }, 
      addToList(task) {
        let my_todo = {id: this.list.length, name: task, todo: true} 
        this.list.push(my_todo)
        console.log(task);
      }, 
      change() {
           
            axios.get(`http://localhost:3000/todo`) 
           .then(response =>{
               this.list = response.data 
               if(this.$props.whatToDisplay == 'done') {
                 this.list = response.data.filter((element) => !element.todo)
             }else if (this.$props.whatToDisplay == 'todo') {
                 this.list = response.data.filter((element) => element.todo)
             } 
             console.log(this.list)
             
           }) 
      }
  }
  
 
}
</script>


