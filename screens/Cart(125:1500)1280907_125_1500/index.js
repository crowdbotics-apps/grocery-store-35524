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
      <View style={styles.View_144_1652}>
        <View style={styles.View_I144_1652_23_14}>
          <Text style={styles.Text_I144_1652_23_14}>Proceed</Text>
        </View>
      </View>
      <View style={styles.View_268_5259}>
        <View style={styles.View_147_1555}>
          <View style={styles.View_147_1542}>
            <View style={styles.View_147_1543}>
              <Text style={styles.Text_147_1543}>$20.50</Text>
            </View>
            <View style={styles.View_147_1544}>
              <Text style={styles.Text_147_1544}>Items (1)</Text>
            </View>
          </View>
          <View style={styles.View_147_1545}>
            <View style={styles.View_147_1546}>
              <Text style={styles.Text_147_1546}>$5</Text>
            </View>
            <View style={styles.View_147_1547}>
              <Text style={styles.Text_147_1547}>Discount</Text>
            </View>
          </View>
          <View style={styles.View_147_1548}>
            <View style={styles.View_147_1549}>
              <Text style={styles.Text_147_1549}>Free</Text>
            </View>
            <View style={styles.View_147_1550}>
              <Text style={styles.Text_147_1550}>Shipping</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/08e65bd1-3fd5-4d3a-9ee2-9300dc873c4b"
            }}
            style={styles.ImageBackground_147_1551}
          />
          <View style={styles.View_147_1552}>
            <View style={styles.View_147_1553}>
              <Text style={styles.Text_147_1553}>$15.50</Text>
            </View>
            <View style={styles.View_147_1554}>
              <Text style={styles.Text_147_1554}>Total Price</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_143_1650}>
        <View style={styles.View_143_1643} />
        <View style={styles.View_143_1646}>
          <Text style={styles.Text_143_1646}>Promo code</Text>
        </View>
        <View style={styles.View_143_1647} />
        <View style={styles.View_143_1648}>
          <Text style={styles.Text_143_1648}>Apply</Text>
        </View>
      </View>
      <View style={styles.View_268_5258}>
        <View style={styles.View_131_1473}>
          <Text style={styles.Text_131_1473}>Product list</Text>
        </View>
        <View style={styles.View_268_5165}>
          <View style={styles.View_I268_5165_131_1631}>
            <View style={styles.View_I268_5165_131_1574}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abfb9bd5-5c69-48dd-8d5b-68c309ba9c9a"
                }}
                style={styles.ImageBackground_I268_5165_131_1474}
              />
              <View style={styles.View_I268_5165_131_1573}>
                <View style={styles.View_I268_5165_131_1509}>
                  <View style={styles.View_I268_5165_131_1504}>
                    <View style={styles.View_I268_5165_131_1475}>
                      <Text style={styles.Text_I268_5165_131_1475}>
                        Pink girl’s hoodie
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I268_5165_131_1508}>
                    <View style={styles.View_I268_5165_131_1505}>
                      <View style={styles.View_I268_5165_131_1482}>
                        <Text style={styles.Text_I268_5165_131_1482}>4.0</Text>
                      </View>
                    </View>
                    <View style={styles.View_I268_5165_131_1506}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fbfe6f1-08f5-42d4-90fa-8b02085a7f6f"
                        }}
                        style={styles.ImageBackground_I268_5165_131_1476}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_I268_5165_131_1571}>
                  <View style={styles.View_I268_5165_131_1507}>
                    <View style={styles.View_I268_5165_131_1483}>
                      <Text style={styles.Text_I268_5165_131_1483}>$20.50</Text>
                    </View>
                  </View>
                  <View style={styles.View_I268_5165_131_1484}>
                    <View style={styles.View_I268_5165_131_1484_80_1120}>
                      <View style={styles.View_I268_5165_131_1484_80_1146}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a32f8ef6-541b-47c3-be78-faa70931dbc8"
                          }}
                          style={
                            styles.ImageBackground_I268_5165_131_1484_80_1147
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ececd6d-18a5-41bb-9d36-474ff724f638"
                          }}
                          style={
                            styles.ImageBackground_I268_5165_131_1484_80_1150
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fffd2711-2f3d-4681-946a-b161d8444784"
                        }}
                        style={
                          styles.ImageBackground_I268_5165_131_1484_80_1122
                        }
                      />
                    </View>
                    <View style={styles.View_I268_5165_131_1484_80_1123}>
                      <Text style={styles.Text_I268_5165_131_1484_80_1123}>
                        01
                      </Text>
                    </View>
                    <View style={styles.View_I268_5165_131_1484_80_1124}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d0ecf61-272b-4c7d-8977-a30d315fc9d8"
                        }}
                        style={
                          styles.ImageBackground_I268_5165_131_1484_80_1140
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36f630c8-872c-44d6-a9a9-84922c70e963"
                        }}
                        style={
                          styles.ImageBackground_I268_5165_131_1484_131_1521
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I268_5165_131_1622}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11c3738f-05ae-4c9d-87e2-75b357134a55"
              }}
              style={styles.ImageBackground_I268_5165_131_1622_131_1607}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c52c67a5-82b0-47dc-a6ca-c7a1c8521ddd"
              }}
              style={styles.ImageBackground_I268_5165_131_1622_131_1610}
            />
          </View>
        </View>
        <View style={styles.View_268_5211}>
          <View style={styles.View_I268_5211_131_1631}>
            <View style={styles.View_I268_5211_131_1574}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb7c871c-2b81-4dd3-af9f-e2c0dfd0ebb9"
                }}
                style={styles.ImageBackground_I268_5211_131_1474}
              />
              <View style={styles.View_I268_5211_131_1573}>
                <View style={styles.View_I268_5211_131_1509}>
                  <View style={styles.View_I268_5211_131_1504}>
                    <View style={styles.View_I268_5211_131_1475}>
                      <Text style={styles.Text_I268_5211_131_1475}>
                        Charming hat man
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I268_5211_131_1508}>
                    <View style={styles.View_I268_5211_131_1505}>
                      <View style={styles.View_I268_5211_131_1482}>
                        <Text style={styles.Text_I268_5211_131_1482}>4.0</Text>
                      </View>
                    </View>
                    <View style={styles.View_I268_5211_131_1506}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a52bae5b-2c3f-4885-93e2-f0faea15b170"
                        }}
                        style={styles.ImageBackground_I268_5211_131_1476}
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.View_I268_5211_131_1571}>
                  <View style={styles.View_I268_5211_131_1507}>
                    <View style={styles.View_I268_5211_131_1483}>
                      <Text style={styles.Text_I268_5211_131_1483}>$20.50</Text>
                    </View>
                  </View>
                  <View style={styles.View_I268_5211_131_1484}>
                    <View style={styles.View_I268_5211_131_1484_80_1120}>
                      <View style={styles.View_I268_5211_131_1484_80_1146}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fcb7412-39de-48b4-ac7e-54bc903fce0e"
                          }}
                          style={
                            styles.ImageBackground_I268_5211_131_1484_80_1147
                          }
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f4c61e8-c956-4500-971e-745496e60e97"
                          }}
                          style={
                            styles.ImageBackground_I268_5211_131_1484_80_1150
                          }
                        />
                      </View>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2cebd83a-7409-42d9-af91-d4a5128f1ca7"
                        }}
                        style={
                          styles.ImageBackground_I268_5211_131_1484_80_1122
                        }
                      />
                    </View>
                    <View style={styles.View_I268_5211_131_1484_80_1123}>
                      <Text style={styles.Text_I268_5211_131_1484_80_1123}>
                        01
                      </Text>
                    </View>
                    <View style={styles.View_I268_5211_131_1484_80_1124}>
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/337ef9ff-02f3-4793-87d2-cdc28d2ec574"
                        }}
                        style={
                          styles.ImageBackground_I268_5211_131_1484_80_1140
                        }
                      />
                      <ImageBackground
                        source={{
                          uri:
                            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20ac0e7f-78b5-4f8b-83d3-a29acede85c0"
                        }}
                        style={
                          styles.ImageBackground_I268_5211_131_1484_131_1521
                        }
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I268_5211_131_1622}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44f1f1c1-33c6-496e-bd6e-74b639591852"
              }}
              style={styles.ImageBackground_I268_5211_131_1622_131_1607}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2019dc8f-31b1-4d8f-8d5f-6352e1eb5b37"
              }}
              style={styles.ImageBackground_I268_5211_131_1622_131_1610}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_125_1510}>
        <View style={styles.View_I125_1510_80_938} />
      </View>
      <View style={styles.View_125_1511}>
        <View style={styles.View_125_1512}>
          <View style={styles.View_I125_1512_33_111} />
          <View style={styles.View_I125_1512_33_112}>
            <View style={styles.View_I125_1512_33_112_25_824} />
            <View style={styles.View_I125_1512_33_112_25_825}>
              <View style={styles.View_I125_1512_33_112_25_826} />
              <View style={styles.View_I125_1512_33_112_25_827}>
                <View style={styles.View_I125_1512_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0ea8532-1d79-4031-a204-c69c7500fc3b"
                  }}
                  style={styles.ImageBackground_I125_1512_33_112_25_829}
                />
                <View style={styles.View_I125_1512_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33d0430f-5b6d-416c-9939-d41426f7a749"
                }}
                style={styles.ImageBackground_I125_1512_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24ab9892-aca4-4cfc-ab74-dfb5b67c31fc"
                }}
                style={styles.ImageBackground_I125_1512_33_112_25_835}
              />
              <View style={styles.View_I125_1512_33_112_25_840}>
                <View style={styles.View_I125_1512_33_112_25_841}>
                  <Text style={styles.Text_I125_1512_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I125_1512_33_114}>
            <Text style={styles.Text_I125_1512_33_114}>Cart</Text>
          </View>
          <View style={styles.View_I125_1512_33_165}>
            <View style={styles.View_I125_1512_33_165_33_148}>
              <View style={styles.View_I125_1512_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44ddabcb-95e9-48f8-98d6-6ddb05b3c657"
                }}
                style={styles.ImageBackground_I125_1512_33_165_33_150}
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
  View_144_1652: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("96%"),
    backgroundColor: "rgba(224, 70, 78, 1)",
    overflow: "hidden"
  },
  View_I144_1652_23_14: {
    flexGrow: 1,
    width: wp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I144_1652_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5259: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64%")
  },
  View_147_1555: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_147_1542: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_147_1543: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1543: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1544: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1544: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1545: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  View_147_1546: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1546: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1547: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1547: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1548: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%")
  },
  View_147_1549: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1549: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1550: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1550: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_147_1551: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  View_147_1552: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%")
  },
  View_147_1553: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1553: {
    color: "rgba(224, 70, 78, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_147_1554: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_147_1554: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_143_1650: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("53%")
  },
  View_143_1643: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_143_1646: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_143_1646: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24000020325183868,
    textTransform: "none"
  },
  View_143_1647: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("1%"),
    backgroundColor: "rgba(224, 70, 78, 1)"
  },
  View_143_1648: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_143_1648: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.24000020325183868,
    textTransform: "none"
  },
  View_268_5258: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("34%"),
    minHeight: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%")
  },
  View_131_1473: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_131_1473: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5165: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1631: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I268_5165_131_1574: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5165_131_1474: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I268_5165_131_1573: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1509: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1504: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1475: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I268_5165_131_1475: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5165_131_1508: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1505: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1482: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I268_5165_131_1482: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5165_131_1506: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5165_131_1476: {
    width: wp("18%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I268_5165_131_1571: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1507: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1483: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I268_5165_131_1483: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5165_131_1484: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1484_80_1120: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5165_131_1484_80_1146: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5165_131_1484_80_1147: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I268_5165_131_1484_80_1150: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I268_5165_131_1484_80_1122: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I268_5165_131_1484_80_1123: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I268_5165_131_1484_80_1123: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5165_131_1484_80_1124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5165_131_1484_80_1140: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I268_5165_131_1484_131_1521: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I268_5165_131_1622: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5165_131_1622_131_1607: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I268_5165_131_1622_131_1610: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_268_5211: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1631: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I268_5211_131_1574: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5211_131_1474: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I268_5211_131_1573: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1509: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1504: {
    width: wp("50%"),
    minWidth: wp("50%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1475: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I268_5211_131_1475: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5211_131_1508: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1505: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1482: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I268_5211_131_1482: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5211_131_1506: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5211_131_1476: {
    width: wp("18%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I268_5211_131_1571: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1507: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1483: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I268_5211_131_1483: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5211_131_1484: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1484_80_1120: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5211_131_1484_80_1146: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5211_131_1484_80_1147: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I268_5211_131_1484_80_1150: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I268_5211_131_1484_80_1122: {
    width: wp("2%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I268_5211_131_1484_80_1123: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I268_5211_131_1484_80_1123: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I268_5211_131_1484_80_1124: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5211_131_1484_80_1140: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I268_5211_131_1484_131_1521: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I268_5211_131_1622: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I268_5211_131_1622_131_1607: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I268_5211_131_1622_131_1610: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_125_1510: {
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
  View_I125_1510_80_938: {
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
  View_125_1511: {
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
  View_125_1512: {
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
  View_I125_1512_33_111: {
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
  View_I125_1512_33_112: {
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
  View_I125_1512_33_112_25_824: {
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
  View_I125_1512_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I125_1512_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I125_1512_33_112_25_827: {
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
  View_I125_1512_33_112_25_828: {
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
  ImageBackground_I125_1512_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I125_1512_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I125_1512_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I125_1512_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I125_1512_33_112_25_840: {
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
  View_I125_1512_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I125_1512_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I125_1512_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I125_1512_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I125_1512_33_165: {
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
  View_I125_1512_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I125_1512_33_165_33_149: {
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
  ImageBackground_I125_1512_33_165_33_150: {
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
