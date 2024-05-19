import Link from 'next/link'

export const ContactButton = ({ icon, href }: { icon: JSX.Element; href: string }) => {
  return (
    <Link className="w-9 h-9 sm:w-18 sm:h-18 p-2 sm:p-3 bg-main rounded-lg" href={href}>
      {icon}
    </Link>
  )
}
