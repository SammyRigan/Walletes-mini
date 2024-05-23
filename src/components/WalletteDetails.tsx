import { IonFab, IonFabButton, IonIcon, IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';
import React from 'react';

import styles from './WalletteDetails.module.scss';
import budgetStyles from '../pages/Budget.module.scss';
import { add, carSport, fastFood, pizza, receipt } from 'ionicons/icons';


const WalletteDeatilsComponent: React.FC = () => {
    return (
        <div className="mod-wrap">
            <div className="space"></div>
            <div className="segs pad">
                <IonSegment value="total" mode="ios" className={styles.segment}>
                    <IonSegmentButton value="total">
                        <IonLabel>Total</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="month">
                        <IonLabel>This Month</IonLabel>
                    </IonSegmentButton>
                    <IonSegmentButton value="week">
                        <IonLabel>This Week</IonLabel>
                    </IonSegmentButton>
                </IonSegment>
            </div>

            <div className="space"></div>
            <div className="space"></div>

            <div className={budgetStyles.hd}>
                <small>Total</small>
                <h4>$50,306</h4>
                <span><small>Remaining Balance</small><>&nbsp;</><i>$3,478</i></span>
            </div>

            <div className="space"></div>
            <div className="space"></div>

            <div className="pad">
                <div className={styles.oop}>
                    <div>
                        <p>$3,478</p>
                        <small>30% spent</small>
                    </div>
                    <span><span style={{'width': '30%'}}></span></span>
                </div>
            </div>
            
            <div className="pad">
                <div className="space"></div>
                <div className="space hr"></div>
            </div>

            <div className="hd-txt">
                <h4>Transactions</h4>
            </div>
            <div className="dt pad"><small>Today</small></div>
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
            </div>
            
            <div className="dt pad">
                <small>7 Sep 2023</small>
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
            </div>

            <div className="t-fab">
                <IonFab slot="fixed" vertical="bottom" horizontal="end">
                    <IonFabButton color={"secondary"} id="add-transaction">
                        <IonIcon icon={add}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </div>
        </div>
    );
}

export default WalletteDeatilsComponent;