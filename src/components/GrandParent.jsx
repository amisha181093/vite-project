import React, { useEffect, useState } from "react";
import { ShimmerTitle } from "react-shimmer-effects";

const GrandParent = () => {
    const [counter, setCounter] = useState(0);
    const [btnFlag, setBtnFlag] = useState(false);


    useEffect(() => {
      // kaam jo bhi krna hai  
    }, []);





    useEffect(() => {
        setCounter(counter + 1);
        console.log('kuch heavy kaam kr rhe hai')
    }, [btnFlag]);

    return <>
        <div className="p-[50px] bg-[#dedede]">
            <p className="text-[24px] text-center text-[red]">
                { counter }
            </p>
            {/* <p className="text-black text-center text-[18px]"> */}
                {/* {
                    (isLoading == true) ? <ShimmerTitle line={2} gap={10} variant="primary" /> : userName
                } */}
                {/* I am GrandParent component */}
            {/* </p> */}
            {btnFlag ? 'yes' : 'no'}
            <br />
            <button onClick={() => setBtnFlag(!btnFlag)}>click me</button>
        </div>
    </>;
};

export default GrandParent;
