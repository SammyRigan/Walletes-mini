import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Preferences } from '@capacitor/preferences';
import Tabs from './pages/Tabs';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import 'bootstrap/dist/css/bootstrap.min.css';
import './theme/variables.css';
import './App.scss';
import { useThemeContext } from './context/ThemeContext';

setupIonicReact();

function App() {

  // Add or remove the "dark" class on the document body
  const toggleDarkTheme = (shouldAdd: boolean) => {
    document.body.classList.toggle('dark', shouldAdd);
  };

  // const Preferences

  useEffect(() => {

    let storedTheme;
    let darkTheme;
    Preferences.get({key: 'theme'}).then(ref => {
      storedTheme = ref.value;
      
      if (storedTheme === 'dark') {
        darkTheme = true;
      } else if (storedTheme === 'light') {
        darkTheme = false;
      } else {
        // Use matchMedia to check the user preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
        darkTheme = prefersDark.matches;
        prefersDark.addEventListener('change', (mediaQuery) => toggleDarkTheme(mediaQuery.matches));
      }

      toggleDarkTheme(darkTheme);
      setDarkMode({darkMode: darkTheme});
    });


    // Listen for changes to the prefers-color-scheme media query
    // prefersDark.addEventListener('change', (mediaQuery) => toggleDarkTheme(mediaQuery.matches));
  }, []);

  const [darkMode, setDarkMode] = useThemeContext();

  return (
    // <ThemeContext.Provider value={{ darkMode }}>
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            {/* <Route exact path="/tabs">
              <Tabs />
            </Route>
            <Route path="/">
              <Redirect to="/tabs" />
            </Route> */}
            <Route path='/' component={Tabs}></Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    // </ThemeContext.Provider>
  );
}

export default App;
