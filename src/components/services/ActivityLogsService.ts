/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserActivityLogListResponse } from '../models/UserActivityLogListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ActivityLogsService {
    /**
     * Get a list of user activity logs.
     * Retrieves a list of user activity logs based on the provided query parameters.
     * @returns UserActivityLogListResponse 200 - Successfully retrieved the list of activity logs.
     * @throws ApiError
     */
    public static getActivityLogs({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        carrierId,
        userId,
    }: {
        /**
         * - The language code.
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
         * The unique identifier of the carrier to filter activity logs.
         */
        carrierId?: string,
        /**
         * The unique identifier of the user to filter activity logs.
         */
        userId?: string,
    }): CancelablePromise<UserActivityLogListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/activity-logs',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'userId': userId,
            },
        });
    }
}
