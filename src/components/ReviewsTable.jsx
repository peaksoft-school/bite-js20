import React, { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Box,
  Rating,
  Pagination,
  Typography,
} from '@mui/material'

const initialRows = [
  {
    id: 1,
    place: 'Бургерный дом',
    customer: 'Али Алибеков',
    rating: 5,
    time: '19:20',
    status: 'Новый',
    comment: 'Мне очень п...',
  },
  {
    id: 2,
    place: 'Бургерный дом',
    customer: 'Бекболсун',
    rating: 4,
    time: '19:20',
    status: 'Новый',
    comment: 'Нормально м..',
  },
  {
    id: 3,
    place: 'Бургерный дом',
    customer: 'Бексултан П..',
    rating: 5,
    time: '19:20',
    status: 'Новый',
    comment: 'Мне очень п...',
  },
  {
    id: 4,
    place: 'Бургерный дом',
    customer: 'Вера Липова',
    rating: 3,
    time: '19:20',
    status: 'Новый',
    comment: 'Ну так себе :(',
  },
  {
    id: 5,
    place: 'Бургерный дом',
    customer: 'Кира Мирова',
    rating: 5,
    time: '19:20',
    status: 'Новый',
    comment: 'Мне понрави..',
  },
  {
    id: 6,
    place: 'Бургерный дом',
    customer: 'Алибек Пе..',
    rating: 5,
    time: '19:20',
    status: 'Новый',
    comment: 'Мне очень п...',
  },
  {
    id: 7,
    place: 'Бургерный дом',
    customer: 'Али Маринов',
    rating: 5,
    time: '19:20',
    status: 'Новый',
    comment: 'Мне очень п...',
  },
]

export default function ReviewsTable() {
  const [selected, setSelected] = useState([])
  const [page, setPage] = useState(1)

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = initialRows.map((n) => n.id)
      setSelected(newSelected)
      return
    }
    setSelected([])
  }

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id)
    let newSelected = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }
    setSelected(newSelected)
  }

  const isSelected = (id) => selected.indexOf(id) !== -1

  return (
    <Box sx={{ width: '100%', mb: 2 }}>
      <TableContainer
        component={Paper}
        elevation={0}
        sx={{ borderRadius: '4px', overflow: 'hidden' }}
      >
        <Table sx={{ minWidth: 750 }} aria-label="reviews table">
          <TableHead sx={{ bgcolor: '#E1251B' }}>
            <TableRow>
              <TableCell padding="checkbox" sx={{ borderBottom: 'none' }}>
                <Checkbox
                  color="primary"
                  indeterminate={selected.length > 0 && selected.length < initialRows.length}
                  checked={initialRows.length > 0 && selected.length === initialRows.length}
                  onChange={handleSelectAllClick}
                  sx={{
                    color: '#fff',
                    '&.Mui-checked': { color: '#fff' },
                    '&.MuiCheckbox-indeterminate': { color: '#fff' },
                  }}
                />
              </TableCell>
              {['Заведение', 'Заказчик', 'Оценка', 'Время заказа', 'Статус', 'Комментарии'].map(
                (headCell) => (
                  <TableCell
                    key={headCell}
                    align="center"
                    sx={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: '13px',
                      borderBottom: 'none',
                      py: 1.5,
                    }}
                  >
                    {headCell}
                  </TableCell>
                )
              )}
            </TableRow>
          </TableHead>

          <TableBody>
            {initialRows.map((row, index) => {
              const isItemSelected = isSelected(row.id)

              return (
                <TableRow
                  hover
                  onClick={(event) => handleClick(event, row.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={row.id}
                  selected={isItemSelected}
                  sx={{
                    cursor: 'pointer',
                    bgcolor: index % 2 === 1 ? '#F9F9F9' : '#fff',
                    '&.Mui-selected': { bgcolor: 'rgba(225, 37, 27, 0.08) !important' },
                  }}
                >
                  <TableCell padding="checkbox" sx={{ borderBottom: '1px solid #F0F0F0' }}>
                    <Checkbox
                      color="primary"
                      checked={isItemSelected}
                      sx={{ '&.Mui-checked': { color: '#E1251B' } }}
                    />
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: '1px solid #F0F0F0', color: '#333', fontWeight: 500 }}
                  >
                    {row.place}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: '1px solid #F0F0F0', color: '#333' }}
                  >
                    {row.customer}
                  </TableCell>

                  <TableCell align="center" sx={{ borderBottom: '1px solid #F0F0F0' }}>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 1,
                      }}
                    >
                      <Rating value={row.rating} readOnly size="small" sx={{ color: '#000' }} />
                      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                        {row.rating}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: '1px solid #F0F0F0', color: '#666' }}
                  >
                    {row.time}
                  </TableCell>

                  <TableCell
                    align="center"
                    sx={{ borderBottom: '1px solid #F0F0F0', color: '#9E9E9E' }}
                  >
                    {row.status}
                  </TableCell>

                  <TableCell
                    align="left"
                    sx={{
                      borderBottom: '1px solid #F0F0F0',
                      color: '#333',
                      maxWidth: '200px',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {row.comment}
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Pagination
          count={10}
          page={page}
          onChange={(e, value) => setPage(value)}
          variant="outlined"
          shape="rounded"
          sx={{
            '& .MuiPaginationItem-root': {
              border: 'none',
              borderRadius: '4px',
              '&.Mui-selected': {
                bgcolor: '#F5F5F5',
                color: '#333',
                fontWeight: 'bold',
                '&:hover': { bgcolor: '#E0E0E0' },
              },
            },
          }}
        />
      </Box>
    </Box>
  )
}
