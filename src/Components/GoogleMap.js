
import React, { Component } from 'react'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    center : {
      lat: localStorage.getItem("latitude"),
      lng: localStorage.getItem("longitude")
    }
  };
 
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    
    containerStyle = {
      width:'54vw',
      height: '60vh',
      padding:'10px',
      margin:'5px',
      border: '8px solid black',
      opacity:'0.8'
    }
  render() {
    return (

      <div className="maps">
          <Map google={this.props.google}
            initialCenter= {{
              lat:this.state.center.lat,
              lng:this.state.center.lng
            }}
            
            containerStyle={this.containerStyle} >

            <Marker onClick={this.onMarkerClick}
                    name={'Current location'} />
            
          </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDjsTx89X98OZX_0k9wUIkpuqjcA-AUyT0")
})(MapContainer)