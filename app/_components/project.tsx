import { DocDefaultProject } from "@darkmaterial/api";
import Image from "next/image";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

type Props = {
  repo: DocDefaultProject
}
const Project = ({ repo }: Props) => {
  return (
    <div className="w-full flex flex-col border hover:border-primary rounded-lg p-3 transition-colors relative group">
      {
        repo.link &&
        <Link
          target="_blank"
          href={repo.link}
          className="w-6 aspect-square rounded-full bg-primary text-primary-foreground absolute -top-2.5 -right-2.5 z-10 hidden group-hover:flex items-center justify-center"
        >
          <MdOpenInNew size={14} />
        </Link>
      }
      <div className="w-full h-fit flex items-center justify-between mb-2">
        <div className="w-fit h-fit flex items-center gap-2">
          {
            repo.iconUrl &&
            <Image
              className="aspect-square shrink-0"
              priority
              src={repo.iconUrl}
              width={24}
              height={24}
              alt='repo-logo'
            />
          }
          <span className="font-medium text-sm text-accent-foreground text-start capitalize">{repo.name}</span>
        </div>
      </div>
      <span className="text-sm line-clamp-2 text-muted-foreground text-start">{repo.description || 'Без описания'}</span>
    </div>
  )
}

export default Project