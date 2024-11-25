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
import type { CurrenciesApi } from './CurrenciesApi';
import { Currencies_Texts, Currencies_TextsType } from './Currencies_Texts';

/**
 * This class represents the entity "Currencies" of service "AdminService".
 */
export class Currencies<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements CurrenciesType<T>
{
  /**
   * Technical entity name for Currencies.
   */
  static override _entityName = 'Currencies';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/admin';
  /**
   * All key fields of the Currencies entity.
   */
  static _keys = ['code'];
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
   * Code.
   * Maximum length: 3.
   */
  declare code: DeserializedType<T, 'Edm.String'>;
  /**
   * Symbol.
   * Maximum length: 5.
   * @nullable
   */
  declare symbol?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Minor Unit.
   * @nullable
   */
  declare minorUnit?: DeserializedType<T, 'Edm.Int16'> | null;
  /**
   * One-to-many navigation property to the {@link Currencies_Texts} entity.
   */
  declare texts: Currencies_Texts<T>[];
  /**
   * One-to-one navigation property to the {@link Currencies_Texts} entity.
   */
  declare localized?: Currencies_Texts<T> | null;

  constructor(_entityApi: CurrenciesApi<T>) {
    super(_entityApi);
  }
}

export interface CurrenciesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name?: DeserializedType<T, 'Edm.String'> | null;
  descr?: DeserializedType<T, 'Edm.String'> | null;
  code: DeserializedType<T, 'Edm.String'>;
  symbol?: DeserializedType<T, 'Edm.String'> | null;
  minorUnit?: DeserializedType<T, 'Edm.Int16'> | null;
  texts: Currencies_TextsType<T>[];
  localized?: Currencies_TextsType<T> | null;
}
