import Layout from "@components/layout";
import { NextSeo } from "next-seo";
import React from "react";

import { motion } from "framer-motion";
import Projects from "@components/projects";
import Timeline from "@components/work";
import CTA from "@components/cta";
import WaveText from "@components/wavetext";
function Intro() {
	return (
		<section className="flex flex-col items-center justify-center pt-[5em] container mx-auto">
			<WaveText />
			<motion.p
				initial={{ y: -10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.3 }}
				viewport={{ once: true }}
				className="mt-[2em] h3 text-center mx-auto w-[90%] max-w-[750px]"
			>
				As a proficient full stack developer I always try to contribute
				to the new era of web technologies.
			</motion.p>
		</section>
	);
}

export default function Home(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="Developer" />
			<Intro />
			<Projects />
			<Timeline />
			<CTA />
		</Layout>
	);
}
