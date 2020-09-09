<template>
   <ul> 
   
   <SingleTodo @toggle="addToUl" 
   v-for="element in list" v-bind:key="element.id"
    v-bind:toto="element" @change="change">{{element.name}}</SingleTodo>
   
   </ul>


</template> 
<script>
import SingleTodo from './SingleTodo.vue' 
import axios from 'axios' 
import store from './store'
export default {
    name: 'LisTodo', 
    components: {
        SingleTodo
        
    }, 
    store: store,
    props: {
        whatToDisplay: String,
    },
    data() {
        return {
            list: []
        }
    },
    mounted() {
        this.change()
    }, 
    methods: {
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