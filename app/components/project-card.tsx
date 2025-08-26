import { ReactNode } from "react";
import Link from "next/link";
import { Github, ArrowUpRight } from "lucide-react";

export type TechPill = {
	icon: ReactNode;
	label: string;
};

export type ProjectCardProps = {
	title: string;
	description: string;
	tech: TechPill[]; // exactly 4 items expected to render 2x2
	githubHref?: string;
	liveHref?: string;
};

export default function ProjectCard({ title, description, tech, githubHref, liveHref }: ProjectCardProps) {
	return (
		<div className="aspect-square relative overflow-hidden rounded-2xl border border-neutral-300 dark:border-neutral-700 bg-neutral-50 dark:bg-[#0f0f0f] hover:shadow-sm transition-colors">
			<div className="absolute inset-0 p-5 md:p-6 flex flex-col">
				<div className="flex-1 flex flex-col">
					<h3 className="text-neutral-900 dark:text-neutral-100 text-xl font-semibold mb-2 line-clamp-1">{title}</h3>
					<p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed mb-4 line-clamp-3">{description}</p>

					<div className="grid grid-cols-2 gap-2 mb-4">
						{tech.slice(0,4).map((t, idx) => (
							<div key={idx} className="flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900 px-3 py-2">
								{t.icon}
								<span className="text-neutral-800 dark:text-neutral-200 text-xs truncate">{t.label}</span>
							</div>
						))}
					</div>
				</div>

				<div className="flex items-center gap-4 text-sm mt-auto">
					{githubHref ? (
						<Link href={githubHref} className="text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" target="_blank" rel="noreferrer" aria-label="GitHub">
							<Github className="w-4 h-4" />
						</Link>
					) : (
						<span aria-disabled className="text-neutral-400 dark:text-neutral-600 select-none cursor-not-allowed">
							<Github className="w-4 h-4" />
						</span>
					)}
					{liveHref ? (
						<Link href={liveHref} className="flex items-center gap-1 text-neutral-700 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors" target="_blank" rel="noreferrer">
							<span className="align-middle">live</span>
							<ArrowUpRight className="w-4 h-4" />
						</Link>
					) : (
						<span aria-disabled className="flex items-center gap-1 text-neutral-400 dark:text-neutral-600 select-none cursor-not-allowed">
							<span>live</span>
							<ArrowUpRight className="w-4 h-4" />
						</span>
					)}
				</div>
			</div>
		</div>
	);
} 