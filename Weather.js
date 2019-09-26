import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#00416A", "#799F0C", "#FFE000"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#C6FFDD", "#FBD786", "#f7797d"],
        title: "Thunderstorm",
        subtitle: "Never go outside"
    },
    Drizzle: {
        iconName: "weather-rainy",
        gradient: ["#659999", "#f4791f"],
        title: "Drizzle",
        subtitle: "Look at the sky"
    },
    Rain: {
        iconName: "weather-pouring",
        gradient: ["#dd3e54", "#6be585"],
        title: "Rain",
        subtitle: "Get your umbrella"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#8360c3", "#2ebf91"],
        title: "Snow",
        subtitle: "Romantic days"
    },
    Atmosphere: {
        iconName: "weather-hurricane",
        gradient: ["#aa4b6b", "#6b6b83", "#3b8d99"],
        title: "Atmosphere",
        subtitle: "i dont know"
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA", "#FFFFFF"],
        title: "Clear",
        subtitle: "Actually, Nice day!"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#3f2b96", "#a8c0ff"],
        title: "Clouds",
        subtitle: "Look at the sky"
    },
    Mist: {
        iconName: "weather-fog",
        gradient: ["#654ea3", "#eaafc8"],
        title: "Mist",
        subtitle: "It's like you have no glasses on"
    },
    Dust: {
        iconName: "weather-snowy-rainy",
        gradient: ["#544a7d", "#ffd452"],
        title: "Dust",
        subtitle: "Get your mask"
    }
}


export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{temp}℃</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Haze",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Mist",
        "Dust"]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    temp: {
        fontSize: 42,
        color: "white"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10,
        textAlign: "left"
    },
    subtitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24,
        textAlign: "left"
    },
    textContainer: {
        justifyContent:"center",
        flex:1,
        paddingHorizontal: 40,
        alignItems: "flex-start"
    }
});