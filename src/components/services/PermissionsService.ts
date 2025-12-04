/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PermissionGroupResponse } from '../models/PermissionGroupResponse';
import type { UserRoleEntities } from '../models/UserRoleEntities';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PermissionsService {
    /**
     * Retrieves the list of permissions with their descriptions.
     * Retrieves the list of permissions.
     * @returns PermissionGroupResponse 200 A map of permissions with their descriptions.
     * @throws ApiError
     */
    public static getPermissions({
        entity,
        xLangCode = 'en',
    }: {
        /**
         * The entity types to filter permissions by.
         * This parameter specifies the type of user role entity (e.g., System, Carrier)
         */
        entity: UserRoleEntities,
        /**
         * Optional language code for translations. Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<PermissionGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/permissions',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'entity': entity,
            },
        });
    }
}
