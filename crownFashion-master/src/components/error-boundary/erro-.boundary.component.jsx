import React, { Component } from "react";
import {
  ErrorImageContainer,
  ErrorImageOverlay,
  ErrorImageText,
} from "./error-boundary.styles";

class ErrorBoundary extends Component {
  state = {
    errorOccured: false,
  };

  static getDerivedStateFromError(error) {
    //process the error
    return { errorOccured: true };
  }

  componentDidCatch(error, info) {
    console.error(`${error} \n ${info}`);
  }

  render() {
    if (this.state.errorOccured) {
      return (
        <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/DWO5Hzg.png" />
          <ErrorImageText>This is Awkward...Try again</ErrorImageText>
        </ErrorImageOverlay>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
