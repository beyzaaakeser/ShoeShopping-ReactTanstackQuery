import { useQuery } from '@tanstack/react-query';
import api from '../../api';
import { Shoe } from '../../types';
import Loader from '../loader';
import Error from '../error';
import Card from './Card';

const List = () => {
  const { isLoading, error, data, refetch } = useQuery<Shoe[]>({
    queryKey: ['shoes'],
    queryFn: () => api.get(`/shoes`).then((res) => res.data),
  });

  if (isLoading) return <Loader />;
  if (error) return <Error info={error.message} refetch={refetch} />;

  return (
    <div>
      {data?.map((item) => (
        <Card key={item.id} />
      ))}
    </div>
  );
};

export default List;
