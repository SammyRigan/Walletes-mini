import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';

import styles from './Budget.module.scss';

const Budget: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <div className="wrap">
                    <Header></Header>
                    <div className="space"></div>
                    <div className={styles.budgets}>
                        <div className={styles.budget}>
                            <div className={styles.hd}>
                                <small>Monthly</small>
                                <h4>$50,306</h4>
                            </div>
                            <span><small>Planned expenses</small><hr /><small>$50,306</small></span>
                            <span><small>Already</small><hr /><small>$21,521</small></span>
                            <span><small>Remaing</small><hr /><small>$28,785</small></span>
                            <span><small>Expected Income</small><hr /><small>$28,785</small></span>
                        </div>
                        <div className={styles.budget}>
                            <div className={styles.hd}>
                                <small>Weekly</small>
                                <h4>$50,306</h4>
                            </div>
                            <span><small>Planned expenses</small><hr /><small>$50,306</small></span>
                            <span><small>Already</small><hr /><small>$21,521</small></span>
                            <span><small>Remaing</small><hr /><small>$28,785</small></span>
                            <span><small>Expected Income</small><hr /><small>$28,785</small></span>
                        </div>
                        <div className={styles.budget}>
                            <div className={styles.hd}>
                                <small>Daily</small>
                                <h4>$50,306</h4>
                            </div>
                            <span><small>Planned expenses</small><hr /><small>$50,306</small></span>
                            <span><small>Already</small><hr /><small>$21,521</small></span>
                            <span><small>Remaing</small><hr /><small>$28,785</small></span>
                            <span><small>Expected Income</small><hr /><small>$28,785</small></span>
                        </div>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
}

export default Budget;