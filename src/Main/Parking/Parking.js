import React, { Component } from "react";
import './Parking.sass'
import Parkin_cadilack from './Parking_cadilack.png';
import Parkin_kia from './Parking_kia.png';
import Parkin_maserati from './Parking_maserati.png';
import Parkin_porshe from './Parking_porshe.png';
import Parkin_smart from './Parking_smart.png';
import Parkin_suv from './Parking_suv.png'

class Parking extends Component {

    state = {
    	title: "Наш автопарк",
        cars: [
            { name: "Maserati Gran Cabrio", images: Parkin_maserati},
            { name: "KIA Picanto", images: Parkin_kia},
            { name: "Porsche Boxster", images: Parkin_porshe},
            { name: "Chevrolet Suburban", images: Parkin_suv},
            { name: "Smart Fortwo", images: Parkin_smart},
            { name: "Cadillac Escalade", images: Parkin_cadilack}
        ]
    }

    render() {

        return (
            <section className="parking">
                <div className="wrapper">
                	<h2 className="parking-ttl">{this.state.title}</h2>
                    <div className="parking-box">
                        {this.state.cars.map((item,index) => {
                            return (
                                <a className='prking-item' href="/" key={index}>
                                	<div className="parking-img">
                                		<img src={item.images} alt="img"/>
                                	</div>
                                	<h3 className="parking-item-ttl">{item.name}</h3>
                                </a>
                            )
                        }) }
                    </div>
                </div>
            </section>

        )
    }
}

export default Parking;