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
      <View style={styles.View_210_2500}>
        <View style={styles.View_I210_2500_80_938} />
      </View>
      <View style={styles.View_210_2656}>
        <View style={styles.View_I210_2656_23_14}>
          <Text style={styles.Text_I210_2656_23_14}>Add card</Text>
        </View>
      </View>
      <View style={styles.View_267_4682}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86d47f30-92be-4175-a0ac-6172a8619b19"
          }}
          style={styles.ImageBackground_267_4683}
        />
        <View style={styles.View_267_4684} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ed41601-299a-4650-82a4-61d1175f7b26"
          }}
          style={styles.ImageBackground_267_4685}
        />
      </View>
      <View style={styles.View_268_5313}>
        <View style={styles.View_210_2589}>
          <View style={styles.View_I210_2589_210_2574} />
          <View style={styles.View_I210_2589_210_2575} />
          <View style={styles.View_I210_2589_210_2576}>
            <View style={styles.View_I210_2589_210_2577}>
              <View style={styles.View_I210_2589_210_2578} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6897bfd1-0b78-4a53-bf30-852912dd1e53"
                }}
                style={styles.ImageBackground_I210_2589_210_2579}
              />
            </View>
            <View style={styles.View_I210_2589_210_2580}>
              <View style={styles.View_I210_2589_210_2581} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a3793e1-3da0-4d4c-af14-3215ec919b0e"
                }}
                style={styles.ImageBackground_I210_2589_210_2582}
              />
            </View>
          </View>
          <View style={styles.View_I210_2589_210_2583}>
            <Text style={styles.Text_I210_2589_210_2583}>
              4111 - 1111 - 1111 - 1111
            </Text>
          </View>
          <View style={styles.View_I210_2589_210_2584}>
            <Text style={styles.Text_I210_2589_210_2584}>Sayef Mahmud</Text>
          </View>
          <View style={styles.View_I210_2589_210_2585}>
            <Text style={styles.Text_I210_2589_210_2585}>Credit</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1fc78ef-f432-47f1-8856-c459a40664c9"
            }}
            style={styles.ImageBackground_I210_2589_210_2586}
          />
        </View>
        <View style={styles.View_210_2604}>
          <View style={styles.View_I210_2604_210_2548} />
          <View style={styles.View_I210_2604_210_2549} />
          <View style={styles.View_I210_2604_210_2550}>
            <View style={styles.View_I210_2604_210_2551} />
            <View style={styles.View_I210_2604_210_2552}>
              <View style={styles.View_I210_2604_210_2553} />
              <View style={styles.View_I210_2604_210_2554} />
              <View style={styles.View_I210_2604_210_2555} />
              <View style={styles.View_I210_2604_210_2556} />
              <View style={styles.View_I210_2604_210_2557} />
              <View style={styles.View_I210_2604_210_2558} />
              <View style={styles.View_I210_2604_210_2559} />
              <View style={styles.View_I210_2604_210_2560} />
              <View style={styles.View_I210_2604_210_2561} />
            </View>
          </View>
          <View style={styles.View_I210_2604_210_2562}>
            <Text style={styles.Text_I210_2604_210_2562}>
              2221 - 0057 - 4680 - 2089
            </Text>
          </View>
          <View style={styles.View_I210_2604_210_2563}>
            <Text style={styles.Text_I210_2604_210_2563}>Sayef Mahmud</Text>
          </View>
          <View style={styles.View_I210_2604_210_2564}>
            <Text style={styles.Text_I210_2604_210_2564}>Credit</Text>
          </View>
          <View style={styles.View_I210_2604_210_2565}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fee510da-bfd4-40cd-8cb9-e454fb2250f8"
              }}
              style={styles.ImageBackground_I210_2604_210_2566}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b5e73c6-aec7-462c-afd7-91aa384cb656"
              }}
              style={styles.ImageBackground_I210_2604_210_2567}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc4ea3f5-635c-492c-a539-190ed4d1d5ef"
              }}
              style={styles.ImageBackground_I210_2604_210_2568}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_210_2505}>
        <View style={styles.View_210_2506}>
          <View style={styles.View_I210_2506_33_111} />
          <View style={styles.View_I210_2506_33_112}>
            <View style={styles.View_I210_2506_33_112_25_824} />
            <View style={styles.View_I210_2506_33_112_25_825}>
              <View style={styles.View_I210_2506_33_112_25_826} />
              <View style={styles.View_I210_2506_33_112_25_827}>
                <View style={styles.View_I210_2506_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1e90e95-0bfc-4468-a79a-5543911264b8"
                  }}
                  style={styles.ImageBackground_I210_2506_33_112_25_829}
                />
                <View style={styles.View_I210_2506_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55bf2ae1-3584-49c7-9738-e0f98d250d9f"
                }}
                style={styles.ImageBackground_I210_2506_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fb53c83-5576-454a-938d-2d102ed8181a"
                }}
                style={styles.ImageBackground_I210_2506_33_112_25_835}
              />
              <View style={styles.View_I210_2506_33_112_25_840}>
                <View style={styles.View_I210_2506_33_112_25_841}>
                  <Text style={styles.Text_I210_2506_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I210_2506_33_114}>
            <Text style={styles.Text_I210_2506_33_114}>Payment method</Text>
          </View>
          <View style={styles.View_I210_2506_33_165}>
            <View style={styles.View_I210_2506_33_165_33_148}>
              <View style={styles.View_I210_2506_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45825e52-0f0d-4d2e-acef-c48d222f118c"
                }}
                style={styles.ImageBackground_I210_2506_33_165_33_150}
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
  View_210_2500: {
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
  View_I210_2500_80_938: {
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
  View_210_2656: {
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
  View_I210_2656_23_14: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I210_2656_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_267_4682: {
    width: wp("11%"),
    height: hp("1%"),
    top: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  ImageBackground_267_4683: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_267_4684: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 70, 78, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_267_4685: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_268_5313: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%")
  },
  View_210_2589: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I210_2589_210_2574: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2589_210_2575: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.029999999329447746
  },
  View_I210_2589_210_2576: {
    flexGrow: 1,
    width: wp("94%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2589_210_2577: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2589_210_2578: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 170, 1)"
  },
  ImageBackground_I210_2589_210_2579: {
    width: wp("144%"),
    minWidth: wp("144%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-42%"),
    top: hp("-2%")
  },
  View_I210_2589_210_2580: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2589_210_2581: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 170, 1)"
  },
  ImageBackground_I210_2589_210_2582: {
    width: wp("137%"),
    minWidth: wp("137%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-41%"),
    top: hp("0%")
  },
  View_I210_2589_210_2583: {
    flexGrow: 1,
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_I210_2589_210_2583: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I210_2589_210_2584: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_I210_2589_210_2584: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I210_2589_210_2585: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I210_2589_210_2585: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I210_2589_210_2586: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("2%")
  },
  View_210_2604: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I210_2604_210_2548: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2604_210_2549: {
    flexGrow: 1,
    width: wp("89%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.029999999329447746
  },
  View_I210_2604_210_2550: {
    flexGrow: 1,
    width: wp("64%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2604_210_2551: {
    width: wp("106%"),
    minWidth: wp("106%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(161, 161, 170, 1)"
  },
  View_I210_2604_210_2552: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%"),
    top: hp("0%")
  },
  View_I210_2604_210_2553: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2554: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2555: {
    width: wp("60%"),
    minWidth: wp("60%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2556: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2557: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2558: {
    width: wp("39%"),
    minWidth: wp("39%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2559: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2560: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2561: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_I210_2604_210_2562: {
    flexGrow: 1,
    width: wp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_I210_2604_210_2562: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I210_2604_210_2563: {
    flexGrow: 1,
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_I210_2604_210_2563: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I210_2604_210_2564: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I210_2604_210_2564: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I210_2604_210_2565: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I210_2604_210_2566: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I210_2604_210_2567: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I210_2604_210_2568: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_210_2505: {
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
  View_210_2506: {
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
  View_I210_2506_33_111: {
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
  View_I210_2506_33_112: {
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
  View_I210_2506_33_112_25_824: {
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
  View_I210_2506_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2506_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I210_2506_33_112_25_827: {
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
  View_I210_2506_33_112_25_828: {
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
  ImageBackground_I210_2506_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I210_2506_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I210_2506_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I210_2506_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I210_2506_33_112_25_840: {
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
  View_I210_2506_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I210_2506_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I210_2506_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I210_2506_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I210_2506_33_165: {
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
  View_I210_2506_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I210_2506_33_165_33_149: {
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
  ImageBackground_I210_2506_33_165_33_150: {
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
