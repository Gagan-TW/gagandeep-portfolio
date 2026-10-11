import Layout from '@theme/Layout';
import styles from './about.module.css';

export default function About() {
  return (
    <Layout
      title="About Gagandeep Kaur"
      description="Technical writer, former professor, and lifelong teacher who learned to code to help other writers do the same.">
      <main className={styles.aboutPage}>
        <div className={styles.container}>

          <h1 className={styles.hook}>
            I did not start as a technical writer.<br />
            I started as a teacher who could not stop explaining things.
          </h1>

          <p>
            I spent almost a decade in front of a classroom. M.Tech in ECE,
            Assistant Professor, curriculum designer. I taught electronics,
            built course material from scratch, and wrote every guide, note,
            and tutorial my students needed. Nobody asked me to. I just could
            not help it.
          </p>

          <p>
            That teaching instinct never left. It just found a new home.
          </p>

          <p>
            When I moved into content writing and then technical writing, I
            brought the same habit with me. Explain it clearly. Break it down.
            Make it make sense to someone meeting it for the first time. I
            worked on REST API references, user guides, SOPs, release notes,
            knowledge bases, and onboarding guides. I learned to work in
            Docs-as-Code pipelines, write in Markdown, version content in Git,
            and document APIs using OpenAPI, Swagger, Postman, and Stoplight.
            I wrote for developers, government teams, product managers, and
            new joiners who needed to get up to speed fast.
          </p>

          <div className={styles.codeBlock}>
            <p className={styles.codeLabel}>Here is a small peek at how I think:</p>
            <pre>{`Before coding:
  Step 1. Ask the developer what the API does.
  Step 2. Wait for the developer to find time.
  Step 3. Hope the explanation made sense.
  Step 4. Write and guess the rest.

After coding:
  Step 1. Open Postman.
  Step 2. Hit the endpoint yourself.
  Step 3. See the response.
  Step 4. Write it. No waiting. No guessing.`}</pre>
            <p className={styles.codeCaption}>That one shift changes everything.</p>
          </div>

          <p>
            In 2026, life asked me to slow down. Family comes first. I said yes.
          </p>

          <p>
            But a quieter pace turned into something unexpected. I used that
            time to go deeper into the technical side. Backend development.
            Python. REST APIs. AI and machine learning. Things I had always
            worked around but never fully worked through. I was finally
            learning them properly.
          </p>

          <p>
            And then my teaching soul showed up again.
          </p>

          <p className={styles.pullQuote}>
            Why learn alone when you can bring others with you?
          </p>

          <p>
            That is why this site exists. Not to prove I know everything. To
            document what I am learning as I learn it, in the language a writer
            actually understands. Every page here is written by a technical
            writer, for technical writers who want to stop being kept out of
            the technical conversation.
          </p>

          <p>
            You do not need a computer science degree. You need curiosity,
            consistency, and the right guide.
          </p>

          <p className={styles.closing}>
            Welcome. Let us figure this out together.
          </p>

        </div>
      </main>
    </Layout>
  );
}