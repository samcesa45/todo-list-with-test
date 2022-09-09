
import Header from '../Header/Header'
import FollowerList from './FollowerList'

type Props = {}

const Followers = (props: Props) => {
  return (
    <>
      <Header title='Followers'/>
     <FollowerList/>
    </>
  )
}

export default Followers