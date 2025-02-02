import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import IterateElementContext from '../../IterateElementContext'
import ElementBlock from '../ElementBlock'
import RemoveButton from '../../RemoveButton'
import { wait } from '../../../../../core/jest/jestSetup'
import { DataContext, Field, Form, Iterate } from '../../..'

describe('ElementBlock', () => {
  it('should call "onAnimationEnd"', () => {
    const onAnimationEnd = jest.fn()

    const wrapper = ({ children }) => (
      <IterateElementContext.Provider value={{ containerMode: 'view' }}>
        {children}
      </IterateElementContext.Provider>
    )

    render(
      <ElementBlock mode="view" onAnimationEnd={onAnimationEnd}>
        <RemoveButton />
      </ElementBlock>,
      { wrapper }
    )

    fireEvent.click(document.querySelector('button'))

    expect(onAnimationEnd).toHaveBeenCalledTimes(1)
  })

  it('should call "handleRemove" from the context during element remove', () => {
    const handleRemove = jest.fn()

    const wrapper = ({ children }) => (
      <IterateElementContext.Provider
        value={{ containerMode: 'view', handleRemove }}
      >
        {children}
      </IterateElementContext.Provider>
    )

    render(
      <ElementBlock mode="view">
        <RemoveButton />
      </ElementBlock>,
      { wrapper }
    )

    fireEvent.click(document.querySelector('button'))

    expect(handleRemove).toHaveBeenCalledTimes(1)
  })

  it('should call "fulfillRemove" from the context during element remove', () => {
    const fulfillRemove = jest.fn()

    const wrapper = ({ children }) => (
      <IterateElementContext.Provider
        value={{ containerMode: 'view', fulfillRemove }}
      >
        {children}
      </IterateElementContext.Provider>
    )

    render(
      <ElementBlock mode="view">
        <RemoveButton />
      </ElementBlock>,
      { wrapper }
    )

    fireEvent.click(document.querySelector('button'))

    expect(fulfillRemove).toHaveBeenCalledTimes(1)
  })

  it('should set "--new" class on new blocks', async () => {
    render(
      <DataContext.Provider
        data={{
          myList: ['one'],
        }}
      >
        <Iterate.Array path="/myList">
          <Iterate.AnimatedContainer>content</Iterate.AnimatedContainer>
        </Iterate.Array>

        <Iterate.PushButton path="/myList" pushValue="foo" />
      </DataContext.Provider>
    )

    const addButton = document.querySelector('button')
    fireEvent.click(addButton)

    const elements = document.querySelectorAll(
      '.dnb-forms-iterate__element'
    )
    expect(elements).toHaveLength(2)

    expect(
      elements[0].querySelector('.dnb-forms-iterate-block--new')
    ).toBeFalsy()
    expect(
      elements[1].querySelector('.dnb-forms-iterate-block--new')
    ).toBeTruthy()
  })

  it('should set "--error" class on blocks with error', () => {
    render(
      <Form.Handler
        data={{
          myList: ['foo'],
        }}
      >
        <Iterate.Array path="/myList">
          {(value, index) => {
            return (
              <Iterate.AnimatedContainer>
                <Field.String required={index > 0} />
              </Iterate.AnimatedContainer>
            )
          }}
        </Iterate.Array>

        <Iterate.PushButton path="/myList" pushValue={undefined} />
      </Form.Handler>
    )

    expect(
      document.querySelector('.dnb-forms-iterate-block--error')
    ).toBeFalsy()

    const addButton = document.querySelector('button')
    fireEvent.click(addButton)

    const elements = document.querySelectorAll(
      '.dnb-forms-iterate__element'
    )
    expect(elements).toHaveLength(2)

    expect(
      elements[0].querySelector('.dnb-forms-iterate-block--error')
    ).toBeFalsy()
    expect(
      elements[1].querySelector('.dnb-forms-iterate-block--error')
    ).toBeFalsy()

    fireEvent.submit(document.querySelector('form'))

    expect(
      elements[0].querySelector('.dnb-forms-iterate-block--error')
    ).toBeFalsy()
    expect(
      elements[1].querySelector('.dnb-forms-iterate-block--error')
    ).toBeTruthy()
  })

  it('should open delayed when isNew is true', async () => {
    const wrapper = ({ children }) => (
      <IterateElementContext.Provider
        value={{ containerMode: 'view', isNew: true }}
      >
        {children}
      </IterateElementContext.Provider>
    )

    const { rerender } = render(
      <ElementBlock mode="view" openDelay={1}>
        Content
      </ElementBlock>,
      { wrapper }
    )

    const block = document.querySelector('.dnb-forms-iterate-block')
    expect(block).toHaveClass('dnb-height-animation--hidden')

    rerender(
      <ElementBlock mode="edit" openDelay={1}>
        Content
      </ElementBlock>
    )

    expect(block).toHaveClass('dnb-height-animation--hidden')

    await wait(1)

    expect(block).toHaveClass('dnb-height-animation--is-visible')
    expect(block).not.toHaveClass('dnb-height-animation--hidden')
  })

  it('should have inner element of section', () => {
    const wrapper = ({ children }) => (
      <IterateElementContext.Provider value={{ containerMode: 'view' }}>
        {children}
      </IterateElementContext.Provider>
    )

    render(<ElementBlock mode="view">Content</ElementBlock>, { wrapper })

    expect(
      document.querySelector('.dnb-forms-iterate-block__inner').tagName
    ).toBe('SECTION')
  })

  it('should set aria-label', () => {
    const wrapper = ({ children }) => (
      <IterateElementContext.Provider value={{ containerMode: 'view' }}>
        {children}
      </IterateElementContext.Provider>
    )

    render(
      <ElementBlock mode="view" ariaLabel="Aria Label">
        Content
      </ElementBlock>,
      { wrapper }
    )

    expect(
      document.querySelector('.dnb-forms-iterate-block__inner')
    ).toHaveAttribute('aria-label', 'Aria Label')
  })
})
