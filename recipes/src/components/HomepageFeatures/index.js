import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'You want to cook',
    Svg: require('@site/static/img/want_to_cook.svg').default,
    description: (
      <>
        Cooking is fun! And you need to eat stuff to survive. I have a folder of bookmarks to random sites for whenever I need to remember how to make something. That worked great until the folder got big and the sites started to suck...
      </>
    ),
  },
  {
    title: 'But recipe sites suck!',
    Svg: require('@site/static/img/recipe_sites_suck.svg').default,
    description: (
      <>
        I do not mind ads on the sites people make, but I do mind sites with overly aggressive ads where you can't see the main content. 
      </>
    ),
  },
  {
    title: 'Welcome to my self-hosted Cookbook',
    Svg: require('@site/static/img/online_cookbook.svg').default,
    description: (
      <>
        Rather than make a physical cookbook, I have made a website to share things with. Thanks to Docusaurus for providing a content-first approach to frontend design for us backend engineers.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
