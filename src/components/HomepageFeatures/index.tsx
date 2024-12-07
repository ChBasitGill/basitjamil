import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Explorer at Heart 🌍",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        I’m a wanderer who loves to travel and immerse myself in the beauty of
        nature. Whether it's hiking through lush forests, cruising on serene
        waters, or capturing breathtaking landscapes, every adventure fuels my
        soul and creativity.
      </>
    ),
  },
  {
    title: "Dedication Extraordinaire 💻",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        In the office, I’m all about focus and delivering results. I thrive on
        taking complex challenges and turning them into seamless solutions with
        precision, teamwork, and a commitment to excellence. My workspace
        mantra? "Stay sharp, stay driven!"
      </>
    ),
  },
  {
    title: "Giving Back to the Community ❤️",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        I believe in using my skills to make a difference. Through mentorship,
        collaborative projects, and open-source contributions, I strive to give
        back to the community and help others grow. Empowering others is not
        just a passion—it's my way of paying it forward.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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

export default function HomepageFeatures(): JSX.Element {
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
