import React, { Fragment } from 'react';
import Layout from './layout';

export default function Index({ title, link, orderNumber, amount }) {
  return (
    <Layout title={ title }>
      <form method="POST">
        <label htmlFor="orderNumber">Case Ref</label>
        <input required type="text" name="orderNumber" id="orderNumber" defaultValue={orderNumber} />
        <label htmlFor="amount">Payment Amount</label>
        <div className="currency-wrapper">
          <span>£</span>
          <input required type="number" step="0.01" name="amount" id="amount" defaultValue={amount} />
        </div>
        <input type="submit" value="Generate link" />
        <a href="/"> Clear</a>
      </form>
      {
        link && (
          <Fragment>
            <hr />
            <label>Payment link:</label>
            <article className="card">
              <header>
                <h3 className="link" id="link">{ link }</h3>
              </header>
            </article>
          </Fragment>
        )
      }
      <p id="message"></p>
    </Layout>
  )
}
