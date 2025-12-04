/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuilderSectionResponse } from '../models/BuilderSectionResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderItemsManagementService {
    /**
     * Get Builder Items
     * Retrieves a list of builder items to be used inside CMS module.
     * @returns BuilderSectionResponse Successfully retrieved a list of builder items to be used inside CMS module.
     * @throws ApiError
     */
    public static getBuilderItems({
        xLangCode = 'en',
    }: {
        /**
         * - The language code for the items. Defaults to the configured default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderSectionResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/builder-items',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
