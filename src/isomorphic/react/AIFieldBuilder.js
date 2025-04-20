import { SummaryBuilder } from './SummaryBuilder';

export class AIFieldBuilder extends SummaryBuilder {
    static ISC_CLASS_NAME = 'AIFieldBuilder';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"suggestTitleThreshold":"int","autoSuggestTitleDelay":"Integer","autoSuggestTitle":"Boolean"};

}
