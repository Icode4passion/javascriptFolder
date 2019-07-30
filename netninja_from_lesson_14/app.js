var one = new Vue({
    el:"#vue-app-one",
    data:{
        title:"Vue app One"

    },
    methods:{

    },
    computed:{
        greet : function(){
            return "Hello " + this.title
        }

    }
})


var two = new Vue({
    el:"#vue-app-two",
    data:{
        title: "Vue app two"

    },
    methods:{
        changeTitle : function(){
            one.title = "Vue Js"
        }

    },
    computed:{
        greet: function(){
            return "Hello " + this.title
        }

    }
})

Vue.component('greet',{
    template:"<p> {{name}} is learning about Vue Components <button v-on:click='changeName'>ChangeName</button></p>",
    data : function(){
        return {
            name : "Mahesh",
            id : "11",
            email: "ram@ram.com"
        }
    },
    methods:{
        changeName:function(){
            this.name = "King"
        }
    }
})

new Vue({
    el:'#comp',
    data:{

    },
    methods:{

    },
    computed:{

    }
})

new Vue({
    el:'#ref',
    data:{
        output:"Name"

    },
    methods:{
        vrefs:function(){
            console.log(this.$refs);
            console.log(this.$refs.refinput.value);
            this.output = this.$refs.refinput.value;
        }

    },
    computed:{

    }
})
