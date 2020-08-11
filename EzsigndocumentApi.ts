/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.10
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
  EzsigndocumentCreateObjectV1Response,
  EzsigndocumentEditObjectV1Request,
  EzsigndocumentGetDownloadUrlV1Response,
  EzsigndocumentGetObjectV1Response,
  EzsigndocumentEditObjectV1Response,
  EzsigndocumentDeleteObjectV1Response,
} from './models';

/**
 * ezsigndocumentCreateObjectV1 - parameters interface
 */
export interface IEzsigndocumentCreateObjectV1Params {
  ezsigndocumentCreateObjectV1Request: Array<EzsigndocumentCreateObjectV1Request>;
}

/**
 * ezsigndocumentDeleteObjectV1 - parameters interface
 */
export interface IEzsigndocumentDeleteObjectV1Params {
  pkiEzsigndocumentID: number;
}

/**
 * ezsigndocumentEditObjectV1 - parameters interface
 */
export interface IEzsigndocumentEditObjectV1Params {
  pkiEzsigndocumentID: number;
  ezsigndocumentEditObjectV1Request: EzsigndocumentEditObjectV1Request;
}

/**
 * ezsigndocumentGetDownloadUrlV1 - parameters interface
 */
export interface IEzsigndocumentGetDownloadUrlV1Params {
  pkiEzsigndocumentID: number;
  eDocumentType: 'Initial' | 'Signed' | 'Proof' | 'Proofdocument';
}

/**
 * ezsigndocumentGetObjectGetChildrenV1 - parameters interface
 */
export interface IEzsigndocumentGetObjectGetChildrenV1Params {
  pkiEzsigndocumentID: number;
}

/**
 * ezsigndocumentGetObjectV1 - parameters interface
 */
export interface IEzsigndocumentGetObjectV1Params {
  pkiEzsigndocumentID: number;
}

/**
 * EzsigndocumentApi - API class
 */
@autoinject()
export class EzsigndocumentApi extends Api {

  /**
   * Creates a new EzsigndocumentApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Create a new Ezsigndocument
   * The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.
   * @param params.ezsigndocumentCreateObjectV1Request 
   */
  async ezsigndocumentCreateObjectV1(params: IEzsigndocumentCreateObjectV1Params): Promise<EzsigndocumentCreateObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentCreateObjectV1', params, 'ezsigndocumentCreateObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsigndocument`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsigndocumentCreateObjectV1Request'] || {}))

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
   * Delete an existing Ezsigndocument
   * @param params.pkiEzsigndocumentID The unique ID of the Ezsigndocument
   */
  async ezsigndocumentDeleteObjectV1(params: IEzsigndocumentDeleteObjectV1Params): Promise<EzsigndocumentDeleteObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentDeleteObjectV1', params, 'pkiEzsigndocumentID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsigndocument/{pkiEzsigndocumentID}`
      .replace(`{${'pkiEzsigndocumentID'}}`, encodeURIComponent(`${params['pkiEzsigndocumentID']}`));

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
   * Modify an existing Ezsigndocument
   * @param params.pkiEzsigndocumentID The unique ID of the Ezsigndocument
   * @param params.ezsigndocumentEditObjectV1Request 
   */
  async ezsigndocumentEditObjectV1(params: IEzsigndocumentEditObjectV1Params): Promise<EzsigndocumentEditObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentEditObjectV1', params, 'pkiEzsigndocumentID');
    this.ensureParamIsSet('ezsigndocumentEditObjectV1', params, 'ezsigndocumentEditObjectV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsigndocument/{pkiEzsigndocumentID}`
      .replace(`{${'pkiEzsigndocumentID'}}`, encodeURIComponent(`${params['pkiEzsigndocumentID']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPut()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsigndocumentEditObjectV1Request'] || {}))

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
   * Retrieve a URL to download documents.
   * This endpoint returns URLs to different files that can be downloaded during the signing process.  These links will expire after 5 minutes so the download of the file should be made soon after retrieving the link.
   * @param params.pkiEzsigndocumentID The unique ID of the Ezsigndocument
   * @param params.eDocumentType The type of document to retrieve.  1. **Initial** Is the initial document before any signature were applied. 2. **Signed** Is the final document once all signatures were applied. 3. **Proofdocument** Is the evidence report. 4. **Proof** Is the complete evidence archive including all of the above and more. 
   */
  async ezsigndocumentGetDownloadUrlV1(params: IEzsigndocumentGetDownloadUrlV1Params): Promise<EzsigndocumentGetDownloadUrlV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentGetDownloadUrlV1', params, 'pkiEzsigndocumentID');
    this.ensureParamIsSet('ezsigndocumentGetDownloadUrlV1', params, 'eDocumentType');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsigndocument/{pkiEzsigndocumentID}/getDownloadUrl/{eDocumentType}`
      .replace(`{${'pkiEzsigndocumentID'}}`, encodeURIComponent(`${params['pkiEzsigndocumentID']}`))
      .replace(`{${'eDocumentType'}}`, encodeURIComponent(`${params['eDocumentType']}`));

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
   * Retrieve an existing Ezsigndocument\&#39;s children IDs
   * @param params.pkiEzsigndocumentID The unique ID of the Ezsigndocument
   */
  async ezsigndocumentGetObjectGetChildrenV1(params: IEzsigndocumentGetObjectGetChildrenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentGetObjectGetChildrenV1', params, 'pkiEzsigndocumentID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsigndocument/{pkiEzsigndocumentID}/getChildren`
      .replace(`{${'pkiEzsigndocumentID'}}`, encodeURIComponent(`${params['pkiEzsigndocumentID']}`));

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
   * Retrieve an existing Ezsigndocument
   * @param params.pkiEzsigndocumentID The unique ID of the Ezsigndocument
   */
  async ezsigndocumentGetObjectV1(params: IEzsigndocumentGetObjectV1Params): Promise<EzsigndocumentGetObjectV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentGetObjectV1', params, 'pkiEzsigndocumentID');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsigndocument/{pkiEzsigndocumentID}`
      .replace(`{${'pkiEzsigndocumentID'}}`, encodeURIComponent(`${params['pkiEzsigndocumentID']}`));

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

