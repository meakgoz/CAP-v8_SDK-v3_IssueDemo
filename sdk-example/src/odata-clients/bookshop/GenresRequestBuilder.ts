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
import { Genres } from './Genres';

/**
 * Request builder class for operations supported on the {@link Genres} entity.
 */
export class GenresRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Genres<T>, T> {
  /**
   * Returns a request builder for querying all `Genres` entities.
   * @returns A request builder for creating requests to retrieve all `Genres` entities.
   */
  getAll(): GetAllRequestBuilder<Genres<T>, T> {
    return new GetAllRequestBuilder<Genres<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Genres` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Genres`.
   */
  create(entity: Genres<T>): CreateRequestBuilder<Genres<T>, T> {
    return new CreateRequestBuilder<Genres<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Genres` entity based on its keys.
   * @param id Key property. See {@link Genres.id}.
   * @returns A request builder for creating requests to retrieve one `Genres` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Genres<T>, T> {
    return new GetByKeyRequestBuilder<Genres<T>, T>(this.entityApi, { ID: id });
  }

  /**
   * Returns a request builder for updating an entity of type `Genres`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Genres`.
   */
  update(entity: Genres<T>): UpdateRequestBuilder<Genres<T>, T> {
    return new UpdateRequestBuilder<Genres<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Genres`.
   * @param id Key property. See {@link Genres.id}.
   * @returns A request builder for creating requests that delete an entity of type `Genres`.
   */
  delete(id: number): DeleteRequestBuilder<Genres<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Genres`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Genres` by taking the entity as a parameter.
   */
  delete(entity: Genres<T>): DeleteRequestBuilder<Genres<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Genres<T>, T> {
    return new DeleteRequestBuilder<Genres<T>, T>(
      this.entityApi,
      idOrEntity instanceof Genres ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
