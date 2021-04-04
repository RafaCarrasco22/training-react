import { request } from "../utils/request";

export default class SearchApi {
  static search = (): Promise<Promise<any>> =>
    request("https://www.breakingbadapi.com/api/characters/?", "GET");

  static searchCharacter = (url: string): Promise<Promise<any>> =>
    request("https://www.breakingbadapi.com/api/characters/?", "GET");

    static searchEpisodes = (): Promise<Promise<any>> =>
    request("https://www.breakingbadapi.com/api/episodes/", "GET");
}
