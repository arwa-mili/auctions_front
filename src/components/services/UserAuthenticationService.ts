/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ChangePasswordRequest } from '../models/ChangePasswordRequest';
import type { CheckPasswordRecoveryTokenRequest } from '../models/CheckPasswordRecoveryTokenRequest';
import type { OperationResponse } from '../models/OperationResponse';
import type { PasswordCreationRequest } from '../models/PasswordCreationRequest';
import type { PasswordResetRequest } from '../models/PasswordResetRequest';
import type { ResendPasswordRecoveryTokenRequest } from '../models/ResendPasswordRecoveryTokenRequest';
import type { ResendVerificationCodeRequest } from '../models/ResendVerificationCodeRequest';
import type { SendEmailVerificationOTPRequest } from '../models/SendEmailVerificationOTPRequest';
import type { SignInRequest } from '../models/SignInRequest';
import type { SignInResponse } from '../models/SignInResponse';
import type { TwoFactorAuthSecretResponse } from '../models/TwoFactorAuthSecretResponse';
import type { UserResponse } from '../models/UserResponse';
import type { VerificationRequest } from '../models/VerificationRequest';
import type { VerificationResponse } from '../models/VerificationResponse';
import type { VerifyEmailOTPRequest } from '../models/VerifyEmailOTPRequest';
import type { VerifyTwoFactorAuthRequest } from '../models/VerifyTwoFactorAuthRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserAuthenticationService {
    /**
     * Verifies a user account.
     * Verifies a user account using a verification code.
     * @returns VerificationResponse 200 The response body containing a password recovery token if verification is successful.
     * @throws ApiError
     */
    public static verifyCarrierAccount({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the verification code.
         */
        requestBody: VerificationRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<VerificationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/account-verification',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Resends the verification code to the user.
     * Resends the verification code to a user's email address.
     * @returns OperationResponse 200 The response body indicating successful resend of verification code.
     * @throws ApiError
     */
    public static resendVerificationCode({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the user's email address.
         */
        requestBody: ResendVerificationCodeRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/resend-verification-code',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Sets a new user password and signs in the user.
     * Sets a new user password using a password recovery token.
     * @returns SignInResponse 200 The response body containing authentication tokens and user data.
     * @throws ApiError
     */
    public static createNewPassword({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the password recovery token and new password.
         */
        requestBody: PasswordCreationRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<SignInResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password-set',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Generates and sends a password recovery token via email.
     * Generates and sends a password recovery token to the user's email address.
     * @returns OperationResponse 200 The response body indicating successful token generation and email sent.
     * @throws ApiError
     */
    public static resendPasswordRecoveryToken({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the user's email address.
         */
        requestBody: ResendPasswordRecoveryTokenRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password-reset/send-token',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Validates the password recovery token.
     * Validates a password recovery token.
     * @returns OperationResponse 200 The response body indicating whether the token is valid.
     * @throws ApiError
     */
    public static checkToken({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the password recovery token.
         */
        requestBody: CheckPasswordRecoveryTokenRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password-reset/check-token',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Resets the user's password and signs in the user.
     * Resets the user's password using a password recovery token.
     * @returns SignInResponse 200 The response body containing authentication tokens and user data.
     * @throws ApiError
     */
    public static resetPassword({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the password recovery token and new password.
         */
        requestBody: PasswordResetRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<SignInResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/password-reset',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Signs in a user.
     * Authenticates a user with email and password.
     * @returns SignInResponse 200 The response body containing authentication tokens and user data.
     * @throws ApiError
     */
    public static signInUser({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing email and password.
         */
        requestBody: SignInRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<SignInResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/sign-in',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Send an email verification OTP to the user's new email.
     * Sends an email verification OTP to the user.
     * @returns OperationResponse Indicates that the email verification OTP was successfully sent.
     * @throws ApiError
     */
    public static sendEmailVerificationOtp({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The request body containing the new email address.
         */
        requestBody: SendEmailVerificationOTPRequest,
        /**
         * - The language code for localization. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/email-verify/otp',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Verify the email address using the OTP.
     * Verifies the email address using the OTP.
     * @returns OperationResponse Indicates that the email was successfully verified.
     * @throws ApiError
     */
    public static verifyEmailOtp({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The request body containing the new email address and the OTP.
         */
        requestBody: VerifyEmailOTPRequest,
        /**
         * - The language code for localization. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/email-verify',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Changes the user's password.
     * Changes the authenticated user's password.
     * @returns OperationResponse 200 The response body indicating successful password change.
     * @throws ApiError
     */
    public static changePassword({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * The request body containing the old password and new password.
         */
        requestBody: ChangePasswordRequest,
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/change-password',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Enable two-factor authentication for the user.
     * Enables two-factor authentication (2FA) for the user.
     * @returns OperationResponse Indicates that the two-factor authentication has been successfully enabled.
     * @throws ApiError
     */
    public static enableTwoFactorAuth({
        xLangCode = 'en',
    }: {
        /**
         * - The language code for localization. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/auth/otp/enable',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Generate a new two-factor authentication secret.
     * Generates a new two-factor authentication (2FA) secret for the user.
     * @returns TwoFactorAuthSecretResponse Indicates that the OTP was successfully generated.
     * @throws ApiError
     */
    public static generateTwoFactorAuthSecret({
        xLangCode = 'en',
    }: {
        /**
         * - The language code for localization. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<TwoFactorAuthSecretResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/otp/generate',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Verify the two-factor authentication code and sign in.
     * Verifies the two-factor authentication (2FA) code and completes the sign-in process.
     * @returns SignInResponse Indicates that the OTP verification was successful and user is signed in.
     * @throws ApiError
     */
    public static verifyTwoFactorAuthCode({
        requestBody,
        xLangCode = 'en',
    }: {
        /**
         * - The request body containing the user ID and OTP code for verification.
         */
        requestBody: VerifyTwoFactorAuthRequest,
        /**
         * - The language code for localization. Defaults to the system's default locale.
         */
        xLangCode?: string,
    }): CancelablePromise<SignInResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/otp/verify',
            headers: {
                'x-lang-code': xLangCode,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Signs out the user.
     * Signs out the authenticated user.
     * @returns OperationResponse 200 The response body indicating successful sign out.
     * @throws ApiError
     */
    public static signOutUser({
        xLangCode = 'en',
    }: {
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<OperationResponse> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/sign-out',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
    /**
     * Gets the authenticated user's profile.
     * Retrieves the authenticated user's profile information.
     * @returns UserResponse 200 The response body containing the user's profile data.
     * @throws ApiError
     */
    public static getProfile({
        xLangCode = 'en',
    }: {
        /**
         * The language code.
         */
        xLangCode?: string,
    }): CancelablePromise<UserResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/auth/profile',
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
