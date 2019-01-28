import React, { Component } from 'react';
import Services_drive from './services_dirve.png';
import Services_exp from './services_exp.png';
import Services_key from './services_key.png';
import Services_car from './services_car.png';
import Services_time from './services_time.png';
import ServicesItem from './ServicesItem';
import './Services.sass';

class Services extends Component {
    state = {
        items: [
            { name: "Свобода перемещения", descr: 'Исследуйте все уголки острова за рулем авто премиум класса', images: Services_drive},
            { name: "Опытные водители", descr: 'Устали водить автомобиль?Возьмите его в аренду вместе с водителем', images: Services_exp},
            { name: "Прямо к терминалу", descr: 'Доставим заправленный автомобиль в любую точку Доминиканы', images: Services_key},
            { name: "Безупречное качество", descr: 'Все наши автомобили проходят ежедневный технический осмотр', images: Services_car},
            { name: "Круглосуточная поддержка", descr: 'Возникли  трудности в дороге? Мы всегда рады помочь,в любое время суток', images: Services_time}
        ]
    }
    render() {

        return (
            <section className="services">
                <div className="wrapper">
                    <div className="services-box">
                        {this.state.items.map((item,index) => {
                            return (
                                <ServicesItem
                                    key={index}
                                    image={item.images}
                                    name={item.name}
                                    descr={item.descr}
                                />
                            )
                        }) }
                    </div>
                </div>
            </section>

        )
    }
}

export default Services;