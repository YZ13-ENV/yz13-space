import { user as user_api } from '@/api/user'
import { projects } from '@/const/projects'
import Image from 'next/image'
import Link from 'next/link'
import { BiLogoGithub, BiLogoTelegram } from 'react-icons/bi'
import Project from './_components/project'

export default async function Home() {
  const user = await user_api.get()
  const repos = await user_api.repos.get()
  const matched = repos.filter(repo => !!projects.find(project => project.projectId === repo.name))
  return (
    <main className="w-full min-h-screen">
      <div className="w-full max-w-xl mx-auto h-fit flex flex-col gap-4 items-center justify-center px-6 py-12">
        {
          user
          ? <Image src={user.avatar_url} className='rounded-full' width={96} height={96} alt='user-avatar' />
          : <div className="w-24 aspect-square rounded-full bg-muted" />
        }
        <div className="w-fit h-fit flex items-center flex-col justify-center">
          <span className="text-center text-accent-foreground text-2xl font-bold">{ user?.name }</span>
          <span className="text-sm text-muted-foreground text-center">Fullstack-developer</span>
        </div>
        <span className='text-center text-sm text-muted-foreground'>{ user?.bio }</span>
      </div>
      <div className="w-full h-fit max-w-xl mx-auto flex items-center justify-center gap-2 py-6">
        <Link href='https://github.com/yz13-env' className="w-6 aspect-square flex items-center justify-center">
          <BiLogoGithub size={24} />
        </Link>
         <Link href='https://t.me/YZTHECEO' className="w-6 aspect-square flex items-center justify-center">
          <BiLogoTelegram size={24} />
         </Link>
        {/* <div className="w-6 aspect-square flex items-center justify-center" /> */}
      </div>
      <div className="w-full max-w-xl grid md:grid-cols-2 grid-cols-1 auto-rows-auto gap-2 mx-auto px-6 py-4">
        {
          matched
          .sort()
          .map(repo => <Project key={repo.id} repo={repo} />)
        }
      </div>
    </main>
  )
}
