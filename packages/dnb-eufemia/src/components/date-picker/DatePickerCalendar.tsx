/**
 * Web DatePicker Component
 *
 */

import React, { useContext, useEffect, useMemo, useRef } from 'react'
import classnames from 'classnames'

// date-fns
import format from 'date-fns/format'
import subMonths from 'date-fns/subMonths'
import addMonths from 'date-fns/addMonths'
import addWeeks from 'date-fns/addWeeks'
import addDays from 'date-fns/addDays'
import isSameDay from 'date-fns/isSameDay'
import isSameMonth from 'date-fns/isSameMonth'
import startOfDay from 'date-fns/startOfDay'
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays'
import differenceInMonths from 'date-fns/differenceInMonths'
import lastDayOfMonth from 'date-fns/lastDayOfMonth'
import setDate from 'date-fns/setDate'

import keycode from 'keycode'
// Imports only the parts of the date-fns locale object that we actually use
import nbLocalize from 'date-fns/locale/nb/_lib/localize'
import nbFormatLong from 'date-fns/locale/nb/_lib/formatLong'
import enLocalize from 'date-fns/locale/en-US/_lib/localize'
import enFormatLong from 'date-fns/locale/en-US/_lib/formatLong'
import gbFormatLong from 'date-fns/locale/en-GB/_lib/formatLong'

import {
  isDisabled,
  makeDayObject,
  toRange,
  getWeek,
  dayOffset,
  getCalendar,
} from './DatePickerCalc'
import Button from '../button/Button'
import DatePickerContext from './DatePickerContext'
import { useTranslation } from '../../shared'
import { InternalLocale } from '../../shared/Context'
import { Dates, InputDates } from './hooks/useDates'

export type CalendarDay = {
  date: Date
  isDisabled?: boolean
  isEndDate?: boolean
  isInactive?: boolean
  isLastMonth?: boolean
  isNextMonth?: boolean
  isPreview?: boolean
  isSelectable?: boolean
  isStartDate?: boolean
  isToday?: boolean
  isWithinSelection?: boolean
  className?: string
}

type CalendarLocales = {
  // eslint-disable-next-line no-unused-vars
  [locale in InternalLocale]?: Pick<Locale, 'localize' | 'formatLong'>
}
// Easy to acces objects containing the only, in our case, needed functions for date-fns format
const locales: CalendarLocales = {
  'nb-NO': { localize: nbLocalize, formatLong: nbFormatLong },
  'en-GB': { localize: enLocalize, formatLong: gbFormatLong },
  'en-US': { localize: enLocalize, formatLong: enFormatLong },
}

type CalendarNavigationEvent = {
  nr: number
}

export type CalendarSelectEvent = Dates &
  InputDates & {
    event: React.MouseEvent<HTMLButtonElement>
    hidePicker: boolean
    nr: number
  }

export type DatePickerCalendarProps = React.HTMLProps<HTMLElement> & {
  id?: string
  nr?: number
  /**
   * To display what month should be shown in the first calendar by default. Defaults to the `date` respective `start_date`.
   */
  month?: Date
  prevBtn?: boolean
  nextBtn?: boolean
  titleFormat?: string
  dayOfWeekFormat?: string
  firstDayOfWeek?: string
  hideNav?: boolean
  hideDays?: boolean
  onlyMonth?: boolean
  hideNextMonthWeek?: boolean
  noAutofocus?: boolean
  onHover?: (day: Date) => void
  onSelect?: (event: CalendarSelectEvent) => void
  onPrev?: (event: CalendarNavigationEvent) => void
  onNext?: (event: CalendarNavigationEvent) => void
  onKeyDown?: (
    event: React.KeyboardEvent<HTMLTableElement>,
    tableRef: React.MutableRefObject<HTMLTableElement>,
    nr: number
  ) => void
  /**
   * To define the locale used in the calendar. Needs to be an `date-fns` "v2" locale object, like `import enLocale from &#39;date-fns/locale/en-GB&#39;`. Defaults to `nb-NO`.
   */
  locale?: InternalLocale
  rtl?: boolean
  isRange?: boolean
  resetDate?: boolean
}

const defaultProps: DatePickerCalendarProps = {
  prevBtn: true,
  nextBtn: true,
  titleFormat: 'MMMM yyyy',
  dayOfWeekFormat: 'EEEEEE',
  firstDayOfWeek: 'monday',
  hideNav: false,
  hideDays: false,
  onlyMonth: false,
  hideNextMonthWeek: false,
  noAutofocus: false,
  rtl: false,
  resetDate: true,
}

function DatePickerCalendar(restOfProps: DatePickerCalendarProps) {
  const props = { ...defaultProps, ...restOfProps }

  const context = useContext(DatePickerContext)

  const listRef = useRef<React.ElementRef<'table'>>()
  const labelRef = useRef<HTMLLabelElement>()
  const days = useRef<Record<string, Array<CalendarDay>>>({})
  const cache = useRef<Record<string, CalendarDay[][]>>({})

  useEffect(() => {
    if (!props.noAutofocus && props.nr === 0) {
      if (listRef.current) {
        listRef.current.focus({ preventScroll: true })
      }
    }
  }, [])

  function onMouseLeaveHandler() {
    context.updateDates({
      hoverDate: null,
    })
  }

  function onKeyDownHandler(event) {
    if (String(event?.target?.nodeName).toLowerCase() === 'td') {
      try {
        listRef.current.focus({ preventScroll: true })
      } catch (e) {
        //
      }
    }

    const { nr, isRange, onlyMonth, hideNav, onKeyDown } = props

    if (typeof onKeyDown === 'function') {
      return onKeyDown(event, listRef, nr)
    }

    const keyCode = keycode(event)

    // only continue of key is one of these
    switch (keyCode) {
      case 'enter':
      case 'space':
      case 'left':
      case 'right':
      case 'up':
      case 'down':
        event.preventDefault()
        event.persist() // since we use the event after setState
        break
      default:
        return
    }

    let type = nr === 0 ? 'start' : 'end'
    if (!isRange) {
      type = 'start'
    }
    let newDate = context[`${type}Date`] as Date

    if (newDate) {
      newDate = keyNavCalc(newDate, keyCode)
    } else {
      // use the date picker month, if provided
      newDate =
        context[`${type}Month`] ||
        (isRange && nr === 1 ? addMonths(new Date(), 1) : new Date())
    }

    if (newDate === context[`${type}Date`]) {
      switch (keyCode) {
        case 'enter':
        case 'space':
          callOnSelect({
            event,
            nr,
            hidePicker: true,
          })
          break
      }
    } else {
      // const state = {...context}
      const state: {
        startDate?: Date
        endDate?: Date
      } = {}

      const currentMonth = context[`${type}Month`]

      if (
        // in case we don't have a start/end date, then we use the current month date
        (currentMonth && !context[`${type}Date`]) ||
        // if we have a larger gap between the new date and the current month in the calendar
        (currentMonth &&
          Math.abs(differenceInMonths(newDate, currentMonth)) > 1)
      ) {
        if (!isRange) {
          newDate = currentMonth
        } else {
          newDate =
            nr === 0
              ? setDate(currentMonth, 1)
              : lastDayOfMonth(currentMonth)
        }
        // only to make sure we navigate the calendar to the new date
      } else if (
        currentMonth &&
        !isSameMonth(context[`${type}Date`], currentMonth)
      ) {
        state[`${type}Month`] = newDate
      }

      newDate = findValid(newDate, keyCode)

      if (hasReachedEnd(newDate)) {
        return
      }

      state[`${type}Date`] = newDate

      // set fallbacks
      if (!isRange) {
        state.endDate = newDate
      } else {
        if (!context.startDate) {
          state.startDate = newDate
        }
        if (!context.endDate) {
          state.endDate = newDate
        }
      }

      // make sure we stay on the same month
      if (onlyMonth || hideNav) {
        if (
          !isSameMonth(state.startDate, context.startDate) ||
          !isSameMonth(state.endDate, context.startDate) // Heads up, should this not be context.endDate?
        ) {
          return
        }
      }

      context.updateDates(
        {
          startDate: state.startDate,
          endDate: state.endDate,
        },
        () => {
          // call after state update, so the input get's the latest state as well
          callOnSelect({
            event,
            nr,
            hidePicker: false,
          })
        }
      )

      // and set the focus back again
      if (listRef && listRef.current) {
        listRef.current.focus({ preventScroll: true })
      }
    }
  }

  function callOnSelect(args) {
    props.onSelect?.(args)
  }

  function keyNavCalc(date, keyCode) {
    // only to process key up and down press
    switch (keyCode) {
      case 'left':
        date = addDays(date, -1)
        break
      case 'right':
        date = addDays(date, 1)
        break
      case 'up':
        date = addWeeks(date, -1)
        break
      case 'down':
        date = addWeeks(date, 1)
        break
    }

    return date
  }

  function findValid(date, keyCode) {
    if (context.props.on_days_render) {
      const month = format(date, 'yyyy-MM')

      if (!days.current) {
        return date
      }

      if (!days.current[month]) {
        // re-render with new month
        getDays(date)
      }

      if (Array.isArray(days.current[month])) {
        const foundDate = days.current[month].find((cur) =>
          isSameDay(cur.date, date)
        )

        if (
          foundDate &&
          foundDate.date &&
          (foundDate.isDisabled ||
            foundDate.isSelectable === false ||
            foundDate.isInactive)
        ) {
          const nextDate = keyNavCalc(foundDate.date, keyCode)
          foundDate.date = findValid(nextDate, keyCode)
        }

        if (foundDate && foundDate.date) {
          return foundDate.date
        }
      }
    }

    return date
  }

  function hasReachedEnd(date: Date) {
    return isDisabled(date, context.minDate, context.maxDate)
  }

  function buildClassNames(day: DayObject) {
    return classnames(
      {
        'dnb-date-picker__day--start-date': day.isStartDate,
        'dnb-date-picker__day--end-date': day.isEndDate,
        'dnb-date-picker__day--preview': day.isPreview,
        'dnb-date-picker__day--within-selection': day.isWithinSelection,
        'dnb-date-picker__day--selectable': day.isSelectable,
        'dnb-date-picker__day--inactive': day.isInactive,
        'dnb-date-picker__day--disabled': day.isDisabled,
        'dnb-date-picker__day--today': day.isToday,
      },
      day.className
    )
  }

  function getCacheKey() {
    const { nr, month, firstDayOfWeek, onlyMonth, hideNextMonthWeek } =
      props

    const { startDate, endDate, hoverDate, maxDate, minDate } = context

    return [
      nr,
      month,
      firstDayOfWeek,
      onlyMonth,
      hideNextMonthWeek,
      startDate,
      endDate,
      hoverDate,
      maxDate,
      minDate,
    ].join('|')
  }

  function getMemorizedDays(month: Date) {
    // Cache the result, just because we then avoid at least double calc because of reconciliation,
    // but we do not avoid calculating every day during hover or select
    const key = getCacheKey()

    if (cache.current[key]) {
      return cache.current[key]
    } else {
      let count = 0
      return (cache.current[key] = Object.values(
        getDays(month).reduce((acc, cur, i) => {
          // Normalize the data for table consumption
          acc[count] = acc[count] || []
          acc[count].push(cur)
          if (i % 7 === 6) {
            count++
          }
          return acc
        }, {})
      ))
    }
  }

  type DayObject = {
    date: Date
    isToday: boolean
    isLastMonth: boolean
    isNextMonth: boolean
    isStartDate: boolean
    isEndDate: boolean
    isWithinSelection: boolean
    isPreview: boolean
    isDisabled: boolean
    isSelectable: boolean
    isInactive: boolean
    className?: string
  }

  function getDays(month: Date): DayObject[] {
    const { nr, firstDayOfWeek, onlyMonth, hideNextMonthWeek } = props

    const { startDate, endDate, hoverDate, maxDate, minDate } = context

    let daysFromCalendar = getCalendar(
      month || new Date(),
      dayOffset(firstDayOfWeek),
      {
        onlyMonth,
        hideNextMonthWeek,
      }
    ).map((date) =>
      makeDayObject(date, {
        startDate,
        endDate,
        hoverDate,
        minDate,
        maxDate,
        month,
      })
    )

    if (context.props.on_days_render) {
      const changedDays = context.props.on_days_render(
        daysFromCalendar,
        nr
      )
      if (Array.isArray(changedDays)) {
        daysFromCalendar = changedDays
      }
    }

    // // Save for later check against disabled days during key navigation
    days.current[format(month, 'yyyy-MM')] = daysFromCalendar

    return daysFromCalendar
  }

  const {
    id,
    nr,
    rtl,
    month,
    isRange,
    titleFormat,
    firstDayOfWeek,
    dayOfWeekFormat,
    hideNav,
    locale: localeCode,
    hideDays,
    onPrev,
    onNext,
    resetDate,
    onHover,
    prevBtn,
    nextBtn,
  } = props

  const {
    startDate,
    endDate,
    hoverDate,
    maxDate,
    minDate,
    translation: {
      DatePicker: { selected_month },
    },
  } = context

  const weekDays = getMemorizedDays(month)

  const locale = useMemo(() => ({ ...locales[localeCode] }), [localeCode])

  return (
    <div
      className={classnames('dnb-date-picker__calendar', rtl && 'rtl')}
      lang={localeCode}
    >
      {!hideNav && (
        <div className="dnb-date-picker__header">
          <div className="dnb-date-picker__header__nav">
            <CalendarButton
              type="prev"
              nr={nr}
              date={minDate}
              month={month}
              locale={locale}
              showButton={prevBtn}
              onClick={onPrev}
            />
          </div>
          <label
            id={`${id}--title`}
            className="dnb-date-picker__header__title dnb-no-focus"
            title={selected_month.replace(
              /%s/,
              format(month, titleFormat, {
                locale,
              })
            )}
            tabIndex={-1}
            ref={labelRef}
          >
            {format(month, titleFormat, {
              locale,
            })}
          </label>
          <div className="dnb-date-picker__header__nav">
            <CalendarButton
              type="next"
              nr={nr}
              date={maxDate}
              month={month}
              locale={locale}
              showButton={nextBtn}
              onClick={onNext}
            />
          </div>
        </div>
      )}
      <table
        role="grid"
        className="dnb-no-focus"
        tabIndex={0}
        aria-labelledby={`${id}--title`}
        onKeyDown={onKeyDownHandler}
        onMouseLeave={onMouseLeaveHandler}
        ref={listRef}
      >
        {!hideDays && (
          <thead aria-hidden>
            <tr role="row" className="dnb-date-picker__labels">
              {getWeek(dayOffset(firstDayOfWeek)).map((day, i) => (
                <th
                  key={i}
                  role="columnheader"
                  scope="col"
                  className={classnames(
                    'dnb-date-picker__labels__day',
                    `dnb-date-picker__labels__day--${format(day, 'i', {
                      locale,
                    })}`
                  )}
                  aria-label={format(day, 'EEEE', {
                    locale,
                  })}
                >
                  {format(day, dayOfWeekFormat, {
                    locale,
                  })}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {weekDays.map((week, i) => {
            return (
              <tr
                key={'week' + i}
                role="row"
                className="dnb-date-picker__days"
              >
                {week.map((day: DayObject, i) => {
                  const title = format(day.date, 'PPPP', {
                    locale,
                  })
                  const handleAsDisabled =
                    day.isLastMonth ||
                    day.isNextMonth ||
                    day.isDisabled ||
                    day.isInactive

                  // cell params
                  const paramsCell =
                    {} as React.HTMLProps<HTMLTableCellElement>
                  paramsCell.tabIndex = -1
                  if (day.isStartDate) {
                    paramsCell.id = id + '--button-start'
                  } else if (day.isEndDate) {
                    paramsCell.id = id + '--button-end'
                  }

                  // cell + button params
                  const paramsButton = {}
                  if (nr === 0 ? day.isStartDate : day.isEndDate) {
                    paramsButton['aria-current'] = 'date'
                    paramsCell['aria-selected'] = true // aria-selected is not allowed on buttons
                  }

                  return (
                    <td
                      key={'day' + i}
                      role="gridcell"
                      className={classnames(
                        'dnb-date-picker__day',
                        'dnb-no-focus',
                        buildClassNames(day)
                      )}
                      onFocus={onKeyDownHandler}
                      {...paramsCell}
                    >
                      <Button
                        size="medium"
                        variant="secondary"
                        text={format(day.date, 'd', {
                          locale,
                        })}
                        bounding={true}
                        disabled={handleAsDisabled}
                        tabIndex={handleAsDisabled ? 0 : -1} // fix for NVDA
                        aria-disabled={handleAsDisabled}
                        aria-label={title}
                        {...paramsButton}
                        on_click={
                          handleAsDisabled
                            ? undefined
                            : ({ event }) =>
                                onSelectRange({
                                  day,
                                  isRange,
                                  startDate,
                                  endDate,
                                  resetDate,
                                  event,
                                  onSelect: (state) => {
                                    context.updateDates(state, (forward) =>
                                      callOnSelect({
                                        ...forward,
                                        event,
                                        nr,
                                        hidePicker: !isRange,
                                      })
                                    )
                                  },
                                })
                        }
                        onMouseOver={
                          handleAsDisabled
                            ? undefined
                            : () => onHoverDay({ day, hoverDate, onHover })
                        }
                        onFocus={
                          handleAsDisabled
                            ? undefined
                            : () => onHoverDay({ day, hoverDate, onHover })
                        }
                      />
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default DatePickerCalendar

type CalendarButtonProps = {
  type: 'prev' | 'next'
  nr: number
  date: Date
  month: Date
  locale: CalendarLocales[keyof CalendarLocales]
  showButton: boolean
  onClick: ({ nr }: { nr: number }) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void
}

function CalendarButton({
  type,
  nr,
  date,
  month,
  locale,
  showButton,
  onClick,
  onKeyDown,
}: CalendarButtonProps) {
  const tr = useTranslation().DatePicker

  if (!showButton) {
    return <></>
  }
  const disabled = date && isSameMonth(month, date)

  const title = tr[`${type}_month`].replace(
    /%s/,
    format(subMonths(month, 1), 'MMMM yyyy', {
      locale,
    })
  )

  const icon = type === 'prev' ? 'chevron_left' : 'chevron_right'

  return (
    <Button
      className={classnames(`dnb-date-picker__${type}`, { disabled })}
      icon={icon}
      size="small"
      aria-label={title}
      onClick={() => onClick && !disabled && onClick({ nr })}
      onKeyDown={onKeyDown}
    />
  )
}

function onSelectRange({
  day,
  isRange,
  startDate,
  endDate,
  onSelect,
  resetDate,
  event,
}) {
  event.persist()

  if (!isRange) {
    // set only date
    onSelect({
      startDate: startOfDay(day.date),
      endDate: startOfDay(day.date),
      // event,
    })

    // for setting date new on every selection, do this here
  } else if (!startDate || (resetDate && startDate && endDate)) {
    // set startDate
    // user is selecting startDate
    onSelect({
      startDate: startOfDay(day.date),
      endDate: undefined,
      // event,
    })
  } else {
    const hasEndDate = endDate
    // set either startDate or endDate
    const daysToStartDate = Math.abs(
      differenceInCalendarDays(startDate, day.date)
    )
    const daysToEndDate = Math.abs(
      differenceInCalendarDays(endDate, day.date)
    )

    let range = toRange(startDate, day.date)
    if (hasEndDate && !resetDate && daysToStartDate < daysToEndDate) {
      range = toRange(endDate, day.date)
    }
    onSelect({
      startDate: startOfDay(range.startDate),
      endDate: startOfDay(range.endDate),
      // event,
    })
  }
}

function onHoverDay({
  day,
  hoverDate,
  onHover,
}: {
  day: CalendarDay
  hoverDate?: Date
  onHover: DatePickerCalendarProps['onHover']
}) {
  if (!isSameDay(day.date, hoverDate) && onHover) {
    onHover(day.date)
  }
}
