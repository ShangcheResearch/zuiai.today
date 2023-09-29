// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AiSearchResult } from '../models/AiSearchResult';
import { NoSqlPagingListDataCourseItemDaka } from '../models/NoSqlPagingListDataCourseItemDaka';
import { NoSqlPagingListDataPageMarkAIArticle } from '../models/NoSqlPagingListDataPageMarkAIArticle';
import { NoSqlPagingListDataPageMarkAIFeed } from '../models/NoSqlPagingListDataPageMarkAIFeed';
import { NoSqlPagingListDataPageMarkAIProject } from '../models/NoSqlPagingListDataPageMarkAIProject';
import { NoSqlPagingListDataPageMarkAIPrompt } from '../models/NoSqlPagingListDataPageMarkAIPrompt';
import { RetMsg } from '../models/RetMsg';

/**
 * no description
 */
export class DefaultApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param pageMark 
     * @param pageSize 
     */
    public async getApiMeditationV1TapirAiFeeds(pageMark?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api-meditation/v1/tapir/ai/feeds';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageMark !== undefined) {
            requestContext.setQueryParam("pageMark", ObjectSerializer.serialize(pageMark, "number", "int64"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pageMark 
     * @param pageSize 
     * @param tag 
     */
    public async getApiMeditationV1TapirAiPosts(pageMark?: number, pageSize?: number, tag?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;




        // Path Params
        const localVarPath = '/api-meditation/v1/tapir/ai/posts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageMark !== undefined) {
            requestContext.setQueryParam("pageMark", ObjectSerializer.serialize(pageMark, "number", "int64"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }

        // Query Params
        if (tag !== undefined) {
            requestContext.setQueryParam("tag", ObjectSerializer.serialize(tag, "string", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async getApiMeditationV1TapirAiProjects(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api-meditation/v1/tapir/ai/projects';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async getApiMeditationV1TapirAiPrompts(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api-meditation/v1/tapir/ai/prompts';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param pageMark 
     * @param pageSize 
     */
    public async getApiMeditationV1TapirAiSearch(pageMark?: number, pageSize?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;



        // Path Params
        const localVarPath = '/api-meditation/v1/tapir/ai/search';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (pageMark !== undefined) {
            requestContext.setQueryParam("pageMark", ObjectSerializer.serialize(pageMark, "number", "int64"));
        }

        // Query Params
        if (pageSize !== undefined) {
            requestContext.setQueryParam("pageSize", ObjectSerializer.serialize(pageSize, "number", ""));
        }


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async getApiMeditationV1TapirHorseLearningCurrent(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api-meditation/v1/tapir/horse/learning/current';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     */
    public async getApiMeditationV1TapirHorseLearningLzzCurrent(_options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // Path Params
        const localVarPath = '/api-meditation/v1/tapir/horse/learning/lzz/current';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class DefaultApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiMeditationV1TapirAiFeeds
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiMeditationV1TapirAiFeeds(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkAIFeed > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkAIFeed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIFeed", ""
            ) as NoSqlPagingListDataPageMarkAIFeed;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter pageMark, Invalid value for: query parameter pageSize", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkAIFeed = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIFeed", ""
            ) as NoSqlPagingListDataPageMarkAIFeed;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiMeditationV1TapirAiPosts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiMeditationV1TapirAiPosts(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkAIArticle > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkAIArticle = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIArticle", ""
            ) as NoSqlPagingListDataPageMarkAIArticle;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter pageMark, Invalid value for: query parameter pageSize, Invalid value for: query parameter tag", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkAIArticle = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIArticle", ""
            ) as NoSqlPagingListDataPageMarkAIArticle;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiMeditationV1TapirAiProjects
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiMeditationV1TapirAiProjects(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkAIProject > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkAIProject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIProject", ""
            ) as NoSqlPagingListDataPageMarkAIProject;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkAIProject = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIProject", ""
            ) as NoSqlPagingListDataPageMarkAIProject;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiMeditationV1TapirAiPrompts
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiMeditationV1TapirAiPrompts(response: ResponseContext): Promise<NoSqlPagingListDataPageMarkAIPrompt > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataPageMarkAIPrompt = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIPrompt", ""
            ) as NoSqlPagingListDataPageMarkAIPrompt;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataPageMarkAIPrompt = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataPageMarkAIPrompt", ""
            ) as NoSqlPagingListDataPageMarkAIPrompt;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiMeditationV1TapirAiSearch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiMeditationV1TapirAiSearch(response: ResponseContext): Promise<AiSearchResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AiSearchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AiSearchResult", ""
            ) as AiSearchResult;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            throw new ApiException<string>(response.httpStatusCode, "Invalid value for: query parameter pageMark, Invalid value for: query parameter pageSize", body, response.headers);
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AiSearchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AiSearchResult", ""
            ) as AiSearchResult;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiMeditationV1TapirHorseLearningCurrent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiMeditationV1TapirHorseLearningCurrent(response: ResponseContext): Promise<NoSqlPagingListDataCourseItemDaka > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataCourseItemDaka = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataCourseItemDaka", ""
            ) as NoSqlPagingListDataCourseItemDaka;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataCourseItemDaka = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataCourseItemDaka", ""
            ) as NoSqlPagingListDataCourseItemDaka;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getApiMeditationV1TapirHorseLearningLzzCurrent
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getApiMeditationV1TapirHorseLearningLzzCurrent(response: ResponseContext): Promise<NoSqlPagingListDataCourseItemDaka > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NoSqlPagingListDataCourseItemDaka = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataCourseItemDaka", ""
            ) as NoSqlPagingListDataCourseItemDaka;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: RetMsg = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RetMsg", ""
            ) as RetMsg;
            throw new ApiException<RetMsg>(response.httpStatusCode, "", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NoSqlPagingListDataCourseItemDaka = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NoSqlPagingListDataCourseItemDaka", ""
            ) as NoSqlPagingListDataCourseItemDaka;
            return body;
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
