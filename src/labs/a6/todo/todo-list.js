import TodoItem from "./todo-item";
import todos from "./todos.json";
const TodoList = () => {
    return(
        <>
            <h3>Todo List</h3>
            <ul>
                {
                    todos.map(item => {
                        return(<TodoItem todo={item}/>);
                    })
                }
            </ul>
        </>
    );
}
export default TodoList;