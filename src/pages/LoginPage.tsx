import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuth } from '../auth';

interface Props {
  
  onLogin:() => void;
}


const LoginPage: React.FC<Props> = ({onLogin}) => {
  const {loggedIn} = useAuth();
  if (loggedIn){
    return <Redirect to= "/my/entries" />
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      <IonButton expand="block" onClick={onLogin}> Login</IonButton>
      {/* Go to <IonRouterLink routerLink='/home'>Home</IonRouterLink> */}
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
