export type Result<T> = {
  // success: boolean;
  // code: number;
  // message: string;
  // data: T;
  count: number;
  previous?: string;
  next?: string;
  results: T;
};
