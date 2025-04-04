
import envConfig from '@/config';

type CustomOptions = Omit<RequestInit, 'method'> & {
  baseURL?: string | undefined;
}


class HttpError extends Error {
  status: number;
  payload: any;
  constructor({ status, payload }: { status: number, payload: any}){
    super("HTTP ERROR");
    this.status = status;
    this.payload = payload;
  }
}

// const isClient = () => {
//   return typeof window !== 'undefined' && typeof window.document !== 'undefined';
// }

const request = async<Response> (
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  url: string, 
  options: CustomOptions | undefined) => {

  let body: FormData | string | undefined = undefined;
  if (options?.body instanceof FormData) {
    body = options.body;
  } else if (options?.body) {
    body = JSON.stringify(options.body);
  }

  const baseHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  }


  const baseURL = options?.baseURL === undefined ? envConfig.NEXT_PUBLIC_TEST_API_URL : options.baseURL;

  const fullURL = url.startsWith('/') ? `${baseURL}${url}` : `${baseURL}/${url}`;
  const res = await fetch(fullURL, {
    ...options,
    headers: {
      ...baseHeaders,
      ...options?.headers,
    },
    body,
    method
  })

  const payload: Response = await res.json()

  const data = {
    status: res.status,
    payload
  }

  if (!res.ok) {
    throw new HttpError(data)
  }
  return data;
}

const http = {
  get<Response>(url: string, options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('GET', url, options)
  },
  post<Response>(url: string, body: any,  options?: Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('POST', url, {
      ...options, 
      body
    })
  },
  put<Response>(url: string, body: any, options?:  Omit<CustomOptions, 'body'> | undefined) {
    return request<Response>('PUT', url, {
      ...options,
      body
    })
  },
  delete<Response>(url: string, body: any, options?: Omit<CustomOptions, 'body'> | undefined) {  
    return request<Response>('DELETE', url, {
      ...options,
      body
    })
  },
}

export default http;