import React, { useState, useRef, useEffect } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

import { RightArrowIcon, LeftArrowIcon } from '../../assets/icons'

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate()

const getFirstDay = (year, month) => {
  let day = new Date(year, month, 1).getDay()
  return day === 0 ? 6 : day - 1
}

const formatDate = (date) => {
  const d = String(date.getDate()).padStart(2, '0')
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const y = date.getFullYear()
  return `${d}.${m}.${y}`
}

export const DatePicker = () => {
  const today = new Date()

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(today)
  const [current, setCurrent] = useState(today)

  const ref = useRef()

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const year = current.getFullYear()
  const month = current.getMonth()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDay(year, month)

  const isFuture = (day) => {
    const d = new Date(year, month, day)
    return d > today
  }

  const handleSelect = (day) => {
    if (isFuture(day)) return

    const newDate = new Date(year, month, day)
    setSelected(newDate)

    setOpen(false)
  }

  const prevMonth = () => {
    setCurrent(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrent(new Date(year, month + 1, 1))
  }

  const monthName = current.toLocaleString('ru', { month: 'long' })

  return (
    <StyleWrapper ref={ref}>
      <StyleInput onClick={() => setOpen(!open)}>{`[ ${formatDate(selected)} ]`}</StyleInput>

      {open && (
        <StyleCalendar>
          <StyleHeader>
            <IconButton onClick={prevMonth}>
              <Box component={'img'} src={LeftArrowIcon} fontSize="small" />
            </IconButton>

            <Typography>
              {monthName} {year}
            </Typography>

            <IconButton onClick={nextMonth}>
              <Box component={'img'} src={RightArrowIcon} fontSize="small" />
            </IconButton>
          </StyleHeader>

          <StyleWeekRow>
            {weekDays.map((d) => (
              <StyleWeekDay key={d}>{d}</StyleWeekDay>
            ))}
          </StyleWeekRow>

          <StyleGrid>
            {[...Array(firstDay)].map((_, i) => (
              <StyleEmpty key={i} />
            ))}

            {[...Array(daysInMonth)].map((_, i) => {
              const day = i + 1
              const disabled = isFuture(day)

              const isSelected =
                selected.getDate() === day &&
                selected.getMonth() === month &&
                selected.getFullYear() === year

              return (
                <StyleDay
                  key={day}
                  disabled={disabled ? 1 : 0}
                  selected={isSelected ? 1 : 0}
                  onClick={() => handleSelect(day)}
                >
                  {day}
                </StyleDay>
              )
            })}
          </StyleGrid>
        </StyleCalendar>
      )}
    </StyleWrapper>
  )
}

const StyleWrapper = styled(Box)({
  position: 'relative',
})

const StyleInput = styled(Box)({
  border: 'none',
  cursor: 'pointer',
})

const StyleCalendar = styled(Box)({
  width: '256px',
  height: '300px',
  position: 'absolute',
  background: '#FFFFFF',
  top: '50px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
  zIndex: 10,
})

const StyleHeader = styled(Box)({
  height: '52px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  color: '#00000099',
  fontWeight: '500',
  fontSize: '14px',
  textTransform: 'capitalize',
  marginTop: '16px',
  padding: '16px 24px 12px 24px',
})

const StyleWeekRow = styled(Box)({
  height: '32px',
  paddingLeft: '16px',
  paddingRight: '16px',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
})

const StyleWeekDay = styled(Typography)({
  color: '#00000099',
  fontWeight: '400px',
  fontSize: '12px',
  textAlign: 'center',
})

const StyleGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  height: '210px',
  padding: '0px 16px 8px 16px',
})

const StyleEmpty = styled(Box)({
  height: '36px',
})

const StyleDay = styled(Box)(({ selected, disabled }) => ({
  height: '32px',
  width: '32px',
  fontSize: '14px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: disabled ? 'default' : 'pointer',
  marginBottom: '2px',

  ...(selected && {
    backgroundColor: '#dc8a08',
    color: '#FFFFFF',
  }),

  '&:hover': {
    border: disabled ? 'transparent' : '1px solid #dc8a08',
  },
}))
