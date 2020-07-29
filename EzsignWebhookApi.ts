/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.5
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
  WebhookEzsignFolderCompleted,
  WebhookEzsignDocumentCompleted,
} from './models';

/**
 * webhookEzsignDocumentCompleted - parameters interface
 */
export interface IWebhookEzsignDocumentCompletedParams {
  webhookPathEzsignDocumentCompleted: string;
  webhookEzsignDocumentCompleted: WebhookEzsignDocumentCompleted;
}

/**
 * webhookEzsignFolderCompleted - parameters interface
 */
export interface IWebhookEzsignFolderCompletedParams {
  webhookPathEzsignFolderCompleted: string;
  webhookEzsignFolderCompleted: WebhookEzsignFolderCompleted;
}

/**
 * EzsignWebhookApi - API class
 */
@autoinject()
export class EzsignWebhookApi extends Api {

  /**
   * Creates a new EzsignWebhookApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * DocumentCompleted
   * This Webhook will be called when the last signature on an Ezsigndocument is made.
   * @param params.webhookPathEzsignDocumentCompleted The path on your server where your webhook listener resides
   * @param params.webhookEzsignDocumentCompleted 
   */
  async webhookEzsignDocumentCompleted(params: IWebhookEzsignDocumentCompletedParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('webhookEzsignDocumentCompleted', params, 'webhookPathEzsignDocumentCompleted');
    this.ensureParamIsSet('webhookEzsignDocumentCompleted', params, 'webhookEzsignDocumentCompleted');

    // Create URL to call
    const url = `${this.basePath}/{WebhookPathEzsignDocumentCompleted}`
      .replace(`{${'WebhookPathEzsignDocumentCompleted'}}`, encodeURIComponent(`${params['webhookPathEzsignDocumentCompleted']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['webhookEzsignDocumentCompleted'] || {}))

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
   * FolderCompleted
   * This Webhook will be called when the last signature on the last Ezsigndocument from the folder is made.
   * @param params.webhookPathEzsignFolderCompleted The path on your server where your webhook listener resides
   * @param params.webhookEzsignFolderCompleted 
   */
  async webhookEzsignFolderCompleted(params: IWebhookEzsignFolderCompletedParams): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('webhookEzsignFolderCompleted', params, 'webhookPathEzsignFolderCompleted');
    this.ensureParamIsSet('webhookEzsignFolderCompleted', params, 'webhookEzsignFolderCompleted');

    // Create URL to call
    const url = `${this.basePath}/{WebhookPathEzsignFolderCompleted}`
      .replace(`{${'WebhookPathEzsignFolderCompleted'}}`, encodeURIComponent(`${params['webhookPathEzsignFolderCompleted']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['webhookEzsignFolderCompleted'] || {}))

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

