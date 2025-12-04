/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateFieldTranslationRequest } from '../models/CreateFieldTranslationRequest';
import type { GetTextTranslationRequest } from '../models/GetTextTranslationRequest';
import type { GetTextTranslationResponse } from '../models/GetTextTranslationResponse';
import type { OperationResponse } from '../models/OperationResponse';
import type { TranslatableGroupListResponse } from '../models/TranslatableGroupListResponse';
import type { TranslatableGroupResponse } from '../models/TranslatableGroupResponse';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TranslationUtilitiesService {
    /**
     * Get a list of all translatable content groups.
     * Retrieves all the available translatable entity groups for admins.
     * This endpoint will return all system entities with translatable content like cancellation policies, for example.
     * @returns TranslatableGroupListResponse - The response containing the list of translatable content groups.
     * @throws ApiError
     */
    public static getAllTranslationGroups({
        targetLangCode,
        xLangCode = 'en',
    }: {
        /**
         * Represents the target language code for the translation.
         */
        targetLangCode: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TranslatableGroupListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/translation-groups',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'targetLangCode': targetLangCode,
            },
        });
    }
    /**
     * Add a new field translation.
     * Adds a new field translation for a specific entity.
     * @returns OperationResponse - The response containing the result of the operation.
     * @throws ApiError
     */
    public static addFieldTranslation({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the translation details.
         */
        requestBody: CreateFieldTranslationRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/translation-groups',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Get details about all translatable fields in a specific group.
     * Retrieves a specific translatable entity group for admins.
     * This endpoint will retrieve a specific translatable entity group for admins.
     * @returns TranslatableGroupResponse Ok
     * @throws ApiError
     */
    public static getAllTranslationGroup({
        groupCode,
        targetLangCode,
        xLangCode = 'en',
    }: {
        /**
         * Represents the code of the translatable group.
         */
        groupCode: string,
        /**
         * Represents the target language code for the translation.
         */
        targetLangCode: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TranslatableGroupResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/translation-groups/group',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'groupCode': groupCode,
                'targetLangCode': targetLangCode,
            },
        });
    }
    /**
     * Translate a given text.
     * Translates a given text using Google Translate service under the hood.
     * @returns GetTextTranslationResponse - The response containing the translated text.
     * @throws ApiError
     */
    public static translateText({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the text to be translated.
         */
        requestBody: GetTextTranslationRequest,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<GetTextTranslationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/translation-groups/translate-text',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
