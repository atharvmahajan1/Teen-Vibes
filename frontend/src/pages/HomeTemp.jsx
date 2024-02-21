import React, { useState, useEffect } from "react";
import SideNav from "../layout/SideNav";
import { useDispatch, useSelector } from "react-redux";
import { analyzePrompt } from "../Actions/PromptAction";

const Home = () => {
  const [fileToogle, setFileToogle] = useState(false);
  const [textToogle, setTextToogle] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [response, setResponse] = useState("Results will show up here...");

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // const { loading, error } = useSelector((state) => state.user);
  const { loading, error, analyzedText } = useSelector((state) => state.user);

  const textSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(analyzePrompt(text));
  };
  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Count words
    const words = newText.trim().split(/\s+/);
    setWordCount(words.length === 1 && words[0] === "" ? 0 : words.length);

    // Count letters
    setLetterCount(newText.replace(/\s/g, "").length);
  };
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearErrors" });
    }
  }, [dispatch, error]);

  useEffect(() => {
    if (analyzedText) {
      setResponse(analyzedText);
    }
  }, [analyzedText]);
  return (
    <main>
      <SideNav />
      <div className="content-area">
        <div className="tab-cont">
          <div
            className={`tab ${textToogle ? "active" : ""}`}
            onClick={() => {
              setFileToogle(false);
              setTextToogle(true);
            }}
          >
            Insert Text
          </div>
          <div
            className={`tab ${fileToogle ? "active" : ""}`}
            onClick={() => {
              setFileToogle(true);
              setTextToogle(false);
            }}
          >
            Upload File
          </div>
        </div>
        {textToogle && (
          <div className="input-area">
            <form onSubmit={textSubmitHandler}>
              <textarea
                className="text-input-area"
                id=""
                placeholder="Start typing here..."
                defaultValue=""
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  handleTextChange(e);
                }}
              ></textarea>
              <div className="submit-cont">
                <button className="cta" type="submit">
                  Analyze Text
                </button>
                <p className="limit-cont">
                  <span className="current-limit-count">{letterCount}</span>
                  <span className="limit">/ 2000 characters</span>
                </p>
              </div>
                       
            </form>
          </div>
        )}
        {fileToogle && (
          <div className="input-area">
            <form onSubmit={""}>
              <div className="custom-file-input">
                {/* ! to make it dynamic */}
                <label for="file-input-field">
                  Click here to select a file
                </label>
                <input
                  className="file-input-field"
                  type="file"
                  id="file-input-field"
                  accept=".txt"
                  maxFileSize="1Mb"
                />
              </div>
              <div className="submit-cont">
                <button className="cta" type="submit">
                  Analyze File
                </button>
                <p className="limit-cont">Maximum file size: 1Mb</p>
              </div>
                       
            </form>
          </div>
        )}
        <div className="output-area">
          {/* <p className="output-placeholder">Results will show up here...</p> */}
          <h3 className="output-heading">
            Report by <strong>TeenVibes</strong>
          </h3>
          <p className="output-report body-text">
            {response ? response : "Results will show up here..."}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
