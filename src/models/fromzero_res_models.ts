export interface fzReq {
  success: boolean
  code: string
  sublesson: Sublesson
  si_sublesson: SiSublesson
  prevSublesson: string
  nextSublesson: string
  num_sublessons: number
  num_lessons: number
  num_prelessons: number
  lessonID: string
}

export interface Sublesson {
  title: string
  parts: Part[]
  widgets: any[]
  progressive_only: boolean
  is_draft: boolean
  _id: string
  parent_lesson: string
  __v: number
}

export interface Part {
  title: string
  widgets: Widget[]
  is_draft: boolean
  _id: string
  __v: number
}

export interface Widget {
  table: Table
  sound_instances: any[]
  plays_sound: boolean
  no_sound: boolean
  is_draft: boolean
  no_report_icon: boolean
  imported_ld_ids: any[]
  needs_location_recache: boolean
  nonbreaking: boolean
  type: string
  creatorNotes: any[]
  courses_locations: CoursesLocation[]
  _id: string
  __v: number
  createdAt: string
  updatedAt: string
}

export interface Table {
  border: Border
  columns: number
  header: string[]
  rows: string[][]
  linkedRows: any[]
  verticalBorders: boolean
  displayPaired: boolean
  forceIndent: boolean
  forceBoldHeader: boolean
  horizontalPlayAll: boolean
  columnStyles: any[]
  rowStyles: any[]
}

export interface Border {
  rowStyle: string
  columnStyle: string
}

export interface CoursesLocation {
  _id: string
  to: string
  breadcrumb: string
  admin_only: boolean
}

export interface SiSublesson {
  title: string
  parts: Part2[]
  widgets: any[]
  progressive_only: boolean
  is_draft: boolean
  _id: string
  parent_lesson: string
  __v: number
}

export interface Part2 {
  title: Title[]
  widgets: Widget2[]
  is_draft: boolean
  _id: string
  __v: number
}

export interface Title {
  text: string
  format: Format
  widget?: string
  record?: Record
  kanjiData?: any[]
  teacherNote: any
}

export interface Format { }

export interface Record {
  tags: string[]
  refs: string[]
  type: string
  _id: string
  base_text: string
  kanji: string
  hirakata: string
  romaji: string
  progressive: string
  date_created: string
  sounds: Sounds
  __v: number
  breakdown: Breakdown[]
  master: string
  bonus: any
  english: English
}

export interface Sounds {
  Takeru: string
  Hikari: string
  Tomoko: string
  Natsumi: string
}

export interface Breakdown {
  _id: string
  word_id: number
  word_type: string
  word_position: number
  surface_form: string
  pos: string
  pos_detail_1: string
  pos_detail_2: string
  pos_detail_3: string
  conjugated_type: string
  conjugated_form: string
  basic_form: string
  reading: string
  pronunciation: string
}

export interface English {
  children: string[]
  _id: string
  text: string
  date_created: string
  __v: number
}

export interface Widget2 {
  table: Table2
  sound_instances: any[]
  plays_sound: boolean
  no_sound: boolean
  is_draft: boolean
  no_report_icon: boolean
  imported_ld_ids: any[]
  needs_location_recache: boolean
  nonbreaking: boolean
  type: string
  creatorNotes: any[]
  courses_locations: CoursesLocation2[]
  _id: string
  __v: number
  createdAt: string
  updatedAt: string
}

export interface Table2 {
  border: Border2
  columns: number
  header: string[]
  rows: [Row[], string][]
  linkedRows: any[]
  verticalBorders: boolean
  displayPaired: boolean
  forceIndent: boolean
  forceBoldHeader: boolean
  horizontalPlayAll: boolean
  columnStyles: any[]
  rowStyles: any[]
}

export interface Border2 {
  rowStyle: string
  columnStyle: string
}

export interface Row {
  widget?: string
  text: string
  record?: Record2
  formatText: any
  kanjiData?: any[]
  teacherNote?: TeacherNote
  format: Format2
}

export interface Record2 {
  tags: string[]
  refs: string[]
  type: string
  _id: string
  base_text: string
  kanji: string
  hirakata: string
  romaji: string
  sounds: Sounds2
  date_created: string
  master: string
  __v: number
  breakdown: Breakdown2[]
  bonus: any
  english: English2
}

export interface Sounds2 {
  Kanako: string
  Takeru: string
  Hikari: string
  Tomoko: string
  Natsumi: string
}

export interface Breakdown2 {
  _id: string
  word_id: number
  word_type: string
  word_position: number
  surface_form: string
  pos: string
  pos_detail_1: string
  pos_detail_2: string
  pos_detail_3: string
  conjugated_type: string
  conjugated_form: string
  basic_form: string
  reading: string
  pronunciation: string
  english?: string
}

export interface English2 {
  children: string[]
  _id: string
  text: string
  date_created: string
  __v: number
}

export interface TeacherNote {
  text: string
}

export interface Format2 { }

export interface CoursesLocation2 {
  _id: string
  to: string
  breadcrumb: Breadcrumb[]
  admin_only: boolean
}

export interface Breadcrumb {
  text: string
  format: Format3
  widget?: string
  record?: Record3
  formatText: any
  kanjiData?: any[]
  teacherNote?: TeacherNote2
}

export interface Format3 { }

export interface Record3 {
  tags: string[]
  refs: string[]
  type: string
  _id: string
  base_text: string
  kanji: string
  hirakata: string
  romaji: string
  progressive: string
  date_created: string
  sounds: Sounds3
  __v: number
  breakdown: Breakdown3[]
  master: string
  bonus: any
  english: English3
}

export interface Sounds3 {
  Takeru: string
  Hikari: string
  Tomoko: string
  Natsumi: string
}

export interface Breakdown3 {
  _id: string
  word_id: number
  word_type: string
  word_position: number
  surface_form: string
  pos: string
  pos_detail_1: string
  pos_detail_2: string
  pos_detail_3: string
  conjugated_type: string
  conjugated_form: string
  basic_form: string
  reading: string
  pronunciation: string
}

export interface English3 {
  children: string[]
  _id: string
  text: string
  date_created: string
  __v: number
}

export interface TeacherNote2 {
  text: string
}
