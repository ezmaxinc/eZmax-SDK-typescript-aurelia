/**
 * eZmax API Definition
 * TODO Api description
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Class to storage authentication data
 */
export class AuthStorage {
  private storage: Map<string, string>;

  constructor() {
    this.storage = new Map();
  }

  /**
   * Sets the Authorization auth method value.
   *
   * @param value The new value to set for Authorization.
   */
  setAuthorization(value: string): this {
    this.storage.set('Authorization', value);
    return this;
  }

  /**
   * Removes the Authorization auth method value.
   */
  removeAuthorization(): this {
    this.storage.delete('Authorization');
    return this;
  }

  /**
   * Gets the Authorization auth method value.
   */
  getAuthorization(): null | string {
    return this.storage.get('Authorization') || null;
  }
}
