import React from 'react';
import { Container, Center, VStack, Button, ButtonGroup } from "@chakra-ui/react"

interface ReactQueryDemoProps {
	useRepoData: () => any;
}

function ReactQueryDemo({ useRepoData }: ReactQueryDemoProps) {
	const { isLoading, error, data } = useRepoData();

	if (isLoading) return <div>Loading...</div>

	if (error) return <div>An error has occurred: {error.message}</div>

	return (
    <Container>
      <Center>
        <VStack>
          <h1>{data.name}</h1>
          <p>{data.description}</p>
          <div>
            <strong>👀 {data.subscribers_count}</strong>{' '}
            <strong>✨ {data.stargazers_count}</strong>{' '}
            <strong>🍴 {data.forks_count}</strong>
          </div>
        </VStack>
      </Center>
    </Container>
  );
}

export default ReactQueryDemo;
