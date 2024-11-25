/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  transformReturnValueForUndefined,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { reviews } from './service';

/**
 * Type of the parameters to be passed to {@link like}.
 */
export interface LikeParameters<DeSerializersT extends DeSerializers> {
  /**
   * Review.
   */
  review?: string | null;
}

/**
 * Like.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function like<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: LikeParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  LikeParameters<DeSerializersT>,
  undefined
> {
  const params = {
    review: new OperationParameter('review', 'Edm.Guid', parameters.review)
  };

  return new OperationRequestBuilder(
    '/reviews',
    'like',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link unlike}.
 */
export interface UnlikeParameters<DeSerializersT extends DeSerializers> {
  /**
   * Review.
   */
  review?: string | null;
}

/**
 * Unlike.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function unlike<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UnlikeParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  UnlikeParameters<DeSerializersT>,
  undefined
> {
  const params = {
    review: new OperationParameter('review', 'Edm.Guid', parameters.review)
  };

  return new OperationRequestBuilder(
    '/reviews',
    'unlike',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

export const operations = {
  like,
  unlike
};
