import { ILogicalComponent } from './core/ILogicalComponent';

export class LoadProjectSettings extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"drawFirstScreen":"boolean","requestProperties":{"className":"RPCRequest","isProperties":true},"verifyAsError":"boolean","allowPlaceholders":"Boolean","dataContext":{"className":"DataContext"},"omitLoadedDataSources":"boolean","clobberDataSources":"Boolean","omitDataSources":{"className":"Identifier","isArray":true},"timeout":"int","verifyDataSources":"Boolean","willHandleError":"boolean"};

}
