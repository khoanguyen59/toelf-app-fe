export interface DataGridRow<T> {
  key: string;
  parentKey: string;
  hasChildren: boolean;
  data?: T;
  clickable?: boolean;
}

export interface DataGridColumn {
  name: string;
  title: React.ReactNode;
  width?: any;
  sortable?: boolean;
  align?: any;
}
