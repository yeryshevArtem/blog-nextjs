import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src="/images/site/artem.png" alt="An image showing Artem" width={600} height={600} />
            </div>
            <h1>Hi, I'm Artem</h1>
            <p>
                I blog about development, especially about Frontend Frameworks.
            </p>
        </section>
    );
}

export default Hero;
