import React from "react";
import './ServicesItem.sass'

const ServicesItem = (props) => {
	return(
		<div className="services-item">
			<div className="services-img">
				<img src={ `${props.image}` } alt="img"/>
			</div>
			<h3 className="services-ttl"> { props.name } </h3>
			<div className="services-descr"> { props.descr } </div>
		</div>
	)
}
export default ServicesItem;