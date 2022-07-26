import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align="center">
            <Box mr="4" textAlign="right">
                <Text>Isaias Pinto</Text>
                <Text color="gray.300" fontSize="small">isaiascxs10@gmail.com</Text>
            </Box>
            <Avatar size="md" name="Isaias Pinto" src="https://github.com/IsaiasSPinto.png"></Avatar>
        </Flex>
    )
}