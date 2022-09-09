

type Props = {
    title:string
}

const Header = ({title}: Props) => {
  return (
    <h1 className=' font-bold bg-cover text-3xl top-8 left-1  tracking-wider lg:left-72 lg:top-32 text-white lg:text-7xl absolute'>{ title}</h1>
  )
}

export default Header