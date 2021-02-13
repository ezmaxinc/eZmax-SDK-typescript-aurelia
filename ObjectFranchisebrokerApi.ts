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
  CommonGetAutocompleteV1Response,
} from './models';

/**
 * franchisebrokerGetAutocompleteV1 - parameters interface
 */
export interface IFranchisebrokerGetAutocompleteV1Params {
  sSelector: 'Active' | 'All';
  sQuery?: string;
}

/**
 * ObjectFranchisebrokerApi - API class
 */
@autoinject()
export class ObjectFranchisebrokerApi extends Api {

  /**
   * Creates a new ObjectFranchisebrokerApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Retrieve Franchisebrokers and IDs
   * Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.
   * @param params.sSelector The type of Franchisebrokers to return
   * @param params.sQuery Allow to filter on the option value
   */
  async franchisebrokerGetAutocompleteV1(params: IFranchisebrokerGetAutocompleteV1Params): Promise<CommonGetAutocompleteV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('franchisebrokerGetAutocompleteV1', params, 'sSelector');

    // Create URL to call
    const url = `${this.basePath}/1/object/franchisebroker/getAutocomplete/{sSelector}`
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

