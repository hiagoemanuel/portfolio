export const TechCard = ({ name, icon }: { name: string; icon: JSX.Element }) => {
  return (
    <div className="w-37 xs:w-48 sm:w-76 h-18 xs:h-24 sm:h-36 rounded-lg sm:rounded-xl flex flex-col justify-center items-center gap-1 bg-main">
      <div className="h-10 xs:h-14 sm:h-20">{icon}</div>
      <h5 className="text-xs xs:text-base sm:text-base font-bold text-light dark:text-dark">
        {name}
      </h5>
    </div>
  )
}
