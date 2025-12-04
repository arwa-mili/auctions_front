/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LegalEntityResponse } from '../models/LegalEntityResponse';
import type { PartialLegalEntityListResponse } from '../models/PartialLegalEntityListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LegalEntitiesManagementService {
    /**
     * Retrieves a paginated list of legal entities.
     * Retrieves a paginated list of legal entities.
     * @returns PartialLegalEntityListResponse Successfully retrieved the list of legal entities.
     * @throws ApiError
     */
    public static getLegalEntities({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        countryId,
        search,
    }: {
        /**
         * - The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number to retrieve, defaults to 1.
         */
        pageNumber?: number,
        /**
         * The number of carriers to retrieve per page, defaults to 10.
         */
        pageSize?: number,
        /**
         * An optional query parameter to filter legal entities by their country ID.
         */
        countryId?: number,
        /**
         * An optional search query to filter legal entities by name or legal name.
         */
        search?: string,
    }): CancelablePromise<PartialLegalEntityListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/legal-entities',
            headers: {
                'x-lang-code': xLangCode,
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
     * Retrieves a legal entity by its ID.
     * Retrieves a legal entity by its ID.
     * @returns LegalEntityResponse Successfully retrieved the legal entity.
     * @throws ApiError
     */
    public static getLegalEntityById({
        legalEntityId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the legal entity to be retrieved.
         */
        legalEntityId: string,
        /**
         * - The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<LegalEntityResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/legal-entities/{legalEntityId}',
            path: {
                'legalEntityId': legalEntityId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
