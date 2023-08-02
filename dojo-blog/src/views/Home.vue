<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update Ninja One</button><br><br><hr>

    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update Ninja Two</button><br><br><hr>
    <input type="search" v-model="search">
    <p>Search for - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
    <!-- <p ref="p">My name is {{name}} and age is {{age}}</p>
    <button @click="handleClick">click Me</button>
    <button @click="age++">add +1 to age</button>
    <input type="text" v-model="name"> -->
  </div>
</template>

<script>
// between ref and reactive ref is better because is can changes it value when clicked
import { ref , reactive, computed, watch, watchEffect } from 'vue'


export default {
  name: 'Home',
  setup() {
    const search = ref('')  
    const names = ref(['luffy' , 'zoro' , 'sanji' , 'nami' , 'ussop' , 'chopper' , 'franky' , 'brook' , 'jinbe']) 
    const ninjaOne = ref({name:'mario' , age:30})
    const ninjaTwo = reactive({name:'luigi' , age:35})
    // if you want to know how to stop watch the net ninja vue.js playlist part10
    watch(search , () => {
      console.log('watch function ran')
    })
    watchEffect(() => {
      console.log('watchEffect function ran' , search.value)
    })
    const updateNinjaOne = () => {
      ninjaOne.value.age = 40
    }
    const updateNinjaTwo = () => {
      ninjaTwo.age = 45
    }
    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })
    return{ninjaOne , updateNinjaOne , ninjaTwo , updateNinjaTwo , search , names , matchingNames}
  }
  // setup() {
  //   console.log(this)

  //   const p = ref(null)
  //   // console.log(p , p.value)

  //   // these are none reactive so i need to use ref to make them reactive
  //   let name = ref('mario')
  //   let age = ref(30)
  //   const handleClick = () => {
  //     console.log(p , p.value)
  //     p.value.classList.add('test')
  //     p.value.textContent = "Hello ninjs"
  //     name.value = "luigi"
  //     age.value = 35
  //   }

  //   return{name , age: age , handleClick , p}
  // }
}
</script>
