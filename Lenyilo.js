import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import Ipcim from './Ipcim'

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [selectedSeged, setSelectedSeged] = useState();

  const getMovies = async () => {
    try {
      const response = await fetch(Ipcim.Ipcim+'felhasznalo_cel');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


const kattintas =()=>{
  alert(selectedSeged)
}

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1, padding: 24}}>
     
     <Picker
  selectedValue={selectedSeged}
  onValueChange={(itemValue, itemIndex) =>
    setSelectedSeged(itemValue)
  }>
     {data.map((item)=>{
        return(
          <Picker.Item label={item.cel_elnevezes} value={item.cel_id} />
	    )}
	)}
</Picker>
<Button
            onPress={()=>kattintas()}
            title="Press Me"
            
          />
   
    </View>
  );
};

export default App;