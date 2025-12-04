/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CarrierPaymentSettings } from '../models/CarrierPaymentSettings';
import type { CarrierPaymentSettingsResponse } from '../models/CarrierPaymentSettingsResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { PaymentProfileListResponse } from '../models/PaymentProfileListResponse';
import type { PaymentSystemListResponse } from '../models/PaymentSystemListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PaymentsManagementService {
    /**
     * Retrieves the payment settings for the specified carrier by its ID.
     * Get the payment settings for a specific carrier.
     * @returns CarrierPaymentSettingsResponse 200 The current payment settings of the carrier.
     * @throws ApiError
     */
    public static getCarrierPaymentSettings({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier whose payment settings are to be retrieved.
         */
        carrierId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<CarrierPaymentSettingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payments/carriers/{carrierId}/settings',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates the payment configuration of the specified carrier.
     * Update the payment settings for a specific carrier.
     * @returns OperationResponse 200 Successfully updated the payment settings of the carrier.
     * @throws ApiError
     */
    public static updateCarrierPaymentSettings({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the carrier whose payment settings are to be updated.
         */
        carrierId: string,
        /**
         * The request body containing the updated payment settings details.
         */
        requestBody: CarrierPaymentSettings,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/payments/carriers/{carrierId}/settings',
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
     * Fetches the payment profiles configured for the specified carrier by its ID.
     * Retrieve the list of available payment profiles for a specific carrier.
     * @returns PaymentProfileListResponse 200 A list of payment profiles associated with the specified carrier.
     * @throws ApiError
     */
    public static getCarrierPaymentProfiles({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier whose payment profiles are to be fetched.
         */
        carrierId: string,
        /**
         * The language code for localization (optional). Defaults to the profile's `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PaymentProfileListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payments/carriers/{carrierId}/profiles',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Fetches the payment systems configured for the specified carrier by its ID.
     * Retrieve the list of available payment systems for a specific carrier.
     * @returns PaymentSystemListResponse 200 A list of payment systems associated with the specified carrier.
     * @throws ApiError
     */
    public static getCarrierPaymentSystems({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier whose payment systems are to be fetched.
         */
        carrierId: string,
        /**
         * The language code for localization (optional). Defaults to the system's `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PaymentSystemListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/payments/carriers/{carrierId}/systems',
            path: {
                'carrierId': carrierId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
