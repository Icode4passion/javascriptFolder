new Vue({
    el:'#vue-app',
    data:{
        fname : "Ram",
        lname : "Rao",
        website : "https://google.com",
        mylink : '<a href="https://google.com">The Google</a>',
        age :20,
        x:0,y:0,


    },
    methods :{
        fullname:function(){
            return this.fname + this.lname
        },
        greet : function(time){
            return "Good " + time +" " + this.fname
        },
        add:function(){
            this.age++;
        },
        subtract:function(){
            this.age--;
        },
        updateXY:function(){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }

    }
});
