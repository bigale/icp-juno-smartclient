import { ReactComponent } from './ReactComponent';

let isc = window.isc;

export class IBaseComponent extends ReactComponent {
    
    validate() {
        let scClassName = this.constructor.ISC_CLASS_NAME;

        if( !scClassName ) {
            return "ISC_CLASS_NAME attribute is not defined";
        }
        
        if(!isc[scClassName] ) {
            return `Incorrect ISC_CLASS_NAME: ${scClassName}`;
        }
        
        return false;
    }

}
