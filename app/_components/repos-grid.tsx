import { user as user_api } from '@/api/user'
import { projects } from '@/const/projects'
import Project from './project'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { BiRightArrowAlt } from 'react-icons/bi'

const ReposGrid = async () => {
  const repos = await user_api.repos.get()
  const matched = repos.filter(repo => !!projects.find(project => project.projectId === repo.name))
  const github_link = "https://github.com/yz13-env"
  return (
    <>
      <div className='w-full flex items-center mt-12 justify-between max-w-xl mx-auto px-6'>
        <span className='text-sm text-muted-foreground'>Показано {matched.length}/{repos.length}</span>
        <Button variant='outline' className='gap-2' asChild>
          <Link href={github_link}>Посмотреть все <BiRightArrowAlt size={16} /></Link>
        </Button>
      </div>
      <div className="w-full max-w-xl grid md:grid-cols-2 grid-cols-1 auto-rows-auto gap-2 mx-auto px-6 py-4">
        {
          matched
            .sort()
            .map(repo => <Project key={repo.id} repo={repo} />)
        }
      </div>
    </>
  )
}

export default ReposGrid