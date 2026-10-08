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
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '110px 24px 120px',
        }}
      >
        <p
          style={{
            fontSize: '0.75rem',
            letterSpacing: '0.16em',
            fontWeight: 700,
            opacity: 0.5,
            marginBottom: '20px',
          }}
        >
          TECHNICAL DOCUMENTATION · OPEN ACCESS API
        </p>

        <h1
          style={{
            fontSize: 'clamp(3rem, 7vw, 5.5rem)',
            lineHeight: 0.98,
            letterSpacing: '-0.04em',
            marginBottom: '30px',
            maxWidth: '850px',
          }}
        >
          Cleveland Museum
          <br />
          of Art API
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            lineHeight: 1.7,
            maxWidth: '680px',
            opacity: 0.75,
            marginBottom: '40px',
          }}
        >
          Technical documentation for accessing artwork and exhibition data
          through the Cleveland Museum of Art's public API.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '14px',
            flexWrap: 'wrap',
          }}
        >
          <Link
            className="button button--primary button--lg"
            to="/docs/intro"
          >
            Read the documentation
          </Link>

          <a
            className="button button--secondary button--lg"
            href="https://openaccess-api.clevelandart.org/"
          >
            Explore the API
          </a>
        </div>

        <div
          style={{
            marginTop: '100px',
            paddingTop: '30px',
            borderTop: '1px solid var(--ifm-color-emphasis-200)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '40px',
          }}
        >
          <div>
            <strong>Artworks</strong>
            <p style={{ opacity: 0.65 }}>
              Search and retrieve artwork records.
            </p>
          </div>

          <div>
            <strong>Exhibitions</strong>
            <p style={{ opacity: 0.65 }}>
              Explore exhibition data from the museum.
            </p>
          </div>

          <div>
            <strong>REST API</strong>
            <p style={{ opacity: 0.65 }}>
              Work with simple HTTP requests and JSON responses.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}