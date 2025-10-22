// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Cellect } from '../client';

export abstract class APIResource {
  protected _client: Cellect;

  constructor(client: Cellect) {
    this._client = client;
  }
}
