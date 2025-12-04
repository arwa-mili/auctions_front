/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VehicleModelListResponse } from '../models/VehicleModelListResponse';
import type { VehicleModelResponse } from '../models/VehicleModelResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleBrandModelsManagementService {
    /**
     * Retrieves all vehicle brand models.
     * Retrieves all vehicle brand models.
     * @returns VehicleModelListResponse 200 The list of vehicle brand models.
     * @throws ApiError
     */
    public static getVehicleModels({
        vehicleBrandId,
        xLangCode = 'en',
        pageNumber,
        pageSize,
        vehicleTypeId,
        search,
    }: {
        /**
         * The ID of the vehicle brand.
         */
        vehicleBrandId: string,
        /**
         * The language code.
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
         * The ID of the vehicle type.
         */
        vehicleTypeId?: string,
        /**
         * The search term usually for the name of the brand.
         */
        search?: string,
    }): CancelablePromise<VehicleModelListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-models',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'vehicleBrandId': vehicleBrandId,
                'vehicleTypeId': vehicleTypeId,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a vehicle brand model by ID.
     * Retrieves a vehicle brand model by ID.
     * @returns VehicleModelResponse 200 The vehicle brand model.
     * @throws ApiError
     */
    public static getVehicleModelById({
        vehicleModelId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle brand model.
         */
        vehicleModelId: string,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<VehicleModelResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-models/{vehicleModelId}',
            path: {
                'vehicleModelId': vehicleModelId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
