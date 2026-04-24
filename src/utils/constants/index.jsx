import { Box } from '@mui/material'
import {
  BannersIcon,
  CategoriesIcon,
  DishesIcon,
  EstablishmentsIcon,
  HomePageIcon,
  IconamoonIcon,
  OrdersIcon,
  ReviewsIcon,
  SettingsIcon,
} from '../../assets/icons'

export const BANNER_DATA = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d',
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341',
  },
]

export const SIDEBAR_ADMIN = [
  { text: 'Главная', icon: <Box component="img" src={HomePageIcon} alt="homepage" /> },
  { text: 'Заведения', icon: <Box component="img" src={EstablishmentsIcon} alt="establishment" /> },
]

export const SIDEBAR_VENDOR = [
  { text: 'Главная', icon: <Box component="img" src={HomePageIcon} alt="homepage" /> },
  {
    text: 'Мои заведения',
    icon: <Box component="img" src={EstablishmentsIcon} alt="establishment" />,
  },
  { text: 'Блюда', icon: <Box component="img" src={DishesIcon} alt="dishes" /> },
  { text: 'Баннеры', icon: <Box component="img" src={BannersIcon} alt="banner" /> },
  { text: 'Заказы', icon: <Box component="img" src={OrdersIcon} alt="order" /> },
  { text: 'Категории', icon: <Box component="img" src={CategoriesIcon} alt="categorie" /> },
  { text: 'Отзывы', icon: <Box component="img" src={ReviewsIcon} alt="review" /> },
  { text: 'Настройки', icon: <Box component="img" src={SettingsIcon} alt="setting" /> },
  { text: 'Промокод', icon: <Box component="img" src={IconamoonIcon} alt="iconamoon" /> },
]

export const SIDEBAR_ADMIN_MODARATION = [
  { text: 'Баннеры', icon: <Box component="img" src={BannersIcon} alt="banner" /> },
  { text: 'Отзывы', icon: <Box component="img" src={ReviewsIcon} alt="review" /> },
  { text: 'Блюда', icon: <Box component="img" src={DishesIcon} alt="dishes" /> },
]

export const PARTNERS_QUESTIONS = [
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
