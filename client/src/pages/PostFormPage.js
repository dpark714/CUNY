import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import ErrorAlert from "../components/ErrorAlert";

function PostFormPage() {
  const [content, setContent] = useState("");
  const [file, setFile] = useState(null); // Ensure setFile is defined here
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", content);
      if (file) {
        formData.append("file", file);
      }

      let response = await fetch("/api/micro_posts", {
        method: "POST",
        credentials: "include",
        body: formData,
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

  if (success) return <Navigate to="/" />;

  return (
    <div className="col-10 col-md-8 col-lg-7">
      {error && <ErrorAlert details={"Failed to save the content"} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
           Message
          </label>
          <input
            type="text"
            id="content"
            className="form-control"
            value={content}
            onChange={handleContentChange}
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
            className="form-control"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save Post
        </button>
      </form>
    </div>
  );
}

export default PostFormPage;
