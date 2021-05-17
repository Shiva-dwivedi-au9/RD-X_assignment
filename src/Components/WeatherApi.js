import React, { Component } from 'react'
import ThreeDays from './ThreeDays'

export class WeatherApi extends Component {

    constructor () {

        super()
        
        this.state = {

            data: "",
            data_of_3Days: "",
            forecast:[],
            clicked:false

        }
          
    }

    renderCity = (data) => {
        if(data) { 
            return(
                
                <div>
                            <h1>{data.name},{data.sys.country}</h1>
                            { localStorage.setItem("country", this.state.data.sys.country)}
                            <div>
                            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" />
                            <h1>{(data.main.temp - 273.15).toFixed(2)}&deg;C</h1>
                </div>
                   
                   <div style={{display:"flex",textAlign:"center",justifyContent:"center",alignItems:"center",margin:"10px"}}>
                        <span><h3>{(data.main.temp_max - 273.15).toFixed(2)}&deg;C</h3></span>/
                        <span><h3>{(data.main.temp_min - 273.15).toFixed(2)}&deg;C</h3></span>
                   </div>
                   <h2>Description : {data.weather[0].description}</h2>
                </div>
            )
        }
    }

    getData = () => {
        
        for ( let i = 8 ; i < this.state.data_of_3Days.list.length; i+= 8) {
            
           let store = { date: this.state.data_of_3Days.list[i].dt_txt,
                               temp : this.state.data_of_3Days.list[i].main.temp,
                               min_temp : this.state.data_of_3Days.list[i].main.temp_min,
                               max_temp : this.state.data_of_3Days.list[i].main.temp_max,
                               icon : this.state.data_of_3Days.list[i].weather[0].icon }

            this.state.forecast.push(store)
        }
      
        this.setState({clicked:true})
    } 
    
    render() {
        return (
            <div className="weather">
                
                <div className="container">
                    { this.renderCity(this.state.data) }
                    
                    { this.state.clicked ?  <button className="glow-on-hover" disabled>Next 3 Days Forecast</button>:
                    <button className="glow-on-hover" onClick={this.getData}>Next 3 Days Forecast</button>
                    
                    }
                  
                    { this.state.clicked &&
                    <div className="ThreeDays">
                        <ThreeDays data={this.state.forecast} />
                    </div>
                    }
                
                </div>
            </div>
        )
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(function(position) {
            
            localStorage.setItem("latitude", position.coords.latitude)
            localStorage.setItem("longitude", position.coords.longitude)
       
        });

        const lat = localStorage.getItem("latitude")
        const lon = localStorage.getItem("longitude")

        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a273757fa9cf6e79b28e3d3a6514559a`)
        .then( res => res.json())
        .then(data => this.setState({data}))

        fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a273757fa9cf6e79b28e3d3a6514559a`)
        .then(res => res.json())
        .then( data => this.setState({data_of_3Days:data}))
      
      }
}


export default WeatherApi
