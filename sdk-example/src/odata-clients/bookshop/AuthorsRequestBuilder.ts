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
import { Authors } from './Authors';

/**
 * Request builder class for operations supported on the {@link Authors} entity.
 */
export class AuthorsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Authors<T>, T> {
  /**
   * Returns a request builder for querying all `Authors` entities.
   * @returns A request builder for creating requests to retrieve all `Authors` entities.
   */
  getAll(): GetAllRequestBuilder<Authors<T>, T> {
    return new GetAllRequestBuilder<Authors<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Authors` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Authors`.
   */
  create(entity: Authors<T>): CreateRequestBuilder<Authors<T>, T> {
    return new CreateRequestBuilder<Authors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Authors` entity based on its keys.
   * @param id Key property. See {@link Authors.id}.
   * @returns A request builder for creating requests to retrieve one `Authors` entity based on its keys.
   */
  getByKey(
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Authors<T>, T> {
    return new GetByKeyRequestBuilder<Authors<T>, T>(this.entityApi, {
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Authors`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Authors`.
   */
  update(entity: Authors<T>): UpdateRequestBuilder<Authors<T>, T> {
    return new UpdateRequestBuilder<Authors<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Authors`.
   * @param id Key property. See {@link Authors.id}.
   * @returns A request builder for creating requests that delete an entity of type `Authors`.
   */
  delete(id: number): DeleteRequestBuilder<Authors<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Authors`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Authors` by taking the entity as a parameter.
   */
  delete(entity: Authors<T>): DeleteRequestBuilder<Authors<T>, T>;
  delete(idOrEntity: any): DeleteRequestBuilder<Authors<T>, T> {
    return new DeleteRequestBuilder<Authors<T>, T>(
      this.entityApi,
      idOrEntity instanceof Authors ? idOrEntity : { ID: idOrEntity! }
    );
  }
}
