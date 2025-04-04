
import http from '@/lib/http';

import { 
  LoginBodyType,
  LoginResType,
  RegisBodyType,
  RegisterResType,

} from "@/SchemaValidations/auth.schema";

const authApi = {
  login: (body: LoginBodyType) => http.post<LoginResType>('posts', body),
  register: (body: RegisBodyType) => http.post<RegisterResType>('posts', body),
}

export default authApi;