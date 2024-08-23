type MenuIconProps = React.SVGProps<SVGSVGElement>

export const MenuIcon: React.FC<MenuIconProps> = (props) => (
  <svg width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      className="fill-light dark:fill-dark"
      d="M0 28V25.3435H28V28H0ZM0 15.3283V12.6717H28V15.3283H0ZM0 2.65655V0H28V2.65655H0Z"
    />
  </svg>
)
