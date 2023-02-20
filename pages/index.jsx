import Head from "next/head";

import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { Inter } from "@next/font/google";

export default function Home() {
  const [numbers, setnumbers] = useState([0]);
  const [totamount, settotamount] = useState("bruh");
  const [parent] = useAutoAnimate();

  const add = () => {
    setnumbers([...numbers, numbers.length]);
    console.log(numbers);
  };
  const clear = () => {
    setnumbers([0]);
    settotamount(0);
  };

  const displayAmount = (totamount) => {
    return isNaN(totamount) ? "0.00" : totamount;
  };

  const handleAmount = (e) => {
    settotamount(e.target.value);
  };

  return (
    <>
      <Head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@2.50.1/dist/full.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="flex flex-row">
        <div className="grid grid-col-2 gap-5 " ref={parent}>
          {numbers.map((number, index) => (
            <div className="flex flex-col p-2" key={number}>
              <input
                key={index}
                type="text"
                placeholder={"Person " + (number + 1)}
                className="input input-bordered w-full max-w-xs"
                onFocus={add}
              />
              <input
                type="number"
                placeholder={"Amount for Person " + (number + 1)}
                className="input input-bordered w-full max-w-xs"
              />
              <button onClick={()=> {setnumbers(numbers.filter((num) => ))}} className="btn btn-square ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
        <div className="p-5">
          <input
            type="number"
            placeholder="enter total amount paid"
            className="input input-bordered w-full max-w-xl "
            value={totamount}
            onChange={(e) => handleAmount(e)}
          />
          <div className="pl-2">Total Amount left: RM{}</div>
        </div>
        <button className="btn mt-5" onClick={clear}>
          Clear
        </button>
      </div>
    </>
  );
}
