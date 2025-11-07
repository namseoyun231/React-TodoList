import React from "react";

export default function TodoTemplate({ children }: { children: React.ReactNode }) {
    return (
        <div
            style={{
                maxWidth: "420px",
                margin: "0 auto",
                paddingTop: "50px",
            }}
        >
            {children}
        </div>
    );
}
