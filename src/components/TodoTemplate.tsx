import React from "react";

export default function TodoTemplate({
    children,}:
                                     {
    children: React.ReactNode;
}){
// 스타일은 최소화: 기본 레이아웃만 div로 감쌈
    return <div
        style={{
            display: "flex",
            justifyContent: "center", // 가로 가운데
            alignItems: "flex-start", // 세로는 위쪽
            minHeight: "100vh", // 화면 전체 높이 확보
            backgroundColor: "#ffffff", // 흰 배경 유지
        }}
    >
    {children}</div>;
}