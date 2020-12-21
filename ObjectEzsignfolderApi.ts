/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.22
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
  EzsignfolderEditObjectV1Response,
  EzsignfolderGetObjectV1Response,
  EzsignfolderDeleteObjectV1Response,
  EzsignfolderEditObjectV1Request,
  EzsignfolderSendV1Request,
  EzsignfolderCreateObjectV1Response,
  EzsignfolderSendV1Response,
} from './models';

/**
 * ezsignfolderCreateObjectV1 - parameters interface
 */
export interface IEzsignfolderCreateObjectV1Params {
  ezsignfolderCreateObjectV1Request: Array<EzsignfolderCreateObjectV1Request>;
}

/**
 * ezsignfolderDeleteObjectV1 - parameters interface
 */
export interface IEzsignfolderDeleteObjectV1Params {
  pkiEzsignfolderID: number;
}

/**
 * ezsignfolderEditObjectV1 - parameters interface
 */
export interface IEzsignfolderEditObjectV1Params {
  pkiEzsignfolderID: number;
  ezsignfolderEditObjectV1Request: EzsignfolderEditObjectV1Request;
}

/**
 * ezsignfolderGetObjectGetChildrenV1 - parameters interface
 */
export interface IEzsignfolderGetObjectGetChildrenV1Params {
  pkiEzsignfolderID: number;
}

/**
 * ezsignfolderGetObjectV1 - parameters interface
 */
export interface IEzsignfolderGetObjectV1Params {
  pkiEzsignfolderID: number;
}

/**
 * ezsignfolderSendV1 - parameters interface
 */
export interface IEzsignfolderSendV1Params {
  pkiEzsignfolderID: number;
  ezsignfolderSendV1Request: EzsignfolderSendV1Request;
}

/**
 * ObjectEzsignfolderApi - API class
 */
@autoinject()
export class ObjectEzsignfolderApi extends Api {

  /**
   * Creates a new ObjectEzsignfolderApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Create a new Ezsignfolder
   * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
   * @param params.ezsignfolderCreateObjectV1Request 
   */
  async ezsignfolderCreateObjectV1(params: IEzsignfolderCreateObjectV1Params): Promise<EzsignfolderCreateObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfolderCreateObjectV1', params, 'ezsignfolderCreateObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfolder`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsignfolderCreateObjectV1Request'] || {}))

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
   * Delete an existing Ezsignfolder
   * @param params.pkiEzsignfolderID The unique ID of the Ezsignfolder
   */
  async ezsignfolderDeleteObjectV1(params: IEzsignfolderDeleteObjectV1Params): Promise<EzsignfolderDeleteObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfolderDeleteObjectV1', params, 'pkiEzsignfolderID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfolder/{pkiEzsignfolderID}`
      .replace(`{${'pkiEzsignfolderID'}}`, encodeURIComponent(`${params['pkiEzsignfolderID']}`));

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
   * Modify an existing Ezsignfolder
   * @param params.pkiEzsignfolderID The unique ID of the Ezsignfolder
   * @param params.ezsignfolderEditObjectV1Request 
   */
  async ezsignfolderEditObjectV1(params: IEzsignfolderEditObjectV1Params): Promise<EzsignfolderEditObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfolderEditObjectV1', params, 'pkiEzsignfolderID');
    this.ensureParamIsSet('ezsignfolderEditObjectV1', params, 'ezsignfolderEditObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfolder/{pkiEzsignfolderID}`
      .replace(`{${'pkiEzsignfolderID'}}`, encodeURIComponent(`${params['pkiEzsignfolderID']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsignfolderEditObjectV1Request'] || {}))

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
   * Retrieve an existing Ezsignfolder\&#39;s children IDs
   * @param params.pkiEzsignfolderID The unique ID of the Ezsignfolder
   */
  async ezsignfolderGetObjectGetChildrenV1(params: IEzsignfolderGetObjectGetChildrenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfolderGetObjectGetChildrenV1', params, 'pkiEzsignfolderID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfolder/{pkiEzsignfolderID}/getChildren`
      .replace(`{${'pkiEzsignfolderID'}}`, encodeURIComponent(`${params['pkiEzsignfolderID']}`));

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
   * Retrieve an existing Ezsignfolder
   * @param params.pkiEzsignfolderID The unique ID of the Ezsignfolder
   */
  async ezsignfolderGetObjectV1(params: IEzsignfolderGetObjectV1Params): Promise<EzsignfolderGetObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfolderGetObjectV1', params, 'pkiEzsignfolderID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfolder/{pkiEzsignfolderID}`
      .replace(`{${'pkiEzsignfolderID'}}`, encodeURIComponent(`${params['pkiEzsignfolderID']}`));

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
   * Send the Ezsignfolder to the signatories for signature
   * @param params.pkiEzsignfolderID The unique ID of the Ezsignfolder
   * @param params.ezsignfolderSendV1Request 
   */
  async ezsignfolderSendV1(params: IEzsignfolderSendV1Params): Promise<EzsignfolderSendV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfolderSendV1', params, 'pkiEzsignfolderID');
    this.ensureParamIsSet('ezsignfolderSendV1', params, 'ezsignfolderSendV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfolder/{pkiEzsignfolderID}/send`
      .replace(`{${'pkiEzsignfolderID'}}`, encodeURIComponent(`${params['pkiEzsignfolderID']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsignfolderSendV1Request'] || {}))

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

