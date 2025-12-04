/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApproveCarrierRequest } from '../models/ApproveCarrierRequest';
import type { CarrierChannelListResponse } from '../models/CarrierChannelListResponse';
import type { CarrierListResponse } from '../models/CarrierListResponse';
import type { CarrierProviderType } from '../models/CarrierProviderType';
import type { CarrierResponse } from '../models/CarrierResponse';
import type { CarrierStatus } from '../models/CarrierStatus';
import type { CreateCarrierRequest } from '../models/CreateCarrierRequest';
import type { FleetSize } from '../models/FleetSize';
import type { OperationResponse } from '../models/OperationResponse';
import type { ReviewCarrierRequest } from '../models/ReviewCarrierRequest';
import type { UpdateCarrierSystemCommissionRequest } from '../models/UpdateCarrierSystemCommissionRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CarriersManagementService {
    /**
     * Creates a new carrier.
     * Create a new carrier.
     * @returns OperationResponse 201 The created carrier.
     * @throws ApiError
     */
    public static createCarrier({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the carrier to be created.
         */
        requestBody: CreateCarrierRequest,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carriers',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all carriers, optionally filtered by countryId, regionId, cityId, providerType, companyName and status.
     * Get all available carriers.
     * @returns CarrierListResponse 200 The list of carriers matching the criteria.
     * @throws ApiError
     */
    public static getCarriers({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        countryId,
        regionId,
        cityId,
        providerType,
        fleetSize,
        companyName,
        status,
        isActive,
        isApplication,
        isApproved,
    }: {
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number to retrieve, defaults to 1.
         */
        pageNumber?: number,
        /**
         * The number of carriers to retrieve per page, defaults to 10.
         */
        pageSize?: number,
        /**
         * The ID of the country to filter carriers by.
         */
        countryId?: number,
        /**
         * The ID of the region to filter carriers by.
         */
        regionId?: number,
        /**
         * The ID of the city to filter carriers by.
         */
        cityId?: number,
        /**
         * The type of provider to filter carriers by.
         */
        providerType?: CarrierProviderType,
        /**
         * The fleet size to filter carriers by.
         */
        fleetSize?: FleetSize,
        /**
         * The name of the company to filter carriers by.
         */
        companyName?: string,
        /**
         * The status of the account to filter carriers by.
         */
        status?: CarrierStatus,
        /**
         * The search query to filter carriers by activation status.
         */
        isActive?: boolean,
        /**
         * The search query to filter carriers by application.
         */
        isApplication?: boolean,
        /**
         * A boolean flag to return Approved and Confirmed Carriers only.
         */
        isApproved?: boolean,
    }): CancelablePromise<CarrierListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carriers',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'countryId': countryId,
                'regionId': regionId,
                'cityId': cityId,
                'providerType': providerType,
                'fleetSize': fleetSize,
                'companyName': companyName,
                'status': status,
                'isActive': isActive,
                'isApplication': isApplication,
                'isApproved': isApproved,
            },
        });
    }
    /**
     * Retrieves a carrier by ID.
     * Get a carrier by ID.
     * @returns CarrierResponse 200 The carrier.
     * @throws ApiError
     */
    public static getCarrier({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The id of the carrier to retrieve.
         */
        carrierId: string,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<CarrierResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carriers/{carrierId}',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a carrier by ID.
     * Update an existing carrier by ID.
     * @returns OperationResponse 200 - The updated carrier.
     * @throws ApiError
     */
    public static updateCarrier({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier to update.
         */
        carrierId: string,
        /**
         * The updated details of the carrier.
         */
        requestBody: CreateCarrierRequest,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/carriers/{carrierId}',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a carrier by ID.
     * Delete a carrier.
     * @returns OperationResponse 200 Confirmation of deletion.
     * @throws ApiError
     */
    public static deleteCarrier({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier to delete.
         */
        carrierId: string,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/carriers/{carrierId}',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Approves a carrier that has already submitted a request.
     * Approve a carrier that has already submitted a request.
     * @returns OperationResponse 200 The updated carrier.
     * @throws ApiError
     */
    public static approveCarrier({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier to update.
         */
        carrierId: string,
        /**
         * The updated details of the carrier.
         */
        requestBody: ApproveCarrierRequest,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carriers/{carrierId}/approve',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Review a carrier access request with admin feedback.
     * Review a carrier access request by providing feedback comments.
     * @returns OperationResponse Carrier access request review submitted successfully
     * @throws ApiError
     */
    public static reviewCarrierAccessRequest({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier being reviewed.
         */
        carrierId: string,
        /**
         * Contains review details including admin feedback comments.
         */
        requestBody: ReviewCarrierRequest,
        /**
         * The _language code for localization. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carriers/{carrierId}/revise',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Rejects a carrier that has already submitted a request.
     * Reject a carrier that has already submitted a request.
     * @returns OperationResponse 200 The updated carrier.
     * @throws ApiError
     */
    public static rejectCarrier({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier to update.
         */
        carrierId: string,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carriers/{carrierId}/reject',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Activates or deactivates a carrier.
     * Activate or deactivate a carrier.
     * @returns OperationResponse 200 The updated carrier activation.
     * @throws ApiError
     */
    public static updateCarrierActivation({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier to activate or deactivate.
         */
        carrierId: string,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/carriers/{carrierId}/activation',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates the system commission for a carrier.
     * Update the system commission for a carrier.
     * @returns OperationResponse 200 - The updated carrier with the new system commission.
     * @throws ApiError
     */
    public static updateCarrierSystemCommission({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier to update.
         */
        carrierId: string,
        /**
         * The updated system commission details.
         */
        requestBody: UpdateCarrierSystemCommissionRequest,
        /**
         * The _language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/carriers/{carrierId}/system-commission',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get a list of channels for a specific carrier.
     * Retrieves a list of predefined channels for a specific carrier.
     * @returns CarrierChannelListResponse Successfully retrieved a list of channels for the carrier.
     * @throws ApiError
     */
    public static getCarrierChannels({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier.
         */
        carrierId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<CarrierChannelListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/carriers/{carrierId}/channels',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Toggles the activation status of a channel for a specific carrier.
     * Toggles the activation status of a channel for a specific carrier.
     * @returns OperationResponse Successfully updated the activation status of the channel for the carrier.
     * @throws ApiError
     */
    public static toggleChannelActivation({
        carrierId,
        channelId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier.
         */
        carrierId: string,
        /**
         * The unique identifier of the channel.
         */
        channelId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/carriers/{carrierId}/channels/{channelId}/activation-status',
            path: {
                'carrierId': carrierId,
                'channelId': channelId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
