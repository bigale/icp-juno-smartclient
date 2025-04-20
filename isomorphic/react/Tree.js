import { ILogicalComponent } from './core/ILogicalComponent';

export class Tree extends ILogicalComponent {
    static ISC_CLASS_NAME = 'Tree';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"rootValue":["String","number"],"defaultIsFolder":"boolean","data":{"className":"TreeNode","isArray":true},"allowFilterOnLinkFields":"Boolean","dataSource":{"className":"DataSource"},"autoOpenRoot":"Boolean","sortFoldersBeforeLeaves":"Boolean","showRoot":"Boolean","separateFolders":"Boolean","multiLinkTree":"Boolean","discardParentlessNodes":"Boolean","reportCollisions":"Boolean","root":{"className":"TreeNode"},"linkData":{"className":"Record","isArray":true}};
static CHILD_TYPE_MAPPING = {"DataSource":"dataSource"};

}
