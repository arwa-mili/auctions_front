/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TripPurposeListResponse } from '../models/TripPurposeListResponse';
import type { TripPurposeResponse } from '../models/TripPurposeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TripPurposesManagementService {
    /**
     * Retrieves all trip purposes.
     * Retrieves all trip purposes.
     * @returns TripPurposeListResponse 200 The list of trip purposes.
     * @throws ApiError
     */
    public static getTripPurposes({
        xLangCode = 'en',
        pageNumber,
        pageSize,
        countryId,
        tripPurposeName,
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
         * The country ID to filter trip purposes.
         */
        countryId?: number,
        /**
         * The name of the trip purpose.
         */
        tripPurposeName?: string,
    }): CancelablePromise<TripPurposeListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trip-purposes',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'countryId': countryId,
                'tripPurposeName': tripPurposeName,
            },
        });
    }
    /**
     * Retrieves a trip purpose by ID.
     * Retrieves a trip purpose by ID.
     * @returns TripPurposeResponse 200 The trip purpose with the specified ID.
     * @throws ApiError
     */
    public static getTripPurpose({
        tripPurposeId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the trip purpose to retrieve.
         */
        tripPurposeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TripPurposeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trip-purposes/{tripPurposeId}',
            path: {
                'tripPurposeId': tripPurposeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
