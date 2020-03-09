import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { shuffle } from 'ionicons/icons';

const Tab2: React.FC = () => {

  // window.addEventListener('click', onclick);

  let clickedCards = {
    clicked1: {},
    clicked2: {}
  }

  const cards = [
    { id: 1, image: 'https://images.unsplash.com/photo-1580650165001-550c2dcf0fff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2220&q=80' },
    { id: 2, image: 'https://images.unsplash.com/photo-1580650165001-550c2dcf0fff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2220&q=80' },
    { id: 3, image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { id: 4, image: 'https://images.unsplash.com/photo-1517423568366-8b83523034fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80' },
    { id: 5, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' },
    { id: 6, image: 'https://images.unsplash.com/photo-1453227588063-bb302b62f50b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80' },
    { id: 7, image: 'https://images.unsplash.com/photo-1557973964-ee879969b96d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80' },
    { id: 8, image: 'https://images.unsplash.com/photo-1557973964-ee879969b96d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80' },
  ];

  const shuffle = () => {
    let ctr = cards.length, temp, index;
    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = cards[ctr];
      cards[ctr] = cards[index];
      cards[index] = temp;
    }
    return cards;
  }

  const flipCard = (card: { id: number; image: string; }) => {
    console.log('clicking on card', card.id);
    
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Match</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Match</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="match">
          {shuffle().map((card) => 
            <div key={card.id} onClick={() => flipCard(card)}>
              {/* {clickedCards.clicked1 === card || clickedCards.clicked2 === card ?  */}
                <div className="card"><img src={card.image} /></div>
                {/* :
                <div className="card back"></div>
              } */}
            </div>
          )}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
