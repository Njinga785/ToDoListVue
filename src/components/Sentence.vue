<template> 
  <h4 v-if="percent === 0" class="red">It's time to start working you have {{list.length}} to do</h4>
  <h4 v-else-if="percent > 0 && percent <= 50" class="orange-dark">Continue that way and you will finish soon, {{ this.percent }} tasks to do</h4>
  <h4 v-else-if="percent > 50 && percent < 100" class="orange">Near to finish, still {{ percent }} to do</h4>
  <h4 v-else class="green">All it's done, great !</h4>
</template> 
<script>
export default {
    name: 'Sentence', 
    props: ['list'], 
    computed: {
    percent: function () {
      let nb_done = this.list.filter(elem => elem.todo === false).length;
      return ((nb_done / this.list.length) * 100);
    }
  }
}
</script> 
<style>
.red {
  color: red;
}
.orange-dark {
  color: darkorange;
}
.orange {
  color: orange;
}
.green {
  color: green;
}
</style>