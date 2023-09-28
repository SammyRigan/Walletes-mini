import React, { useState } from 'react';
import { IonSegment, IonSegmentButton, IonLabel, IonAvatar, IonButton, IonContent, IonIcon, IonImg, IonPage } from '@ionic/react';
import { Dropdown } from 'react-bootstrap';
import { chevronDownOutline, addOutline, carSport, fastFood, receipt, pizza } from "ionicons/icons";
import './Dashboard.scss';

import AvatarImg from '../imgs/man.png';

const Dashboard: React.FC = () => {

    const [view, toggleView] = useState('analytics');


    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="wrap dash">
                    <div className="top">
                        <div className="head">
                            <div className="menuButton dash">
                                <span></span>
                                <span></span>
                            </div>
                            <IonAvatar>
                                <IonImg src={AvatarImg}></IonImg>
                            </IonAvatar>
                        </div>
                        <div className="stat">
                            <Dropdown>
                                <Dropdown.Toggle >
                                    <span><small>Total Expenses</small><IonIcon icon={chevronDownOutline}></IonIcon></span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <h4>$24,509</h4>
                            <small>Remaining Balance <i>$3,478</i></small>
                        </div>
                        <div className="addBtn">
                            <span></span>
                            <IonButton className='icon' color={'secondary'}><IonIcon icon={addOutline}></IonIcon></IonButton>
                        </div>
                    </div>

                    <div className="bal">
                        <small>Week&apos;s Balance</small>
                        <h4>+ $50,000</h4>
                    </div>

                    <div className="swh">
                        <IonSegment value="default" mode="ios">
                            <IonSegmentButton value="default">
                                <IonLabel>
                                    <span>
                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.60465 6.41667L5.98078 6.7461L5.599 7.182L5.2237 6.74051L5.60465 6.41667ZM10.3488 1L9.97271 0.670567L10.3512 0.238466L10.727 0.67287L10.3488 1ZM19.4987 11.0361C19.4788 11.3115 19.2394 11.5186 18.9639 11.4987L14.4757 11.1741C14.2002 11.1542 13.9931 10.9148 14.013 10.6393C14.0329 10.3639 14.2724 10.1568 14.5478 10.1767L18.5374 10.4652L18.8259 6.47566C18.8458 6.20023 19.0852 5.99311 19.3607 6.01302C19.6361 6.03294 19.8432 6.27236 19.8233 6.54779L19.4987 11.0361ZM1.38095 0.676156L5.9856 6.09282L5.2237 6.74051L0.619047 1.32384L1.38095 0.676156ZM5.22852 6.08723L9.97271 0.670567L10.725 1.32943L5.98078 6.7461L5.22852 6.08723ZM10.727 0.67287L19.3781 10.6729L18.6219 11.3271L9.9707 1.32713L10.727 0.67287Z" fill="white"/>
                                        </svg>
                                        <small>Expenses</small>
                                    </span>
                                </IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="segment">
                                <IonLabel>
                                    <span>
                                        <svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.60465 5.58333L5.98078 5.2539L5.599 4.818L5.2237 5.25949L5.60465 5.58333ZM10.3488 11L9.97271 11.3294L10.3512 11.7615L10.727 11.3271L10.3488 11ZM19.4987 0.963935C19.4788 0.688511 19.2394 0.481384 18.9639 0.501302L14.4757 0.825891C14.2002 0.84581 13.9931 1.08523 14.013 1.36065C14.0329 1.63608 14.2724 1.8432 14.5478 1.82329L18.5374 1.53476L18.8259 5.52434C18.8458 5.79977 19.0852 6.00689 19.3607 5.98698C19.6361 5.96706 19.8432 5.72764 19.8233 5.45221L19.4987 0.963935ZM1.38095 11.3238L5.9856 5.90718L5.2237 5.25949L0.619047 10.6762L1.38095 11.3238ZM5.22852 5.91277L9.97271 11.3294L10.725 10.6706L5.98078 5.2539L5.22852 5.91277ZM10.727 11.3271L19.3781 1.32713L18.6219 0.67287L9.9707 10.6729L10.727 11.3271Z" fill="white"/>
                                        </svg>
                                        <small>Income</small>
                                    </span>
                                </IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </div>

                    <div className="graph">
                        <div className="opts">
                            <small style={{margin: '0 auto 0 0'}}>Exp: $25k</small>
                            <small className={view === 'analytics' ? 'act' : ''} onClick={() => toggleView('analytics')}>Analytics</small>
                            <small className={view === 'list' ? 'act' : ''} onClick={() => toggleView('list')}>List</small>
                        </div>
                        <div className="bars" hidden={view === 'list'}>
                            <div className="bar">
                                <div className="stick">
                                    <div className="fl" style={{height: '30%'}}></div>
                                </div>
                                <small>Mon</small>
                            </div>
                            <div className="bar">
                                <div className="stick">
                                    <div className="fl" style={{height: '70%'}}></div>
                                </div>
                                <small>Tue</small>
                            </div>
                            <div className="bar">
                                <div className="stick">
                                    <div className="fl" style={{height: '90%'}}></div>
                                </div>
                                <small>Wed</small>
                            </div>
                            <div className="bar">
                                <div className="stick">
                                    <div className="fl" style={{height: '20%'}}></div>
                                </div>
                                <small>Thu</small>
                            </div>
                            <div className="bar">
                                <div className="stick">
                                    <div className="fl" style={{height: '60%'}}></div>
                                </div>
                                <small>Fri</small>
                            </div>
                            <div className="bar act">
                                <div className="stick">
                                    <div className="fl" style={{height: '80%'}}></div>
                                </div>
                                <small>Sat</small>
                            </div>
                            <div className="bar">
                                <div className="stick">
                                    <div className="fl" style={{height: 0}}></div>
                                </div>
                                <small>Sun</small>
                            </div>
                        </div>
                        <div className="list" hidden={view === 'analytics'}>
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
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Dashboard;