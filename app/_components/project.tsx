import { projects, projects_groups, status_variants } from "@/const/projects"
import { Repo } from "@/types/repo"
import Image from "next/image"
import Link from "next/link"
import { BiLogoGithub } from "react-icons/bi";
import { MdOpenInNew } from "react-icons/md";
import { PiDotOutlineFill } from "react-icons/pi";

type Props = {
  repo: Repo
}
const Project = ({ repo }: Props) => {
  const extra = projects.find(project => project.projectId === repo.name)
  const project_group = extra ? projects_groups.find(group => extra.partOf.includes(group.groupId)) : null
  // TODO - группу и статус поместит в массив и вывести их с соединением в виде точки
  const top_tags = [ project_group?.name, extra ? status_variants(extra?.status) : null ].filter(item => item)
  const link = extra ? extra.link : ''
  if (!extra) return null
  return (
    <div className="w-full flex flex-col border hover:border-primary rounded-lg p-3 transition-colors relative group">
      <Link href={link} className="w-6 aspect-square rounded-full bg-primary text-primary-foreground absolute -top-2.5 -right-2.5 z-10 hidden group-hover:flex items-center justify-center">
        <MdOpenInNew size={14} />
      </Link>
      <div className="w-full h-fit flex items-center justify-between mb-2">
        <div className="w-fit h-fit flex items-center gap-2">
          {
            extra &&
            <Image
              className="aspect-square shrink-0"
              priority
              src={extra.icon}
              width={24}
              height={24}
              alt='repo-logo'
            />
          }
          <div className="flex flex-col justify-center">
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
            <span className="font-medium text-sm text-accent-foreground text-start inline-flex gap-1 items-center">{ extra ? extra.name : repo.name }</span>
          </div>
        </div>
      </div>
      <Link href={repo.html_url} className="px-2 py-1 rounded-full bg-muted flex w-fit items-center gap-1 text-xs my-1">
        <BiLogoGithub size={16} />
        { repo.full_name }
      </Link>
      <span className="text-sm line-clamp-1 text-muted-foreground text-start">{ repo.description || extra?.description || 'Без описания' }</span>
    </div>
  )
}

export default Project