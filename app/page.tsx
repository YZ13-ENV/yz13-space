import { user as user_api } from '@/api/user'
import ReposSkeleton from '@/components/skeletons/repos'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import { BiLogoGithub, BiLogoTelegram } from 'react-icons/bi'
const ReposGrid = dynamic(() => import('./_components/repos-grid'), {
  loading: () => <ReposSkeleton />
})

export default async function Home() {
  const user = await user_api.get()
  const github_link = "https://github.com/yz13-env"
  return (
    <main className="w-full min-h-screen">
      <div className="w-full min-h-[50dvh] max-w-xl mx-auto h-fit flex flex-col gap-4 items-center justify-center px-6 py-12">
        {
          user
            ? <Image priority src={user.avatar_url} className='rounded-full' width={96} height={96} alt='user-avatar' />
            : <div className="w-24 aspect-square rounded-full bg-muted" />
        }
        <div className="w-fit h-fit flex items-center flex-col justify-center">
          <span className="text-center text-accent-foreground text-2xl font-bold">{user?.name}</span>
          <span className="text-sm text-muted-foreground text-center">Fullstack-developer</span>
        </div>
        <span className='text-center text-sm text-muted-foreground'>{user?.bio}</span>
      </div>
      <div className="w-full h-fit max-w-xl mx-auto flex items-center justify-center gap-2 py-6">
        <Link target='_blank' href="https://frame.darkmaterial.space/YZCEO" className="w-6 aspect-square flex items-center justify-center">
          <Image src="frame-dark.svg" width={24} height={24} alt='frame-logo' />
        </Link>
        <Link target='_blank' href={github_link} className="w-6 aspect-square flex items-center justify-center">
          <BiLogoGithub size={24} />
        </Link>
        <Link target='_blank' href='https://t.me/YZTHECEO' className="w-6 aspect-square flex items-center justify-center">
          <BiLogoTelegram size={24} />
        </Link>
      </div>
      <Suspense fallback={<ReposSkeleton />}><ReposGrid /></Suspense>
    </main>
  )
}
