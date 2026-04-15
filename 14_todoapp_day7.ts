interface Todo{
    id:number;
    text:string;
    completed:boolean;
}



class TodoApp{
    
private todos:Array<Todo>=[];
private nextId:number = 1;
    


    addTodo(text:string){
        const todo:Todo={
        id: this.nextId++,
        text:text,
        completed: false,}
        this.todos.push(todo);
    }

    listTodos(){
     console.log('🔥Todo List');
     this.todos.forEach((todo:Todo)=>{
        console.log(`[${todo.completed ? '✓':' '}](${todo.id})${todo.text}`);
    });
}

    toggleTodo(id:number){
    const todo = this.todos.find((t)=>t.id ===id);
    if(todo){
        todo.completed=!todo.completed;
    }
}

    removeTodo(id:number){
    this.todos = this.todos.filter((t)=> t.id !== id);
}
}


const app = new TodoApp()
app.addTodo('typescrpt 공부');//아 이해했다 addTodo는 class안에 있는 메서들이기때문에 app.addtodo형태로 써야한다
app.addTodo('운동');
app.listTodos();
app.toggleTodo(1);
app.listTodos();
app.toggleTodo(1);
app.listTodos();
