/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccountStatus } from '../models/AccountStatus';
import type { CreateUserRequest } from '../models/CreateUserRequest';
import type { CreateUserSuspensionRequest } from '../models/CreateUserSuspensionRequest';
import type { Entities } from '../models/Entities';
import type { OperationResponse } from '../models/OperationResponse';
import type { UserListResponse } from '../models/UserListResponse';
import type { UserResponse } from '../models/UserResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersManagementService {
    /**
     * Creates a new user.
     * Create a new user.
     * @returns OperationResponse 201 The created user.
     * @throws ApiError
     */
    public static createUser({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The details of the user to be created.
         */
        requestBody: CreateUserRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieves all available users, optionally filtered by entity, role, email, first name, last name, or entity ID.
     * Get all available users.
     * @returns UserListResponse 200 The list of users matching the criteria.
     * @throws ApiError
     */
    public static getAllUsers({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        entity,
        roleId,
        status,
        email,
        firstName,
        lastName,
        entityId,
    }: {
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number to retrieve.
         */
        pageNumber?: number,
        /**
         * The page size to retrieve.
         */
        pageSize?: number,
        /**
         * The entity to filter users by.
         */
        entity?: Entities,
        /**
         * The ID of the role to filter users by.
         */
        roleId?: string,
        /**
         * The account's activation status to filter users by.
         */
        status?: AccountStatus,
        /**
         * The email to filter users by.
         */
        email?: string,
        /**
         * The first name to filter users by.
         */
        firstName?: string,
        /**
         * The last name to filter users by.
         */
        lastName?: string,
        /**
         * The ID of the entity to filter users by, usually a carrier's ID.
         */
        entityId?: string,
    }): CancelablePromise<UserListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'entity': entity,
                'roleId': roleId,
                'status': status,
                'email': email,
                'firstName': firstName,
                'lastName': lastName,
                'entityId': entityId,
            },
        });
    }
    /**
     * Retrieves a user by ID.
     * Get a user by id.
     * @returns UserResponse 200 The user with the specified ID.
     * @throws ApiError
     */
    public static getUser({
        userId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the user to retrieve.
         */
        userId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Updates a user by ID.
     * Update an existing user by ID.
     * @returns OperationResponse 200 The updated user.
     * @throws ApiError
     */
    public static updateUser({
        userId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the user to update.
         */
        userId: string,
        /**
         * The updated details of the carrier.
         */
        requestBody: CreateUserRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Deletes a user by ID.
     * Delete a user by ID.
     * @returns OperationResponse 200 Confirmation of deletion.
     * @throws ApiError
     */
    public static deleteUser({
        userId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the user to delete.
         */
        userId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{userId}',
            path: {
                'userId': userId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Activates a user by ID.
     * Activate a user by ID.
     * @returns OperationResponse 200 Confirmation of activation.
     * @throws ApiError
     */
    public static activateUser({
        userId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the user to activate.
         */
        userId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{userId}/activate',
            path: {
                'userId': userId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Suspends a user by ID.
     * Suspend a user by ID.
     * @returns OperationResponse 200 Confirmation of suspension.
     * @throws ApiError
     */
    public static suspendUser({
        userId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the user to suspend.
         */
        userId: string,
        /**
         * The details of the suspension.
         */
        requestBody: CreateUserSuspensionRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{userId}/suspend',
            path: {
                'userId': userId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Bans a user by ID.
     * Ban a user by ID.
     * @returns OperationResponse 200 Confirmation of ban.
     * @throws ApiError
     */
    public static banUser({
        userId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the user to ban.
         */
        userId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/users/{userId}/ban',
            path: {
                'userId': userId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
