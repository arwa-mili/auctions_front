/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TransferTypeListResponse } from '../models/TransferTypeListResponse';
import type { TransferTypeResponse } from '../models/TransferTypeResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TransferTypesManagementService {
    /**
     * Retrieves all transfer types.
     * Retrieves all transfer types.
     * @returns TransferTypeListResponse 200 The list of transfer types.
     * @throws ApiError
     */
    public static getTransferTypes({
        xLangCode = 'en',
        pageNumber,
        pageSize,
        transferTypeName,
        numberOfSeats,
        luggageCapacity,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
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
         * The name of the transfer type.
         */
        transferTypeName?: string,
        /**
         * The number of seats of the transfer type.
         */
        numberOfSeats?: number,
        /**
         * The luggage capacity of the transfer type.
         */
        luggageCapacity?: number,
    }): CancelablePromise<TransferTypeListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfer-types',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'transferTypeName': transferTypeName,
                'numberOfSeats': numberOfSeats,
                'luggageCapacity': luggageCapacity,
            },
        });
    }
    /**
     * Retrieves a transfer type by ID.
     * Retrieves a transfer type by ID.
     * @returns TransferTypeResponse 200 The transfer type with the specified ID.
     * @throws ApiError
     */
    public static getTransferType({
        transferTypeId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the transfer type to retrieve.
         */
        transferTypeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TransferTypeResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/transfer-types/{transferTypeId}',
            path: {
                'transferTypeId': transferTypeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
