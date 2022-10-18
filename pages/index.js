import Head from "next/head";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";
import { getFeaturedPosts } from "../lib/posts-util";

function HomePage(props) {
    return (
        <>
            <Head>
                <title>Artem's blog</title>
                <meta name="description" content="I blog about programming and web development" />
            </Head>
            <Hero />
            <FeaturedPosts posts={props.posts} />
        </>
    );
}

export function getStaticProps() {
    const featuredPosts = getFeaturedPosts();

    return {
        props: {
            posts: featuredPosts
        }
    };
};

export default HomePage;
