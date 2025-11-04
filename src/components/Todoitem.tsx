import type { Todo } from "../App";

type TodoItemProps = {
    todo: Todo;
    onToggle: (id: number) => void;
    onRemove: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
    return (
        <li
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 0",
                borderBottom: "1px solid #dee2e6",
            }}
        >
            <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => onToggle(todo.id)}
                />
                <span
                    style={{
                        textDecoration: todo.done ? "line-through" : "none",
                        color: todo.done ? "#868e96" : "#212529",
                    }}
                >
          {todo.text}
        </span>
            </label>
            <button
                onClick={() => onRemove(todo.id)}
                style={{
                    background: "transparent",
                    border: "none",
                    fontSize: "16px",
                    cursor: "pointer",
                }}
            >
                ✕
            </button>
        </li>
    );
}
