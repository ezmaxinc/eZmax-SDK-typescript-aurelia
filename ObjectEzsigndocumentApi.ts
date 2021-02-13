/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.
 *
 * The version of the OpenAPI document: 1.0.30
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
  EzsigndocumentApplyEzsigntemplateV1Request,
  EzsigndocumentEditObjectV1Request,
  EzsigndocumentApplyEzsigntemplateV1Response,
  EzsigndocumentGetDownloadUrlV1Response,
  EzsigndocumentGetObjectV1Response,
  EzsigndocumentEditObjectV1Response,
  EzsigndocumentDeleteObjectV1Response,
} from './models';

/**
 * ezsigndocumentApplyEzsigntemplateV1 - parameters interface
 */
export interface IEzsigndocumentApplyEzsigntemplateV1Params {
  pkiEzsigndocumentID: number;
  ezsigndocumentApplyEzsigntemplateV1Request: EzsigndocumentApplyEzsigntemplateV1Request;
}

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
 * ezsigndocumentGetChildrenV1 - parameters interface
 */
export interface IEzsigndocumentGetChildrenV1Params {
  pkiEzsigndocumentID: number;
}

/**
 * ezsigndocumentGetDownloadUrlV1 - parameters interface
 */
export interface IEzsigndocumentGetDownloadUrlV1Params {
  pkiEzsigndocumentID: number;
  eDocumentType: 'Initial' | 'Signed' | 'Proof' | 'Proofdocument';
}

/**
 * ezsigndocumentGetObjectV1 - parameters interface
 */
export interface IEzsigndocumentGetObjectV1Params {
  pkiEzsigndocumentID: number;
}

/**
 * ObjectEzsigndocumentApi - API class
 */
@autoinject()
export class ObjectEzsigndocumentApi extends Api {

  /**
   * Creates a new ObjectEzsigndocumentApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Apply an Ezsign Template to the Ezsigndocument.
   * This endpoint applies a predefined template to the ezsign document. This allows to automatically apply all the form and signature fields on a document in a single step.  The document must not already have fields otherwise an error will be returned.
   * @param params.pkiEzsigndocumentID The unique ID of the Ezsigndocument
   * @param params.ezsigndocumentApplyEzsigntemplateV1Request 
   */
  async ezsigndocumentApplyEzsigntemplateV1(params: IEzsigndocumentApplyEzsigntemplateV1Params): Promise<EzsigndocumentApplyEzsigntemplateV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentApplyEzsigntemplateV1', params, 'pkiEzsigndocumentID');
    this.ensureParamIsSet('ezsigndocumentApplyEzsigntemplateV1', params, 'ezsigndocumentApplyEzsigntemplateV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/object/ezsigndocument/{pkiEzsigndocumentID}/applyezsigntemplate`
      .replace(`{${'pkiEzsigndocumentID'}}`, encodeURIComponent(`${params['pkiEzsigndocumentID']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ezsigndocumentApplyEzsigntemplateV1Request'] || {}))

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
   * Retrieve an existing Ezsigndocument\&#39;s children IDs
   * @param params.pkiEzsigndocumentID The unique ID of the Ezsigndocument
   */
  async ezsigndocumentGetChildrenV1(params: IEzsigndocumentGetChildrenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ezsigndocumentGetChildrenV1', params, 'pkiEzsigndocumentID');

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

