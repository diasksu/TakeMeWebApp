import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Routes } from '../../common/routes/Routes';
import logo from './telebook.svg';
// import './telebook.css'

function TakeMeType() {
    let navigate = useNavigate();

    function takeButtonClick() {
        let path = Routes.TakeItem;
        navigate(path);
    }

    function sendButtonClick() {
        let path = Routes.SendItem;
        navigate(path);
    }

    const [stylePath] = useState(
        "/TakeMeWebApp/css/telebook.css"
    );

    return (
        <div className='app'>

            <div className='app-header'></div>

            <div style={{ display: 'none' }}>
                <link rel="stylesheet" type="text/css" href={stylePath} />
            </div>

            <div data-v-6ecd3229='' className='home-page'>
                <div data-v-7032c32d='' data-v-6ecd3229='' className='placeholder landing'>
                    <div data-v-6ecd3229='' className='landing-picture'>
                    <img data-v-6ecd3229='' alt='logo' src={logo} aria-hidden='true' width='68'/></div>
                    <h1 data-v-7032c32d='' className='title'>Take Me</h1>
                    <p data-v-7032c32d='' className='caption'>Отправляйте и доставляйте посылки по всему миру</p>
                </div>

                <div data-v-b7065d0d="" data-v-6ecd3229="" className="sections">
                    <div data-v-3df82581="" data-v-6ecd3229="" className="section section--padded">
                        <div data-v-e181b69c="" data-v-6ecd3229="" className="list list--bg list--standalone">
                            <div data-v-d8c662a8="" data-v-6ecd3229="" className="list-item">
                                <div data-v-d8c662a8="" className="left-col"></div>
                                <div data-v-d8c662a8="" className="right-row">
                                    <div data-v-d8c662a8="" className="body">
                                        <div data-v-d8c662a8="" className="label">Travel date</div>
                                    </div>
                                    <div data-v-d8c662a8="" className="right">
                                        <div data-v-7e8abacd="" data-v-6ecd3229="" className="picker-compact">2 февр. 2024</div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-bb122c94="" data-v-6ecd3229="" className="list-item-expandable">
                                <div data-v-17b6e95a="" data-v-6ecd3229="" className="date-picker">
                                    <div data-v-17b6e95a="" className="header">
                                        <div data-v-17b6e95a="" className="month-and-year">февраль 2024</div>
                                        <div data-v-17b6e95a="" className="arrows">
                                            <button data-v-17b6e95a="">
                                                <div data-v-17b6e95a="" className="icon icon-arrow-left">
                                                    <svg width="10" height="18" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.0585938 8.99512C0.0585938 8.82585 0.0878906 8.6696 0.146484 8.52637C0.211589 8.38314 0.309245 8.24642 0.439453 8.11621L8.04688 0.674805C8.26823 0.459961 8.53516 0.352539 8.84766 0.352539C9.0625 0.352539 9.25456 0.404622 9.42383 0.508789C9.59961 0.606445 9.73958 0.739909 9.84375 0.90918C9.94792 1.07845 10 1.27051 10 1.48535C10 1.79134 9.87956 2.06478 9.63867 2.30566L2.7832 8.99512L9.63867 15.6846C9.87956 15.9255 10 16.2021 10 16.5146C10 16.723 9.94792 16.9118 9.84375 17.0811C9.73958 17.2568 9.59961 17.3936 9.42383 17.4912C9.25456 17.5954 9.0625 17.6475 8.84766 17.6475C8.53516 17.6475 8.26823 17.5368 8.04688 17.3154L0.439453 9.87402C0.309245 9.74382 0.211589 9.6071 0.146484 9.46387C0.0878906 9.32064 0.0585938 9.16439 0.0585938 8.99512Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                            <button data-v-17b6e95a="">
                                                <div data-v-17b6e95a="" className="icon icon-arrow-right">
                                                    <svg width="10" height="18" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 8.99512C10 9.16439 9.96745 9.32064 9.90234 9.46387C9.83724 9.6071 9.73958 9.74382 9.60938 9.87402L2.00195 17.3154C1.78711 17.5368 1.52018 17.6475 1.20117 17.6475C0.992839 17.6475 0.800781 17.5954 0.625 17.4912C0.449219 17.3936 0.309245 17.2568 0.205078 17.0811C0.107422 16.9118 0.0585938 16.723 0.0585938 16.5146C0.0585938 16.2021 0.175781 15.9255 0.410156 15.6846L7.26562 8.99512L0.410156 2.30566C0.175781 2.06478 0.0585938 1.79134 0.0585938 1.48535C0.0585938 1.27051 0.107422 1.07845 0.205078 0.90918C0.309245 0.739909 0.449219 0.606445 0.625 0.508789C0.800781 0.404622 0.992839 0.352539 1.20117 0.352539C1.52018 0.352539 1.78711 0.459961 2.00195 0.674805L9.60938 8.11621C9.73958 8.24642 9.83724 8.38314 9.90234 8.52637C9.96745 8.6696 10 8.82585 10 8.99512Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div data-v-17b6e95a="" className="weekdays">
                                        <div data-v-17b6e95a="" className="weekday">Mon</div>
                                        <div data-v-17b6e95a="" className="weekday">Tue</div>
                                        <div data-v-17b6e95a="" className="weekday">Wed</div>
                                        <div data-v-17b6e95a="" className="weekday">Thu</div>
                                        <div data-v-17b6e95a="" className="weekday">Fri</div>
                                        <div data-v-17b6e95a="" className="weekday">Sat</div>
                                        <div data-v-17b6e95a="" className="weekday">Sun</div>
                                    </div>
                                    <div data-v-17b6e95a="" className="days">
                                        <div data-v-17b6e95a="" className="day"></div>
                                        <div data-v-17b6e95a="" className="day"></div>
                                        <div data-v-17b6e95a="" className="day"></div>
                                        <div data-v-17b6e95a="" className="day day--disabled">1</div>
                                        <div data-v-17b6e95a="" className="day day--current day--selected"><span data-v-17b6e95a="" className="day-number">2</span></div>
                                        <div data-v-17b6e95a="" className="day">3</div>
                                        <div data-v-17b6e95a="" className="day">4</div>
                                        <div data-v-17b6e95a="" className="day">5</div>
                                        <div data-v-17b6e95a="" className="day">6</div>
                                        <div data-v-17b6e95a="" className="day">7</div>
                                        <div data-v-17b6e95a="" className="day">8</div>
                                        <div data-v-17b6e95a="" className="day">9</div>
                                        <div data-v-17b6e95a="" className="day">10</div>
                                        <div data-v-17b6e95a="" className="day">11</div>
                                        <div data-v-17b6e95a="" className="day">12</div>
                                        <div data-v-17b6e95a="" className="day">13</div>
                                        <div data-v-17b6e95a="" className="day">14</div>
                                        <div data-v-17b6e95a="" className="day">15</div>
                                        <div data-v-17b6e95a="" className="day">16</div>
                                        <div data-v-17b6e95a="" className="day">17</div>
                                        <div data-v-17b6e95a="" className="day">18</div>
                                        <div data-v-17b6e95a="" className="day">19</div>
                                        <div data-v-17b6e95a="" className="day">20</div>
                                        <div data-v-17b6e95a="" className="day">21</div>
                                        <div data-v-17b6e95a="" className="day">22</div>
                                        <div data-v-17b6e95a="" className="day">23</div>
                                        <div data-v-17b6e95a="" className="day">24</div>
                                        <div data-v-17b6e95a="" className="day">25</div>
                                        <div data-v-17b6e95a="" className="day">26</div>
                                        <div data-v-17b6e95a="" className="day">27</div>
                                        <div data-v-17b6e95a="" className="day">28</div>
                                        <div data-v-17b6e95a="" className="day">29</div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-d8c662a8="" data-v-6ecd3229="" className="list-item">
                                <div data-v-d8c662a8="" className="left-col"></div>
                                <div data-v-d8c662a8="" className="right-row">
                                    <div data-v-d8c662a8="" className="body">
                                        <div data-v-d8c662a8="" className="label">End date</div>
                                    </div>
                                    <div data-v-d8c662a8="" className="right">
                                        <div data-v-7e8abacd="" data-v-6ecd3229="" className="picker-compact">3 февр. 2024</div>
                                    </div>
                                </div>
                            </div>
                            <div data-v-bb122c94="" data-v-6ecd3229="" className="list-item-expandable">
                                <div data-v-17b6e95a="" data-v-6ecd3229="" className="date-picker">
                                    <div data-v-17b6e95a="" className="header">
                                        <div data-v-17b6e95a="" className="month-and-year">февраль 2024</div>
                                        <div data-v-17b6e95a="" className="arrows">
                                            <button data-v-17b6e95a="">
                                                <div data-v-17b6e95a="" className="icon icon-arrow-left">
                                                    <svg width="10" height="18" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.0585938 8.99512C0.0585938 8.82585 0.0878906 8.6696 0.146484 8.52637C0.211589 8.38314 0.309245 8.24642 0.439453 8.11621L8.04688 0.674805C8.26823 0.459961 8.53516 0.352539 8.84766 0.352539C9.0625 0.352539 9.25456 0.404622 9.42383 0.508789C9.59961 0.606445 9.73958 0.739909 9.84375 0.90918C9.94792 1.07845 10 1.27051 10 1.48535C10 1.79134 9.87956 2.06478 9.63867 2.30566L2.7832 8.99512L9.63867 15.6846C9.87956 15.9255 10 16.2021 10 16.5146C10 16.723 9.94792 16.9118 9.84375 17.0811C9.73958 17.2568 9.59961 17.3936 9.42383 17.4912C9.25456 17.5954 9.0625 17.6475 8.84766 17.6475C8.53516 17.6475 8.26823 17.5368 8.04688 17.3154L0.439453 9.87402C0.309245 9.74382 0.211589 9.6071 0.146484 9.46387C0.0878906 9.32064 0.0585938 9.16439 0.0585938 8.99512Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                            <button data-v-17b6e95a="">
                                                <div data-v-17b6e95a="" className="icon icon-arrow-right">
                                                    <svg width="10" height="18" viewBox="0 0 10 18" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M10 8.99512C10 9.16439 9.96745 9.32064 9.90234 9.46387C9.83724 9.6071 9.73958 9.74382 9.60938 9.87402L2.00195 17.3154C1.78711 17.5368 1.52018 17.6475 1.20117 17.6475C0.992839 17.6475 0.800781 17.5954 0.625 17.4912C0.449219 17.3936 0.309245 17.2568 0.205078 17.0811C0.107422 16.9118 0.0585938 16.723 0.0585938 16.5146C0.0585938 16.2021 0.175781 15.9255 0.410156 15.6846L7.26562 8.99512L0.410156 2.30566C0.175781 2.06478 0.0585938 1.79134 0.0585938 1.48535C0.0585938 1.27051 0.107422 1.07845 0.205078 0.90918C0.309245 0.739909 0.449219 0.606445 0.625 0.508789C0.800781 0.404622 0.992839 0.352539 1.20117 0.352539C1.52018 0.352539 1.78711 0.459961 2.00195 0.674805L9.60938 8.11621C9.73958 8.24642 9.83724 8.38314 9.90234 8.52637C9.96745 8.6696 10 8.82585 10 8.99512Z"></path>
                                                    </svg>
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div data-v-17b6e95a="" className="weekdays">
                                        <div data-v-17b6e95a="" className="weekday">Mon</div>
                                        <div data-v-17b6e95a="" className="weekday">Tue</div>
                                        <div data-v-17b6e95a="" className="weekday">Wed</div>
                                        <div data-v-17b6e95a="" className="weekday">Thu</div>
                                        <div data-v-17b6e95a="" className="weekday">Fri</div>
                                        <div data-v-17b6e95a="" className="weekday">Sat</div>
                                        <div data-v-17b6e95a="" className="weekday">Sun</div>
                                    </div>
                                    <div data-v-17b6e95a="" className="days">
                                        <div data-v-17b6e95a="" className="day"></div>
                                        <div data-v-17b6e95a="" className="day"></div>
                                        <div data-v-17b6e95a="" className="day"></div>
                                        <div data-v-17b6e95a="" className="day day--disabled">1</div>
                                        <div data-v-17b6e95a="" className="day day--current">2</div>
                                        <div data-v-17b6e95a="" className="day day--selected"><span data-v-17b6e95a="" className="day-number">3</span></div>
                                        <div data-v-17b6e95a="" className="day">4</div>
                                        <div data-v-17b6e95a="" className="day">5</div>
                                        <div data-v-17b6e95a="" className="day">6</div>
                                        <div data-v-17b6e95a="" className="day">7</div>
                                        <div data-v-17b6e95a="" className="day">8</div>
                                        <div data-v-17b6e95a="" className="day">9</div>
                                        <div data-v-17b6e95a="" className="day">10</div>
                                        <div data-v-17b6e95a="" className="day">11</div>
                                        <div data-v-17b6e95a="" className="day">12</div>
                                        <div data-v-17b6e95a="" className="day">13</div>
                                        <div data-v-17b6e95a="" className="day">14</div>
                                        <div data-v-17b6e95a="" className="day">15</div>
                                        <div data-v-17b6e95a="" className="day">16</div>
                                        <div data-v-17b6e95a="" className="day">17</div>
                                        <div data-v-17b6e95a="" className="day">18</div>
                                        <div data-v-17b6e95a="" className="day">19</div>
                                        <div data-v-17b6e95a="" className="day">20</div>
                                        <div data-v-17b6e95a="" className="day">21</div>
                                        <div data-v-17b6e95a="" className="day">22</div>
                                        <div data-v-17b6e95a="" className="day">23</div>
                                        <div data-v-17b6e95a="" className="day">24</div>
                                        <div data-v-17b6e95a="" className="day">25</div>
                                        <div data-v-17b6e95a="" className="day">26</div>
                                        <div data-v-17b6e95a="" className="day">27</div>
                                        <div data-v-17b6e95a="" className="day">28</div>
                                        <div data-v-17b6e95a="" className="day">29</div>
                                    </div>
                                </div>
                            </div>
                            <a data-v-d8c662a8="" data-v-6ecd3229="" href="/location" className="list-item">
                                <div data-v-d8c662a8="" className="left-col"></div>
                                <div data-v-d8c662a8="" className="right-row">
                                    <div data-v-d8c662a8="" className="body">
                                        <div data-v-d8c662a8="" className="label">Location</div>
                                    </div>
                                    <div data-v-d8c662a8="" className="right"><span data-v-d8c662a8="" className="right-icon-label">London</span>
                                        <div data-v-d8c662a8="" className="icon icon-chevron-right">
                                            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 1L6 6L1 11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </a>                           
                        </div>
                    </div>
                </div>

                <div className='button-block'>
                    <button className="button button-toggle-left">Отправить</button>
                    <button className="button button-toggle-right">Доставить</button>
                </div>
            </div>
            
        </div>
    );
}

export default TakeMeType;
