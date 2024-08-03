import React, { useEffect, useState } from "react";
import Pota from "./Pota";

const Child = () => {

    // const [showPota, setShowPota] = useState(true);

    console.log('child......')

    const getDataFromApi = async () => {
        console.log('child useEffect');
    
        const data = await fetch('https://jsonplaceholder.typicode.com/users')
        const response = await data.json();
    
        console.log('response : ', response);
    }

    useEffect(() => {

    }, []);

    return <div className="p-[50px] bg-green-400 border-red border-1 border-solid">
        {/* {
            showPota ? <Pota /> : ''
        } */}
        {/* <button onClick={() => setShowPota(!showPota)}>toggle pota</button> */}
    </div>;
};

export default Child;
