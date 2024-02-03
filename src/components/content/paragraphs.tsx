import styles from './paragraph.module.css'
interface IParagraph {
  pr: {
    title: string
    content: string
    btn: string
  }
  index: number
}

export function Paragraph ({ pr, index }: IParagraph): JSX.Element {
  const { title, content, btn } = pr
  const isRight = index % 2 !== 0 ? 'justify-end' : ''

  return (
    <section className={`flex ${isRight}`}>
      <article className='flex flex-col gap-3 max-w-3xl'>
        <h3 className='text-lg md:text-2xl font-semibold'>{title}</h3>
        <p>{content}</p>
        <button className={styles.btnFill}>{btn}</button>
      </article>
    </section>
  )
}
export const Paragraphs = (): JSX.Element => {
  const content = [
    {
      title: 'title 1',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio nostrum animi at quia doloremque, enim reiciendis laudantium natus deleniti quam id veniam maiores vitae, fuga provident fugit, voluptate adipisci? Earum aut doloribus itaque quos, numquam sint. Est tempora illo, vel odio sed aliquid consequatur ea vitae. Ipsa, officiis vero? Suscipit, facilis a. Reprehenderit, distinctio expedita! Voluptatum, incidunt. Molestiae, quaerat',
      btn: 'Link to'
    },
    {
      title: 'title 2',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio nostrum animi at quia doloremque, enim reiciendis laudantium natus deleniti quam id veniam maiores vitae, fuga provident fugit, voluptate adipisci? Earum aut doloribus itaque quos, numquam sint. Est tempora illo, vel odio sed aliquid consequatur ea vitae. Ipsa, officiis vero? Suscipit, facilis a. Reprehenderit, distinctio expedita! Voluptatum, incidunt. Molestiae, quaerat',
      btn: 'Link to'
    },
    {
      title: 'title 3',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est optio nostrum animi at quia doloremque, enim reiciendis laudantium natus deleniti quam id veniam maiores vitae, fuga provident fugit, voluptate adipisci? Earum aut doloribus itaque quos, numquam sint. Est tempora illo, vel odio sed aliquid consequatur ea vitae. Ipsa, officiis vero? Suscipit, facilis a. Reprehenderit, distinctio expedita! Voluptatum, incidunt. Molestiae, quaerat',
      btn: 'Link to'
    }
  ]

  return (
    <section className='flex flex-col gap-4 max-w-[100rem] mx-auto w-full'>
      {
        content.map((pr, index) => <Paragraph index={index} pr={pr} key={pr.title} />)
      }
    </section>
  )
}
