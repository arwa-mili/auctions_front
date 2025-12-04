/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivateRouteRequest } from '../models/ActivateRouteRequest';
import type { CreateRoutePricingRequest } from '../models/CreateRoutePricingRequest';
import type { CreateRouteRequest } from '../models/CreateRouteRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { RoutePricingListResponse } from '../models/RoutePricingListResponse';
import type { RoutePricingResponse } from '../models/RoutePricingResponse';
import type { UpdateRouteDeductionFeeRequest } from '../models/UpdateRouteDeductionFeeRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RoutesManagementService {
    /**
     * Creates a new route.
     * Creates a new route.
     * @returns OperationResponse 201 The created route.
     * @throws ApiError
     */
    public static createRoute({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the route to be created.
         */
        requestBody: CreateRouteRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/routes',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all routes.
     * Retrieves all routes.
     * @returns RoutePricingListResponse 200 The list of routes.
     * @throws ApiError
     */
    public static getRoutes({
        xLangCode = 'en',
        pageNumber,
        pageSize,
        airportId,
        placeId,
        carrierId,
        isActive,
        search,
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
         * The airport ID.
         */
        airportId?: number,
        /**
         * The place ID.
         */
        placeId?: string,
        /**
         * The carrier ID.
         */
        carrierId?: string,
        /**
         * The routes's activation status.
         */
        isActive?: boolean,
        /**
         * The search query for a place or an airport name.
         */
        search?: string,
    }): CancelablePromise<RoutePricingListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/routes',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'airportId': airportId,
                'placeId': placeId,
                'carrierId': carrierId,
                'isActive': isActive,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a route by ID.
     * Retrieves a route by ID.
     * @returns RoutePricingResponse 200 The retrieved route.
     * @throws ApiError
     */
    public static getRoute({
        routeId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the route to be retrieved.
         */
        routeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<RoutePricingResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/routes/{routeId}',
            path: {
                'routeId': routeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a route by ID.
     * Updates a route by ID.
     * @returns OperationResponse 200 The updated route.
     * @throws ApiError
     */
    public static updateRoute({
        routeId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the route to be updated.
         */
        routeId: string,
        /**
         * The details of the route to be updated.
         */
        requestBody: CreateRouteRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/routes/{routeId}',
            path: {
                'routeId': routeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a route by ID.
     * Deletes a route by ID.
     * @returns OperationResponse 200 The deleted route.
     * @throws ApiError
     */
    public static deleteRoute({
        routeId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the route to be deleted.
         */
        routeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/routes/{routeId}',
            path: {
                'routeId': routeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Activates or deactivates a route.
     * Activates or deactivates a route.
     * @returns OperationResponse 200 The activated or deactivated route.
     * @throws ApiError
     */
    public static activateRoute({
        routeId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the route to activate or deactivate.
         */
        routeId: string,
        /**
         * The details of the activation or deactivation.
         */
        requestBody: ActivateRouteRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/routes/{routeId}',
            path: {
                'routeId': routeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Updates and existing pricing for a transfer route.
     * Updates and existing pricing for a transfer route.
     * @returns OperationResponse 200 The updated pricing.
     * @throws ApiError
     */
    public static updateRoutePricing({
        routeId,
        pricingId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the route to update pricing for.
         */
        routeId: string,
        /**
         * The ID of the pricing to be updated.
         */
        pricingId: string,
        /**
         * The details of the pricing to be updated.
         */
        requestBody: CreateRoutePricingRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/routes/{routeId}/pricing/{pricingId}',
            path: {
                'routeId': routeId,
                'pricingId': pricingId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Updates the two-way deduction fee of a route.
     * Updates the two-way deduction fee of a route.
     * @returns OperationResponse A promise that resolves to an OperationResponse indicating the success or failure of the operation.
     * @throws ApiError
     */
    public static updateTwoWayDeductionFee({
        routeId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the route to be updated.
         */
        routeId: string,
        /**
         * The request body containing the updated two-way deduction fee data.
         */
        requestBody: UpdateRouteDeductionFeeRequest,
        /**
         * The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/routes/{routeId}/deduction-fee',
            path: {
                'routeId': routeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
