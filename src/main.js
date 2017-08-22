import ReactDOM from 'react-dom';

import routes from './routes';
import InitializeActions from './actions/initializeActions';

InitializeActions.initApp();

ReactDOM.render(routes, document.getElementById('app'));
