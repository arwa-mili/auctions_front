/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CityListResponse } from '../models/CityListResponse';
import type { CityResponse } from '../models/CityResponse';
import type { CountryListResponse } from '../models/CountryListResponse';
import type { CountryResponse } from '../models/CountryResponse';
import type { RegionListResponse } from '../models/RegionListResponse';
import type { RegionResponse } from '../models/RegionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LocationsService {
    /**
     * Retrieves the list of countries.
     * Retrieves the list of countries.
     * @returns CountryListResponse 200 The list of countries.
     * @throws ApiError
     */
    public static getAllCountries({
        xLangCode = 'en',
        pageNumber,
        pageSize,
        search,
        hasLegalEntity,
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
         * The search term to filter countries by name or iso codes.
         */
        search?: string,
        /**
         * The flag to indicate whether the country has an associated legal entity.
         */
        hasLegalEntity?: boolean,
    }): CancelablePromise<CountryListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/countries',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'search': search,
                'hasLegalEntity': hasLegalEntity,
            },
        });
    }
    /**
     * Retrieves a country by ID.
     * Retrieves a country by ID.
     * @returns CountryResponse 200 The country.
     * @throws ApiError
     */
    public static getCountryById({
        countryId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the country to retrieve.
         */
        countryId: number,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<CountryResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/countries/{countryId}',
            path: {
                'countryId': countryId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Retrieves all regions for a country.
     * Retrieves all regions for a country.
     * @returns RegionListResponse 200 The list of regions.
     * @throws ApiError
     */
    public static getAllRegions({
        xLangCode = 'en',
        xCountryId,
        pageNumber,
        pageSize,
        countryId,
        search,
    }: {
        /**
         * The language code for translations.
         */
        xLangCode?: string,
        /**
         * The country ID (optional).
         */
        xCountryId?: number,
        /**
         * The page number.
         */
        pageNumber?: number,
        /**
         * The page size.
         */
        pageSize?: number,
        /**
         * The ID of the country.
         */
        countryId?: number,
        /**
         * The region name or code.
         */
        search?: string,
    }): CancelablePromise<RegionListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/regions',
            headers: {
                'x-lang-code': xLangCode,
                'x-country-id': xCountryId,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'countryId': countryId,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a region by ID.
     * Retrieves a region by ID.
     * @returns RegionResponse 200 The region.
     * @throws ApiError
     */
    public static getRegionById({
        regionId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the region to retrieve.
         */
        regionId: number,
        /**
         * The language code for translations.
         */
        xLangCode?: string,
    }): CancelablePromise<RegionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/regions/{regionId}',
            path: {
                'regionId': regionId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Retrieves all cities for a region.
     * Retrieves all cities for a region.
     * @returns CityListResponse 200 The list of cities.
     * @throws ApiError
     */
    public static getAllCities({
        regionId,
        xLangCode = 'en',
        pageNumber,
        pageSize,
        search,
    }: {
        /**
         * The ID of the region.
         */
        regionId: number,
        /**
         * The language code.
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
         * Search for a city by name.
         */
        search?: string,
    }): CancelablePromise<CityListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/cities',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'regionId': regionId,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a city by ID.
     * Retrieves a city by ID.
     * @returns CityResponse 200 The city.
     * @throws ApiError
     */
    public static getCityById({
        cityId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the city.
         */
        cityId: number,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<CityResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/cities/{cityId}',
            path: {
                'cityId': cityId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
