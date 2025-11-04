import React from "react";

export default function TodoTemplate({
                                         children,
                                     }: {
    children: React.ReactNode;
}) {
    return (
        <div
            style={{
                width: "400px",
                margin: "50px auto",
                background: "#f8f9fa",
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
            }}
        >
            {children}
        </div>
    );
}