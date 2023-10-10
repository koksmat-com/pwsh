/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/authorize": {
    /**
     * Authenticating app 
     * @description 
     * 
     * You need an ´appkey´  to access the API. The ´appkey´  is issue by [niels.johansen@nexigroup.com](mailto:niels.johansen@nexigroup.com).
     * 
     * Use the ´appkey´  to get an access token through the /v1/authorize end point. The access token is valid for 10 minutes.
     * 
     * Pass the access token in the Authorization header as a Bearer token to access the API.
     */
    post: operations["koksmat/restapi.signin"];
  };
  "/blob/{tag}": {
    /**
     * Reading blob 
     * @description 
     * 
     * 
     * Returns a piece of unstructured data
     */
    get: operations["koksmat/restapi.getBlob"];
  };
  "/v1/addresses/{address}": {
    /** Lookup an address */
    get: operations["koksmat/restapi.resolveAddress"];
  };
  "/v1/admin/auditlogs/date/{date}/{hour}": {
    /**
     * Get audit logs metadata  
     * @description Get audit logs by date and hour - timezone is  GMT
     */
    get: operations["koksmat/restapi.getAuditLogs"];
  };
  "/v1/admin/auditlogs/powershell/{objectId}": {
    /** Get audit logs */
    get: operations["koksmat/restapi.getAuditLogPowershell"];
  };
  "/v1/admin/auditlogsummary": {
    /**
     * Get Audit Log summary 
     * @description Get Audit Log summary
     */
    get: operations["koksmat/restapi.GetAuditLogSummarys"];
  };
  "/v1/admin/sharepoint/copylibrary": {
    /**
     * Copy a library  
     * @description 
     * 	Copy a library from one site to another site, can also copy internally in the same site
     * 
     * 	Future: Copy a library from one site to another site, cross tenancy
     */
    post: operations["koksmat/restapi.copyLibrary"];
  };
  "/v1/admin/sharepoint/renamelibrary": {
    /**
     * Rename a Library or List  
     * @description 
     * 	Rename a library title and URL
     */
    post: operations["koksmat/restapi.renameLibrary"];
  };
  "/v1/business/countries": {
    /** Get a country */
    get: operations["koksmat/restapi.getCountries"];
  };
  "/v1/business/units": {
    /** Get busines and group units */
    get: operations["koksmat/restapi.getBusinessAndGroupUnits"];
  };
  "/v1/info/": {
    /** Get runtime info */
    get: operations["koksmat/restapi.getInfo"];
  };
  "/v1/info/domains": {
    /** Get supported domains */
    get: operations["koksmat/restapi.getDomains"];
  };
  "/v1/rooms/sharepoint/provision": {
    /**
     * Provision a room 
     * @description Provision a room by referencing to a sharepoint item id
     */
    post: operations["koksmat/restapi.provisionRoom"];
  };
  "/v1/sharedmailboxes/": {
    /**
     * Get Shared Mailboxes 
     * @description List all Shared Mailboxes
     */
    get: operations["koksmat/restapi.listSharedMailbox"];
    /**
     * Create a Shared Mailbox 
     * @description Create a Shared Mailbox
     */
    post: operations["koksmat/restapi.createSharedMailbox"];
  };
  "/v1/sharedmailboxes/{exchangeObjectId}": {
    /** Get a Shared Mailbox */
    get: operations["koksmat/restapi.getSharedMailbox"];
    /** Delete a shared Mailboxes */
    delete: operations["koksmat/restapi.deleteSharedMailbox"];
    /**
     * Update a Shared Mailbox 
     * @description Updates a Shared Mailbox
     */
    patch: operations["koksmat/restapi.updateSharedMailbox"];
  };
  "/v1/sharedmailboxes/{exchangeObjectId}/members": {
    /** Add members to a Shared Mailbox */
    post: operations["koksmat/restapi.addSharedMailboxMembers"];
    /** Removes members from a Shared Mailbox */
    delete: operations["koksmat/restapi.removeSharedMailboxMembers"];
  };
  "/v1/sharedmailboxes/{exchangeObjectId}/owners": {
    /** Add owners to a Shared Mailbox */
    patch: operations["koksmat/restapi.setSharedMailboxOwners"];
  };
  "/v1/sharedmailboxes/{exchangeObjectId}/primarysmtp": {
    /** Update a Shared Mailbox primary smtp address */
    patch: operations["koksmat/restapi.updateSharedMailboxPrimaryEmailAddress"];
  };
  "/v1/sharedmailboxes/{exchangeObjectId}/readers": {
    /** Add readers to a Shared Mailbox */
    post: operations["koksmat/restapi.addSharedMailboxReaders"];
    /** Removes readers from a Shared Mailbox */
    delete: operations["koksmat/restapi.removeSharedMailboxReaders"];
  };
  "/v1/sharedmailboxes/{exchangeObjectId}/smtp": {
    /** Add a smtp address to a Shared Mailbox [NOT IMPLEMENTED] */
    post: operations["koksmat/restapi.addSharedMailboxEmail"];
    /** Removes a smtp address from a Shared Mailbox [NOT IMPLEMENTED] */
    delete: operations["koksmat/restapi.removeSharedMailboxEmail"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    AuditAuditLogSum: {
      count?: number;
      /** Format: date-time */
      created_at?: string;
      date?: string;
      hour?: string;
      id?: components["schemas"]["PrimitiveObjectID"];
      subject?: string;
      /** Format: date-time */
      updated_at?: string;
    };
    AuditPowerShellLog: {
      appid?: string;
      console?: string;
      /** Format: date-time */
      created_at?: string;
      database?: string;
      haserror?: boolean;
      id?: components["schemas"]["PrimitiveObjectID"];
      input?: string;
      result?: string;
      scriptname?: string;
      scriptsrc?: string;
      subject?: string;
      /** Format: date-time */
      updated_at?: string;
    };
    AuditPowerShellLogMetadata: {
      appid?: string;
      /** Format: date-time */
      created_at?: string;
      database?: string;
      haserror?: boolean;
      id?: components["schemas"]["PrimitiveObjectID"];
      scriptname?: string;
      subject?: string;
      /** Format: date-time */
      updated_at?: string;
    };
    ModelBusinessGroupUnit: {
      /** Format: date-time */
      created_at?: string;
      id?: components["schemas"]["PrimitiveObjectID"];
      /** @example Finance */
      name?: string;
      /** @example finance */
      short?: string;
      /** Format: date-time */
      updated_at?: string;
    };
    ModelCountry: {
      /** @example Sweden */
      Name?: string;
      /** @example SE */
      code?: string;
      /** Format: date-time */
      created_at?: string;
      id?: components["schemas"]["PrimitiveObjectID"];
      /** Format: date-time */
      updated_at?: string;
    };
    ModelDomain: {
      Name?: string;
      /** Format: date-time */
      created_at?: string;
      id?: components["schemas"]["PrimitiveObjectID"];
      /** Format: date-time */
      updated_at?: string;
    };
    ModelRecipient: {
      Alias?: string;
      DisplayName?: string;
      DistinguishedName?: string;
      EmailAddresses?: (string)[] | null;
      ExternalDirectoryObjectId?: string;
      Identity?: string;
      RecipientTypeDetails?: string;
      /** Format: date-time */
      created_at?: string;
      id?: components["schemas"]["PrimitiveObjectID"];
      /** Format: date-time */
      updated_at?: string;
    };
    ModelSharedMailbox: {
      CustomAttribute1?: string;
      DisplayName?: string;
      ExchangeObjectId?: string;
      PrimarySmtpAddress?: string;
      /** Format: date-time */
      created_at?: string;
      id?: components["schemas"]["PrimitiveObjectID"];
      /** Format: date-time */
      updated_at?: string;
    };
    ModelSharedMailboxNewResponce: {
      primarySmtpAddress?: string;
    };
    PrimitiveObjectID: (number)[] | null;
    RestErrResponse: {
      /** @description Application-specific error code. */
      code?: number;
      /** @description Application context. */
      context?: {
        [key: string]: unknown;
      };
      /** @description Error message. */
      error?: string;
      /** @description Status text. */
      status?: string;
    };
    RestapiBlobResponse: {
      content?: {
        [key: string]: unknown;
      } | null;
    };
    RestapiCopyLibraryRequest: {
      /** @example Shared Documents */
      fromlibrary?: string;
      /** @example https://christianiabpos.sharepoint.com/sites/nexi */
      fromurl?: string;
      /** @example Copy of Shared Documents */
      tolibrary?: string;
      /** @example https://christianiabpos.sharepoint.com/sites/nexiintra-home */
      tourl?: string;
    };
    RestapiCopyLibraryRequestType2: {
      /** @example Regulatory Documents */
      newlibraryname?: string;
      /** @example regulatory_documents */
      newurl?: string;
      /** @example Import1 */
      oldlibraryname?: string;
      /** @example https://christianiabpos.sharepoint.com/sites/nexiintra */
      siteurl?: string;
    };
    RestapiGetResponse: {
      auditlogs?: (components["schemas"]["AuditPowerShellLogMetadata"])[] | null;
      currentpage?: number;
      numberofrecords?: number;
      pages?: number;
      pagesize?: number;
    };
    RestapiGetResponseType2: {
      powershellauditlog?: components["schemas"]["AuditPowerShellLog"];
    };
    RestapiGetResponseType3: {
      countries?: (components["schemas"]["ModelCountry"])[] | null;
    };
    RestapiGetResponseType4: {
      units?: (components["schemas"]["ModelBusinessGroupUnit"])[] | null;
    };
    RestapiInfoResponse: {
      exchange_organisation?: string;
      tenant?: string;
      version?: string;
    };
    RestapiRoomProvisionRequest: {
      sharepointid?: number;
    };
    RestapiSharedMailboxAddEmailRquest: {
      smtpaddress?: string;
    };
    RestapiSharedMailboxAddMemberRquest: {
      members?: (string)[] | null;
    };
    RestapiSharedMailboxAddMemberRquestType2: {
      owners?: (string)[] | null;
    };
    RestapiSharedMailboxAddMemberRquestType3: {
      readers?: (string)[] | null;
    };
    RestapiSharedMailboxNewRequest: {
      /** @example shared-mailbox-alias */
      alias?: string;
      /** @example Shared Mailbox Name */
      displayName?: string;
      members?: (string)[] | null;
      /** @example shared-mailbox-name */
      name?: string;
      owners?: (string)[] | null;
      readers?: (string)[] | null;
    };
    RestapiSharedMailboxUpdateRequest: {
      /** @example New Display Name for Shared Mailbox */
      displayName?: string;
    };
    RestapiSharedMailboxUpdateRequestType2: {
      /** @example contact@contoso.com */
      smtpaddress?: string;
    };
    RestapiSigninRequest: {
      appkey?: string;
    };
    RestapiSigninResponse: {
      token?: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * Authenticating app 
   * @description 
   * 
   * You need an ´appkey´  to access the API. The ´appkey´  is issue by [niels.johansen@nexigroup.com](mailto:niels.johansen@nexigroup.com).
   * 
   * Use the ´appkey´  to get an access token through the /v1/authorize end point. The access token is valid for 10 minutes.
   * 
   * Pass the access token in the Authorization header as a Bearer token to access the API.
   */
  "koksmat/restapi.signin": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSigninRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RestapiSigninResponse"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Reading blob 
   * @description 
   * 
   * 
   * Returns a piece of unstructured data
   */
  "koksmat/restapi.getBlob": {
    parameters: {
      path: {
        tag: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          "Cache-Control"?: string;
        };
        content: {
          "application/json": components["schemas"]["RestapiBlobResponse"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Lookup an address */
  "koksmat/restapi.resolveAddress": {
    parameters: {
      query?: {
        max?: number;
      };
      path: {
        address: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelRecipient"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Get audit logs metadata  
   * @description Get audit logs by date and hour - timezone is  GMT
   */
  "koksmat/restapi.getAuditLogs": {
    parameters: {
      query?: {
        /** @description page number */
        page?: number;
        /** @description page size */
        pagesize?: number;
      };
      path: {
        /** @description date of the audit log */
        date: string;
        /** @description hour of the audit log */
        hour: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RestapiGetResponse"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Get audit logs */
  "koksmat/restapi.getAuditLogPowershell": {
    parameters: {
      path: {
        /** @description id of the audit log */
        objectId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RestapiGetResponseType2"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Get Audit Log summary 
   * @description Get Audit Log summary
   */
  "koksmat/restapi.GetAuditLogSummarys": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["AuditAuditLogSum"])[];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Copy a library  
   * @description 
   * 	Copy a library from one site to another site, can also copy internally in the same site
   * 
   * 	Future: Copy a library from one site to another site, cross tenancy
   */
  "koksmat/restapi.copyLibrary": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiCopyLibraryRequest"];
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Rename a Library or List  
   * @description 
   * 	Rename a library title and URL
   */
  "koksmat/restapi.renameLibrary": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiCopyLibraryRequestType2"];
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Get a country */
  "koksmat/restapi.getCountries": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RestapiGetResponseType3"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Get busines and group units */
  "koksmat/restapi.getBusinessAndGroupUnits": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RestapiGetResponseType4"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Get runtime info */
  "koksmat/restapi.getInfo": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RestapiInfoResponse"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Get supported domains */
  "koksmat/restapi.getDomains": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["ModelDomain"])[];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Provision a room 
   * @description Provision a room by referencing to a sharepoint item id
   */
  "koksmat/restapi.provisionRoom": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiRoomProvisionRequest"];
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Get Shared Mailboxes 
   * @description List all Shared Mailboxes
   */
  "koksmat/restapi.listSharedMailbox": {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["ModelSharedMailbox"])[];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Create a Shared Mailbox 
   * @description Create a Shared Mailbox
   */
  "koksmat/restapi.createSharedMailbox": {
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSharedMailboxNewRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Get a Shared Mailbox */
  "koksmat/restapi.getSharedMailbox": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Delete a shared Mailboxes */
  "koksmat/restapi.deleteSharedMailbox": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": (components["schemas"]["ModelSharedMailbox"])[];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /**
   * Update a Shared Mailbox 
   * @description Updates a Shared Mailbox
   */
  "koksmat/restapi.updateSharedMailbox": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSharedMailboxUpdateRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Add members to a Shared Mailbox */
  "koksmat/restapi.addSharedMailboxMembers": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSharedMailboxAddMemberRquest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Removes members from a Shared Mailbox */
  "koksmat/restapi.removeSharedMailboxMembers": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Add owners to a Shared Mailbox */
  "koksmat/restapi.setSharedMailboxOwners": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSharedMailboxAddMemberRquestType2"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Update a Shared Mailbox primary smtp address */
  "koksmat/restapi.updateSharedMailboxPrimaryEmailAddress": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSharedMailboxUpdateRequestType2"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Add readers to a Shared Mailbox */
  "koksmat/restapi.addSharedMailboxReaders": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSharedMailboxAddMemberRquestType3"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Removes readers from a Shared Mailbox */
  "koksmat/restapi.removeSharedMailboxReaders": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailbox"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Add a smtp address to a Shared Mailbox [NOT IMPLEMENTED] */
  "koksmat/restapi.addSharedMailboxEmail": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    requestBody?: {
      content: {
        "application/json": components["schemas"]["RestapiSharedMailboxAddEmailRquest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["ModelSharedMailboxNewResponce"];
        };
      };
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
  /** Removes a smtp address from a Shared Mailbox [NOT IMPLEMENTED] */
  "koksmat/restapi.removeSharedMailboxEmail": {
    parameters: {
      path: {
        exchangeObjectId: string;
      };
    };
    responses: {
      /** @description No Content */
      204: never;
      /** @description Bad Request */
      400: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
      /** @description Unauthorized */
      401: {
        content: {
          "application/json": components["schemas"]["RestErrResponse"];
        };
      };
    };
  };
}
