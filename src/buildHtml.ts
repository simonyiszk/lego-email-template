import { renderToMjml } from "@faire/mjml-react/utils/renderToMjml";
import mjml2html from "mjml";
import React from "react";

import { Email } from "./Email";

function renderReactToMjml() {
  const element = React.createElement(Email);
  return mjml2html(renderToMjml(element));
}

function main() {
  const { html, errors } = renderReactToMjml();
  if (errors.length > 0) {
    console.error(errors);
  }
  console.log(html);
}

main();
