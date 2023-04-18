import React from "react";

export function ColorBox({ clr }) {
    const styles = {
        height: "25px",
        width: "250px",
        background: clr,
        marginTop: "20px",
    };
    return <div style={styles}></div>;
}
