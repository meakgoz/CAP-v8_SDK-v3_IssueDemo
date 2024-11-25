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
import { Books_Texts } from './Books_Texts';

/**
 * Request builder class for operations supported on the {@link Books_Texts} entity.
 */
export class Books_TextsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Books_Texts<T>, T> {
  /**
   * Returns a request builder for querying all `Books_Texts` entities.
   * @returns A request builder for creating requests to retrieve all `Books_Texts` entities.
   */
  getAll(): GetAllRequestBuilder<Books_Texts<T>, T> {
    return new GetAllRequestBuilder<Books_Texts<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Books_Texts` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Books_Texts`.
   */
  create(entity: Books_Texts<T>): CreateRequestBuilder<Books_Texts<T>, T> {
    return new CreateRequestBuilder<Books_Texts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for retrieving one `Books_Texts` entity based on its keys.
   * @param locale Key property. See {@link Books_Texts.locale}.
   * @param id Key property. See {@link Books_Texts.id}.
   * @returns A request builder for creating requests to retrieve one `Books_Texts` entity based on its keys.
   */
  getByKey(
    locale: DeserializedType<T, 'Edm.String'>,
    id: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Books_Texts<T>, T> {
    return new GetByKeyRequestBuilder<Books_Texts<T>, T>(this.entityApi, {
      locale: locale,
      ID: id
    });
  }

  /**
   * Returns a request builder for updating an entity of type `Books_Texts`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Books_Texts`.
   */
  update(entity: Books_Texts<T>): UpdateRequestBuilder<Books_Texts<T>, T> {
    return new UpdateRequestBuilder<Books_Texts<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Books_Texts`.
   * @param locale Key property. See {@link Books_Texts.locale}.
   * @param id Key property. See {@link Books_Texts.id}.
   * @returns A request builder for creating requests that delete an entity of type `Books_Texts`.
   */
  delete(locale: string, id: number): DeleteRequestBuilder<Books_Texts<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Books_Texts`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Books_Texts` by taking the entity as a parameter.
   */
  delete(entity: Books_Texts<T>): DeleteRequestBuilder<Books_Texts<T>, T>;
  delete(
    localeOrEntity: any,
    id?: number
  ): DeleteRequestBuilder<Books_Texts<T>, T> {
    return new DeleteRequestBuilder<Books_Texts<T>, T>(
      this.entityApi,
      localeOrEntity instanceof Books_Texts
        ? localeOrEntity
        : {
            locale: localeOrEntity!,
            ID: id!
          }
    );
  }
}
