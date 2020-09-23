import React from 'react';

export default function Layout({ children, title }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>{ title }</title>
        <link rel="stylesheet" href="css/style.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <header>
          <h1>{ title }</h1>
        </header>
        <section className="main">
          <article className="card">
            { children }
          </article>
        </section>
        <script src="js/copy.js"></script>
      </body>
    </html>
  )
}
