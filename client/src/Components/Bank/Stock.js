import React, { useState, useEffect } from 'react'
import axios from "../Api";

const Stock = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/bank/getStock").then((r) => {
            setData(r.data.stock);
        }).catch((err) => { alert("Something went wrong") })
    }, []);
    return (
        <div>
            <div className="flex justify-center flex-wrap text-center text-white-900 text-2xl">
                {
                    data && Object.keys(data).map((e) => {
                        return (
                            <div className='bg-danger h-22 w-22 m-10 p-7'>
                                <p className='font-bold'>{data[e]}mL</p>
                                <p className='text-white'>{e}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Stock