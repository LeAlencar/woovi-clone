export interface ImageData {
  attributes: {
    url: string
  }
}
export interface Image {
  data: ImageData[]
}

export interface Section {
  title: string
  subtitle: string
  Image: Image[]
}

export interface SectionsProps {
  sections: Section[]
}

export interface SectionProps {
  section: Section
}