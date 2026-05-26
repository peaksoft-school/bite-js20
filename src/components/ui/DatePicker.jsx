import { useState, useRef, useEffect } from 'react'
import { Box, Typography, IconButton, styled } from '@mui/material'
import { RightArrowIcon, LeftArrowIcon } from '../../assets/icons'

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

export const DatePicker = () => {
  const today = new Date()

  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(today)
  const [current, setCurrent] = useState(today)

  const ref = useRef(null)

  useEffect(() => {
    const close = (e) => !ref.current?.contains(e.target) && setOpen(false)

    document.addEventListener('mousedown', close)

    return () => document.removeEventListener('mousedown', close)
  }, [])

  const y = current.getFullYear()
  const m = current.getMonth()

  const days = new Date(y, m + 1, 0).getDate()
  const start = (new Date(y, m, 1).getDay() + 6) % 7

  const isFuture = (d) => new Date(y, m, d) > today

  return (
    <StyleWrapper ref={ref}>
      <StyleInput onClick={() => setOpen((p) => !p)}>
        {`[ ${selected.toLocaleDateString('ru-RU')} ]`}
      </StyleInput>

      {open && (
        <StyleCalendar>
          <StyleHeader>
            <IconButton onClick={() => setCurrent(new Date(y, m - 1, 1))}>
              <img src={LeftArrowIcon} />
            </IconButton>

            <Typography>
              {current.toLocaleString('ru', { month: 'long' })} {y}
            </Typography>

            <IconButton onClick={() => setCurrent(new Date(y, m + 1, 1))}>
              <img src={RightArrowIcon} />
            </IconButton>
          </StyleHeader>

          <StyleWeekRow>
            {weekDays.map((d) => (
              <StyleWeekDay key={d}>{d}</StyleWeekDay>
            ))}
          </StyleWeekRow>

          <StyleGrid>
            {Array.from({ length: start }).map((_, i) => (
              <StyleEmpty key={i} />
            ))}

            {Array.from({ length: days }, (_, i) => {
              const d = i + 1

              const selectedDay =
                selected.getDate() === d &&
                selected.getMonth() === m &&
                selected.getFullYear() === y

              const disabled = isFuture(d)

              return (
                <StyleDay
                  key={d}
                  selected={selectedDay}
                  disabled={disabled}
                  onClick={() => !disabled && (setSelected(new Date(y, m, d)), setOpen(false))}
                >
                  {d}
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
  padding: '0 16px',
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
})

const StyleWeekDay = styled(Typography)({
  color: '#00000099',
  fontSize: '12px',
  textAlign: 'center',
})

const StyleGrid = styled(Box)({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  height: '210px',
  padding: '0 16px 8px',
})

const StyleEmpty = styled(Box)({
  height: '36px',
})

const StyleDay = styled(Box)(({ selected, disabled }) => ({
  height: '32px',
  width: '32px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  cursor: disabled ? 'default' : 'pointer',

  ...(selected && {
    backgroundColor: '#dc8a08',
    color: '#fff',
  }),

  '&:hover': {
    border: disabled ? 'transparent' : '1px solid #dc8a08',
  },
}))
