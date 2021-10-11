import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return(
    <Flex
      align="center"
    >
      {showProfileData && (
        <Box mr="4" textAlign="center">
        <Text>Alexandre Kimura</Text>
        <Text color="gray.300" fontSize="small">alexandremkimura@hotmail.com</Text>
      </Box>
      )}

      <Avatar size="md" name="Alexandre Kimura" src="https://avatars.githubusercontent.com/u/31051471?v=4">

      </Avatar>
    </Flex>
  )
}