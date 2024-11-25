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
import type { BooksApi } from './BooksApi';
import { Authors, AuthorsType } from './Authors';
import { Genres, GenresType } from './Genres';
import { Currencies, CurrenciesType } from './Currencies';
import { Books_Texts, Books_TextsType } from './Books_Texts';

/**
 * This class represents the entity "Books" of service "AdminService".
 */
export class Books<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BooksType<T>
{
  /**
   * Technical entity name for Books.
   */
  static override _entityName = 'Books';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/admin';
  /**
   * All key fields of the Books entity.
   */
  static _keys = ['ID'];
  /**
   * Created At.
   * @nullable
   */
  declare createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modified At.
   * @nullable
   */
  declare modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * Modified By.
   * Maximum length: 255.
   * @nullable
   */
  declare modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
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
  /**
   * Author Id.
   * @nullable
   */
  declare authorId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Genre Id.
   * @nullable
   */
  declare genreId?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Stock.
   * @nullable
   */
  declare stock?: DeserializedType<T, 'Edm.Int32'> | null;
  /**
   * Price.
   * @nullable
   */
  declare price?: DeserializedType<T, 'Edm.Decimal'> | null;
  /**
   * Currency Code.
   * Maximum length: 3.
   * @nullable
   */
  declare currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Image.
   * @nullable
   */
  declare image?: DeserializedType<T, 'Edm.Any'> | null;
  /**
   * Test Field.
   * @nullable
   */
  declare testField?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link Authors} entity.
   */
  declare author?: Authors<T> | null;
  /**
   * One-to-one navigation property to the {@link Genres} entity.
   */
  declare genre?: Genres<T> | null;
  /**
   * One-to-one navigation property to the {@link Currencies} entity.
   */
  declare currency?: Currencies<T> | null;
  /**
   * One-to-many navigation property to the {@link Books_Texts} entity.
   */
  declare texts: Books_Texts<T>[];
  /**
   * One-to-one navigation property to the {@link Books_Texts} entity.
   */
  declare localized?: Books_Texts<T> | null;

  constructor(_entityApi: BooksApi<T>) {
    super(_entityApi);
  }
}

export interface BooksType<T extends DeSerializers = DefaultDeSerializers> {
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Int32'>;
  title?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  authorId?: DeserializedType<T, 'Edm.Int32'> | null;
  genreId?: DeserializedType<T, 'Edm.Int32'> | null;
  stock?: DeserializedType<T, 'Edm.Int32'> | null;
  price?: DeserializedType<T, 'Edm.Decimal'> | null;
  currencyCode?: DeserializedType<T, 'Edm.String'> | null;
  image?: DeserializedType<T, 'Edm.Any'> | null;
  testField?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  author?: AuthorsType<T> | null;
  genre?: GenresType<T> | null;
  currency?: CurrenciesType<T> | null;
  texts: Books_TextsType<T>[];
  localized?: Books_TextsType<T> | null;
}
