/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Genres } from './Genres';
import { GenresRequestBuilder } from './GenresRequestBuilder';
import { Genres_TextsApi } from './Genres_TextsApi';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class GenresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Genres<DeSerializersT>, DeSerializersT>
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
  ): GenresApi<DeSerializersT> {
    return new GenresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link parent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT: OneToOneLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      GenresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link children} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILDREN: OneToManyLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      GenresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      Genres_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      Genres_TextsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      GenresApi<DeSerializersT>,
      GenresApi<DeSerializersT>,
      Genres_TextsApi<DeSerializersT>,
      Genres_TextsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      PARENT: new OneToOneLink('parent', this, linkedApis[0]),
      CHILDREN: new OneToManyLink('children', this, linkedApis[1]),
      TEXTS: new OneToManyLink('texts', this, linkedApis[2]),
      LOCALIZED: new OneToOneLink('localized', this, linkedApis[3])
    };
    return this;
  }

  entityConstructor = Genres;

  requestBuilder(): GenresRequestBuilder<DeSerializersT> {
    return new GenresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<Genres<DeSerializersT>, DeSerializersT> {
    return entityBuilder<Genres<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Genres<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Genres, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Genres, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      Genres<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCR: OrderableEdmTypeField<
      Genres<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ID: OrderableEdmTypeField<
      Genres<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PARENT_ID: OrderableEdmTypeField<
      Genres<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link parent} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PARENT: OneToOneLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      GenresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link children} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CHILDREN: OneToManyLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      GenresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link texts} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TEXTS: OneToManyLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      Genres_TextsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link localized} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LOCALIZED: OneToOneLink<
      Genres<DeSerializersT>,
      DeSerializersT,
      Genres_TextsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<Genres<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link parentId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARENT_ID: fieldBuilder.buildEdmTypeField(
          'parent_ID',
          'Edm.Int32',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Genres)
      };
    }

    return this._schema;
  }
}
