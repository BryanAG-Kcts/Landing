interface IRow {
  name: string
  color: string
}

export const Row = ({ color, name }: IRow): JSX.Element => {
  const repeat = new Array(15).fill(null)
  const posColor = [0, 2, 4, 6, 8, 10, 12, 14]
  return (
    <div className='rowAnimate mb-8 flex justify-center'>
      {
        repeat.map((_, index) => {
          const isFinalColor = posColor.includes(index) ? color : 'opacity-20'
          return <span key={index} className={isFinalColor}>{name}&nbsp;</span>
        })
      }
    </div>
  )
}
