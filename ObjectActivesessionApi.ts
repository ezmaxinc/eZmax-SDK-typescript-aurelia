/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.23
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { Api } from './Api';
import { AuthStorage } from './AuthStorage';
import {
  ActivesessionGetCurrentV1Response,
} from './models';

/**
 * activesessionGetCurrentV1 - parameters interface
 */
export interface IActivesessionGetCurrentV1Params {
}

/**
 * ObjectActivesessionApi - API class
 */
@autoinject()
export class ObjectActivesessionApi extends Api {

  /**
   * Creates a new ObjectActivesessionApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Get Current Activesession
   * Retrieve the details about the current activesession
   */
  async activesessionGetCurrentV1(): Promise<ActivesessionGetCurrentV1Response> {
    // Verify required parameters are set

    // Create URL to call
    const url = `${this.basePath}/1/object/activesession/getCurrent`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()

      // Authentication 'Authorization' required
      .withHeader('Authorization', this.authStorage.getAuthorization())
      // Send the request
      .send();

    if (response.statusCode < 200 || response.statusCode >= 300) {
      throw new Error(response.content);
    }

    // Extract the content
    return response.content;
  }

}

