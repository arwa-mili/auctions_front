/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuilderTransferTypeListResponse } from '../models/BuilderTransferTypeListResponse';
import type { BuilderVehicleListResponse } from '../models/BuilderVehicleListResponse';
import type { CreateBuilderTransferTypeRequest } from '../models/CreateBuilderTransferTypeRequest';
import type { CreateBuilderVehicleRequest } from '../models/CreateBuilderVehicleRequest';
import type { FleetPageResponse } from '../models/FleetPageResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateBuilderVehicleRequest } from '../models/UpdateBuilderVehicleRequest';
import type { UpdateTransferTypesOrderRequest } from '../models/UpdateTransferTypesOrderRequest';
import type { UpdateVehiclesOrderRequest } from '../models/UpdateVehiclesOrderRequest';
import type { UpsertFleetPageRequest } from '../models/UpsertFleetPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderFleetPagesManagementService {
    /**
     * Get Fleet Page Content
     * Retrieves the fleet page content for a specific carrier.
     * @returns FleetPageResponse Fleet Page Content Retrieved Successfully
     * @throws ApiError
     */
    public static getFleetPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The identifier of the carrier for which the fleet page content is being requested.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<FleetPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/fleet-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert Fleet Page Content
     * Upserts the fleet page content for a specific carrier.
     * @returns OperationResponse Fleet Page Content Updated Successfully
     * @throws ApiError
     */
    public static upsertFleetPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The identifier of the carrier for which the fleet page content is being requested.
         */
        carrierId: string,
        /**
         * - The request body containing the fleet page content to be upserted.
         */
        requestBody: UpsertFleetPageRequest,
        /**
         * - The language code for the request. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/fleet-pages',
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
     * Synchronize Transfer Types
     * Synchronizes transfer types for a carrier's fleet page by adding any transfer types that are associated with approved vehicles but not yet present on the fleet page.
     * @returns OperationResponse Transfer types synchronized successfully
     * @throws ApiError
     */
    public static synchronizeTransferTypes({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder transfer type.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/fleet-pages/transfer-types/synchronize',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Add Builder Transfer Type
     * Adds a new transfer type for a carrier's fleet page.
     * @returns OperationResponse Transfer types synchronized successfully
     * @throws ApiError
     */
    public static addBuilderTransferType({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder transfer type.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the transfer type to be added.
         */
        requestBody: CreateBuilderTransferTypeRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/fleet-pages/transfer-types',
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
     * Get Transfer Types for a Carrier
     * Fetches transfer types for a carrier.
     * @returns BuilderTransferTypeListResponse Transfer types fetched successfully
     * @throws ApiError
     */
    public static getTransferTypes({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder transfer type.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderTransferTypeListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/fleet-pages/transfer-types',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Builder Transfer Type
     * Updates an existing transfer type for a carrier's fleet page.
     * @returns OperationResponse Transfer type updated successfully
     * @throws ApiError
     */
    public static updateBuilderTransferType({
        transferTypeId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the transfer type to be updated.
         */
        transferTypeId: string,
        /**
         * - The request body containing the updated details of the transfer type.
         */
        requestBody: CreateBuilderTransferTypeRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/fleet-pages/transfer-types/{transferTypeId}',
            path: {
                'transferTypeId': transferTypeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete Builder Transfer Type
     * Deletes a transfer type for a carrier's fleet page.
     * @returns OperationResponse Transfer type deleted successfully
     * @throws ApiError
     */
    public static deleteBuilderTransferType({
        transferTypeId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the transfer type to be deleted.
         */
        transferTypeId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/fleet-pages/transfer-types/{transferTypeId}',
            path: {
                'transferTypeId': transferTypeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Toggles Display Status of a Transfer Type
     * Toggles the display status of a transfer type.
     * @returns OperationResponse Transfer type display toggled successfully
     * @throws ApiError
     */
    public static toggleTransferTypeDisplay({
        transferTypeId,
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the transfer type to toggle.
         */
        transferTypeId: string,
        /**
         * Represents the unique identifier of the carrier associated with the builder transfer type.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/fleet-pages/transfer-types/{transferTypeId}/toggle-display',
            path: {
                'transferTypeId': transferTypeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Transfer Types Order
     * Updates the order of transfer types for a carrier's fleet page.
     * @returns OperationResponse Transfer types order updated successfully
     * @throws ApiError
     */
    public static updateTransferTypesOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder transfer type.
         */
        carrierId: string,
        /**
         * - The request body containing the new order of transfer types.
         */
        requestBody: UpdateTransferTypesOrderRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/fleet-pages/transfer-types/display-order',
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
     * Synchronize Vehicles
     * Synchronizes vehicles for a carrier's fleet page by adding any vehicles that are approved but not yet present on the fleet page.
     * @returns OperationResponse Vehicles synchronized successfully
     * @throws ApiError
     */
    public static synchronizeVehicles({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated withe vehicle.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/fleet-pages/vehicles/synchronize',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Get Vehicle list
     * Retrieves the list of vehicles optionally filtered by a transfer type for a specific carrier.
     * @returns BuilderVehicleListResponse Vehicle list fetched successfully
     * @throws ApiError
     */
    public static getTransferTypesVehicleList({
        carrierId,
        xLangCode = 'en',
        transferTypeId,
    }: {
        /**
         * The unique identifier of the carrier associated withe vehicle.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The unique identifier of the transfer type associated with the vehicle.
         */
        transferTypeId?: string,
    }): CancelablePromise<BuilderVehicleListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/fleet-pages/vehicles',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
                'transferTypeId': transferTypeId,
            },
        });
    }
    /**
     * Add Builder Vehicle
     * Adds a new vehicle to the fleet page of a carrier.
     * @returns OperationResponse Successfully added a new vehicle to fleet page
     * @throws ApiError
     */
    public static addBuilderVehicle({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated withe vehicle.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the vehicle to be added.
         */
        requestBody: CreateBuilderVehicleRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/fleet-pages/vehicles',
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
     * Update Builder Vehicle
     * Updates the details of an existing vehicle on the fleet page of a carrier.
     * @returns OperationResponse Successfully updated vehicle details
     * @throws ApiError
     */
    public static updateBuilderVehicle({
        vehicleId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the vehicle to be updated.
         */
        vehicleId: string,
        /**
         * - The request body containing the updated details of the vehicle.
         */
        requestBody: UpdateBuilderVehicleRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/fleet-pages/vehicles/{vehicleId}',
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
     * Delete Builder Vehicle
     * Deletes a vehicle from the fleet page of a carrier.
     * @returns OperationResponse Successfully deleted vehicle from fleet page
     * @throws ApiError
     */
    public static deleteBuilderVehicle({
        vehicleId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the vehicle to be deleted.
         */
        vehicleId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/fleet-pages/vehicles/{vehicleId}',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Toggle Vehicle Display Status
     * Toggles the display status of a vehicle on the fleet page of a carrier.
     * @returns OperationResponse Successfully updated vehicle display status
     * @throws ApiError
     */
    public static updateBuilderVehiclesOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated withe vehicle.
         */
        carrierId: string,
        /**
         * - The request body containing the vehicle IDs and transfer type ID for updating the display order.
         */
        requestBody: UpdateVehiclesOrderRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/fleet-pages/vehicles/display-order',
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
     * Toggle Vehicle Display Status
     * Toggles the display status of a vehicle on the fleet page of a carrier.
     * @returns OperationResponse Successfully toggled vehicle display status
     * @throws ApiError
     */
    public static toggleBuilderVehicleDisplay({
        vehicleId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the vehicle to toggle.
         */
        vehicleId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/fleet-pages/vehicles/{vehicleId}/toggle-display',
            path: {
                'vehicleId': vehicleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
