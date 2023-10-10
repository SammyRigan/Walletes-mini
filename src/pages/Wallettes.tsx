import { IonContent, IonFab, IonFabButton, IonIcon, IonModal, IonPage } from '@ionic/react';
import React, { useRef, useState } from 'react';
import { add, arrowBackOutline, carSport, fastFood, pizza, receipt } from 'ionicons/icons';
import Header from '../components/Header';

import styles from './Wallettes.module.scss';
import budgetStyles from './Budget.module.scss';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';
import WalletteDeatilsComponent from '../components/WalletteDetails';

const Wallettes: React.FC = () => {

    const modal = useRef<HTMLIonModalElement>(null);
    const input = useRef<HTMLIonInputElement>(null);
  
    const [message, setMessage] = useState(
      'This modal example uses triggers to automatically open a modal when the button is clicked.'
    );
  
    function confirm() {
      modal.current?.dismiss(input.current?.value, 'confirm');
    }
  
    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
      if (ev.detail.role === 'confirm') {
        setMessage(`Hello, ${ev.detail.data}!`);
      }
    }

    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="wrap">
                    <Header></Header>
                    <div className="space"></div>
                    
                    <div className={budgetStyles.hd}>
                        <small>Total</small>
                        <h4>$50,306</h4>
                        <span><small>Remaining Balance</small><>&nbsp;</><i>$3,478</i></span>
                    </div>
                    
                    <div className="space"></div>

                    <div className={styles.pie}>
                        <svg width="45%" height="45%" viewBox="0 0 42 42" className="donut">
                            <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="#fff"></circle>
                            <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" strokeWidth="10"></circle>
                            <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="var(--ion-color-secondary)" strokeWidth="10" strokeDasharray="65 35" strokeDashoffset="0"></circle>
                        </svg>
                    </div>

                    <div className="space"></div>
                    <div className="space"></div>

                    <div className="list">
                        <div className="item" id="open-wallette">
                            <div className="ic">
                                <IonIcon icon={carSport}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Transportation</p>
                                <span className='mm'><span style={{'width': '20%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$320</p>
                                <small>5%</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={receipt}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Bills & Payments</p>
                                <span className='mm'><span style={{'width': '60%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$210</p>
                                <small>20%</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={fastFood}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Food</p>
                                <span className='mm'><span style={{'width': '75%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$506</p>
                                <small>32%</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={pizza}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Snacks</p>
                                <span className='mm'><span style={{'width': '30%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$128</p>
                                <small>16%</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={carSport}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Transportation</p>
                                <span className='mm'><span style={{'width': '20%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$320</p>
                                <small>5%</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={receipt}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Bills & Payments</p>
                                <span className='mm'><span style={{'width': '60%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$210</p>
                                <small>20%</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={fastFood}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Food</p>
                                <span className='mm'><span style={{'width': '75%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$506</p>
                                <small>32%</small>
                            </div>
                        </div>
                        <div className="item">
                            <div className="ic">
                                <IonIcon icon={pizza}></IonIcon>
                            </div>
                            <div className="desc">
                                <p>Snacks</p>
                                <span className='mm'><span style={{'width': '30%'}}></span></span>
                            </div>
                            <div className="px">
                                <p>$128</p>
                                <small>16%</small>
                            </div>
                        </div>
                    </div>
                </div>
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton color={"secondary"}>
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>

                <IonModal ref={modal} trigger="open-wallette" onWillDismiss={(ev) => onWillDismiss(ev)}>
                    <div className="mod-head">
                        <IonIcon icon={arrowBackOutline} onClick={() => modal.current?.dismiss()}></IonIcon>
                        <h4>Transportation</h4>
                    </div>
                    <WalletteDeatilsComponent></WalletteDeatilsComponent>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}

export default Wallettes;