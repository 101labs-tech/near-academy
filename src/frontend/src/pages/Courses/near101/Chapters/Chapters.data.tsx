import { ChapterData } from 'pages/Chapter/Chapter.controller'

import { course } from '..'
import { data as dataQuestions } from './ChapterModelQuestions'
import { data as dataEditor } from './ChapterModelEditor'

export const chapterData: ChapterData[] = [
  {
    pathname: `/${course.path}/chapter-1`,
    name: '1 - Example (questions)',
    data: dataQuestions,
  },
  {
    pathname: `/${course.path}/chapter-2`,
    name: '2 - Example (editor)',
    data: dataEditor,
  },
]
