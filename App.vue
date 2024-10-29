
<template>
   <h1>{{title}}</h1>
   <p>welcomm..</p>

   <teleport to = ".modal" v-if = "showModal">  

    <Modal @close='toggleClick'>
      <h1>Welcome</h1>
      <p>NEt ninja</p>
      <template v-slot:links>
        <a href='#' >click here </a>
        <a href='#' >sign up</a>
      </template>
    </Modal>
 </teleport>
 
 <button @click="toggleClick">CLick me </button>

 <div v-if = "showModalTwo">  
    <Modal @close='toggleClickTwo'>
      <h1>GO AHEAD</h1>
      <p>apply here</p>
      <template v-slot:links>
        <a href='#' >NEWS </a>
        <a href='#' >Contact</a>
      </template>
    </Modal>
 </div>
 <button @click="toggleClickTwo">CLick me 2</button>
</template>

<script>
import Modal from './components/modal.vue'

export default {
  name : 'app',
  components :{Modal},
  data(){
    return{ 
      title : 'hellow vue',
      header : "sigup for money" ,
      showModal :false,
      showModalTwo :false
    }
  },
  methods :{
    toggleClick(){
       this.showModal = !this.showModal
    },
    toggleClickTwo(){
       this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
    h1{
      color : red;  
      display: flex; 
      justify-content: center;
       
    }
</style>
