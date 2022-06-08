import React from "react";
import { useParams } from "react-router-dom";

export default function Item() {
    let { id } = useParams()
    return(
        <h1>This is the Item page for : {id}</h1>
    )
}