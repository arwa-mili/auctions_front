/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivateTransferZonePricingRequest } from '../models/ActivateTransferZonePricingRequest';
import type { CreateTransferZonePricingRequest } from '../models/CreateTransferZonePricingRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { TransferZonePricingListResponse } from '../models/TransferZonePricingListResponse';
import type { TransferZonePricingResponse } from '../models/TransferZonePricingResponse';
import type { UpdateTransferZonePricingRequest } from '../models/UpdateTransferZonePricingRequest';
import type { UpdateZoneChannelsRequest } from '../models/UpdateZoneChannelsRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransferZonesPricingManagementService {
    /**
     * Creates a new transfer zone pricing.
     * Creates a new transfer zone pricing.
     * @returns OperationResponse 201 the created transfer zone pricing.
     * @throws ApiError
     */
    public static createTransferZonePricing({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the transfer zone pricing to be created.
         */
        requestBody: CreateTransferZonePricingRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transfer-zone-pricing',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all transfer zone pricing.
     * Retrieves all transfer zone pricing.
     * @returns TransferZonePricingListResponse 200 The list of transfer zone pricing.
     * @throws ApiError
     */
    public static getAllTransferZonePricing({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        airportId,
        transferZoneId,
        carrierId,
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
         * The unique identifier of an airport.
         */
        airportId?: number,
        /**
         * The unique identifier of a transfer zone.
         */
        transferZoneId?: string,
        /**
         * The unique identifier of a carrier.
         */
        carrierId?: string,
    }): CancelablePromise<TransferZonePricingListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfer-zone-pricing',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'airportId': airportId,
                'transferZoneId': transferZoneId,
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Retrieves a transfer zone pricing by ID.
     * Retrieves a transfer zone pricing  by ID.
     * @returns TransferZonePricingResponse 200 The transfer zone pricing.
     * @throws ApiError
     */
    public static getTransferZonePricingById({
        transferZonePricingId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone pricing to be retrieved.
         */
        transferZonePricingId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TransferZonePricingResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfer-zone-pricing/{transferZonePricingId}',
            path: {
                'transferZonePricingId': transferZonePricingId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a transfer zone pricing by ID.
     * Updates a transfer zone pricing by ID.
     * @returns OperationResponse 200 The updated transfer zone pricing.
     * @throws ApiError
     */
    public static updateTransferZonePricing({
        transferZonePricingId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone pricing to be updated.
         */
        transferZonePricingId: string,
        /**
         * The details of the transfer zone pricing to be updated.
         */
        requestBody: CreateTransferZonePricingRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/transfer-zone-pricing/{transferZonePricingId}',
            path: {
                'transferZonePricingId': transferZonePricingId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a transfer zone pricing by ID.
     * Deletes a transfer zone pricing by ID.
     * @returns OperationResponse 200
     * @throws ApiError
     */
    public static deleteTransferZonePricing({
        transferZonePricingId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone pricing to be deleted.
         */
        transferZonePricingId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/transfer-zone-pricing/{transferZonePricingId}',
            path: {
                'transferZonePricingId': transferZonePricingId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Activates or deactivates a transfer zone pricing.
     * Activates or deactivates a transfer zone pricing.
     * @returns OperationResponse 200 The activated or deactivated transfer zone pricing.
     * @throws ApiError
     */
    public static activateTransferZonePricing({
        transferZonePricingId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone pricing to activate or deactivate.
         */
        transferZonePricingId: string,
        /**
         * The details of the activation request.
         */
        requestBody: ActivateTransferZonePricingRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/transfer-zone-pricing/{transferZonePricingId}',
            path: {
                'transferZonePricingId': transferZonePricingId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Updates an existing pricing for a transfer zone.
     * Updates an existing pricing for a transfer zone.
     * @returns OperationResponse 200 The updated pricing.
     * @throws ApiError
     */
    public static updatePricingForTransferZone({
        transferZonePricingId,
        pricingId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * the ID of the transfer zone pricing to update pricing for.
         */
        transferZonePricingId: string,
        /**
         * The ID of the pricing to update.
         */
        pricingId: string,
        /**
         * the details of the pricing to be updated.
         */
        requestBody: UpdateTransferZonePricingRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/transfer-zone-pricing/{transferZonePricingId}/pricing/{pricingId}',
            path: {
                'transferZonePricingId': transferZonePricingId,
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
     * Update channels for a transfer zone pricing entry.
     * Updates the channel configuration for a transfer zone pricing.
     * @returns OperationResponse Transfer zone pricing channels updated successfully
     * @throws ApiError
     */
    public static updateZonePricingChannels({
        transferZonePricingId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone pricing to update channels for.
         */
        transferZonePricingId: string,
        /**
         * The channel update payload (`UpdateZoneChannelsRequest`).
         */
        requestBody: UpdateZoneChannelsRequest,
        /**
         * Optional language code; defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/transfer-zone-pricing/{transferZonePricingId}/channels',
            path: {
                'transferZonePricingId': transferZonePricingId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
