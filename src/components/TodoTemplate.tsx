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
                justifyContent: "center",  // 가로 가운데 정렬
                alignItems: "center",      // 세로 가운데 정렬
                minHeight: "100vh",        // 화면 전체 높이 사용
                backgroundColor: "#ffffff" // 흰 배경
            }}
        >
            <div
                style={{
                    width: "420px",
                    background: "#fff",
                    borderRadius: "8px",
                    padding: "32px 24px",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                {children}
            </div>
        </div>
    );
}