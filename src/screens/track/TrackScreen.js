import React, { Component } from 'react';

import { View, StyleSheet, TouchableOpacity, Text, Button, Alert, Dimensions, Image } from 'react-native';

import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import haversine from 'haversine';

import carImage from '../../../assets/images/car.png';

const screen = Dimensions.get("window");
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78817;
const LONGITUDE = - 122.3903973;
const LATITUDE_DELTA = 0.05;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const TARGET_LATITUDE = 37.7861862;
const TARGET_LONGITUDE = -122.3897073;
const TARGET_COORDINATE = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA

}

export default class NavigationMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prevPos: null,
            curPos: { latitude: LATITUDE, longitude: LONGITUDE },
            curAng: 45,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
            initialRegion: {
                latitude: LATITUDE - 0.004,
                longitude: LONGITUDE,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA
            },
            carRot: '-5deg',
            carStep1: 0,
            carStep2: 0,
            // routeCoordinates:[],
            distance: 0.56
        };
        this.changePosition = this.changePosition.bind(this);
        this.getRotation = this.getRotation.bind(this);
        this.updateMap = this.updateMap.bind(this);
    }

    simulateNavigation() {
        this.interval1 = setInterval(() => {
            this.changePosition(-0.0001, -0.00012);
            this.setState({ carStep1: this.state.carStep1 + 1 });

            if (this.state.carStep1 === 7) {
                clearInterval(this.interval1);
                this.setState({ carStep1: 0 })
            }

        }, 100)

        this.interval2 = setInterval(() => {
            this.changePosition(-0.0001, -0.00012);
            this.setState({ carStep2: this.state.carStep2 + 1 });


            if (this.state.carStep2 >= 9) {
                this.setState({ carRot: '-100deg' })
                this.changePosition(-0.0001, +0.000135)
            }

            if (this.state.carStep2 === 20) {
                clearInterval(this.interval2);
                this.setState({ carStep2: 0 })
            }

        }, 100)
    }

    calcDistance = (newLatLng) => {
        const { prevPos } = this.state;
        return prevPos ? haversine(prevPos, newLatLng) : 0;
    }


    changePosition(latOffset, lonOffset) {
        const latitude = this.state.curPos.latitude + latOffset;
        const longitude = this.state.curPos.longitude + lonOffset;
        this.setState({
            prevPos: this.state.curPos,
            curPos: { latitude, longitude },
            //routeCoordinates:this.state.routeCoordinates.concat([{latitude, longitude }])
            distance: this.state.distance - this.calcDistance({ latitude, longitude }),
        });
        //this.updateMap();
    }

    getRotation(prevPos, curPos) {
        if (!prevPos) {
            return 0;
        }
        const xDiff = curPos.latitude - prevPos.latitude;
        const yDiff = curPos.longitude - prevPos.longitude;
        return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
    }

    updateMap() {
        const { curPos, prevPos, curAng } = this.state;
        const curRot = this.getRotation(prevPos, curPos);
        this.map.animateCamera({ heading: curRot, center: curPos, pitch: curAng });
    }

    render() {
        return (
            <View style={styles.flex}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={el => (this.map = el)}
                    style={styles.flex}
                    minZoomLevel={15}
                    initialRegion={
                        this.state.initialRegion

                    }
                >
                    <MapView.Marker
                        coordinate={this.state.curPos}
                        anchor={{ x: -2, y: 1 }}

                    >
                        <Image style={{ height: 40, width: 40, transform: [{ rotate: this.state.carRot }] }} source={require('../../../assets/images/car.png')} />

                    </MapView.Marker>
                    <Marker
                        coordinate={TARGET_COORDINATE}
                    >
                        <Image style={{ height: 30, width: 30 }} source={require('../../../assets/images/track-active.png')} />

                    </Marker>

                </MapView>
                <View style={styles.buttonContainerUpDown}>
                    <View style={{
                        height: 40,
                        flex: 1,
                        justifyContent: 'center',
                        marginLeft: 20,
                        marginRight: 20,
                        marginBottom: 20,
                        alignContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#fff',
                        borderRadius: 10,
                        marginTop: 20
                    }}>
                        <Text style={{ fontFamily: 'Montserrat-Bold', fontSize: 16 }}>
                            {parseFloat(this.state.distance).toFixed(2) > 0 ? parseFloat(this.state.distance).toFixed(2) : 0} km</Text>

                    </View>

                </View>


                <View style={styles.buttonContainerUpDown}>
                    <View style={{
                        flex: 1,
                        justifyContent: 'flex-end',
                        marginLeft: 20,
                        marginRight: 20,
                        marginBottom: 20,
                        borderRadius: 10
                    }}>
                        <Button
                            title="Track Your Order"
                            color="#212121"
                            onPress={() => { this.simulateNavigation() }}
                        ></Button>

                    </View>

                </View>
                {/* <View style={styles.buttonContainerUpDown}>
                    <TouchableOpacity
                        style={[styles.button, styles.up]}
                        onPress={() => this.changePosition(0.0001, 0)}
                    >
                        <Text>+ Lat</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.down]}
                        onPress={() => this.changePosition(-0.0001, 0)}
                    >
                        <Text>- Lat</Text>
                    </TouchableOpacity>
                </View> */}
                {/* <View style={styles.buttonContainerLeftRight}>
                    <TouchableOpacity
                        style={[styles.button, styles.left]}
                        onPress={() => this.changePosition(0, -0.0001)}
                    >
                        <Text>- Lon</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.right]}
                        onPress={() => this.changePosition(0, 0.0001)}
                    >
                        <Text>+ Lon</Text>
                    </TouchableOpacity>
                </View> */}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
        width: '100%',
    },
    buttonContainerUpDown: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonContainerLeftRight: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'rgba(100,100,100,0.2)',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        height: 50,
        width: 50,
    },
    up: {
        alignSelf: 'flex-start',
    },
    down: {
        alignSelf: 'flex-end',
    },
    left: {
        alignSelf: 'flex-start',
    },
    right: {
        alignSelf: 'flex-end',
    },
});