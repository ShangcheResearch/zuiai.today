# .DefaultApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getApiMeditationV1TapirAiPosts**](DefaultApi.md#getApiMeditationV1TapirAiPosts) | **GET** /api-meditation/v1/tapir/ai/posts | 
[**getApiMeditationV1TapirAiProjects**](DefaultApi.md#getApiMeditationV1TapirAiProjects) | **GET** /api-meditation/v1/tapir/ai/projects | 
[**getApiMeditationV1TapirAiPrompts**](DefaultApi.md#getApiMeditationV1TapirAiPrompts) | **GET** /api-meditation/v1/tapir/ai/prompts | 
[**getApiMeditationV1TapirAiSearch**](DefaultApi.md#getApiMeditationV1TapirAiSearch) | **GET** /api-meditation/v1/tapir/ai/search | 
[**getApiMeditationV1TapirHorseLearningCurrent**](DefaultApi.md#getApiMeditationV1TapirHorseLearningCurrent) | **GET** /api-meditation/v1/tapir/horse/learning/current | 
[**getApiMeditationV1TapirHorseLearningLzzCurrent**](DefaultApi.md#getApiMeditationV1TapirHorseLearningLzzCurrent) | **GET** /api-meditation/v1/tapir/horse/learning/lzz/current | 


# **getApiMeditationV1TapirAiPosts**
> NoSqlPagingListDataPageMarkAIArticle getApiMeditationV1TapirAiPosts()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApiMeditationV1TapirAiPosts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NoSqlPagingListDataPageMarkAIArticle**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiMeditationV1TapirAiProjects**
> NoSqlPagingListDataPageMarkAIProject getApiMeditationV1TapirAiProjects()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApiMeditationV1TapirAiProjects(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NoSqlPagingListDataPageMarkAIProject**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiMeditationV1TapirAiPrompts**
> NoSqlPagingListDataPageMarkAIPrompt getApiMeditationV1TapirAiPrompts()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApiMeditationV1TapirAiPrompts(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NoSqlPagingListDataPageMarkAIPrompt**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiMeditationV1TapirAiSearch**
> AiSearchResult getApiMeditationV1TapirAiSearch()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApiMeditationV1TapirAiSearch(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**AiSearchResult**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiMeditationV1TapirHorseLearningCurrent**
> NoSqlPagingListDataCourseItemDaka getApiMeditationV1TapirHorseLearningCurrent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApiMeditationV1TapirHorseLearningCurrent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NoSqlPagingListDataCourseItemDaka**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getApiMeditationV1TapirHorseLearningLzzCurrent**
> NoSqlPagingListDataCourseItemDaka getApiMeditationV1TapirHorseLearningLzzCurrent()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .DefaultApi(configuration);

let body:any = {};

apiInstance.getApiMeditationV1TapirHorseLearningLzzCurrent(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters
This endpoint does not need any parameter.


### Return type

**NoSqlPagingListDataCourseItemDaka**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |
**0** |  |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


