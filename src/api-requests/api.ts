import { AxiosStatic } from 'axios';
import { JobLocation } from '@/models/models';

export default class BaseApi {
  public axios!: AxiosStatic;
  protected baseUrl: string;

  constructor(url: string, axios: AxiosStatic) {
    this.baseUrl = url;
    this.axios = axios;
  }

  public getJobLocations = (): Promise<JobLocation[]> =>
    this.axios
      .get(`${this.baseUrl}job/locations/`)
      .then((response) => response.data);

  /**
   * TIP: Create a function called getJobListings
   * Use our public api documentation to find out what endpoint to use
   * https://test-api.mojob.io/public/docs/
   */

}
