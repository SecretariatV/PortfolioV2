import S from "./index.module.scss";
import { IBasicProps } from "@utils/typeUtils";
import { Component, ErrorInfo } from "react";

interface IProps extends IBasicProps {}

interface IState {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error: Error): IState {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h2>Something went wrong.</h2>
          <details className={S.details}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo?.componentStack}
          </details>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
