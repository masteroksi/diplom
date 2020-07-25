import { BodyListener } from './modules/body-listener';
import callMeModal from './modules/call-me-modal';
import inputValidator from './modules/input-validator';
import formSubmit from './modules/form-submit';

const bodyListener = new BodyListener();
callMeModal(bodyListener);
inputValidator(bodyListener);
formSubmit(bodyListener);
