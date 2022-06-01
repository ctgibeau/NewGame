import React from "react";
import Hero from '../components/Hero'
import swsh from '../images/SWSH.png'

export default function Home() {
    return(
        <Hero>
        <img src={swsh} alt="Sword &amp; Shield Boxart" />
        <p>The new set is here!</p>
      </Hero>
    )
}