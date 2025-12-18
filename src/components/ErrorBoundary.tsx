import { Component, ErrorInfo, ReactNode } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props {
  children: ReactNode;
  t?: (bg: string, en: string, it: string) => string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundaryClass extends Component<Props, State> {
  public state: State = { hasError: false };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      const t = this.props.t || ((bg: string) => bg);
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {t("Нещо се обърка", "Something went wrong", "Qualcosa è andato storto")}
            </h1>
            <p className="text-muted-foreground mb-4">
              {t("Моля, опреснете страницата", "Please refresh the page", "Per favore, ricarica la pagina")}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-primary text-primary-foreground px-4 py-2 rounded"
            >
              {t("Опресни", "Refresh", "Ricarica")}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Wrapper to provide translation function to class component
const ErrorBoundary = ({ children }: { children: ReactNode }) => {
  const { t } = useLanguage();
  return <ErrorBoundaryClass t={t}>{children}</ErrorBoundaryClass>;
};

export default ErrorBoundary;
