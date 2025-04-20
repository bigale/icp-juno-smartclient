import { ILogicalComponent } from './core/ILogicalComponent';

export class SavedSearches extends ILogicalComponent {
    static ISC_CLASS_NAME = 'SavedSearches';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"allowNullApplicationId":"boolean","defaultDataSource":[{"className":"DataSource"},"String"],"saveDefaultSearchToServer":"boolean"};

}
