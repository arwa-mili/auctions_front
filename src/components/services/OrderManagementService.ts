/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminOrderListResponse } from '../models/AdminOrderListResponse';
import type { AdminOrderResponse } from '../models/AdminOrderResponse';
import type { OrderStatus } from '../models/OrderStatus';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class OrderManagementService {
    /**
     * Get a list of all orders.
     * Retrieves the list of orders associated with user.'s legal entity merchant.
     * @returns AdminOrderListResponse Successfully list of orders.
     * @throws ApiError
     */
    public static getAllOrders({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        status,
        carrierId,
        search,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number of the query, defaults to 1.
         */
        pageNumber?: number,
        /**
         * The page size of the query, defaults to 10.
         */
        pageSize?: number,
        /**
         * The order status.
         */
        status?: OrderStatus,
        /**
         * The carrier ID to filter orders by.
         */
        carrierId?: string,
        /**
         * The search query for an order number.
         */
        search?: string,
    }): CancelablePromise<AdminOrderListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'status': status,
                'carrierId': carrierId,
                'search': search,
            },
        });
    }
    /**
     * Get details about a specific order.
     * Retrieves a specific order by its ID.
     * @returns AdminOrderResponse Successfully retrieved the order.
     * @throws ApiError
     */
    public static getOrderById({
        orderId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the order to be retrieved.
         */
        orderId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<AdminOrderResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/orders/{orderId}',
            path: {
                'orderId': orderId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
