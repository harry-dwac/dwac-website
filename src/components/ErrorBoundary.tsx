'use client'

import { Component, ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          textAlign: 'center',
          padding: '3rem 1.5rem',
          maxWidth: '500px',
          margin: '0 auto',
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c9a84c', marginBottom: '1rem' }}>
            Something went wrong
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '1rem', lineHeight: '1.6', fontSize: '0.9rem' }}>
            A browser extension may be interfering with the page. Please try:
          </p>
          <ul style={{ color: '#9ca3af', fontSize: '0.85rem', textAlign: 'left', marginBottom: '1.5rem', listStyle: 'disc', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Disable browser extensions (especially crypto wallets like MetaMask)</li>
            <li style={{ marginBottom: '0.5rem' }}>Open this page in an Incognito/Private window</li>
            <li>Use a different browser (Chrome, Edge, Firefox)</li>
          </ul>
          <button
            onClick={() => this.setState({ hasError: false, error: undefined })}
            style={{
              background: 'linear-gradient(135deg, #c9a84c, #d4b85c)',
              color: '#0a0e27',
              fontWeight: 'bold',
              padding: '0.75rem 2rem',
              borderRadius: '0.375rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
            }}
          >
            TRY AGAIN
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
