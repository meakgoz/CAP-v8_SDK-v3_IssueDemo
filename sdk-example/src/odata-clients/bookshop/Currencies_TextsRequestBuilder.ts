/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeSerializers,
  DefaultDeSerializers,
  DeleteRequestBuilder,
  DeserializedType,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  RequestBuilder,
  UpdateRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { Currencies_Texts } from './Currencies_Texts';

/**
 * Request builder class for operations supported on the {@link Currencies_Texts} entity.
 */
export class Currencies_TextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Currencies_Texts<T>, T> {
  /**
   * Returns a request builder for querying all `Currencies_Texts` entities.
   * @returns A request builder for creating requests to retrieve all `Currencies_Texts` entities.
   */
  getAll(): GetAllRequestBuilder<Currencies_Texts<T>, T> {
    return new GetAllRequestBuilder<Currencies_Texts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Currencies_Texts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Currencies_Texts`.
   */
  create(
    entity: Currencies_Texts<T>
  ): CreateRequestBuilder<Currencies_Texts<T>, T> {
    return new CreateRequestBuilder<Currencies_Texts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for retrieving one `Currencies_Texts` entity based on its keys.
   * @param locale Key property. See {@link Currencies_Texts.locale}.
   * @param code Key property. See {@link Currencies_Texts.code}.
   * @returns A request builder for creating requests to retrieve one `Currencies_Texts` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Currencies_Texts<T>, T> {
    return new GetByKeyRequestBuilder<Currencies_Texts<T>, T>(this.entityApi, {
      locale: locale,
      code: code
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Currencies_Texts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Currencies_Texts`.
   */
  update(
    entity: Currencies_Texts<T>
  ): UpdateRequestBuilder<Currencies_Texts<T>, T> {
    return new UpdateRequestBuilder<Currencies_Texts<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Currencies_Texts`.
   * @param locale Key property. See {@link Currencies_Texts.locale}.
   * @param code Key property. See {@link Currencies_Texts.code}.
   * @returns A request builder for creating requests that delete an entity of type `Currencies_Texts`.
   */
  delete(
    locale: string,
    code: string
  ): DeleteRequestBuilder<Currencies_Texts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Currencies_Texts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Currencies_Texts` by taking the entity as a parameter.
   */
  delete(
    entity: Currencies_Texts<T>
  ): DeleteRequestBuilder<Currencies_Texts<T>, T>;
  delete(
    localeOrEntity: any,
    code?: string
  ): DeleteRequestBuilder<Currencies_Texts<T>, T> {
    return new DeleteRequestBuilder<Currencies_Texts<T>, T>(
      this.entityApi,
      localeOrEntity instanceof Currencies_Texts
        ? localeOrEntity
        : {
            locale: localeOrEntity!,
            code: code!
          }
    );
  }
}
