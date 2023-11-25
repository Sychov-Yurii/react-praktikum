import { formatDistanceToNow } from 'date-fns'



export const onCreateData = (newData) => { 
    return formatDistanceToNow(new Date(newData), { addSuffix: true })
} 