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
      <View style={styles.View_218_2815}>
        <View style={styles.View_I218_2815_80_938} />
      </View>
      <View style={styles.View_218_2819}>
        <View style={styles.View_I218_2819_23_14}>
          <Text style={styles.Text_I218_2819_23_14}>Publish</Text>
        </View>
      </View>
      <View style={styles.View_268_5053}>
        <View style={styles.View_218_3118}>
          <View style={styles.View_I218_3118_218_2689}>
            <Text style={styles.Text_I218_3118_218_2689}>Your review</Text>
          </View>
          <View style={styles.View_I218_3118_218_2690}>
            <View style={styles.View_I218_3118_218_2691}>
              <Text style={styles.Text_I218_3118_218_2691}>Type here…</Text>
            </View>
            <View style={styles.View_I218_3118_218_2692}>
              <Text style={styles.Text_I218_3118_218_2692}>0 / 200</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5052}>
        <View style={styles.View_218_3111}>
          <Text style={styles.Text_218_3111}>
            Write something about the product
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20aea3f0-5a95-4a32-a998-df53eed4bda7"
          }}
          style={styles.ImageBackground_218_3112}
        />
      </View>
      <View style={styles.View_268_5051}>
        <View style={styles.View_218_3064}>
          <Text style={styles.Text_218_3064}>
            How are you feeling about our service?
          </Text>
        </View>
        <View style={styles.View_218_3065}>
          <View style={styles.View_I218_3065_218_3017}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ffa9133-6545-4f48-b45f-50933851e040"
              }}
              style={styles.ImageBackground_I218_3065_218_3018}
            />
          </View>
          <View style={styles.View_I218_3065_218_3030}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48d5db4c-cbab-46e8-8461-4fdd615eefc5"
              }}
              style={styles.ImageBackground_I218_3065_218_3031}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92b34b38-9f15-4405-9986-c464fc5e7eff"
            }}
            style={styles.ImageBackground_I218_3065_218_3051}
          />
          <View style={styles.View_I218_3065_218_3024}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e322956-6813-4313-a637-bad67c84fc76"
              }}
              style={styles.ImageBackground_I218_3065_218_3025}
            />
          </View>
          <View style={styles.View_I218_3065_218_3038}>
            <View style={styles.View_I218_3065_218_3039}>
              <View style={styles.View_I218_3065_218_3041} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6c68517-1971-400e-b629-a7221307c3d7"
                }}
                style={styles.ImageBackground_I218_3065_218_3042}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09020be7-c4a8-459f-ac8f-289f8660fec6"
                }}
                style={styles.ImageBackground_I218_3065_218_3043}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/182e02e4-7190-4be6-a9de-7edb99fccb70"
                }}
                style={styles.ImageBackground_I218_3065_218_3044}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15284ec7-6bb7-4fbe-b746-e5e8b925e91f"
                }}
                style={styles.ImageBackground_I218_3065_218_3045}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6370280-a537-493c-8ecc-da9dccaf4224"
                }}
                style={styles.ImageBackground_I218_3065_218_3046}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40814040-9bb7-46f1-a974-eb2eeb017f37"
                }}
                style={styles.ImageBackground_I218_3065_218_3047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40ad9e0b-f87c-4528-80d9-d3e74c2b33f9"
                }}
                style={styles.ImageBackground_I218_3065_218_3048}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e89331c7-61c4-433f-a5b8-1b1607cd56a5"
                }}
                style={styles.ImageBackground_I218_3065_218_3049}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4ff69c6-6589-42cf-89b6-bae54802e85b"
                }}
                style={styles.ImageBackground_I218_3065_218_3050}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5138}>
        <View style={styles.View_268_5112}>
          <Text style={styles.Text_268_5112}>Add photo</Text>
        </View>
        <View style={styles.View_268_5129}>
          <View style={styles.View_268_5113} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b237a2b-8980-4418-bfe0-06ddd3827d8e"
            }}
            style={styles.ImageBackground_268_5125}
          />
        </View>
        <View style={styles.View_268_5130}>
          <View style={styles.View_268_5131} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35ae7512-b3a7-4c4a-a86b-7e3078845b73"
            }}
            style={styles.ImageBackground_268_5132}
          />
        </View>
      </View>
      <View style={styles.View_218_2820}>
        <View style={styles.View_218_2821}>
          <View style={styles.View_I218_2821_33_111} />
          <View style={styles.View_I218_2821_33_112}>
            <View style={styles.View_I218_2821_33_112_25_824} />
            <View style={styles.View_I218_2821_33_112_25_825}>
              <View style={styles.View_I218_2821_33_112_25_826} />
              <View style={styles.View_I218_2821_33_112_25_827}>
                <View style={styles.View_I218_2821_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/05e92121-8259-4db2-80af-3fe1cc329306"
                  }}
                  style={styles.ImageBackground_I218_2821_33_112_25_829}
                />
                <View style={styles.View_I218_2821_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b052af69-d8b1-419a-83c0-afea6c6c3235"
                }}
                style={styles.ImageBackground_I218_2821_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34b644c9-ca35-4a05-beae-1cc49418d1a2"
                }}
                style={styles.ImageBackground_I218_2821_33_112_25_835}
              />
              <View style={styles.View_I218_2821_33_112_25_840}>
                <View style={styles.View_I218_2821_33_112_25_841}>
                  <Text style={styles.Text_I218_2821_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I218_2821_33_114}>
            <Text style={styles.Text_I218_2821_33_114}>Write feedback</Text>
          </View>
          <View style={styles.View_I218_2821_33_165}>
            <View style={styles.View_I218_2821_33_165_33_148}>
              <View style={styles.View_I218_2821_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e8ebe41-7dd4-48f8-bd2d-acc977702972"
                }}
                style={styles.ImageBackground_I218_2821_33_165_33_150}
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
  View_218_2815: {
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
  View_I218_2815_80_938: {
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
  View_218_2819: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("96%"),
    backgroundColor: "rgba(224, 70, 78, 1)",
    overflow: "hidden"
  },
  View_I218_2819_23_14: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I218_2819_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5053: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  View_218_3118: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I218_3118_218_2689: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I218_3118_218_2689: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3118_218_2690: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I218_3118_218_2691: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I218_3118_218_2691: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3118_218_2692: {
    width: wp("83%"),
    minWidth: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "flex-end"
  },
  Text_I218_3118_218_2692: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5052: {
    width: wp("72%"),
    minWidth: wp("72%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("29%")
  },
  View_218_3111: {
    width: wp("72%"),
    minWidth: wp("72%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_218_3111: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_218_3112: {
    width: wp("60%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_268_5051: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%")
  },
  View_218_3064: {
    width: wp("79%"),
    minWidth: wp("79%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_218_3064: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_218_3065: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I218_3065_218_3017: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I218_3065_218_3018: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3065_218_3030: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I218_3065_218_3031: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I218_3065_218_3051: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%")
  },
  View_I218_3065_218_3024: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I218_3065_218_3025: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3065_218_3038: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I218_3065_218_3039: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I218_3065_218_3041: {
    width: wp("15%"),
    height: hp("9%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%")
  },
  ImageBackground_I218_3065_218_3042: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I218_3065_218_3043: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I218_3065_218_3044: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I218_3065_218_3045: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I218_3065_218_3046: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I218_3065_218_3047: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I218_3065_218_3048: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I218_3065_218_3049: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I218_3065_218_3050: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_268_5138: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("75%")
  },
  View_268_5112: {
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
  Text_268_5112: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5129: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_268_5113: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(215, 216, 218, 1)",
    borderWidth: 1.5
  },
  ImageBackground_268_5125: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_268_5130: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("5%")
  },
  View_268_5131: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(215, 216, 218, 1)",
    borderWidth: 1.5
  },
  ImageBackground_268_5132: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_218_2820: {
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
  View_218_2821: {
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
  View_I218_2821_33_111: {
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
  View_I218_2821_33_112: {
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
  View_I218_2821_33_112_25_824: {
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
  View_I218_2821_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I218_2821_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_2821_33_112_25_827: {
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
  View_I218_2821_33_112_25_828: {
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
  ImageBackground_I218_2821_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I218_2821_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I218_2821_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I218_2821_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I218_2821_33_112_25_840: {
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
  View_I218_2821_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I218_2821_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I218_2821_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I218_2821_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_2821_33_165: {
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
  View_I218_2821_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I218_2821_33_165_33_149: {
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
  ImageBackground_I218_2821_33_165_33_150: {
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
