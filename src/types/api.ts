export interface Image {
  url: string
}

export interface Section {
  title: string
  subtitle: string
  image: Image[]
}

export interface SectionsProps {
  sections: Section[]
}

export interface SectionProps {
  section: Section
}