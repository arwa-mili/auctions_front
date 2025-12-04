/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePlaceRequest } from '../models/CreatePlaceRequest';
import type { GetShortPLaceListResponse } from '../models/GetShortPLaceListResponse';
import type { LocationTypes } from '../models/LocationTypes';
import type { OperationResponse } from '../models/OperationResponse';
import type { PlaceAutoCompleteListResponse } from '../models/PlaceAutoCompleteListResponse';
import type { PlaceListResponse } from '../models/PlaceListResponse';
import type { PlaceResponse } from '../models/PlaceResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PlacesManagementService {
    /**
     * Creates a new place.
     * Creates a new place.
     * @returns OperationResponse 201 the place created successfully.
     * @throws ApiError
     */
    public static createPlace({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the new place to be created.
         */
        requestBody: CreatePlaceRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/places',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all places.
     * Retrieves all places.
     * @returns PlaceListResponse 200 places found successfully.
     * @throws ApiError
     */
    public static getPlaces({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        placeType,
        countryId,
        regionId,
        cityId,
        search,
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
         * The type of the place.
         */
        placeType?: LocationTypes,
        /**
         * The country ID of the place.
         */
        countryId?: number,
        /**
         * The region ID of the place.
         */
        regionId?: number,
        /**
         * The city ID of the place.
         */
        cityId?: number,
        /**
         * The search query to filter places by name.
         */
        search?: string,
    }): CancelablePromise<PlaceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/places',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'placeType': placeType,
                'countryId': countryId,
                'regionId': regionId,
                'cityId': cityId,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a place by its ID.
     * Retrieves a place by ID.
     * @returns PlaceResponse 200 area found successfully.
     * @throws ApiError
     */
    public static getPlace({
        placeId,
        xLangCode = 'en',
    }: {
        /**
         * location ID.
         */
        placeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PlaceResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/places/{placeId}',
            path: {
                'placeId': placeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a place by ID.
     * Updates a place by ID.
     * @returns OperationResponse 200 The updated place.
     * @throws ApiError
     */
    public static updatePlace({
        placeId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the place to update.
         */
        placeId: string,
        /**
         * The updated details of the place.
         */
        requestBody: CreatePlaceRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/places/{placeId}',
            path: {
                'placeId': placeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a place by ID.
     * Deletes a place by ID.
     * @returns OperationResponse 200 The place has been deleted.
     * @throws ApiError
     */
    public static deletePlace({
        placeId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the place to delete.
         */
        placeId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/places/{placeId}',
            path: {
                'placeId': placeId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Retrieves a list of places with very short details.
     * Retrieves a list of places with very short details based on the provided query parameters.
     * @returns GetShortPLaceListResponse 200 The list of places with very short details.
     * @throws ApiError
     */
    public static getShortPlaceList({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        placeType,
        countryId,
        regionId,
        cityId,
        search,
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
         * The type of the place.
         */
        placeType?: LocationTypes,
        /**
         * The country ID of the place.
         */
        countryId?: number,
        /**
         * The region ID of the place.
         */
        regionId?: number,
        /**
         * The city ID of the place.
         */
        cityId?: number,
        /**
         * The search query to filter places by name.
         */
        search?: string,
    }): CancelablePromise<GetShortPLaceListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/places/list/short-format',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'placeType': placeType,
                'countryId': countryId,
                'regionId': regionId,
                'cityId': cityId,
                'search': search,
            },
        });
    }
    /**
     * Search for place suggestions using autocomplete.
     * Retrieves autocomplete suggestions for places based on user input.
     * @returns PlaceAutoCompleteListResponse 200 Autocomplete suggestions retrieved successfully.
     * @throws ApiError
     */
    public static searchPlaces({
        input,
        xLangCode = 'en',
        countryId,
    }: {
        /**
         * The input string to autocomplete.
         */
        input: string,
        /**
         * The language code for localization (e.g., 'en', 'fr', 'ar'). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The country ID to filter autocomplete results.
         */
        countryId?: number,
    }): CancelablePromise<PlaceAutoCompleteListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/places/search/autocomplete',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'input': input,
                'countryId': countryId,
            },
        });
    }
}
