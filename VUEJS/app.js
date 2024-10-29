

const app = Vue.createApp({
    data(){
        return{
            showBooks : true,
            books : [
                {title : 'new one',author:'New Author' ,isFav : true},
                {title : 'rare',author:' sanji',isFav : false},
                {title : 'old book god',author:' zooro',isFav : true},
            ]

        }
    },
    methods : {
       toggleBooks(){
        this.showBooks = !this.showBooks
       },

       handleEvent(e,data){
          console.log(e.type)
          if(data){
            console.log(data)
          }
       },
     handleMouse(e){
          this.x = e.offsetX
          this.y = e.offsetY
     }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book => book.isFav))
        }
    }
})

app.mount('#app')