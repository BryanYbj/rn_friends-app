import React, { useState } from "react";
import {
    Button,
    Image,
    StatusBar,
    Text,
    TextInput,
    View,
} from 'react-native';
import { pxToDp, screenHeight, screenWidth } from '../../../utils/stylesUtils';
// import { Toast } from 'teaset';

function Login({navigation}:any): React.JSX.Element {

    const [phone,setPhone] = useState<null|string>(null)

    const login = () => {

        // Toast.message('登录成功！')
        navigation.navigate('Home')
    }

    return (
        // <Text>{screenWidth}</Text>
        <View>
            {/* 状态栏 */}
            {/* <StatusBar backgroundColor='transparent' translucent={true}/> */}

            {/* rn的默认单位是dp */}
            <Image style={{ width: '100%', height: pxToDp(200) }} source={require('../../../public/res/profileBackground.jpg')} />

            <View style={{ padding: pxToDp(20) }}>
                <Text style={{ fontSize: 20, color: "#888", fontWeight: 'bold' }}>
                    手机号登陆注册
                </Text>


                <TextInput
                    style={{ borderBottomColor: '#999', borderBottomWidth: 1, marginBottom: pxToDp(10),color:"#333" }}
                    placeholder="请输入手机号码"
                    
                    autoComplete="tel"
                    onChange={(e) =>{
                        setPhone(e.nativeEvent.text)
                    }}
                ></TextInput>


                <Button title="登录注册" onPress={login}></Button>

                <Text>
                    {phone}
                </Text>
            </View>

        </View>
    )
}

export default Login