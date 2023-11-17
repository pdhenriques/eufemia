/**
 * Insert all the styles into style libs
 *
 */

import fs from 'fs-extra'
import globby from 'globby'
import path from 'path'
import prettier from 'prettier'
import { ErrorHandler, log } from '../../lib'

const fallbackPrefix = 'dnb'
const autoAdvice =
  '/**\n * ATTENTION: This file is auto generated by using "styleFactory".\n * Do not change the content!\n *\n */\n\n'
const processToNamesIgnoreList = [
  '!**/__tests__/',
  '!**/stories/',
  '!**/style/',
  '!**/helper-classes/',
  '!**/*_not_in_use/',
  '!**/style/themes/**',
]
const prettierrc = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../../.prettierrc'), 'utf-8')
)
const isCLI = require.main === module

if (isCLI && process.env.NODE_ENV !== 'test') {
  log.start()
  runStyleFactory().then(() => {
    log.succeed()
  })
}

async function runStyleFactory() {
  log.start('> PrePublish: Starting the style factory ...')

  // components
  await runFactory({
    outputFile: path.resolve(
      __dirname,
      `../../../src/style/${fallbackPrefix}-ui-components.scss`
    ),
    customContent: `
      @import './core/utilities.scss';
      @import './${fallbackPrefix}-ui-fragments.scss';
    `,
    importContent: ({ relativeSource }) => `@import '${relativeSource}';`,
    searchGlob: [
      path.resolve(
        __dirname,
        `../../../src/components/*/style/${fallbackPrefix}-*.scss`
      ),
    ],
  }).then(() => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: "styleFactory" Created the style file with all the components'
      )
    }
  })

  // elements
  await runFactory({
    outputFile: path.resolve(
      __dirname,
      `../../../src/style/${fallbackPrefix}-ui-elements.scss`
    ),
    customContent: `@import './core/utilities.scss';`,
    importContent: ({ relativeSource }) => `@import '${relativeSource}';`,
    searchGlob: [
      path.resolve(
        __dirname,
        `../../../src/elements/*/style/${fallbackPrefix}-*.scss`
      ),
    ],
  }).then(() => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: "styleFactory" Created the style file with all the elements'
      )
    }
  })

  // fragments
  await runFactory({
    outputFile: path.resolve(
      __dirname,
      `../../../src/style/${fallbackPrefix}-ui-fragments.scss`
    ),
    customContent: `@import './core/utilities.scss';`,
    importContent: ({ relativeSource }) => `@import '${relativeSource}';`,
    searchGlob: [
      path.resolve(
        __dirname,
        `../../../src/fragments/*/style/${fallbackPrefix}-*.scss`
      ),
    ],
  }).then(() => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: "styleFactory" Created the style file with all the fragments'
      )
    }
  })

  // extensions
  await runFactory({
    outputFile: path.resolve(
      __dirname,
      `../../../src/style/${fallbackPrefix}-ui-extensions.scss`
    ),
    customContent: `@import './core/utilities.scss';`,
    importContent: ({ relativeSource }) => `@import '${relativeSource}';`,
    searchGlob: [
      path.resolve(
        __dirname,
        `../../../src/extensions/*/style/${fallbackPrefix}-*.scss`
      ),
    ],
  }).then(() => {
    if (isCLI) {
      log.info('> Created the style file with all the extensions')
    }
  })
}

const runFactory = async ({
  outputFile,
  importContent,
  searchGlob,
  customContent = '',
  onlyDirectories = false,
}) => {
  try {
    searchGlob = await globby(
      searchGlob.concat(processToNamesIgnoreList),
      {
        onlyDirectories,
      }
    )
    searchGlob.sort()
  } catch (e) {
    log.fail(e)
  }

  const content = searchGlob
    .reduce((acc, source) => {
      const seperator = '/src/'
      const from =
        source.substring(0, source.indexOf(seperator)) + seperator
      const relativeSource = '../' + path.relative(from, source)
      acc.push(importContent({ relativeSource }))

      return acc
    }, [])
    .join('\n')

  try {
    // make sure we have newline at the end - because of StyleLint "no-missing-end-of-source-newline"
    await fs.writeFile(
      outputFile,
      await prettier.format(`${autoAdvice}${customContent}${content}\n`, {
        ...prettierrc,
        filepath: outputFile,
      })
    )
  } catch (e) {
    log.fail(`There was an error on creating ${outputFile}!`)
    ErrorHandler(e)
  }
}

export { runStyleFactory }
