export enum HttpStatusCode {
  ok = 200,
  created = 201,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  notFound = 404,
  serverError,
}

export type HttpResponse = {
  statusCode: HttpStatusCode;
  body?: any;
  header?: {
    key: string,
    value: string,
  },
};

export type HttpRequest = {
  body?: any;
  headers?: any;
  query?: any;
  params?: any;
  accountId?: string;
};
