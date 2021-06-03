/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.46
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
  UserCreateEzsignuserV1Response,
} from './models';

/**
 * userCreateEzsignuserV1 - parameters interface
 */
export interface IUserCreateEzsignuserV1Params {
  userCreateEzsignuserV1Request: Array<UserCreateEzsignuserV1Request>;
}

/**
 * ModuleUserApi - API class
 */
@autoinject()
export class ModuleUserApi extends Api {

  /**
   * Creates a new ModuleUserApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Create a new User of type Ezsignuser
   * The endpoint allows to initiate the creation or a user of type Ezsignuser.  The user will be created only once the email verification process will be completed
   * @param params.userCreateEzsignuserV1Request 
   */
  async userCreateEzsignuserV1(params: IUserCreateEzsignuserV1Params): Promise<UserCreateEzsignuserV1Response> {
    // Verify required parameters are set
    this.ensureParamIsSet('userCreateEzsignuserV1', params, 'userCreateEzsignuserV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/module/user/createezsignuser`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['userCreateEzsignuserV1Request'] || {}))

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

