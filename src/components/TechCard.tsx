export const TechCard = ({
  name,
  icon,
  singlePage,
}: {
  name: string
  icon: string
  singlePage?: boolean
}) => {
  return (
    <div
      className={`${singlePage ? 'w-64 h-26' : 'w-37 h-18'} xs:w-48 sm:w-76 xs:h-24 sm:h-36 rounded-lg sm:rounded-xl flex flex-col justify-center items-center gap-1 bg-main`}
    >
      <div className="h-10 xs:h-14 sm:h-20" dangerouslySetInnerHTML={{ __html: icon }}></div>
      <h5 className="text-xs xs:text-base sm:text-base font-bold text-light dark:text-dark">
        {name}
      </h5>
    </div>
  )
}
