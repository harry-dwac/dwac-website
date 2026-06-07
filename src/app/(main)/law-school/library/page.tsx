'use client'
import { useEffect } from 'react'

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace('/library/')
  }, [])
  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <p>This page has moved. <a href="/library/">Click here</a> if you are not redirected.</p>
    </div>
  )
}
