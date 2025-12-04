/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VehicleBrandListResponse } from '../models/VehicleBrandListResponse';
import type { VehicleBrandResponse } from '../models/VehicleBrandResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VehicleBrandsManagementService {
    /**
     * Retrieves all vehicle brands.
     * Retrieves all vehicle brands.
     * @returns VehicleBrandListResponse 200 The list of vehicle brands.
     * @throws ApiError
     */
    public static getVehicleBrands({
        xLangCode = 'en',
        pageNumber,
        pageSize,
        search,
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
         * The search term, for a brand name or it's corresponding translations.
         */
        search?: string,
    }): CancelablePromise<VehicleBrandListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-brands',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a vehicle brand by ID.
     * Retrieves a vehicle brand by ID.
     * @returns VehicleBrandResponse 200 The vehicle brand.
     * @throws ApiError
     */
    public static getVehicleBrandById({
        vehicleBrandId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the vehicle brand.
         */
        vehicleBrandId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<VehicleBrandResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/vehicle-brands/{vehicleBrandId}',
            path: {
                'vehicleBrandId': vehicleBrandId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
