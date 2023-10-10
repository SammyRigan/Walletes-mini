import React, { useEffect } from 'react';
import { IonContent, IonPage, IonSegment, IonSegmentButton, IonLabel, type SegmentCustomEvent } from '@ionic/react';
import { Preferences } from '@capacitor/preferences';

import './IPreferences.scss';
import { useThemeContext } from '../context/ThemeContext';

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
// let prefMatch = prefersDark.matches;

const IPreferences: React.FC = () => {

    let selectedTheme: string | null = '';

    useEffect(() => {
      Preferences.get({key: 'theme'}).then(ref => {
        selectedTheme = ref.value;
      });
    }, []);

    const saveTheme = (state: string) => {
      Preferences.set({key: 'theme', value: state});
      selectedTheme = state;
    }

    const [darkMode, setDarkMode] = useThemeContext();

    // const [themeToggle, setThemeToggle] = useState(darkMode.darkMode);

    // Listen for the toggle check/uncheck to toggle the dark theme
    const toggleChange = (ev: SegmentCustomEvent) => {
      let change;
      const segEv = ev.detail.value as string;
      if (segEv === 'light') {
        change = false;
      } else if (segEv === 'dark') {
        change = true;
      } else {
        change = prefersDark.matches;
        // Listen for changes to the prefers-color-scheme media query
        prefersDark.addEventListener('change', (mediaQuery) => initializeDarkTheme(mediaQuery.matches));
      }
      saveTheme(segEv);
      toggleDarkTheme(change);
      // console.log(selectedTheme);
    };
  
    // Add or remove the "dark" class on the document body
    const toggleDarkTheme = (shouldAdd: boolean) => {
      document.body.classList.toggle('dark', shouldAdd);
      setDarkMode({darkMode: shouldAdd});
    };
  
    // Check/uncheck the toggle and update the theme based on isDark
    const initializeDarkTheme = (isDark: boolean) => {
      toggleDarkTheme(isDark);
    };

    return (
        // <IonPage>
        //     <IonContent fullscreen>
                <div>
                    <p>jfk</p>
                    {/* <IonToggle checked={darkMode.darkMode}  onIonChange={toggleChange} justify="space-between">
                    Dark Mode
                    </IonToggle> */}
                    {/* <small onClick={toggleChange}>dark</small> */}
                    <IonSegment value={selectedTheme} onIonChange={toggleChange}>
                      <IonSegmentButton value="system">
                        <IonLabel>System</IonLabel>
                      </IonSegmentButton>
                      <IonSegmentButton value="light">
                        <IonLabel>Light</IonLabel>
                      </IonSegmentButton>
                      
                      <IonSegmentButton value="dark">
                        <IonLabel>Dark</IonLabel>
                      </IonSegmentButton>
                    </IonSegment>
                </div>
        //     </IonContent>
        // </IonPage>
    );
        }

export default IPreferences;