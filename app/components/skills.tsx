import React from 'react'
import FigmaIcon from './svgs/figma'
import NotionIcon from './svgs/notion'
import FramerIcon from './svgs/framer'
import VercelIcon from './svgs/vercel'
import PostHogIcon from './svgs/posthog'
import LinearIcon from './svgs/linear'

type LabeledListProps = {
  title: string
  items: string[]
}

function LabeledList({ title, items }: LabeledListProps) {
  return (
    <div className="space-y-2">
      <h3 className="text-[11px] font-semibold tracking-[0.08em] uppercase text-neutral-700 dark:text-neutral-300">
        {title}
      </h3>
      <ul className="space-y-1 text-[15px] text-neutral-800 dark:text-neutral-100">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

function DashedCard({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <div className="rounded-sm border border-dashed border-neutral-300 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-950">
      {title ? (
        <div className="mb-2 flex items-center gap-2">
          <span className="text-[13px] font-semibold text-neutral-700 dark:text-neutral-200">
            {title}
          </span>
        </div>
      ) : null}
      {children}
    </div>
  )
}

export default function SkillsCompact() {
  const knowThis = ['TypeScript', 'JavaScript', 'HTML & CSS', 'C/C++', 'Java', 'Python', 'SQL']
  const useThis = ['React', 'Next JS', 'Angular', 'Tailwind', 'Express', 'SanityJS']
  const withThis = ['VS Code', 'Git & Github', 'Framer Motion', 'Docker', 'MySQL', 'MongoDB', 'Firebase']

  const greatestList = [
    '🎥 The Inglorious B*stards',
    '📁 Crime & Punishment',
    '🥊 Dimitri Bivol',
    '🎤 Abel Tesfaye',
  ]

  const toolTiles: { name: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] = [
    { name: 'Figma', Icon: FigmaIcon },
    { name: 'Notion', Icon: NotionIcon },
    { name: 'Framer', Icon: FramerIcon },
    { name: 'Vercel', Icon: VercelIcon },
    { name: 'PostHog', Icon: PostHogIcon },
    { name: 'Linear', Icon: LinearIcon },
  ]

  return (
    <section className="select-none">
      {/* Top: three compact columns */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        <LabeledList title="I KNOW THIS" items={knowThis} />
        <LabeledList title="I USE THIS" items={useThis} />
        <LabeledList title="WITH THIS" items={withThis} />
      </div>

      {/* Bottom: two dashed cards */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <DashedCard title="My Greatest List">
          <ul className="space-y-2 text-[15px] text-neutral-800 dark:text-neutral-100">
            {greatestList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </DashedCard>

        <DashedCard title="🛠️ Tools I Love">
          <div className="grid grid-cols-3 gap-3">
            {toolTiles.map(({ name, Icon }) => (
              <div
                key={name}
                className="flex aspect-square items-center justify-center rounded-sm border border-dashed border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                title={name}
              >
                <Icon className="h-5 w-5" />
              </div>
            ))}
          </div>
        </DashedCard>
      </div>
    </section>
  )
}


