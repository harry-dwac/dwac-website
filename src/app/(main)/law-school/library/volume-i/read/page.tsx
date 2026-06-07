'use client'
import { useEffect } from 'react'

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace('/library/book/vol1/')
  }, [])
  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <p>This page has moved. <a href="/library/book/vol1/">Click here</a> if you are not redirected.</p>
    </div>
  )
}
