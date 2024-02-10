type CDN_LINK = `https://cdn.darkmaterial.space/${string}`
type ProjectLink = `https://${string}.${string}` | `https://${string}.${string}/${string}`
type ProjectIcon = CDN_LINK
type ProjectsGroup = {
  groupId: string
  name: string
  description: string
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
  }
]
export const projects_groups: ProjectsGroup[] = [
  {
    name: "Darkmaterial",
    description: "Большой проект :)",
    groupId: "darkmaterial-group",
  }
]