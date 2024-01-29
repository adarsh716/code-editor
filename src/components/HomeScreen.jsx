// HomeScreen.js
import Header from "./Header";
import "animate.css";
import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage from "../hooks/useLocalStorage";
import { useAuth } from "@clerk/clerk-react";

function HomeScreen() {
  const { userId } = useAuth();

  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        setSrcDoc(`
          <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
          </html>
        `);
      } catch (error) {
        console.error("Error creating srcDoc:", error);
      }
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <Header />
      {!userId && (
        <div className="bg-gradient animated-gradient h-screen flex items-center justify-center">
          <div className="text-center animate__animated animate__fadeIn">
            <h1 className="text-4xl font-bold mb-4 text-white m-[-200px]">
              Welcome to A<sup>2</sup> Code Editor
            </h1>
            <p className="text-lg mb-8 text-white">
              Your go-to editor for coding excellence!
            </p>
            {!userId && (
              <p className="text-lg mb-8 text-white">
                You first need to sign in or sign up to use the A<sup>2</sup>{" "}
                Code Editor! Thank you...
              </p>
            )}
          </div>
        </div>
      )}

      {userId && (
        <>
          <div className="animated-gradient pane top-pane">
            <Editor
              language="xml"
              displayName="HTML"
              value={html}
              onChange={setHtml}
            />
            <Editor
              language="css"
              displayName="CSS"
              value={css}
              onChange={setCss}
            />
            <Editor
              language="javascript"
              displayName="JS"
              value={js}
              onChange={setJs}
            />
          </div>
          <div className="animated-gradient pane">
            <iframe
              srcDoc={srcDoc}
              title="output"
              sandbox="allow-scripts"
              frameBorder="0"
              width="100%"
              height="100%"
            />
          </div>
        </>
      )}
    </>
  );
}

export default HomeScreen;
