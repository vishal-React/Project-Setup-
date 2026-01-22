import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught:", error, info);
  }

  render() {
    const { hasError, error } = this.state;
    const { fallback } = this.props;

    if (hasError) {
      // ✅ fallback can be JSX or a function
      return typeof fallback === "function"
        ? fallback({ error })
        : fallback || <h2>Something went wrong.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
