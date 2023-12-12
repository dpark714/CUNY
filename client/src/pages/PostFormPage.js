import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";
import "../pages/style/PostFormPage.css";

function PostFormPage() {
  const [data, setData] = useState({ content: "", fileName: "" });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const fieldChanged = (name) => {
    return (event) => {
      let { value } = event.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      let response = await fetch("/api/micro_posts", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: data.content,
          fileName: data.fileName,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error("Server error while creating a new micro post", error);
      setError(true);
    }
  };

  if (success) return <Navigate to="/job" />;

  return (
    <div className="row justify-content-center">
      <div className="col-lg-7 col-md-8 col-sm-10"> {/* Add mx-auto class here */}
        {error && <ErrorAlert details={"Failed to save the content"} />}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="content" className="post-form-label">
              Message
            </label>
            <input
              type="text"
              id="content"
              className="form-control"
              value={data.content}
              onChange={fieldChanged("content")}
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">
              Upload File
            </label>
            <input
              type="file"
              id="file"
              value={data.fileName}
              className="form-control"
              onChange={fieldChanged("fileName")}
            />
          </div>
          <button type="submit" className="btn post-form-button">
            Save Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default PostFormPage;
