import { projects, projects_groups, status_variants } from "@/const/projects"
import { Repo } from "@/types/repo"
import Image from "next/image"
import Link from "next/link"
import { PiDotOutlineFill } from "react-icons/pi";

type Props = {
  repo: Repo
}
const Project = ({ repo }: Props) => {
  const extra = projects.find(project => project.projectId === repo.name)
  const project_group = extra ? projects_groups.find(group => extra.partOf.includes(group.groupId)) : null
  // TODO - группу и статус поместит в массив и вывести их с соединением в виде точки
  const top_tags = [ project_group?.name, extra ? status_variants(extra?.status) : null ].filter(item => item)
  return (
    <Link href={repo.html_url} key={repo.id} className="w-full flex flex-col border-b hover:border-b-primary transition-colors py-2 relative">
      <div className='relative w-full h-fit flex items-center justify-start'>
        {
          top_tags.map((tag, i, arr) =>
            <>
              <span className="text-xs w-fit text-muted-foreground" key={tag}>{tag}</span>
              { i < arr.length - 1 && <PiDotOutlineFill className="text-muted-foreground" /> }
            </>
          )
        }
        {/* { project_group && <span className="text-xs w-fit text-muted-foreground">{ project_group?.name }</span> } */}
        {/* { extra && <span className="text-xs text-muted-foreground">{ status_variants(extra.status) }</span> } */}
      </div>
      <div className='relative w-full h-fit flex items-center justify-start'>
        {
          extra &&
          <Image
            src={extra.icon}
            width={18}
            height={18}
            alt='repo-logo'
            className="absolute -left-8 md:block hidden"
          />
        }
        <span className="font-medium text-accent-foreground text-start inline-flex gap-1 items-center">{ extra ? extra.name : repo.name }</span>
      </div>
      <span className="text-sm text-muted-foreground text-start">{ repo.description || extra?.description || 'Без описания' }</span>
    </Link>
  )
}

export default Project