"use client";

import React, { useState } from 'react';
import GradientButton from "../../components/GradientButton";
import Heading from '../../components/Heading';
import Input from '../../components/Input';

export default function NotRegistered() {
    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [location, setLocation] = useState("");

    return (
        <div className="flex flex-col items-center p-0 gap-[50px]">

            <Heading text="List your Ticket" size="5xl" />


            <div className="flex flex-col justify-center items-center p-0 gap-[30px] w-[50%]">
                <div className="flex flex-rpw items-center p-0 gap-[20px] w-full">
                    <p className="Poppins font-medium text-xl text-white w-[10%]">Name:</p>
                    <Input
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Eg. Arctic Monkeys Tour ...."
                    />
                </div>
                <div className="flex flex-rpw items-center p-0 gap-[20px] w-full">
                    <p className="Poppins font-medium text-xl text-white w-[10%]">City:</p>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Eg. Queens, NY"
                        className="flex flex-row items-start px-[15px] py-[10px] gap-[10px] w-[90%] bg-white/5 border border-white/5 rounded-[10px] outline-none text-white" />
                </div>
                <div className="flex flex-rpw items-center p-0 gap-[20px] w-full">
                    <p className="Poppins font-medium text-xl text-white w-[10%]">Location:</p>
                    <input
                        type="text"
                        name="Location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Eg. Forest Hills Stadium Queens ...."
                        className="flex flex-row items-start px-[15px] py-[10px] gap-[10px] w-[90%] bg-white/5 border border-white/5 rounded-[10px] outline-none text-white" />
                </div>
            </div>

            <GradientButton Text="Submit" px="50px" py="10px" />

        </div>
    )
}
