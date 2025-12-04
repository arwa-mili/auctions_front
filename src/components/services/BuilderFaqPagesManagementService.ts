/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFAQCategoryRequest } from '../models/CreateFAQCategoryRequest';
import type { CreateFAQRequest } from '../models/CreateFAQRequest';
import type { FAQCategoryListResponse } from '../models/FAQCategoryListResponse';
import type { FAQPageResponse } from '../models/FAQPageResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateFAQRequest } from '../models/UpdateFAQRequest';
import type { UpdateFAQsOrder } from '../models/UpdateFAQsOrder';
import type { UpsertFAQPageRequest } from '../models/UpsertFAQPageRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderFaqPagesManagementService {
    /**
     * Get FAQ Page Content
     * Retrieves the FAQ page content and SEO metadata for a specific carrier.
     * @returns FAQPageResponse Successfully retrieved FAQ page content and SEO metadata.
     * @throws ApiError
     */
    public static getFaqPageContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<FAQPageResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/faq-pages',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert FAQ Page Content.
     * Upserts the FAQ page content and SEO metadata for a specific carrier.
     * @returns OperationResponse Successfully upserted FAQ page content and SEO metadata.
     * @throws ApiError
     */
    public static upsertFaqPageContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The request body containing the FAQ page content and SEO metadata.
         */
        requestBody: UpsertFAQPageRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/faq-pages',
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
     * Add FAQ Category
     * Adds a new FAQ category for a specific carrier.
     * @returns OperationResponse Successfully created FAQ category.
     * @throws ApiError
     */
    public static addFaqCategory({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the FAQ category to be created.
         */
        requestBody: CreateFAQCategoryRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/faq-pages/categories',
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
     * Get FAQ Categories
     * Retrieves the list of FAQ categories for a specific carrier.
     * @returns FAQCategoryListResponse Successfully retrieved FAQ categories.
     * @throws ApiError
     */
    public static getFaqCategories({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<FAQCategoryListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/faq-pages/categories',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update FAQ Category
     * Updates an existing FAQ category for a specific carrier.
     * @returns OperationResponse Successfully updated FAQ category.
     * @throws ApiError
     */
    public static updateFaqCategory({
        faqCategoryId,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the FAQ category to be updated.
         */
        faqCategoryId: string,
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The request body containing the updated details of the FAQ category.
         */
        requestBody: CreateFAQCategoryRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/faq-pages/categories/{faqCategoryId}',
            path: {
                'faqCategoryId': faqCategoryId,
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
     * Delete FAQ Category
     * Deletes an existing FAQ category for a specific carrier.
     * @returns OperationResponse Successfully deleted FAQ category.
     * @throws ApiError
     */
    public static deleteFaqCategory({
        faqCategoryId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the FAQ category to be deleted.
         */
        faqCategoryId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/faq-pages/categories/{faqCategoryId}',
            path: {
                'faqCategoryId': faqCategoryId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Add FAQ Question
     * Adds a new FAQ question to a specific FAQ category for a carrier.
     * @returns OperationResponse Successfully added FAQ question.
     * @throws ApiError
     */
    public static addFaqQuestion({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The request body containing the details of the FAQ question to be created.
         */
        requestBody: CreateFAQRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/faq-pages/questions',
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
     * Update FAQ Question
     * Updates an existing FAQ question for a specific carrier.
     * @returns OperationResponse Successfully updated FAQ question.
     * @throws ApiError
     */
    public static updateFaqQuestion({
        faqId,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the FAQ question to be updated.
         */
        faqId: string,
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The request body containing the updated details of the FAQ question.
         */
        requestBody: UpdateFAQRequest,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/faq-pages/questions/{faqId}',
            path: {
                'faqId': faqId,
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
     * Delete FAQ Question
     * Deletes an existing FAQ question for a specific carrier.
     * @returns OperationResponse Successfully deleted FAQ question.
     * @throws ApiError
     */
    public static deleteFaqQuestion({
        faqId,
        xLangCode = 'en',
    }: {
        /**
         * - The unique identifier of the FAQ question to be deleted.
         */
        faqId: string,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/faq-pages/questions/{faqId}',
            path: {
                'faqId': faqId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Update FAQ Display Order
     * Updates the display order of FAQ questions for a specific carrier.
     * @returns OperationResponse Successfully updated FAQ display order.
     * @throws ApiError
     */
    public static updateFaqDisplayOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the FAQs page.
         */
        carrierId: string,
        /**
         * - The request body containing the new display order for the FAQ questions.
         */
        requestBody: UpdateFAQsOrder,
        /**
         * - The language code for the response. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/faq-pages/questions/display-order',
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
