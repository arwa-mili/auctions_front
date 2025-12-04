/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVehicleRequest } from '../models/CreateVehicleRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { VehicleListResponse } from '../models/VehicleListResponse';
import type { VehicleResponse } from '../models/VehicleResponse';
import type { VehicleStatus } from '../models/VehicleStatus';
import type { VehicleStatusFilters } from '../models/VehicleStatusFilters';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehiclesManagementService {
    /**
     * Creates a new vehicle.
     * Creates a new vehicle.
     * @returns OperationResponse 201 The created vehicle.
     * @throws ApiError
     */
    public static addVehicle({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the vehicle to be created.
         */
        requestBody: CreateVehicleRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vehicles',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all vehicles.
     * Retrieves all vehicles.
     * @returns VehicleListResponse 200 The list of vehicles.
     * @throws ApiError
     */
    public static getAllVehicles({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        carrierId,
        vehicleTypeId,
        transferTypeId,
        brandId,
        modelId,
        filteredStatus,
        status,
        isActive,
        search,
        startDate,
        endDate,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number of the query, defaults to 1.
         */
        pageNumber?: number,
        /**
         * The page size of the query, defaults to 10.
         */
        pageSize?: number,
        /**
         * The ID of the carrier that the vehicle belongs to.
         */
        carrierId?: string,
        /**
         * The ID of the vehicle type of the vehicle.
         */
        vehicleTypeId?: string,
        /**
         * The ID of the transfer type of the vehicle.
         */
        transferTypeId?: string,
        /**
         * The ID of the brand of the vehicle.
         */
        brandId?: string,
        /**
         * The ID of the model of the vehicle.
         */
        modelId?: string,
        /**
         * The vehicle filtered status.
         */
        filteredStatus?: VehicleStatusFilters,
        /**
         * The vehicle status.
         */
        status?: VehicleStatus,
        /**
         * The vehicle activation status.
         */
        isActive?: boolean,
        /**
         * The search query for a vehicle license plate.
         */
        search?: string,
        /**
         * The start date of when a vehicle is available.
         */
        startDate?: string,
        /**
         * The end date of when a vehicle is available.
         */
        endDate?: string,
    }): CancelablePromise<VehicleListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicles',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'vehicleTypeId': vehicleTypeId,
                'transferTypeId': transferTypeId,
                'brandId': brandId,
                'modelId': modelId,
                'filteredStatus': filteredStatus,
                'status': status,
                'isActive': isActive,
                'search': search,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * Retrieves a vehicle by ID.
     * Retrieves a vehicle by ID.
     * @returns VehicleResponse 200 The vehicle.
     * @throws ApiError
     */
    public static getVehicleById({
        vehicleId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle to be retrieved.
         */
        vehicleId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<VehicleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicles/{vehicleId}',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a vehicle.
     * Updates a vehicle.
     * @returns OperationResponse 200 The vehicle has been updated.
     * @throws ApiError
     */
    public static updateVehicle({
        vehicleId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle to be updated.
         */
        vehicleId: string,
        /**
         * The details of the vehicle to be updated.
         */
        requestBody: CreateVehicleRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/vehicles/{vehicleId}',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a vehicle.
     * Deletes a vehicle.
     * @returns OperationResponse 200 The vehicle has been deleted.
     * @throws ApiError
     */
    public static deleteVehicle({
        vehicleId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle to be deleted.
         */
        vehicleId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/vehicles/{vehicleId}',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Approves a submitted carrier vehicle.
     * Approves a submitted carrier vehicle.
     * @returns OperationResponse 200 The vehicle has been approved.
     * @throws ApiError
     */
    public static approveVehicle({
        vehicleId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle to be approved.
         */
        vehicleId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vehicles/{vehicleId}/approve',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Rejects a submitted carrier vehicle.
     * Rejects a submitted carrier vehicle.
     * @returns OperationResponse 200 The vehicle has been rejected.
     * @throws ApiError
     */
    public static rejectVehicle({
        vehicleId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle to be rejected.
         */
        vehicleId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/vehicles/{vehicleId}/reject',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a vehicle activation status.
     * Updates a vehicle activation status.
     * @returns OperationResponse 200 The vehicle has been activated successfully.
     * @throws ApiError
     */
    public static updateVehicleActivation({
        vehicleId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle to be updated.
         */
        vehicleId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/vehicles/{vehicleId}/activation',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
