import { MoreAboutButton } from '../MoreAboutButton'
import { Title } from '../Title'

export const AboutMe = () => {
  return (
    <section className="py-12">
      <Title title="sobre mim" japTitle="私について" />
      <p className="text-sm font-normal text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras elementum elit sapien, at
        sollicitudin lectus faucibus vitae. In a scelerisque ex. In sagittis purus et nisl commodo
        tincidunt. Aenean pharetra tincidunt quam imperdiet tempus. Proin interdum mauris dolor,
        dictum venenatis enim rhoncus eget. Nunc ornare a nisl id consequat. Suspendisse varius
        eleifend dolor ac auctor.
      </p>
      <MoreAboutButton text="veja mais sobre" path="/about-me" />
    </section>
  )
}
