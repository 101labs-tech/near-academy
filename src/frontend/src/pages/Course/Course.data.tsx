import { course as Near101 } from '../Courses/near101'
import { chapterData as Near101Chapters } from '../Courses/near101/Chapters/Chapters.data'
import { CourseData } from './Course.controller'

export const courseData: CourseData[] = [
  {
    path: Near101.path,
    pathname: `/${Near101.path}/info`,
    name: 'Near 101',
    data: Near101,
  },
]

// chaptersByCourse: Used to render chapter data of each course.
// the key in chaptersByCourse == the path in courseData
type ChapterDataDictionary = {
  [key: string]: any
}

export const chaptersByCourse: ChapterDataDictionary = {
  near101: Near101Chapters,
}
