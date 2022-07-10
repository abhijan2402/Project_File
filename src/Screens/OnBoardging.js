import React, { useState, useRef } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height
const IMAGES = [
    {
        id: 1,
        url: 'https://media.istockphoto.com/photos/blue-file-on-the-top-of-a-pile-picture-id160476370?k=20&m=160476370&s=612x612&w=0&h=JwPMTbyvs0NHJyd1hyd42uUxuSTs9m9pmx29retesu4=',
        title: "Welcome to File Share",
        subtitle: ""
    },
    {
        id: 2,
        url: 'https://thumbs.dreamstime.com/b/groups-people-cartoons-white-background-vector-illustration-graphic-design-142328920.jpg',
        title: "Create Groups",
        subtitle: "Create groups  and stay connected with everyone"
    },
    {
        id: 3,
        url: 'https://as2.ftcdn.net/v2/jpg/02/05/89/93/1000_F_205899374_D4kfuMC4BxLq79UnDpvY5otAi7qLd2rh.jpg',
        title: "Chat and Share Files easily",
        subtitle: 'Chat and share documents easily and also see them easily'
    }
]
const OnBoarding = ({ navigation }) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace('SignIn')}
            onDone={() => navigation.replace('SignIn')}
            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image source={{ uri: IMAGES[0].url }} style={OnBoardingStyle.imageSize} />,
                    title: IMAGES[0].title,
                    subtitle: IMAGES[0].subtitle,
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={{ uri: IMAGES[1].url }} style={OnBoardingStyle.imageSize} />,
                    title: IMAGES[1].title,
                    subtitle: IMAGES[1].subtitle,
                },
                {
                    backgroundColor: 'white',
                    image: <Image source={{ uri: IMAGES[2].url }} style={OnBoardingStyle.imageSize} />,
                    title: IMAGES[2].title,
                    subtitle: IMAGES[2].subtitle,
                },
            ]}
        />
    )
}
const OnBoardingStyle = StyleSheet.create({
    imageSize: {
        width: windowWidth - 20,
        height: windowHeight / 2,
    },
})
export default OnBoarding;