import { componentRegistry } from "../../quartz/components/registry"

export type { BreadcrumbOptions } from "./breadcrumbs"
export type { CommentsOptions } from "./comments"
export type { ContentMetaOptions } from "./content-meta"
export type { FooterOptions } from "./footer"
export type { RecentNotesOptions } from "./recent-notes"
export { BasesEntry, BasesView, FilterNode, GroupBy, PropertyConfig, SortDirection, SummaryType, ViewRenderer, ViewRendererProps, ViewTypeRegistration, BasesBody, registerCustomViews, viewRegistry, compile, evaluate, evaluateFilter, resolvePropertyValue, BasesData, BasesPageOptions } from "./bases-page"
export { ContentMeta } from "./content-meta"
export { NotePropertiesComponent, NotePropertiesComponentOptions, NotePropertiesOptions } from "./note-properties"
export { ExcalidrawData, ExcalidrawElement, ExcalidrawBody, ExcalidrawFrame, ExcalidrawPageOptions } from "./obsidian-plugin-excalidraw"
export { filterListedPages, isFolderPageSlug, isTagPageSlug, resolveDefaultDateType, withResolvedDateType } from "./recent-notes"

export const plugins: Record<string, Record<string, (...args: unknown[]) => void>> = {
  "bases-page": {
    BasesPage: (...args: unknown[]) => { componentRegistry.setOptionOverrides("bases-page", args[0] as Record<string, unknown>); },
    BasesTransformer: (...args: unknown[]) => { componentRegistry.setOptionOverrides("bases-page", args[0] as Record<string, unknown>); },
  },
  "breadcrumbs": {
    Breadcrumbs: (...args: unknown[]) => { componentRegistry.setOptionOverrides("breadcrumbs", args[0] as Record<string, unknown>); },
  },
  "comments": {
    Comments: (...args: unknown[]) => { componentRegistry.setOptionOverrides("comments", args[0] as Record<string, unknown>); },
  },
  "darkmode": {
    Darkmode: (...args: unknown[]) => { componentRegistry.setOptionOverrides("darkmode", args[0] as Record<string, unknown>); },
  },
  "footer": {
    Footer: (...args: unknown[]) => { componentRegistry.setOptionOverrides("footer", args[0] as Record<string, unknown>); },
  },
  "note-properties": {
    NoteProperties: (...args: unknown[]) => { componentRegistry.setOptionOverrides("note-properties", args[0] as Record<string, unknown>); },
  },
  "obsidian-plugin-excalidraw": {
    ExcalidrawPage: (...args: unknown[]) => { componentRegistry.setOptionOverrides("obsidian-plugin-excalidraw", args[0] as Record<string, unknown>); },
  },
  "page-title": {
    PageTitle: (...args: unknown[]) => { componentRegistry.setOptionOverrides("page-title", args[0] as Record<string, unknown>); },
  },
  "reader-mode": {
    ReaderMode: (...args: unknown[]) => { componentRegistry.setOptionOverrides("reader-mode", args[0] as Record<string, unknown>); },
  },
  "recent-notes": {
    RecentNotes: (...args: unknown[]) => { componentRegistry.setOptionOverrides("recent-notes", args[0] as Record<string, unknown>); },
  },
  "spacer": {
    Spacer: (...args: unknown[]) => { componentRegistry.setOptionOverrides("spacer", args[0] as Record<string, unknown>); },
  },
  "tag-list": {
    TagList: (...args: unknown[]) => { componentRegistry.setOptionOverrides("tag-list", args[0] as Record<string, unknown>); },
  },
}

export const BasesPage = plugins["bases-page"].BasesPage
export const BasesTransformer = plugins["bases-page"].BasesTransformer
export const Breadcrumbs = plugins["breadcrumbs"].Breadcrumbs
export const Comments = plugins["comments"].Comments
export const Darkmode = plugins["darkmode"].Darkmode
export const Footer = plugins["footer"].Footer
export const NoteProperties = plugins["note-properties"].NoteProperties
export const ExcalidrawPage = plugins["obsidian-plugin-excalidraw"].ExcalidrawPage
export const PageTitle = plugins["page-title"].PageTitle
export const ReaderMode = plugins["reader-mode"].ReaderMode
export const RecentNotes = plugins["recent-notes"].RecentNotes
export const Spacer = plugins["spacer"].Spacer
export const TagList = plugins["tag-list"].TagList
export { CustomOgImages, CustomOgImagesEmitterName } from "./og-image/src/index"
