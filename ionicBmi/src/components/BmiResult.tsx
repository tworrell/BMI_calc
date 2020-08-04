import React from "react";
import { IonRow, IonCol, IonCardContent, IonCard } from "@ionic/react";

const BmiResult: React.FC<{ result: number }> = (props) => {
  return (
    <IonRow>
      <IonCol>
        <IonCard>
          <IonCardContent>
            <h2 className="ion-text-center">Your Body-Mass-Index</h2>
            <h3 className="ion-text-center">{props.result.toFixed(2)}</h3>
          </IonCardContent>
        </IonCard>
      </IonCol>
    </IonRow>
  );
};
export default BmiResult;
