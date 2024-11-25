/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import { Reviews, LikeParameters, UnlikeParameters } from './index';

/**
 * Batch builder for operations supported on the Reviews.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadReviewsRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadReviewsRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadReviewsRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadReviewsRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadReviewsRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultReviewsPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Reviews.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteReviewsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteReviewsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteReviewsRequestBuilder<DeSerializersT>
    | Array<WriteReviewsRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteReviewsRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultReviewsPath = '/reviews';
export type ReadReviewsRequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<Reviews<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Reviews<DeSerializersT>, DeSerializersT>;
export type WriteReviewsRequestBuilder<DeSerializersT extends DeSerializers> =
  | CreateRequestBuilder<Reviews<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Reviews<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Reviews<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      LikeParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UnlikeParameters<DeSerializersT>,
      undefined
    >;
