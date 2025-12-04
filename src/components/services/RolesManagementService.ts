/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PartialEntities } from '../models/PartialEntities';
import type { RoleListResponse } from '../models/RoleListResponse';
import type { RolePermissionGroupResponse } from '../models/RolePermissionGroupResponse';
import type { RoleResponse } from '../models/RoleResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RolesManagementService {
    /**
     * Retrieves all user roles, optionally filtered by entity.
     * Get all available user roles.
     * @returns RoleListResponse 200 A list of roles.
     * @throws ApiError
     */
    public static getRoles({
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        entity,
        search,
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
         * The entity to filter roles by.
         */
        entity?: PartialEntities,
        /**
         * The search term to filter roles by name.
         */
        search?: string,
    }): CancelablePromise<RoleListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'entity': entity,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a user role by its ID.
     * Get a user role by ID.
     * @returns RoleResponse 200 The requested role.
     * @throws ApiError
     */
    public static getRole({
        roleId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the role to retrieve.
         */
        roleId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<RoleResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/{roleId}',
            path: {
                'roleId': roleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Retrieves all available permissions for a role.
     * Retrieves a role's permissions.
     * @returns RolePermissionGroupResponse 200 A list of role permissions.
     * @throws ApiError
     */
    public static getRolePermissions({
        roleId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the role to retrieve permissions for.
         */
        roleId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<RolePermissionGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/roles/permissions/{roleId}',
            path: {
                'roleId': roleId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
