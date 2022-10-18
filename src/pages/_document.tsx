import { Html, Head, Main, NextScript } from 'next/document'
import DeferNextScript from '../helpers/NextScript'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" /> 
      </Head>
      <body>
        <Main />
        <DeferNextScript />
      </body>
    </Html>
  )
}
