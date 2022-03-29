import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	return {
		props: {
			allPostsData,
		},
	};
}

const Home: NextPage = ({ allPostsData }: any) => {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={"mb-8"}>
				<p>
					Este par son mi principales motivaciones para seguir adelante , my
					tesoros 💘{" "}
				</p>
				<p className="mt-8">
					(This is a sample website - you’ll be building a site like this on{" "}
					<Link href={"/posts/first-post"}>our Next.js tutorial</Link>.)
				</p>
			</section>

			<section className={""}>
				<h2 className={"mb-4"}>Blog</h2>
				<ul className={""}>
					{allPostsData.map(({ id, date, title }: any) => (
						<li className={"my-2"} key={id}>
							<Link href={`/posts/${id}`}>{title}</Link>
							<br />
							{id}
							<br />
							{date}
						</li>
					))}
				</ul>
			</section>
		</Layout>
	);
};

export default Home;
