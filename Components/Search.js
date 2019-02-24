// Components/Search.js
import FilmItem from "./FilmItem";

import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import { getFilmsFromApiWithSearchedText } from "../API/TMDBApi";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.searchedText = "";
    this.state = {
      films: []
    };
  }
  _searchTextInputChanged(text) {
    this.searchedText = text;
  }
  _loadFilms() {
    console.log(this.searchedText); // Un log pour vérifier qu'on a bien le texte du TextInput
    if (this.searchedText.length > 0) {
      // Seulement si le texte recherché n'est pas vide
      getFilmsFromApiWithSearchedText(this.searchedText).then(data => {
        this.setState({ films: data.results });
      });
    }
  }
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput
          style={styles.textinput}
          placeholder="Titre du film"
          onChangeText={text => this._searchTextInputChanged(text)}
        />
        <Button title="Rechercher" onPress={() => this._loadFilms()} />
        {/* Ici j'ai simplement repris l'exemple sur la documentation de la FlatList */}
        <FlatList
          data={this.state.films}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <FilmItem film={item} />}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 20
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: "#868686",
    backgroundColor: "#cfcfcf",
    borderWidth: 1,
    paddingLeft: 5
  }
});
export default Search;
