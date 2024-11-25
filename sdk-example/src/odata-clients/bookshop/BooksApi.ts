/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Books } from './Books';
import { BooksRequestBuilder } from './BooksRequestBuilder';
import { AuthorsApi } from './AuthorsApi';
import { GenresApi } from './GenresApi';
import { CurrenciesApi } from './CurrenciesApi';
import { Books_TextsApi } from './Books_TextsApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EdmTypeField,
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class BooksApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Books<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): BooksApi<DeSerializersT> {
    return new BooksApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link author} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AUTHOR: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      AuthorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link genre} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENRE: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      GenresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Books<DeSerializersT>,
      DeSerializersT,
      Books_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      Books_TextsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      AuthorsApi<DeSerializersT>,
      GenresApi<DeSerializersT>,
      CurrenciesApi<DeSerializersT>,
      Books_TextsApi<DeSerializersT>,
      Books_TextsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      AUTHOR: new OneToOneLink('author', this, linkedApis[0]),
      GENRE: new OneToOneLink('genre', this, linkedApis[1]),
      CURRENCY: new OneToOneLink('currency', this, linkedApis[2]),
      TEXTS: new OneToManyLink('texts', this, linkedApis[3]),
      LOCALIZED: new OneToOneLink('localized', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = Books;

  requestBuilder(): BooksRequestBuilder<DeSerializersT> {
    return new BooksRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Books<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Books<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Books<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Books, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Books, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_AT: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCR: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AUTHOR_ID: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    GENRE_ID: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    STOCK: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    PRICE: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      true,
      true
    >;
    CURRENCY_CODE: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IMAGE: EdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.Any',
      true,
      true
    >;
    TEST_FIELD: OrderableEdmTypeField<
      Books<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link author} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AUTHOR: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      AuthorsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link genre} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GENRE: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      GenresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link currency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CURRENCY: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Books<DeSerializersT>,
      DeSerializersT,
      Books_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Books<DeSerializersT>,
      DeSerializersT,
      Books_TextsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Books<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link createdAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_AT: fieldBuilder.buildEdmTypeField(
          'createdAt',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link createdBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CREATED_BY: fieldBuilder.buildEdmTypeField(
          'createdBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link modifiedAt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_AT: fieldBuilder.buildEdmTypeField(
          'modifiedAt',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link modifiedBy} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFIED_BY: fieldBuilder.buildEdmTypeField(
          'modifiedBy',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        /**
         * Static representation of the {@link descr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCR: fieldBuilder.buildEdmTypeField('descr', 'Edm.String', true),
        /**
         * Static representation of the {@link authorId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTHOR_ID: fieldBuilder.buildEdmTypeField(
          'author_ID',
          'Edm.Int32',
          true
        ),
        /**
         * Static representation of the {@link genreId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GENRE_ID: fieldBuilder.buildEdmTypeField('genre_ID', 'Edm.Int32', true),
        /**
         * Static representation of the {@link stock} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOCK: fieldBuilder.buildEdmTypeField('stock', 'Edm.Int32', true),
        /**
         * Static representation of the {@link price} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRICE: fieldBuilder.buildEdmTypeField('price', 'Edm.Decimal', true),
        /**
         * Static representation of the {@link currencyCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY_CODE: fieldBuilder.buildEdmTypeField(
          'currency_code',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link image} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IMAGE: fieldBuilder.buildEdmTypeField('image', 'Edm.Any', true),
        /**
         * Static representation of the {@link testField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEST_FIELD: fieldBuilder.buildEdmTypeField(
          'testField',
          'Edm.DateTimeOffset',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Books)
      };
    }

    return this._schema;
  }
}
