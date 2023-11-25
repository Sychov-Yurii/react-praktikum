import { formatDistanceToNow, format } from 'date-fns';

export const onCreateData = newData => {
  return formatDistanceToNow(new Date(newData), { addSuffix: true });
};
export const onFormatData = newData => {
  return format(new Date(newData), 'Pp');
};
