import { SelectItem } from './SelectItem';

export class SavedSearchItem extends SelectItem {
    static ISC_CLASS_NAME = 'SavedSearchItem';
    
    static IS_CLASS = true;
static PROPERTY_TYPES = {"copySearchFieldProperties":{"className":"ListGridField","isProperties":true},"canEditSearch":"boolean","targetDataSource":{"className":"DataSource"},"saveLastSearch":"boolean","canRemoveSearch":"boolean","newRecordValues":{"className":"Record"},"markAsAdminDefaultFieldProperties":{"className":"ListGridField","isProperties":true},"confirmRemoval":"boolean","markAsDefaultFieldProperties":{"className":"ListGridField","isProperties":true},"canAddSearch":"boolean","saveDefaultSearch":"boolean","removeSearchFieldProperties":{"className":"ListGridField","isProperties":true},"editSearchFieldProperties":{"className":"ListGridField","isProperties":true},"canCopySearch":"boolean","editSearchWindowProperties":{"className":"EditSearchWindow","isProperties":true},"adminSeparatorRecordProperties":{"className":"ListGridRecord","isProperties":true},"targetEditsCriteria":"boolean","pickListFields":{"className":"ListGridField","isArray":true}};

}
