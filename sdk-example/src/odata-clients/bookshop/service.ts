/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BooksApi } from './BooksApi';
import { AuthorsApi } from './AuthorsApi';
import { GenresApi } from './GenresApi';
import { CurrenciesApi } from './CurrenciesApi';
import { Books_TextsApi } from './Books_TextsApi';
import { Genres_TextsApi } from './Genres_TextsApi';
import { Currencies_TextsApi } from './Currencies_TextsApi';
import { BigNumber } from 'bignumber.js';
import { Moment, Duration } from 'moment';
import {
  defaultDeSerializers,
  DeSerializers,
  DefaultDeSerializers,
  mergeDefaultDeSerializersWith,
  Time
} from '@sap-cloud-sdk/odata-v4';
import { batch, changeset } from './BatchRequest';

export function bookshop<
  BinaryT = string,
  BooleanT = boolean,
  ByteT = number,
  DecimalT = BigNumber,
  DoubleT = number,
  FloatT = number,
  Int16T = number,
  Int32T = number,
  Int64T = BigNumber,
  GuidT = string,
  SByteT = number,
  SingleT = number,
  StringT = string,
  AnyT = any,
  DateTimeOffsetT = Moment,
  DateT = Moment,
  DurationT = Duration,
  TimeOfDayT = Time,
  EnumT = any
>(
  deSerializers: Partial<
    DeSerializers<
      BinaryT,
      BooleanT,
      ByteT,
      DecimalT,
      DoubleT,
      FloatT,
      Int16T,
      Int32T,
      Int64T,
      GuidT,
      SByteT,
      SingleT,
      StringT,
      AnyT,
      DateTimeOffsetT,
      DateT,
      DurationT,
      TimeOfDayT,
      EnumT
    >
  > = defaultDeSerializers as any
): Bookshop<
  DeSerializers<
    BinaryT,
    BooleanT,
    ByteT,
    DecimalT,
    DoubleT,
    FloatT,
    Int16T,
    Int32T,
    Int64T,
    GuidT,
    SByteT,
    SingleT,
    StringT,
    AnyT,
    DateTimeOffsetT,
    DateT,
    DurationT,
    TimeOfDayT,
    EnumT
  >
> {
  return new Bookshop(mergeDefaultDeSerializersWith(deSerializers));
}
class Bookshop<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
  private apis: Record<string, any> = {};
  private deSerializers: DeSerializersT;

  constructor(deSerializers: DeSerializersT) {
    this.deSerializers = deSerializers;
  }

  private initApi(key: string, entityApi: any): any {
    if (!this.apis[key]) {
      this.apis[key] = entityApi._privateFactory(this.deSerializers);
    }
    return this.apis[key];
  }

  get booksApi(): BooksApi<DeSerializersT> {
    const api = this.initApi('booksApi', BooksApi);
    const linkedApis = [
      this.initApi('authorsApi', AuthorsApi),
      this.initApi('genresApi', GenresApi),
      this.initApi('currenciesApi', CurrenciesApi),
      this.initApi('books_TextsApi', Books_TextsApi),
      this.initApi('books_TextsApi', Books_TextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get authorsApi(): AuthorsApi<DeSerializersT> {
    const api = this.initApi('authorsApi', AuthorsApi);
    const linkedApis = [this.initApi('booksApi', BooksApi)];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get genresApi(): GenresApi<DeSerializersT> {
    const api = this.initApi('genresApi', GenresApi);
    const linkedApis = [
      this.initApi('genresApi', GenresApi),
      this.initApi('genresApi', GenresApi),
      this.initApi('genres_TextsApi', Genres_TextsApi),
      this.initApi('genres_TextsApi', Genres_TextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get currenciesApi(): CurrenciesApi<DeSerializersT> {
    const api = this.initApi('currenciesApi', CurrenciesApi);
    const linkedApis = [
      this.initApi('currencies_TextsApi', Currencies_TextsApi),
      this.initApi('currencies_TextsApi', Currencies_TextsApi)
    ];
    api._addNavigationProperties(linkedApis);
    return api;
  }

  get books_TextsApi(): Books_TextsApi<DeSerializersT> {
    return this.initApi('books_TextsApi', Books_TextsApi);
  }

  get genres_TextsApi(): Genres_TextsApi<DeSerializersT> {
    return this.initApi('genres_TextsApi', Genres_TextsApi);
  }

  get currencies_TextsApi(): Currencies_TextsApi<DeSerializersT> {
    return this.initApi('currencies_TextsApi', Currencies_TextsApi);
  }

  get batch(): typeof batch {
    return batch;
  }

  get changeset(): typeof changeset {
    return changeset;
  }
}
