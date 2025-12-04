/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { GetNotificationsRes } from '../models/GetNotificationsRes';
import type { MarkAllNotificationsAsReadReq } from '../models/MarkAllNotificationsAsReadReq';
import type { MarkAllNotificationsAsSeenReq } from '../models/MarkAllNotificationsAsSeenReq';
import type { OperationResponse } from '../models/OperationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * Get a list of notifications.
     * Retrieves a list of notifications based on the provided query parameters.
     * @returns GetNotificationsRes Ok
     * @throws ApiError
     */
    public static getNotifications({
        page,
        pageSize,
        xLangCode = 'en',
        carrierId,
    }: {
        /**
         * Page number for pagination.
         */
        page: number,
        /**
         * Number of items per page.
         */
        pageSize: number,
        xLangCode?: string,
        /**
         * Unique identifier of the associated carrier for filtering notifications.
         */
        carrierId?: string,
    }): CancelablePromise<GetNotificationsRes> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'carrierId': carrierId,
            },
        });
    }
    /**
     * Delete a notification.
     * Deletes a notification with the specified ID.
     * @returns OperationResponse Ok
     * @throws ApiError
     */
    public static deleteNotification({
        notificationId,
        xLangCode = 'en',
    }: {
        /**
         * - The ID of the notification to be deleted.
         */
        notificationId: string,
        /**
         * - The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/{notificationId}',
            path: {
                'notificationId': notificationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Mark a notification as read.
     * Marks a notification with the specified ID as read.
     * @returns OperationResponse Ok
     * @throws ApiError
     */
    public static markNotificationAsRead({
        notificationId,
        xLangCode = 'en',
    }: {
        /**
         * - The ID of the notification to be marked as read.
         */
        notificationId: string,
        /**
         * - The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/notifications/{notificationId}/read',
            path: {
                'notificationId': notificationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Mark a notification as unread.
     * Marks a notification with the specified ID as unread.
     * @returns OperationResponse Ok
     * @throws ApiError
     */
    public static markNotificationAsUnread({
        notificationId,
        xLangCode = 'en',
    }: {
        /**
         * - The ID of the notification to be marked as unread.
         */
        notificationId: string,
        /**
         * - The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/notifications/{notificationId}/unread',
            path: {
                'notificationId': notificationId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Mark all notifications as read.
     * Marks all notifications as read.
     * @returns OperationResponse Ok
     * @throws ApiError
     */
    public static markAllNotificationsAsRead({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The request body containing additional information for marking all notifications as read.
         */
        requestBody: MarkAllNotificationsAsReadReq,
        /**
         * - The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/read',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Mark all notifications as seen.
     * Marks all notifications as seen.
     * @returns OperationResponse Ok
     * @throws ApiError
     */
    public static markAllNotificationsAsSeen({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The request body containing additional information for marking all notifications as seen.
         */
        requestBody: MarkAllNotificationsAsSeenReq,
        /**
         * - The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/seen',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
