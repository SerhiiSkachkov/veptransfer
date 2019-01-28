import React, { Component } from "react";
import RequestRadioGroup from './RequestRadioGroup/RequestRadioGroup';
import Request_sedan from './request_sedan.png';
import Request_small from './request_small.png';
import Request_sports from './request_sports.png';
import Request_ponoram from './request_ponoram.png';
import Request_jeep from './request_jeep.png';
import './RequestForm.sass';

class RequestForm extends Component {
	state = {
		rq_present:'Представьтесь',
		rq_present_deriver: 'Кто поведет',
		rq_present_car: 'Тип авто',
	    rq_radio_grp: [
            { rq_img: Request_sedan, rq_val: "sedan" },
            { rq_img: Request_jeep, rq_val: "jeep"},
            { rq_img: Request_small, rq_val: "small"},
            { rq_img: Request_sports, rq_val: "sports"},
            { rq_img: Request_ponoram, rq_val: "ponoram"}
        ],
        rq_car: "sedan"
    }

    onChange = (e) => {
    	this.setState({
      		[e.target.name]: e.target.value
    	});
  	}

	render() {

		return (
			<form className="request-form">
				<div className="request-present">{this.state.rq_present}</div>
					<input
						className="request-form-field" 
						type="text"
						palceholder="Ваше имя"
					/>
					<input
						className="request-form-field"
						type="text" 
						palceholder="Телефон"
					/>
				<div className="request-drive-box">
					<div className="request-present">{this.state.rq_present_deriver}</div>
					<input
						id="drive-solo"
						className="request-drive-radio"
						type="radio"
						name="driver"
						value="solo"
					/>
					<label
						className="request-radio-lbl"
						htmlFor="drive-solo">
						Нужен водитель	
					</label>
					<input
						id="drive-driver"
						className="request-drive-radio"
						type="radio"
						name="driver"
						value="need"
						defaultChecked
					/>
					<label
						className="request-radio-lbl"
						htmlFor="drive-driver">
						Я сам водитель
					</label>
				</div>	
				<div className="request-car-box">
					<div className="request-present">{this.state.rq_present_car}</div>
				    {this.state.rq_radio_grp.map((item,index) => {
                   		return (
                   		    <RequestRadioGroup
                   		    	key={index}
                   		    	index={index}
                   		    	id={item.rq_val}
                   		    	img={item.rq_img}
                   		    	value={this.state.rq_val}
                   		    	onChange={this.onChange}
                   		    />
                   		)
                	}) }
				</div>
				<input className="btn-add" type="submit" value="Оставить Заявку"/>
			</form>
		)}
	}

export default RequestForm;



