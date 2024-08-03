import React, { useEffect, useState } from "react";
import Child from "./Child";

const Parent = () => {

    useEffect(() => {
        console.log('Parent useEffect');
    }, []);

    console.log('Parent......')
    return <div className="p-[50px] bg-yellow-500">
        <Child />
    </div>;
};

export default Parent;
