'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'system-ui, sans-serif', background: '#0a0e27', color: '#e5e7eb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '2rem', maxWidth: '500px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#c9a84c', marginBottom: '1rem' }}>
            Something went wrong
          </h2>
          <p style={{ color: '#9ca3af', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            The page encountered an error. This is often caused by a browser extension (such as a crypto wallet).
            Please try disabling browser extensions or refreshing the page.
          </p>
          <button
            onClick={() => reset()}
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
          <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', color: '#6b7280' }}>
            Error: {error?.message?.substring(0, 100) || 'Unknown error'}
          </p>
        </div>
      </body>
    </html>
  )
}
