/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ContactPageResponse } from '../models/ContactPageResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpsertContactPageRequest } from '../models/UpsertContactPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderContactUsPagesManagementService {
    /**
     * Upsert Contact Us Page Content
     * Upserts the content of the contact us page for a specific carrier.
     * @returns OperationResponse Successfully upserted contact page content
     * @throws ApiError
     */
    public static upsertContactPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the contact us page.
         */
        carrierId: string,
        /**
         * - The request body containing the contact page content to be upserted.
         */
        requestBody: UpsertContactPageRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/contact-us-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Contact Us Page Content
     * Retrieves the content of the contact us page for a specific carrier.
     * @returns ContactPageResponse Successfully retrieved contact page content
     * @throws ApiError
     */
    public static getContactPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the contact us page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<ContactPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/contact-us-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
}
