/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetMapDirectionsRequest } from '../models/GetMapDirectionsRequest';
import type { MapDirectionsResponse } from '../models/MapDirectionsResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MapUtilitiesService {
    /**
     * Retrieves directions between two locations.
     * Retrieves directions between two locations.
     * @returns MapDirectionsResponse Successfully retrieved directions
     * @throws ApiError
     */
    public static getDirections({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The request body containing the origin and destination details.
         */
        requestBody: GetMapDirectionsRequest,
        /**
         * - The language code for the response (default is 'en').
         */
        xLangCode?: string,
    }): CancelablePromise<MapDirectionsResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/maps/directions',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
