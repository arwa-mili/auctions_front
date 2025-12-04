/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationResponse } from '../models/OperationResponse';
import type { SystemSettingsResponse } from '../models/SystemSettingsResponse';
import type { UpdateSystemSettingsRequest } from '../models/UpdateSystemSettingsRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SystemSettingsService {
    /**
     * Fetches the current configuration of system settings.
     * Retrieves system settings.
     * @returns SystemSettingsResponse 200 The current system settings have been retrieved.
     * @throws ApiError
     */
    public static getSystemSettings({
        xLangCode = 'en',
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<SystemSettingsResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/system-settings',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Modifies the configuration of system settings based on the provided data.
     * Updates system settings.
     * @returns OperationResponse 200 The system settings have been successfully updated.
     * @throws ApiError
     */
    public static updateSystemSettings({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The updated system settings data.
         */
        requestBody: UpdateSystemSettingsRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/system-settings',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
