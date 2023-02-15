import { Image, Stack, Text, Box } from '@chakra-ui/react';
import {memo,FC}from 'react'

type Props ={
    id:number;
    imageURL:string;
    userName:string;
    fullName:string;
    onClick:(id:number)=>void;
}

export const UserCard:FC<Props>= memo((props) => {
    const {id,imageURL,userName,fullName,onClick}=props
  return (
  <>
   <Box
          w="260px"
          h="260px"
          bg="white"
          borderRadius="10px"
          shadow="md"
          p={4}
          _hover={{ cursor: "pointer", opacity: 0.8 }}
          onClick={()=>onClick(id)}
        >
          <Stack textAlign="center">
            <Image
              m="auto"
              boxSize="160px"
              borderRadius="full"
              src={imageURL}
              alt={userName}
            />
            <Text fontSize="lg" fontWeight="bold">
              {userName}
            </Text>
            <Text fontSize="small" color="gray">
              {fullName}
            </Text>
          </Stack>
        </Box>
  </>
  )
})
