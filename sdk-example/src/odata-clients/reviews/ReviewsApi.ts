/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Reviews } from './Reviews';
import { ReviewsRequestBuilder } from './ReviewsRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class ReviewsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Reviews<DeSerializersT>, DeSerializersT>
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
  ): ReviewsApi<DeSerializersT> {
    return new ReviewsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Reviews;

  requestBuilder(): ReviewsRequestBuilder<DeSerializersT> {
    return new ReviewsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Reviews<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Reviews<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Reviews<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Reviews, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Reviews, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    SUBJECT: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REVIEWER: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    RATING: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TEXT: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DATE: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      true,
      true
    >;
    LIKED: OrderableEdmTypeField<
      Reviews<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Reviews<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Guid', false),
        /**
         * Static representation of the {@link subject} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SUBJECT: fieldBuilder.buildEdmTypeField('subject', 'Edm.String', true),
        /**
         * Static representation of the {@link reviewer} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEWER: fieldBuilder.buildEdmTypeField(
          'reviewer',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link rating} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RATING: fieldBuilder.buildEdmTypeField('rating', 'Edm.Int32', true),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('title', 'Edm.String', true),
        /**
         * Static representation of the {@link text} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEXT: fieldBuilder.buildEdmTypeField('text', 'Edm.String', true),
        /**
         * Static representation of the {@link date} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATE: fieldBuilder.buildEdmTypeField(
          'date',
          'Edm.DateTimeOffset',
          true
        ),
        /**
         * Static representation of the {@link liked} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIKED: fieldBuilder.buildEdmTypeField('liked', 'Edm.Int32', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Reviews)
      };
    }

    return this._schema;
  }
}
