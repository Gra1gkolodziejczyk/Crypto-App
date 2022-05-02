import * as React from 'react';
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem';
import { SAMPLE_DATA } from '../assets/data/sampleData';

const HomeScreen = () => {
  const ListHandler = () => (
  <>
    <View style={styles.titleWrapper}>
      <Text style={styles.largeTitle}>Marchés</Text>
    </View>
    <View style={styles.divider}/>
  </>
)

  return (
    <SafeAreaView style={styles.container}>
        <FlatList 
          keyExtractor={(item) => item.id}
          data={SAMPLE_DATA}
          renderItem={({ item }) => (
            <ListItem 
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
            />
          )}
          ListHeaderComponent={<ListHandler />}
        />
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF',
    },
    largeTitle: {
      fontSize: 24,
      fontWeight: "bold",
    },
    titleWrapper: {
      marginTop: 20,
      paddingHorizontal: 16,
    },
    divider: {
      height: StyleSheet.hairlineWidth,
      backgroundColor: '#0782F9',
      marginHorizontal: 16,
      marginTop: 16,
    },
});