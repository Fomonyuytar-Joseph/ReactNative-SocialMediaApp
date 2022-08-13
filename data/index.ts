import { User , Post , Comment } from "./types"



 export const Users: User[]=[
    {
        id:1,
        name:"kelly",
        avatar:"https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
        
    },
    {
        id:2,
        name:"John",
        avatar:"https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
        
    },
    {
        id:3,
        name:"Joseph",
        avatar:"https://thumbs.dreamstime.com/b/businessman-icon-image-male-avatar-profile-vector-glasses-beard-hairstyle-179728610.jpg"
        
    }
]

export const Posts : Post[]=[
    {
        id:1,
        text:"Helloo world",
        timeStamp:Date.now()-1000,
        likes:[],
        author:2,
        comments:[]


    },
    {
        id:2,
        text:"Joseph is back",
        timeStamp:Date.now()-2000,
        likes:[],
        author:5,
        comments:[]


    },
    {
        id:3,
        text:"Definetly a good day",
        timeStamp:Date.now()-3000,
        likes:[],
        author:7,
        comments:[]


    },
]