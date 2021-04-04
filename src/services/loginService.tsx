import { request } from "../utils/request";

export default class LoginApi {
  static login = (): Promise<Promise<any>> =>
    request("http://localhost:3001/usuarios", "GET");
}
