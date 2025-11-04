import React from "react";

export default function TodoTemplate({
    children,}:
                                     {
    children: React.ReactNode;
}){
// 스타일은 최소화: 기본 레이아웃만 div로 감쌈
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center", alignItems: "flex-start",
                minHeight: "100vh", backgroundColor: "#ffffff",
            }}
        >
            <div
                style={{
                    width: "400px",
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "30px",
                    boxShadow: "0 0 8px rgba(0, 0, 0, 0.1)",
                    marginTop: "50px",
                }}
            >
                {children}
            </div>
        </div>
    );
}