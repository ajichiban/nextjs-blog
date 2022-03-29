import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

interface LayoutProps {
	children: JSX.Element | JSX.Element[];
	home?: boolean;
}

const name = "aurendev";
export const siteTitle = "Next.js Sample Website";

export default function Layout({ children, home }: LayoutProps) {
	return (
		<div className="max-w-lg px-4 mx-auto">
			<Head>
				<link rel="icon" href="/favicon.ico" />
				<meta
					name="description"
					content="Learn how to build a personal website using Next.js"
				/>
				<meta
					property="og:image"
					content={`https://og-image.vercel.app/${encodeURI(
						siteTitle
					)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
				/>
				<meta name="og:title" content={siteTitle} />
				<meta name="twitter:card" content="summary_large_image" />
			</Head>
			<header className={'flex items-center justify-center flex-col'}>
				{home ? (
					<>
						<div className="block rounded-full overflow-hidden h-52 w-52 relative">
              <Image
                priority
                src="/images/my-tresures.jpg"
                className={'object-cover origin-center w-full h-full'}
                layout="fill"
                alt={name}
              />
            </div>
						<h1 className={''}>{name}</h1>
					</>
				) : (
          
					<>
						<Link href="/">
							<a className="block rounded-full overflow-hidden h-16 w-16">
								<Image
									priority
									src="/images/my-tresures.jpg"
									className={'object-cover origin-center w-full h-full'}
									height={108}
									width={108}
									alt={name}
								/>
							</a>
						</Link>
						<h2 className={''}>
							<Link href="/">
								<a className={''}>{name}</a>
							</Link>
						</h2>
					</>
				)}
			</header>

			<main>{children}</main>
			{!home && (
				<div className={''}>
					<Link href="/">
						<a>← Back to home</a>
					</Link>
				</div>
			)}
		</div>
	);
}
