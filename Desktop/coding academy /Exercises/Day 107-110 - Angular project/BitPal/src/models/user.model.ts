

export interface User{
    username:string
    name:string
    password:string
    coins:number
    moves:Move[]
}
export interface Move{
    toId:string,
    toName:string,
    at:number,
    amount:number
}