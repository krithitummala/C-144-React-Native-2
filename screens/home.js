import *as React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import RFValue from 'react-native-responsive-fontsize';
import { Header, Icon } from 'react-native-elements';
import WebView from 'react-native-webview'

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            articleDetails: {}
        }
    }

    componentDidMount() {
        this.getArticle();
    }
    timeConvert(num) {
        var hours = Math.floor(num / 60)
        var minutes = num % 60
        return `${hours} Hours ${minutes} Minutes`
    }

    getArticle = () => {
        const url = 'http://127.0.0.1:5000/get-article'
        axios.get(url).then((response) => {
            var details = response.data.data
            details['duration'] = this.timeConvert(details.duration)
            this.setState = { articleDetails: details }
        }).catch((error) => {
            console.log(error.message)
        })
    }
    likedArticle = () => {
        const url = 'http://127.0.0.1:5000/liked-article'
        axios.get(url).then((response) => {
            this.getArticle();
        }).catch((error) => {
            console.log(error.message)
        })
    }
    unlikedArticle = () => {
        const url = 'http://127.0.0.1:5000/liked-article'
        axios.get(url).then((response) => {
            this.getArticle();
        }).catch((error) => {
            console.log(error.message)
        })
    }

    render() {
        const { articleDetails } = this.state

        if (articleDetails.url) {
            const url = articleDetails
        }
        return (
            <View styles={styles.container}>
                <View styles={styles.headerContainer}>
                    <Header
                        centerComponent={{
                            text: "Recommended",
                            style: styles.headerTitle
                        }}
                        rightComponent={{ icon: 'search', color: '#fff' }}
                        backgroundColor={"#d500f9"}
                        containerStyle={{ flex: 1 }}
                    />
                </View>
                <View style={styles.upperContainer}>
                    <WebView source={{ uri: url }} />
                </View>
                <View style={styles.lowerContainer}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={this.likedArticle}>
                            <Icon
                                reverse
                                name={"check"}
                                type={"entypo"}
                                size={RFValue(30)}
                                color={"#76ff03"}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.unlikedArticle}>
                            <Icon
                                reverse
                                name={"cross"}
                                type={"entypo"}
                                size={RFValue(30)}
                                color={"#ff1744"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerContainer: {
        flex: 0.1
    },
    headerTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: RFValue(18)
    },
    upperContainer: {
        flex: 0.75
    },
    lowerContainer: {
        flex: 0.15
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
});
