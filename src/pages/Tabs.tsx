import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import { Route, Redirect } from 'react-router';
import DashboardPage from './Dashboard';
import PreferencesPage from './IPreferences';
import CardsPage from './Cards';
import CardDetailsPage from './CardDetails';

import './Tabs.scss';
import { useThemeContext } from '../context/ThemeContext';

const Tabs: React.FC = () => {

    const [darkMode] = useThemeContext();

    return (
        <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            {/*
            Use the render method to reduce the number of renders your component will have due to a route change.
  
            Use the component prop when your component depends on the RouterComponentProps passed in automatically.
          */}
            <Route exact path="/tabs/dashboard" render={() => <DashboardPage />} />

            <Route exact path="/tabs/cards" render={() => <CardsPage />} />
            <Route exact path="/tabs/cards/details" render={() => <CardDetailsPage />} />

            <Route exact path="/tabs/preferences" render={() => <PreferencesPage />} />
            <Route exact path="/tabs">
              <Redirect to="/tabs/dashboard" />
            </Route>
            {/* 
            <Route path="/activities" render={() => <ActivitiesPage />} exact={true} />
            <Route path="/budget" render={() => <BudgetPage />} exact={true} /> */}
          </IonRouterOutlet>
  
          <IonTabBar slot="bottom">
            <IonTabButton tab="dashboard" href="/tabs/dashboard">
                <svg width="23" height="17" viewBox="0 0 23 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 3L3 16H22V7.86957L14 3Z" fill="#960C99"/>
                    <mask id="path-2-inside-1_11_102" fill="white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M23 8.6087C23 7.954 22.6796 7.34076 22.1421 6.96688L12.6421 0.358189C11.9556 -0.119397 11.0444 -0.119396 10.3579 0.35819L0.857871 6.96689C0.320429 7.34076 0 7.954 0 8.6087V14.5637C0 15.6682 0.89543 16.5637 2 16.5637H21C22.1046 16.5637 23 15.6682 23 14.5637V8.6087Z"/>
                    </mask>
                    <path d="M0.857871 6.96689L-0.284258 5.32507L0.857871 6.96689ZM22.1421 6.96688L23.2843 5.32507L22.1421 6.96688ZM10.3579 0.35819L9.21574 -1.28362L10.3579 0.35819ZM11.5 2L21 8.6087L23.2843 5.32507L13.7843 -1.28362L11.5 2ZM2 8.6087L11.5 2L9.21574 -1.28362L-0.284258 5.32507L2 8.6087ZM2 14.5637V8.6087H-2V14.5637H2ZM21 14.5637H2V18.5637H21V14.5637ZM21 8.6087V14.5637H25V8.6087H21ZM21 18.5637C23.2091 18.5637 25 16.7728 25 14.5637H21V18.5637ZM-2 14.5637C-2 16.7728 -0.20914 18.5637 2 18.5637V14.5637H2H-2ZM-0.284258 5.32507C-1.35914 6.07282 -2 7.29931 -2 8.6087H2L-0.284258 5.32507ZM21 8.6087V8.6087H25C25 7.29931 24.3591 6.07282 23.2843 5.32507L21 8.6087ZM13.7843 -1.28362C12.4112 -2.23879 10.5888 -2.23879 9.21574 -1.28362L11.5 2L11.5 2L13.7843 -1.28362Z" fill={darkMode.darkMode ? '#ffffff' : '#171044'} mask="url(#path-2-inside-1_11_102)"/>
                </svg>
            </IonTabButton>
  
            <IonTabButton tab="library" href="/tabs/library">
                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.0584 1.81727L4.26901 14.2665L10.4213 14.8985L15.4391 11.1472L14.5863 5.20815L10.0584 1.81727Z" fill="#960C99"/>
                    <circle cx="8" cy="8" r="7" stroke={darkMode.darkMode ? '#ffffff' : '#171044'} strokeWidth="2"/>
                    <path d="M10 1V15" stroke={darkMode.darkMode ? '#ffffff' : '#171044'} strokeLinecap="round"/>
                    <path d="M2 18H14" stroke={darkMode.darkMode ? '#ffffff' : '#171044'} strokeLinecap="round"/>
                </svg>
            </IonTabButton>
  
            <IonTabButton tab="cards" href="/tabs/cards">
              <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.7945 2.42956L16.9479 1.13809L11.8486 8.4259L6.74942 15.7137L21.5 14.5L22.7945 12L22.7945 2.42956Z" fill="#960C99"/>
                <rect x="1" y="1" width="22" height="14" rx="3" stroke={darkMode.darkMode ? '#ffffff' : '#171044'} strokeWidth="2"/>
                <path d="M3 5H21" stroke={darkMode.darkMode ? '#ffffff' : '#171044'} strokeLinecap="round"/>
                </svg>
            </IonTabButton>
  
            <IonTabButton tab="preferences" href="/tabs/preferences">
                <svg width="27" height="18" viewBox="0 0 27 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.5 5.00003L19.5001 4.42959L14.8486 10.4259L11 15L24 15L25.7944 15L25.5 5.00003Z" fill="#960C99"/>
                    <path d="M1.63558 4.14645C1.44032 4.34171 1.44032 4.65829 1.63558 4.85355L4.81756 8.03553C5.01283 8.2308 5.32941 8.2308 5.52467 8.03553C5.71993 7.84027 5.71993 7.52369 5.52467 7.32843L2.69624 4.5L5.52467 1.67157C5.71993 1.47631 5.71993 1.15973 5.52467 0.964466C5.32941 0.769204 5.01283 0.769204 4.81756 0.964466L1.63558 4.14645ZM25.3644 4.85355C25.5597 4.65829 25.5597 4.34171 25.3644 4.14645L22.1824 0.964466C21.9872 0.769204 21.6706 0.769204 21.4753 0.964466C21.2801 1.15973 21.2801 1.47631 21.4753 1.67157L24.3038 4.5L21.4753 7.32843C21.2801 7.52369 21.2801 7.84027 21.4753 8.03553C21.6706 8.2308 21.9872 8.2308 22.1824 8.03553L25.3644 4.85355ZM1.98914 5H25.0109V4H1.98914V5Z"  stroke={darkMode.darkMode ? '#ffffff' : '#171044'}/>
                    <path d="M1.98914 14.5H25.0109"  stroke={darkMode.darkMode ? '#ffffff' : '#171044'} strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    );
} 

export default Tabs;