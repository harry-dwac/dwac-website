'use client'
import { useEffect } from 'react'

export default function RedirectPage() {
  useEffect(() => {
    window.location.replace('/law-school/')
  }, [])
  return (
    <div style={{padding: '2rem', textAlign: 'center'}}>
      <p>This page has moved. <a href="/law-school/">Click here</a> if you are not redirected.</p>
    </div>
  )
}
