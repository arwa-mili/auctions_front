/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VehicleTypeListResponse } from '../models/VehicleTypeListResponse';
import type { VehicleTypeResponse } from '../models/VehicleTypeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleTypesManagementService {
    /**
     * Retrieves all vehicle types.
     * Retrieves all vehicle types.
     * @returns VehicleTypeListResponse 200 The list of vehicle types.
     * @throws ApiError
     */
    public static getVehicleTypes({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        vehicleTypeName,
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
         * The name of the vehicle type.
         */
        vehicleTypeName?: string,
    }): CancelablePromise<VehicleTypeListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-types',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'vehicleTypeName': vehicleTypeName,
            },
        });
    }
    /**
     * Retrieves a vehicle type by ID.
     * Retrieves a vehicle type by ID.
     * @returns VehicleTypeResponse 200 The vehicle type.
     * @throws ApiError
     */
    public static getVehicleType({
        vehicleTypeId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle type to be retrieved.
         */
        vehicleTypeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<VehicleTypeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-types/{vehicleTypeId}',
            path: {
                'vehicleTypeId': vehicleTypeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
