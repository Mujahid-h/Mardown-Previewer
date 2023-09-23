import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import "./App.css";
import { CSSTransition } from "react-transition-group";

function App() {
  const [markdownText, setMarkdownText] = useState(
    "# Markdown Previewer\n## Enter Markdown on the top\n### See the preview on the bottom"
  );
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e) => {
    setMarkdownText(e.target.value);
    setShowPreview(true);
  };

  return (
    <div className="container">
      <div className="editor">
        <h2>Editor</h2>
        <textarea
          value={markdownText}
          onChange={handleInputChange}
          placeholder="Enter Markdown here"
          style={{ height: "30vh" }}
        />
      </div>
      <CSSTransition
        in={showPreview}
        timeout={300}
        classNames="preview"
        unmountOnExit
      >
        <div className="preview">
          <h2>Preview</h2>
          <div className="preview-content">
            <ReactMarkdown>{markdownText}</ReactMarkdown>
          </div>
        </div>
      </CSSTransition>
    </div>
  );
}

export default App;
