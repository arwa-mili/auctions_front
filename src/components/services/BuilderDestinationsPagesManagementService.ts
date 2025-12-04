/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuilderDestinationListResponse } from '../models/BuilderDestinationListResponse';
import type { BuilderDestinationResponse } from '../models/BuilderDestinationResponse';
import type { CreateBuilderDestinationRequest } from '../models/CreateBuilderDestinationRequest';
import type { DestinationsPageResponse } from '../models/DestinationsPageResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { PopularDestinationListResponse } from '../models/PopularDestinationListResponse';
import type { UpdateBuilderDestinationsOrderRequest } from '../models/UpdateBuilderDestinationsOrderRequest';
import type { UpdatePopularDestinationRequest } from '../models/UpdatePopularDestinationRequest';
import type { UpdatePopularDestinationsOrder } from '../models/UpdatePopularDestinationsOrder';
import type { UpsertDestinationsPageRequest } from '../models/UpsertDestinationsPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderDestinationsPagesManagementService {
    /**
     * Get Destinations Page Content
     * Retrieves the content of the destinations' page for a carrier.
     * @returns DestinationsPageResponse Successfully retrieved destinations page content
     * @throws ApiError
     */
    public static getDestinationsPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier for the carrier associated with the destinations' page.
         */
        carrierId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<DestinationsPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/destinations-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert Destinations Page Content
     * Upserts the content of the destinations' page for a carrier.
     * @returns OperationResponse Successfully updated destinations page content
     * @throws ApiError
     */
    public static upsertDestinationsPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier for the carrier associated with the destinations' page.
         */
        carrierId: string,
        /**
         * - The request body containing the content to be upserted.
         */
        requestBody: UpsertDestinationsPageRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/destinations-pages',
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
     * Synchronize Popular Destinations
     * Synchronizes the top popular destinations for a carrier based on the number of confirmed bookings and completed trips to these destinations.
     * @returns OperationResponse Successfully synchronized popular destinations
     * @throws ApiError
     */
    public static synchronizePopularDestinations({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier for the carrier associated with the popular destinations' page.
         */
        carrierId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULTLOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/destinations-pages/popular-destinations/synchronize',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Get Popular Destinations
     * Get the list of popular destinations for a carrier.
     * @returns PopularDestinationListResponse Popular destinations retrieved successfully
     * @throws ApiError
     */
    public static getPopularDestinations({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier for the carrier associated with the popular destinations' page.
         */
        carrierId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PopularDestinationListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/destinations-pages/popular-destinations',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Popular Destination Photos
     * Update the photos of a popular destination.
     * @returns OperationResponse Popular destination photos updated successfully
     * @throws ApiError
     */
    public static updatePopularDestinationPhotos({
        destinationId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the popular destination whose photos are to be updated.
         */
        destinationId: string,
        /**
         * - The request body containing the new photos for the destination.
         */
        requestBody: UpdatePopularDestinationRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/destinations-pages/popular-destinations/{destinationId}/photos',
            path: {
                'destinationId': destinationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update Popular Destinations Display Order
     * Update the display order of popular destinations for a carrier.
     * @returns OperationResponse Popular destinations display order updated successfully
     * @throws ApiError
     */
    public static updatePopularDestinationsDisplayOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier for the carrier associated with the popular destinations' page.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order for the popular destinations.
         */
        requestBody: UpdatePopularDestinationsOrder,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/destinations-pages/popular-destinations/display-order',
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
     * Toggle Popular Destination Display
     * Toggles the display status of a popular destination.
     * @returns OperationResponse Popular destination display toggled successfully
     * @throws ApiError
     */
    public static togglePopularDestinationDisplay({
        destinationId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the popular destination whose display status is to be toggled.
         */
        destinationId: string,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/destinations-pages/popular-destinations/{destinationId}/toggle-display',
            path: {
                'destinationId': destinationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Get Builder Destinations
     * Retrieves a list of builder destinations for a carrier.
     * @returns BuilderDestinationListResponse Builder destinations retrieved successfully
     * @throws ApiError
     */
    public static getBuilderDestinations({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the destinations to be displayed on the website landing page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderDestinationListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/destinations-pages/destinations',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Add Builder Destination
     * Adds a new builder destination for a carrier.
     * @returns OperationResponse Builder destination added successfully
     * @throws ApiError
     */
    public static addBuilderDestination({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the destinations to be displayed on the website landing page.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the destination to be added.
         */
        requestBody: CreateBuilderDestinationRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/destinations-pages/destinations',
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
     * Update Builder Destination
     * Updates an existing builder destination by its ID.
     * @returns OperationResponse Builder destination updated successfully
     * @throws ApiError
     */
    public static updateBuilderDestination({
        destinationId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the destination to be updated.
         */
        destinationId: string,
        /**
         * - The request body containing the updated details of the destination.
         */
        requestBody: CreateBuilderDestinationRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/destinations-pages/destinations/{destinationId}',
            path: {
                'destinationId': destinationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get Builder Destination
     * Retrieves a specific builder destination by its ID.
     * @returns BuilderDestinationResponse Builder destination fetched successfully
     * @throws ApiError
     */
    public static getBuilderDestinationById({
        destinationId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the destination to be retrieved.
         */
        destinationId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderDestinationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/destinations-pages/destinations/{destinationId}',
            path: {
                'destinationId': destinationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Delete Builder Destination
     * Deletes a builder destination by its ID.
     * @returns OperationResponse Builder destination deleted successfully
     * @throws ApiError
     */
    public static deleteBuilderDestination({
        destinationId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the destination to be deleted.
         */
        destinationId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/destinations-pages/destinations/{destinationId}',
            path: {
                'destinationId': destinationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Update Builder Destinations Display Order
     * Updates the display order of builder destinations for a carrier.
     * @returns OperationResponse Display order updated successfully
     * @throws ApiError
     */
    public static updateBuilderDestinationsOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier for the carrier associated with the destinations' page.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order for the destinations.
         */
        requestBody: UpdateBuilderDestinationsOrderRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/destinations-pages/destinations/display-order',
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
