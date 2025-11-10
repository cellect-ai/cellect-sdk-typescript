// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Project extends APIResource {
  /**
   * Create a new project.
   */
  create(body: ProjectCreateParams, options?: RequestOptions): APIPromise<ProjectResponse> {
    return this._client.post('/api/v1/project', { body, ...options });
  }

  /**
   * Get project information by ID.
   */
  retrieve(projectID: string, options?: RequestOptions): APIPromise<ProjectResponse> {
    return this._client.get(path`/api/v1/project/${projectID}`, options);
  }

  /**
   * Delete a project by ID.
   */
  delete(projectID: string, options?: RequestOptions): APIPromise<unknown> {
    return this._client.delete(path`/api/v1/project/${projectID}`, options);
  }

  /**
   * Apply a prompt to a project.
   */
  applyTransform(
    projectID: string,
    body: ProjectApplyTransformParams,
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.post(path`/api/v1/project/${projectID}/apply`, {
      body,
      ...options,
      headers: buildHeaders([{ 'Content-Type': 'application/x-www-form-urlencoded' }, options?.headers]),
    });
  }

  /**
   * Download project files as a zip archive.
   *
   * Args: project_id: The project ID to download include_inbox: Whether to include
   * inbox folder (default: False) include_outbox: Whether to include outbox folder
   * (default: True)
   *
   * Returns: A zip file containing the requested project folders
   */
  download(
    projectID: string,
    query: ProjectDownloadParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/api/v1/project/${projectID}/download`, { query, ...options });
  }

  /**
   * Get the current agent status for a project.
   *
   * Returns the agent's current status and optionally the final response text and
   * progress messages.
   *
   * Args: response: If True, include the final response text (default: False)
   * include_progress: If True, include progress messages since last sync (default:
   * False)
   */
  getStatus(
    projectID: string,
    query: ProjectGetStatusParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<unknown> {
    return this._client.get(path`/api/v1/project/${projectID}/status`, { query, ...options });
  }
}

/**
 * Response for project operations.
 */
export interface ProjectResponse {
  /**
   * Project ID
   */
  id: string;

  /**
   * Project attributes
   */
  attributes?: { [key: string]: string };
}

export type ProjectDeleteResponse = unknown;

export type ProjectApplyTransformResponse = unknown;

export type ProjectDownloadResponse = unknown;

export type ProjectGetStatusResponse = unknown;

export interface ProjectCreateParams {
  /**
   * Project name
   */
  project_name: string;

  /**
   * Additional parameters defining project behavior
   */
  params?: { [key: string]: unknown };
}

export interface ProjectApplyTransformParams {
  prompt: string;
}

export interface ProjectDownloadParams {
  include_inbox?: boolean;

  include_outbox?: boolean;
}

export interface ProjectGetStatusParams {
  include_progress?: boolean;

  response?: boolean;
}

export declare namespace Project {
  export {
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
