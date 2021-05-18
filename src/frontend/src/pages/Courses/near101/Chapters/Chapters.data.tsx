import { ChapterData } from 'pages/Chapter/Chapter.controller'

import { course } from '..'
import { data as chapter1 } from './Chapter-1'
import { data as chapter2 } from './Chapter-2'
import { data as chapter3 } from './Chapter-3'
import { data as chapter4 } from './Chapter-4'
import { data as chapter5 } from './Chapter-5'
import { data as chapter6 } from './Chapter-6'
import { data as chapter7 } from './Chapter-7'
import { data as chapter8 } from './Chapter-8'

export const chapterData: ChapterData[] = [
  {
    pathname: `/${course.path}/chapter-1`,
    name: '1 -  Why Should You Care?',
    data: chapter1,
  },
  {
    pathname: `/${course.path}/chapter-2`,
    name: '2 - Key concepts of Web3',
    data: chapter2,
  },
  {
    pathname: `/${course.path}/chapter-3`,
    name: '3 - What is NEAR?',
    data: chapter3,
  },
  {
    pathname: `/${course.path}/chapter-4`,
    name: '4 - NEAR Environment	',
    data: chapter4,
  },
  {
    pathname: `/${course.path}/chapter-5`,
    name: '5 - On NEAR Contracts',
    data: chapter5,
  },
  {
    pathname: `/${course.path}/chapter-6`,
    name: '6 - Deploy the Meme Contract',
    data: chapter6,
  },
  {
    pathname: `/${course.path}/chapter-7`,
    name: '7 -  Build Your Interface',
    data: chapter7,
  },
  {
    pathname: `/${course.path}/chapter-8`,
    name: '8 - What Next',
    data: chapter8,
  }
]
