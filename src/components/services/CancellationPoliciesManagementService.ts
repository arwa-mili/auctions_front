/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancellationPolicyListResponse } from '../models/CancellationPolicyListResponse';
import type { CancellationPolicyResponse } from '../models/CancellationPolicyResponse';
import type { CreateCancellationPolicyRequest } from '../models/CreateCancellationPolicyRequest';
import type { NoShowPenaltyTypes } from '../models/NoShowPenaltyTypes';
import type { OperationResponse } from '../models/OperationResponse';
import type { PenaltyTypes } from '../models/PenaltyTypes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CancellationPoliciesManagementService {
    /**
     * Creates a new cancellation policy.
     * Creates a new cancellation policy.
     * @returns OperationResponse 201 The created cancellation policy.
     * @throws ApiError
     */
    public static createCancellationPolicy({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the cancellation policy to be created.
         */
        requestBody: CreateCancellationPolicyRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cancellation-policies',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all cancellation policies.
     * Retrieves all cancellation policies.
     * @returns CancellationPolicyListResponse 200 The list of cancellation policies.
     * @throws ApiError
     */
    public static getCancellationPolicies({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        carrierId,
        search,
        penaltyType,
        deadline,
        noShowPenalty,
        noShowPenaltyType,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number to retrieve, defaults to 1.
         */
        pageNumber?: number,
        /**
         * The page size to retrieve, defaults to 10.
         */
        pageSize?: number,
        /**
         * The carrier ID to filter cancellation policies.
         */
        carrierId?: string,
        /**
         * The search query for a cancellation policies name.
         */
        search?: string,
        /**
         * The filter for the cancellation policy penalty types.
         */
        penaltyType?: PenaltyTypes,
        /**
         * The filter for the cancellation policy deadline.
         */
        deadline?: boolean,
        /**
         * The filter for the cancellation policy no show penalty.
         */
        noShowPenalty?: boolean,
        /**
         * The filter for the cancellation policy no show penalty types.
         */
        noShowPenaltyType?: NoShowPenaltyTypes,
    }): CancelablePromise<CancellationPolicyListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cancellation-policies',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'search': search,
                'penaltyType': penaltyType,
                'deadline': deadline,
                'noShowPenalty': noShowPenalty,
                'noShowPenaltyType': noShowPenaltyType,
            },
        });
    }
    /**
     * Retrieves a cancellation policy by ID.
     * Retrieves a cancellation policy by ID.
     * @returns CancellationPolicyResponse 200 The requested cancellation policy.
     * @throws ApiError
     */
    public static getCancellationPolicy({
        cancellationPolicyId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the cancellation policy to be retrieved.
         */
        cancellationPolicyId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<CancellationPolicyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cancellation-policies/{cancellationPolicyId}',
            path: {
                'cancellationPolicyId': cancellationPolicyId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a cancellation policy.
     * Updates a cancellation policy.
     * @returns OperationResponse 200 The updated cancellation policy.
     * @throws ApiError
     */
    public static updateCancellationPolicy({
        cancellationPolicyId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the cancellation policy to be updated.
         */
        cancellationPolicyId: string,
        /**
         * The details of the cancellation policy to be updated.
         */
        requestBody: CreateCancellationPolicyRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cancellation-policies/{cancellationPolicyId}',
            path: {
                'cancellationPolicyId': cancellationPolicyId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a cancellation policy.
     * Deletes a cancellation policy.
     * @returns OperationResponse 200 The cancellation policy was deleted.
     * @throws ApiError
     */
    public static deleteCancellationPolicy({
        cancellationPolicyId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the cancellation policy to be deleted.
         */
        cancellationPolicyId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/cancellation-policies/{cancellationPolicyId}',
            path: {
                'cancellationPolicyId': cancellationPolicyId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Sets a cancellation policy as the default.
     * Sets a cancellation policy as the default.
     * @returns OperationResponse 200 The id of the default cancellation policy.
     * @throws ApiError
     */
    public static setDefaultCancellationPolicy({
        cancellationPolicyId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the cancellation policy to be set as default.
         */
        cancellationPolicyId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/cancellation-policies/{cancellationPolicyId}',
            path: {
                'cancellationPolicyId': cancellationPolicyId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
