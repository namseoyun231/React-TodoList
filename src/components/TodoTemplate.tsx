import React from "react";

export default function TodoTemplate({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
                backgroundColor: "#ffffff"
            }}
        >
            <div
                style={{
                    width: "420px",
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "24px 24px 32px 24px",
                    boxShadow: "0 0 6px rgba(0, 0, 0, 0.08)",
                }}
            >
                {/* 제목 영역 */}
                <h1
                    style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        margin: "0 0 20px 0",
                        color: "#212529",
                        textAlign: "left",
                    }}
                >
                    Todo List
                </h1>
                {children}
            </div>
        </div>
    );
}