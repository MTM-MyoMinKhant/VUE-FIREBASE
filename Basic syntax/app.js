const app = Vue.createApp({
  // you cann add data and functions
  data() {
    return {
      url: "https://www.w3schools.com/",
      showBooks: false,
      Books: [
        {title: "One Piece", author: "Oda Eiichiro", age: "48" , img: "assets/one_piece_icon.jpg" , myFav: true},
        {title: "Naruto", author: "Masashi Kishimoto", age: "48" , img: "assets/naruto_icon.png" , myFav: false},
        {title: "Bleach", author: "Tite Kubo", age: "46" , img: "assets/bleach_icon.png" , myFav: false},
        {title: "DragonBallZ", author: "Akira Toriyama", age: "68" , img: "assets/dragon_ball_z_icon.png" , myFav: false},
      ],
      x: "0",
      y: "0",
    } 
  },
  methods: {
    ChangeTitle(title) {
      this.title = title
    } ,
    DecreaseAge() {
      this.age -= 1
    } , 
    ToggleShowBooks() {
      this.showBooks = !this.showBooks
    } , 
    HandleEvent(e , date) {
      console.log(e , e.type)
      if(date) {
        console.log(date)
      }
    } ,
    HandleMouseMove(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    } ,
    // This is the answer from course
    ToggleFav(Book) {
      console.log(Book)
      Book.myFav = !Book.myFav
    }
    // This is my stupid method
    // ChangeFav(changes) {
    //   console.log(changes)
    //   if(changes == "One Piece") {
    //     this.Books[0].myFav = !this.Books[0].myFav
    //   }
    //   if(changes == "Naruto") {
    //     this.Books[1].myFav = !this.Books[1].myFav
    //   }
    //   if(changes == "Bleach") {
    //     this.Books[2].myFav = !this.Books[2].myFav
    //   }
    //   if(changes == "DragonBallZ") {
    //     this.Books[3].myFav = !this.Books[3].myFav
    //   }
    // }
  },

  computed: {
    filteredBooks() {
      return this.Books.filter((book) => book.myFav)
    }
  }
  //template: "<h2>I am the template that create with Vue</h2>"
})

app.mount("#app")
