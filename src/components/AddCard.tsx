import { IonImg, IonButton, IonContent, IonIcon, IonPage, IonInput, IonSelect, IonSelectOption } from "@ionic/react";
import { calendar, card, caretForward, chevronDown, close, closeOutline } from "ionicons/icons";
import React, { useRef, useState } from "react";

// import AvatarImg from '../imgs/man.png';
import VisaLogo from '../imgs/visa.png';
import MasterCardLogo from '../imgs/mastercard.png';
import EmvImage from '../imgs/emv.png';
// import NailIcon from '../imgs/nail.png';
import Pattern1 from '../imgs/p1.png';
import Pattern2 from '../imgs/p2.png';
import Pattern3 from '../imgs/p3.png';
import Pattern4 from '../imgs/p4.png';
import Pattern5 from '../imgs/p5.png';
import Pattern6 from '../imgs/p6.png';

interface ExpiryDate {
    month: string;
    year: string;
}

const AddCardComponent: React.FC = () => {

    const colors = [
        '#171044',
        '#176181',
        '#420B43',
        '#337468'
    ]

    const patterns = [
        'none',
        Pattern1,
        Pattern2,
        Pattern3,
        Pattern4,
        Pattern5,
        Pattern6,
    ]

    const [cardType, setCardType] = useState('visa');
    const [cardHolder, setCardHolder] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [cardDate, setCardDate] = useState('');
    const [cardColor, setCardColor] = useState(colors[0]);
    const [cardPattern, setCardPattern] = useState(patterns[0]);

    const formatCardNumber = (text: string) => {
        setCardNumber(`${text.length === 4 || text.length === 9 || text.length === 14 ? text + ' ' : text}`);
    }

    const formatCardDate = (text: string) => {
        setCardDate(`${text.length === 2 ? text + ' / ' : text}`);
    }

    const switchColor = () => {
        const next = colors.indexOf(cardColor) === colors.length - 1 ? 0 : colors.indexOf(cardColor) + 1;
        setCardColor(colors[next]);
    }

    const switchPatterns = () => {
        const next = patterns.indexOf(cardPattern) === patterns.length - 1 ? 0 : patterns.indexOf(cardPattern) + 1;
        setCardPattern(patterns[next]);
    }

    return (
        // <IonPage>
        //     <IonContent fullscreen>
                <div className="mod-wrap">
                    <div className="mod-body pad">
                        <IonButton className="cardItem" style={{'--background': cardColor}}>
                            <div className="cardWrap" style={{'backgroundImage': `url(${cardPattern})`, 'backgroundPosition': 'center', 'backgroundSize': 'cover'}}>
                                <div className="cardTop">
                                    <span>
                                        <h4>New Card</h4>
                                        <small>Current Balance</small>
                                    </span>
                                    <IonImg src={cardType === 'visa' ? VisaLogo : MasterCardLogo} alt={`${cardType} Logo`}></IonImg>
                                </div>
                                <div className="emv">
                                    <IonImg src={EmvImage}></IonImg>
                                </div>
                                <div className="cardMiddle">
                                    <h4>{cardNumber ? cardNumber.slice(0, 4) : '0000'}<i>{cardNumber ? cardNumber.slice(4, 9) : '0000'}</i><i>{cardNumber ? cardNumber.slice(9, 14) : '0000'}</i>{cardNumber ? cardNumber.slice(14, 19) : '0000'}</h4>
                                </div>
                                <div className="cardBottom">
                                    <h4 className="cardHd">{cardHolder ? cardHolder : 'John Ham'}</h4>
                                    <span>
                                        <small>Expires<br></br>end
                                        <IonIcon icon={caretForward}></IonIcon></small>
                                        <h4>{cardDate ? cardDate : 'MM/YY'}</h4>
                                    </span>
                                </div>
                            </div>
                        </IonButton>
                        <div className="form">
                            <h4 className="form-hd">Card details</h4>

                            <div className="form-wrap">
                                <div className={`input-wrap ${cardType && 'checked'}`}>
                                    <IonSelect placeholder="Select card type" value={cardType} onIonChange={(ev) => setCardType(ev.detail.value as string)}>
                                        <IonSelectOption value="visa">Visa</IonSelectOption>
                                        <IonSelectOption value="mastercard">Mastercard</IonSelectOption>
                                    </IonSelect>
                                    <span className="in-tl">
                                        <small>Card Type</small>
                                    </span>
                                    <span className="in-ic">
                                        <IonIcon icon={chevronDown}></IonIcon>
                                    </span>
                                </div>
                                <div className={`input-wrap ${cardHolder && 'checked'}`}>
                                    <IonInput type="text" value={cardHolder} onIonInput={(ev) => setCardHolder(ev.detail.value as string)}></IonInput>
                                    <span className="in-tl">
                                        <small>Card Holder</small>
                                    </span>
                                </div>
                                <div className={`input-wrap ${cardNumber && 'checked'}`}>
                                    <IonInput placeholder="0000 0000 0000 0000" value={cardNumber} onIonInput={(ev) => formatCardNumber(ev.detail.value as string)} maxlength={19}></IonInput>
                                    <span className="in-tl">
                                        <small>Card Number</small>
                                    </span>
                                    <span className="in-ic">
                                        <IonIcon icon={card}></IonIcon>
                                    </span>
                                </div>
                                <div className={`input-wrap ${cardDate && 'checked'}`}>
                                    <IonInput placeholder="MM / YY" value={cardDate} onIonInput={(ev) => formatCardDate(ev.detail.value as string)} maxlength={7}></IonInput>
                                    <span className="in-tl">
                                        <small>Expiry Date</small>
                                    </span>
                                    <span className="in-ic">
                                        <IonIcon icon={calendar}></IonIcon>
                                    </span>
                                </div>
                                <div className="split">
                                    <IonButton fill="outline" className="input-wrap opt" onClick={switchColor}>
                                        <div>
                                            <span className="color" style={{'backgroundColor': cardColor}}></span>
                                            <p>Change Color</p>
                                        </div>
                                    </IonButton>
                                    <IonButton fill="outline" className="input-wrap opt" onClick={switchPatterns}>
                                        <div>
                                            <span className="color" style={{'backgroundImage': `url(${cardPattern})`, 'backgroundPosition': 'center', 'backgroundSize': 'cover', 'border': 'solid 1px #000'}}></span>
                                            <p>Change Pattern</p>
                                        </div>
                                    </IonButton>
                                </div>
                            </div>

                            <IonButton className="save">Save</IonButton>
                        </div>
                    </div>
                </div>
        //     </IonContent>
        // </IonPage>
    );
}

export default AddCardComponent;