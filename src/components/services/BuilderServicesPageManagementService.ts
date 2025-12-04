/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuilderExtraServiceListResponse } from '../models/BuilderExtraServiceListResponse';
import type { BuilderServiceListResponse } from '../models/BuilderServiceListResponse';
import type { CreateBuilderServiceRequest } from '../models/CreateBuilderServiceRequest';
import type { CreateVehicleExtraServiceRequest } from '../models/CreateVehicleExtraServiceRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { ServicePageResponse } from '../models/ServicePageResponse';
import type { UpdateServiceOrderRequest } from '../models/UpdateServiceOrderRequest';
import type { UpdateVehicleExtrasOrderRequest } from '../models/UpdateVehicleExtrasOrderRequest';
import type { UpsertServicePageRequest } from '../models/UpsertServicePageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderServicesPageManagementService {
    /**
     * Upsert Service Page Content
     * Upserts the content of the services' page and SEO metadata for a specific carrier.
     * @returns OperationResponse Service Page Content Updated Successfully
     * @throws ApiError
     */
    public static upsertServicesPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the service page.
         */
        carrierId: string,
        /**
         * - The request body containing the service page content and SEO metadata.
         */
        requestBody: UpsertServicePageRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/service-pages',
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
     * Get Service Page Content
     * Retrieves the content of the service page for a specific carrier.
     * @returns ServicePageResponse Service Page Content Retrieved Successfully
     * @throws ApiError
     */
    public static getServicesPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the service page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<ServicePageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/service-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Add New Service
     * Adds a new service for a carrier.
     * @returns OperationResponse Service Page Content Created Successfully
     * @throws ApiError
     */
    public static addService({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the service.
         */
        carrierId: string,
        /**
         * - The request body containing the service details.
         */
        requestBody: CreateBuilderServiceRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/service-pages/services',
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
     * Get Services
     * Retrieves the services' content for a specific carrier.
     * @returns BuilderServiceListResponse Service Page Content Retrieved Successfully
     * @throws ApiError
     */
    public static getAllServices({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the service.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderServiceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/service-pages/services',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Updates the content of a service
     * Updates the content of a specific service for a carrier.
     * @returns OperationResponse Service Content Updated Successfully
     * @throws ApiError
     */
    public static updateService({
        serviceId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the service to be updated.
         */
        serviceId: string,
        /**
         * - The request body containing the updated service content details.
         */
        requestBody: CreateBuilderServiceRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/service-pages/services/{serviceId}',
            path: {
                'serviceId': serviceId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a Service Page Content
     * Deletes a specific service for a carrier.
     * @returns OperationResponse Service Page Content Deleted Successfully
     * @throws ApiError
     */
    public static deleteServicePageContent({
        serviceId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the service to be deleted.
         */
        serviceId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/service-pages/services/{serviceId}',
            path: {
                'serviceId': serviceId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates the display order of services
     * Updates the display order of services for a carrier.
     * @returns OperationResponse Service display order updated successfully
     * @throws ApiError
     */
    public static updateServicesDisplayOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the service.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order of services.
         */
        requestBody: UpdateServiceOrderRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/service-pages/services/display-order',
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
     * Synchronizes vehicle extra services for a carrier
     * Synchronizes vehicle extra services for a carrier.
     * @returns OperationResponse Vehicle extra services synchronized successfully
     * @throws ApiError
     */
    public static synchronizeVehicleExtraServices({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder vehicle extra service.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/service-pages/vehicle-extra-services/synchronize',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Retrieves vehicle extra services for a carrier
     * Retrieves vehicle extra services for a carrier.
     * @returns BuilderExtraServiceListResponse Vehicle extra services retrieved successfully
     * @throws ApiError
     */
    public static getVehicleExtraServices({
        carrierId,
        xLangCode = 'en',
        search,
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder vehicle extra service.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * A search query to match against the name of the vehicle extra services.
         */
        search?: string,
    }): CancelablePromise<BuilderExtraServiceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/service-pages/vehicle-extra-services',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
                'search': search,
            },
        });
    }
    /**
     * Creates a new vehicle extra service
     * Creates a new vehicle extra service for a carrier.
     * @returns OperationResponse Vehicle extra services created successfully
     * @throws ApiError
     */
    public static createVehicleExtraService({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder vehicle extra service.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the vehicle extra service to be created.
         */
        requestBody: CreateVehicleExtraServiceRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/service-pages/vehicle-extra-services',
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
     * Updates an existing vehicle extra service
     * Updates an existing vehicle extra service for a carrier.
     * @returns OperationResponse Vehicle extra service updated successfully
     * @throws ApiError
     */
    public static updateVehicleExtraService({
        vehicleExtraServiceId,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the vehicle extra service to be updated.
         */
        vehicleExtraServiceId: string,
        /**
         * Represents the unique identifier of the carrier associated with the builder vehicle extra service.
         */
        carrierId: string,
        /**
         * - The request body containing the updated details of the vehicle extra service.
         */
        requestBody: CreateVehicleExtraServiceRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/service-pages/vehicle-extra-services/{vehicleExtraServiceId}',
            path: {
                'vehicleExtraServiceId': vehicleExtraServiceId,
            },
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
     * Deletes a vehicle extra service
     * Deletes a vehicle extra service for a carrier.
     * @returns OperationResponse Vehicle extra service deleted successfully
     * @throws ApiError
     */
    public static deleteVehicleExtraService({
        vehicleExtraServiceId,
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the vehicle extra service to be deleted.
         */
        vehicleExtraServiceId: string,
        /**
         * Represents the unique identifier of the carrier associated with the builder vehicle extra service.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/service-pages/vehicle-extra-services/{vehicleExtraServiceId}',
            path: {
                'vehicleExtraServiceId': vehicleExtraServiceId,
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
     * Updates the display order of vehicle extra services for a carrier
     * Updates the display order of vehicle extra services for a carrier.
     * @returns OperationResponse Vehicle extra services display order updated successfully
     * @throws ApiError
     */
    public static updateVehicleExtrasOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the builder vehicle extra service.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order of vehicle extra services.
         */
        requestBody: UpdateVehicleExtrasOrderRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/service-pages/vehicle-extra-services/display-order',
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
     * Toggles the display status of a vehicle extra service
     * Toggles the display status of a vehicle extra service. It can be used to show or hide a vehicle extra service from the list of services on the landing page.
     * @returns OperationResponse Vehicle extra service display toggled successfully
     * @throws ApiError
     */
    public static toggleVehicleExtraDisplay({
        vehicleExtraServiceId,
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the vehicle extra service to toggle.
         */
        vehicleExtraServiceId: string,
        /**
         * Represents the unique identifier of the carrier associated with the builder vehicle extra service.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/service-pages/vehicle-extra-services/{vehicleExtraServiceId}/toggle-display',
            path: {
                'vehicleExtraServiceId': vehicleExtraServiceId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
}
