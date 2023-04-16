import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <nav className='space-x-4'>
    <Link href="/first">First</Link>
    <Link href="/second">Second</Link>
    <Link href="/third">Third</Link>
  </nav>
    <Component {...pageProps} />
  </>
}
