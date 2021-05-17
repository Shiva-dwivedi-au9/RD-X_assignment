import React, { useEffect, useLayoutEffect, useState } from 'react'

function ExchangeApi() {

    const [ euro, setEuro ] = useState("")
    const [ usd, setUsd ] = useState("")

    useLayoutEffect(() => {
        
       fetch(`https://api.frankfurter.app/latest?amount=1&from=EUR&to=${localStorage.getItem("currency")}`)
       .then(res => res.json())
       .then(data => setEuro(data))
       console.log(usd)
       
       fetch(`https://api.frankfurter.app/latest?amount=1&from=USD&to=${localStorage.getItem("currency")}`)
       .then(res => res.json())
       .then(data => setUsd(data))

    } , [])


    return (
        <div className="exchange">
            <table className="table">
            <thead>
                            <tr>
                            <th scope="col">Currency</th>
                            <th scope="col">Price</th>
                            </tr>
             </thead>
             <tbody>
                 <tr>
                     <td>USD</td>
                     <td>{JSON.stringify(usd.rates)}</td>
                     
                 </tr>
                 <tr>
                     <td>EURO</td>
                     <td>{JSON.stringify(euro.rates)}</td>
                 </tr>
             </tbody>
        </table>
        </div>
    )
}

export default ExchangeApi
