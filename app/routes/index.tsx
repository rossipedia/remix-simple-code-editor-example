import { useState } from "react";
import Editor from "react-simple-code-editor";

import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import prismStyles from "prismjs/themes/prism.css";

export function links() {
  return [{ rel: "stylesheet", href: prismStyles }];
}

export default function Index() {
  const [value, setValue] = useState(`
function foo() {
  console.log("bar");
}
`);
  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <h1>Hello</h1>
      <Editor
        value={value}
        onValueChange={setValue}
        highlight={(code) => highlight(code, languages.js)}
        style={{
          fontFamily: "monospace",
        }}
      />
    </div>
  );
}
