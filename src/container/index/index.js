import {
  createElement,
  createHeader,
  createPost,
} from '../../script/layout'

const page = document.querySelector('.page')
console.log(page)

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const post = createPost()

page.append(post)
