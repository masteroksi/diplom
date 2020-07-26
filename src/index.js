import { BodyListener } from './modules/body-listener';
import modals from './modules/modals';
import inputValidator from './modules/input-validator';
import formSubmit from './modules/form-submit';
import collapsedPanels from './modules/collapsed-panels';

const bodyListener = new BodyListener();
modals(bodyListener);
inputValidator(bodyListener);
formSubmit(bodyListener);
collapsedPanels(bodyListener);
