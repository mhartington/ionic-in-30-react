import { useEffect, useRef, useState } from 'react';

import { Geolocation } from '@capacitor/geolocation';

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
} from '@ionic/react';

import { location, navigate } from 'ionicons/icons';

import { MapProps, MapWrapper } from '../components/Map';

import './Home.css';

const Home: React.FC = () => {
  const [state, setState] = useState<MapProps>({
    lng: -71.418884,
    lat: 41.825226,
    zoom: 10,
  });

  const [isLoaded, setIsLoaded] = useState(false);

  const locationTrack = useRef<string>('');

  useEffect(() => {
    return () => {
      if (locationTrack.current) {
        Geolocation.clearWatch({ id: locationTrack.current });
      }
    };
  }, []);
  const getLocation = async () => {
    const loc = await Geolocation.getCurrentPosition();
    if (loc) {
      setState({
        lng: loc.coords.longitude,
        lat: loc.coords.latitude,
        zoom: 10,
      });
    }
  };
  const trackLocation = async () => {
    locationTrack.current = await Geolocation.watchPosition({}, (loc, _err) => {
      if (loc) {
        setState({
          lng: loc!.coords.longitude,
          lat: loc.coords.latitude,
          zoom: 10,
        });
      }
    });
  };
  useIonViewDidEnter(async () => {
    try {
      await Geolocation.requestPermissions();
    } catch (e) {
      console.log('error: ', e);
    }
    setIsLoaded(true);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Maps</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={getLocation}>
              <IonIcon icon={location} />
            </IonButton>
            <IonButton onClick={trackLocation}>
              <IonIcon icon={navigate} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>{isLoaded ? <MapWrapper {...state} /> : null}</IonContent>
    </IonPage>
  );
};

export default Home;
