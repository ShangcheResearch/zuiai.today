import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { AIArticle } from '../models/AIArticle';
import { AIFeed } from '../models/AIFeed';
import { AIProject } from '../models/AIProject';
import { AIPrompt } from '../models/AIPrompt';
import { AiSearchResult } from '../models/AiSearchResult';
import { ConstantChargeType } from '../models/ConstantChargeType';
import { ConstantMSG } from '../models/ConstantMSG';
import { CourseItemDaka } from '../models/CourseItemDaka';
import { NoSqlPagingListDataCourseItemDaka } from '../models/NoSqlPagingListDataCourseItemDaka';
import { NoSqlPagingListDataPageMarkAIArticle } from '../models/NoSqlPagingListDataPageMarkAIArticle';
import { NoSqlPagingListDataPageMarkAIFeed } from '../models/NoSqlPagingListDataPageMarkAIFeed';
import { NoSqlPagingListDataPageMarkAIProject } from '../models/NoSqlPagingListDataPageMarkAIProject';
import { NoSqlPagingListDataPageMarkAIPrompt } from '../models/NoSqlPagingListDataPageMarkAIPrompt';
import { RetMsg } from '../models/RetMsg';
import { ObservableDefaultApi } from './ObservableAPI';

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class PromiseDefaultApi {
    private api: ObservableDefaultApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.api = new ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param pageMark 
     * @param pageSize 
     */
    public getApiMeditationV1TapirAiFeeds(pageMark?: number, pageSize?: number, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkAIFeed> {
        const result = this.api.getApiMeditationV1TapirAiFeeds(pageMark, pageSize, _options);
        return result.toPromise();
    }

    /**
     * @param pageMark 
     * @param pageSize 
     * @param tag 
     */
    public getApiMeditationV1TapirAiPosts(pageMark?: number, pageSize?: number, tag?: string, _options?: Configuration): Promise<NoSqlPagingListDataPageMarkAIArticle> {
        const result = this.api.getApiMeditationV1TapirAiPosts(pageMark, pageSize, tag, _options);
        return result.toPromise();
    }

    /**
     */
    public getApiMeditationV1TapirAiProjects(_options?: Configuration): Promise<NoSqlPagingListDataPageMarkAIProject> {
        const result = this.api.getApiMeditationV1TapirAiProjects(_options);
        return result.toPromise();
    }

    /**
     */
    public getApiMeditationV1TapirAiPrompts(_options?: Configuration): Promise<NoSqlPagingListDataPageMarkAIPrompt> {
        const result = this.api.getApiMeditationV1TapirAiPrompts(_options);
        return result.toPromise();
    }

    /**
     * @param pageMark 
     * @param pageSize 
     */
    public getApiMeditationV1TapirAiSearch(pageMark?: number, pageSize?: number, _options?: Configuration): Promise<AiSearchResult> {
        const result = this.api.getApiMeditationV1TapirAiSearch(pageMark, pageSize, _options);
        return result.toPromise();
    }

    /**
     */
    public getApiMeditationV1TapirHorseLearningCurrent(_options?: Configuration): Promise<NoSqlPagingListDataCourseItemDaka> {
        const result = this.api.getApiMeditationV1TapirHorseLearningCurrent(_options);
        return result.toPromise();
    }

    /**
     */
    public getApiMeditationV1TapirHorseLearningLzzCurrent(_options?: Configuration): Promise<NoSqlPagingListDataCourseItemDaka> {
        const result = this.api.getApiMeditationV1TapirHorseLearningLzzCurrent(_options);
        return result.toPromise();
    }


}



