import { ITodo, ITodoStore, ITodoFindParams, ITodoBody } from '../types/todo'
import { IApiService } from '../types/general'

/**
 * In-memory todos store.
 * For demo purposes, gets the logger injected.
 */
export default function createTodoStore(logger): IApiService<ITodo> {
  let __todos: ITodo[] = []
  let __ids = 1

  return {
    async find(params: ITodoFindParams): Promise<ITodo[]> {
      logger.debug('Finding todos')
      return [...__todos]
    },

    async get(id: string): Promise<ITodo> {
      logger.debug(`Getting todo with id ${id}`)
      const found = __todos.find(x => x.id === id.toString())
      if (!found) {
        return null
      }
      return { ...found }
    },

    async create(data: ITodoBody): Promise<ITodo> {
      const todo: ITodo = {
        ...data,
        id: (__ids++).toString()
      }
      __todos.push(todo)
      logger.debug(`Created new todo`, todo)
      return todo
    },

    async update(id: string, data: ITodoBody): Promise<ITodo> {
      const todo = __todos.find(x => x.id === id.toString())
      Object.assign(todo, data)
      logger.debug(`Updated todo ${id}`, todo)
      return todo
    },

    async remove(id: string): Promise<void> {
      __todos = __todos.filter(x => x.id !== id.toString())
      logger.debug(`Removed todo ${id}`)
    }
  }
}
