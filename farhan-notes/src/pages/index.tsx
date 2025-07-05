import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// SVG Icons
const NotesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureIcon}>
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
  </svg>
);

const BlogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureIcon}>
    <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
    <path d="M2 2l7.586 7.586"></path>
    <circle cx="11" cy="11" r="2"></circle>
  </svg>
);

const CoffeeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureIcon}>
    <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
    <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
    <line x1="6" y1="1" x2="6" y2="4"></line>
    <line x1="10" y1="1" x2="10" y2="4"></line>
    <line x1="14" y1="1" x2="14" y2="4"></line>
  </svg>
);

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.featureIcon}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

type FeatureItem = {
  title: string;
  Icon: React.ComponentType;
  description: string;
  to: string;
  buttonText: string;
  className?: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Knowledge Base',
    Icon: NotesIcon,
    description: 'Explore my collection of notes, tutorials, and technical documentation.',
    to: '/docs/intro',
    buttonText: 'Browse Notes',
    className: styles.notesCard,
  },
  {
    title: 'Blog',
    Icon: BlogIcon,
    description: 'Read my thoughts, experiences, and insights on various tech topics.',
    to: '/blog',
    buttonText: 'Read Blog',
    className: styles.blogCard,
  },
  {
    title: 'Support My Work',
    Icon: CoffeeIcon,
    description: 'If you find my content helpful, consider buying me a coffee.',
    to: 'https://ko-fi.com/itsfarhan',
    buttonText: 'Buy Me a Coffee',
    className: styles.coffeeCard,
  },
  {
    title: 'GitHub',
    Icon: GithubIcon,
    description: 'Check out my open source projects and contributions.',
    to: 'https://github.com/itsfarhan',
    buttonText: 'View GitHub',
    className: styles.githubCard,
  },
];

function Feature({ title, Icon, description, to, buttonText, className }: FeatureItem) {
  return (
    <div className={clsx('col col--6', styles.featureCard, className)}>
      <div className={styles.featureContent}>
        <div className={styles.featureIconWrapper}>
          <Icon />
        </div>
        <div className={styles.featureText}>
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
          <div>
            <Link
              className={clsx('button button--secondary', styles.featureButton)}
              to={to}>
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/intro">
            Start Exploring
          </Link>
          <Link
            className="button button--outline button--lg"
            to="https://farhanahmed.pro/home">
            Back to Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}>
      <HomepageHeader />
      <main className={styles.mainContent}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
