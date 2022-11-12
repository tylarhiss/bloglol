import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';
import { Redirect } from '@docusaurus/router';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Beer and Reuben Blog`}
      description="Rating some beer and some reubens. The blog">
      <Redirect to={"/blog"}/>
    </Layout>
  );
}
