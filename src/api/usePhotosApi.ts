import {useCallback, useState} from 'react';

import {Photo} from '../types';

const usePhotosApi = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPhotos = useCallback(
    (overridePage?: undefined | number) => {
      const page = overridePage || currentPage;
      if (!loading) {
        setLoading(true);
        _fetchPhotos(page)
          .then(newPhotos => {
            setCurrentPage(page + 1);
            setPhotos(prevState => [...prevState, ...newPhotos]);
          })
          .catch(e => {
            setError(e);
          })
          .finally(() => {
            setLoading(false);
          });
      }
    },
    [currentPage, loading, setCurrentPage, setPhotos],
  );

  const refreshFetch = useCallback(() => {
    setPhotos([]);
    setCurrentPage(1);
    fetchPhotos(1);
  }, [fetchPhotos]);

  return {
    photos,
    error,
    fetchPhotos,
    currentPage,
    loading,
    refreshFetch,
  };
};

export default usePhotosApi;

async function _fetchPhotos(pageNum: number) {
  try {
    const apiKey = 'fVwaIPvPynBW4mFla1FZSLRZfM0wTSNOAaUUjsnf7DnzFlrZjJkyjvVN';
    const response = await fetch(
      `https://api.pexels.com/v1/curated?page=${pageNum}&per_page=15`,
      {
        headers: {
          Authorization: apiKey,
        },
      },
    );
    const data = await response.json();
    return data.photos;
  } catch (error) {
    console.error('Error fetching photos:', error);
    return [];
  }
}
