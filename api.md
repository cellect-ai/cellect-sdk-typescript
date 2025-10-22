# Cellect

Types:

- <code><a href="./src/resources/top-level.ts">HealthCheckResponse</a></code>

Methods:

- <code title="get /">client.<a href="./src/index.ts">healthCheck</a>() -> unknown</code>

# API

## V1

Types:

- <code><a href="./src/resources/api/v1/v1.ts">V1ListProjectsResponse</a></code>
- <code><a href="./src/resources/api/v1/v1.ts">V1UploadFileResponse</a></code>

Methods:

- <code title="get /api/v1/projects">client.api.v1.<a href="./src/resources/api/v1/v1.ts">listProjects</a>({ ...params }) -> V1ListProjectsResponse</code>
- <code title="post /api/v1/upload">client.api.v1.<a href="./src/resources/api/v1/v1.ts">uploadFile</a>({ ...params }) -> unknown</code>

### Project

Types:

- <code><a href="./src/resources/api/v1/project.ts">ProjectResponse</a></code>
- <code><a href="./src/resources/api/v1/project.ts">ProjectDeleteResponse</a></code>
- <code><a href="./src/resources/api/v1/project.ts">ProjectApplyTransformResponse</a></code>
- <code><a href="./src/resources/api/v1/project.ts">ProjectDownloadResponse</a></code>
- <code><a href="./src/resources/api/v1/project.ts">ProjectGetStatusResponse</a></code>

Methods:

- <code title="post /api/v1/project">client.api.v1.project.<a href="./src/resources/api/v1/project.ts">create</a>({ ...params }) -> ProjectResponse</code>
- <code title="get /api/v1/project/{project_id}">client.api.v1.project.<a href="./src/resources/api/v1/project.ts">retrieve</a>(projectID) -> ProjectResponse</code>
- <code title="delete /api/v1/project/{project_id}">client.api.v1.project.<a href="./src/resources/api/v1/project.ts">delete</a>(projectID) -> unknown</code>
- <code title="post /api/v1/project/{project_id}/apply">client.api.v1.project.<a href="./src/resources/api/v1/project.ts">applyTransform</a>(projectID, { ...params }) -> unknown</code>
- <code title="get /api/v1/project/{project_id}/download">client.api.v1.project.<a href="./src/resources/api/v1/project.ts">download</a>(projectID, { ...params }) -> unknown</code>
- <code title="get /api/v1/project/{project_id}/status">client.api.v1.project.<a href="./src/resources/api/v1/project.ts">getStatus</a>(projectID, { ...params }) -> unknown</code>
