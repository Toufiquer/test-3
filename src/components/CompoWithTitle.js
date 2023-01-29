import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const CompoWithTitle = ({ children, title }) => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <title>{title}</title>
        </Helmet>
      </HelmetProvider>
      {children}
    </div>
  );
};

export default CompoWithTitle;
