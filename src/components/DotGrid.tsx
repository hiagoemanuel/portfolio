type oneOrZero = '1' | '0'

interface DotGridProps {
  rows: [
    [oneOrZero, oneOrZero, oneOrZero],
    [oneOrZero, oneOrZero, oneOrZero],
    [oneOrZero, oneOrZero, oneOrZero],
  ]
  position: string
}

export const DotGrid = ({ rows, position }: DotGridProps) => {
  return (
    <span className={`flex flex-col gap-2 absolute ${position}`}>
      {rows.map((row, index) => {
        return (
          <span className="flex gap-2" key={index}>
            {row.map((number, index) => {
              if (number === '1') {
                return <span className="w-3 h-3 rounded-full bg-[#FF4342]" key={index} />
              } else {
                return <span className="w-3 h-3" key={index} />
              }
            })}
          </span>
        )
      })}
    </span>
  )
}
