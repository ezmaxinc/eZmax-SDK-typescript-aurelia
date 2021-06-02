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
  SsprResetPasswordRequestV1Request,
  SsprSendUsernamesV1Request,
  SsprUnlockAccountRequestV1Request,
  SsprValidateTokenV1Request,
  SsprResetPasswordV1Request,
  SsprUnlockAccountV1Request,
} from './models';

/**
 * ssprResetPasswordRequestV1 - parameters interface
 */
export interface ISsprResetPasswordRequestV1Params {
  ssprResetPasswordRequestV1Request: SsprResetPasswordRequestV1Request;
}

/**
 * ssprResetPasswordV1 - parameters interface
 */
export interface ISsprResetPasswordV1Params {
  ssprResetPasswordV1Request: SsprResetPasswordV1Request;
}

/**
 * ssprSendUsernamesV1 - parameters interface
 */
export interface ISsprSendUsernamesV1Params {
  ssprSendUsernamesV1Request: SsprSendUsernamesV1Request;
}

/**
 * ssprUnlockAccountRequestV1 - parameters interface
 */
export interface ISsprUnlockAccountRequestV1Params {
  ssprUnlockAccountRequestV1Request: SsprUnlockAccountRequestV1Request;
}

/**
 * ssprUnlockAccountV1 - parameters interface
 */
export interface ISsprUnlockAccountV1Params {
  ssprUnlockAccountV1Request: SsprUnlockAccountV1Request;
}

/**
 * ssprValidateTokenV1 - parameters interface
 */
export interface ISsprValidateTokenV1Params {
  ssprValidateTokenV1Request: SsprValidateTokenV1Request;
}

/**
 * ModuleSsprApi - API class
 */
@autoinject()
export class ModuleSsprApi extends Api {

  /**
   * Creates a new ModuleSsprApi class.
   *
   * @param httpClient The Aurelia HTTP client to be injected.
   * @param authStorage A storage for authentication data.
   */
  constructor(httpClient: HttpClient, authStorage: AuthStorage) {
    super(httpClient, authStorage);
  }

  /**
   * Reset Password Request
   * This endpoint sends an email with a link to reset the user\&#39;s password.  sEmailAddress must be set if eUserTypeSSPR &#x3D; EzsignUser  sUserLoginname must be set if eUserTypeSSPR &#x3D; Native
   * @param params.ssprResetPasswordRequestV1Request 
   */
  async ssprResetPasswordRequestV1(params: ISsprResetPasswordRequestV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ssprResetPasswordRequestV1', params, 'ssprResetPasswordRequestV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/module/sspr/resetPasswordRequest`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ssprResetPasswordRequestV1Request'] || {}))

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
   * Reset Password
   * This endpoint resets the user\&#39;s password.  sEmailAddress must be set if eUserTypeSSPR &#x3D; EzsignUser  sUserLoginname must be set if eUserTypeSSPR &#x3D; Native
   * @param params.ssprResetPasswordV1Request 
   */
  async ssprResetPasswordV1(params: ISsprResetPasswordV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ssprResetPasswordV1', params, 'ssprResetPasswordV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/module/sspr/resetPassword`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ssprResetPasswordV1Request'] || {}))

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
   * Send username(s)
   * This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username
   * @param params.ssprSendUsernamesV1Request 
   */
  async ssprSendUsernamesV1(params: ISsprSendUsernamesV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ssprSendUsernamesV1', params, 'ssprSendUsernamesV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/module/sspr/sendUsernames`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ssprSendUsernamesV1Request'] || {}))

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
   * Unlock Account Request
   * This endpoint sends an email with a link to unlock the user account.  sEmailAddress must be set if eUserTypeSSPR &#x3D; EzsignUser  sUserLoginname must be set if eUserTypeSSPR &#x3D; Native
   * @param params.ssprUnlockAccountRequestV1Request 
   */
  async ssprUnlockAccountRequestV1(params: ISsprUnlockAccountRequestV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ssprUnlockAccountRequestV1', params, 'ssprUnlockAccountRequestV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/module/sspr/unlockAccountRequest`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ssprUnlockAccountRequestV1Request'] || {}))

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
   * Unlock Account
   * This endpoint unlocks the user account.  sEmailAddress must be set if eUserTypeSSPR &#x3D; EzsignUser  sUserLoginname must be set if eUserTypeSSPR &#x3D; Native
   * @param params.ssprUnlockAccountV1Request 
   */
  async ssprUnlockAccountV1(params: ISsprUnlockAccountV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ssprUnlockAccountV1', params, 'ssprUnlockAccountV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/module/sspr/unlockAccount`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ssprUnlockAccountV1Request'] || {}))

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
   * Validate Token
   * This endpoint validates if a Token is valid and not expired.  sEmailAddress must be set if eUserTypeSSPR &#x3D; EzsignUser  sUserLoginname must be set if eUserTypeSSPR &#x3D; Native
   * @param params.ssprValidateTokenV1Request 
   */
  async ssprValidateTokenV1(params: ISsprValidateTokenV1Params): Promise<any> {
    // Verify required parameters are set
    this.ensureParamIsSet('ssprValidateTokenV1', params, 'ssprValidateTokenV1Request');

    // Create URL to call
    const url = `${this.basePath}/1/module/sspr/validateToken`;

    const response = await this.httpClient.createRequest(url)
      // Set HTTP method
      .asPost()
      // Encode body parameter
      .withHeader('content-type', 'application/json')
      .withContent(JSON.stringify(params['ssprValidateTokenV1Request'] || {}))

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

