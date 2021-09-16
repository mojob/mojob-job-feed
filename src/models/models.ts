/**
 * This interface can be used to handle the response given from
 * the job listing endpoint if use_pagination=True in the query parameter.
 * See more description of the endpoint at https://test-api.mojob.io/public/docs/
 *
 * https://test-api.mojob.io/public/job/listings/?include_open=False&page=1&page_size=25&use_pagination=True
 *
 * const exampleJobListingServerResponse: IPage<JobListing> = {
  "count": 1,
  "results": [
      {
        "id": 14689,
        "job": {
          "id": 17674,
          "due_date": "2021-09-16T20:59:59.494000Z",
          "title": "Amazingzzzxcz",
          "unit": {
            "id": 442,
            "name": "OB!1",
            "display_name": "OB!1",
            "address": "Svalbard and Jan Mayen",
            "logo_url": "https://test-mojobmedia.s3.amazonaws.com/images/2020/01/22/77a80e88-e698-446b-9b33-a2adaf16fb27.jpg"
          },
          "address": "Frankfurt, Германия",
          "poster": {
            "id": 4862,
            "username": "dima@mojob.io",
            "first_name": "Dima",
            "last_name": "Riazantsev",
            "full_name": "Dima Riazantsev",
            "user_profile": {
              "id": 4561,
              "profile_picture_url": "https://test-mojobmedia.s3.amazonaws.com/images/2021/06/28/b134e279-b5e5-4052-b1d0-966cc4c2a461.jpg"
            }
          },
          "position_function_id": 172,
          "position_function": {
            "id": 172,
            "name_en": "Office management",
            "name_nb": "Kontor og administrasjon"
          },
          "country_long_name": "Luxembourg",
          "administrative_area_level_1": "District de Luxembourg",
          "administrative_area_level_2": "Luxembourg",
          "postal_town": "",
          "employment_type": "FULL_TIME",
          "get_share_url": "https://test-job.mojob.io/17674/",
          "apply_url": "https://test-apply.mojob.io/17674/"
        },
        "created_at": "2021-01-13T13:42:01.776992Z",
        "updated_at": "2021-08-16T05:46:40.711440Z",
        "global_background_rgba": "#ffffffff",
        "global_text_style": "sans",
        "global_divider_status": false,
        "job_listing_header": {
          "id": 56101,
          "job_listing_id": 14689,
          "background_image_url": "https://test-mojobmedia.s3.amazonaws.com/images/2021/06/07/d1761d7d-b941-4f6b-90a0-fab88b9ea2f6.jpg",
          "background_image_thumbnail": "https://test-mojobmedia.s3.amazonaws.com/thumbnails/2021/06/07/78dddfe5-6947-4cd3-9448-f6cc168fb33c-thumbnail.jpg",
          "background_rgba": "#0081b366",
          "font_rgba": "#ffffffff",
          "title": "Your door to a pilot career",
          "title_rich": "<h1>Your door to a pilot career</h1>",
          "subtitle": "Hire today and now therea asdsscsscasdasdxffxscssc",
          "subtitle_rich": "<h3>Hire today and now therea asdsscsscasdasdxffxscssc</h3>",
          "created_at": "2021-01-13T13:42:01.780219Z",
          "updated_at": "2021-08-16T05:46:40.288688Z"
        },
        "publisher_published_at": "2021-08-16T05:46:40.258240Z",
        "publisher_modified_at": "2021-08-16T05:46:40.711452Z",
        "job_listing_description": {
          "id": 56102,
          "job_listing_id": 14689,
          "background_image_url": "https://test-mojobmedia.s3.amazonaws.com/images/2021/03/15/46e0a3af-defb-4887-a39f-dfa0a7956f78.jpg",
          "background_image_thumbnail": "https://test-mojobmedia.s3.amazonaws.com/thumbnails/2021/03/15/f20add3b-d604-4479-b596-ff4813ca4d53-thumbnail.jpg",
          "background_rgba": "#ffffffff",
          "font_rgba": "#2e2e2eff",
          "title": "",
          "title_rich": "<h2><br></h2>",
          "subtitle": "dfdfdf",
          "subtitle_rich": "<p>dfdfdf</p>",
          "created_at": "2021-01-13T13:42:01.784189Z",
          "updated_at": "2021-08-16T05:46:40.471196Z"
        },
        "job_listing_unit_description": {
          "id": 56104,
          "job_listing_id": 14689,
          "background_image_url": "",
          "background_image_thumbnail": "",
          "background_rgba": "#b15897",
          "font_rgba": "#2E2E2EFF",
          "title": "",
          "title_rich": "<h2><br></h2>",
          "subtitle": "A sea kayak or touring kayak is a kayak developed for the sport of paddling on open waters of lakes, bays, and the ocean..",
          "subtitle_rich": "<p>A&nbsp;<strong>sea kayak</strong>&nbsp;or&nbsp;<strong>touring kayak</strong>&nbsp;is a&nbsp;<a href=\"https://en.wikipedia.org/wiki/Kayak\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: initial; color: rgb(11, 0, 128);\">kayak</a>&nbsp;developed for the sport of&nbsp;<a href=\"https://en.wikipedia.org/wiki/Watercraft_paddling\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: initial; color: rgb(11, 0, 128);\">paddling</a>&nbsp;on open waters of lakes, bays, and the ocean.</p>",
          "created_at": "2021-01-13T13:42:01.792183Z",
          "updated_at": "2021-08-16T05:46:40.687163Z"
        },
        "youtube_video_ids": ",",
        "vimeo_video_ids": "137457721,151394728,297059775",
        "image_urls": [
          "https://test-mojobmedia.s3.amazonaws.com/images/2021/03/22/e5235fb5-09b4-46d2-9510-7b3e28bb4256.jpg",
          "https://test-mojobmedia.s3.amazonaws.com/images/2021/05/17/6e9b0521-aa77-41cf-b1c3-1bb2631b6344.jpg",
          "https://test-mojobmedia.s3.amazonaws.com/images/2021/05/24/85e7370c-db47-400d-8160-d2a412474499.jpg",
          "https://test-mojobmedia.s3.amazonaws.com/images/2021/06/22/37ffbada-21b9-43a9-84fc-f6dcbb7bf0ae.jpg"
        ]
      }
    ]
  }
 */
export interface IPage<T> {
  // count: Contains the total count of all objects T in all pages
  count?: number;
  // next: The url of the next page. Will be null if we have retrieved the last page.
  // ATTENTION: THIS FIELD IS BUGGED!!
  // The bug is that the url we get here is using "http" instead of "https"
  // So if you want to use this field remember to replace http with https else the API
  // will fail to respond with the correct data.
  // Sorry for the inconvenience. Maybe you can help us fix this bug later? :)
  next?: string;
  // prev: The url of the previous page. Will be null if we have retrieved the first page.
  prev?: string;
  // results: Contains the list of data objects
  results?: T[];
}

export interface JobListing {
  id?: number;
  job?: Job;
  created_at?: string;
  updated_at?: string;
  global_background_rgba?: string;
  global_text_style?: string;
  global_divider_status?: boolean;
  job_listing_header?: JobListingHeader;
  publisher_published_at?: string;
  publisher_modified_at?: string;
  job_listing_description?: JobListingDescription;
  job_listing_unit_description?: JobListingUnitDescription;
  youtube_video_ids?: string;
  vimeo_video_ids?: string;
  image_urls?: string[];
}

// These are address components we attach to a job
// when the job address is set. If you want to read more about them
// https://developers.google.com/maps/documentation/geocoding/overview
export enum jobLocationType {
  country_long_name = 'country_long_name',
  administrative_area_level_1 = 'administrative_area_level_1',
  administrative_area_level_2 = 'administrative_area_level_2',
  postal_town = 'postal_town',
}

export interface JobLocation {
  type?: jobLocationType;
  name?: string;
  num_live_jobs?: number;
  children?: JobLocation[];
}

export interface Unit {
  id?: number;
  name?: string;
  display_name?: string;
  address?: string;
  logo_url?: string;
}

export interface UserProfile {
  id?: number;
  profile_picture_url?: string;
}

export interface Poster {
  id?: number;
  username?: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  user_profile?: UserProfile;
}

/**
 * Position functions are a way of categorizing and organizing
 * jobs posted on Mojob.
 *
 * We use the International Standard Classification of Occupations (ISCO)
 * https://en.wikipedia.org/wiki/International_Standard_Classification_of_Occupations
 */
export interface PositionFunction {
  id?: number;
  name_en?: string;
  name_nb?: string;
  children?: PositionFunction[];
}

export interface Job {
  id?: number;
  due_date?: string;
  title?: string;
  unit?: Unit;
  address?: string;
  poster?: Poster;
  position_function_id?: number;
  position_function?: PositionFunction;
  country_long_name?: string;
  administrative_area_level_1?: string;
  administrative_area_level_2?: string;
  postal_town?: string;
  employment_type?: string;
  get_share_url?: string;
  apply_url?: string;
}

export interface JobListingHeader {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}

export interface JobListingDescription {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}

export interface JobListingUnitDescription {
  id?: number;
  job_listing_id?: number;
  background_image_url?: string;
  background_image_thumbnail?: string;
  background_rgba?: string;
  font_rgba?: string;
  title?: string;
  title_rich?: string;
  subtitle?: string;
  subtitle_rich?: string;
  created_at?: string;
  updated_at?: string;
}
