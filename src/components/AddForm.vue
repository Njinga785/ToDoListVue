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
export default {
    name: 'AddForm', 
    data() {
        return {
            my_imput: ''
        }
    },
    methods: {
        addEvent(){
            this.$parent.$emit('addtodo', this.my_imput) 
            this.my_imput='';
            
        }
    }
}
</script>