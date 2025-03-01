import { useState } from 'react';

const useAddressCache = () => {
  const [cache, setCache] = useState<{ [key: string]: any }>({});

  const getCachedAddress = (cep: string) => cache[cep];

  const cacheAddress = (cep: string, data: any) => {
    setCache((prev) => ({ ...prev, [cep]: data }));
  };

  return { getCachedAddress, cacheAddress };
};

export default useAddressCache;