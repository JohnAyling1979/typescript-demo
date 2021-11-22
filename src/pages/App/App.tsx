import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Center } from "@chakra-ui/react"
import NavBar from '../../components/layout/NavBar/NavBar';
import ReactQueryDemo from '../ReactQueryDemo/ReactQueryDemo';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import './style/App.css';
import ZustandDemo from '../ZustandDemo/ZustandDemo';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const useRepoData = () => useQuery<any, Error>(['repoData'], () => fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res => res.json()));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavBar />
      <Routes>
        <Route path='/' element={<Center>Home</Center>} />
        <Route path='react-query' element={<ReactQueryDemo useRepoData={useRepoData} />} />
        <Route path='zustand' element={<ZustandDemo />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
