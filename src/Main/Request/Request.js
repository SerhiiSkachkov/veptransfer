import React, { Component } from 'react';
import './Request.sass';
import RequestForm from './RequestForm/RequestForm'

class Request extends Component {
    state = {
        rq_form_ttl: 'Оставьте заявку',
        rq_form_descr: 'И мы подберем для Вас лучший автомобиль всего за несколько минут',
    }
    render() {
        return (
            <section className="request">
                <div className ="wrapper">
                    <div className="request-box">
                        <div className="request-form-box">
                            <h2 className="request-ttl">{this.state.rq_form_ttl}</h2>
                            <div className="request-descr">{this.state.rq_form_descr}</div>
                            <RequestForm/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Request;