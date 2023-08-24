import Layout from "@components/layout";
import { NextSeo } from "next-seo";

import { motion } from "framer-motion";
import clsx from "clsx";
import { socials } from "../config";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

export default function About(): JSX.Element {
	return (
		<Layout>
			<NextSeo title="About" />
			<section className="pt-[5em] container mx-auto">
				<motion.h1
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}
					className={clsx(
						"title mx-auto text-effect font-semibold text-center"
					)}
				>
					I'm Andres Lopez.
				</motion.h1>
			</section>
			<section className=" pt-[3em] w-[90%] max-w-[1000px] container mx-auto">
				<motion.div
					viewport={{ once: true }}
					initial={{ y: -10, opacity: 0 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.5 }}
					className="w-[90%] mx-auto lg:w-full flex flex-col col-span-5"
				>
					<h1 className="font-semibold text-effect mb-10 ">
						I'm a proficient web3 developer with a passion for
						building
					</h1>
					<p>
						An adept web3 developer with over 9 years of experience,
						proficient in crafting, building, and implementing
						comprehensive Blockchain and Full Stack solutions for
						businesses of all scales. Boasting a rich history of
						initiating projects right from the outset, utilizing
						JavaScript, React.js, Node.js, Python, and Solidity, I
						am a performance-oriented professional. My expertise
						encompasses a deep understanding of blockchain
						fundamentals, architectural intricacies, cryptography,
						and chain management solutions. Beyond technical
						prowess, I excel in orchestrating large-scale projects,
						leading diverse teams, and effectively addressing
						unforeseen technical challenges. My communication
						finesse serves as a catalyst, transforming strategic
						visions into actionable realities. This prowess is
						highlighted by seamless collaborations with management
						teams, stakeholders, and esteemed C-level executives.
						<br />
					</p>
					<div className="pt-[2em] flex-col sm:flex-row flex gap-2 h6 font-semibold">
						<motion.a
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.7 }}
							href={socials.github.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-4 items-center rounded border px-3 py-4 w-full sm:w-fit border-secondary-400 hover:bg-secondary-600"
						>
							<Github />
							GitHub
							<ArrowUpRight className="ml-auto sm:ml-1" />
						</motion.a>
						<motion.a
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.8 }}
							href={socials.linkedin.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-4 items-center rounded border px-3 py-4 w-full sm:w-fit border-secondary-400 hover:bg-secondary-600"
						>
							<Linkedin />
							LinkedIn
							<ArrowUpRight className="ml-auto sm:ml-1" />
						</motion.a>
						<motion.a
							viewport={{ once: true }}
							initial={{ y: -10, opacity: 0 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.2, delay: 0.9 }}
							href={socials.email.link}
							target="_blank"
							rel="noopener noreferrer"
							className="flex gap-4 items-center rounded border px-3 py-4 w-full sm:w-fit border-secondary-400 hover:bg-secondary-600"
						>
							<Mail />
							Email
							<ArrowUpRight className="ml-auto sm:ml-1" />
						</motion.a>
					</div>
				</motion.div>
			</section>

			<motion.section
				viewport={{ once: true }}
				initial={{ y: -10, opacity: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 1 }}
				className="pt-[10em] h4 mx-auto max-w-[700px] w-[90%]"
				id="work"
			>
				<h1 className="title1 font-semibold text-effect mb-10 text-center ">
					Professional Experience
				</h1>
				<h2 className="==AppRecord=="></h2>
			</motion.section>
		</Layout>
	);
}
