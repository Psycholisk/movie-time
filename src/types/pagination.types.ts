export interface PaginatedList<T> {
  entries: Array<T>
  page: number
  hasMore: boolean
  isLoading: boolean
}
