export interface Item {
    id:string
    listId:string
    name?:string
}
export interface List {
    id:string
    boardId: string
    name?:string  
}
export interface Board {
    id:string
    name?:string
}