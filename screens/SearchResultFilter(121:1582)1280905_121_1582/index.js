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
      <View style={styles.View_123_1995}>
        <View style={styles.View_I123_1995_23_14}>
          <Text style={styles.Text_I123_1995_23_14}>Apply</Text>
        </View>
      </View>
      <View style={styles.View_268_5163}>
        <View style={styles.View_121_1723}>
          <Text style={styles.Text_121_1723}>Price</Text>
        </View>
        <View style={styles.View_123_1797}>
          <View style={styles.View_I123_1797_121_1770}>
            <View style={styles.View_I123_1797_121_1771}>
              <View style={styles.View_I123_1797_121_1772} />
              <View style={styles.View_I123_1797_121_1773}>
                <View style={styles.View_I123_1797_121_1774}>
                  <View style={styles.View_I123_1797_123_1787}>
                    <View style={styles.View_I123_1797_123_1788}>
                      <View style={styles.View_I123_1797_123_1789}>
                        <Text style={styles.Text_I123_1797_123_1789}>270</Text>
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d16c01b6-5729-4bff-9b47-8f1c1b23751e"
                      }}
                      style={styles.ImageBackground_I123_1797_123_1790}
                    />
                  </View>
                  <View style={styles.View_I123_1797_121_1776} />
                </View>
                <View style={styles.View_I123_1797_121_1777}>
                  <View style={styles.View_I123_1797_123_1792}>
                    <View style={styles.View_I123_1797_123_1793}>
                      <View style={styles.View_I123_1797_123_1794}>
                        <Text style={styles.Text_I123_1797_123_1794}>270</Text>
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5bf3bb21-d4a7-445b-8d21-1bbb1d3704e3"
                      }}
                      style={styles.ImageBackground_I123_1797_123_1795}
                    />
                  </View>
                  <View style={styles.View_I123_1797_121_1779} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5162}>
        <View style={styles.View_121_1708}>
          <Text style={styles.Text_121_1708}>Color</Text>
        </View>
        <View style={styles.View_268_5149}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d0e097e-cd5e-480f-aa3b-97dc1fea93fb"
            }}
            style={styles.ImageBackground_268_5150}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13320d08-14c4-4600-a4d4-aab46fb9c2b5"
            }}
            style={styles.ImageBackground_268_5153}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a93b2d07-5434-4b0b-af12-42ae65a68ede"
            }}
            style={styles.ImageBackground_268_5156}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9cc371d8-0f90-4495-b7ba-31dba4855a07"
            }}
            style={styles.ImageBackground_268_5159}
          />
        </View>
      </View>
      <View style={styles.View_268_5144}>
        <View style={styles.View_123_1988}>
          <Text style={styles.Text_123_1988}>Delivery</Text>
        </View>
        <View style={styles.View_123_1989}>
          <View style={styles.View_123_1990}>
            <Text style={styles.Text_123_1990}>Free</Text>
          </View>
        </View>
        <View style={styles.View_123_1991}>
          <View style={styles.View_123_1992}>
            <Text style={styles.Text_123_1992}>Paid</Text>
          </View>
        </View>
        <View style={styles.View_123_1993}>
          <View style={styles.View_123_1994}>
            <Text style={styles.Text_123_1994}>Express</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5143}>
        <View style={styles.View_121_1680}>
          <Text style={styles.Text_121_1680}>Category</Text>
        </View>
        <View style={styles.View_123_1977}>
          <View style={styles.View_123_1979}>
            <Text style={styles.Text_123_1979}>All</Text>
          </View>
        </View>
        <View style={styles.View_123_1980}>
          <View style={styles.View_123_1981}>
            <Text style={styles.Text_123_1981}>Women</Text>
          </View>
        </View>
        <View style={styles.View_123_1982}>
          <View style={styles.View_123_1983}>
            <Text style={styles.Text_123_1983}>Men</Text>
          </View>
        </View>
        <View style={styles.View_123_1984}>
          <View style={styles.View_123_1985}>
            <Text style={styles.Text_123_1985}>Children</Text>
          </View>
        </View>
        <View style={styles.View_123_1986}>
          <View style={styles.View_123_1987}>
            <Text style={styles.Text_123_1987}>Sale</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_121_1595}>
        <View style={styles.View_I121_1595_80_938} />
      </View>
      <View style={styles.View_121_1596}>
        <View style={styles.View_121_1597}>
          <View style={styles.View_I121_1597_33_111} />
          <View style={styles.View_I121_1597_33_112}>
            <View style={styles.View_I121_1597_33_112_25_824} />
            <View style={styles.View_I121_1597_33_112_25_825}>
              <View style={styles.View_I121_1597_33_112_25_826} />
              <View style={styles.View_I121_1597_33_112_25_827}>
                <View style={styles.View_I121_1597_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4be4ef9-b6c4-47eb-b23e-941fd7c83693"
                  }}
                  style={styles.ImageBackground_I121_1597_33_112_25_829}
                />
                <View style={styles.View_I121_1597_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96f29996-f0f6-467f-931a-3c7f2a502148"
                }}
                style={styles.ImageBackground_I121_1597_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58e74a4b-3040-4788-badc-64e05d97a000"
                }}
                style={styles.ImageBackground_I121_1597_33_112_25_835}
              />
              <View style={styles.View_I121_1597_33_112_25_840}>
                <View style={styles.View_I121_1597_33_112_25_841}>
                  <Text style={styles.Text_I121_1597_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I121_1597_33_114}>
            <Text style={styles.Text_I121_1597_33_114}>Filter</Text>
          </View>
          <View style={styles.View_I121_1597_33_165}>
            <View style={styles.View_I121_1597_33_165_33_148}>
              <View style={styles.View_I121_1597_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e75fb1cb-fa9a-4722-9554-fa29b0f5d500"
                }}
                style={styles.ImageBackground_I121_1597_33_165_33_150}
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
  View_123_1995: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("94%"),
    backgroundColor: "rgba(224, 70, 78, 1)",
    overflow: "hidden"
  },
  View_I123_1995_23_14: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I123_1995_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5163: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%")
  },
  View_121_1723: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_121_1723: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1797: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1797_121_1770: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%"),
    backgroundColor: "rgba(235, 235, 236, 1)"
  },
  View_I123_1797_121_1771: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1797_121_1772: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I123_1797_121_1773: {
    width: wp("55%"),
    minWidth: wp("55%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(239, 113, 108, 1)"
  },
  View_I123_1797_121_1774: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("-8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1797_123_1787: {
    width: wp("14%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1797_123_1788: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 59, 70, 1)"
  },
  View_I123_1797_123_1789: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I123_1797_123_1789: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_1797_123_1790: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  View_I123_1797_121_1776: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 70, 78, 1)",
    borderWidth: 2
  },
  View_I123_1797_121_1777: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("-8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1797_123_1792: {
    width: wp("14%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I123_1797_123_1793: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(56, 59, 70, 1)"
  },
  View_I123_1797_123_1794: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I123_1797_123_1794: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I123_1797_123_1795: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%")
  },
  View_I123_1797_121_1779: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(224, 70, 78, 1)",
    borderWidth: 2
  },
  View_268_5162: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("52%")
  },
  View_121_1708: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_121_1708: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5149: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%")
  },
  ImageBackground_268_5150: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%")
  },
  ImageBackground_268_5153: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%")
  },
  ImageBackground_268_5156: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_268_5159: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_268_5144: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("37%")
  },
  View_123_1988: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_123_1988: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1989: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 70, 78, 1)"
  },
  View_123_1990: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1990: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1991: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_123_1992: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1992: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1993: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_123_1994: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1994: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5143: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%")
  },
  View_121_1680: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_121_1680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1977: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(224, 70, 78, 1)"
  },
  View_123_1979: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1979: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1980: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_123_1981: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1981: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1982: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_123_1983: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1983: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1984: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_123_1985: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1985: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_123_1986: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("5%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_123_1987: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_123_1987: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_121_1595: {
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
  View_I121_1595_80_938: {
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
  View_121_1596: {
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
  View_121_1597: {
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
  View_I121_1597_33_111: {
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
  View_I121_1597_33_112: {
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
  View_I121_1597_33_112_25_824: {
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
  View_I121_1597_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I121_1597_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I121_1597_33_112_25_827: {
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
  View_I121_1597_33_112_25_828: {
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
  ImageBackground_I121_1597_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I121_1597_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I121_1597_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I121_1597_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I121_1597_33_112_25_840: {
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
  View_I121_1597_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I121_1597_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I121_1597_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I121_1597_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I121_1597_33_165: {
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
  View_I121_1597_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I121_1597_33_165_33_149: {
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
  ImageBackground_I121_1597_33_165_33_150: {
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
