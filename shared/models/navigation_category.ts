import { Document } from "./document";
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Wed Nov 14 2018 12:15:24 GMT+0100 (GMT+01:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class NavigationCategory extends ContentItem {
    public children: Document[];
    public url: Fields.UrlSlugField;
    public title: Fields.TextField;
}
