import { ILogicalComponent } from './core/ILogicalComponent';

export class RPCResponse extends ILogicalComponent {
    static ISC_CLASS_NAME = 'RPCResponse';

    static IS_CLASS = true;
static PROPERTY_TYPES = {"clientContext":{"className":"Object"},"status":"int","httpHeaders":{"className":"Object"},"data":["String",{"className":"Object"}],"httpResponseCode":"Integer","transactionNum":"int"};

}
