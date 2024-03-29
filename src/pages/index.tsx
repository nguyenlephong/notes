import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Head from '@docusaurus/Head';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            target={"_blank"}
            className="button button--secondary button--lg"
            to="https://nguyenlephong.github.io/">
            View My Profile
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <React.Fragment>
      <Head>
        {/**<!--Global site tag (gtag.js) - Google Analytics -->*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K8SCKY9VHB" />
        <script>
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K8SCKY9VHB');`}
        </script>
        <script>
          {`
            !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_LpZ2tDzflwbSRhzgx5vYOfe1AXvqqdXVDGYuGTcIsHh',{api_host:'https://app.posthog.com'})
          `}
        </script>
        <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
        {/*<script type="text/javascript">*/}
        {/*  {`docsearch({*/}
        {/*    appId: "VDTYO64TMC",*/}
        {/*    apiKey: "d8c2f0d1cd99e7ee8191f5e857389133",*/}
        {/*    indexName: "nguyenlephongio",*/}
        {/*    debug: false // Set debug to true if you want to inspect the modal});`}*/}

        {/*</script>*/}
      </Head>
      <Layout
        title={`Hello from ${siteConfig.title}`}
        description="Description will go into a meta tag in <head />">
        <HomepageHeader />
        <main>
          <HomepageFeatures />
        </main>
      </Layout>
    </React.Fragment>
  );
}