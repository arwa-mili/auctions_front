/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BookingChannel } from '../models/BookingChannel';
import type { TripListResponse } from '../models/TripListResponse';
import type { TripResponse } from '../models/TripResponse';
import type { TripStatus } from '../models/TripStatus';
import type { TripType } from '../models/TripType';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TripsManagementService {
    /**
     * Retrieves all trips.
     * Retrieves all trips.
     * @returns TripListResponse 200 The list of trips.
     * @throws ApiError
     */
    public static getAllTrips({
        carrierId,
        xLangCode = 'en',
        pageNumber = 1,
        pageSize = 10,
        tripPurposeId,
        tripType,
        vehicleId,
        driverId,
        pickupStartDate,
        pickupEndDate,
        dropOffStartDate,
        dropOffEndDate,
        canceledIsExcluded,
        openTripsOnly,
        tripStatus,
        bookingChannel,
        transferTypeId,
        search,
    }: {
        /**
         * The ID of the carrier that the booking belongs to.
         */
        carrierId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
        /**
         * The page number of the query, defaults to 1.
         */
        pageNumber?: number,
        /**
         * The page size of the query, defaults to 10.
         */
        pageSize?: number,
        /**
         * The ID of the trip purpose of the booking.
         */
        tripPurposeId?: string,
        /**
         * The trip type.
         */
        tripType?: TripType,
        /**
         * The ID of the vehicle that the trip belongs to.
         */
        vehicleId?: string,
        /**
         * The ID of the driver that the trip belongs to.
         */
        driverId?: string,
        /**
         * The start date of when a pickup is available.
         */
        pickupStartDate?: string,
        /**
         * The end date of when a pickup is available.
         */
        pickupEndDate?: string,
        /**
         * The start date of when a drop off is available.
         */
        dropOffStartDate?: string,
        /**
         * The end date of when a drop off is available.
         */
        dropOffEndDate?: string,
        /**
         * Indicates whether canceled trips should be excluded from the query results.
         */
        canceledIsExcluded?: boolean,
        /**
         * A boolean flag indicating if only trips with a booking close status of Open should be included.
         * Defaults to false.
         */
        openTripsOnly?: boolean,
        /**
         * The trip status.
         */
        tripStatus?: TripStatus,
        /**
         * The booking channel to filter by.
         */
        bookingChannel?: BookingChannel,
        /**
         * The unique identifier of the transfer type to filter by.
         */
        transferTypeId?: string,
        /**
         * The search query for a trip number.
         */
        search?: string,
    }): CancelablePromise<TripListResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trips',
            headers: {
                'x-lang-code': xLangCode,
            },
            query: {
                'pageNumber': pageNumber,
                'pageSize': pageSize,
                'carrierId': carrierId,
                'tripPurposeId': tripPurposeId,
                'tripType': tripType,
                'vehicleId': vehicleId,
                'driverId': driverId,
                'pickupStartDate': pickupStartDate,
                'pickupEndDate': pickupEndDate,
                'dropOffStartDate': dropOffStartDate,
                'dropOffEndDate': dropOffEndDate,
                'canceledIsExcluded': canceledIsExcluded,
                'openTripsOnly': openTripsOnly,
                'tripStatus': tripStatus,
                'bookingChannel': bookingChannel,
                'transferTypeId': transferTypeId,
                'search': search,
            },
        });
    }
    /**
     * Retrieves a trip by ID.
     * Retrieves a trip by ID.
     * @returns TripResponse 200 The trip.
     * @throws ApiError
     */
    public static getTripById({
        tripId,
        xLangCode = 'en',
    }: {
        /**
         * The ID of the trip to be retrieved.
         */
        tripId: string,
        /**
         * The language code (optional). Defaults to `DEFAULT_LOCALE`.
         */
        xLangCode?: string,
    }): CancelablePromise<TripResponse> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/trips/{tripId}',
            path: {
                'tripId': tripId,
            },
            headers: {
                'x-lang-code': xLangCode,
            },
        });
    }
}
