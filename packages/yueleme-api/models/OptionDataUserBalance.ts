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
import { UserBalance } from '../models/UserBalance';
import { HttpFile } from '../http/http';

export class OptionDataUserBalance {
    'code': ConstantMSG;
    'msg': string;
    'record'?: UserBalance;

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
            "name": "record",
            "baseName": "record",
            "type": "UserBalance",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return OptionDataUserBalance.attributeTypeMap;
    }

    public constructor() {
    }
}


