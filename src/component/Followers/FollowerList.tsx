import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import {FollowersProps} from '../../../type'
const url = "https://randomuser.me/api/?results=5"
const intitalFollowers:FollowersProps[] = []
const FollowerList = () => {
  const[followers, setFollowers] = useState(intitalFollowers);
  const[loading, setLoading] = useState(true);
  const[errors, setErrors] = useState();
  const getFollowers = async () => {
    setLoading(true)
    axios.get(url).then(res => {
      console.log(res.data);
      setLoading(false)
      setFollowers(res.data.results)
      
    }).catch(err => setErrors(err.message))
      
    }
  
  useEffect(() => {
    getFollowers()
  }, [])
  let content;
  if (loading) {
   content= <Spinner/>
  }
  if (errors) {
    console.log(errors);
    content = <div className='text-red-500 text-center'>{errors}!!!</div>
    
    
  }
  if (errors !== null && !loading) {
    content =
      <>
      {followers.length > 0 ? followers.map(follower => (
        <div className='flex items-center border-b pb-2' key={follower.login.uuid}>
          <img src={follower.picture.medium} alt="img" className='w-12 h-12 object-cover rounded-full' />
          <div className='ml-4'>
            <h2>{follower.name.first} {follower.name.last}</h2>
            <h6 className='text-xs font-semibold'>{follower.login.username}</h6>
          </div>
        </div>
      )) : 'No followers to show'
    }
      </>
  }
  
  return (
    <>
      <div className='shadow-xl rounded-md mt-5 px-4 py-2 lg:w-1/2 mx-auto'>
         {content}
   
         <Link to='/' className='capitalize text-xs font-semibold hover:text-blue-500'>go back</Link>
      </div>
    </>
    )
}

export default FollowerList