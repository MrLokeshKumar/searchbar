import React, { Component } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const styles = require('./SearchStyles');
import {connect} from 'react-redux';
import {searchResults} from "../../actions";

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchTerm: ''
        }
      }

    searchOnGoogle = (searchParam) => {
        const API_KEY = 'AIzaSyCD3en2NjV1OMrTec69nAfErHVn4PQz3AI';
        const cx = '000810608231622240578:8-utdzbzsg4';
        const apiURL = 'https://www.googleapis.com/customsearch/v1';
        const URL = apiURL + '?key=' + API_KEY + '&cx=' + cx + '&q=' + this.state.searchTerm;
        console.log(URL);
        fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(response => {
                response.json().then((data) => this.props.searchResults(data.items))
            })
            .catch((error) => console.log('getting errorrr', error));
    }

    render() {
        return (
            <View style={styles.searchBarContainer}>
                <TextInput
                    placeholder='Enter your search terms'
                    style={styles.textInputSearch}
                    underlineColorAndroid={'transparent'}
                    onChangeText={(searchTerm) => this.setState({ searchTerm })}
                    value={this.state.searchTerm}
                />
                <TouchableOpacity
                    style={styles.textSearchButton}
                    onPress={() => this.searchOnGoogle('react native')}
                >
                    <Icon name="search" size={16} color="#000" />

                </TouchableOpacity>
            </View>
        )
    }
}

export default connect(null, { searchResults })(SearchBar);