export const TechCard = ({ name, icon }: { name: string; icon: JSX.Element }) => {
  return (
    <div className="w-37 h-18 rounded-lg flex flex-col justify-center items-center gap-1 bg-main">
      <div className="h-10">{icon}</div>
      <h5 className="text-xs font-bold text-light dark:text-dark">{name}</h5>
    </div>
  )
}
