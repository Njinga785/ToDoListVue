<template> 
<li v-if="toto.todo === true"  @click="clickListener"><b-icon icon="check2-circle" ></b-icon> <slot></slot></li> 
 
<li class="souligne" v-else-if="toto.todo === false" @click="clickListener"><b-icon icon="check-circle-fill"></b-icon><slot></slot></li>
</template>
<script> 
export default {
    name: 'SingleTodo', 
    props:['toto'], 
    methods: {
        clickListener() { 
            
            this.$emit('toggle', this.toto.id)
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