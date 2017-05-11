import React from 'react';
import {GoogleMapLoader,GooleMap} from "react-google-maps";
export default (props)=>{
    return (
        <GoogleMapLoader 
            containerElement={<div style={{height:'100%'}} />}
            googleMapElement={
                <GooleMap defaultZoom={12} defaultCenter={{lat:props.lat,lng:props.lon}} />
            }
        />
    )
}