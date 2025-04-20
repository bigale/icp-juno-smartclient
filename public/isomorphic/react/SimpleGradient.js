import { Gradient } from './Gradient';

export class SimpleGradient extends Gradient {
    IS_A_VIRTUAL_COMPONENT = true;

    static IS_CLASS = false;
static PROPERTY_TYPES = {"direction":"float"};

}
