/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UploadFilesBase64Req } from '../models/UploadFilesBase64Req';
import type { UploadFilesRes } from '../models/UploadFilesRes';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class FilesUploadService {
    /**
     * Uploads files to the server.
     * Upload files.
     * @returns UploadFilesRes Ok
     * @throws ApiError
     */
    public static uploadFiles({
        formData,
    }: {
        formData: {
            /**
             * - The files to be uploaded.
             */
            files: Array<Blob>;
        },
    }): CancelablePromise<UploadFilesRes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload',
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Uploads Base64-encoded files to the server.
     * Upload files using Base64.
     * @returns UploadFilesRes Ok
     * @throws ApiError
     */
    public static uploadFilesBase64({
        requestBody,
    }: {
        /**
         * - The Base64-encoded file data and metadata.
         */
        requestBody: UploadFilesBase64Req,
    }): CancelablePromise<UploadFilesRes> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/files/upload-base64',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
