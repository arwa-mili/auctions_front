/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVehicleAvailabilityRequest } from '../models/CreateVehicleAvailabilityRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateVehicleAvailabilityEvent } from '../models/UpdateVehicleAvailabilityEvent';
import type { VehicleAvailabilitiesResponse } from '../models/VehicleAvailabilitiesResponse';
import type { VehicleAvailabilityEventTypes } from '../models/VehicleAvailabilityEventTypes';
import type { VehicleAvailabilityResponse } from '../models/VehicleAvailabilityResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleAvailabilitiesManagementService {
    /**
     * Creates new vehicle availability events for a specific vehicle.
     * Creates new vehicle availability events for a specific vehicle.
     * @returns OperationResponse 201 The vehicle availability has been created successfully.
     * @throws ApiError
     */
    public static createVehicleAvailability({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The vehicle availability details to be added.
         */
        requestBody: CreateVehicleAvailabilityRequest,
        /**
         * The language code (optional). Default to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/availabilities',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves a list of vehicles' out-of-order events.
     * Retrieves a list of vehicles' out-of-order events.
     * @returns VehicleAvailabilitiesResponse 200 The list of vehicles' out-of-order events.
     * @throws ApiError
     */
    public static getVehicleAvailabilities({
        startDate,
        endDate,
        xLangCode = 'en',
        carrierId,
        vehicleId,
        eventType,
    }: {
        /**
         * The start date of the vehicle availability event.
         */
        startDate: string,
        /**
         * The end date of the vehicle availability event.
         */
        endDate: string,
        /**
         * The language code (optional). Default to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The ID of the carrier the vehicle belongs to.
         */
        carrierId?: string,
        /**
         * The ID of the vehicle.
         */
        vehicleId?: string,
        /**
         * Filters vehicle availability events by a specific event type.
         */
        eventType?: VehicleAvailabilityEventTypes,
    }): CancelablePromise<VehicleAvailabilitiesResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/availabilities',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
                'vehicleId': vehicleId,
                'eventType': eventType,
                'startDate': startDate,
                'endDate': endDate,
            },
        });
    }
    /**
     * Retrieves vehicle availability event details.
     * Retrieves vehicle availability event details.
     * @returns VehicleAvailabilityResponse 200 The vehicle availability has been retrieved successfully.
     * @throws ApiError
     */
    public static getVehicleAvailabilityEvent({
        availabilityId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the availability event to be retrieved.
         */
        availabilityId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<VehicleAvailabilityResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/availabilities/{availabilityId}',
            path: {
                'availabilityId': availabilityId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates vehicle availability events for a specific vehicle.
     * Updates an existing vehicle availability event for a specific vehicle.
     * @returns OperationResponse 200 The vehicle availability has been updated successfully.
     * @throws ApiError
     */
    public static updateVehicleAvailability({
        availabilityId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the availability to be updated.
         */
        availabilityId: string,
        /**
         * The updated vehicle availability details.
         */
        requestBody: UpdateVehicleAvailabilityEvent,
        /**
         * The language code (optional). Default to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/availabilities/{availabilityId}',
            path: {
                'availabilityId': availabilityId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes vehicle availability event.
     * Deletes vehicle availability event.
     * @returns OperationResponse 200 The vehicle availability has been deleted successfully.
     * @throws ApiError
     */
    public static deleteVehicleAvailability({
        availabilityId,
    }: {
        /**
         * The ID of the availability to be deleted.
         */
        availabilityId: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/availabilities/{availabilityId}',
            path: {
                'availabilityId': availabilityId,
            },
        });
    }
}
