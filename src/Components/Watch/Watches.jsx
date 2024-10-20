import React, { useEffect, useState } from 'react'
import Watch from './Watch';

export default function Watches() {
    const [watches, setWatches] = useState([]);

    useEffect(()=>{
        fetch('watches.json')
        .then(res => res.json())
        .then(data=> setWatches(data))
    },[])
    // const watches = [
    //     { id: 1, name: "Classic Silver", price: 150 },
    //     { id: 2, name: "Elegant Gold", price: 200 },
    //     { id: 3, name: "Black Leather", price: 180 },
    //     { id: 4, name: "Minimalist White", price: 170 },
    //     { id: 5, name: "Luxury Chrono", price: 250 }
    //   ];
      
  return (
    <div>
        {
            watches.map(watch=> <Watch key={watch.id} watch={watch}></Watch>)
        }
    </div>
  )
}
