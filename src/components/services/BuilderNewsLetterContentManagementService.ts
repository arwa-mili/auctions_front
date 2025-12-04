/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NewsletterResponse } from '../models/NewsletterResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpsertNewsLetterRequest } from '../models/UpsertNewsLetterRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderNewsLetterContentManagementService {
    /**
     * Get Newsletter Content
     * Retrieves the newsletter content for a specific carrier.
     * @returns NewsletterResponse NewsLetter Content Retrieved Successfully
     * @throws ApiError
     */
    public static getNewsletterContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the newsletter content.
         */
        carrierId: string,
        /**
         * The language code for the newsletter content. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<NewsletterResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/newsletters',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert Newsletter Content
     * Upserts the newsletter content for a specific carrier.
     * @returns OperationResponse NewsLetter Content Upserted Successfully
     * @throws ApiError
     */
    public static upsertNewsletterContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the newsletter content.
         */
        carrierId: string,
        /**
         * The request body containing the newsletter content details to be upserted.
         */
        requestBody: UpsertNewsLetterRequest,
        /**
         * The language code for the newsletter content. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/newsletters',
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
