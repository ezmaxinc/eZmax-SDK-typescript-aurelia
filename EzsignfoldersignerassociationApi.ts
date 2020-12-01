/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.19
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
  EzsignfoldersignerassociationCreateObjectV1Response,
  EzsignfoldersignerassociationEditObjectV1Request,
  EzsignfoldersignerassociationEditObjectV1Response,
  EzsignfoldersignerassociationDeleteObjectV1Response,
  EzsignfoldersignerassociationGetInPersonLoginUrlV1Response,
  EzsignfoldersignerassociationGetObjectV1Response,
} from './models';

/**
 * ezsignfoldersignerassociationCreateObjectV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationCreateObjectV1Params {
  ezsignfoldersignerassociationCreateObjectV1Request: Array<EzsignfoldersignerassociationCreateObjectV1Request>;
}

/**
 * ezsignfoldersignerassociationDeleteObjectV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationDeleteObjectV1Params {
  pkiEzsignfoldersignerassociationID: number;
}

/**
 * ezsignfoldersignerassociationEditObjectV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationEditObjectV1Params {
  pkiEzsignfoldersignerassociationID: number;
  ezsignfoldersignerassociationEditObjectV1Request: EzsignfoldersignerassociationEditObjectV1Request;
}

/**
 * ezsignfoldersignerassociationGetInPersonLoginUrlV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationGetInPersonLoginUrlV1Params {
  pkiEzsignfoldersignerassociationID: number;
}

/**
 * ezsignfoldersignerassociationGetObjectGetChildrenV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationGetObjectGetChildrenV1Params {
  pkiEzsignfoldersignerassociationID: number;
}

/**
 * ezsignfoldersignerassociationGetObjectV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationGetObjectV1Params {
  pkiEzsignfoldersignerassociationID: number;
}

/**
 * EzsignfoldersignerassociationApi - API class
 */
@autoinject()
export class EzsignfoldersignerassociationApi extends Api {

  /**
   * Creates a new EzsignfoldersignerassociationApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Create a new Ezsignfoldersignerassociation
   * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
   * @param params.ezsignfoldersignerassociationCreateObjectV1Request 
   */
  async ezsignfoldersignerassociationCreateObjectV1(params: IEzsignfoldersignerassociationCreateObjectV1Params): Promise<EzsignfoldersignerassociationCreateObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfoldersignerassociationCreateObjectV1', params, 'ezsignfoldersignerassociationCreateObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfoldersignerassociation`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsignfoldersignerassociationCreateObjectV1Request'] || {}))

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
   * Delete an existing Ezsignfoldersignerassociation
   * @param params.pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
   */
  async ezsignfoldersignerassociationDeleteObjectV1(params: IEzsignfoldersignerassociationDeleteObjectV1Params): Promise<EzsignfoldersignerassociationDeleteObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfoldersignerassociationDeleteObjectV1', params, 'pkiEzsignfoldersignerassociationID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}`
      .replace(`{${'pkiEzsignfoldersignerassociationID'}}`, encodeURIComponent(`${params['pkiEzsignfoldersignerassociationID']}`));

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
   * Modify an existing Ezsignfoldersignerassociation
   * @param params.pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
   * @param params.ezsignfoldersignerassociationEditObjectV1Request 
   */
  async ezsignfoldersignerassociationEditObjectV1(params: IEzsignfoldersignerassociationEditObjectV1Params): Promise<EzsignfoldersignerassociationEditObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfoldersignerassociationEditObjectV1', params, 'pkiEzsignfoldersignerassociationID');
    this.ensureParamIsSet('ezsignfoldersignerassociationEditObjectV1', params, 'ezsignfoldersignerassociationEditObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}`
      .replace(`{${'pkiEzsignfoldersignerassociationID'}}`, encodeURIComponent(`${params['pkiEzsignfoldersignerassociationID']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsignfoldersignerassociationEditObjectV1Request'] || {}))

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
   * Retrieve a Login Url to allow In-Person signing
   * This endpoint returns a Login Url that can be used in a browser or embedded in an I-Frame to allow in person signing.  The signer Login type must be configured as In-Person.
   * @param params.pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
   */
  async ezsignfoldersignerassociationGetInPersonLoginUrlV1(params: IEzsignfoldersignerassociationGetInPersonLoginUrlV1Params): Promise<EzsignfoldersignerassociationGetInPersonLoginUrlV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfoldersignerassociationGetInPersonLoginUrlV1', params, 'pkiEzsignfoldersignerassociationID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getInPersonLoginUrl`
      .replace(`{${'pkiEzsignfoldersignerassociationID'}}`, encodeURIComponent(`${params['pkiEzsignfoldersignerassociationID']}`));

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
   * Retrieve an existing Ezsignfoldersignerassociation\&#39;s children IDs
   * @param params.pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
   */
  async ezsignfoldersignerassociationGetObjectGetChildrenV1(params: IEzsignfoldersignerassociationGetObjectGetChildrenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfoldersignerassociationGetObjectGetChildrenV1', params, 'pkiEzsignfoldersignerassociationID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getChildren`
      .replace(`{${'pkiEzsignfoldersignerassociationID'}}`, encodeURIComponent(`${params['pkiEzsignfoldersignerassociationID']}`));

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
   * Retrieve an existing Ezsignfoldersignerassociation
   * @param params.pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
   */
  async ezsignfoldersignerassociationGetObjectV1(params: IEzsignfoldersignerassociationGetObjectV1Params): Promise<EzsignfoldersignerassociationGetObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfoldersignerassociationGetObjectV1', params, 'pkiEzsignfoldersignerassociationID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}`
      .replace(`{${'pkiEzsignfoldersignerassociationID'}}`, encodeURIComponent(`${params['pkiEzsignfoldersignerassociationID']}`));

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

