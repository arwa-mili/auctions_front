/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BrandingConfigurationResponse } from '../models/BrandingConfigurationResponse';
import type { EmailBrandingResponse } from '../models/EmailBrandingResponse';
import type { EmailLogoResponse } from '../models/EmailLogoResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpsertBrandingConfigRequest } from '../models/UpsertBrandingConfigRequest';
import type { UpsertEmailBrandingConfigRequest } from '../models/UpsertEmailBrandingConfigRequest';
import type { UpsertEmailLogoRequest } from '../models/UpsertEmailLogoRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderBrandingConfigurationManagementService {
    /**
     * Get Branding Configuration
     * Retrieves the branding configuration for a specific carrier.
     * @returns BrandingConfigurationResponse Successfully retrieved branding configuration of a carrier.
     * @throws ApiError
     */
    public static getBrandingConfig({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The language code for the branding configuration. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<BrandingConfigurationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-templates/branding-configuration',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Branding Configuration
     * Updates or creates the branding configuration for a specific carrier.
     * @returns OperationResponse Successfully upserted branding configuration for a carrier.
     * @throws ApiError
     */
    public static updateBrandingConfig({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The request body containing the branding configuration details to be upserted.
         */
        requestBody: UpsertBrandingConfigRequest,
        /**
         * - The language code for the branding configuration. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-templates/branding-configuration',
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
     * Update Email Branding Configuration
     * Updates the email branding and theme colors for a specific carrier.
     * @returns OperationResponse Successfully upserted email branding configuration for a carrier.
     * @throws ApiError
     */
    public static updateEmailBrandingConfig({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The request body containing the email branding configuration details to be upserted.
         */
        requestBody: UpsertEmailBrandingConfigRequest,
        /**
         * - The language code for the email branding configuration. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-templates/branding-configuration/emails/theme',
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
     * Get Email Branding Configuration
     * Retrieves the email branding configuration for a specific carrier.
     * @returns EmailBrandingResponse Successfully retrieved email branding configuration of a carrier.
     * @throws ApiError
     */
    public static getEmailBrandingConfig({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The language code for the email branding configuration. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<EmailBrandingResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-templates/branding-configuration/emails/theme',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Email Branding Logos
     * Updates the email branding logos for a specific carrier.
     * @returns OperationResponse Successfully upserted email branding logos for a carrier.
     * @throws ApiError
     */
    public static updateEmailBrandingLogos({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The request body containing the email branding logos details to be upserted.
         */
        requestBody: UpsertEmailLogoRequest,
        /**
         * - The language code for the email branding logos. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-templates/branding-configuration/emails/logos',
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
     * Get Email Branding Logos
     * Retrieves the email branding logos for a specific carrier.
     * @returns EmailLogoResponse Successfully retrieved email branding logos of a carrier.
     * @throws ApiError
     */
    public static getEmailBrandingLogos({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the branding configuration.
         */
        carrierId: string,
        /**
         * - The language code for the email branding logos. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<EmailLogoResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-templates/branding-configuration/emails/logos',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
}
