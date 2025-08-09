import { BlogPosts } from 'app/components/posts'
import LittleMiss from "app/components/svgs/littleMiss"
import Image from 'next/image'

export default function Page() {
  return (
    <section>
      <div className='space-y-0.5 mb-8'>
      <Image src="/saff.webp" draggable="false" width={120} height={120} className='mb-3 border bg-neutral-100 dark:bg-[#121212] border-neutral-300 p-1 dark:border-neutral-600' alt="A Picture of Salfiya Anzar" />
      <div>
      </div>
      <h1 className=" text-3xl font-semibold">
        Salfiya Anzar
      </h1>
      <p className="text-neutral-600 dark:text-neutral-500 text-sm">Backend Engineer</p>
      </div>
      <p className="mb-7 text-lg text-neutral-600 dark:text-neutral-200">
        Currently, working at a Bangalore Startup as an Intern, with a focus on AWS services, RESTful APIs, and Database Systems. 
        </p>
        <div className="mb-7 text-md text-neutral-600 dark:text-white border border-dashed border-neutral-300 dark:border-neutral-600 bg-neutral-50 dark:bg-[#121212] p-2">
        Actively looking for full-time opportunities that I can pour my heart into.  <br />૮ ˶ᵔ ᵕ ᵔ˶ ა
        </div>
        <p className="mb-7 text-lg text-neutral-600 dark:text-neutral-200">
        This extends to my support for static typing, where its
        early error detection ensures cleaner code, and my preference for dark
        mode, which eases long coding sessions by reducing eye strain.
        </p>
      <div className='grid grid-cols-3 gap-2 max-w-xl my-4 select-none'>
        <Image src="/sushi.webp" draggable="false" width="400" height="400" alt='Salfiya' className='border p-2 bg-neutral-50 dark:border-neutral-700 hover:dark:border-neutral-600 dark:bg-[#121212] hover:dark:bg-[#121212] border-neutral-300 hover:border-neutral-400 border hover:scale-110 hover:bg-neutral-100 duration-200 hover:rotate-6' />
        <Image src="/beanie.webp" draggable="false" width="400" height="300" alt='beanie by salfiya' className='border p-2 dark:border-neutral-700 hover:dark:border-neutral-600 dark:bg-[#121212] hover:dark:bg-[#121212] bg-neutral-50 border-neutral-300 hover:border-neutral-400 border hover:scale-110 hover:bg-neutral-100 duration-200 hover:rotate-6' />
        <Image src="/glove.webp" draggable="false" width="400" height="300" alt='glove by salfiya' className='border p-2 dark:border-neutral-700 hover:dark:border-neutral-600 dark:bg-[#121212] bg-neutral-50 hover:dark:bg-[#121212] border-neutral-300 border hover:border-neutral-400 hover:bg-neutral-100 hover:scale-110 duration-200 hover:rotate-6' />
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
      <div className='max-w-[170px] border bg-neutral-50 dark:bg-neutral-950 dark:border-neutral-700 border-neutral-300 p-3'>
      <LittleMiss />
      </div>
    </section>
  )
}
