import React, { Component } from "react";
import Slider from "react-slick";
import './PosterSlider.sass';
import Slide_chevrolet from './poster_chevrolet.png';
import Slide_ford from './poster_ford.png';
import Slide_porshe from './poster_porshe.png';
import PosterItem from '../PosterItem/PosterItem';

class SimpleSlider extends Component {
    state = {
        cars: [
            {
                img: Slide_ford,
                name:"Ford Mustang",
                description:"Изначальный вариант был создан на базе агрегатов семейного седана Ford Falcon Первый серийный Mustang сошёл с конвейера 9 марта 1964 года как модель 1965 года",
                engine: "5.0 л",
                transmission: "Автоматическая",
                unit: "Передний",
                places: "4 с водителем",
                comfort: "100%",
                comfort_places: "28%",
                economy: "42%",
                price: "350"
            },
            {
                img: Slide_chevrolet,
                name:"Shevrolet Suburban",
                description:"Внедорожник класса «K3». Мировая премьера двенадцатого поколения модели состоялась в сентябре 2013 года.",
                engine: "5.3 л",
                transmission: "Автоматическая",
                unit: "Полный 4x4",
                places: "8 c Водителем",
                comfort: "100%",
                comfort_places: "80%",
                economy: "30%",
                price: "229"
            },
            {
                img: Slide_porshe,
                name:"Porsche Boxster",
                description:"Родстер компании Porsche с шестицилиндровым оппозитным мотором,расположенным продольно в центре. Модель первого поколения появилась в 1996 году,и была своеобразной преемницей модели Porsche 944",
                engine: "3.2 л",
                transmission: "Автоматическая",
                unit: "Полный 4x4",
                places: "2 c Водителем",
                comfort: "100%",
                comfort_places: "15%",
                economy: "57%",
                price: "599"
            }
        ],

    }
    render() {
        const settings = {
            dots: true,
            arrows: false,
            infinite: true,
            speed: 1000,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            className: "poster-slider"
            }

        return (
            <Slider {...settings}>
                {this.state.cars.map((car,index) => {
                    return (
                        <PosterItem
                            key={index}
                            img={car.img}
                            name={car.name}
                            description={car.description}
                            engine={car.engine}
                            transmission={car.transmission}
                            unit={car.unit}
                            places={car.places}
                            comfort={car.comfort}
                            comfort_places={car.comfort_places}
                            economy={car.economy}
                            price={car.price}
                        />
                    )
                }) }
            </Slider>
        );
    }
}

export default SimpleSlider;