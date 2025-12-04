/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePrivacyPolicyRequest } from '../models/CreatePrivacyPolicyRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { PrivacyPolicyListResponse } from '../models/PrivacyPolicyListResponse';
import type { PrivacyPolicyPageResponse } from '../models/PrivacyPolicyPageResponse';
import type { UpdatePrivacyPoliciesOrderRequest } from '../models/UpdatePrivacyPoliciesOrderRequest';
import type { UpsertPrivacyPolicyPageRequest } from '../models/UpsertPrivacyPolicyPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderPrivacyPolicyPagesManagementService {
    /**
     * Get Privacy Policy Page Content
     * Retrieves the content of the Privacy Policy page for a specific carrier.
     * @returns PrivacyPolicyPageResponse Successfully retrieved the privacy policy page content.
     * @throws ApiError
     */
    public static getPrivacyPolicyPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier for which the privacy policy page is being requested.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PrivacyPolicyPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/privacy-policy-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert Privacy Policy Page Content
     * Upserts the content of the Privacy Policy page for a specific carrier.
     * @returns OperationResponse Successfully upserted the privacy policy page content.
     * @throws ApiError
     */
    public static upsertPrivacyPolicyPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier for which the privacy policy page is being requested.
         */
        carrierId: string,
        /**
         * - The request body containing the content to be upserted.
         */
        requestBody: UpsertPrivacyPolicyPageRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/privacy-policy-pages',
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
     * Add Privacy Policy
     * Adds a new Privacy Policy for a specific carrier.
     * @returns OperationResponse Successfully added the Privacy policy.
     * @throws ApiError
     */
    public static addPrivacyPolicy({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier for which the privacy policy page is being requested.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the Privacy Policy to be added.
         */
        requestBody: CreatePrivacyPolicyRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/privacy-policy-pages/privacy-policies',
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
     * Get Privacy Policies
     * Retrieves a list of privacy policies for a specific carrier.
     * @returns PrivacyPolicyListResponse Successfully retrieved the list of privacy policies.
     * @throws ApiError
     */
    public static getPrivacyPolicies({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the privacy policy.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PrivacyPolicyListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/privacy-policy-pages/privacy-policies',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Privacy Policy
     * Updates an existing Privacy Policy for a specific carrier.
     * @returns OperationResponse Successfully updated the privacy policy.
     * @throws ApiError
     */
    public static updatePrivacyPolicy({
        policyId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the Privacy Policy to be updated.
         */
        policyId: string,
        /**
         * - The request body containing the updated details of the Privacy Policy.
         */
        requestBody: CreatePrivacyPolicyRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/privacy-policy-pages/privacy-policies/{policyId}',
            path: {
                'policyId': policyId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete Privacy Policy
     * Deletes a specific Privacy Policy by its ID.
     * @returns OperationResponse Successfully deleted the privacy policy.
     * @throws ApiError
     */
    public static deletePrivacyPolicy({
        policyId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the Privacy Policy to be deleted.
         */
        policyId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/privacy-policy-pages/privacy-policies/{policyId}',
            path: {
                'policyId': policyId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Update Privacy Policies Display Order
     * Updates the display order of privacy policies for a specific carrier.
     * @returns OperationResponse Successfully updated the display order of privacy policies.
     * @throws ApiError
     */
    public static updatePrivacyPoliciesOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the privacy policy.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order of privacy policies.
         */
        requestBody: UpdatePrivacyPoliciesOrderRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/privacy-policy-pages/privacy-policies/display-order',
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
