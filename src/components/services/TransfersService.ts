/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationResponse } from '../models/OperationResponse';
import type { TransferListResponse } from '../models/TransferListResponse';
import type { TransferResponse } from '../models/TransferResponse';
import type { TransferStatus } from '../models/TransferStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransfersService {
    /**
     * Fetches all transfers.
     * Retrieves all transfers based on the provided query parameters.
     * This endpoint is intended for admins to view all transfers.
     * @returns TransferListResponse 200 A list of transfers matching the provided criteria.
     * @throws ApiError
     */
    public static getAllTransfers({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        carrierId,
        pickupStartDate,
        pickupEndDate,
        minTotalAmount,
        maxTotalAmount,
        transferStatus,
        transferTypeId,
        search,
    }: {
        /**
         * The language code for localization (default is English).
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
         * The ID of the carrier that the transfer belongs to.
         */
        carrierId?: string,
        /**
         * The start date of when a pickup is available.
         */
        pickupStartDate?: string,
        /**
         * The end date of when a pickup is available.
         */
        pickupEndDate?: string,
        /**
         * Minimum amount for filtering transfers.
         */
        minTotalAmount?: number,
        /**
         * Maximum amount for filtering transfers.
         */
        maxTotalAmount?: number,
        /**
         * The transfer status.
         */
        transferStatus?: TransferStatus,
        /**
         * The ID of the transfer type.
         */
        transferTypeId?: string,
        /**
         * The search query for a customer name etc.
         */
        search?: string,
    }): CancelablePromise<TransferListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfers',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'pickupStartDate': pickupStartDate,
                'pickupEndDate': pickupEndDate,
                'minTotalAmount': minTotalAmount,
                'maxTotalAmount': maxTotalAmount,
                'transferStatus': transferStatus,
                'transferTypeId': transferTypeId,
                'search': search,
            },
        });
    }
    /**
     * Fetches a transfer by ID.
     * Retrieves a specific transfer by its ID.
     * This endpoint is intended for admins to view details of a specific transfer.
     * @returns TransferResponse 200 The transfer details matching the provided ID.
     * @throws ApiError
     */
    public static getTransferById({
        transferId,
        xLangCode = 'en',
    }: {
        /**
         * The unique ID of the transfer to fetch.
         */
        transferId: string,
        /**
         * The language code for localization (default is English).
         */
        xLangCode?: string,
    }): CancelablePromise<TransferResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfers/{transferId}',
            path: {
                'transferId': transferId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Confirms the assignment of a transfer.
     * Confirms the assignment of a transfer. This action is typically performed by an admin.
     * After confirming, the transfer will be marked as assigned.
     * @returns OperationResponse 200 A response confirming the assignment of the transfer.
     * @throws ApiError
     */
    public static confirmTransferAssignment({
        transferId,
        xLangCode = 'en',
    }: {
        /**
         * The unique ID of the transfer to confirm.
         */
        transferId: string,
        /**
         * The language code for localization (default is English).
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/transfers/{transferId}/confirm',
            path: {
                'transferId': transferId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Rejects the assignment of a transfer.
     * Rejects the assignment of a transfer. This action is typically performed by an admin.
     * After rejecting, the transfer will be marked as unassigned.
     * @returns OperationResponse 200 A response confirming the rejection of the transfer assignment.
     * @throws ApiError
     */
    public static rejectTransferAssignment({
        transferId,
        xLangCode = 'en',
    }: {
        /**
         * The unique ID of the transfer to reject.
         */
        transferId: string,
        /**
         * The language code for localization (default is English).
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/transfers/{transferId}/reject',
            path: {
                'transferId': transferId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
