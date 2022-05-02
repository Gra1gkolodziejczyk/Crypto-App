import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ListItem = ({ name, symbol, currentPrice, priceChangePercentage7d, logoUrl }) => {

    const priceChangeColor = priceChangePercentage7d > 0 ? '#34C759' : '#FF3B30';

    return (
        <TouchableOpacity
            onPress={onPress}
        >
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image 
                        source={{uri : logoUrl}}
                        style={styles.image}
                    />
                    <View style={styles.titlesWrapper}>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>

                <View style={styles.rightWrapper}>
                    <Text style={styles.title}>$ {currentPrice.toLocaleString('en-US', { currency: 'USD' })}</Text>
                    <Text style={[styles.subtitle, {color: priceChangeColor}]}>{priceChangePercentage7d.toFixed(2)}%</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default ListItem;

const styles = StyleSheet.create({
    itemWrapper: {
        paddingHorizontal: 16,
        marginTop: 24,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    leftWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 48,
        width: 48,
    },
    titlesWrapper: {
        marginLeft: 8,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 14,
        color: '#0782F9',
    },
    rightWrapper: {
        alignItems: 'flex-end',
    },
});