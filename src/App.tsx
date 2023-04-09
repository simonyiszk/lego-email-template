import { renderReactToMjml } from "./renderReactToMjml";
import { Email } from "./Email";

function App() {
  const { html, errors } = renderReactToMjml(<Email />);

  if (errors.length > 0) {
    console.log(errors);
  }

  console.log(html);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export default App;
