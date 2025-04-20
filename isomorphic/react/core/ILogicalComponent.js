import { ReactComponent } from './ReactComponent';

let isc = window.isc;

export class ILogicalComponent extends ReactComponent {
    
    validate() {
        if( this.IS_A_VIRTUAL_COMPONENT ) {
            return false;
        }
        
        if( !this.constructor.ISC_CLASS_NAME) {
            return `ISC_CLASS_NAME attribute is not defined`;
        }
        
        return false;
    }
    
    render() {
        this.beforeRender();

        const validationMessage = this.validate();
        
        if( validationMessage ) {
            throw new Error(validationMessage);
        }
        
        return null;
    }

    getComponentBaseConfig() {
        let config = {};
        Object.assign( config, this.props, {
            _isCreated: true, __react: true
        });
        return config;
    }

    _createSCInstance(baseConfig) {
        const clazz = isc[this.constructor.ISC_CLASS_NAME],
              config = this.getComponentConfigWithChildren();
        for (let prop of this.REACT_PROPS) delete config[prop];

        if (this.componentIsNotAChild && clazz && clazz.create) {
            this.cmp = isc[this.constructor.ISC_CLASS_NAME].create(config);
        } else {
            this.cmp = Object.assign(config, {_isRendered: false});
        }
    }
}
