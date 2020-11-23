import React, { Component } from 'react';
import { Platform, StyleSheet, ToastAndroid } from 'react-native';
import Api from './api/Api';
import { Button, Card, CardItem, Input, Spinner } from './components/common';

class App extends Component {
    state = { name: '', email: '', password: '', loading: null };

    save(name, user_name, user_password) {
        this.setState({ loading: true });

        if (!name.trim()) {
            this.showMessage('Enter name.');
            return;
        }
        if (!user_name.trim()) {
            this.showMessage('Enter user name.')
            return;
        }

        if (!user_password.trim()) {
            this.showMessage('Enter password.')
            return;
        }
        try {
            Api.post('/register.php', { name, user_name, user_password })
                .then((response) => {
                    const result = response.data.response;
                    console.log(result);
                    if (result === 'Ok')
                        this.showMessage('You have registed successfully.')
                    else
                        this.showMessage('Something wrong try agin.')
                })
                .catch((error) => {
                    this.showMessage('Something wrong try agin.')
                });
        } catch (error) {
            this.showMessage('Something wrong try agin.')
        }
    }

    showMessage(message) {
        this.setState({ loading: false });
        // this will condition to run mobile OS wise 
        // if OS is android then it will show the toast message 
        // if os is IOS then it will show the alert message.
        if (Platform.OS == 'android') {
            ToastAndroid.show(message, ToastAndroid.LONG);
        } else {
            alert(message)
        }

    }



    render() {
        // this method will show the spinner for the use call the server api
        // if loading state is false then it will return the button 
        // if loading state is true then it will return the spinner  
        const renderButton = () => {
            if (this.state.loading) {
                return (
                    <Spinner size='large' />
                )
            }
            return (
                <Button onPress={() => this.save(this.state.name, this.state.email, this.state.password)}>Save</Button>
            );
        }

        return (
            <Card>
                <CardItem>
                    <Input
                        value={this.state.name}
                        onChangeText={(name) => this.setState({ name })}
                        label="Name"
                        placeholder="name"
                    />
                </CardItem>
                <CardItem>
                    <Input
                        value={this.state.email}
                        onChangeText={(email) => this.setState({ email })}
                        label="User Name"
                        placeholder="user@gmail.com"
                    />
                </CardItem>
                <CardItem>
                    <Input
                        value={this.state.password}
                        onChangeText={(password) => this.setState({ password })}
                        label="Password"
                        secureTextEntry
                        placeholder="password"
                    />
                </CardItem>
                <CardItem>
                    {renderButton()}
                </CardItem>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default App;