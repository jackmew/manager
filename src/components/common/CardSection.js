import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    return (
        // outer style override default style
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',

        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };

