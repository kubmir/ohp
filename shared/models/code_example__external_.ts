import {ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Wed Nov 14 2018 12:15:24 GMT+0100 (GMT+01:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class CodeExampleExternal extends ContentItem {
    public path: Fields.TextField;
    public includeLines: Fields.TextField;
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'include_lines') {
                    return 'includeLines';
                }
                return fieldName;
            }),
            richTextResolver: (item: CodeExampleExternal) => {
                return `<h3>HERE GITHUB CODE WILL BE PLACED + ${item.path.value}</h3>`;
            }
        });
    }
}
