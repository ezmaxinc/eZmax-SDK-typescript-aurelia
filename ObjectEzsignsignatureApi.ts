/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.32
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
  EzsignsignatureDeleteObjectV1Response,
  EzsignsignatureGetObjectV1Response,
  EzsignsignatureCreateObjectV1Response,
} from './models';

/**
 * ezsignsignatureCreateObjectV1 - parameters interface
 */
export interface IEzsignsignatureCreateObjectV1Params {
  ezsignsignatureCreateObjectV1Request: Array<EzsignsignatureCreateObjectV1Request>;
}

/**
 * ezsignsignatureDeleteObjectV1 - parameters interface
 */
export interface IEzsignsignatureDeleteObjectV1Params {
  pkiEzsignsignatureID: number;
}

/**
 * ezsignsignatureGetChildrenV1 - parameters interface
 */
export interface IEzsignsignatureGetChildrenV1Params {
  pkiEzsignsignatureID: number;
}

/**
 * ezsignsignatureGetObjectV1 - parameters interface
 */
export interface IEzsignsignatureGetObjectV1Params {
  pkiEzsignsignatureID: number;
}

/**
 * ObjectEzsignsignatureApi - API class
 */
@autoinject()
export class ObjectEzsignsignatureApi extends Api {

  /**
   * Creates a new ObjectEzsignsignatureApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Create a new Ezsignsignature
   * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
   * @param params.ezsignsignatureCreateObjectV1Request 
   */
  async ezsignsignatureCreateObjectV1(params: IEzsignsignatureCreateObjectV1Params): Promise<EzsignsignatureCreateObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignsignatureCreateObjectV1', params, 'ezsignsignatureCreateObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignsignature`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsignsignatureCreateObjectV1Request'] || {}))

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

  /**
   * Delete an existing Ezsignsignature
   * @param params.pkiEzsignsignatureID The unique ID of the Ezsignsignature
   */
  async ezsignsignatureDeleteObjectV1(params: IEzsignsignatureDeleteObjectV1Params): Promise<EzsignsignatureDeleteObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignsignatureDeleteObjectV1', params, 'pkiEzsignsignatureID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignsignature/{pkiEzsignsignatureID}`
      .replace(`{${'pkiEzsignsignatureID'}}`, encodeURIComponent(`${params['pkiEzsignsignatureID']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asDelete()

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

  /**
   * Retrieve an existing Ezsignsignature\&#39;s children IDs
   * @param params.pkiEzsignsignatureID The unique ID of the Ezsignsignature
   */
  async ezsignsignatureGetChildrenV1(params: IEzsignsignatureGetChildrenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignsignatureGetChildrenV1', params, 'pkiEzsignsignatureID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignsignature/{pkiEzsignsignatureID}/getChildren`
      .replace(`{${'pkiEzsignsignatureID'}}`, encodeURIComponent(`${params['pkiEzsignsignatureID']}`));

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

  /**
   * Retrieve an existing Ezsignsignature
   * @param params.pkiEzsignsignatureID The unique ID of the Ezsignsignature
   */
  async ezsignsignatureGetObjectV1(params: IEzsignsignatureGetObjectV1Params): Promise<EzsignsignatureGetObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignsignatureGetObjectV1', params, 'pkiEzsignsignatureID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignsignature/{pkiEzsignsignatureID}`
      .replace(`{${'pkiEzsignsignatureID'}}`, encodeURIComponent(`${params['pkiEzsignsignatureID']}`));

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

