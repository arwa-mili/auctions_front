/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuilderDomainResponse } from '../models/BuilderDomainResponse';
import type { DomainResponse } from '../models/DomainResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { SetDomainRequest } from '../models/SetDomainRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderDomainManagementService {
    /**
     * Check Domain Availability
     * Checks the availability of a domain name and retrieves its information.
     * @returns BuilderDomainResponse Successfully checked domain information.
     * @throws ApiError
     */
    public static checkDomain({
        domain,
        xLangCode = 'en',
    }: {
        /**
         * The full domain name including the tld e.g. 'example.com'. The service will remove any protocol and 'www.' prefix.
         */
        domain: string,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderDomainResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-domains/check-domain',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'domain': domain,
            },
        });
    }
    /**
     * Set Carrier Domain Settings
     * Sets the domain for a specific carrier.
     * @returns OperationResponse Domain set successfully
     * @throws ApiError
     */
    public static setDomainSettings({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier in the format of a date followed by a random 6-digit number.
         */
        carrierId: string,
        /**
         * - The request body containing the domain settings to be set.
         */
        requestBody: SetDomainRequest,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-domains',
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
     * Get Carrier Domain Settings
     * Retrieves the domain settings for a specific carrier.
     * @returns DomainResponse Domain settings retrieved successfully
     * @throws ApiError
     */
    public static getDomainSettings({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier in the format of a date followed by a random 6-digit number.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<DomainResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-domains',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Publish Carrier Website
     * Publishes the website for a specific carrier.
     * @returns OperationResponse - A promise that resolves to the operation response indicating success or failure.
     * @throws ApiError
     */
    public static publishWebsite({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier in the format of a date followed by a random 6-digit number.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-domains/publish',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
}
