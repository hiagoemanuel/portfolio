export default function Loading() {
  return (
    <main className="full-viewport flex justify-center items-center">
      <svg
        className="animate-spin"
        height="100"
        width="100"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <g data-idx="1">
          <path
            className="fill-main"
            stroke="none"
            d="M5 50A45 45 0 0 0 95 50A45 50 0 0 1 5 50"
            data-idx="2"
          />
          <g data-idx="4" />
        </g>
      </svg>
    </main>
  )
}
