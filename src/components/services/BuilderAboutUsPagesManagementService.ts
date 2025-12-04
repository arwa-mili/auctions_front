/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AboutUsBenefitListResponse } from '../models/AboutUsBenefitListResponse';
import type { AboutUsPageResponse } from '../models/AboutUsPageResponse';
import type { CreateAboutUsBenefitRequest } from '../models/CreateAboutUsBenefitRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateAboutUsBenefitsOrderRequest } from '../models/UpdateAboutUsBenefitsOrderRequest';
import type { UpsertAboutUsPageRequest } from '../models/UpsertAboutUsPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderAboutUsPagesManagementService {
    /**
     * Get About Us Page Content
     * Retrieves the about us page content.
     * @returns AboutUsPageResponse Successfully retrieved the About Us page content.
     * @throws ApiError
     */
    public static getAboutUsPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the about us page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<AboutUsPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/about-us-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert About Us Page Content
     * Upserts the content of the About Us page.
     * @returns OperationResponse Successfully updated the About Us page content.
     * @throws ApiError
     */
    public static upsertAboutUsPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the about us page.
         */
        carrierId: string,
        /**
         * - The request body containing the content to be upserted.
         */
        requestBody: UpsertAboutUsPageRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/about-us-pages',
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
     * Add About Us Benefit
     * Adds a new benefit to the About Us page.
     * @returns OperationResponse Successfully added the About Us benefit.
     * @throws ApiError
     */
    public static addAboutUsBenefit({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the about us page.
         */
        carrierId: string,
        /**
         * - The request body containing the benefit details.
         */
        requestBody: CreateAboutUsBenefitRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/about-us-pages/key-benefits',
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
     * Get About Us Key Benefits
     * Retrieves the key benefits of the About Us page.
     * @returns AboutUsBenefitListResponse Successfully retrieved the About Us key benefits.
     * @throws ApiError
     */
    public static getAboutUsKeyBenefits({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the about us page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<AboutUsBenefitListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/about-us-pages/key-benefits',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update About Us Benefit
     * Updates a benefit on the About Us page.
     * @returns OperationResponse Successfully updated the About Us benefit.
     * @throws ApiError
     */
    public static updateAboutUsBenefit({
        benefitId,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the benefit to be updated.
         */
        benefitId: string,
        /**
         * Represents the unique identifier of the carrier associated with the about us page.
         */
        carrierId: string,
        /**
         * - The request body containing the updated benefit details.
         */
        requestBody: CreateAboutUsBenefitRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/about-us-pages/key-benefits/{benefitId}',
            path: {
                'benefitId': benefitId,
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
     * Delete About Us Benefit
     * Deletes a benefit from the About Us page.
     * @returns OperationResponse Successfully deleted the About Us benefit.
     * @throws ApiError
     */
    public static deleteAboutUsBenefit({
        benefitId,
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the benefit to be deleted.
         */
        benefitId: string,
        /**
         * Represents the unique identifier of the carrier associated with the about us page.
         */
        carrierId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/about-us-pages/key-benefits/{benefitId}',
            path: {
                'benefitId': benefitId,
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
     * Update About Us Benefits Display Order
     * Updates the display order of key benefits on the About Us page.
     * @returns OperationResponse Successfully updated the display order of About Us benefits.
     * @throws ApiError
     */
    public static updateAboutUsBenefitsOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the about us page.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order of benefits.
         */
        requestBody: UpdateAboutUsBenefitsOrderRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/about-us-pages/key-benefits/display-order',
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
