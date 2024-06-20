import { Text, View } from "react-native";
import { Amplify } from 'aws-amplify';
import amplifyconfig from '../amplifyconfiguration.json';
Amplify.configure(amplifyconfig);
import { Redirect } from "expo-router";


const Index = () => {
    return (
        <Redirect href="/feed"/>
    )
}

export default Index;
