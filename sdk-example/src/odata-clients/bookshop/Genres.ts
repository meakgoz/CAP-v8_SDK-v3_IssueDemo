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
import type { GenresApi } from './GenresApi';
import { Genres_Texts, Genres_TextsType } from './Genres_Texts';

/**
 * This class represents the entity "Genres" of service "AdminService".
 */
export class Genres<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements GenresType<T>
{
  /**
   * Technical entity name for Genres.
   */
  static override _entityName = 'Genres';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/admin';
  /**
   * All key fields of the Genres entity.
   */
  static _keys = ['ID'];
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
  /**
   * Parent Id.
   * @nullable
   */
  declare parentId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * One-to-one navigation property to the {@link Genres} entity.
   */
  declare parent?: Genres<T> | null;
  /**
   * One-to-many navigation property to the {@link Genres} entity.
   */
  declare children: Genres<T>[];
  /**
   * One-to-many navigation property to the {@link Genres_Texts} entity.
   */
  declare texts: Genres_Texts<T>[];
  /**
   * One-to-one navigation property to the {@link Genres_Texts} entity.
   */
  declare localized?: Genres_Texts<T> | null;

  constructor(_entityApi: GenresApi<T>) {
    super(_entityApi);
  }
}

export interface GenresType<T extends DeSerializers = DefaultDeSerializers> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Int32'>;
  parentId?: DeserializedType<T, 'Edm.Int32'> | null;
  parent?: GenresType<T> | null;
  children: GenresType<T>[];
  texts: Genres_TextsType<T>[];
  localized?: Genres_TextsType<T> | null;
}
