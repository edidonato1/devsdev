import axios from 'axios';
import { useQuery } from 'react-query';

export default function useDogs() {
    return useQuery(
        'dogs',
        () => axios.get('https://dog.ceo/api/breeds/list/all').then((res) => res.data)
    )
}