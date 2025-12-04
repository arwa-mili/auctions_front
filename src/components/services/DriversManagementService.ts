/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DriverListResponse } from '../models/DriverListResponse';
import type { DriverResponse } from '../models/DriverResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DriversManagementService {
    /**
     * Retrieves all drivers.
     * Retrieves all drivers.
     * @returns DriverListResponse 200 The list of drivers.
     * @throws ApiError
     */
    public static getAllDrivers({
        carrierId,
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        isActive,
        hasUserAccount,
        tripPickUpDate,
        tripDropOffDate,
        search,
    }: {
        /**
         * The ID of the carrier that the driver belongs to.
         */
        carrierId: string,
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
         * Indicates whether the driver is active.
         */
        isActive?: boolean,
        /**
         * A boolean flag indicating if the driver has a user account, meaning the driver has been invited.
         */
        hasUserAccount?: boolean,
        /**
         * The pick-up date of the trip. This is useful for filtering drivers that are not available during this date.
         */
        tripPickUpDate?: string,
        /**
         * The drop-off date of the trip. This is useful for filtering drivers that are not available during this date.
         */
        tripDropOffDate?: string,
        /**
         * The search query for a driver name.
         */
        search?: string,
    }): CancelablePromise<DriverListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/drivers',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'isActive': isActive,
                'hasUserAccount': hasUserAccount,
                'tripPickUpDate': tripPickUpDate,
                'tripDropOffDate': tripDropOffDate,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a driver by ID.
     * Retrieves a driver by ID.
     * @returns DriverResponse 200 The driver.
     * @throws ApiError
     */
    public static getDriverById({
        driverId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the driver to be retrieved.
         */
        driverId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<DriverResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/drivers/{driverId}',
            path: {
                'driverId': driverId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
