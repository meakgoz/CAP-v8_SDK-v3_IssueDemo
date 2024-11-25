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
import type { Genres_TextsApi } from './Genres_TextsApi';

/**
 * This class represents the entity "Genres_texts" of service "AdminService".
 */
export class Genres_Texts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Genres_TextsType<T>
{
  /**
   * Technical entity name for Genres_Texts.
   */
  static override _entityName = 'Genres_texts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/admin';
  /**
   * All key fields of the Genres_Texts entity.
   */
  static _keys = ['locale', 'ID'];
  /**
   * Locale.
   * Maximum length: 14.
   */
  declare locale: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Descr.
   * Maximum length: 1000.
   * @nullable
   */
  declare descr?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;

  constructor(_entityApi: Genres_TextsApi<T>) {
    super(_entityApi);
  }
}

export interface Genres_TextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locale: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Int32'>;
}
