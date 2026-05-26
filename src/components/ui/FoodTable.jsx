import { useState } from 'react'
import { styled } from '@mui/material/styles'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  Typography,
  Box,
} from '@mui/material'

import deleteIcon from '../../assets/icons/svgs/clean-basket.svg'
import editIcon from '../../assets/icons/svgs/pencil-square.svg'

export default function FoodTable({ foods: initialFoods }) {
  const [foods, setFoods] = useState(initialFoods)

  const deleteFood = (id) => setFoods((prev) => prev.filter((f) => f.id !== id))

  const toggleStock = (id) =>
    setFoods((prev) => prev.map((f) => (f.id === id ? { ...f, inStock: !f.inStock } : f)))

  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <HeaderCell padding="checkbox" />
            <HeaderCell>Товар</HeaderCell>
            <HeaderCell align="left">Название товара</HeaderCell>
            <HeaderCell>Цена</HeaderCell>
            <HeaderCell>Статус</HeaderCell>
            <HeaderCell>Прочие</HeaderCell>
            <HeaderCell />
          </TableRow>
        </TableHead>

        <TableBody>
          {foods.map((food, index) => (
            <BodyRow key={food.id} index={index}>
              <BodyCell padding="checkbox">
                <StyledCheckbox size="small" />
              </BodyCell>

              <BodyCell>
                <FoodImage src={food.img} alt={food.name} />
              </BodyCell>

              <NameCell>{food.name}</NameCell>

              <BodyCell>
                {food.oldPrice ? (
                  <Box>
                    <NewPrice>{food.price} сом</NewPrice>
                    <OldPrice>{food.oldPrice} сом</OldPrice>
                  </Box>
                ) : (
                  `${food.price} сом`
                )}
              </BodyCell>

              <BodyCell>
                <StatusText instock={food.inStock} onClick={() => toggleStock(food.id)}>
                  {food.inStock ? 'В наличии' : 'Нет в наличии'}
                  <Arrow>⌄</Arrow>
                </StatusText>
              </BodyCell>

              <BodyCell>
                <CompositionBtn>
                  Состав продукта
                  <Arrow>⌄</Arrow>
                </CompositionBtn>
              </BodyCell>

              <BodyCell>
                <Actions>
                  <DeleteBtn onClick={() => deleteFood(food.id)}>
                    <img src={deleteIcon} alt="delete" />
                  </DeleteBtn>

                  <EditBtn>
                    <img src={editIcon} alt="edit" />
                  </EditBtn>
                </Actions>
              </BodyCell>
            </BodyRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}

const StyledTableContainer = styled(TableContainer)({
  borderRadius: 8,
  boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
})

const HeaderCell = styled(TableCell)({
  background: '#cc2222',
  color: '#fff',
  fontWeight: 600,
  fontSize: 13,
  textAlign: 'center',
  padding: '10px 12px',
  borderBottom: 'none',
})

const BodyRow = styled(TableRow)(({ index }) => ({
  background: index % 2 === 0 ? '#fafafa' : '#f2f2f2',
  '&:hover': { background: '#e8e8e8' },
}))

const BodyCell = styled(TableCell)({
  padding: '8px 12px',
  borderBottom: '1px solid #e8e8e8',
  textAlign: 'center',
  fontSize: 14,
})

const NameCell = styled(BodyCell)({
  textAlign: 'left',
})

const StyledCheckbox = styled(Checkbox)({
  '&.Mui-checked': {
    color: '#cc2222',
  },
})

const FoodImage = styled('img')({
  width: 80,
  height: 60,
  objectFit: 'cover',
  borderRadius: 6,
})

const NewPrice = styled(Typography)({
  fontSize: 14,
  fontWeight: 600,
  color: '#e67e00',
})

const OldPrice = styled(Typography)({
  fontSize: 12,
  color: '#999',
  textDecoration: 'line-through',
})

const StatusText = styled(Typography)(({ instock }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  fontSize: 13,
  fontWeight: 500,
  cursor: 'pointer',
  color: instock ? '#27ae60' : '#e67e00',
}))

const CompositionBtn = styled(Box)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 4,
  fontSize: 13,
  cursor: 'pointer',
})

const Actions = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 8,
})

const DeleteBtn = styled(IconButton)({
  color: '#bbb',
  '&:hover': {
    color: '#cc2222',
  },
})

const EditBtn = styled(IconButton)({
  color: '#bbb',
  '&:hover': {
    color: '#2255cc',
  },
})

const Arrow = styled('span')({
  marginLeft: 4,
  marginBottom: 7,
})
