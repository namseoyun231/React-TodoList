import type { Todo } from "../App";
import TodoItem from "./Todoitem.tsx";

type TodoListProps = {
    todos: Todo[];
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

export default function TodoList({ todos, onToggle, onRemove }: TodoListProps) {
    return (
        <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
            {todos.map((t) => (
                <TodoItem
                    key={t.id}
                    todo={t}
                    onToggle={onToggle}
                    onRemove={onRemove}
                />
            ))}
        </ul>
    );
}
