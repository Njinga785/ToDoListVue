<template> 

<li v-if="toto.todo === true"  @click="clickListener(toto.id, toto.todo)"><b-icon icon="check2-circle" ></b-icon> <slot></slot></li> 
 
<li class="souligne" v-else-if="toto.todo === false" @click="clickListener(toto.id, toto.todo)"><b-icon icon="check-circle-fill"></b-icon><slot></slot></li>

</template>

<script> 
import axios from 'axios'
 export default {
    name: 'SingleTodo', 
    props:['toto'],
    methods: {
        clickListener(id, todo) {
            //this.$emit('toggle', this.toto.id)
            axios.put(`http://localhost:3000/todo/${id}`, {todo: !todo})
             this.$emit('change')
            
        }
    }
    
}

</script> 

<style>
li {
    list-style: none;
} 

.souligne {
    text-decoration: line-through;
}

</style>