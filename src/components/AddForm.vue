<template> 

 <b-form inline>

    <b-input-group prepend="New task" class="mb-2 mr-sm-2 mb-sm-0">
      <b-input id="inline-form-input-username" placeholder="Task to Add"
      type="text" 
      v-model="my_imput">
      </b-input>
    </b-input-group>
    

    <b-button @click="addEvent">Add</b-button>
  </b-form>
</template> 

<script> 
import axios from 'axios'
export default {
    name: 'AddForm', 
    data() {
        return {
            my_imput: '',
            id: 0
        }
    },
    methods: {
        addEvent(){
            axios.post(`http://localhost:3000/todo`, {
                name: this.my_imput, 
                id: Date.now(), 
                createdAt: String(new Date()), 
                todo: true
            }) 
            .then(response => {
                console.log(response); 
            }) 
            .catch((error) => {
                console.log(error);
            })
            this.$parent.$emit('addtodo', this.my_imput) 
            this.my_imput='';
            
        }
    },
    mounted(){

        
    }
}
</script>