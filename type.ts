export interface Todo{
    id:number,
    text: string,
    isCompleted:boolean
}

export interface TitleProps{
    title:string
}
 export interface Id{
    name: string,
    value:string
}
export interface Name {
    title: string,
    first: string,
    last:string
}
export interface Picture{
    large: string,
    medium: string,
    thumbnail:string
}

export interface Login{
    username: string,
    uuid:string
}
export interface FollowersProps{
    picture: Picture,
    name: Name,
    id: Id,
    login:Login
}

export type ToggleTodo=(selectedId:Todo)=>void