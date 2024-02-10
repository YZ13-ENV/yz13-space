import { projects, projects_groups } from "@/const/projects"
import { Repo } from "@/types/repo"
import Link from "next/link"

type Props = {
  repo: Repo
}
const Project = ({ repo }: Props) => {
  const extra = projects.find(project => project.projectId === repo.name)
  const project_group = extra ? projects_groups.find(group => extra.partOf.includes(group.groupId)) : null
  return (
    <Link href={repo.html_url} key={repo.id} className="w-full flex flex-col border-b hover:border-b-primary transition-colors py-2">
      { project_group && <span className="text-xs px-2.5 w-fit py-1 rounded-full bg-muted text-muted-foreground">{ project_group?.name }</span> }
      <span className="font-medium text-accent-foreground text-start">
        { extra ? extra.name : repo.name }
        {/* <span className='text-muted-foreground'>({ repo.full_name })</span>  */}
      </span>
      <span className="text-sm text-muted-foreground text-start">{ repo.description || 'Без описания' }</span>
    </Link>
  )
}

export default Project