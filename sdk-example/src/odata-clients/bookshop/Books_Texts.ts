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
import type { Books_TextsApi } from './Books_TextsApi';

/**
 * This class represents the entity "Books_texts" of service "AdminService".
 */
export class Books_Texts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements Books_TextsType<T>
{
  /**
   * Technical entity name for Books_Texts.
   */
  static override _entityName = 'Books_texts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/admin';
  /**
   * All key fields of the Books_Texts entity.
   */
  static _keys = ['locale', 'ID'];
  /**
   * Locale.
   * Maximum length: 14.
   */
  declare locale: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Title.
   * Maximum length: 111.
   * @nullable
   */
  declare title?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Descr.
   * Maximum length: 1111.
   * @nullable
   */
  declare descr?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: Books_TextsApi<T>) {
    super(_entityApi);
  }
}

export interface Books_TextsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  locale: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.Int32'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
}
