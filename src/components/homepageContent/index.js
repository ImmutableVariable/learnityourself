import styles from './styles.module.css';

export default function HomepageContent() {
  return (
    <section className={styles.contentContainer}>
      <div className="container">
        <div className="row">
          <div className="col">
            <p> Welcome! We are a website offering books on language and topics that we find interesting! Currently, we are developing a python curriculum. Please visit our <a href="/docs/python/introduction">python introduction</a> page to get started! </p>
            <h2> Why choose us? </h2>
            <ul>
              <li> <b>Free</b> - We are completely free. Feel free to use our content, reupload it, download it, etc. </li>
              <li> <b>Open Source</b> - You can find our source code on <a href="https://github.com/learnityourself/learnityourself">github</a>. Along with this, you can actually contribute to the project! </li>
              <li> <b>Community Supported</b> - We are a community of people who are passionate about learning and sharing knowledge. </li>
              <li> <b>Self Directed Learning</b> - You can decide when, how often, and what topics that you want to learn... we wont stop you </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}