import React, { useRef, useState } from "react";
import { IonModal, IonAvatar, IonButton, IonContent, IonFab, IonFabButton, IonIcon, IonImg, IonPage } from "@ionic/react";
import { OverlayEventDetail } from '@ionic/core/components';
import { add, closeOutline } from "ionicons/icons";
import './Cards.scss';

import AvatarImg from '../imgs/man.png';
import VisaLogo from '../imgs/visa.png';
import MasterCardLogo from '../imgs/mastercard.png';
import NailIcon from '../imgs/nail.png';
import AddCard from "../components/AddCard";

const Cards: React.FC = () => {
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
                    <div className="head">
                        <div className="menuButton">
                            <span></span>
                            <span></span>
                        </div>
                        <IonAvatar>
                            <IonImg src={AvatarImg} alt="Profile Image"></IonImg>
                        </IonAvatar>
                    </div>
                    <div className="cards">
                        <IonButton className="cardItem" style={{'--background': '#171044'}} routerLink="/tabs/cards/details">
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
                    </div>
                </div>
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton color={"secondary"} id="open-modal">
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>

                <IonModal ref={modal} trigger="open-modal" onWillDismiss={(ev) => onWillDismiss(ev)}>
                    <div className="mod-head">
                        <IonIcon icon={closeOutline} onClick={() => modal.current?.dismiss()}></IonIcon>
                        <h4>Add Card</h4>
                    </div>
                    <AddCard></AddCard>
                </IonModal>
            </IonContent>
    </IonPage>
    );
}

export default Cards;