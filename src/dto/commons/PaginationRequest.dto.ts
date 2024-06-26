export const PER_PAGE_OPTIONS = [10, 25, 50];

export const preparePerPageAllOptions = (total: number) => {
  const result = [...PER_PAGE_OPTIONS];
  result.push(total);
  return result;
};

export interface PaginationRequest<T = Record<string, any>> {
  skip?: number;
  take?: number;
  search?: string;
  orderBy?: string;
  orderDirection?: 'ASC' | 'DESC';
  isGettingDeleted?: boolean;
  filters?: Partial<T>;
}

export interface PaginationResult<T> {
  data: T[];
  count: number;
}
