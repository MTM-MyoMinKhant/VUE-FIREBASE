<template>
  <h1>{{title}}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">ClickMe</button>
  <p>Welcome</p>
  <button @click.alt="toggleModal">Click here to open Modal (alt + click)</button>
  <button @click.ctrl="toggleModal2">Click here to open Modal2 (ctrl + click)</button>

  <!-- normal prop can only send string you need to bind to send other types of data -->
  <!-- slots are used to specify send templates -->
  <teleport to="#models" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>{{header}}</h1>
      <p>{{ text }}</p>
    </Modal>
  </teleport>

  <teleport to="#models" v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
      <h1>{{header2}}</h1>
      <p>{{text2}}</p>
    </Modal>
  </teleport>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {Modal},
  data() {
    return {
      header: "Sign Up for the giveaway",
      text: "Grab Your ninja sway for half price",
      header2: "Sign Up for the newspaper",
      text2: "Subscribe for an update about our newspaper",
      title: "Hello World in Vue App :)",
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name)
      this.$refs.name.classList.add("active")
      this.$refs.name.focus()
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app , #models {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}

.modal .actions {
    text-align: center;
    margin: 30px 0 10px 0;
  }

  .modal .actions a{
    color: #333;
    padding: 8px;
    border: 1px solid #eee;
    border-radius: 4px;
    text-decoration: none;
    margin: 10px;
  }
</style>
