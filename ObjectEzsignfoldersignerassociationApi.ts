/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.45
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
 * ezsignfoldersignerassociationGetChildrenV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationGetChildrenV1Params {
  pkiEzsignfoldersignerassociationID: number;
}

/**
 * ezsignfoldersignerassociationGetInPersonLoginUrlV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationGetInPersonLoginUrlV1Params {
  pkiEzsignfoldersignerassociationID: number;
}

/**
 * ezsignfoldersignerassociationGetObjectV1 - parameters interface
 */
export interface IEzsignfoldersignerassociationGetObjectV1Params {
  pkiEzsignfoldersignerassociationID: number;
}

/**
 * ObjectEzsignfoldersignerassociationApi - API class
 */
@autoinject()
export class ObjectEzsignfoldersignerassociationApi extends Api {

  /**
   * Creates a new ObjectEzsignfoldersignerassociationApi class.
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
   * Retrieve an existing Ezsignfoldersignerassociation\&#39;s children IDs
   * @param params.pkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
   */
  async ezsignfoldersignerassociationGetChildrenV1(params: IEzsignfoldersignerassociationGetChildrenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsignfoldersignerassociationGetChildrenV1', params, 'pkiEzsignfoldersignerassociationID');

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

