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
 * All API response will inherit this based Response.
 */
export interface GenericResponse {
  objDebugPayload?: GenericResponseObjDebugPayload;
  objDebug?: GenericResponseObjDebug;
}


/**
 * This is a generic debug object that is returned by all API requests.
 */
export interface GenericResponseObjDebug {
  /**
   * The peak memory allocated during the API request execution. Formatted as a human readable string.
   */
  sMemoryUsage: string;
  /**
   * The total server execution time of the API request execution. Formatted as a human readable string.
   */
  sRunTime: string;
  /**
   * The number of SQL SELECT queries that were sent to the database server during the API request execution.
   */
  iSQLSelects: number;
  /**
   * The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution.
   */
  iSQLQueries: number;
  /**
   * An array of the SQL Queries that were executed during the API request execution.
   */
  a_objQuery: Array<GenericResponseObjSQLQuery>;
}


/**
 * This is a debug object containing debugging information on the actual function.
 */
export interface GenericResponseObjDebugPayload {
  /**
   * The minimum version of the function that can be called.
   */
  iVersionMin: number;
  /**
   * The maximum version of the function that can be called.
   */
  iVersionMax: number;
  /**
   * An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don\'t need to have all of them.
   */
  a_RequiredPermissions: Array<number>;
}


/**
 * Definition of objSQLQuery Object.
 */
export interface GenericResponseObjSQLQuery {
  /**
   * The SQL Query
   */
  sQuery: string;
  /**
   * Execution time of the SQL Query in seconds.
   */
  fDuration: number;
}


/**
 * Response for the /1/object/activesession/getCurrent API Request.
 */
export interface ObjectActivesessionGetCurrentV1Response extends GenericResponse {
  mPayload: ObjectActivesessionGetCurrentV1ResponseMPayload;
}


/**
 * Payload for the /1/object/activesession/getCurrent API Request.
 */
export interface ObjectActivesessionGetCurrentV1ResponseMPayload {
  /**
   * The customer code specific to the client in which the API request is being made.
   */
  sCustomerCode: string;
  /**
   * The type of session used for the API request call.
   */
  eActivesessionSessiontype: ObjectActivesessionGetCurrentV1ResponseMPayloadEActivesessionSessiontypeEnum;
  /**
   * The ID of the language, Valid values are: 1. French 2. English
   */
  fkiLanguageID: number;
  /**
   * The name of the active Company in the current language.
   */
  sCompanyNameX: string;
  /**
   * The name of the active Department in the current language.
   */
  sDepartmentNameX: string;
  /**
   * An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
   */
  a_RegisteredModules: Array<string>;
  /**
   * An array of permissions granted to the user or api key. 
   */
  a_Permissions: Array<number>;
}

/**
 * Enum for the eActivesessionSessiontype property.
 */
export type ObjectActivesessionGetCurrentV1ResponseMPayloadEActivesessionSessiontypeEnum = 'Normal';

