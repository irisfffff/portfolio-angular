class Project {
  id: number;
  title: string;
  images: Array<string>;
  brief: string;
  description: Array<string>;
  relatedLink: Array<[string, string]>;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Disaster Response",
    images: ['app_illustration.png'],
    brief: 'Winning project of EIT Digital Summer School 2019 Ljubljana in the area of Digital Transformation for Urban Resilience',
    description: ['As a unique part of EIT Digital Master School programme I&E study, I participated in the two-week summer school 2019 held in University of Ljubljana on the subject of Digital Cities. In collaboration with Ljubljana municipality and fire brigade, we evaluated the current disaster response especially in the case of earthquake, provided our vision and potential solutions to increase response readiness and minimise casualty aiming for a better resilient city.', 'The four most important part that we believe any city may focus on are: Communication, Awareness, Monitoring, Preparedness.'],
    relatedLink: []
  },
  {
    id: 2,
    title: "eHiver",
    images: ['web_illustration.png'],
    brief: 'Exploring sustainable online sharing platform - A hands on in class tech startup experience.',
    description: ['A hands on in class tech startup experience. \nThe emerging class of digital nomads, increasing number of international students have one problem in common: getting rid of their possessions in one place and find replacement in another. We want to provide a digital platform for this specific community to efficiently share furnitures with no money involved at all.'],
    relatedLink: [['Our website', 'https://www.ehiver.com/'], ['Our pitch video', 'https://youtu.be/UpuNNQ-tx-k']]
  },
  {
    id: 1,
    title: "Eugo",
    images: ['app_illustration.png'],
    brief: 'Multimodal interaction cooperative game created in Unity and Vuforia AR Engine.',
    description: ['An AR game built in Unity in support of Vuforia Engine and Unity’s own Network Engine UNet in which players should collaborate to score enough points within a certain time frame. The game can run on iOS, Android and also PC.', 'There are three mini games that each requires a different method of interaction to play: swiping, gravity and tapping.', 'Once all players are connected to the server (here the initiator’s device acts as server), cameras on each device will be activated and players can pick different mini games by choosing different markers. Their progress will be added up and shown in common progress bar. When the progress bar is filled up within the time limit, the players win. Otherwise, they lose.', 'The game can easily be expanded by adding more different mini games or by adding a level structure.'],
    relatedLink: [['Our website', 'https://www.ehiver.com/'], ['Our pitch video', 'https://youtu.be/UpuNNQ-tx-k']]
  
  },
  {
    id: 4,
    title: "Battle of idiots",
    images: ['game.png'],
    brief: 'Multimodal interaction cooperative game created in Unity and Vuforia AR Engine.',
    description: ['An AR game built in Unity in support of Vuforia Engine and Unity’s own Network Engine UNet in which players should collaborate to score enough points within a certain time frame. The game can run on iOS, Android and also PC.', 'There are three mini games that each requires a different method of interaction to play: swiping, gravity and tapping.', 'Once all players are connected to the server (here the initiator’s device acts as server), cameras on each device will be activated and players can pick different mini games by choosing different markers. Their progress will be added up and shown in common progress bar. When the progress bar is filled up within the time limit, the players win. Otherwise, they lose.', 'The game can easily be expanded by adding more different mini games or by adding a level structure.'],
    relatedLink: [['Our website', 'https://www.ehiver.com/'], ['Our pitch video', 'https://youtu.be/UpuNNQ-tx-k']]
  },
  {
    id: 4,
    title: "Battle of idiots",
    images: ['game.png'],
    brief: 'Multimodal interaction cooperative game created in Unity and Vuforia AR Engine.',
    description: ['An AR game built in Unity in support of Vuforia Engine and Unity’s own Network Engine UNet in which players should collaborate to score enough points within a certain time frame. The game can run on iOS, Android and also PC.', 'There are three mini games that each requires a different method of interaction to play: swiping, gravity and tapping.', 'Once all players are connected to the server (here the initiator’s device acts as server), cameras on each device will be activated and players can pick different mini games by choosing different markers. Their progress will be added up and shown in common progress bar. When the progress bar is filled up within the time limit, the players win. Otherwise, they lose.', 'The game can easily be expanded by adding more different mini games or by adding a level structure.'],
    relatedLink: [['Our website', 'https://www.ehiver.com/'], ['Our pitch video', 'https://youtu.be/UpuNNQ-tx-k']]
  }
];