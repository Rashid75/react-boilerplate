import React from "react";
import { FilePond } from "react-filepond";
import PropTypes from "prop-types";

const ProductImage = ({ setFiles }) => {
  return (
    <FilePond
      allowMultiple={false}
      onupdatefiles={setFiles}
      labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
    />
  );
};

ProductImage.propTypes = {
  setFiles: PropTypes.func.isRequired
};
export default ProductImage;
