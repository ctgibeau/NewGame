import React from "react"
//import Build from '../images/pc-build.jpg';

export default function Hero(props) {
    return (
        <section className="hero">
            {props.children}
        </section>
    )
}