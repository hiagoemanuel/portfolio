export default function NotFound() {
  const fullViewPort =
    'h-[calc(100svh-2rem)] sm:h-[calc(100svh-3.81rem-3.25rem)] md:h-[calc(100svh-4.063rem-3.25rem)]'
  return (
    <main className={`${fullViewPort} flex flex-col justify-center items-center`}>
      <h1 className="text-9xl font-extrabold text-main">404</h1>
      <p className="text-xl font-bold text-main">Você não deveria estar aqui</p>
      <p className="text-xl font-bold text-main">¯\_(^_-)_/¯</p>
    </main>
  )
}
