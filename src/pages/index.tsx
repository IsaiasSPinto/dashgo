import { Button, Flex, Stack } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'

type SignInFormData = {
  email: string,
  password: string
}

export default function SignIn() {
  const { handleSubmit, register , formState} = useForm();

  const handleSignIn : SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxW="360"
        bg="gray.800"
        p="8"
        borderRadius="8px"
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input 
            label="E-mail" 
            type="email" 
            error={formState.errors.email}
            {...register("email", { required: 'E-mail obrigatório' })}
          />
          <Input 
            label="Senha" 
            type="password" 
            {...register("password", { required: 'Senha obrigatória' })}
          />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

