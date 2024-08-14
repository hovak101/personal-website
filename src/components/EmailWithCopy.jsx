import React from "react";

const EmailWithCopy = () => {
  const email = "hovak101@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email).then(() => {
      alert("Email copied to clipboard!");
    }).catch(err => {
      console.error('Could not copy text: ', err);
    });
  };

  return (
    <div style={{ display: "flex", justifyContent:"center", alignItems: "center" }}>
      <a href={`mailto:${email}`}>{email}</a>
      <span
        onClick={copyToClipboard}
        style={{ cursor: "pointer", marginLeft: "5px" }}
        role="img"
        aria-label="copy"
      >
        📋
      </span>
    </div>
  );
};

export default EmailWithCopy;