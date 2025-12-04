/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AirportListResponse } from '../models/AirportListResponse';
import type { AirportResponse } from '../models/AirportResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AirportsService {
    /**
     * Retrieves all airports.
     * Retrieves all airports.
     * @returns AirportListResponse 200 The list of airports.
     * @throws ApiError
     */
    public static getAirports({
        xLangCode = 'en',
        xCountryId,
        pageNumber = 1,
        pageSize = 10,
        countryId,
        regionId,
        search,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The country ID (optional).
         */
        xCountryId?: number,
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
         * The region ID.
         */
        regionId?: number,
        /**
         * The search query (The airport name or code).
         */
        search?: string,
    }): CancelablePromise<AirportListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/airports',
            headers: {
                'x-lang-code': xLangCode,
                'x-country-id': xCountryId,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'countryId': countryId,
                'regionId': regionId,
                'search': search,
            },
        });
    }
    /**
     * Retrieves an airport by ID.
     * Retrieves an airport by ID.
     * @returns AirportResponse 200 The airport with the specified ID.
     * @throws ApiError
     */
    public static getAirportById({
        airportId,
        xLangCode = 'en',
        xCountryId,
    }: {
        /**
         * The ID of the airport to retrieve.
         */
        airportId: number,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The country ID (optional).
         */
        xCountryId?: number,
    }): CancelablePromise<AirportResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/airports/{airportId}',
            path: {
                'airportId': airportId,
            },
            headers: {
                'x-lang-code': xLangCode,
                'x-country-id': xCountryId,
            },
        });
    }
}
