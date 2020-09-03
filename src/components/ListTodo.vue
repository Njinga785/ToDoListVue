<template>
   <ul> 
   
   <SingleTodo @toggle="addToUl" 
   v-for="element in list" v-bind:key="element.id"
    v-bind:toto="element">{{element.name}}</SingleTodo>
   
   </ul>


</template> 
<script>
import SingleTodo from './SingleTodo.vue' 
export default {
    name: 'LisTodo', 
    components: {
        SingleTodo
    }, 
   
      props:['list'], 
    methods: {
       addToUl(id) {
           
           this.$emit('check', id)
       }
    }
}
</script>