export type DocId =
  | 'getting-started'
  | 'packaging'
  | 'basics'
  | 'comments'
  | 'functions'
  | 'control-flow'
  | 'arrays'
  | 'classes'
  | 'inheritance'
  | 'traits'
  | 'this-and-super'
  | 'polymorphism'
  | 'modules'
  | 'exceptions'

export interface DocEntry {
  id: DocId
  title: string
  file: string
}

export interface DocChapter {
  title: string
  docs: DocEntry[]
}

export const docChapters: DocChapter[] = [
  {
    title: 'Getting Started',
    docs: [
      { id: 'getting-started', title: 'Getting Started', file: 'Getting Started.md' },
      { id: 'packaging', title: 'Packages & Project Structure', file: 'packaging.md' },
    ],
  },
  {
    title: 'Language Fundamentals',
    docs: [
      { id: 'basics', title: 'Variables, Types & Operators', file: 'basics.md' },
      { id: 'comments', title: 'Comments', file: 'comments.md' },
      { id: 'functions', title: 'Functions', file: 'functions.md' },
      { id: 'control-flow', title: 'Control Flow', file: 'control_flow.md' },
      { id: 'arrays', title: 'Arrays', file: 'arrays.md' },
    ],
  },
  {
    title: 'Object-Oriented Programming',
    docs: [
      { id: 'classes', title: 'Classes & Objects', file: 'classes_object.md' },
      { id: 'inheritance', title: 'Inheritance', file: 'inheritance.md' },
      { id: 'traits', title: 'Traits', file: 'trait.md' },
      { id: 'this-and-super', title: '`this` and `super`', file: 'super_and_this_keyword.md' },
      { id: 'polymorphism', title: 'Polymorphism', file: 'polymorphism.md' },
    ],
  },
  {
    title: 'Modules & Error Handling',
    docs: [
      { id: 'modules', title: 'Modules, Imports & Exports', file: 'alias_include_export.md' },
      { id: 'exceptions', title: 'Exception Handling', file: 'exception_handiling.md' },
    ],
  },
]

const docFiles = import.meta.glob<string>('../../aham_docs/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
})

const docsByFile = new Map<string, string>()
for (const [path, content] of Object.entries(docFiles)) {
  const file = path.split('/').pop()!
  docsByFile.set(file, content)
}

export function getDocContent(id: DocId): string | undefined {
  for (const chapter of docChapters) {
    const entry = chapter.docs.find((doc) => doc.id === id)
    if (entry) {
      return docsByFile.get(entry.file)
    }
  }
  return undefined
}

export function getDocEntry(id: DocId): DocEntry | undefined {
  for (const chapter of docChapters) {
    const entry = chapter.docs.find((doc) => doc.id === id)
    if (entry) return entry
  }
  return undefined
}
