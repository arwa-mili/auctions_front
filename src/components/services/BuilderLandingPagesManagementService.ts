/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateKeyBenefitRequest } from '../models/CreateKeyBenefitRequest';
import type { KeyBenefitListResponse } from '../models/KeyBenefitListResponse';
import type { LandingPageResponse } from '../models/LandingPageResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateKeyBenefitsOrderRequest } from '../models/UpdateKeyBenefitsOrderRequest';
import type { UpsertLandingPageRequest } from '../models/UpsertLandingPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderLandingPagesManagementService {
    /**
     * Upsert Landing Page Content.
     * Upserts the landing page content and SEO metadata for a specific carrier.
     * @returns OperationResponse Successfully upserted landing page content and SEO metadata.
     * @throws ApiError
     */
    public static upsertLandingPageHeroSection({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the landing page.
         */
        carrierId: string,
        /**
         * - The request body containing the landing page content and SEO metadata.
         */
        requestBody: UpsertLandingPageRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/landing-pages',
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
     * Get Landing Page Content.
     * Retrieves the landing page content and SEO metadata for a specific carrier.
     * @returns LandingPageResponse Successfully retrieved landing page content and SEO metadata.
     * @throws ApiError
     */
    public static getLandingPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the landing page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<LandingPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/landing-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Add Key Benefit to Landing Page.
     * Adds a new key benefit to the landing page for a specific carrier.
     * @returns OperationResponse Successfully created key benefit.
     * @throws ApiError
     */
    public static addKeyBenefit({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the landing page.
         */
        carrierId: string,
        /**
         * - The request body containing the key benefit details.
         */
        requestBody: CreateKeyBenefitRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/landing-pages/key-benefits',
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
     * Get Key Benefits for Landing Page.
     * Retrieves the key benefits for the landing page of a specific carrier.
     * @returns KeyBenefitListResponse Successfully retrieved key benefits.
     * @throws ApiError
     */
    public static getKeyBenefits({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the landing page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<KeyBenefitListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/landing-pages/key-benefits',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Key Benefit on Landing Page.
     * Updates an existing key benefit on the landing page for a specific carrier.
     * @returns OperationResponse Successfully updated key benefit.
     * @throws ApiError
     */
    public static updateKeyBenefit({
        keyBenefitId,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the key benefit to be updated.
         */
        keyBenefitId: string,
        /**
         * Represents the unique identifier of the carrier associated with the landing page.
         */
        carrierId: string,
        /**
         * - The request body containing the updated key benefit details.
         */
        requestBody: CreateKeyBenefitRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/landing-pages/key-benefits/{keyBenefitId}',
            path: {
                'keyBenefitId': keyBenefitId,
            },
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
     * Delete Key Benefit from Landing Page.
     * Deletes a key benefit from the landing page for a specific carrier.
     * @returns OperationResponse Successfully deleted key benefit.
     * @throws ApiError
     */
    public static deleteKeyBenefit({
        keyBenefitId,
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the key benefit to be deleted.
         */
        keyBenefitId: string,
        /**
         * Represents the unique identifier of the carrier associated with the landing page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/landing-pages/key-benefits/{keyBenefitId}',
            path: {
                'keyBenefitId': keyBenefitId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Key Benefits Display Order.
     * Updates the display order of key benefits on the landing page for a specific carrier.
     * @returns OperationResponse Successfully updated key benefits order.
     * @throws ApiError
     */
    public static updateKeyBenefitsOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the landing page.
         */
        carrierId: string,
        /**
         * - The request body containing the new order of key benefits.
         */
        requestBody: UpdateKeyBenefitsOrderRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/landing-pages/key-benefits/display-order',
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
