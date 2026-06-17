// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ProjectAPI from './project';
import { Project } from './project';

export class V1 extends APIResource {
  project: ProjectAPI.Project = new ProjectAPI.Project(this._client);
}

V1.Project = Project;

export declare namespace V1 {
  export { Project as Project };
}
