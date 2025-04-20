import { ILogicalComponent } from './core/ILogicalComponent';

export class TreeNode extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"iconPadding":"Integer","isFolder":["Boolean","String"],"enabled":"boolean","canDrag":"boolean","parentId":["String","Number"],"id":["String","Number"],"childComponents":{"className":"TreeNode","isArray":true},"showOpenIcon":"Boolean","showSelectedIcon":"Boolean","showDropIcon":"Boolean","canAcceptDrop":"boolean"};
static CHILD_TYPE_MAPPING = {"TreeNode":"childComponents"};

}
