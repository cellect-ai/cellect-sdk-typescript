// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import {
  Project,
  ProjectApplyTransformParams,
  ProjectApplyTransformResponse,
  ProjectCreateParams,
  ProjectDeleteResponse,
  ProjectDownloadParams,
  ProjectDownloadResponse,
  ProjectGetStatusParams,
  ProjectGetStatusResponse,
  ProjectResponse,
} from './project';
import { APIPromise } from '../../../core/api-promise';
import { type Uploadable } from '../../../core/uploads';
import { RequestOptions } from '../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../internal/uploads';

export class V1 extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);

  /**
   * List all projects.
   */
  listProjects(
    query: V1ListProjectsParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<V1ListProjectsResponse> {
    return this._client.get('/api/v1/projects', { query, ...options });
  }

  /**
   * Upload a file to project inbox and optionally trigger processing (crack).
   */
  uploadFile(body: V1UploadFileParams, options?: RequestOptions): APIPromise<unknown> {
    return this._client.post(
      '/api/v1/upload',
      multipartFormRequestOptions({ body, ...options }, this._client),
    );
  }
}

/**
 * Response for listing projects.
 */
export interface V1ListProjectsResponse {
  projects: Array<string>;
}

export type V1UploadFileResponse = unknown;

export interface V1ListProjectsParams {
  user_email?: string | null;
}

export interface V1UploadFileParams {
  file: Uploadable;

  project_id: string;

  crack?: boolean;

  params?: string;
}

V1.Project = Project;

export declare namespace V1 {
  export {
    type V1ListProjectsResponse as V1ListProjectsResponse,
    type V1UploadFileResponse as V1UploadFileResponse,
    type V1ListProjectsParams as V1ListProjectsParams,
    type V1UploadFileParams as V1UploadFileParams,
  };

  export {
    Project as Project,
    type ProjectResponse as ProjectResponse,
    type ProjectDeleteResponse as ProjectDeleteResponse,
    type ProjectApplyTransformResponse as ProjectApplyTransformResponse,
    type ProjectDownloadResponse as ProjectDownloadResponse,
    type ProjectGetStatusResponse as ProjectGetStatusResponse,
    type ProjectCreateParams as ProjectCreateParams,
    type ProjectApplyTransformParams as ProjectApplyTransformParams,
    type ProjectDownloadParams as ProjectDownloadParams,
    type ProjectGetStatusParams as ProjectGetStatusParams,
  };
}
