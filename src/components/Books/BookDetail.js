import React from "react";
import PropTypes from "prop-types";

const BookDetail = ({ book }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      Book Detail...
    </div>
  );
};

BookDetail.propTypes = {
  book: PropTypes.object.isRequired
};

export default BookDetail;
