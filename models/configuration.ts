
import { ContentItem, Fields } from 'kentico-cloud-delivery';

/**
 * This class was generated by 'kentico-cloud-model-generator-utility' at Wed Nov 14 2018 12:15:24 GMT+0100 (GMT+01:00).
 *
 * Note: You can substitute 'ContentItem' type with another generated class. Generator doesn't have this information available
 * and so its up to you to define relationship between models.
 */
export class Configuration extends ContentItem {
    public previewBranch: Fields.TextField;
    public portalName: Fields.TextField;
    public liveBranch: Fields.TextField;
    public githubRepository: Fields.TextField;
    constructor() {
        super({
            propertyResolver: ((fieldName: string) => {
                if (fieldName === 'preview_branch') {
                    return 'previewBranch';
                }
                if (fieldName === 'portal_name') {
                    return 'portalName';
                }
                if (fieldName === 'live_branch') {
                    return 'liveBranch';
                }
                if (fieldName === 'github_repository') {
                    return 'githubRepository';
                }
                return fieldName;
            })
        });
    }
}
