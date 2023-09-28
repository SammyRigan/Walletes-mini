import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { carSport, chevronDown, fastFood, pizza, receipt } from "ionicons/icons";

// Import Swiper styles
import 'swiper/css';

import './CardDetails.scss';

import AvatarImg from '../imgs/man.png';
import VisaLogo from '../imgs/visa.png';
import MasterCardLogo from '../imgs/mastercard.png';
import NailIcon from '../imgs/nail.png';

import { IonAvatar, IonButton, IonContent, IonIcon, IonImg, IonPage } from "@ionic/react";

const CardDetails: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="wrap">
                    <div className="head">
                        <div className="menuButton">
                            <span></span>
                            <span></span>
                        </div>
                        <IonAvatar>
                            <IonImg src={AvatarImg} alt="Profile Image"></IonImg>
                        </IonAvatar>
                    </div>
                    <div className="cardSwipe">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1.05}
                            centeredSlides={true}
                            centerInsufficientSlides={false}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide>
                                <IonButton className="cardItem" style={{'--background': '#171044'}}>
                                    <div className="cardWrap">
                                        <div className="cardTop">
                                            <span>
                                                <h4>$50,000</h4>
                                                <small>Current Balance</small>
                                            </span>
                                            <IonImg src={VisaLogo} alt="Visa Logo"></IonImg>
                                        </div>
                                        <div className="cardMiddle">
                                            <h4>2456<i>****</i><i>****</i>7809</h4>
                                        </div>
                                        <div className="cardBottom">
                                            <span>
                                                <small>Expires<br></br>in</small>
                                                <h4>12/23</h4>
                                            </span>
                                            <IonImg src={NailIcon}></IonImg>
                                        </div>
                                    </div>
                                </IonButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <IonButton className="cardItem" style={{'--background': '#176181'}}>
                                    <div className="cardWrap">
                                        <div className="cardTop">
                                            <span>
                                                <h4>$50,000</h4>
                                                <small>Current Balance</small>
                                            </span>
                                            <IonImg src={VisaLogo} alt="Visa Logo"></IonImg>
                                        </div>
                                        <div className="cardMiddle">
                                            <h4>2456<i>****</i><i>****</i>7809</h4>
                                        </div>
                                        <div className="cardBottom">
                                            <span>
                                                <small>Expires<br></br>in</small>
                                                <h4>12/23</h4>
                                            </span>
                                            <IonImg src={NailIcon}></IonImg>
                                        </div>
                                    </div>
                                </IonButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <IonButton className="cardItem" style={{'--background': '#420B43'}}>
                                    <div className="cardWrap">
                                        <div className="cardTop">
                                            <span>
                                                <h4>$50,000</h4>
                                                <small>Current Balance</small>
                                            </span>
                                            <IonImg src={MasterCardLogo} alt="Visa Logo"></IonImg>
                                        </div>
                                        <div className="cardMiddle">
                                            <h4>2456<i>****</i><i>****</i>7809</h4>
                                        </div>
                                        <div className="cardBottom">
                                            <span>
                                                <small>Expires<br></br>in</small>
                                                <h4>12/23</h4>
                                            </span>
                                            <IonImg src={NailIcon}></IonImg>
                                        </div>
                                    </div>
                                </IonButton>
                            </SwiperSlide>
                            <SwiperSlide>
                                <IonButton className="cardItem" style={{'--background': '#337468'}}>
                                    <div className="cardWrap">
                                        <div className="cardTop">
                                            <span>
                                                <h4>$50,000</h4>
                                                <small>Current Balance</small>
                                            </span>
                                            <IonImg src={VisaLogo} alt="Visa Logo"></IonImg>
                                        </div>
                                        <div className="cardMiddle">
                                            <h4>2456<i>****</i><i>****</i>7809</h4>
                                        </div>
                                        <div className="cardBottom">
                                            <span>
                                                <small>Expires<br></br>in</small>
                                                <h4>12/23</h4>
                                            </span>
                                            <IonImg src={NailIcon}></IonImg>
                                        </div>
                                    </div>
                                </IonButton>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    
                    <div className="hd-txt">
                        <h4>Transactions</h4>
                        <span><small>Last 7 days</small><IonIcon icon={chevronDown}></IonIcon></span>
                    </div>
                    <div className="list">
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={carSport}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Fuel for car</p>
                                <small>Transportation</small>
                            </div>
                            <div className="px">
                                <p>$50</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={receipt}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Water bill</p>
                                <small>Bills & Payments</small>
                            </div>
                            <div className="px">
                                <p>$22</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={fastFood}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Burger from Carbo Corso</p>
                                <small>Food</small>
                            </div>
                            <div className="px">
                                <p>$12</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={pizza}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Orange and Ginger Juice</p>
                                <small>Snacks</small>
                            </div>
                            <div className="px">
                                <p>$2.50</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={carSport}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Fuel for car</p>
                                <small>Transportation</small>
                            </div>
                            <div className="px">
                                <p>$50</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={receipt}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Water bill</p>
                                <small>Bills & Payments</small>
                            </div>
                            <div className="px">
                                <p>$22</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={fastFood}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Burger from Carbo Corso</p>
                                <small>Food</small>
                            </div>
                            <div className="px">
                                <p>$12</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={pizza}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Orange and Ginger Juice</p>
                                <small>Snacks</small>
                            </div>
                            <div className="px">
                                <p>$2.50</p>
                                <small>12/12/23</small>
                            </div>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default CardDetails;