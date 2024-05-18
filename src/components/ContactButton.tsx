import Link from 'next/link'

export const ContactButton = ({ icon, href }: { icon: JSX.Element; href: string }) => {
  return (
    <Link className="w-9 h-9 p-2 bg-main rounded-lg" href={href}>
      {icon}
    </Link>
  )
}
