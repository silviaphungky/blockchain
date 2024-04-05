import { Cell, Pie, PieChart as RPieChart } from 'recharts'

interface Props {
  pieData: {
    name: string
    value: number
    color: string
  }[]
  width?: number
  height?: number
  innerRadius?: number
  outerRadius?: number
  showLabel?: boolean
  cellGap?: number
}
const PieChart = ({
  pieData,
  innerRadius = 80,
  outerRadius = 100,
  width = 200,
  height = 200,
  cellGap = 0,
  showLabel = false,
}: Props) => {
  return (
    <RPieChart width={width} height={height}>
      <Pie
        data={pieData}
        dataKey="value"
        startAngle={90}
        endAngle={-270}
        cx="50%"
        cy="50%"
        paddingAngle={cellGap}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        label={showLabel}
        stroke="none"
      >
        {pieData.map((entry) => (
          <Cell
            key={`cell-${entry.name}`}
            fill={entry.color}
            style={{ outline: 'none' }}
          />
        ))}
      </Pie>
    </RPieChart>
  )
}

export default PieChart
