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

import { ConstantMSG } from '../models/ConstantMSG';
import { ScheduleCard } from '../models/ScheduleCard';
import { HttpFile } from '../http/http';

export class NoSqlPagingListDataPageMarkScheduleCard {
    'code': ConstantMSG;
    'msg': string;
    'records'?: Array<ScheduleCard>;
    'pageSize': number;
    'total'?: number;
    'pageState'?: number;
    'prevPageMark'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "code",
            "baseName": "code",
            "type": "ConstantMSG",
            "format": ""
        },
        {
            "name": "msg",
            "baseName": "msg",
            "type": "string",
            "format": ""
        },
        {
            "name": "records",
            "baseName": "records",
            "type": "Array<ScheduleCard>",
            "format": ""
        },
        {
            "name": "pageSize",
            "baseName": "pageSize",
            "type": "number",
            "format": ""
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "pageState",
            "baseName": "pageState",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "prevPageMark",
            "baseName": "prevPageMark",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return NoSqlPagingListDataPageMarkScheduleCard.attributeTypeMap;
    }

    public constructor() {
    }
}



