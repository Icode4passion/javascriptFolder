new Vue({
    el:'#vue-app',
    data:{
        name : 'Mahesh',
        id : '7',
        phone:'100'
    }
})

var vue_app2 = new Vue({
    el:'#vue-app2',
    data:{
        message:'You load this page on' + " " + new Date().toLocaleString()
    }
})
var vue_app3 = new Vue({
    e1:'#vue-app3',
    data:{
        seen: true
    }
})

var vue_app4 = new Vue({
    el:"#vue-app4",
    data:{
        todos : [
            { text : "Learn Js" },
            { text : "Learn Vue" },
            { text : "Build something Awesome" }
        ]
    }
})

var app = new Vue({
    el:"#app",
    data:{
        num : [1,2,3,4]
    }
})



var vue_app5 = new Vue({
    el:"#vue-app5",
    data :{
        message : "Hello Vue.js!"
    },
    methods:{
        reversemessage : function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
})


var vue_app6 = new Vue({
    el:'#vue-app6',
    data:{
        message : "Hello Vue Js !"
    }
})

var app1 = new Vue({
    el:"#app1",
    data:{
        mes : 'name here'
    }
})


Vue.component('todo-item',{
    props:['todo'],
    template:'<li> {{todo.text}} </li>'
})

var vue_app7 = new Vue({
    el:'#vue-app7',
    data:{
        groceryList : [
            { id: 0 , text:"Onion" },
            { id: 1 , text:"Tomato" },
            { id: 2 , text:"Chilli" }
        ]
    }
})
