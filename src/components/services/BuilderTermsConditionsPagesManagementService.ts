/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTermOfUseRequest } from '../models/CreateTermOfUseRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { TermOfUseListResponse } from '../models/TermOfUseListResponse';
import type { TermsPageResponse } from '../models/TermsPageResponse';
import type { UpdateTermsOfUseOrderRequest } from '../models/UpdateTermsOfUseOrderRequest';
import type { UpsertTermsPageRequest } from '../models/UpsertTermsPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderTermsConditionsPagesManagementService {
    /**
     * Get Terms & Conditions Page Content
     * Retrieves the content of the Terms & Conditions page for a specific carrier.
     * @returns TermsPageResponse Terms & Conditions Page Content Retrieved
     * @throws ApiError
     */
    public static getTermsPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the terms & conditions page.
         */
        carrierId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TermsPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/terms-of-use-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert Terms & Conditions Page Content
     * Upserts the content of the Terms & Conditions page for a specific carrier.
     * @returns OperationResponse Terms & Conditions Page Content Upserted
     * @throws ApiError
     */
    public static upsertTermsPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the terms & conditions page.
         */
        carrierId: string,
        /**
         * - The request body containing the Terms & Conditions page content to be upserted.
         */
        requestBody: UpsertTermsPageRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/terms-of-use-pages',
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
     * Add or Update Term of Use
     * Adds or updates a Term of Use for a specific carrier.
     * @returns OperationResponse Successfully Added Term of Use
     * @throws ApiError
     */
    public static addTermOfUse({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the terms & conditions.
         */
        carrierId: string,
        /**
         * - The request body containing the Term of Use details to be added or updated.
         */
        requestBody: CreateTermOfUseRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/terms-of-use-pages/terms',
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
     * Get Terms of Use
     * Retrieves the list of Terms of Use for a specific carrier.
     * @returns TermOfUseListResponse Successfully Retrieved Terms of Use
     * @throws ApiError
     */
    public static getTermsOfUse({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the terms & conditions.
         */
        carrierId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TermOfUseListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/terms-of-use-pages/terms',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Term of Use
     * Updates an existing Term of Use for a specific carrier.
     * @returns OperationResponse Successfully Updated Term of Use
     * @throws ApiError
     */
    public static updateTermOfUse({
        termOfUseId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the Term of Use to be updated.
         */
        termOfUseId: string,
        /**
         * - The request body containing the updated Term of Use details.
         */
        requestBody: CreateTermOfUseRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/terms-of-use-pages/terms/{termOfUseId}',
            path: {
                'termOfUseId': termOfUseId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete Term of Use
     * Deletes a Term of Use for a specific carrier.
     * @returns OperationResponse Successfully Deleted Term of Use
     * @throws ApiError
     */
    public static deleteTermOfUse({
        termOfUseId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the Term of Use to be deleted.
         */
        termOfUseId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/terms-of-use-pages/terms/{termOfUseId}',
            path: {
                'termOfUseId': termOfUseId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Update Terms of Use Display Order
     * Updates the display order of Terms of Use for a specific carrier.
     * @returns OperationResponse Successfully Updated Terms of Use Display Order
     * @throws ApiError
     */
    public static updateTermsOfUseOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the terms & conditions.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order of Terms of Use.
         */
        requestBody: UpdateTermsOfUseOrderRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/terms-of-use-pages/terms/display-order',
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
}
