<template>
  <div v-for="job in  jobs" :key="job.id"> 
     <router-link :to="{name : 'jobdetails' , params:{id:job.id}}">
      <h1> {{ job.title }} </h1> 
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobs:[
        {id:1,title:'html'},
        {id:2,title:'css'},
        {id:3,title:'java'},
      ]
    }
  }
}
</script>

<style>

</style>