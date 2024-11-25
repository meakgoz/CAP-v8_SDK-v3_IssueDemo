/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Books_Texts } from './Books_Texts';
import { Books_TextsRequestBuilder } from './Books_TextsRequestBuilder';
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
export class Books_TextsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Books_Texts<DeSerializersT>, DeSerializersT>
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
  ): Books_TextsApi<DeSerializersT> {
    return new Books_TextsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Books_Texts;

  requestBuilder(): Books_TextsRequestBuilder<DeSerializersT> {
    return new Books_TextsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Books_Texts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Books_Texts<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Books_Texts<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Books_Texts, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Books_Texts, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    LOCALE: OrderableEdmTypeField<
      Books_Texts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      Books_Texts<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    TITLE: OrderableEdmTypeField<
      Books_Texts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCR: OrderableEdmTypeField<
      Books_Texts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Books_Texts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link locale} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LOCALE: fieldBuilder.buildEdmTypeField('locale', 'Edm.String', false),
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Books_Texts)
      };
    }

    return this._schema;
  }
}
