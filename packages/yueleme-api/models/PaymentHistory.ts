/**
 * title
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ConstantPaymentStatus } from '../models/ConstantPaymentStatus';
import { HttpFile } from '../http/http';

export class PaymentHistory {
    'id': number;
    'channelId': number;
    'userId': string;
    'seriesId': number;
    'createAt': number;
    'title': string;
    'status': ConstantPaymentStatus;
    'payAmount': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "channelId",
            "baseName": "channelId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "userId",
            "baseName": "userId",
            "type": "string",
            "format": ""
        },
        {
            "name": "seriesId",
            "baseName": "seriesId",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "createAt",
            "baseName": "createAt",
            "type": "number",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ConstantPaymentStatus",
            "format": ""
        },
        {
            "name": "payAmount",
            "baseName": "payAmount",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return PaymentHistory.attributeTypeMap;
    }

    public constructor() {
    }
}



