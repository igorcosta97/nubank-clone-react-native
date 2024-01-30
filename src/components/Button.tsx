import { Text, TouchableOpacity } from "react-native";
import { styled } from 'nativewind'

function ButtonStyled({...rest}){
    return (
        <TouchableOpacity className="h-14 bg-green-500 rounded-md items-center justify-center w-3/4">
            <Text className="text-white font-bold">
                Entrar
            </Text>
        </TouchableOpacity>
    )
}

const Button = styled(ButtonStyled)

export { Button };
