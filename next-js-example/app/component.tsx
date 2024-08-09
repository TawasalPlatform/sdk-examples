"use client";
import {haptic} from "@tawasal/web";

export const Component = () => {
    return (
        <div>
            123
            <button onClick={()=> haptic("light")} >1234</button>
        </div>
    )
}