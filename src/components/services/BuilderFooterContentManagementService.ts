/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePaymentMethodRequest } from '../models/CreatePaymentMethodRequest';
import type { FooterContentResponse } from '../models/FooterContentResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { PaymentMethodListResponse } from '../models/PaymentMethodListResponse';
import type { UpdatePaymentMethodsOrder } from '../models/UpdatePaymentMethodsOrder';
import type { UpsertFooterContentRequest } from '../models/UpsertFooterContentRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderFooterContentManagementService {
    /**
     * Get Footer Content
     * Retrieves the footer content for a specific carrier.
     * @returns FooterContentResponse Footer Content Retrieved Successfully
     * @throws ApiError
     */
    public static getFooterContent({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the footer content.
         */
        carrierId: string,
        /**
         * - The language code for the footer content. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<FooterContentResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/footer-content',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Upsert Footer Content
     * Upserts the footer content for a specific carrier.
     * @returns OperationResponse Footer Content Upserted Successfully
     * @throws ApiError
     */
    public static upsertFooterContent({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the footer content.
         */
        carrierId: string,
        /**
         * - The request body containing the footer content details to be upserted.
         */
        requestBody: UpsertFooterContentRequest,
        /**
         * - The language code for the footer content. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/footer-content',
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
     * Add Payment Method
     * Adds a new Payment Method to the footer content for a specific carrier.
     * @returns OperationResponse Payment method created successfully
     * @throws ApiError
     */
    public static addPaymentMethod({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the footer content.
         */
        carrierId: string,
        /**
         * - The request body containing the payment method details to be added.
         */
        requestBody: CreatePaymentMethodRequest,
        /**
         * - The language code for the footer content. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/footer-content/payment-methods',
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
     * Get Payment Methods
     * Retrieves the payment methods for a specific carrier.
     * @returns PaymentMethodListResponse Payment methods retrieved successfully
     * @throws ApiError
     */
    public static getPaymentMethods({
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the footer content.
         */
        carrierId: string,
        /**
         * - The language code for the footer content. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PaymentMethodListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/footer-content/payment-methods',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Payment Method
     * Updates the payment method for a specific carrier.
     * @returns OperationResponse Payment method updated successfully
     * @throws ApiError
     */
    public static updatePaymentMethod({
        paymentMethodId,
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The ID of the payment method to be updated.
         */
        paymentMethodId: string,
        /**
         * Represents the unique identifier of the carrier associated with the footer content.
         */
        carrierId: string,
        /**
         * - The request body containing the payment method details to be updated.
         */
        requestBody: CreatePaymentMethodRequest,
        /**
         * - The language code for the footer content. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/builder-contents/footer-content/payment-methods/{paymentMethodId}',
            path: {
                'paymentMethodId': paymentMethodId,
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
     * Delete Payment Method
     * Deletes the payment method for a specific carrier.
     * @returns OperationResponse Payment method deleted successfully
     * @throws ApiError
     */
    public static deletePaymentMethod({
        paymentMethodId,
        carrierId,
        xLangCode = 'en',
    }: {
        /**
         * - The ID of the payment method to be deleted.
         */
        paymentMethodId: string,
        /**
         * Represents the unique identifier of the carrier associated with the footer content.
         */
        carrierId: string,
        /**
         * - The language code for the footer content. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/builder-contents/footer-content/payment-methods/{paymentMethodId}',
            path: {
                'paymentMethodId': paymentMethodId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Update Payment Methods Order
     * Updates the display order of the payment methods for a specific carrier.
     * @returns OperationResponse Payment methods order updated successfully
     * @throws ApiError
     */
    public static updatePaymentMethodsOrder({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Represents the unique identifier of the carrier associated with the footer content.
         */
        carrierId: string,
        /**
         * - The request body containing the updated display order of the payment methods.
         */
        requestBody: UpdatePaymentMethodsOrder,
        /**
         * - The language code for the footer content. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/builder-contents/footer-content/payment-methods/display-order',
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
