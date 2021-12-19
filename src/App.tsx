import { FunctionComponent } from "preact";
import "./css/app.scss";
import { Alert } from "~/components/Alert";
import { Container } from "~/components/Container";

const App: FunctionComponent = () => (
  <Container className="mt-4">
    <h1>Preact 17 and TypeScript 4 App!🚀</h1>
    <Alert variant="primary">This is an Alert</Alert>
  </Container>
);

// eslint-disable-next-line import/no-default-export
export default App;
