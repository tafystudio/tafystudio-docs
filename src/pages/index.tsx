import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started with Tafy Studio - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Complete documentation for the Tafy Studio platform">
      <HomepageHeader />
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>Easy to Use</h3>
                  <p>
                    Tafy Studio was designed from the ground up to be easily installed and
                    used to get your project up and running quickly.
                  </p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>Focus on What Matters</h3>
                  <p>
                    Tafy Studio lets you focus on your project. We handle the complexity
                    so you can concentrate on building great applications.
                  </p>
                </div>
              </div>
              <div className={clsx('col col--4')}>
                <div className="text--center">
                  <h3>Powered by Modern Tech</h3>
                  <p>
                    Built with the latest technologies and best practices to ensure
                    performance, reliability, and developer experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}