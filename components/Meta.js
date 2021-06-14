import React from "react";

const Meta = ({ title, body }) => {
  return (
    <>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={body} />
      <meta key="og:title" name="og:title" content={title} />
      <meta key="og:description" name="og:description" content={body} />
    </>
  );
};

export default Meta;
