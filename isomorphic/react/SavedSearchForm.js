import { DynamicForm } from './DynamicForm';

export class SavedSearchForm extends DynamicForm {
    static ISC_CLASS_NAME = 'SavedSearchForm';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"newRecordValues":{"className":"Record"},"saveDefaultSearch":"boolean","canEditSearch":"Boolean","canAddSearch":"Boolean","targetEditsCriteria":"Boolean","canRemoveSearch":"Boolean","canModifyProperty":"Boolean","numCols":"number","height":"number","targetDataSource":{"className":"DataSource"},"confirmRemoval":"boolean","saveLastSearch":"boolean","targetComponent":{"className":"Canvas"}};

}
