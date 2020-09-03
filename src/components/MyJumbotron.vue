<template>
  
    <div id="myjumb">
        <b-jumbotron>
        <template v-slot:header>Todo List</template>

        <template v-slot:lead>
            New Features we will have to done for this project
        </template>

        <hr class="my-4">
        
        <p>
            Easy to use, we created this web app just for you !
        </p> 
        <Sentence :list="list"/>  

        <hr class="my-4"> 

      <ListTodo  :list="list" @check="newEvent"/> 
      <AddForm />
        

   
        </b-jumbotron>
    </div>
  
</template> 

<script> 
import ListTodo from './ListTodo.vue' 
import AddForm from './AddForm.vue' 
import Sentence from './Sentence.vue'
export default {
  name: 'MyJumbotron', 
  components: {
      ListTodo, 
      AddForm, 
      Sentence
  },
  props: ['list'],
  methods: {
      newEvent(id) {
          
          this.$emit('fait', id)
      }

  } 



  }
    
  

</script> 

<style>
#myjumb {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>