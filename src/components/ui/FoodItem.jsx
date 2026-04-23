import { useState, forwardRef } from "react";
import { Box, Typography, IconButton, styled } from "@mui/material";

export const FoodItem = forwardRef(({ img, name, price, weight }, ref) => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount((c) => c + 1);

  const handleDecrement = () => setCount((c) => Math.max(0, c - 1))

  return (
    <CardWrapper ref={ref}>
      <Box display="flex" alignItems="center" gap="10px">
        <FoodImage src={img} alt={name} />
        <Box>

          <Typography fontSize={16} fontWeight={400} color="#1a1a1a" mb="4px">
            {name}
          </Typography>

          <Box display="flex" alignItems="center" gap="12px">

            <Typography fontSize={16} fontWeight={400} color="#1a1a1a">
              {price} сом
            </Typography>

            <Typography fontSize={16} color="#aaa">
              {weight} г
            </Typography>

          </Box>

        </Box>
      </Box>

      <CounterWrapper>

        <CounterButton disableRipple onClick={handleDecrement}>
          −
        </CounterButton>

        <Typography fontSize={17} fontWeight={500} minWidth="16px" textAlign="center" marginBottom="3px">
          {count}
        </Typography>

        <CounterButton disableRipple onClick={handleIncrement}>
          +
        </CounterButton>

      </CounterWrapper>
    </CardWrapper>
  );
});

const CardWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: "16px",
  backgroundColor: "#fff",
  width: "400px",
  height: "84px",
  gap: "12px",
});

const FoodImage = styled("img")({
  width: "95px",
  height: "84px",
  borderRadius: "12px",
  objectFit: "cover",
  flexShrink: 0,
});

const CounterWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  border: "1px solid #1a1a1a",
  borderRadius: "10px",
  justifyContent: "space-between",
  width: "121px",
  height: "34px",
  padding: "0 22.5px"
});

const CounterButton = styled(IconButton)({
  padding: 0,
  color: "#1a1a1a",
  fontSize: "20px",
  lineHeight: 1,
  "&:hover": {
    backgroundColor: "transparent",
  },
});