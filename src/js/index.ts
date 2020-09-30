new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        name: "",
        greeting: "",
        outString: "",
        mode: ""        

    },
    
    methods: {
        sayHello() {
            console.log("Say Hello " + this.name)
            if (this.name == "") {
                this.greeting = "Hello NoName"
            }
            else {
                this.greeting = "Hello " + this.name
            }
            
        }
        , ChangeCase(){
            if(this.mode=="Upper"){
                this.ToUpperCase()
            }else if(this=="Lower"){
                this.ToLowerCase()
            }
        }
        , ToUpperCase(){
           if(this.incString == ""){
                this.outString = "the textfield is empty"
           }
           else{
               this.outString = this.incString.toUpperCase()
           }
           
        }
        , ToLowerCase(){
            if(this.incString == ""){
                this.outString = "the textfield is empty"
           }
           else{
               this.outString = this.incString.toLowerCase()
           }
        }
        
    },

    
})