const app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: []
  },
  methods: {
    addTodo(){
      if(this.newTodo){
      this.todos.push({
        text: this.newTodo,
        done: false
      });
      this.newTodo = '';}
    },
    removeTodo(todo){
      this.todos.splice(this.todos.indexOf(todo), 1);
    }
  },

});
