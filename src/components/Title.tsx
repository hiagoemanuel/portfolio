export const Title = ({ title, japTitle }: { title: string; japTitle: string }) => {
  return (
    <div className="flex justify-center mb-4">
      <h1 className="text-7 font-bold relative">
        {title}
        <span className="absolute bottom-2 left-2 text-main text-7 font-bold -z-10">
          {japTitle}
        </span>
      </h1>
    </div>
  )
}
