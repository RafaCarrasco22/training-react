import { request } from "../utils/request";

export default class LoginApi {
  static login = (): Promise<Promise<any>> =>
    request("http://localhost:3001/usuarios", "GET");

  static searchCharacter = (url: string): Promise<Promise<any>> =>
    request(url, "GET");

    static searchData = (): Promise<Promise<any>> =>
    request("https://www.breakingbadapi.com/api/", "GET");
}
