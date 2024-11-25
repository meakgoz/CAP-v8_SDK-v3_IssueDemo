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
import { Books } from './Books';

/**
 * Request builder class for operations supported on the {@link Books} entity.
 */
export class BooksRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Books<T>, T> {
  /**
   * Returns a request builder for querying all `Books` entities.
   * @returns A request builder for creating requests to retrieve all `Books` entities.
   */
  getAll(): GetAllRequestBuilder<Books<T>, T> {
    return new GetAllRequestBuilder<Books<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Books` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Books`.
   */
  create(entity: Books<T>): CreateRequestBuilder<Books<T>, T> {
    return new CreateRequestBuilder<Books<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Books` entity based on its keys.
   * @param id Key property. See {@link Books.id}.
   * @returns A request builder for creating requests to retrieve one `Books` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Books<T>, T> {
    return new GetByKeyRequestBuilder<Books<T>, T>(this.entityApi, { ID: id });
  }

  /**
   * Returns a request builder for updating an entity of type `Books`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Books`.
   */
  update(entity: Books<T>): UpdateRequestBuilder<Books<T>, T> {
    return new UpdateRequestBuilder<Books<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Books`.
   * @param id Key property. See {@link Books.id}.
   * @returns A request builder for creating requests that delete an entity of type `Books`.
   */
  delete(id: number): DeleteRequestBuilder<Books<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Books`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Books` by taking the entity as a parameter.
   */
  delete(entity: Books<T>): DeleteRequestBuilder<Books<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Books<T>, T> {
    return new DeleteRequestBuilder<Books<T>, T>(
      this.entityApi,
      idOrEntity instanceof Books ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
