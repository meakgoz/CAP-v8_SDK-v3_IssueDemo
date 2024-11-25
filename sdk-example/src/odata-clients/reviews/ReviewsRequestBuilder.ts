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
import { Reviews } from './Reviews';

/**
 * Request builder class for operations supported on the {@link Reviews} entity.
 */
export class ReviewsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Reviews<T>, T> {
  /**
   * Returns a request builder for querying all `Reviews` entities.
   * @returns A request builder for creating requests to retrieve all `Reviews` entities.
   */
  getAll(): GetAllRequestBuilder<Reviews<T>, T> {
    return new GetAllRequestBuilder<Reviews<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Reviews` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Reviews`.
   */
  create(entity: Reviews<T>): CreateRequestBuilder<Reviews<T>, T> {
    return new CreateRequestBuilder<Reviews<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Reviews` entity based on its keys.
   * @param id Key property. See {@link Reviews.id}.
   * @returns A request builder for creating requests to retrieve one `Reviews` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Guid'>
  ): GetByKeyRequestBuilder<Reviews<T>, T> {
    return new GetByKeyRequestBuilder<Reviews<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Reviews`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Reviews`.
   */
  update(entity: Reviews<T>): UpdateRequestBuilder<Reviews<T>, T> {
    return new UpdateRequestBuilder<Reviews<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Reviews`.
   * @param id Key property. See {@link Reviews.id}.
   * @returns A request builder for creating requests that delete an entity of type `Reviews`.
   */
  delete(id: string): DeleteRequestBuilder<Reviews<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Reviews`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Reviews` by taking the entity as a parameter.
   */
  delete(entity: Reviews<T>): DeleteRequestBuilder<Reviews<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Reviews<T>, T> {
    return new DeleteRequestBuilder<Reviews<T>, T>(
      this.entityApi,
      idOrEntity instanceof Reviews ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
