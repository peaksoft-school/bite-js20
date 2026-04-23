import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Typography,
  Button,
  Box,
  TextField,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { ReviewsIcon, CloseOutline, StarIcon } from '../../assets/icons'

export const Modal = () => {
  const [open, setOpen] = useState(false)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)
  const [comment, setComment] = useState('')

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const handleSubmit = () => {
    console.log({ rating, comment })
    handleClose()
  }

  return (
    <>
      <OpenButton onClick={handleOpen}>
        <img src={ReviewsIcon} alt="open" />
      </OpenButton>

      {createPortal(
        <StyledDialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
          <StyledDialogTitle>
            Оценить заведение
            <IconButton onClick={handleClose}>
              <img src={CloseOutline} alt="close" />
            </IconButton>
          </StyledDialogTitle>

          <DialogContent>
            <StarsWrapper>
              {[1, 2, 3, 4, 5].map((star) => {
                const isActive = star <= (hover || rating)
                return (
                  <IconButton
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHover(star)}
                    onMouseLeave={() => setHover(0)}
                  >
                    <StarImage src={StarIcon} alt="star" $active={isActive} />
                  </IconButton>
                )
              })}
            </StarsWrapper>

            <CommentLabel>Оставьте комментарий</CommentLabel>
            <CommentField
              fullWidth
              multiline
              rows={4}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              inputProps={{ maxLength: 80 }}
            />
            <CharCounter>{comment.length}/80</CharCounter>
          </DialogContent>

          <StyledDialogActions>
            <SendButton variant="contained" onClick={handleSubmit}>
              Отправить
            </SendButton>
          </StyledDialogActions>
        </StyledDialog>,
        document.getElementById('modal-root')
      )}
    </>
  )
}

const OpenButton = styled(IconButton)({
  cursor: 'pointer',
})

const StyledDialog = styled(Dialog)({
  '& .MuiPaper-root': {
    borderRadius: 16,
    padding: 16,
  },
})

const StyledDialogTitle = styled(DialogTitle)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontWeight: 700,
  fontSize: 28,
})

const StarsWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  gap: 12,
  marginBottom: 24,
})

const StarImage = styled('img', {
  shouldForwardProp: (prop) => prop !== '$active',
})(({ $active }) => ({
  width: 40,
  height: 40,
  opacity: $active ? 1 : 0.3,
  transform: $active ? 'scale(1.2)' : 'scale(1)',
  transition: 'all 0.25s ease',
  filter: $active
    ? 'brightness(0) saturate(100%) invert(78%) sepia(93%) saturate(749%) hue-rotate(359deg) brightness(102%) contrast(101%)'
    : 'none',
}))

const CommentLabel = styled(Typography)({
  marginBottom: 8,
})

const CommentField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: '#000',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#000',
    },
  },
})

const CharCounter = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-end',
  fontSize: 12,
  marginTop: 4,
})

const StyledDialogActions = styled(DialogActions)({
  justifyContent: 'flex-end',
  padding: '16px 24px',
})

const SendButton = styled(Button)({
  backgroundColor: '#FFD600',
  color: '#000',
  borderRadius: 12,
  padding: '10px 24px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#ffca00',
  },
})
