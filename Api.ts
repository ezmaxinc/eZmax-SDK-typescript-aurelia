/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.25
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpClient } from 'aurelia-http-client';
import { AuthStorage } from './AuthStorage';

const BASE_PATH = 'https://prod.api.appcluster01.ca-central-1.ezmax.com/rest'.replace(/\/+$/, '');

export class Api {
  basePath: string;
  httpClient: HttpClient;
  authStorage: AuthStorage;

  constructor(httpClient: HttpClient, authStorage: AuthStorage, basePath: string = BASE_PATH) {
    this.basePath = basePath;
    this.httpClient = httpClient;
    this.authStorage = authStorage;
  }

  /**
   * Encodes a query string.
   *
   * @param params The params to encode.
   * @return An encoded query string.
   */
  protected queryString(params: { [key: string]: any }): string {
    const queries = [];
    for (let key in params) {
      const value = this.toString(params[key]);
      if (value != null) {
        queries.push(`${key}=${encodeURIComponent(value)}`);
      }
    }

    return queries.join('&');
  }

  /**
   * Converts a value to string.
   *
   * @param value The value to convert.
   */
  protected toString(value: any): string | null {
    if (value === null) {
      return null;
    }
    switch (typeof value) {
      case 'undefined': return null;
      case 'boolean': return value ? 'true' : 'false';
      case 'string': return value;
      default: return '' + value;
    }
  }

  /**
   * Ensures that a given parameter is set.
   *
   * @param context A name for the callee's context.
   * @param params The parameters being set.
   * @param paramName The required parameter to check.
   */
  protected ensureParamIsSet<T>(context: string, params: T, paramName: keyof T): void {
    if (null === params[paramName]) {
      throw new Error(`Missing required parameter ${paramName} when calling ${context}`);
    }
  }
}
