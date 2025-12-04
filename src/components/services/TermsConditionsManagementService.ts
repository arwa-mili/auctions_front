/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TermAndConditionListResponse } from '../models/TermAndConditionListResponse';
import type { TermAndConditionResponse } from '../models/TermAndConditionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TermsConditionsManagementService {
    /**
     * Retrieves all terms and conditions.
     * Retrieves all terms and conditions.
     * @returns TermAndConditionListResponse 200 The list of terms and conditions.
     * @throws ApiError
     */
    public static getTermAndCondition({
        xLangCode = 'en',
        pageNumber,
        pageSize,
        termConditionName,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number.
         */
        pageNumber?: number,
        /**
         * The page size.
         */
        pageSize?: number,
        /**
         * The name of the terms and conditions.
         */
        termConditionName?: string,
    }): CancelablePromise<TermAndConditionListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/terms-conditions',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'termConditionName': termConditionName,
            },
        });
    }
    /**
     * Retrieves a terms and conditions by ID.
     * Retrieves a terms and conditions by ID.
     * @returns TermAndConditionResponse 200 The terms and conditions with the specified ID.
     * @throws ApiError
     */
    public static getTermAndConditionById({
        termAndConditionId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the terms and conditions to retrieve.
         */
        termAndConditionId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TermAndConditionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/terms-conditions/{termAndConditionId}',
            path: {
                'termAndConditionId': termAndConditionId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
