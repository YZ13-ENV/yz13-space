import { projects } from '@/const/projects'
import Link from 'next/link'
import { BiLogoGithub } from 'react-icons/bi'

export default function Home() {
  return (
    <main className="w-full h-screen">
      <div className="w-full max-w-md mx-auto h-96 flex flex-col gap-4 items-center justify-center px-6">
        <div className="w-24 aspect-square rounded-full bg-muted" />
        <div className="w-fit h-fit flex items-center flex-col justify-center">
          <span className="text-center text-accent-foreground text-2xl font-bold">YZ13</span>
          <span className="text-sm text-muted-foreground text-center">Fullstack-developer</span>
        </div>
        <span className='text-center text-sm text-muted-foreground'> Hi -_- </span>
      </div>
      <div className="w-full h-fit flex items-center justify-center gap-2 py-6">
        <Link href='https://github.com/yz13-env' className="w-6 aspect-square flex items-center justify-center">
          <BiLogoGithub size={24} />
        </Link>
        <div aria-label="link-to-social" className="w-6 aspect-square flex items-center justify-center" />
      </div>
      <div className="w-full max-w-md mx-auto px-6">
        {
          projects.map(project =>
            <Link href={project.link} key={project.projectId} className="w-full flex flex-col border-b py-2">
              <span className="font-medium text-accent-foreground text-start">{ project.name }</span>
              <span className="text-sm text-muted-foreground text-start">{ project.description }</span>
            </Link>
          )
        }
      </div>
    </main>
  )
}
