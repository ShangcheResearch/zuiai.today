import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AIArticle } from '../models/AIArticle';
import { AIProject } from '../models/AIProject';
import { AIPrompt } from '../models/AIPrompt';
import { AiSearchResult } from '../models/AiSearchResult';
import { ConstantChargeType } from '../models/ConstantChargeType';
import { ConstantMSG } from '../models/ConstantMSG';
import { CourseItemDaka } from '../models/CourseItemDaka';
import { NoSqlPagingListDataCourseItemDaka } from '../models/NoSqlPagingListDataCourseItemDaka';
import { NoSqlPagingListDataPageMarkAIArticle } from '../models/NoSqlPagingListDataPageMarkAIArticle';
import { NoSqlPagingListDataPageMarkAIProject } from '../models/NoSqlPagingListDataPageMarkAIProject';
import { NoSqlPagingListDataPageMarkAIPrompt } from '../models/NoSqlPagingListDataPageMarkAIPrompt';
import { RetMsg } from '../models/RetMsg';

import { ObservableDefaultApi } from "./ObservableAPI";
import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";

export interface DefaultApiGetApiMeditationV1TapirAiPostsRequest {
}

export interface DefaultApiGetApiMeditationV1TapirAiProjectsRequest {
}

export interface DefaultApiGetApiMeditationV1TapirAiPromptsRequest {
}

export interface DefaultApiGetApiMeditationV1TapirAiSearchRequest {
}

export interface DefaultApiGetApiMeditationV1TapirHorseLearningCurrentRequest {
}

export interface DefaultApiGetApiMeditationV1TapirHorseLearningLzzCurrentRequest {
}

export class ObjectDefaultApi {
    private api: ObservableDefaultApi

    public constructor(configuration: Configuration, requestFactory?: DefaultApiRequestFactory, responseProcessor?: DefaultApiResponseProcessor) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getApiMeditationV1TapirAiPosts(param: DefaultApiGetApiMeditationV1TapirAiPostsRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataPageMarkAIArticle> {
        return this.api.getApiMeditationV1TapirAiPosts( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiMeditationV1TapirAiProjects(param: DefaultApiGetApiMeditationV1TapirAiProjectsRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataPageMarkAIProject> {
        return this.api.getApiMeditationV1TapirAiProjects( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiMeditationV1TapirAiPrompts(param: DefaultApiGetApiMeditationV1TapirAiPromptsRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataPageMarkAIPrompt> {
        return this.api.getApiMeditationV1TapirAiPrompts( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiMeditationV1TapirAiSearch(param: DefaultApiGetApiMeditationV1TapirAiSearchRequest = {}, options?: Configuration): Promise<AiSearchResult> {
        return this.api.getApiMeditationV1TapirAiSearch( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiMeditationV1TapirHorseLearningCurrent(param: DefaultApiGetApiMeditationV1TapirHorseLearningCurrentRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataCourseItemDaka> {
        return this.api.getApiMeditationV1TapirHorseLearningCurrent( options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getApiMeditationV1TapirHorseLearningLzzCurrent(param: DefaultApiGetApiMeditationV1TapirHorseLearningLzzCurrentRequest = {}, options?: Configuration): Promise<NoSqlPagingListDataCourseItemDaka> {
        return this.api.getApiMeditationV1TapirHorseLearningLzzCurrent( options).toPromise();
    }

}
