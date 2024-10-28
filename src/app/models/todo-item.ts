export interface TODOInterface{
    id: number,
    title: string,
    done: boolean
}

export interface TODOListsResponse{
    lists: TODOInterface[]
}

export interface UpdateTODOResponse{
    isSuccess: boolean,
    message: string
}

export interface AddTODOResponse{
    id: number,
    isSuccess: boolean,
    message: string
}