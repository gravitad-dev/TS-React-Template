import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';

type Props<T> = {
  data: T[];
  error: string | null;
  msgSuccess: string;
  msgError: string;
};

const CustomToast = <T,>({ data, error, msgSuccess, msgError }: Props<T>) => {
  useEffect(() => {
    if (data.length > 0) {
      toast.success(msgSuccess);
    } else if (error) {
      toast.error(msgError);
    }
    toast.error(msgError);
  }, [data, error, msgSuccess, msgError]);
  return <Toaster position='bottom-center' />;
};
export default CustomToast;
