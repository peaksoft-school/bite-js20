import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import CloseIcon from '@mui/icons-material/Close'
import { PARTNERS_QUESTIONS } from '../utils/constants'

export const Partners = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (_, isExpanded) => setExpanded(isExpanded ? panel : false)

  return (
    <StyledWrapper>
      <StyledTitle variant="h4">Для партнёров</StyledTitle>

      <StyledDescription>
        Мы открыты к сотрудничеству с ресторанами, кафе и локальными брендами, которые хотят
        увеличить количество заказов. Платформа помогает автоматизировать процессы и расширить
        аудиторию.
        <br />
        <br />
        После подачи заявки информация проходит проверку. После одобрения вы получаете доступ к
        управлению заказами.
      </StyledDescription>

      {PARTNERS_QUESTIONS.map(({ id, question, answer }, i) => (
        <StyledAccordion key={id} expanded={expanded === id} onChange={handleChange(id)}>
          <StyledSummary
            expandIcon={expanded === id ? <CloseIcon color="black" /> : <AddIcon color="black" />}
          >
            <StyledQuestionText>
              {i + 1}. {question}
            </StyledQuestionText>
          </StyledSummary>

          <AccordionDetails sx={{ p: 0 }}>
            <StyledAnswerText>{answer}</StyledAnswerText>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  padding: '0 30px',
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  marginBottom: theme.spacing(2),
}))

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  lineHeight: 1.6,
  marginBottom: theme.spacing(4),
}))

const StyledAccordion = styled(Accordion)(() => ({
  boxShadow: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',

  '&:before': { display: 'none' },
}))

const StyledSummary = styled(AccordionSummary)(() => ({
  padding: 0,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',

  '& .MuiAccordionSummary-content': {
    margin: '16px 0',
  },

  '& .MuiAccordionSummary-expandIconWrapper': {
    marginRight: 0,
  },
}))

const StyledQuestionText = styled(Typography)(() => ({
  fontWeight: 700,
}))

const StyledAnswerText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  paddingBottom: theme.spacing(2),
}))
