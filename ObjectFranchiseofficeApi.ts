/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.35
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
 * franchiseofficeGetAutocompleteV1 - parameters interface
 */
export interface IFranchiseofficeGetAutocompleteV1Params {
  sSelector: 'Active' | 'All';
  sQuery?: string;
}

/**
 * ObjectFranchiseofficeApi - API class
 */
@autoinject()
export class ObjectFranchiseofficeApi extends Api {

  /**
   * Creates a new ObjectFranchiseofficeApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Retrieve Franchiseoffices and IDs
   * Get the list of Franchiseoffices to be used in a dropdown or autocomplete control.
   * @param params.sSelector The type of Franchiseoffices to return
   * @param params.sQuery Allow to filter on the option value
   */
  async franchiseofficeGetAutocompleteV1(params: IFranchiseofficeGetAutocompleteV1Params): Promise<CommonGetAutocompleteV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('franchiseofficeGetAutocompleteV1', params, 'sSelector');

    // Create URL to call
    const url = `${this.basePath}/1/object/franchiseoffice/getAutocomplete/{sSelector}`
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

