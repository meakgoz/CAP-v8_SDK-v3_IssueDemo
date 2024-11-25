/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { ReviewsApi } from './ReviewsApi';

/**
 * This class represents the entity "Reviews" of service "ReviewsService".
 */
export class Reviews<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ReviewsType<T>
{
  /**
   * Technical entity name for Reviews.
   */
  static override _entityName = 'Reviews';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/reviews';
  /**
   * All key fields of the Reviews entity.
   */
  static _keys = ['ID'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Guid'>;
  /**
   * Subject.
   * Maximum length: 111.
   * @nullable
   */
  declare subject?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Reviewer.
   * Maximum length: 255.
   * @nullable
   */
  declare reviewer?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rating.
   * @nullable
   */
  declare rating?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Title.
   * Maximum length: 111.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Text.
   * Maximum length: 1111.
   * @nullable
   */
  declare text?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date.
   * @nullable
   */
  declare date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Liked.
   * @nullable
   */
  declare liked?: DeserializedType<T, 'Edm.Int32'> | null;

  constructor(_entityApi: ReviewsApi<T>) {
    super(_entityApi);
  }
}

export interface ReviewsType<T extends DeSerializers = DefaultDeSerializers> {
  id: DeserializedType<T, 'Edm.Guid'>;
  subject?: DeserializedType<T, 'Edm.String'> | null;
  reviewer?: DeserializedType<T, 'Edm.String'> | null;
  rating?: DeserializedType<T, 'Edm.Int32'> | null;
  title?: DeserializedType<T, 'Edm.String'> | null;
  text?: DeserializedType<T, 'Edm.String'> | null;
  date?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  liked?: DeserializedType<T, 'Edm.Int32'> | null;
}
