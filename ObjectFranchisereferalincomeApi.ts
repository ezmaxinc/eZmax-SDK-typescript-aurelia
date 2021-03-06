/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
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

