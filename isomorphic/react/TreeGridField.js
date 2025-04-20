import { ListGridField } from './ListGridField';

export class TreeGridField extends ListGridField {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"treeField":"Boolean","canExport":"Boolean"};

}
