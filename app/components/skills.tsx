import React from 'react'
import FigmaIcon from './svgs/figma'
import NotionIcon from './svgs/notion'
import PostmanIcon from './svgs/postman'
import GithubFull from './svgs/github-full'
import Vercel from './svgs/vercel'
import LinearIcon from './svgs/docker'

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
    <div className="border border-dashed border-neutral-300 bg-neutral-50 p-3 dark:border-neutral-700 dark:bg-neutral-950">
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
  const knowThis = ['TypeScript', 'JavaScript', 'C/C++', 'Java', 'SQL']
  const useThis = ['React', 'Next JS', 'Nest.js', 'SpringBoot', 'Tailwind', 'Express']
  const withThis = ['VS Code', 'Git', 'AWS', 'Docker', 'MySQL', 'MongoDB', 'Firebase']

  const greatestList = [
    '🎥 The Inglorious B*stards',
    '📁 Crime & Punishment',
    '🥊 Dimitri Bivol',
    '🎤 Abel Tesfaye',
  ]

  const toolTiles: { name: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> }[] = [
    { name: 'Postman', Icon: FigmaIcon },
    { name: 'Notion', Icon: NotionIcon },
    { name: 'Framer', Icon: PostmanIcon },
    { name: 'Github', Icon: GithubFull },
    { name: 'Vercel', Icon: Vercel },
    { name: 'Linear', Icon: LinearIcon },
  ]

  return (
    <section className="">
      <div className="grid grid-cols-3 gap-1 lg:gap-3 md:grid-cols-2 lg:grid-cols-3">
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
                className="flex p-4 items-center justify-center  border border-dashed border-neutral-300 bg-white text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
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


