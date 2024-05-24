type oneOrZero = '1' | '0'

interface DotGridProps {
  rows: [
    [oneOrZero, oneOrZero, oneOrZero],
    [oneOrZero, oneOrZero, oneOrZero],
    [oneOrZero, oneOrZero, oneOrZero],
  ]
  position: ['top' | 'bottom', 'right' | 'left']
  className?: string
}

export const DotGrid = ({ rows, position, className }: DotGridProps) => {
  const direction = {
    top: 'top-4',
    right: 'right-4',
    bottom: 'bottom-4',
    left: 'left-4',
  }

  const MergeStyle: string = direction[position[0]] + ' ' + direction[position[1]]

  return (
    <span className={`flex flex-col gap-2 sm:gap-3 absolute ${MergeStyle} ${className}`}>
      {rows.map((row, index) => {
        return (
          <span className="flex gap-2 sm:gap-3" key={index}>
            {row.map((number, index) => {
              if (number === '1') {
                return (
                  <span className="w-3 h-3 sm:w-6 sm:h-6 rounded-full bg-[#FF4342]" key={index} />
                )
              } else {
                return <span className="w-3 h-3 sm:w-6 sm:h-6" key={index} />
              }
            })}
          </span>
        )
      })}
    </span>
  )
}
