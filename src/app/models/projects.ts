export class Project {
  id: number;
  title: string;
  images: Array<string>;
  brief: string;
  description: Array<string>;
  relatedLink: Array<[string, string]>;
  video: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Disaster Response",
    images: ['app_illustration.png', 'group_work.jpg', 'final.jpg', 'final2.jpg', 'certificate.jpg'],
    brief: 'Winning project of EIT Digital Summer School 2019 Ljubljana in the area of Digital Transformation for Urban Resilience',
    description: ['As a unique part of EIT Digital Master School programme I&E study, I participated in the two-week summer school 2019 held in University of Ljubljana on the subject of Digital Cities. In collaboration with Ljubljana municipality and fire brigade, we evaluated the current disaster response especially in the case of earthquake, provided our vision and potential solutions to increase response readiness and minimise casualty aiming for a better resilient city. We were also the winning team in the final pitch.', 'The four most important part that we believe any city may focus on are: Communication, Awareness, Monitoring, Preparedness.'],
    relatedLink: [],
    video: ''
  },
  {
    id: 2,
    title: "eHiver",
    images: ['web_illustration.png', 'landing.jpg', 'team.jpg'],
    brief: 'Exploring sustainable online sharing platform - A hands on in class tech startup experience.',
    description: ['A hands on in class tech startup experience.', 'The emerging class of digital nomads, increasing number of international students have one problem in common: getting rid of their possessions in one place and find replacement in another. We want to provide a digital platform for this specific community to efficiently share furnitures with no money involved at all.'],
    relatedLink: [['Our website', 'https://www.ehiver.com/'], ['Our pitch video', 'https://youtu.be/UpuNNQ-tx-k']],
    video: 'https://www.youtube.com/embed/UpuNNQ-tx-k'
  },
  {
    id: 3,
    title: "Eugo",
    images: ['app_illustration.png', 'webpage.png'],
    brief: 'The first local bike sharing startup founded in Sweden. Let\'s go biking, go healthy and go green.',
    description: ['Eugo is the first local bike sharing startup founded in Sweden, summer 2018, known as EU-Bike. The aim  is exploring smart and clean mobility solutions, while bringing you convenience and enjoyment.', 'In the passing year, EU-Bike has gained a stable amount of users, brought a lot of convenience in Stockholm, but also encountered many problems. We want to bring user a better experience in the entire journey through this rebranding. As the UI/UX designer in the team, I designed this MVP for iOS devices.'],
    relatedLink: [],
    video: ''
  
  },
  {
    id: 4,
    title: "Battle of Idiots",
    images: ['game.png', 'connect.jpg', 'game1.jpg', 'game1-pc.jpg', 'game2.jpg', 'game3.jpg', 'lose.jpg'],
    brief: 'Multimodal interaction cooperative game created in Unity and Vuforia AR Engine.',
    description: ['An AR game built in Unity in support of Vuforia Engine and Unity’s own Network Engine UNet in which players should collaborate to score enough points within a certain time frame. The game can run on iOS, Android and also PC.', 'There are three mini games that each requires a different method of interaction to play: swiping, gravity and tapping.', 'Once all players are connected to the server (here the initiator’s device acts as server), cameras on each device will be activated and players can pick different mini games by choosing different markers. Their progress will be added up and shown in common progress bar. When the progress bar is filled up within the time limit, the players win. Otherwise, they lose.', 'The game can easily be expanded by adding more different mini games or by adding a level structure.'],
    relatedLink: [['Our demo video', 'https://vimeo.com/310622641']],
    video: 'https://player.vimeo.com/video/310622641'
  },
  {
    id: 5,
    title: "Meetrz",
    images: ['prototype.png', 'userflow.png'],
    brief: 'Virtual Facilitator for making new connections - Interaction design in practice',
    description: ['The purpose of this project is to design a solution to make it easier for people to make new connections, friends, and do activities together with other people. Starting with brainstorming ideas and ethnographic observations, we designed two different solutions and created prototypes for each. The solutions were taken through different stages of design, from ideation, sketches, expert evaluation, paper, video and high-fidelity prototyping. Due to the novelty of one of the ideas, we decided on continuing the external evaluation with the idea of a “smart-stone” that can bring a group of people together by using a gyroscope and vibrations to guide them to a common meeting point. However, the idea of the stone was only partially understood and considered useful by external users. Due to this fact and time constraint, we decided to include all the “smart-stone” features into a mobile application to ease the usage and remove redundant hardware.'],
    relatedLink: [['App prototype', 'https://marvelapp.com/3jca0hi/screen/51434372']],
    video: 'https://www.youtube.com/embed/TDrxumVsJts'
  },
  {
    id: 6,
    title: "EIT Alumni Meetup",
    images: ['illustration.png', 'poster.png'],
    brief: 'Poster design for the EIT Chinese student alumni meetup',
    description: ['Poster design for the first EIT Chinese student alumni meetup in KTH using Adobe Illustrator'],
    relatedLink: [],
    video: ''
  },
  {
    id: 7,
    title: "NUI in Digital Timer",
    images: ['illustration.png', '1.jpg', '2.jpg', '3.jpg'],
    brief: 'A study of Natural User Interface in everyday digital application - timer, exploring new design possibilities',
    description: ['In this study, four different timer applications are examined with a focus on Natural User Interface design. User studies are conducted including surveys and usability test with given tasks. From the gathered results, certain aspects of a timer application which are considered natural or not natural can be identified. Such analyses are done on four different state-of-the-art smartphone timer applications.', 'Meanwhile, new digital timer design approach was brought up for further research.'],
    relatedLink: [['Timer Ideation', 'https://youtu.be/ZTJJ4NKVJP0'],['Usability test task', 'https://docs.google.com/presentation/d/1R-1bXZgwSXxCPOsjoUK8UGao_Rpb4G0WFS-PSpRcDio/edit?usp=sharing']],
    video: 'https://www.youtube.com/embed/ZTJJ4NKVJP0'
  }
];