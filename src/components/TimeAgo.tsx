import { useEffect, useState } from 'react'

type TimeAgoProps = {
    date: Date;
  }
export const TimeAgo = ( { date }: TimeAgoProps) => {

    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {

        const now = new Date();
        const timeDifference = now.getTime() - new Date(date).getTime();
        const seconds = Math.floor(timeDifference / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
  
        if (hours >= 1) {
          setTimeAgo(`${hours} ${hours === 1 ? 'hour' : 'hours'}`);
        } else if (minutes >= 1) {
          setTimeAgo(`${minutes} ${minutes === 1 ? 'minute' : 'minutes'}`);
        } else {
          setTimeAgo(`${seconds} ${seconds === 1 ? 'second' : 'seconds'}`);
        }
       
    },[])
  
    return (<h4 className="text-gray-500 text-sm">{timeAgo} ago</h4>)
}
