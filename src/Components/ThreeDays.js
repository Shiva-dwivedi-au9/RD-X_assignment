import React from 'react'

function ThreeDays(props) {

  const render3Data = (data) => {
        if(data){
            return data.slice(0,3).map(item => {
                return(
                    <div className="sub-container">
                        <h2>{item.date.substring(0,10)}</h2>
                        <h3>{(item.temp-273.15).toFixed(2)}&deg;C</h3>

                        <div style={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",margin:"10px"}}>
                            <span><h3>{(item.min_temp - 273.15).toFixed(2)}&deg;C</h3></span>/
                            <span><h3>{(item.max_temp - 273.15).toFixed(2)}&deg;C</h3></span>
                        </div>
                        
                        <img src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="weather icon" />
                    </div>
                )
            })
        }
    }
    return (
        <div className="ThreeDays">
           {render3Data(props.data)}
        </div>
    )
}

export default ThreeDays
