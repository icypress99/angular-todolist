export interface TODOInterface{
    id: number,
    title: string,
    done: boolean
}

export interface TODOListsResponse{
    lists: TODOInterface[]
}