import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_178_2327}>
        <View style={styles.View_I178_2327_80_938} />
      </View>
      <View style={styles.View_268_5310}>
        <View style={styles.View_179_2403} />
        <View style={styles.View_179_2428}>
          <Text style={styles.Text_179_2428}>Tracking status</Text>
        </View>
        <View style={styles.View_179_2596}>
          <View style={styles.View_I179_2596_179_2521}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7ec332b-4973-4f8e-beff-99a674394f51"
              }}
              style={styles.ImageBackground_I179_2596_179_2523}
            />
            <View style={styles.View_I179_2596_179_2524}>
              <Text style={styles.Text_I179_2596_179_2524}>
                Packing Order has been packed from our wirehouse
              </Text>
            </View>
            <View style={styles.View_I179_2596_179_2525}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/358dd6ea-2550-45a5-9ec1-06a4ab9c8698"
                }}
                style={styles.ImageBackground_I179_2596_179_2526}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddf41687-f022-46c7-a20f-3d2a48fc5a54"
                }}
                style={styles.ImageBackground_I179_2596_179_2527}
              />
            </View>
          </View>
          <View style={styles.View_I179_2596_179_2529} />
          <View style={styles.View_I179_2596_179_2530} />
        </View>
        <View style={styles.View_180_2483}>
          <View style={styles.View_I180_2483_179_2521}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eefd8931-0783-4e40-93c2-259c92bf7cca"
              }}
              style={styles.ImageBackground_I180_2483_179_2523}
            />
            <View style={styles.View_I180_2483_179_2524}>
              <Text style={styles.Text_I180_2483_179_2524}>
                Shipped Order has been shipped to delivery man
              </Text>
            </View>
            <View style={styles.View_I180_2483_179_2525}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dddb1045-e01b-406e-8e42-e22a52088f21"
                }}
                style={styles.ImageBackground_I180_2483_179_2526}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/323cb675-265e-46af-b64b-926c041653b1"
                }}
                style={styles.ImageBackground_I180_2483_179_2527}
              />
            </View>
          </View>
          <View style={styles.View_I180_2483_179_2529} />
          <View style={styles.View_I180_2483_179_2530} />
        </View>
        <View style={styles.View_180_2521}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c6fb01c-8875-4085-a050-f3c299ef5933"
            }}
            style={styles.ImageBackground_I180_2521_179_2557}
          />
          <View style={styles.View_I180_2521_179_2558}>
            <Text style={styles.Text_I180_2521_179_2558}>
              Ready to handover Product recived by rider and ready to hand over
              to you
            </Text>
          </View>
          <View style={styles.View_I180_2521_179_2559}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7257b6e6-27e8-4708-b8af-e326cfd02730"
              }}
              style={styles.ImageBackground_I180_2521_179_2560}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9076e82f-cbda-4967-9de3-42e0cd60a911"
              }}
              style={styles.ImageBackground_I180_2521_179_2561}
            />
            <View style={styles.View_I180_2521_179_2564}>
              <View style={styles.View_I180_2521_179_2564_80_851}>
                <View style={styles.View_I180_2521_179_2564_80_852} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ff671aa-63ae-4aee-be34-3225fd6395de"
                  }}
                  style={styles.ImageBackground_I180_2521_179_2564_80_853}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_I180_2521_179_2565} />
          <View style={styles.View_I180_2521_179_2566} />
        </View>
      </View>
      <View style={styles.View_268_5309}>
        <View style={styles.View_179_2405}>
          <View style={styles.View_179_2404} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7eb1dd48-f68d-417d-a032-cff58427fa6b"
            }}
            style={styles.ImageBackground_178_2394}
          />
        </View>
        <View style={styles.View_268_5308}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6dcfef79-8e49-4ef3-9936-c38ac74e0c8a"
            }}
            style={styles.ImageBackground_179_2419}
          />
          <View style={styles.View_179_2417}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1c36690-4b82-4090-9c6d-e4f93801c885"
              }}
              style={styles.ImageBackground_179_2406}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/27fae3e4-5b44-4e87-ac0a-c9487ed22668"
              }}
              style={styles.ImageBackground_179_2415}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64c35fa4-d354-4388-9835-252183f89b9b"
            }}
            style={styles.ImageBackground_179_2420}
          />
        </View>
        <View style={styles.View_179_2427}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b6f42cc-84a2-4b14-b27d-f4f557e2cca4"
            }}
            style={styles.ImageBackground_179_2424}
          />
          <View style={styles.View_179_2425}>
            <Text style={styles.Text_179_2425}>Ready to handover</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_178_2331}>
        <View style={styles.View_178_2332}>
          <View style={styles.View_I178_2332_33_111} />
          <View style={styles.View_I178_2332_33_112}>
            <View style={styles.View_I178_2332_33_112_25_824} />
            <View style={styles.View_I178_2332_33_112_25_825}>
              <View style={styles.View_I178_2332_33_112_25_826} />
              <View style={styles.View_I178_2332_33_112_25_827}>
                <View style={styles.View_I178_2332_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce9ddfee-84b0-4a9d-a9a7-a317d6e47c11"
                  }}
                  style={styles.ImageBackground_I178_2332_33_112_25_829}
                />
                <View style={styles.View_I178_2332_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ddc3e58-0538-4030-8cc7-2d83a965602d"
                }}
                style={styles.ImageBackground_I178_2332_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4a7c39d-ba89-4c9a-b3f2-c04a29b9b455"
                }}
                style={styles.ImageBackground_I178_2332_33_112_25_835}
              />
              <View style={styles.View_I178_2332_33_112_25_840}>
                <View style={styles.View_I178_2332_33_112_25_841}>
                  <Text style={styles.Text_I178_2332_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I178_2332_33_114}>
            <Text style={styles.Text_I178_2332_33_114}>Track order</Text>
          </View>
          <View style={styles.View_I178_2332_33_165}>
            <View style={styles.View_I178_2332_33_165_33_148}>
              <View style={styles.View_I178_2332_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d98b8051-20ac-4cb6-8231-8256d25b9f4b"
                }}
                style={styles.ImageBackground_I178_2332_33_165_33_150}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("111%") },
  View_178_2327: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("106%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I178_2327_80_938: {
    flexGrow: 1,
    width: wp("36%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 235, 229, 1)",
    borderColor: "rgba(144, 152, 177, 1)",
    borderWidth: 1
  },
  View_268_5310: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  View_179_2403: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_179_2428: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_179_2428: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_179_2596: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I179_2596_179_2521: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I179_2596_179_2523: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("10%")
  },
  View_I179_2596_179_2524: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I179_2596_179_2524: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I179_2596_179_2525: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I179_2596_179_2526: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I179_2596_179_2527: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I179_2596_179_2529: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%"),
    backgroundColor: "rgba(83, 177, 253, 1)"
  },
  View_I179_2596_179_2530: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 177, 253, 1)"
  },
  View_180_2483: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I180_2483_179_2521: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_I180_2483_179_2523: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("10%")
  },
  View_I180_2483_179_2524: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I180_2483_179_2524: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I180_2483_179_2525: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I180_2483_179_2526: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I180_2483_179_2527: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I180_2483_179_2529: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%"),
    backgroundColor: "rgba(83, 177, 253, 1)"
  },
  View_I180_2483_179_2530: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 177, 253, 1)"
  },
  View_180_2521: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  ImageBackground_I180_2521_179_2557: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("10%")
  },
  View_I180_2521_179_2558: {
    flexGrow: 1,
    width: wp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I180_2521_179_2558: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I180_2521_179_2559: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I180_2521_179_2560: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I180_2521_179_2561: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I180_2521_179_2564: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I180_2521_179_2564_80_851: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I180_2521_179_2564_80_852: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I180_2521_179_2564_80_853: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I180_2521_179_2565: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    backgroundColor: "rgba(83, 177, 253, 1)"
  },
  View_I180_2521_179_2566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%"),
    backgroundColor: "rgba(226, 226, 226, 1)"
  },
  View_268_5309: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%")
  },
  View_179_2405: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_2404: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(211, 211, 211, 1)"
  },
  ImageBackground_178_2394: {
    width: wp("91%"),
    height: hp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_268_5308: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("11%")
  },
  ImageBackground_179_2419: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_179_2417: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("26%")
  },
  ImageBackground_179_2406: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_179_2415: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_179_2420: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("1%")
  },
  View_179_2427: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("36%")
  },
  ImageBackground_179_2424: {
    width: wp("29%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_179_2425: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_179_2425: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_178_2331: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_178_2332: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_2332_33_111: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I178_2332_33_112: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_2332_33_112_25_824: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I178_2332_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I178_2332_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I178_2332_33_112_25_827: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%")
  },
  View_I178_2332_33_112_25_828: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  ImageBackground_I178_2332_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I178_2332_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I178_2332_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I178_2332_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I178_2332_33_112_25_840: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_2332_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I178_2332_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I178_2332_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I178_2332_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I178_2332_33_165: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I178_2332_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I178_2332_33_165_33_149: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I178_2332_33_165_33_150: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
