/**
 * Insert all the components/elements/extensions into the main lib index file
 * By using a template
 *
 */

import fs from 'fs-extra'
import path, { join as joinPath } from 'path'
import camelCase from 'camelcase'
import prettier from 'prettier'
import { ErrorHandler, log } from '../../lib'
import { asyncForEach } from '../../tools'

const prettierrc = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, '../../../.prettierrc'), 'utf-8')
)

const isCLI = require.main === module

const autoAdvice =
  '/**\n * ATTENTION: This file is auto generated by using "prepareTemplates".\n * Do not change the content!\n *\n */\n\n'

const prepareTemplates = async () => {
  log.start('> PrePublish: Starting the index template lib factory ...')

  const components = await processComponents()
  const elements = await processElements()
  await processFragments()
  await processExtensions()
  await processMainIndex({ components, elements })
}

export const processComponents = async () => {
  const componentsTemplateConfig = {
    templateObjectToFill: '{ Template }',
    templateListToExtend: `import Template from './template/Template'`,
    templateListToExtendBy: 'Template',
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/components-index-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/components/index.ts'),
    filesToFindGlob: path.resolve(__dirname, '../../../src/components/'),
    processToNamesIgnoreList: ['fragments', 'style'],
    filesToFindGlobByUsingFolders: true,
  }
  const components = await runFactory(componentsTemplateConfig).then(
    (res) => {
      if (isCLI) {
        log.succeed(
          '> PrePublish: Created the index template with all the components'
        )
      }
      return res
    }
  )
  await runFactory({
    ...componentsTemplateConfig,
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/components-lib-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/components/lib.ts'),
  }).then((res) => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: Created the index template with all the components'
      )
    }
    return res
  })
  await runFactory({
    ...componentsTemplateConfig,
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/component-export-template.js'
    ),
    destFile: false,
    destPath: path.resolve(__dirname, '../../../src/components'),
  }).then((res) => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: Created the index template with all the components'
      )
    }
    return res
  })

  return components
}

export const processFragments = async () => {
  const fragmentsTemplateConfig = {
    templateObjectToFill: '{ Template }',
    templateListToExtend: `import Template from './template/Template'`,
    templateListToExtendBy: 'Template',
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/components-index-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/fragments/index.ts'),
    filesToFindGlob: path.resolve(__dirname, '../../../src/fragments/'),
    processToNamesIgnoreList: ['style'],
    filesToFindGlobByUsingFolders: true,
  }
  await runFactory(fragmentsTemplateConfig).then((res) => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: Created the index template with all the fragments'
      )
    }
    return res
  })
  await runFactory({
    ...fragmentsTemplateConfig,
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/fragments-lib-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/fragments/lib.ts'),
  }).then((res) => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: Created the index template with all the fragments'
      )
    }
    return res
  })
  await runFactory({
    ...fragmentsTemplateConfig,
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/fragment-export-template.js'
    ),
    destFile: false,
    destPath: path.resolve(__dirname, '../../../src/fragments'),
  }).then((res) => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: Created the index template with all the fragments'
      )
    }
    return res
  })
}

export const processElements = async () => {
  const elementsTemplateConfig = {
    templateObjectToFill: '{ Template }',
    templateListToExtend: `import Template from './Template'`,
    templateListToExtendBy: 'Template',
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/elements-index-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/elements/index.ts'),
    filesToFindGlob: path.resolve(__dirname, '../../../src/elements/'),
    processToNamesIgnoreList: [
      'index',
      'lib',
      'Element',
      'stories',
      'label',
      'lists',
      'typography',
    ],
    filesToFindGlobByUsingFolders: false,
  }
  const elements = await runFactory(elementsTemplateConfig).then((res) => {
    if (isCLI) {
      log.info('> Created the index template with all the elements')
    }
    return res
  })
  await runFactory({
    ...elementsTemplateConfig,
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/elements-lib-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/elements/lib.ts'),
    processToNamesIgnoreList: ['index', 'lib', 'Element'],
  }).then((res) => {
    if (isCLI) {
      log.info('> Created the index template with all the elements')
    }
    return res
  })
  await runFactory({
    ...elementsTemplateConfig,
    filesToFindGlobByUsingFolders: true,
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/element-export-template.js'
    ),
    destFile: false,
    destPath: path.resolve(__dirname, '../../../src/elements'),
  }).then((res) => {
    if (isCLI) {
      log.succeed(
        '> PrePublish: Created the index template with all the elements'
      )
    }
    return res
  })

  return elements
}

export const processExtensions = async () => {
  const extensionsTemplateConfig = {
    templateObjectToFill: '{ Template }',
    templateListToExtend: `import Template from './template/Template'`,
    templateListToExtendBy: 'Template',
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/components-index-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/extensions/index.ts'),
    filesToFindGlob: path.resolve(__dirname, '../../../src/extensions/'),
    processToNamesIgnoreList: ['style'],
    filesToFindGlobByUsingFolders: true,
  }
  // we don't export extensions anymore!
  await runFactory(extensionsTemplateConfig).then((res) => {
    if (isCLI) {
      log.info('> Created the index template with all the extensions')
    }
    return res
  })
  await runFactory({
    ...extensionsTemplateConfig,
    ...{
      srcFile: path.resolve(
        __dirname,
        '../../../src/core/templates/extensions-lib-template.js'
      ),
      destFile: path.resolve(__dirname, '../../../src/extensions/lib.ts'),
    },
  }).then((res) => {
    if (isCLI) {
      log.info('> Created the lib template with all the extensions')
    }
    return res
  })
}

export const processMainIndex = async ({ components, elements }) => {
  // fix the glory main index
  await runFactory({
    templateObjectToFill: '{ Template }',
    templateListToExtend: `import Template from './{type}/template/Template'`,
    templateListToExtendBy: 'Template',
    srcFile: path.resolve(
      __dirname,
      '../../../src/core/templates/main-index-template.js'
    ),
    destFile: path.resolve(__dirname, '../../../src/index.ts'),
    filesToFindGlob: [...components, ...elements],
    transformNamesList: ({ result }) => {
      // because elements don't have a folder, we remove the last part of the path
      if (/\/elements\//.test(result)) {
        return result.replace(/\/[^/]+\/?$/g, "'")
      }
    },
  }).then((res) => {
    if (isCLI) {
      log.info('> Created the main index with all the libs')
    }
    return res
  })
}

export const runFactory = async ({
  templateObjectToFill = '{ Template }',
  templateListToExtend,
  templateListToExtendBy,
  srcFile,
  destFile,
  destPath = null,
  filesToFindGlob,
  filesToFindGlobByUsingFolders = false,
  processToNamesIgnoreList = [],
  transformNamesList = null,
}) => {
  if (typeof filesToFindGlob === 'string') {
    const __orig__filesToFindGlob = filesToFindGlob
    filesToFindGlob = (await fs.readdir(filesToFindGlob))
      .filter((file) => !/\.(cjs|d\.ts)$/.test(file))
      .map((file) => {
        return {
          source: joinPath(__orig__filesToFindGlob, file),
          file,
        }
      })
    if (filesToFindGlobByUsingFolders) {
      filesToFindGlob = filesToFindGlob.filter(({ source }) =>
        fs.lstatSync(source).isDirectory()
      )
    } else {
      filesToFindGlob = filesToFindGlob
        .filter(({ source }) => fs.lstatSync(source).isFile())
        .map(({ file, ...rest }) => {
          file = file.replace(/(\.js|\.tsx|\.ts)$/, '')
          return { file, ...rest }
        })
    }
  }

  filesToFindGlob = filesToFindGlob
    .filter(({ file, source }) => {
      if (/not_in_use|__tests__|DS_Store/g.test(file)) {
        return false
      }

      return !processToNamesIgnoreList.some((ignoreName) => {
        if (ignoreName.includes('/')) {
          return source.includes(ignoreName)
        }
        return file.includes(ignoreName)
      })
    })
    .sort(({ file: a }, { file: b }) => (a > b ? 1 : -1))

  const template = await fs.readFile(srcFile, 'utf-8')

  if (destPath) {
    await asyncForEach(filesToFindGlob, async ({ file }) => {
      const destFile = path.resolve(
        destPath,
        `${camelCase(file, { pascalCase: true })}.ts`
      )

      try {
        // replace the content in the template
        const content = template
          .trim()
          // 1. replace templateListToExtendBy
          .replace(
            new RegExp(templateListToExtendBy, 'g'),
            camelCase(file, { pascalCase: true })
          )
          // 2. replace templateListToExtendBy, but lower case
          .replace(
            new RegExp(templateListToExtendBy.toLowerCase(), 'g'),
            file
          )

        await fs.writeFile(
          destFile,
          prettier.format(`${autoAdvice}${content}`, {
            ...prettierrc,
            parser: 'babel',
          })
        )
      } catch (e) {
        log.fail(`There was an error on creating ${destFile}!`)
        ErrorHandler(e)
      }
    })
  }

  if (destFile) {
    // replace the content in the template
    const content = template
      .trim()
      // 1. replace templateObjectToFill
      .replace(
        new RegExp(templateObjectToFill, 'g'),
        `{ ${filesToFindGlob
          .map(({ file }) => camelCase(file, { pascalCase: true }))
          .join(', ')} }`
      )
      // 2. replace templateListToExtend
      .replace(
        new RegExp(templateListToExtend, 'g'),
        filesToFindGlob
          .map(({ file, source }) => {
            let res = templateListToExtend
              .replace(
                new RegExp(templateListToExtendBy, 'g'),
                camelCase(file, { pascalCase: true })
              )
              .replace(
                new RegExp(templateListToExtendBy.toLowerCase(), 'g'),
                file
              )

            // in case we have a type to replace
            if (/\{type\}/.test(res)) {
              const type = source.trim('/').split(/\//g).slice(-2, -1)[0]
              res = res.replace(new RegExp('{type}', 'g'), type)
            }

            if (typeof transformNamesList === 'function') {
              const transformedResult = transformNamesList({
                file,
                source,
                result: res,
              })
              if (transformedResult) {
                res = transformedResult
              }
            }

            return res
          })
          .join('\n')
      )
    try {
      await fs.writeFile(
        destFile,
        prettier.format(`${autoAdvice}${content}`, {
          ...prettierrc,
          parser: 'babel',
        })
      )
    } catch (e) {
      log.fail(`There was an error on creating ${destFile}!`)
      ErrorHandler(e)
    }
  }

  return filesToFindGlob
}

if (isCLI && process.env.NODE_ENV !== 'test') {
  log.start()
  prepareTemplates().then(() => {
    log.succeed()
  })
}

export { prepareTemplates }
