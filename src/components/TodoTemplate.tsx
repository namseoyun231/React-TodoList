import React from "react";

export default function TodoTemplate({
                                         children,}:
                                     {
                                         children: React.ReactNode;
                                     }){
// 스타일은 최소화: 기본 레이아웃만 div로 감쌈
    return (<div
            style={{
                maxWidth: "420px",
                margin: "0 auto",
                paddingTop: "40px",
            }}
        >
            <h1 style={{
                fontSize: "36px",
                marginBottom: "20px",
                fontWeight: 700,
                color: "#223",
            }}>
                Todo List
            </h1>{children}</div>
    );
}