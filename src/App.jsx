import { createElement } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  const year = new Date().getFullYear()
  return createElement(
      'div',
      { className: 'App' },
      createElement(
        'div',
        {},
        createElement(
          'a',
          {href: 'https://vite.dev',
          target: '_blank'
          }, createElement(
            'img',
            {src: viteLogo,
              className: 'logo',
              alt: 'Vite logo'
            })),
          createElement(
          'a',
          {href: 'https://react.dev',
          target: '_blank'
          }, createElement(
            'img',
            {src: reactLogo,
              className: 'logo react',
              alt: 'React logo'
            }))),
        createElement(
          'h1',
          {},
          'Vite + React'
        ),
        createElement(
          'div',
          {className: 'card'},
          createElement(
            'button',
            {onClick: () => setCount((c) => c + 1)},
            `count is ${count}`),
            createElement('p', {}, 'Edit <code>src/App.jsx</code> and save to test HMR')
        ),
        createElement(
          'div',
          {},
          createElement('p', {className: 'read-the-docs'},
            'Click on the Vite and React logos to learn more'
          )),
        createElement(
          'div',
          {},
          createElement(
            'p',
            {},
            `Текущий год ${year}`
          )
        )
      )
}

export default App
