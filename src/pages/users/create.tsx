import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { Input } from "../../components/Form/Input";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const createUserFormSchema = yup.object().shape({
    name: yup.string().required("Nome Obrigatório"),
    email: yup.string().email("Email invalido").required("Email Obrigatório"),
    password: yup.string().required("Senha Obrigatória").min(6, "Senha deve ter no mínimo 6 caracteres"),
    password_confirmation: yup.string().oneOf([yup.ref("password"), null], "Senhas não conferem")
})

export default function UserCreate() {
    const { handleSubmit, register, formState } = useForm({
        resolver: yupResolver(createUserFormSchema)
    })

    const handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log(values);
    }

    const { errors } = formState;


    return (
        <Box>
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <Sidebar />
                <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
                    <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
                    <Divider my="6" borderColor="gray.700" />

                    <VStack>
                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Box>
                                <Input label="Nome Completo" {...register("name")} />
                                {errors.name && (
                                    <Text as="i" color="red.500">
                                        {String(errors.name.message)}
                                    </Text>
                                )}
                            </Box>
                            <Box>
                                <Input type="email" label="E-mail" {...register("email")} />
                                {errors.email && (
                                    <Text as="i" color="red.500">
                                        {String(errors.email.message)}
                                    </Text>
                                )}
                            </Box>
                        </SimpleGrid>

                        <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                            <Box>
                                <Input type="password" label="Senha" {...register("password")} />
                                {errors.password && (
                                    <Text as="i" size="sm" color="red.500">
                                        {String(errors.password.message)}
                                    </Text>
                                )}
                            </Box>
                            <Box>
                                <Input type="password" label="Confirmacao da senha" {...register("password_confirmation")} />
                                {errors.password_confirmation && (
                                    <Text as="i" color="red.500">
                                        {String(errors.password_confirmation.message)}
                                    </Text>
                                )}
                            </Box>
                        </SimpleGrid>
                    </VStack>

                    <Flex mt="8" justify="flex-end">
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button type="submit" colorScheme="pink" isLoading={formState.isSubmitting}>Salvar</Button>
                        </HStack>

                    </Flex>
                </Box>
            </Flex>


        </Box>
    )
}