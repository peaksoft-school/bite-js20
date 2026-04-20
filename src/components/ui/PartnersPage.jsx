import { useState } from 'react'
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  styled,
  Box,
} from '@mui/material'

const faqData = [
  {
    id: 1,
    question: 'Кто может стать партнером?',
    answer:
      'Партнёром может стать зарегистрированное заведение общественного питания: ресторан, кафе, кофейня, пекарня или dark kitchen.',
  },
  {
    id: 2,
    question: 'Нужно ли зарегистрированный бизнес?',
    answer: 'Да, необходимо быть ИП или юридическим лицом для заключения договора.',
  },
  {
    id: 3,
    question: 'Как проходит процесс подключения?',
    answer: 'Вы отправляете заявку, проходит модерация и получаете доступ.',
  },
  {
    id: 4,
    question: 'Сколько стоит размещение?',
    answer: 'Комиссия обсуждается индивидуально.',
  },
  {
    id: 5,
    question: 'Как проходят выплаты?',
    answer: 'Деньги поступают через платформу с удержанием комиссии.',
  },
]

export const PartnersPage = () => {
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (_, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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

      {faqData.map((item) => (
        <StyledAccordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <StyledSummary>
            <StyledQuestionText>
              {item.id}. {item.question}
            </StyledQuestionText>
          </StyledSummary>

          <AccordionDetails sx={{ p: 0 }}>
            <StyledAnswerText>{item.answer}</StyledAnswerText>
          </AccordionDetails>
        </StyledAccordion>
      ))}
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  marginBottom: theme.spacing(6),
  paddingLeft: '30px',
  maxWidth: '800px',
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
  '& .MuiAccordionSummary-content': {
    margin: '16px 0',
  },
}))

const StyledQuestionText = styled(Typography)(() => ({
  fontWeight: 700,
}))

const StyledAnswerText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  paddingBottom: theme.spacing(2),
}))
