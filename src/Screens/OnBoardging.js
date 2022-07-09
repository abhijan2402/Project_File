import  React,{useState,useRef} from 'react';
import{Image,Dimensions,StyleSheet} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
const windowWidth=Dimensions.get('window').width;
const windowHeight=Dimensions.get('window').height
const IMAGES=[
    {
        id:1,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQupyEWfh0XbgttnrZUq4Knaw4K-kZnlHJrBw&usqp=CAU',
        title:"Welcome to File Share",
        subtitle:""
    },
    {
        id:2,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rPu77JIsVBt9GMUhsnbdACa_-vhDjzUi-w&usqp=CAU',
        title:"Create Groups",
        subtitle:"Create groups  and stay connected with everyone"
    },
    {
        id:3,
        url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlEUIiTrVaRDqYIC5JRfRSowwHEkpF4p7eg&usqp=CAU',
        title:"Chat and Share Files easily",
        subtitle:'Chat and share documents easily and also see them easily'
    }
] 
const OnBoarding=({navigation})=>{
    return(
        <Onboarding
            onSkip={()=>navigation.replace('SignIn')}
            onDone={()=>navigation.replace('SignIn')}
            pages={[
                {
                    backgroundColor: 'white',
                    image: <Image source={{uri:IMAGES[0].url}} style={OnBoardingStyle.imageSize} />,
                    title: IMAGES[0].title,
                    subtitle: IMAGES[0].subtitle,
                    },
                    {
                    backgroundColor: 'white',
                    image: <Image source={{uri:IMAGES[1].url}} style={OnBoardingStyle.imageSize} />,
                    title: IMAGES[1].title,
                    subtitle: IMAGES[1].subtitle,
                    },
                    {
                    backgroundColor: 'white',
                    image: <Image source={{uri:IMAGES[2].url}} style={OnBoardingStyle.imageSize} />,
                    title: IMAGES[2].title,
                    subtitle: IMAGES[2].subtitle,
                },
            ]}
        />
    )
}
const OnBoardingStyle=StyleSheet.create({
    imageSize:{
        width:windowWidth,
        height:windowHeight/2,
    },
})
export default OnBoarding;