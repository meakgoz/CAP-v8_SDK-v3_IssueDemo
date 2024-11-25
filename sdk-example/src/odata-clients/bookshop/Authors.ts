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
import type { AuthorsApi } from './AuthorsApi';
import { Books, BooksType } from './Books';

/**
 * This class represents the entity "Authors" of service "AdminService".
 */
export class Authors<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AuthorsType<T>
{
  /**
   * Technical entity name for Authors.
   */
  static override _entityName = 'Authors';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/admin';
  /**
   * All key fields of the Authors entity.
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
   * Name.
   * Maximum length: 111.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Date Of Birth.
   * @nullable
   */
  declare dateOfBirth?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Date Of Death.
   * @nullable
   */
  declare dateOfDeath?: DeserializedType<T, 'Edm.Date'> | null;
  /**
   * Place Of Birth.
   * @nullable
   */
  declare placeOfBirth?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Place Of Death.
   * @nullable
   */
  declare placeOfDeath?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link Books} entity.
   */
  declare books: Books<T>[];

  constructor(_entityApi: AuthorsApi<T>) {
    super(_entityApi);
  }
}

export interface AuthorsType<T extends DeSerializers = DefaultDeSerializers> {
  createdAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  modifiedAt?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  id: DeserializedType<T, 'Edm.Int32'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  dateOfBirth?: DeserializedType<T, 'Edm.Date'> | null;
  dateOfDeath?: DeserializedType<T, 'Edm.Date'> | null;
  placeOfBirth?: DeserializedType<T, 'Edm.String'> | null;
  placeOfDeath?: DeserializedType<T, 'Edm.String'> | null;
  books: BooksType<T>[];
}
