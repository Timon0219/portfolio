import { pageview } from "@lib/gtag";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import * as GLOBE from "@lib/vanta";
import * as THREE from "three";
import "../styles/globals.css";

console.log("123123123123", GLOBE);
export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const router = useRouter();
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const handleRouteChange = (url: unknown) => {
			pageview(url);
		};
		router.events.on("routeChangeComplete", handleRouteChange);

		if (!vantaEffect) {
			setVantaEffect(
				GLOBE({
					el: vantaRef.current,
					THREE: THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color2: 0xffffff,
				})
			);
		}
		return () => {
			router.events.off("routeChangeComplete", handleRouteChange);
			if (vantaEffect) setVantaEffect(null);
		};
	}, [router.events, vantaEffect]);
	return (
		<>
			<div ref={vantaRef} className="vanta"></div>
			<DefaultSeo
				title="Portfolio"
				description="I'm Andres Lopez, a proficient full stack developer with 8 years of experienc as an IT professional."
				titleTemplate="Andres Lopez • %s"
				openGraph={{
					type: "website",
					locale: "en",
					url: "https://snowportfolio-skpq.vercel.app/",
					site_name: "Andres Lopez's Portfolio",
					profile: {
						firstName: "Andres",
						lastName: "Lopez",
						username: "Snow",
					},
				}}
			/>
			<Head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}
