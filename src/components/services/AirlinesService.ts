/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirlineListResponse } from '../models/AirlineListResponse';
import type { AirlineResponse } from '../models/AirlineResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AirlinesService {
    /**
     * Retrieves all airlines.
     * Retrieves all airlines.
     * @returns AirlineListResponse 200 The list of airlines.
     * @throws ApiError
     */
    public static getAirlines({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        countryId,
        search,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number to retrieve.
         */
        pageNumber?: number,
        /**
         * The page size to retrieve.
         */
        pageSize?: number,
        /**
         * The country ID.
         */
        countryId?: number,
        /**
         * The search query (The airline name or code).
         */
        search?: string,
    }): CancelablePromise<AirlineListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/airlines',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'countryId': countryId,
                'search': search,
            },
        });
    }
    /**
     * Retrieves an airline by Code.
     * Retrieves an airline by Code.
     * @returns AirlineResponse 200 The airline with the specified Code.
     * @throws ApiError
     */
    public static getAirlineByCode({
        airlineCode,
        xLangCode = 'en',
    }: {
        /**
         * The code of the airline to retrieve.
         */
        airlineCode: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<AirlineResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/airlines/{airlineCode}',
            path: {
                'airlineCode': airlineCode,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
