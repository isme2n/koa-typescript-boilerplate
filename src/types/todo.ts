export interface ITodo extends ITodoBody {
  id: string
}

export interface ITodoBody {
  title?: string
  completed?: boolean
}

export interface ITodoStore {
  find(params: any): Promise<ITodo[]>
  get(id: string): Promise<ITodo>
  create(data: any): Promise<ITodo>
  update(id: any, data: any): Promise<ITodo>
  remove(id: any): Promise<void>
}

export interface ITodoFindParams {}
