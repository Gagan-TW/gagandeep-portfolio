import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
    {
    title: 'Write Docs Like a Pro',
    Svg: require('@site/static/img/writing-online.svg').default,
    description: (
      <>
        Master the rules that make docs clear and developer-friendly.
        Structure, style, and consistency all explained with real examples.
      </>
    ),
  },
  {
    title: 'Learn to Work Like a Developer',
    Svg: require('@site/static/img/docs-to-code.svg').default,
    description: (
      <>
       Git, REST APIs, Python, SQL, and Docs-as-Code are the skills
technical writers need today. Explained by a writer, for writers.
      </>
    ),
  },
  {
    title: 'Be the Writer Developers Want',
    Svg: require('@site/static/img/coding-assistant.svg').default,
    description: (
      <>
        Read the repo, test the API, and catch issues before they become bugs.
    Be the part of a team that grows together.
      </>
    ),
  },
  {
  title: 'Always Learning. Always Building.',
  Svg: require('@site/static/img/still-building.svg').default,
  description: (
    <>
      I learn, I build, and I document everything. Come here often. This site is for writers
      who never stop learning.
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
