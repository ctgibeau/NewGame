import React from "react";

export default function Logo(props) {
    return (
        <img className={`logo ${props.isMain ? "" : "invert"}`} src={props.src} alt={props.alt} />
    )
}
