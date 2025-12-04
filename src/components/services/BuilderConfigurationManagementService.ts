/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuilderCurrencyListResponse } from '../models/BuilderCurrencyListResponse';
import type { BuilderLanguageListResponse } from '../models/BuilderLanguageListResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateStatusRequest } from '../models/UpdateStatusRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderConfigurationManagementService {
    /**
     * Get Currencies
     * Retrieves a comprehensive list of currencies for a specific carrier, including their active status and popularity indicators.
     * @returns BuilderCurrencyListResponse Successfully retrieved a list of currencies.
     * @throws ApiError
     */
    public static getCurrencies({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderCurrencyListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-configs/currencies',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Currency
     * Updates a currency's active status and popularity flag for a specific carrier.
     * @returns OperationResponse Successfully updated a currency.
     * @throws ApiError
     */
    public static updateCurrency({
        currencyCode,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The code of the currency to be updated.
         */
        currencyCode: string,
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The request body containing the updated status of the currency.
         */
        requestBody: UpdateStatusRequest,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-configs/currencies/{currencyCode}/status',
            path: {
                'currencyCode': currencyCode,
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
     * Get Languages
     * Retrieves a comprehensive list of languages for a specific carrier, including their active status and popularity indicators.
     * @returns BuilderLanguageListResponse Successfully retrieved a list of languages.
     * @throws ApiError
     */
    public static getLanguages({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderLanguageListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-configs/languages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Language
     * Updates a language's active status and popularity flag for a specific carrier.
     * @returns OperationResponse - A promise that resolves to an operation response indicating success or failure of the update operation.
     * @throws ApiError
     */
    public static updateLanguage({
        languageCode,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The code of the language to be updated.
         */
        languageCode: string,
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The request body containing the updated status of the language.
         */
        requestBody: UpdateStatusRequest,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-configs/languages/{languageCode}/status',
            path: {
                'languageCode': languageCode,
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
}
