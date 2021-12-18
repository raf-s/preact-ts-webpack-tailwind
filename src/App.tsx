import * as React from 'react';
import './css/app.scss';
import {ErrorMessage} from '~/components/ErrorMessage';

const App: React.FC = () => (
  <div>
    <h1>React 17 and TypeScript 4 App!🚀</h1>
    <ErrorMessage error="This is a test error!" />
  </div>
);

// eslint-disable-next-line import/no-default-export
export default App;
