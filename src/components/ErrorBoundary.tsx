"use client";

import React from 'react';

interface ErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
    { children: React.ReactNode },
    ErrorBoundaryState
> {
    constructor(props: { children: React.ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
    }

    handleReset = () => {
        localStorage.removeItem('strategize_life_data');
        this.setState({ hasError: false });
        window.location.reload();
    };

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex items-center justify-center p-6" style={{ background: '#0a0a0c', color: '#f0f0f5' }}>
                    <div className="text-center max-w-md">
                        <h1 className="text-3xl font-bold mb-4">Algo sali&oacute; mal</h1>
                        <p className="text-gray-400 mb-8">
                            Ocurri&oacute; un error inesperado. Puedes reiniciar la aplicaci&oacute;n para volver a empezar.
                        </p>
                        <button
                            onClick={this.handleReset}
                            className="btn-primary"
                        >
                            Reiniciar aplicaci&oacute;n
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
