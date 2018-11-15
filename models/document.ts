
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Wed Nov 14 2018 12:15:24 GMT+0100 (GMT+01:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class Document extends ContentItem {
    public author: ContentItem[];
    public contentLayout: Fields.MultipleChoiceField;
    public audience: Fields.TaxonomyField;
    public notes: Fields.RichTextField;
    public content: Fields.RichTextField;
    public contentType: Fields.TaxonomyField;
    public url: Fields.UrlSlugField;
    public shortTitle: Fields.TextField;
    public platforms: Fields.TaxonomyField;
    public description: Fields.TextField;
    public title: Fields.TextField;
    public children: Document[];
    public nextStep: ContentItem[];
    public vanityUrls: Fields.TextField;
    public previousStep: ContentItem[];
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'content_layout') {
                    return 'contentLayout';
                }
                if (fieldName === 'content_type') {
                    return 'contentType';
                }
                if (fieldName === 'short_title') {
                    return 'shortTitle';
                }
                if (fieldName === 'next_step') {
                    return 'nextStep';
                }
                if (fieldName === 'vanity_urls') {
                    return 'vanityUrls';
                }
                if (fieldName === 'previous_step') {
                    return 'previousStep';
                }
                return fieldName;
            })
        });
    }
}