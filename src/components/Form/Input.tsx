import { FormControl, FormErrorMessage, FormLabel, Input as ChackraInput , InputProps as ChackraInputProps} from "@chakra-ui/react";
import { FieldError } from 'react-hook-form'
import { forwardRef, ForwardRefRenderFunction } from 'react';

interface InputProps extends ChackraInputProps {
    name: string;
    label?: string;
}

const InputBase : ForwardRefRenderFunction<HTMLInputElement, InputProps> = ({ name, label , ...rest}, ref ) => {
    return (
        <FormControl>
          {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
            <ChackraInput name={name} id={name} focusBorderColor="pink.500" bgColor="gray.900" variant="filled" _hover={{ bgColor: "gray.900" }} size="lg" ref={ref} {...rest} />
        </FormControl>
    )
}

export const Input = forwardRef(InputBase);
