import React from "react";
import './RequestRadioGroup.sass'

const RequestRadioGroup = props => {

		return (
			<>
				<input 
					type="radio"
					id={ props.id }
					name= "car-type"
					value={ props.value }
					checked={props.val === props.value}
					onChange={props.onChange}
				/>
				<label className="request-radio-group-lbl"
					htmlFor={ props.id }>
					<img src={ props.img } alt="img"/>
				</label>
			</>
		)
	}

export default RequestRadioGroup;