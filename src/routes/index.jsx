import React from 'react';
import { useRoutes } from 'react-router-dom';

import Albums from '../pages/albums/Albums';
import Album from '../pages/albums/Album';
import Photo from '../pages/albums/Photo';

const useMainRoutes = () => {
  return useRoutes([
    { path: '/', element: <Albums /> },
    { path: '/albums/:id', element: <Album /> },
    { path: '/albums/:id/photo/:id', element: <Photo /> },
  ]);
};

export default useMainRoutes;
