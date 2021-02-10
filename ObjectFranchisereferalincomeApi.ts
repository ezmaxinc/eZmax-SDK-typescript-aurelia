/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.29
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
  FranchisereferalincomeCreateObjectV1Response,
} from './models';

/**
 * franchisereferalincomeCreateObjectV1 - parameters interface
 */
export interface IFranchisereferalincomeCreateObjectV1Params {
  franchisereferalincomeCreateObjectV1Request: Array<FranchisereferalincomeCreateObjectV1Request>;
}

/**
 * ObjectFranchisereferalincomeApi - API class
 */
@autoinject()
export class ObjectFranchisereferalincomeApi extends Api {

  /**
   * Creates a new ObjectFranchisereferalincomeApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Create a new Franchisereferalincome
   * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
   * @param params.franchisereferalincomeCreateObjectV1Request 
   */
  async franchisereferalincomeCreateObjectV1(params: IFranchisereferalincomeCreateObjectV1Params): Promise<FranchisereferalincomeCreateObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('franchisereferalincomeCreateObjectV1', params, 'franchisereferalincomeCreateObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/franchisereferalincome`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['franchisereferalincomeCreateObjectV1Request'] || {}))

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

