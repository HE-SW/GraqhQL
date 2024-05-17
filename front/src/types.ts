export interface ITodo {
    title: string;
    checked: boolean;
    id: number;
    __typename?: string;
}

export interface TodosCache {
    todos: ITodo[];
}
