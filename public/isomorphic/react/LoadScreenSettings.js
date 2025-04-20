import { ILogicalComponent } from './core/ILogicalComponent';

export class LoadScreenSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"missingDSIsNotFatal":"Boolean","requestProperties":{"className":"RPCRequest","isProperties":true},"omitDataSources":{"className":"Identifier","isArray":true},"verifyAsError":"boolean","omitLoadedDataSources":"boolean","suppressAutoDraw":"Boolean","willHandleError":"Boolean","clobberDataSources":"Boolean","cacheScreen":"Boolean"};

}
