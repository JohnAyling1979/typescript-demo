import React from 'react';
import { Container, Center, VStack, Button, ButtonGroup } from "@chakra-ui/react"
import useBearStore from '../../state/BearStore';

function ZustandDemo() {
	const bears = useBearStore(state => state.bears);
	const increase = useBearStore(state => state.increase);
	const clear = useBearStore(state => state.clear);

	return (
     <Container>
			 <Center>
				 <VStack>
					<h1>ZustandDemo</h1>
					<div>{bears}</div>
					<ButtonGroup spacing="6">
						<Button onClick={increase}>+1</Button>
						<Button onClick={clear}>clear</Button>
					</ButtonGroup>
				</VStack>
			</Center>
     </Container>
  );
}

export default ZustandDemo;
