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
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  Books,
  Authors,
  Genres,
  Currencies,
  Books_Texts,
  Genres_Texts,
  Currencies_Texts
} from './index';

/**
 * Batch builder for operations supported on the Bookshop.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadBookshopRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadBookshopRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadBookshopRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadBookshopRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadBookshopRequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultBookshopPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Bookshop.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteBookshopRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteBookshopRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteBookshopRequestBuilder<DeSerializersT>
    | Array<WriteBookshopRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteBookshopRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultBookshopPath = '/admin';
export type ReadBookshopRequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Authors<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Genres<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Books_Texts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Genres_Texts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Currencies_Texts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Authors<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Genres<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Books_Texts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Genres_Texts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Currencies_Texts<DeSerializersT>, DeSerializersT>;
export type WriteBookshopRequestBuilder<DeSerializersT extends DeSerializers> =
  | CreateRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Books<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Authors<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Authors<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Authors<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Genres<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Genres<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Genres<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Books_Texts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Books_Texts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Books_Texts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Genres_Texts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Genres_Texts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Genres_Texts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Currencies_Texts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Currencies_Texts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Currencies_Texts<DeSerializersT>, DeSerializersT>;
