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
			<section className="pt-[5em] container mx-auto relative">
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
			<div>
				<section className=" pt-[3em] w-[90%] max-w-[1200px] container mx-auto">
					<motion.div
						viewport={{ once: true }}
						initial={{ y: -10, opacity: 0 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.2, delay: 0.5 }}
						className="w-[90%] mx-auto lg:w-full flex flex-col col-span-5"
					>
						<div className="flex gap-[12px]">
							<div className="w-[50%]">
								<h1 className="font-semibold text-effect mb-10 border-b-[3px] border-[white]">
									Skills
								</h1>
							</div>

							<div className="w-[50%]">
								<h1 className="font-semibold text-effect mb-10 ">
									About me
								</h1>
								<p className="text-[24px]">
									With a passion and dedication to the new era
									of web technology, my journey as a developer
									commenced with React and Node.js based on a
									profound comprehension of Javascript and
									Typescript. As the technological landscape
									evolved, so did my skills. I embraced
									cutting-edge technologies with enthusiasm,
									including Next.js, Django, data science,
									Python, artificial intelligence, and the
									dynamic world of DevOps. My expertise
									expanded to encompass a repertoire of
									powerful tools and platforms, from the likes
									of Git, Jenkins, and Docker, to the vast
									universe of cloud computing services,
									featuring AWS, Azure, and Heroku. The
									increasing prominence of blockchain
									technologies has inspired me to deeply
									engage with the field of blockchain. I have
									developed a strong understanding of the
									fundamental principles of blockchain,
									including its architecture, cryptography,
									and various solutions for managing chains.
									Additionally, I have gained practical
									experience working with Ethereum, smart
									contracts, cryptocurrencies, as well as
									frameworks like Web3.js and ethers.js.
									Demonstrate adeptness at coordinating
									large-scale projects and resolving emergent
									technical issues. Leverage seasoned
									communication skills to transform strategic
									vision into direct action, as supported by
									collaborations with associated management
									teams, stakeholders, and C-level executives.
									<br />
								</p>
							</div>
						</div>
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
			</div>
		</Layout>
	);
}
