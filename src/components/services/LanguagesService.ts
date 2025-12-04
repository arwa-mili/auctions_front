/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LanguageListResponse } from '../models/LanguageListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LanguagesService {
    /**
     * Retrieves all languages.
     * Retrieves all languages available in the system.
     * @returns LanguageListResponse 200 The list of languages.
     * @throws ApiError
     */
    public static getLanguages({
        pageNumber,
        pageSize,
        search,
    }: {
        /**
         * The page number.
         */
        pageNumber?: number,
        /**
         * The page size.
         */
        pageSize?: number,
        /**
         * The search term to filter countries by name or iso codes.
         */
        search?: string,
    }): CancelablePromise<LanguageListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/languages',
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'search': search,
            },
        });
    }
}
