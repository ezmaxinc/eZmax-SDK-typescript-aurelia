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

import { autoinject } from 'aurelia-framework';
import { HttpClient } from 'aurelia-http-client';
import { Api } from './Api';
import { AuthStorage } from './AuthStorage';
import {
  EzsignsignatureDeleteObjectV1Response,
  EzsignsignatureEditObjectV1Response,
  EzsignsignatureGetObjectV1Response,
  EzsignsignatureCreateObjectV1Response,
  EzsignsignatureEditObjectV1Request,
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
 * ezsignsignatureEditObjectV1 - parameters interface
 */
export interface IEzsignsignatureEditObjectV1Params {
  pkiEzsignsignatureID: number;
  ezsignsignatureEditObjectV1Request: EzsignsignatureEditObjectV1Request;
}

/**
 * ezsignsignatureGetObjectGetChildrenV1 - parameters interface
 */
export interface IEzsignsignatureGetObjectGetChildrenV1Params {
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
   * Modify an existing Ezsignsignature
   * @param params.pkiEzsignsignatureID The unique ID of the Ezsignsignature
   * @param params.ezsignsignatureEditObjectV1Request 
   */
  async ezsignsignatureEditObjectV1(params: IEzsignsignatureEditObjectV1Params): Promise<EzsignsignatureEditObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignsignatureEditObjectV1', params, 'pkiEzsignsignatureID');
    this.ensureParamIsSet('ezsignsignatureEditObjectV1', params, 'ezsignsignatureEditObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignsignature/{pkiEzsignsignatureID}`
      .replace(`{${'pkiEzsignsignatureID'}}`, encodeURIComponent(`${params['pkiEzsignsignatureID']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsignsignatureEditObjectV1Request'] || {}))

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
  async ezsignsignatureGetObjectGetChildrenV1(params: IEzsignsignatureGetObjectGetChildrenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignsignatureGetObjectGetChildrenV1', params, 'pkiEzsignsignatureID');

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
