/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingRuleListResponse } from '../models/BookingRuleListResponse';
import type { BookingRulesPageResponse } from '../models/BookingRulesPageResponse';
import type { CreateBookingRuleRequest } from '../models/CreateBookingRuleRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateBookingRulesOrderRequest } from '../models/UpdateBookingRulesOrderRequest';
import type { UpsertBookingRulesPageRequest } from '../models/UpsertBookingRulesPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderBookingRulesPagesManagementService {
    /**
     * Get Booking Rules Page Content
     * Retrieve booking rules page content and SEO metadata for a carrier.
     * @returns BookingRulesPageResponse Successfully retrieved booking rules page content and SEO metadata.
     * @throws ApiError
     */
    public static getBookingRulesPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the booking rules page.
         */
        carrierId: string,
        /**
         * - Optional language code for the response. Defaults to `DEFAULT_LOCALE` if not provided.
         */
        xLangCode?: string,
    }): CancelablePromise<BookingRulesPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/booking-rules-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Booking Rules Page Content
     * Update booking rules page content and SEO metadata for a carrier.
     * @returns OperationResponse Successfully updated booking rules page content and SEO metadata.
     * @throws ApiError
     */
    public static updateBookingRulesPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the booking rules page.
         */
        carrierId: string,
        /**
         * - The request body containing the updated booking rules page content and SEO metadata.
         */
        requestBody: UpsertBookingRulesPageRequest,
        /**
         * - Optional language code for the response. Defaults to `DEFAULT_LOCALE` if not provided.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/booking-rules-pages',
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
     * Create Booking Rule
     * Create a new booking rule for a carrier.
     * @returns OperationResponse Successfully created a new booking rule.
     * @throws ApiError
     */
    public static createBookingRule({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the booking rule.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the new booking rule.
         */
        requestBody: CreateBookingRuleRequest,
        /**
         * - Optional language code for the response. Defaults to `DEFAULT_LOCALE` if not provided.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/booking-rules-pages/booking-rules',
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
     * Get Booking Rules
     * Retrieves a list of booking rules for a carrier.
     * @returns BookingRuleListResponse Successfully retrieved booking rules list.
     * @throws ApiError
     */
    public static getAllBookingRules({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the booking rule.
         */
        carrierId: string,
        /**
         * - Optional language code for the response. Defaults to `DEFAULT_LOCALE` if not provided.
         */
        xLangCode?: string,
    }): CancelablePromise<BookingRuleListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/booking-rules-pages/booking-rules',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Booking Rule
     * Updates an existing booking rule for a carrier.
     * @returns OperationResponse Successfully updated an existing booking rule.
     * @throws ApiError
     */
    public static updateBookingRule({
        bookingRuleId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The ID of the booking rule to be updated.
         */
        bookingRuleId: string,
        /**
         * - The request body containing the updated details of the booking rule.
         */
        requestBody: CreateBookingRuleRequest,
        /**
         * - Optional language code for the response. Defaults to `DEFAULT_LOCALE` if not provided.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/booking-rules-pages/booking-rules/{bookingRuleId}',
            path: {
                'bookingRuleId': bookingRuleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete Booking Rule
     * Deletes a booking rule for a carrier.
     * @returns OperationResponse Successfully deleted a booking rule.
     * @throws ApiError
     */
    public static deleteBookingRule({
        bookingRuleId,
        xLangCode = 'en',
    }: {
        /**
         * - The ID of the booking rule to be deleted.
         */
        bookingRuleId: string,
        /**
         * - Optional language code for the response. Defaults to `DEFAULT_LOCALE` if not provided.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/booking-rules-pages/booking-rules/{bookingRuleId}',
            path: {
                'bookingRuleId': bookingRuleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Reorder Booking Rules
     * Reorders booking rules for a carrier.
     * @returns OperationResponse Successfully updated booking rules display order.
     * @throws ApiError
     */
    public static reorderBookingRules({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier associated with the booking rule.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order of booking rules.
         */
        requestBody: UpdateBookingRulesOrderRequest,
        /**
         * - Optional language code for the response. Defaults to `DEFAULT_LOCALE` if not provided.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/booking-rules-pages/booking-rules/display-order',
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
