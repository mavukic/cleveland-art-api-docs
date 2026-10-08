import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Cleveland Museum of Art API"
      description="Technical documentation for the Cleveland Museum of Art Open Access API"
    >
      <main
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          padding: '100px 24px',
        }}
      >
        <p style={{ opacity: 0.6, fontWeight: 600 }}>
          API DOCUMENTATION
        </p>

        <h1 style={{ fontSize: '3.5rem', marginBottom: '24px' }}>
          Cleveland Museum of Art
          <br />
          Open Access API
        </h1>

        <p style={{ fontSize: '1.25rem', lineHeight: 1.6 }}>
          Technical documentation for accessing artwork and exhibition
          data through the Cleveland Museum of Art's public API.
        </p>

        <div style={{ marginTop: '40px' }}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            Read the documentation
          </Link>
        </div>
      </main>
    </Layout>
  );
}