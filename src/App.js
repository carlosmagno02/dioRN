import React from "react";
import {
    View,
    Image,
    Text,
    StyleSheet,
    SafeAreaView,
    StatusBar,
    Pressable,
    Linking,
} from 'react-native';

const colorGithub = "#010409"
const colorFontGithub = "#4f565e"
const imageProfileGithub = "https://avatars.githubusercontent.com/u/32673318?s=400&u=ae96a6798e12ce26e77fc6f118e90252c4a41d63&v=4"
const urlToMyGithub = "https://github.com/carlosmagno02"

const App = () => {
    const handlePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub)
    if (res) {
       await Linking.openURL(urlToMyGithub)
    }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
            <View style={style.content} >
                <Image style={style.avatar} source={{ uri: imageProfileGithub }} />
                <Text style={[style.defaultText, style.name]}>Carlos Magno</Text>
                <Text style={[style.defaultText, style.nickname]}>carlosmagno02</Text>
                <Text style={[style.defaultText, style.description]}>Desenvolvedor Web & Mobile</Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={[style.button]}>
                        <Text style={[style.defaultText, style.textButton]}>GitHub</Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1,
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20,
    },
    avatar: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderColor: '#fff',
        borderWidth: 2
    },
    defaultText: {
        color: "#fff",
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: "bold",
    },
    nickname: {
        fontSize: 18,
        color: colorFontGithub
    },
    description: {
        fontSize: 14,
        fontWeight: "bold",
    },
    button: {
        marginTop: 20,
        backgroundColor: colorFontGithub,
        borderRadius: 10,
        paddingLeft: 20,
        paddingVertical: 10,
        paddingHorizontal:20,
    },
    textButton: {
        fontSize: 16,
        fontWeight: "bold",
    },

})