/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign application.  We provide SDKs for customers. They are generated using OpenAPI codegen, we encourage customers to use them as we also provide samples for them.  You can choose to build your own implementation manually or can use any compatible OpenAPI 3.0 generator like Swagger Codegen, OpenAPI codegen or any commercial generators.  If you need helping understanding how to use this API, don\'t waste too much time looking for it. Contact support-api@ezmax.ca, we\'re here to help. We are developpers so we know programmers don\'t like bad documentation. If you don\'t find what you need in the documentation, let us know, we\'ll improve it and put you rapidly up on track.
 *
 * The version of the OpenAPI document: 1.0.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Response for the /1/object/activesession/getCurrent API Request
 */
export interface ActivesessionGetCurrentV1Response {
  mPayload: ActivesessionGetCurrentV1ResponseMPayload;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Payload for the /1/object/activesession/getCurrent API Request
 */
export interface ActivesessionGetCurrentV1ResponseMPayload {
  /**
   * The customer code specific to the client in which the API request is being made
   */
  sCustomerCode: string;
  /**
   * The type of session used for the API request call
   */
  eActivesessionSessiontype: ActivesessionGetCurrentV1ResponseMPayloadEActivesessionSessiontypeEnum;
  /**
   * The ID of the language, Valid values are: 1. French 2. English
   */
  fkiLanguageID: number;
  /**
   * The name of the active Company in the current language
   */
  sCompanyNameX: string;
  /**
   * The name of the active Department in the current language
   */
  sDepartmentNameX: string;
  /**
   * An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key.
   */
  a_RegisteredModules: Array<string>;
  /**
   * An array of permissions granted to the user or api key
   */
  a_Permissions: Array<number>;
}

/**
 * Enum for the eActivesessionSessiontype property.
 */
export type ActivesessionGetCurrentV1ResponseMPayloadEActivesessionSessiontypeEnum = 'Normal';


/**
 * All API response will inherit this based Response
 */
export interface CommonResponse {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Generic Error Message
 */
export interface CommonResponseError {
  /**
   * More detail about the error
   */
  sErrorMessage: string;
}


/**
 * This is a generic debug object that is returned by all API requests
 */
export interface CommonResponseObjDebug {
  /**
   * The peak memory allocated during the API request execution. Formatted as a human readable string
   */
  sMemoryUsage: string;
  /**
   * The total server execution time of the API request execution. Formatted as a human readable string
   */
  sRunTime: string;
  /**
   * The number of SQL SELECT queries that were sent to the database server during the API request execution
   */
  iSQLSelects: number;
  /**
   * The number of SQL INSERT/UPDATE/DELETE queries that were sent to the database server during the API request execution
   */
  iSQLQueries: number;
  /**
   * An array of the SQL Queries that were executed during the API request execution
   */
  a_objSQLQuery: Array<CommonResponseObjSQLQuery>;
}


/**
 * This is a debug object containing debugging information on the actual function
 */
export interface CommonResponseObjDebugPayload {
  /**
   * The minimum version of the function that can be called
   */
  iVersionMin: number;
  /**
   * The maximum version of the function that can be called
   */
  iVersionMax: number;
  /**
   * An array of permissions required to access this function.  If the value \"0\" is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don\'t need to have all of them.
   */
  a_RequiredPermissions: Array<number>;
}


/**
 * Definition of objSQLQuery Object
 */
export interface CommonResponseObjSQLQuery {
  /**
   * The SQL Query
   */
  sQuery: string;
  /**
   * Execution time of the SQL Query in seconds
   */
  fDuration: number;
}


/**
 * Request for the /1/object/ezsigndocument/createObject API Request
 */
export interface EzsigndocumentCreateObjectV1Request {
  objEzsigndocument?: EzsigndocumentRequest;
  objEzsigndocumentCompound?: EzsigndocumentRequestCompound;
}


/**
 * Response for the /1/object/ezsigndocument/createObject API Request
 */
export interface EzsigndocumentCreateObjectV1Response {
  mPayload: EzsigndocumentCreateObjectV1ResponseMPayload;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Payload for the /1/object/ezsigndocument/editObject API Request
 */
export interface EzsigndocumentCreateObjectV1ResponseMPayload {
  /**
   * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
   */
  a_pkiEzsigndocumentID: Array<number>;
}


/**
 * Response for the /1/object/ezsigndocument/deleteObject API Request
 */
export interface EzsigndocumentDeleteObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Request for the /1/object/ezsigndocument/editObject API Request
 */
export interface EzsigndocumentEditObjectV1Request {
  objEzsigndocument?: EzsigndocumentRequest;
}


/**
 * Response for the /1/object/ezsigndocument/editObject API Request
 */
export interface EzsigndocumentEditObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Response for the /1/object/ezsigndocument/getObject API Request
 */
export interface EzsigndocumentGetObjectV1Response {
  /**
   * Payload for the /1/object/ezsigndocument/getObject API Request
   */
  mPayload: object;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * An Ezsigndocument Object
 */
export interface EzsigndocumentRequest {
  /**
   * The name of the document that will be presented to Ezsignfoldersignerassociations
   */
  sEzsignDocumentName: string;
  /**
   * The actual file name that will be used when downloading or attaching to an email.
   */
  sEzsignDocumentFilename: string;
  /**
   * Indicates where to look for the document binary content.
   */
  eEzsigndocumentSource: EzsigndocumentRequestEEzsigndocumentSourceEnum;
  /**
   * Indicates the format of the document.
   */
  eEzsigndocumentFormat: EzsigndocumentRequestEEzsigndocumentFormatEnum;
  /**
   * The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
   */
  sEzsigndocumentBase64?: string;
  /**
   * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
   */
  fkiEzsignfolderID: number;
  /**
   * Represent a Date Time. The timezone is the one configured in the User\'s profile.
   */
  dtEzsigndocumentDuedate: string;
  /**
   * The ID of the language, Valid values are: 1. French 2. English
   */
  fkiLanguageID: number;
}

/**
 * Enum for the eEzsigndocumentSource property.
 */
export type EzsigndocumentRequestEEzsigndocumentSourceEnum = 'Base64';

/**
 * Enum for the eEzsigndocumentFormat property.
 */
export type EzsigndocumentRequestEEzsigndocumentFormatEnum = 'Pdf';


/**
 * An Ezsigndocument Object and children to create a complete structure
 */
export interface EzsigndocumentRequestCompound {
  /**
   * The name of the document that will be presented to Ezsignfoldersignerassociations
   */
  sEzsignDocumentName: string;
  /**
   * The actual file name that will be used when downloading or attaching to an email.
   */
  sEzsignDocumentFilename: string;
  /**
   * Indicates where to look for the document binary content.
   */
  eEzsigndocumentSource: EzsigndocumentRequestCompoundEEzsigndocumentSourceEnum;
  /**
   * Indicates the format of the document.
   */
  eEzsigndocumentFormat: EzsigndocumentRequestCompoundEEzsigndocumentFormatEnum;
  /**
   * The Base64 encoded binary content of the document.  This field is Required when eEzsigndocumentSource = Base64.
   */
  sEzsigndocumentBase64?: string;
  /**
   * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
   */
  fkiEzsignfolderID: number;
  /**
   * Represent a Date Time. The timezone is the one configured in the User\'s profile.
   */
  dtEzsigndocumentDuedate: string;
  /**
   * The ID of the language, Valid values are: 1. French 2. English
   */
  fkiLanguageID: number;
}

/**
 * Enum for the eEzsigndocumentSource property.
 */
export type EzsigndocumentRequestCompoundEEzsigndocumentSourceEnum = 'Base64';

/**
 * Enum for the eEzsigndocumentFormat property.
 */
export type EzsigndocumentRequestCompoundEEzsigndocumentFormatEnum = 'Pdf';


/**
 * Request for the /1/object/ezsignfolder/createObject API Request
 */
export interface EzsignfolderCreateObjectV1Request {
  objEzsignfolder?: EzsignfolderRequest;
  objEzsignfolderCompound?: EzsignfolderRequestCompound;
}


/**
 * Response for the /1/object/ezsignfolder/createObject API Request
 */
export interface EzsignfolderCreateObjectV1Response {
  mPayload: EzsignfolderCreateObjectV1ResponseMPayload;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Payload for the /1/object/ezsignfolder/editObject API Request
 */
export interface EzsignfolderCreateObjectV1ResponseMPayload {
  /**
   * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
   */
  a_pkiEzsignfolderID: Array<number>;
}


/**
 * Response for the /1/object/ezsignfolder/deleteObject API Request
 */
export interface EzsignfolderDeleteObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Request for the /1/object/ezsignfolder/editObject API Request
 */
export interface EzsignfolderEditObjectV1Request {
  objEzsignfolder?: EzsignfolderRequest;
}


/**
 * Response for the /1/object/ezsignfolder/editObject API Request
 */
export interface EzsignfolderEditObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Response for the /1/object/ezsignfolder/getObject API Request
 */
export interface EzsignfolderGetObjectV1Response {
  /**
   * Payload for the /1/object/ezsignfolder/getObject API Request
   */
  mPayload: object;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * An Ezsignfolder Object
 */
export interface EzsignfolderRequest {
  /**
   * The Ezsign Folder Type ID. This value can be queried by the API and is also visible in the admin interface.  There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
   */
  fkiEzsignfoldertypeID: number;
  /**
   * Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values are: 1. No. No TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server\'s time. 2. Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server\'s time. **Additional fee applies** 3. Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies** 
   */
  fkiEzsigntsarequirementID: number;
  /**
   * The description of the Ezsign Folder
   */
  sEzsignfolderDescription: string;
  /**
   * Somes extra notes about the eZsign Folder
   */
  tEzsignfolderNote: string;
  /**
   * Frequency at which reminders will be sent to signers that haven\'t signed the documents
   */
  eEzsignfolderSendreminderfrequency: EzsignfolderRequestEEzsignfolderSendreminderfrequencyEnum;
}

/**
 * Enum for the eEzsignfolderSendreminderfrequency property.
 */
export type EzsignfolderRequestEEzsignfolderSendreminderfrequencyEnum = 'None' | 'Daily' | 'Weekly';


/**
 * An Ezsignfolder Object and children to create a complete structure
 */
export interface EzsignfolderRequestCompound {
  /**
   * An array of signers that will be invited to sign the Ezsigndocuments
   */
  a_Ezsignfoldersignerassociation: Array<EzsignfoldersignerassociationRequest>;
  /**
   * The Ezsign Folder Type ID. This value can be queried by the API and is also visible in the admin interface.  There are two types of Ezsignfoldertype. **User** and **Shared**. **User** can only be seen by the user who created the folder or its assistants. Access to **Shared** folders are configurable for access and email delivery. You should typically choose a **Shared** type here.
   */
  fkiEzsignfoldertypeID: number;
  /**
   * Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values are: 1. No. No TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server\'s time. 2. Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server\'s time. **Additional fee applies** 3. Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies** 
   */
  fkiEzsigntsarequirementID: number;
  /**
   * The description of the Ezsign Folder
   */
  sEzsignfolderDescription: string;
  /**
   * Somes extra notes about the eZsign Folder
   */
  tEzsignfolderNote: string;
  /**
   * Frequency at which reminders will be sent to signers that haven\'t signed the documents
   */
  eEzsignfolderSendreminderfrequency: EzsignfolderRequestCompoundEEzsignfolderSendreminderfrequencyEnum;
}

/**
 * Enum for the eEzsignfolderSendreminderfrequency property.
 */
export type EzsignfolderRequestCompoundEEzsignfolderSendreminderfrequencyEnum = 'None' | 'Daily' | 'Weekly';


/**
 * Request for the /1/object/ezsignfolder/{pkiEzsignfolderID}/send API Request
 */
export interface EzsignfolderSendV1Request {
  /**
   * A custom text message that will be added to the email sent to signatories inviting them to sign.  You can send an empty string and only the generic message will be sent.
   */
  tExtraMessage: string;
}


/**
 * Response for the /1/object/ezsignfolder/{pkiEzsignfolderID}/send API Request
 */
export interface EzsignfolderSendV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Request for the /1/object/ezsignfoldersignerassociation/createObject API Request
 */
export interface EzsignfoldersignerassociationCreateObjectV1Request {
  objEzsignfoldersignerassociation?: EzsignfoldersignerassociationRequest;
  objEzsignfoldersignerassociationCompound?: EzsignfoldersignerassociationRequestCompound;
}


/**
 * Response for the /1/object/ezsignfoldersignerassociation/createObject API Request
 */
export interface EzsignfoldersignerassociationCreateObjectV1Response {
  mPayload: EzsignfoldersignerassociationCreateObjectV1ResponseMPayload;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Payload for the /1/object/ezsignfoldersignerassociation/editObject API Request
 */
export interface EzsignfoldersignerassociationCreateObjectV1ResponseMPayload {
  /**
   * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
   */
  a_pkiEzsignfoldersignerassociationID: Array<number>;
}


/**
 * Response for the /1/object/ezsignfoldersignerassociation/deleteObject API Request
 */
export interface EzsignfoldersignerassociationDeleteObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Request for the /1/object/ezsignfoldersignerassociation/editObject API Request
 */
export interface EzsignfoldersignerassociationEditObjectV1Request {
  objEzsignfoldersignerassociation?: EzsignfoldersignerassociationRequest;
}


/**
 * Response for the /1/object/ezsignfoldersignerassociation/editObject API Request
 */
export interface EzsignfoldersignerassociationEditObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Response for the /1/object/ezsignfoldersignerassociation/getObject API Request
 */
export interface EzsignfoldersignerassociationGetObjectV1Response {
  /**
   * Payload for the /1/object/ezsignfoldersignerassociation/getObject API Request
   */
  mPayload: object;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * An Ezsignfoldersignerassociation Object
 */
export interface EzsignfoldersignerassociationRequest {
  /**
   * A reference to a valid User.  This is only used if the signatory will be a user from the system.
   */
  fkiUserID?: number;
  /**
   * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
   */
  fkiEzsignfolderID: number;
}


/**
 * An Ezsignfoldersignerassociation Object and children to create a complete structure
 */
export interface EzsignfoldersignerassociationRequestCompound {
  objEzsignsigner?: EzsignsignerRequestCompound;
  /**
   * A reference to a valid User.  This is only used if the signatory will be a user from the system.
   */
  fkiUserID?: number;
  /**
   * A reference to a valid Ezsignfolder.  That value is returned after a successful Ezsignfolder Creation.
   */
  fkiEzsignfolderID: number;
}


/**
 * Request for the /1/object/ezsignsignature/createObject API Request
 */
export interface EzsignsignatureCreateObjectV1Request {
  objEzsignsignature?: EzsignsignatureRequest;
  objEzsignsignatureCompound?: EzsignsignatureRequestCompound;
}


/**
 * Response for the /1/object/ezsignsignature/createObject API Request
 */
export interface EzsignsignatureCreateObjectV1Response {
  mPayload: EzsignsignatureCreateObjectV1ResponseMPayload;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Payload for the /1/object/ezsignsignature/editObject API Request
 */
export interface EzsignsignatureCreateObjectV1ResponseMPayload {
  /**
   * An array of unique IDs representing the object that were requested to be created.  They are returned in the same order as the array containing the objects to be created that was sent in the request.
   */
  a_pkiEzsignsignatureID: Array<number>;
}


/**
 * Response for the /1/object/ezsignsignature/deleteObject API Request
 */
export interface EzsignsignatureDeleteObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Request for the /1/object/ezsignsignature/editObject API Request
 */
export interface EzsignsignatureEditObjectV1Request {
  objEzsignsignature?: EzsignsignatureRequest;
}


/**
 * Response for the /1/object/ezsignsignature/editObject API Request
 */
export interface EzsignsignatureEditObjectV1Response {
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * Response for the /1/object/ezsignsignature/getObject API Request
 */
export interface EzsignsignatureGetObjectV1Response {
  /**
   * Payload for the /1/object/ezsignsignature/getObject API Request
   */
  mPayload: object;
  objDebugPayload?: CommonResponseObjDebugPayload;
  objDebug?: CommonResponseObjDebug;
}


/**
 * An Ezsignsignature Object
 */
export interface EzsignsignatureRequest {
  /**
   * A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
   */
  fkiEzsignfoldersignerassociationID: number;
  /**
   * The page number in the document where to apply the signature
   */
  iEzsignpagePagenumber: number;
  /**
   * The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
   */
  iEzsignsignatureX: number;
  /**
   * The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
   */
  iEzsignsignatureY: number;
  /**
   * The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
   */
  iEzsignsignatureStep: number;
  /**
   * The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
   */
  eEzsignsignatureType: EzsignsignatureRequestEEzsignsignatureTypeEnum;
  /**
   * A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
   */
  fkiEzsigndocumentID: number;
}

/**
 * Enum for the eEzsignsignatureType property.
 */
export type EzsignsignatureRequestEEzsignsignatureTypeEnum = 'Acknowledgement' | 'Handwritten' | 'Initials' | 'Name';


/**
 * An Ezsignsignature Object and children to create a complete structure
 */
export interface EzsignsignatureRequestCompound {
  /**
   * A reference to a valid Ezsignfoldersignerassociation.  That value is returned after a successful Ezsignfoldersignerassociation Creation. 
   */
  fkiEzsignfoldersignerassociationID: number;
  /**
   * The page number in the document where to apply the signature
   */
  iEzsignpagePagenumber: number;
  /**
   * The X coordinate (Horizontal) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 2 inches from the left border of the page, you would use \"200\" for the X coordinate.
   */
  iEzsignsignatureX: number;
  /**
   * The Y coordinate (Vertical) where to put the signature block on the page.  Coordinate is calculated at 100dpi (dot per inch). So for example, if you want to put the signature block 3 inches from the top border of the page, you would use \"300\" for the Y coordinate.
   */
  iEzsignsignatureY: number;
  /**
   * The step when the Ezsignsigner will be invited to sign.  For example, if you say iEzsignsignatureStep=2, that block of signature will be available for signature only after ALL the signatures in step 1 are completed.
   */
  iEzsignsignatureStep: number;
  /**
   * The type of signature required.  1. **Acknowledgement** is for an acknowledgment of receipt. 2. **Handwritten** is for a handwritten kind of signature where users needs to \"draw\" their signature on screen. 3. **Initials** is a simple \"click to add initials\" block. 4. **Name** is a simple \"Click to sign\" block. This is the most common block of signature.
   */
  eEzsignsignatureType: EzsignsignatureRequestCompoundEEzsignsignatureTypeEnum;
  /**
   * A reference to a valid Ezsigndocument.  That value is returned after a successful Ezsigndocumentation Creation.
   */
  fkiEzsigndocumentID: number;
}

/**
 * Enum for the eEzsignsignatureType property.
 */
export type EzsignsignatureRequestCompoundEEzsignsignatureTypeEnum = 'Acknowledgement' | 'Handwritten' | 'Initials' | 'Name';


/**
 * An Ezsignsigner Object
 */
export interface EzsignsignerRequest {
  /**
   * The ID of the tax assignment, Valid values are: 1. No tax 2. GST 3. HST (ON) 4. HST (NB) 5. HST (NS) 6. HST (NL) 7. HST (PE) 8. GST + QST (QC) 9. GST + QST (QC) Non-Recoverable 10. GST + PST (BC) 11. GST + PST (SK) 12. GST + RST (MB) 13. GST + PST (BC) Non-Recoverable 14. GST + PST (SK) Non-Recoverable 15. GST + RST (MB) Non-Recoverable
   */
  fkiTaxassignmentID: number;
  /**
   * The ID of the secret question, Valid values are:  1. The name of the hospital in which you were born 2. The name of your grade school 3. The last name of your favorite teacher 4. Your favorite sports team 5. Your favorite TV show 6. Your favorite movie 7. The name of the street on which you grew up 8. The name of your first employer 9. Your first car 10. Your favorite food 11. The name of your first pet 12. Favorite musician/band 13. What instrument you play 14. Your father\'s middle name 15. Your mother\'s maiden name 16. Name of your eldest child 17. Your spouse\'s middle name 18. Favorite restaurant 19. Childhood nickname 20. Favorite vacation destination 21. Your boat\'s name 22. Date of Birth (YYYY-MM-DD)
   */
  fkiSecretquestionID?: number;
  /**
   * The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **Phone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**.
   */
  eEzsignsignerLogintype: EzsignsignerRequestEEzsignsignerLogintypeEnum;
  /**
   * The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
   */
  sEzsignsignerSecretanswer?: string;
}

/**
 * Enum for the eEzsignsignerLogintype property.
 */
export type EzsignsignerRequestEEzsignsignerLogintypeEnum = 'Password' | 'PasswordPhone' | 'PasswordQuestion' | 'Phone';


/**
 * An Ezsignsigner Object and children to create a complete structure
 */
export interface EzsignsignerRequestCompound {
  objContact: EzsignsignerRequestCompoundContact;
  /**
   * The ID of the tax assignment, Valid values are: 1. No tax 2. GST 3. HST (ON) 4. HST (NB) 5. HST (NS) 6. HST (NL) 7. HST (PE) 8. GST + QST (QC) 9. GST + QST (QC) Non-Recoverable 10. GST + PST (BC) 11. GST + PST (SK) 12. GST + RST (MB) 13. GST + PST (BC) Non-Recoverable 14. GST + PST (SK) Non-Recoverable 15. GST + RST (MB) Non-Recoverable
   */
  fkiTaxassignmentID: number;
  /**
   * The ID of the secret question, Valid values are:  1. The name of the hospital in which you were born 2. The name of your grade school 3. The last name of your favorite teacher 4. Your favorite sports team 5. Your favorite TV show 6. Your favorite movie 7. The name of the street on which you grew up 8. The name of your first employer 9. Your first car 10. Your favorite food 11. The name of your first pet 12. Favorite musician/band 13. What instrument you play 14. Your father\'s middle name 15. Your mother\'s maiden name 16. Name of your eldest child 17. Your spouse\'s middle name 18. Favorite restaurant 19. Childhood nickname 20. Favorite vacation destination 21. Your boat\'s name 22. Date of Birth (YYYY-MM-DD)
   */
  fkiSecretquestionID?: number;
  /**
   * The method the Ezsignsigner will authenticate to the signing platform.  1. **Password** means the Ezsignsigner will receive a secure link by email. 2. **PasswordPhone** means the Ezsignsigner will receive a secure link by email and will need to authenticate using SMS or Phone call. **Additional fee applies**. 3. **PasswordQuestion** means the Ezsignsigner will receive a secure link by email and will need to authenticate using a predefined question and answer. 4. **Phone** means the Ezsignsigner will only be able to sign \"In-Person\" and will need to authenticate using SMS or Phone call. No email will be sent for invitation to sign. **Additional fee applies**.
   */
  eEzsignsignerLogintype: EzsignsignerRequestCompoundEEzsignsignerLogintypeEnum;
  /**
   * The predefined answer to the secret question the Ezsignsigner will need to provide to successfully authenticate.
   */
  sEzsignsignerSecretanswer?: string;
}

/**
 * Enum for the eEzsignsignerLogintype property.
 */
export type EzsignsignerRequestCompoundEEzsignsignerLogintypeEnum = 'Password' | 'PasswordPhone' | 'PasswordQuestion' | 'Phone';


/**
 * A Ezsignsigner->Contact Object and children to create a complete structure
 */
export interface EzsignsignerRequestCompoundContact {
  /**
   * The first name of the Contact
   */
  sContactFirstname: string;
  /**
   * The last name of the Contact
   */
  sContactLastname: string;
  /**
   * The ID of the language, Valid values are: 1. French 2. English
   */
  fkiLanguageID: number;
  /**
   * The email address of the contact. Must be filled if email authentification was requested
   */
  sEmailAddress?: string;
  /**
   * The Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
   */
  sPhoneNumber?: string;
  /**
   * The Cell Phone number of the contact. Use format \"5149901516\" for North American Numbers (Without \"1\" for long distance code) you would dial like this: 1-514-990-1516. Use format \"498945233886\" for international numbers (Without \"011\") you would dial like this: +49 89 452 33 88-6. In this example \"49\" is the country code of Germany.
   */
  sPhoneNumberCell?: string;
}

