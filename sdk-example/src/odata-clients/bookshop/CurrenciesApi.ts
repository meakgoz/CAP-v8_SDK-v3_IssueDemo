/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Currencies } from './Currencies';
import { CurrenciesRequestBuilder } from './CurrenciesRequestBuilder';
import { Currencies_TextsApi } from './Currencies_TextsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CurrenciesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Currencies<DeSerializersT>, DeSerializersT>
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
  ): CurrenciesApi<DeSerializersT> {
    return new CurrenciesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      Currencies_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      Currencies_TextsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      Currencies_TextsApi<DeSerializersT>,
      Currencies_TextsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      TEXTS: new OneToManyLink('texts', this, linkedApis[0]),
      LOCALIZED: new OneToOneLink('localized', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = Currencies;

  requestBuilder(): CurrenciesRequestBuilder<DeSerializersT> {
    return new CurrenciesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Currencies<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Currencies<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Currencies<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Currencies, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Currencies, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCR: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CODE: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SYMBOL: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINOR_UNIT: OrderableEdmTypeField<
      Currencies<DeSerializers>,
      DeSerializersT,
      'Edm.Int16',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      Currencies_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Currencies<DeSerializersT>,
      DeSerializersT,
      Currencies_TextsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Currencies<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('name', 'Edm.String', true),
        /**
         * Static representation of the {@link descr} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCR: fieldBuilder.buildEdmTypeField('descr', 'Edm.String', true),
        /**
         * Static representation of the {@link code} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CODE: fieldBuilder.buildEdmTypeField('code', 'Edm.String', false),
        /**
         * Static representation of the {@link symbol} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYMBOL: fieldBuilder.buildEdmTypeField('symbol', 'Edm.String', true),
        /**
         * Static representation of the {@link minorUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINOR_UNIT: fieldBuilder.buildEdmTypeField(
          'minorUnit',
          'Edm.Int16',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Currencies)
      };
    }

    return this._schema;
  }
}
