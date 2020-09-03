<template>
  <div id="app">
<MyJumbotron @addtodo="addToList" @fait="boubou" :list="list"/> c
</div>
</template>

<script> 
import MyJumbotron from './components/MyJumbotron.vue'
 //import HelloWorld from './components/HelloWorld.vue'
//import ListTodo from './components/ListTodo.vue'
export default {
  name: 'App',
  components: { 
     MyJumbotron, 
   
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
      }
  }
 
}
</script>


