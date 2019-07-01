

import React from 'react'
import universal, { setHasBabelPlugin } from 'C:/Users/Dell/Documents/Projects/static/sp8/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('../src/pages/NotFound'), universalOptions)
      t_0.template = '../src/pages/NotFound'
      
const t_1 = universal(import('../src/pages/about'), universalOptions)
      t_1.template = '../src/pages/about'
      
const t_2 = universal(import('../src/pages/home.js'), universalOptions)
      t_2.template = '../src/pages/home.js'
      
const t_3 = universal(import('../src/pages/home'), universalOptions)
      t_3.template = '../src/pages/home'
      
const t_4 = universal(import('../src/pages/NotFound.js'), universalOptions)
      t_4.template = '../src/pages/NotFound.js'
      

// Template Map
export default {
  '../src/pages/NotFound': t_0,
'../src/pages/about': t_1,
'../src/pages/home.js': t_2,
'../src/pages/home': t_3,
'../src/pages/NotFound.js': t_4
}
// Not Found Template
export const notFoundTemplate = "../src/pages/NotFound"

