/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminDashboardResponse } from '../models/AdminDashboardResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class DashboardService {
    /**
     * Fetches the dashboard data for a specified admin.
     * Retrieves the admin dashboard.
     * @returns AdminDashboardResponse 200 The response body containing the admin's dashboard data.
     * @throws ApiError
     */
    public static getAdminDashboard({
        countryId,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the country whose dashboard data is to be retrieved.
         */
        countryId: number,
        /**
         * The language code for localization. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<AdminDashboardResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/dashboard',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'countryId': countryId,
            },
        });
    }
}
