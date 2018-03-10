export interface IApiService<T> {
  find(params: any): Promise<T[]>
  get(id: string): Promise<T>
  create(data: any): Promise<T>
  update(id: any, data: any): Promise<T>
  remove(id: any): Promise<void>
}
