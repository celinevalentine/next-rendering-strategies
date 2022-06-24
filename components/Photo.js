import React from "react";

const Photo = ({ id, title, url }) => {
  return (
    <div>
      <h1>Photo Details of photo # {id}</h1>
      <p>title: {title}</p>
      <p>{url}</p>
    </div>
  );
};

export default Photo;
