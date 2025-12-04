/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationResponse } from '../models/OperationResponse';
import type { PricingCategories } from '../models/PricingCategories';
import type { VehicleExtraPriceListResponse } from '../models/VehicleExtraPriceListResponse';
import type { VehicleExtraPriceRequest } from '../models/VehicleExtraPriceRequest';
import type { VehicleExtraPriceResponse } from '../models/VehicleExtraPriceResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleExtraPricesManagementService {
    /**
     * Creates a new vehicle extra price.
     * Creates a new vehicle extra price.
     * @returns OperationResponse 201 The created vehicle extra price.
     * @throws ApiError
     */
    public static createVehicleExtraPrice({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the vehicle extra price to be created.
         */
        requestBody: VehicleExtraPriceRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vehicle-extra-prices',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all vehicle extra prices.
     * Retrieves all vehicle extra prices.
     * @returns VehicleExtraPriceListResponse 200 The list of vehicle extra prices.
     * @throws ApiError
     */
    public static getVehicleExtraPrices({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        carrierId,
        vehicleExtraTypeName,
        paymentType,
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
         * The carrier ID to filter by.
         */
        carrierId?: string,
        /**
         * The name of the vehicle extra type.
         */
        vehicleExtraTypeName?: string,
        /**
         * The payment type of the vehicle extra.
         */
        paymentType?: PricingCategories,
    }): CancelablePromise<VehicleExtraPriceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-extra-prices',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'vehicleExtraTypeName': vehicleExtraTypeName,
                'paymentType': paymentType,
            },
        });
    }
    /**
     * Retrieves a vehicle extra price by ID.
     * Retrieves a vehicle extra price by ID.
     * @returns VehicleExtraPriceResponse 200 The vehicle extra price.
     * @throws ApiError
     */
    public static getVehicleExtraPriceById({
        vehicleExtraPriceId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle extra price to be retrieved.
         */
        vehicleExtraPriceId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<VehicleExtraPriceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-extra-prices/{vehicleExtraPriceId}',
            path: {
                'vehicleExtraPriceId': vehicleExtraPriceId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates an existing vehicle extra price.
     * Updates an existing vehicle extra price.
     * @returns OperationResponse 200 Successfully updated vehicle extra price.
     * @throws ApiError
     */
    public static updateVehicleExtraPrice({
        vehicleExtraPriceId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle extra price to be updated.
         */
        vehicleExtraPriceId: string,
        /**
         * The updated details of the vehicle extra price.
         */
        requestBody: VehicleExtraPriceRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/vehicle-extra-prices/{vehicleExtraPriceId}',
            path: {
                'vehicleExtraPriceId': vehicleExtraPriceId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a vehicle extra price.
     * Deletes a vehicle extra price by ID.
     * @returns OperationResponse 200 Successfully deleted vehicle extra price.
     * @throws ApiError
     */
    public static deleteVehicleExtraPrice({
        vehicleExtraPriceId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle extra price to be deleted.
         */
        vehicleExtraPriceId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vehicle-extra-prices/{vehicleExtraPriceId}',
            path: {
                'vehicleExtraPriceId': vehicleExtraPriceId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
