/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BuilderPageTranslationResponse } from '../models/BuilderPageTranslationResponse';
import type { BuilderTranslatableItemListResponse } from '../models/BuilderTranslatableItemListResponse';
import type { CreateBuilderFieldTranslationRequest } from '../models/CreateBuilderFieldTranslationRequest';
import type { GetBuilderFieldTranslationRequest } from '../models/GetBuilderFieldTranslationRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class BuilderContentTranslationManagementService {
    /**
     * Get all translation groups
     * Retrieves all translatable groups for a specific carrier.
     * @returns BuilderTranslatableItemListResponse Translation groups retrieved successfully
     * @throws ApiError
     */
    public static getTranslationGroups({
        carrierId,
        targetLangCode,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier for which translations are being fetched.
         */
        carrierId: string,
        /**
         * The code of the language for which translations are being fetched.
         */
        targetLangCode: string,
        /**
         * Language code (defaults to system default locale)
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderTranslatableItemListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/translation-groups',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
                'targetLangCode': targetLangCode,
            },
        });
    }
    /**
     * Get translation items by group
     * Retrieves translatable items within a specific group.
     * @returns BuilderPageTranslationResponse Translation group items retrieved successfully
     * @throws ApiError
     */
    public static getTranslationGroupItems({
        carrierId,
        groupCode,
        targetLangCode,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier for which translations are being fetched.
         */
        carrierId: string,
        /**
         * The code that identifies the translatable group, such as a website page code or section code.
         */
        groupCode: string,
        /**
         * The code of the language for which translations are being fetched.
         */
        targetLangCode: string,
        /**
         * Language code (defaults to system default locale)
         */
        xLangCode?: string,
    }): CancelablePromise<BuilderPageTranslationResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/builder-contents/translation-groups/items',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
                'groupCode': groupCode,
                'targetLangCode': targetLangCode,
            },
        });
    }
    /**
     * Create or update translations
     * Creates or updates translations for builder content fields.
     * @returns OperationResponse Translations created or updated successfully
     * @throws ApiError
     */
    public static setFieldTranslations({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * Translation data containing the fields and their translated values
         */
        requestBody: CreateBuilderFieldTranslationRequest,
        /**
         * Language code (defaults to system default locale)
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/translation-groups/items',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Translate text field
     * Translates a specific text field within a builder item. This service uses Google Translate API in the background.
     * @returns OperationResponse Text translation request processed successfully
     * @throws ApiError
     */
    public static translateText({
        carrierId,
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The unique identifier of the carrier for which translations are being fetched.
         */
        carrierId: string,
        /**
         * Request body containing the field data to be translated
         */
        requestBody: GetBuilderFieldTranslationRequest,
        /**
         * Language code (defaults to system default locale)
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/builder-contents/translation-groups/items/translate-text',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'carrierId': carrierId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
