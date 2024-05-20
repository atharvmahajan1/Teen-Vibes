import React, { useState, useEffect } from "react";
import SideNav from "../layout/SideNav";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const Home = () => {
  const [fileToogle, setFileToogle] = useState(false);
  const [textToogle, setTextToogle] = useState(true);
  const [wordCount, setWordCount] = useState(0);
  const [letterCount, setLetterCount] = useState(0);
  const [fileName, setFileName] = useState("");
  const [response, setResponse] = useState("Results will show up here...");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = "";
  url = "http://localhost:4000";
  //url = "https://synopsis-ai-fullstack-production.up.railway.app";
  url = "https://teen-vibes-production.up.railway.app";

  const textSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${url}/api/v1/openaitext`,
        { text },
        {
          headers: {
            "Content-Type": "application/json",
            // Add any additional headers if needed
          },
        }
      );
      setResponse(data);
    } catch (error) {
      toast.error("Error analyzing text");
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name); // Update fileName state with the name of the selected file
  };
  const handleFileSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("file", e.target[0].files[0]);
      const { data } = await axios.post(`${url}/api/v1/openaifile`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          // Add any additional headers if needed
        },
      });
      setResponse(data);
    } catch (error) {
      console.log(error);
      toast.error("Error analyzing file");
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <SideNav />
      <ToastContainer />
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
                placeholder="Start typing here..."
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  handleTextChange(e);
                }}
              ></textarea>
              <div className="submit-cont">
                <button className="cta" type="submit" disabled={loading}>
                  {loading ? "Analyzing..." : "Analyze Text"}
                </button>
                <p className="limit-cont">
                  <span className="current-limit-count">{letterCount}</span>
                  <span className="limit">/2000 characters</span>
                </p>
              </div>
            </form>
          </div>
        )}
        {fileToogle && (
          <div className="input-area">
            <form onSubmit={handleFileSubmit}>
              <div className="custom-file-input">
                {/* ! to make it dynamic */}

                <label for="file-input-field">
                  {fileName ? fileName : ` Click here to select a file`}
                </label>
                <input
                  className="file-input-field"
                  type="file"
                  id="file-input-field"
                  // accept=".txt, .pdf, .doc, .docx"
                  accept=".txt"
                  maxFileSize="1Mb"
                  onChange={handleFileChange}
                />
              </div>
              <div className="submit-cont">
                <button className="cta" type="submit" disabled={loading}>
                  {loading ? "Analyzing File.." : "Analyze File"}
                </button>
                <p className="limit-cont">Maximum file size: 1Mb</p>
              </div>
                       
            </form>
          </div>
        )}
        <div className="output-area">
          <h3 className="output-heading">
            Report by <strong>TeenVibes</strong>
          </h3>
          <p className="output-report body-text">
            {response && response.completion && response.completion.choices
              ? response.completion.choices[0].text // Render choices[0].text if response exists
              : "Results will show up here..."}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
