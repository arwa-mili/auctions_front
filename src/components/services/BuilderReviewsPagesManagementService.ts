/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationResponse } from '../models/OperationResponse';
import type { ReviewsPageResponse } from '../models/ReviewsPageResponse';
import type { UpsertReviewsPageRequest } from '../models/UpsertReviewsPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderReviewsPagesManagementService {
    /**
     * Get reviews page content
     * Retrieves the reviews' page content for a specific carrier.
     * @returns ReviewsPageResponse Successfully retrieved reviews page content
     * @throws ApiError
     */
    public static getReviewsPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the reviews' page.
         */
        carrierId: string,
        /**
         * - The language code for the content. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<ReviewsPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/reviews-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert reviews page content
     * Upserts the reviews' page content for a specific carrier.
     * @returns OperationResponse Successfully updated reviews page content
     * @throws ApiError
     */
    public static upsertReviewsPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the reviews' page.
         */
        carrierId: string,
        /**
         * - The request body containing the content to be upserted.
         */
        requestBody: UpsertReviewsPageRequest,
        /**
         * - The language code for the content. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/reviews-pages',
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
