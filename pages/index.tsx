import type {ReactNode} from 'react'; 
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageHeader from '@site/src/components/HomepageHeader';
import Curriculum from '@site/src/components/Curriculum';

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sito Web personale di Giada Silenzii, Psicologa">
      <HomepageHeader />
      <main>
        <Curriculum
        items = {[
          {title: "Laurea Magistrale", description: "test"},
          {title: "Laurea Triennale", description:"test2"},
          {title: "Diploma di Maturità", description: "test3"}
        ]}
        ></Curriculum>
        
      </main>
    </Layout>
  );
}
