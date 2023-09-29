import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { DefaultApiRequestFactory, DefaultApiResponseProcessor} from "../apis/DefaultApi";
export class ObservableDefaultApi {
    private requestFactory: DefaultApiRequestFactory;
    private responseProcessor: DefaultApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DefaultApiRequestFactory,
        responseProcessor?: DefaultApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DefaultApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DefaultApiResponseProcessor();
    }

    /**
     * @param pageMark 
     * @param pageSize 
     */
    public getApiMeditationV1TapirAiFeeds(pageMark?: number, pageSize?: number, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkAIFeed> {
        const requestContextPromise = this.requestFactory.getApiMeditationV1TapirAiFeeds(pageMark, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiMeditationV1TapirAiFeeds(rsp)));
            }));
    }

    /**
     * @param pageMark 
     * @param pageSize 
     * @param tag 
     */
    public getApiMeditationV1TapirAiPosts(pageMark?: number, pageSize?: number, tag?: string, _options?: Configuration): Observable<NoSqlPagingListDataPageMarkAIArticle> {
        const requestContextPromise = this.requestFactory.getApiMeditationV1TapirAiPosts(pageMark, pageSize, tag, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiMeditationV1TapirAiPosts(rsp)));
            }));
    }

    /**
     */
    public getApiMeditationV1TapirAiProjects(_options?: Configuration): Observable<NoSqlPagingListDataPageMarkAIProject> {
        const requestContextPromise = this.requestFactory.getApiMeditationV1TapirAiProjects(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiMeditationV1TapirAiProjects(rsp)));
            }));
    }

    /**
     */
    public getApiMeditationV1TapirAiPrompts(_options?: Configuration): Observable<NoSqlPagingListDataPageMarkAIPrompt> {
        const requestContextPromise = this.requestFactory.getApiMeditationV1TapirAiPrompts(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiMeditationV1TapirAiPrompts(rsp)));
            }));
    }

    /**
     * @param pageMark 
     * @param pageSize 
     */
    public getApiMeditationV1TapirAiSearch(pageMark?: number, pageSize?: number, _options?: Configuration): Observable<AiSearchResult> {
        const requestContextPromise = this.requestFactory.getApiMeditationV1TapirAiSearch(pageMark, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiMeditationV1TapirAiSearch(rsp)));
            }));
    }

    /**
     */
    public getApiMeditationV1TapirHorseLearningCurrent(_options?: Configuration): Observable<NoSqlPagingListDataCourseItemDaka> {
        const requestContextPromise = this.requestFactory.getApiMeditationV1TapirHorseLearningCurrent(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiMeditationV1TapirHorseLearningCurrent(rsp)));
            }));
    }

    /**
     */
    public getApiMeditationV1TapirHorseLearningLzzCurrent(_options?: Configuration): Observable<NoSqlPagingListDataCourseItemDaka> {
        const requestContextPromise = this.requestFactory.getApiMeditationV1TapirHorseLearningLzzCurrent(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getApiMeditationV1TapirHorseLearningLzzCurrent(rsp)));
            }));
    }

}
