import { BodyListener } from './modules/body-listener';
import modals from './modules/modals';
import inputValidator from './modules/input-validator';
import formSubmit from './modules/form-submit';
import collapsedPanels, { openNext } from './modules/collapsed-panels';
import calculator from './modules/calculator';
import loadList from './modules/load-list';

const bodyListener = new BodyListener();
modals(bodyListener);
inputValidator(bodyListener);
formSubmit(bodyListener);
collapsedPanels(bodyListener);
calculator(bodyListener, openNext);
loadList(bodyListener);
