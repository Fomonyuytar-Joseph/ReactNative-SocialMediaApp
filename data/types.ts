export interface Comment {
    id:number;
    text:string;
    author:number;
    timeStamp:number;
    likes:number[]
}






export interface Post {
    id:number;
    text:string;
    timeStamp:number;
    likes:number[];
    author:number;
    comments:Comment[]
}

 export interface User{
    id:number;
    name:string;
    avatar?:string
}

