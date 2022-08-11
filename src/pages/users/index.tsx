import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, Text, useBreakpointValue, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination/index";
import Sidebar from "../../components/Sidebar/index";
import {useUsers} from "../../services/hooks/useUsers";

export default function UserList() {
    const { data, isLoading, error , isFetching } = useUsers();


    const isWideVersion = useBreakpointValue(
        { base: false, lg: true });

    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Usuários
                        
                        {!isLoading && isFetching && <Spinner size="sm" color="gray.500" ml="4"/>}
                        </Heading>

                        <Link href="users/create" passHref>
                            <Button as="a" size="sm" fontSize="20" colorScheme="pink" leftIcon={<Icon as={RiAddLine} />}>
                                Criar Novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao carregar</Text>
                        </Flex>
                    ) : (
                        <>

                            <Table colorScheme="whiteAlpha">
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox colorScheme="pink" />
                                        </Th>
                                        <Th>Usuario</Th>
                                        {isWideVersion && <Th>Data de Cadastro</Th>}
                                        <Th></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(user => (
                                    <Tr key={user.id}>
                                        <Td px={["4", "4", "6"]}>
                                            <Checkbox colorScheme="pink" />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">{user.name}</Text>
                                                <Text fontSize="sm" color="gray.300">{user.email}</Text>
                                            </Box>
                                        </Td>
                                        {isWideVersion && <Td>{user.createdAt}</Td>}
                                        <Td>
                                            <Button as="a" size="sm" fontSize="16" colorScheme="purple" leftIcon={<Icon as={RiPencilLine} />}>
                                                {isWideVersion ? "Editar" : ""}
                                            </Button>
                                        </Td>
                                    </Tr>

                                    ))}
                                </Tbody>

                            </Table>
                            <Pagination />
                        </>
                    )}
                </Box>
            </Flex>


        </Box>
    )
}