import { useState, type FormEvent, type ChangeEvent } from "react";

export default function TodoInsert({onAdd,}: {
    onAdd: (text: string) => void;
}) {
    const [value, setValue] = useState("");

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // 페이지 새로고침 방지
        const text = value.trim();
        if (!text) return;
        onAdd(text);
        setValue("");
    };

    return (
        <form onSubmit={onSubmit}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginTop: "12px",
            }}
        >
            <input
                type="text"
                placeholder="할 일을 입력하고 Enter"
                value={value}
                onChange={onChange}
                style={{
                    flex: 1,
                    padding: "8px 10px",
                    borderRadius: "6px",
                    border: "1px solid #e6e6e6",
                    fontSize: "14px",
                }}
            />
            <button
                type="submit"
                style={{
                    padding: "8px 12px",
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor: "#f6f6f6",
                    cursor: "pointer",
                }}
            >
                추가
            </button>
        </form>
    );
}