import React from 'react';
import { Flex, Grid, GridItem, HStack, Text } from '@chakra-ui/react';
import { FinalisIcon } from '../../icons';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Grid templateRows="80px 1fr" h="100vh">
      <GridItem bgColor={'#2B6AE9'}>
        <Flex w="full" h="full" p="16px" alignItems="center">
          <HStack>
            <FinalisIcon color="white" boxSize="40px" />
            <Text color="white" fontSize="3xl" fontWeight="medium">
              Finalis
            </Text>
            <Text fontSize="2xl" color="white" fontWeight="light">
              | UI Code Challenge
            </Text>
          </HStack>
        </Flex>
      </GridItem>
      <GridItem bgColor={'#F8F8FC'} overflowY="auto">
        {children}
      </GridItem>
    </Grid>
  );
};
