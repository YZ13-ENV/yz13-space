type CDN_LINK = `https://cdn.darkmaterial.space/${string}`
type ProjectLink = `https://${string}.${string}` | `https://${string}.${string}/${string}`
type ProjectIcon = CDN_LINK
type ProjectsGroup = {
  groupId: string
  name: string
  icon?: ProjectIcon
}
type Project = {
  projectId: string
  type: 'app' | 'package'
  name: string
  description: string
  status: 'dev' | 'prod' | 'pre-prod' | 'planned'
  disabled: boolean
  link: ProjectLink
  icon: ProjectIcon
  createdAt: number // Нужно для обозначения бейджиком "новое"
  tags: string[]
  partOf: string[] // Нужно для перечисления принадлежности к другим проекта
}
export const type_variants = (type: Project['type']) => type === 'app' ? "приложение" : "библиотека"
export const status_variants = (status: Project['status']) => status === 'dev'
? "Разработка"
: status === 'planned'
? "Планируется"
: status === 'pre-prod'
? "Тестируется"
: status === 'prod'
? "Работает"
: "Неизвестно"
export const projects: Project[] = [
  {
    projectId: "dm",
    type: "app",
    name: "Darkmaterial",
    description: "Приложение для управления аккаунтом",
    status: "prod",
    link: "https://darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: 'https://cdn.darkmaterial.space/dm/icons/dm-star-dark.svg',
    tags: []
  },
  {
    projectId: "frame",
    type: "app",
    name: "Frame",
    description: "Публикуйте свои работы, и используйте профиль как портфолио",
    status: 'prod',
    link: "https://frame.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: 'https://cdn.darkmaterial.space/dm/icons/frame-dark.svg',
    tags: []
  },
  {
    projectId: "team",
    type: "app",
    name: "Team",
    description: "Приложение для создания и управления командой",
    status: "pre-prod",
    link: "https://team.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: "https://cdn.darkmaterial.space/dm/icons/team-dark.svg",
    tags: []
  },
  {
    projectId: "notes",
    type: "app",
    name: "Keeper",
    description: "",
    status: "pre-prod",
    link: "https://keeper.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: "https://cdn.darkmaterial.space/dm/icons/keeper-dark.svg",
    tags: []
  },
  {
    projectId: "docs",
    type: "app",
    name: "Documentation",
    description: "",
    status: "dev",
    link: "https://docs.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: "https://cdn.darkmaterial.space/dm/icons/dm-star-dark.svg",
    tags: []
  },
  {
    projectId: "yz13-portfolio",
    type: "app",
    name: "YZ13",
    description: "",
    status: "prod",
    link: "https://yz13.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: "https://cdn.darkmaterial.space/dm/icons/YZ13-dark.svg",
    tags: []
  },
  {
    projectId: "playground",
    type: "app",
    name: "Weecode Play",
    description: "",
    status: "prod",
    link: "https://play.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: "https://cdn.darkmaterial.space/dm/icons/weecode-dark.svg",
    tags: []
  },
  {
    projectId: "calendar",
    type: "app",
    name: "Calendar",
    description: "",
    status: "pre-prod",
    link: "https://calendar.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: "https://cdn.darkmaterial.space/dm/icons/dm-star-dark.svg",
    tags: []
  },
  {
    projectId: "plus",
    type: "app",
    name: "Plus",
    description: "",
    status: "pre-prod",
    link: "https://plus.darkmaterial.space",
    partOf: [ "darkmaterial-group" ],
    disabled: false,
    createdAt: 0,
    icon: "https://cdn.darkmaterial.space/dm/icons/dm-star-dark.svg",
    tags: []
  }
]
export const projects_groups: ProjectsGroup[] = [
  {
    name: "Darkmaterial",
    groupId: "darkmaterial-group",
  }
]