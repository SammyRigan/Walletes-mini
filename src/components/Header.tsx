import { IonImg, IonAvatar, IonModal, IonIcon } from '@ionic/react';
import React, { useRef, useState } from 'react';

import AvatarImg from '../imgs/man.png';
import { arrowBackOutline } from 'ionicons/icons';
import IPreferences from '../pages/IPreferences';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    // const modal = useRef<HTMLIonModalElement>(null);
  
    function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
        const res = ev;
    }

    return (
        <div className="head">
            <div className="menuButton">
                <span></span>
                <span></span>
            </div>
            <IonAvatar onClick={() => setIsOpen(true)}>
                <IonImg src={AvatarImg} alt="Profile Image"></IonImg>
            </IonAvatar>

            
            <IonModal  isOpen={isOpen} onWillDismiss={(ev) => onWillDismiss(ev)}>
                <div className="mod-head">
                    <IonIcon icon={arrowBackOutline} onClick={() => setIsOpen(false)}></IonIcon>
                    <h4>Transportation</h4>
                </div>
                <IPreferences></IPreferences>
            </IonModal>
        </div>
    );
}

export default Header;