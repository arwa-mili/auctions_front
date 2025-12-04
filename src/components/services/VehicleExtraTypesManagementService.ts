/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VehicleExtraTypeCategory } from '../models/VehicleExtraTypeCategory';
import type { VehicleExtraTypeListResponse } from '../models/VehicleExtraTypeListResponse';
import type { VehicleExtraTypeResponse } from '../models/VehicleExtraTypeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleExtraTypesManagementService {
    /**
     * Retrieves all vehicle extra types.
     * Retrieves all vehicle extra types.
     * @returns VehicleExtraTypeListResponse 200 The list of vehicle extra types.
     * @throws ApiError
     */
    public static getVehicleExtraTypes({
        category,
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        vehicleExtraTypeName,
    }: {
        /**
         * The category of the vehicle extra type.
         */
        category: VehicleExtraTypeCategory,
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
         * The name of the vehicle extra type.
         */
        vehicleExtraTypeName?: string,
    }): CancelablePromise<VehicleExtraTypeListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-extra-types',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'category': category,
                'vehicleExtraTypeName': vehicleExtraTypeName,
            },
        });
    }
    /**
     * Retrieves a vehicle extra type by ID.
     * Retrieves a vehicle extra type by ID.
     * @returns VehicleExtraTypeResponse 200 The vehicle extra type.
     * @throws ApiError
     */
    public static getVehicleExtraType({
        vehicleExtraTypeId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle extra type to be retrieved.
         */
        vehicleExtraTypeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<VehicleExtraTypeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-extra-types/{vehicleExtraTypeId}',
            path: {
                'vehicleExtraTypeId': vehicleExtraTypeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
