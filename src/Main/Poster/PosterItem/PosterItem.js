import React from "react";
import './PosterItem.sass';

const PosterItem = (props) => {
	return (
		<div className="poster-item" >
			<div className="poster-img">
				<img src={ props.img } alt="car" />
			</div>
			<div className="poster-about">
				<div className="poster-name">{props.name}</div>
				<div className="poster-descr">{props.description}</div>
				<div className="poster-inform">
					<div className="poster-inform-box">
						<div className="poster-inform-item">
							<div className="poster-inform-about">Обьем Двигателя</div>
							<div className="poster-inform-output">{props.engine}</div>
						</div>
						<div className="poster-inform-item">
							<div className="poster-inform-about">Трансмисия</div>
							<div className="poster-inform-output">{props.transmission}</div>
						</div>
						<div className="poster-inform-item">
							<div className="poster-inform-about">Привод</div>
							<div className="poster-inform-output">{props.unit}</div>
						</div>
						<div className="poster-inform-item">
							<div className="poster-inform-about">Количество мест</div>
							<div className="poster-inform-output">{props.places}</div>
						</div>
					</div>
					<div className="poster-inform-box">
						<div className="poster-inform-item">
							<div className="poster-inform-about">Комфорт</div>
							<div className="poster-inform-rating">
								<div className="poster-inform-rating-output" style={{width:props.comfort}}></div>
							</div>
						</div>
						<div className="poster-inform-item">
							<div className="poster-inform-about">Вместимость</div>
							<div className="poster-inform-rating">
								<div className="poster-inform-rating-output" style={{width:props.comfort_places}}></div>
							</div>
						</div>
						<div className="poster-inform-item">
							<div className="poster-inform-about">Экономичность</div>
							<div className="poster-inform-rating">
								<div className="poster-inform-rating-output" style={{width:props.economy}}></div>
							</div>
						</div>
						<div className="poster-price-box">
							<div className="poster-price">
								<span>${props.price}</span>/День
							</div>
							<a className="btn-add" href="/"> Забронировать </a>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default PosterItem;
