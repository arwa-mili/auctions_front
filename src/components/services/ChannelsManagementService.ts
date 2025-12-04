/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AdminChannelListResponse } from '../models/AdminChannelListResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChannelsManagementService {
    /**
     * Get a list of channels for the admin.
     * Retrieves a list of sales channels for the admin.
     * @returns AdminChannelListResponse Successfully retrieved a list of channels for the admin.
     * @throws ApiError
     */
    public static getAdminChannels({
        xLangCode = 'en',
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<AdminChannelListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/channels',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
