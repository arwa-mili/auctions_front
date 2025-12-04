/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OperationResponse } from '../models/OperationResponse';
import type { UpdateUserRequest } from '../models/UpdateUserRequest';
import type { UserResponse } from '../models/UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CurrentUserService {
    /**
     * Get user details.
     * Retrieves information about a authenticated user.
     * @returns UserResponse 200 - Successfully retrieved user details.
     * @throws ApiError
     */
    public static getCurrentUser({
        xLangCode = 'en',
    }: {
        /**
         * - The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/me',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Update user details.
     * Updates information about a authenticated user.
     * @returns OperationResponse 200 - Successfully updated user details.
     * @throws ApiError
     */
    public static updateCurrentUser({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The updated information for the user.
         */
        requestBody: UpdateUserRequest,
        /**
         * - The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/me',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
