import { ILogicalComponent } from './core/ILogicalComponent';

export class RPCRequest extends ILogicalComponent {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"suppressAutoDraw":"Boolean","isBackgroundRequest":"Boolean","useSimpleHttp":"Boolean","downloadResult":"Boolean","downloadToNewWindow":"Boolean","serverOutputAsString":"Boolean","useCursorTracker":"boolean","httpHeaders":{"className":"Object"},"bypassCache":"Boolean","paramsOnly":"boolean","ignoreTimeout":"Boolean","allowIE9Leak":"boolean","sendNoQueue":"Boolean","omitNullMapValuesInResponse":"Boolean","useXmlHttpRequest":"boolean","willHandleError":"Boolean","promptDelay":"number","showPrompt":"Boolean","containsCredentials":"Boolean","useHttpProxy":"boolean","evalResult":"Boolean","params":{"className":"Object"},"data":["String",{"className":"Record"},{"className":"Object"}],"reportDownloadErrorsAsDocuments":"Boolean","withCredentials":"Boolean","timeout":"int","mockMode":"boolean","evalVars":{"className":"Object"},"clientContext":{"className":"Object"},"useStrictJSON":"Boolean"};

}
