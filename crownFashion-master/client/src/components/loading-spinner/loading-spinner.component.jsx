import React from "react";
import Spinner from "../spinner/spinner.component";

const LoadingSpinner = (Component) => ({ isLoading, ...otherProps }) =>
  isLoading ? (
    <Spinner />
  ) : (
    <Component {...otherProps} />
  );

export default LoadingSpinner;
