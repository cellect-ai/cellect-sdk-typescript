// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Cellect, { toFile } from 'cellect';

const client = new Cellect({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource v1', () => {
  // Prism tests are disabled
  test.skip('listProjects', async () => {
    const responsePromise = client.api.v1.listProjects();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('listProjects: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.api.v1.listProjects({ user_email: 'user_email' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Cellect.NotFoundError);
  });

  // Prism tests are disabled
  test.skip('uploadFile: only required params', async () => {
    const responsePromise = client.api.v1.uploadFile({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      project_id: 'project_id',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // Prism tests are disabled
  test.skip('uploadFile: required and optional params', async () => {
    const response = await client.api.v1.uploadFile({
      file: await toFile(Buffer.from('# my file contents'), 'README.md'),
      project_id: 'project_id',
      crack: true,
    });
  });
});
