"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import Particles from "react-particles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

import { ISourceOptions } from "@tsparticles/engine";

const Factbocks = () => {

    const [quote, setQuote] = React.useState("Click the button to generate random cat facts");
    async function generate_facts() {
        const response = await axios.get("https://meowfacts.herokuapp.com/");
        console.log(response);
        setQuote(response.data.data[0]);
    }

    const [init, setInit] = useState(false);


    useEffect(() => {
        initParticlesEngine(async (engine: any) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    return (
        <div className='text-9xl w-full text-center flex flex-col justify-center items-center'>
            <h1 className='font-mono font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-purple-600'>Cat Facts (much better version)</h1>
            <button className='bg-gradient-to-l from-purple-600 to-blue-600 text-white font-mono shadow-blue-600 shadow-2xl  p-5 rounded-2xl hover:scale-75 transition duration-700 my-10' onClick={() => { generate_facts() }}>click me</button>

            <div className='text-3xl bg-gradient-to-r from-orange-600 to-purple-600 p-10 rounded-3xl shadow-2xl text-white mx-auto'>{quote}</div>
        </div>

    )
}

export default Factbocks;

