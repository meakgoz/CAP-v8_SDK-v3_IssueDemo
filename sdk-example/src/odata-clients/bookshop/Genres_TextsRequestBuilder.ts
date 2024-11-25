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
import { Genres_Texts } from './Genres_Texts';

/**
 * Request builder class for operations supported on the {@link Genres_Texts} entity.
 */
export class Genres_TextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Genres_Texts<T>, T> {
  /**
   * Returns a request builder for querying all `Genres_Texts` entities.
   * @returns A request builder for creating requests to retrieve all `Genres_Texts` entities.
   */
  getAll(): GetAllRequestBuilder<Genres_Texts<T>, T> {
    return new GetAllRequestBuilder<Genres_Texts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Genres_Texts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Genres_Texts`.
   */
  create(entity: Genres_Texts<T>): CreateRequestBuilder<Genres_Texts<T>, T> {
    return new CreateRequestBuilder<Genres_Texts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Genres_Texts` entity based on its keys.
   * @param locale Key property. See {@link Genres_Texts.locale}.
   * @param id Key property. See {@link Genres_Texts.id}.
   * @returns A request builder for creating requests to retrieve one `Genres_Texts` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Genres_Texts<T>, T> {
    return new GetByKeyRequestBuilder<Genres_Texts<T>, T>(this.entityApi, {
      locale: locale,
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Genres_Texts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Genres_Texts`.
   */
  update(entity: Genres_Texts<T>): UpdateRequestBuilder<Genres_Texts<T>, T> {
    return new UpdateRequestBuilder<Genres_Texts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Genres_Texts`.
   * @param locale Key property. See {@link Genres_Texts.locale}.
   * @param id Key property. See {@link Genres_Texts.id}.
   * @returns A request builder for creating requests that delete an entity of type `Genres_Texts`.
   */
  delete(locale: string, id: number): DeleteRequestBuilder<Genres_Texts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Genres_Texts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Genres_Texts` by taking the entity as a parameter.
   */
  delete(entity: Genres_Texts<T>): DeleteRequestBuilder<Genres_Texts<T>, T>;
  delete(
    localeOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<Genres_Texts<T>, T> {
    return new DeleteRequestBuilder<Genres_Texts<T>, T>(
      this.entityApi,
      localeOrEntity instanceof Genres_Texts
        ? localeOrEntity
        : {
            locale: localeOrEntity!,
            ID: id!
          }
    );
  }
}
