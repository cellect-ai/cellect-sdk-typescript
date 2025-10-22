// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as V1API from './v1/v1';
import {
  V1,
  V1ListProjectsParams,
  V1ListProjectsResponse,
  V1UploadFileParams,
  V1UploadFileResponse,
} from './v1/v1';

export class API extends APIResource {
  v1: V1API.V1 = new V1API.V1(this._client);
}

API.V1 = V1;

export declare namespace API {
  export {
    V1 as V1,
    type V1ListProjectsResponse as V1ListProjectsResponse,
    type V1UploadFileResponse as V1UploadFileResponse,
    type V1ListProjectsParams as V1ListProjectsParams,
    type V1UploadFileParams as V1UploadFileParams,
  };
}
