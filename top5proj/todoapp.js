new Vue({
	el:"#app",

  data: {
      todos :
            [
                {id:1 , title: "Go Shopping", completed: true},
    		          {id : 2, title:"Park Car", completed:true}],

     newTodos : [{id:null, title:'', completed : false}]
  },

  computed : {
      todoCount : function() {
        return this.todos.length
    }
  },

  methods:{
  	addNewTodo(newTodos) {
        this.todos.push(newTodos)
        this.newTodos = {id : null , title:'', completed:false}
    },

    deleteTodos(todo) {
        this.todos.pop(todo)

    },

    todoCompleted(todo) {
        todo.completed = !todo.completed
    }

  }


});
