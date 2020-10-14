/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.18
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
  CommonGetAutocompleteV1Response,
} from './models';

/**
 * periodGetAutocompleteV1 - parameters interface
 */
export interface IPeriodGetAutocompleteV1Params {
  sSelector: 'ActiveNormal' | 'ActiveNormalAndEndOfYear' | 'AllNormal' | 'AllNormalAndEndOfYear';
  sQuery?: string;
}

/**
 * PeriodApi - API class
 */
@autoinject()
export class PeriodApi extends Api {

  /**
   * Creates a new PeriodApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Retrieve Periods and IDs
   * Get the list of Periods to be used in a dropdown or autocomplete control.
   * @param params.sSelector The types of Periods to return
   * @param params.sQuery Allow to filter on the option value
   */
  async periodGetAutocompleteV1(params: IPeriodGetAutocompleteV1Params): Promise<CommonGetAutocompleteV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('periodGetAutocompleteV1', params, 'sSelector');

    // Create URL to call
    const url = `${this.basePath}/1/object/period/getAutocomplete/{sSelector}`
      .replace(`{${'sSelector'}}`, encodeURIComponent(`${params['sSelector']}`));

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asGet()
      // Set query parameters
      .withParams({ 
        'sQuery': params['sQuery'],
      })

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

