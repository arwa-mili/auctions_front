/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateTransferZoneRequest } from '../models/CreateTransferZoneRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { TransferZoneListResponse } from '../models/TransferZoneListResponse';
import type { TransferZoneResponse } from '../models/TransferZoneResponse';
import type { UnAssociatedPlaceListResponse } from '../models/UnAssociatedPlaceListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransferZonesManagementService {
    /**
     * Creates a new transfer zone.
     * Creates a new transfer zone.
     * @returns OperationResponse 201 The created transfer zone.
     * @throws ApiError
     */
    public static createTransferZone({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the transfer zone to be created.
         */
        requestBody: CreateTransferZoneRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/transfer-zones',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all transfer zones.
     * Retrieves all transfer zones.
     * @returns TransferZoneListResponse 200 The list of transfer zones.
     * @throws ApiError
     */
    public static getTransferZones({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        carrierId,
        isEmpty,
        search,
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
         * The ID of the carrier.
         */
        carrierId?: string,
        /**
         * The name of the transfer zone.
         */
        isEmpty?: boolean,
        /**
         * The search term for the transfer zone.
         */
        search?: string,
    }): CancelablePromise<TransferZoneListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfer-zones',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'isEmpty': isEmpty,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a transfer zone by ID.
     * Retrieves a transfer zone by ID.
     * @returns TransferZoneResponse 200 The transfer zone.
     * @throws ApiError
     */
    public static getTransferZone({
        transferZoneId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone to be retrieved.
         */
        transferZoneId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TransferZoneResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfer-zones/{transferZoneId}',
            path: {
                'transferZoneId': transferZoneId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates an existing transfer zone by ID.
     * Updates an existing transfer zone by ID.
     * @returns OperationResponse 200 The updated transfer zone.
     * @throws ApiError
     */
    public static updateTransferZone({
        transferZoneId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone to be updated.
         */
        transferZoneId: string,
        /**
         * The details of the transfer zone to be updated.
         */
        requestBody: CreateTransferZoneRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/transfer-zones/{transferZoneId}',
            path: {
                'transferZoneId': transferZoneId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a transfer zone by ID.
     * Deletes a transfer zone by ID.
     * @returns OperationResponse 200 The transfer zone has been deleted.
     * @throws ApiError
     */
    public static deleteTransferZone({
        transferZoneId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer zone to be deleted.
         */
        transferZoneId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/transfer-zones/{transferZoneId}',
            path: {
                'transferZoneId': transferZoneId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Retrieves all places that are not associated with a transfer zone.
     * Retrieves all places that are not associated with a transfer zone.
     * @returns UnAssociatedPlaceListResponse 200 The list of places not associated with a transfer zone.
     * @throws ApiError
     */
    public static getPlacesNotAssociatedWithTransferZone({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        carrierId,
        search,
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
         * The ID of the carrier.
         */
        carrierId?: string,
        /**
         * The search term for the transfer zone.
         */
        search?: string,
    }): CancelablePromise<UnAssociatedPlaceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfer-zones/places/unassociated',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'search': search,
            },
        });
    }
}
