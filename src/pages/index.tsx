import { Button, Flex, Stack ,Text} from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Input } from '../components/Form/Input'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type SignInFormData = {
  email: string,
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email("Email invalido").required("Email Obrigatório"),
  password: yup.string().required("Senha Obrigatória")
})


export default function SignIn() {
  const { handleSubmit, register , formState} = useForm({
    resolver: yupResolver(signInFormSchema)
  });

  const handleSignIn : SubmitHandler<SignInFormData> = async (values) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(values);
  }

  const {errors} = formState;
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
            {...register("email", { required: 'E-mail obrigatório' })}
          />
              {errors.email && (
            <Text as="i" color="red.500">
              {String(errors.email.message)}
            </Text>
          )}
          <Input 
            label="Senha" 
            type="password"
            {...register("password", { required: 'Senha obrigatória' })}
          />
           {errors.password && (
            <Text as="i" color="red.500">
              {String(errors.password.message)}
            </Text>
          )}

        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg" isLoading={formState.isSubmitting}>Entrar</Button>
      </Flex>
    </Flex>
  )
}

