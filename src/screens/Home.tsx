import { View, Text, Image, ScrollView, TouchableOpacity} from "react-native";
import { Feather} from '@expo/vector-icons'
import colors from 'tailwindcss/colors'
import {
    useFonts,
    Poppins_600SemiBold,
  } from '@expo-google-fonts/poppins';

import logo from '../assets/logo.png'
import setting from '../assets/setting.png'
import mastercard from '../assets/mastercard.png'
import wallet from '../assets/Wallet.png'
import pix from '../assets/pix.png'
import dinheiro from '../assets/dinheiro.png'
import boleto from '../assets/boleto.png'

export function Home(){

    const [hasLoeadedFonts] = useFonts({
        Poppins_600SemiBold,
    })

    if(!hasLoeadedFonts){
        return null
    }
    return (
        <View className=" flex-1 bg-[#8201D1]">
            <View className="p-6">
                <View className="flex-row justify-between items-center py-[40px]">
                    <Image source={logo}/>
                    <Image source={setting}/>
                </View>
                <View className="h-48 bg-[#9500f6] rounded-[20px] shadow-sm mb-5 flex-col justify-between p-6">
                    <View className="flex-row items-center justify-between">
                        <View/>
                        <Image className="items-end" source={mastercard}/>
                    </View>
                    <Text className="font-semibold text-[24px] leading-9 text-white font-card">Igor Silva</Text>
                </View>
                <View className="h-32 bg-[#9500f6] rounded-[20px] shadow-sm p-6">
                    <View className="justify-between flex-row">
                        <Text className="text-white font-card text-[14px]"> Saldo disponível</Text>
                        <Image source={wallet} width={24} height={100}/>
                    </View>
                    <Text className="text-white font-card text-[36px]">
                        R$950,76
                    </Text>
                </View>
                <View className="p-3">
                    <Text className="font-card mt-5 text-white font-[14px]"> Do que você precisa?</Text>
                </View>
            </View>

            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} className="h-32">  
                <TouchableOpacity className="bg-[#9500f6] rounded-[20px] shadow-sm h-32 w-28 p-5 justify-between mx-1">
                    <Image source={pix}></Image>
                    <Text className="text-white font-card text-[12px] leading-4">Fazer um pix</Text>  
                </TouchableOpacity>
                <View className="bg-[#9500f6] rounded-[20px] shadow-sm h-32 w-28 p-5 justify-between mx-1">
                    <Image source={boleto}></Image>
                    <Text className="text-white font-card text-[12px] leading-4">Pagar um boleto</Text>  
                </View>
                <View className="bg-[#9500f6] rounded-[20px] shadow-sm h-32 w-28 p-5 justify-between mx-1">
                    <Image source={dinheiro}></Image>
                    <Text className="text-white font-card text-[12px] leading-4">Fazer um depósito</Text>  
                </View>
                <View className="bg-[#9500f6] rounded-[20px] shadow-sm h-32 w-28 p-5 justify-between mx-1">
                    <Image source={pix}></Image>
                    <Text className="text-white font-card text-[12px] leading-4">Fazer um pix</Text>  
                </View>
                <View className="bg-[#9500f6] rounded-[20px] shadow-sm h-32 w-28 p-5 justify-between mx-1">
                    <Image source={pix}></Image>
                    <Text className="text-white font-card text-[12px] leading-4">Fazer um pix</Text>  
                </View>
            </ScrollView>
            
        </View>
    )
}