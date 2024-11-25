/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Authors } from './Authors';
import { AuthorsRequestBuilder } from './AuthorsRequestBuilder';
import { BooksApi } from './BooksApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class AuthorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Authors<DeSerializersT>, DeSerializersT>
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
  ): AuthorsApi<DeSerializersT> {
    return new AuthorsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link books} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BOOKS: OneToManyLink<
      Authors<DeSerializersT>,
      DeSerializersT,
      BooksApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(linkedApis: [BooksApi<DeSerializersT>]): this {
    this.navigationPropertyFields = {
      BOOKS: new OneToManyLink('books', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = Authors;

  requestBuilder(): AuthorsRequestBuilder<DeSerializersT> {
    return new AuthorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Authors<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Authors<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Authors<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Authors, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Authors, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    CREATED_AT: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    CREATED_BY: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MODIFIED_AT: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    MODIFIED_BY: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE_OF_BIRTH: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    DATE_OF_DEATH: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.Date',
      true,
      true
    >;
    PLACE_OF_BIRTH: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PLACE_OF_DEATH: OrderableEdmTypeField<
      Authors<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link books} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BOOKS: OneToManyLink<
      Authors<DeSerializersT>,
      DeSerializersT,
      BooksApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Authors<DeSerializers>>;
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
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link dateOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'dateOfBirth',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link dateOfDeath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE_OF_DEATH: fieldBuilder.buildEdmTypeField(
          'dateOfDeath',
          'Edm.Date',
          true
        ),
        /**
         * Static representation of the {@link placeOfBirth} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLACE_OF_BIRTH: fieldBuilder.buildEdmTypeField(
          'placeOfBirth',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link placeOfDeath} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PLACE_OF_DEATH: fieldBuilder.buildEdmTypeField(
          'placeOfDeath',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Authors)
      };
    }

    return this._schema;
  }
}
