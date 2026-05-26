import { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { Card } from './ui/cards/Card'
import { DatePicker } from './ui/DatePicker'

const MOCK_DATA = [
  { hour: '1:00', sales: 10 },
  { hour: '2:00', sales: 8 },
  { hour: '3:00', sales: 7 },
  { hour: '4:00', sales: 9 },
  { hour: '5:00', sales: 12 },
  { hour: '6:00', sales: 18 },
  { hour: '7:00', sales: 30 },
  { hour: '8:00', sales: 45 },
  { hour: '9:00', sales: 70 },
  { hour: '10:00', sales: 110 },
  { hour: '11:00', sales: 155 },
  { hour: '12:00', sales: 210 },
  { hour: '13:00', sales: 245 },
  { hour: '14:00', sales: 270 },
  { hour: '15:00', sales: 295 },
  { hour: '16:00', sales: 310 },
  { hour: '17:00', sales: 355 },
  { hour: '18:00', sales: 385 },
  { hour: '19:00', sales: 420 },
  { hour: '20:00', sales: 450 },
  { hour: '21:00', sales: 230 },
  { hour: '22:00', sales: 120 },
  { hour: '23:00', sales: 75 },
  { hour: '00:00', sales: 50 },
]

const CHART_W = 580
const CHART_H = 220
const PAD_L = 52
const PAD_T = 12
const PAD_B = 36
const INNER_H = CHART_H - PAD_T - PAD_B
const INNER_W = CHART_W - PAD_L - 8
const MAX_VAL = 500
const Y_TICKS = [0, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500]

const PageWrapper = styled('div')({
  minHeight: '100vh',
  background: '#fff',
  fontFamily: "'Helvetica Neue', Arial, sans-serif",
  padding: '36px 44px',
  color: '#111',
})

const PageTitle = styled('h1')({
  fontSize: 36,
  fontWeight: 900,
  margin: '0 0 28px 0',
  textTransform: 'uppercase',
})

const ChartCard = styled('div')({
  background: '#f4f4f4',
  borderRadius: 18,
  padding: '24px 28px 22px',
  marginBottom: 44,
  width: 732,
})

const ChartCardTitle = styled('div')({
  fontSize: 18,
  fontWeight: 400,
  color: '#222',
  marginBottom: 18,
})

const ChartRow = styled('div')({
  display: 'flex',
  gap: 20,
  alignItems: 'flex-start',
})

const ChartWrapper = styled('div')({
  flex: 1,
  minWidth: 0,
  position: 'relative',
})

const ChartSvgWrapper = styled('div')({
  position: 'relative',
  width: '100%',
})

const ChartSvg = styled('svg')({
  width: '100%',
  display: 'block',
})

const LoadingBox = styled('div')({
  height: 220,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#666',
  borderRadius: 6,
  color: '#ddd',
  fontSize: 14,
})

const Tooltip = styled('div')({
  position: 'absolute',
  top: '8%',
  transform: 'translateX(-50%)',
  background: '#222',
  color: '#fff',
  fontSize: 11,
  padding: '4px 9px',
  borderRadius: 5,
  pointerEvents: 'none',
  whiteSpace: 'nowrap',
  border: '1px solid #555',
  zIndex: 10,
})

const SectionTitle = styled('h2')({
  fontSize: 32,
  fontWeight: 800,
  margin: '0 0 10px 0',
})

const PeriodSelector = styled('div')({
  display: 'inline-flex',
  alignItems: 'center',
  gap: 5,
  fontSize: 14,
  color: '#444',
  cursor: 'pointer',
  marginBottom: 20,
  userSelect: 'none',
})

export default function AdminMainPage() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [tooltip, setTooltip] = useState(null)
  const [periodOpen, setPeriodOpen] = useState(false)

  useEffect(() => {
    const fetchStats = async () => {
      setLoading(true)
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) throw new Error(`HTTP ${response.status}`)
        const json = await response.json()
        const transformed = Array.from({ length: 24 }, (_, i) => ({
          hour: `${i + 1}:00`,
          sales: json[i] ? ((json[i].id * 19 + json[i].userId * 31) % 470) + 10 : 10,
        }))
        setData(transformed)
      } catch {
        setData(MOCK_DATA)
      } finally {
        setLoading(false)
      }
    }
    fetchStats()
  }, [])

  const barCount = data.length
  const slotW = barCount > 0 ? INNER_W / barCount : 0
  const barW = Math.max(slotW * 0.6, 5)

  return (
    <PageWrapper>
      <PageTitle>Статистика</PageTitle>

      <ChartCard>
        <ChartCardTitle>Графика продаж ( все заказы )</ChartCardTitle>

        <ChartRow>
          <ChartWrapper>
            {loading ? (
              <LoadingBox>Загрузка...</LoadingBox>
            ) : (
              <ChartSvgWrapper>
                <ChartSvg viewBox={`0 0 ${CHART_W} ${CHART_H}`}>
                  <rect x={PAD_L} y={PAD_T} width={INNER_W} height={INNER_H} fill="#666" rx="3" />

                  {Y_TICKS.map((tick) => {
                    const y = PAD_T + INNER_H - (tick / MAX_VAL) * INNER_H
                    return (
                      <g key={tick}>
                        <line
                          x1={PAD_L}
                          x2={PAD_L + INNER_W}
                          y1={y}
                          y2={y}
                          stroke="rgba(255,255,255,0.15)"
                          strokeWidth="0.5"
                        />
                        <text x={PAD_L - 5} y={y + 3.5} textAnchor="end" fontSize="8.5" fill="#999">
                          {tick}
                        </text>
                      </g>
                    )
                  })}

                  {data.map((d, i) => {
                    const barH = Math.max((d.sales / MAX_VAL) * INNER_H, 1)
                    const x = PAD_L + i * slotW + (slotW - barW) / 2
                    const y = PAD_T + INNER_H - barH
                    return (
                      <rect
                        key={d.hour}
                        x={x}
                        y={y}
                        width={barW}
                        height={barH}
                        fill="#4a8fd4"
                        rx="1"
                        style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setTooltip({ hour: d.hour, sales: d.sales, xi: i })}
                        onMouseLeave={() => setTooltip(null)}
                      />
                    )
                  })}

                  {data.map((d, i) => {
                    if (i % 2 !== 0) return null
                    const cx = PAD_L + i * slotW + slotW / 2
                    return (
                      <text
                        key={d.hour}
                        x={cx}
                        y={CHART_H - 8}
                        textAnchor="middle"
                        fontSize="8"
                        fill="#999"
                      >
                        {d.hour}
                      </text>
                    )
                  })}

                  <text
                    x={10}
                    y={PAD_T + INNER_H / 2}
                    textAnchor="middle"
                    fontSize="8.5"
                    fill="#999"
                    transform={`rotate(-90,10,${PAD_T + INNER_H / 2})`}
                  >
                    количество продаж
                  </text>

                  <text
                    x={PAD_L + INNER_W / 2}
                    y={CHART_H - 0.5}
                    textAnchor="middle"
                    fontSize="8.5"
                    fill="#999"
                  >
                    время - часы
                  </text>
                </ChartSvg>

                {tooltip !== null && (
                  <Tooltip
                    style={{
                      left: `${(PAD_L / CHART_W) * 100 + tooltip.xi * (INNER_W / CHART_W / barCount) * 100 + 2}%`,
                    }}
                  >
                    {data[tooltip.xi].hour} — {data[tooltip.xi].sales} заказов
                  </Tooltip>
                )}
              </ChartSvgWrapper>
            )}
          </ChartWrapper>

          <DatePicker />
        </ChartRow>
      </ChartCard>

      <div>
        <SectionTitle>Топ заведние</SectionTitle>

        <PeriodSelector onClick={() => setPeriodOpen((v) => !v)}>
          выбрать период
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d={periodOpen ? 'M3 9l4-4 4 4' : 'M3 5l4 4 4-4'}
              stroke="#555"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </PeriodSelector>

        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>
      </div>
    </PageWrapper>
  )
}
