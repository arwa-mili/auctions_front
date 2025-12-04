/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CurrencyListResponse } from '../models/CurrencyListResponse';
import type { CurrencyResponse } from '../models/CurrencyResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CurrenciesService {
    /**
     * Retrieves all currencies.
     * Retrieves all currencies.
     * @returns CurrencyListResponse 200 The list of currencies.
     * @throws ApiError
     */
    public static getCurrencies({
        xLangCode = 'en',
        pageNumber,
        pageSize,
        currencyName,
        currencyCode,
        currencyNumCode,
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
         * The name of the currency.
         */
        currencyName?: string,
        /**
         * The code of the currency.
         */
        currencyCode?: string,
        /**
         * The code number of the currency.
         */
        currencyNumCode?: number,
    }): CancelablePromise<CurrencyListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/currencies',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'currencyName': currencyName,
                'currencyCode': currencyCode,
                'currencyNumCode': currencyNumCode,
            },
        });
    }
    /**
     * Retrieves a currency by code.
     * Retrieves a currency by code.
     * @returns CurrencyResponse 200 The currency with the specified code.
     * @throws ApiError
     */
    public static getCurrencyByCode({
        currencyCode,
        xLangCode = 'en',
    }: {
        currencyCode: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<CurrencyResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/currencies/{currencyCode}',
            path: {
                'currencyCode': currencyCode,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
