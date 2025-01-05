import nezuko from "./images/nezukoMockApi.jpg";
import cat from "./images/catMockAPI.jpeg";
import genericHuman from "./images/genericPerson.jpg";
import profilePhoto from "./images/profile_photo.jpg";

export const mockDataCards = [
  {
    title: "Jujutsu Kaisen",
    userId: "49816554891",
    userName: "AnimeBoi727",
    date: "Nov 21, 2057",
    cardImage: nezuko,
    userImage: profilePhoto,
    category: "#Anime",
    caption: `
    OMG, have you seen the latest episode of 
    My Hero Attack Jutsu?! Like, AHHH, my heart can't take it! 🥺✨ 
    The way Senpai did that ultimate power-up move had me SCREAMING—literal
     chills, no joke. 😭💕 I’m totally bingeing the whole season again tonight 
     with Pocky and Ramune, so don’t @ me unless it’s about anime memes or fanart 
     commissions because THIS is peak otaku life. 💖🔥 Sugoi desu ne? 🫶👾
    
    `,
  },
  {
    title: "The Most Handsome Boi",
    userId: "97856623",
    userName: "CatChick33",
    date: "Dec 25, 2024",
    cardImage: cat,
    userImage: genericHuman,
    category: "#Cat",
    caption: `
    Crazy cat lady and proud! 🐾 My days are spent knitting tiny sweaters for
     my 12 fur babies, arguing with them about who gets the comfy chair, and 
     sharing our adventures on Catstagram (yes, they all have accounts). If you 
     don’t like the smell of tuna or the sound of purring, we probably won’t 
     get along. 🐱🧶
    `,
  },
];

export const mockProfileSettingsData = [
  {
    name: "Erick Grande",
    userId: "879456216",
    userName: "AnimeBoi727",
    numberOfAccountsSubbedTo: 1,
    numberOfPostsMade: 1,
    numberOfPostsLiked: 1,
    numberOfPostsShared: 1,
  },
];
