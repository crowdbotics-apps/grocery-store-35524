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
      <View style={styles.View_257_4775}>
        <View style={styles.View_I257_4775_80_938} />
      </View>
      <View style={styles.View_268_5317}>
        <View style={styles.View_258_4855}>
          <View style={styles.View_I258_4855_258_4835}>
            <Text style={styles.Text_I258_4855_258_4835}>Log out</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceb2069b-cc86-42cf-9e9f-260dde71e449"
            }}
            style={styles.ImageBackground_I258_4855_258_4837}
          />
          <View style={styles.View_I258_4855_258_4838}>
            <View style={styles.View_I258_4855_258_4838_33_161}>
              <View style={styles.View_I258_4855_258_4838_33_162} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbf5834b-291d-484b-9bf3-abc21efd04ea"
                }}
                style={styles.ImageBackground_I258_4855_258_4838_33_163}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_258_4887}>
          <View style={styles.View_I258_4887_258_4835}>
            <Text style={styles.Text_I258_4887_258_4835}>Rate us</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dcdf8a8-d362-4777-9f56-991372695678"
            }}
            style={styles.ImageBackground_I258_4887_258_4837}
          />
          <View style={styles.View_I258_4887_258_4838}>
            <View style={styles.View_I258_4887_258_4838_33_161}>
              <View style={styles.View_I258_4887_258_4838_33_162} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/519b3bb3-03fb-4c66-a069-dcfb1650d8e2"
                }}
                style={styles.ImageBackground_I258_4887_258_4838_33_163}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_258_4853}>
          <Text style={styles.Text_258_4853}>More settings</Text>
        </View>
      </View>
      <View style={styles.View_268_5318}>
        <View style={styles.View_258_4655}>
          <View style={styles.View_I258_4655_258_4642}>
            <View style={styles.View_I258_4655_258_4643}>
              <Text style={styles.Text_I258_4655_258_4643}>
                Change password
              </Text>
            </View>
            <View style={styles.View_I258_4655_258_4644}>
              <Text style={styles.Text_I258_4655_258_4644}>
                Change your password from here
              </Text>
            </View>
          </View>
          <View style={styles.View_I258_4655_258_4649}>
            <View style={styles.View_I258_4655_258_4649_33_161}>
              <View style={styles.View_I258_4655_258_4649_33_162} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd72bf3b-921e-4eb5-8692-68aed9de16a0"
                }}
                style={styles.ImageBackground_I258_4655_258_4649_33_163}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_258_4675}>
          <View style={styles.View_I258_4675_258_4596}>
            <View style={styles.View_I258_4675_258_4597}>
              <Text style={styles.Text_I258_4675_258_4597}>
                Push notification
              </Text>
            </View>
            <View style={styles.View_I258_4675_258_4598}>
              <Text style={styles.Text_I258_4675_258_4598}>
                Change your push notifiation here
              </Text>
            </View>
          </View>
          <View style={styles.View_I258_4675_258_4599}>
            <View style={styles.View_I258_4675_258_4599_258_4569}>
              <View style={styles.View_I258_4675_258_4599_258_4570} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2238acf-570b-452d-bf13-5d291ab121e7"
                }}
                style={styles.ImageBackground_I258_4675_258_4599_258_4571}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_258_4689}>
          <View style={styles.View_I258_4689_258_4596}>
            <View style={styles.View_I258_4689_258_4597}>
              <Text style={styles.Text_I258_4689_258_4597}>
                Email notification
              </Text>
            </View>
            <View style={styles.View_I258_4689_258_4598}>
              <Text style={styles.Text_I258_4689_258_4598}>
                Change your email notifiation here
              </Text>
            </View>
          </View>
          <View style={styles.View_I258_4689_258_4599}>
            <View style={styles.View_I258_4689_258_4599_258_4569}>
              <View style={styles.View_I258_4689_258_4599_258_4570} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83c8f2ac-06f9-4155-8e7c-f3eed46d5d6c"
                }}
                style={styles.ImageBackground_I258_4689_258_4599_258_4571}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_258_4703}>
          <View style={styles.View_I258_4703_258_4596}>
            <View style={styles.View_I258_4703_258_4597}>
              <Text style={styles.Text_I258_4703_258_4597}>
                SMS notification
              </Text>
            </View>
            <View style={styles.View_I258_4703_258_4598}>
              <Text style={styles.Text_I258_4703_258_4598}>
                Change your SMS notifiation here
              </Text>
            </View>
          </View>
          <View style={styles.View_I258_4703_258_4599}>
            <View style={styles.View_I258_4703_258_4599_258_4585}>
              <View style={styles.View_I258_4703_258_4599_258_4586} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91120ef6-195d-49ec-b516-af4aecca4be5"
                }}
                style={styles.ImageBackground_I258_4703_258_4599_258_4587}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_268_5319}>
          <View style={styles.View_258_4671}>
            <Text style={styles.Text_258_4671}>Basic settings</Text>
          </View>
          <View style={styles.View_258_4672}>
            <Text style={styles.Text_258_4672}>
              Update your settings like notifications, payments profile edit
              etc.
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_257_4780}>
        <View style={styles.View_257_4781}>
          <View style={styles.View_I257_4781_33_111} />
          <View style={styles.View_I257_4781_33_112}>
            <View style={styles.View_I257_4781_33_112_25_824} />
            <View style={styles.View_I257_4781_33_112_25_825}>
              <View style={styles.View_I257_4781_33_112_25_826} />
              <View style={styles.View_I257_4781_33_112_25_827}>
                <View style={styles.View_I257_4781_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cc431b3-fdc4-4eb9-87bf-c2ebbdf4468e"
                  }}
                  style={styles.ImageBackground_I257_4781_33_112_25_829}
                />
                <View style={styles.View_I257_4781_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb5e9627-bb77-46f0-a12c-93a72d2688a8"
                }}
                style={styles.ImageBackground_I257_4781_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cb3e4a8-a7f7-4799-8ccc-9ddcfecbd9fe"
                }}
                style={styles.ImageBackground_I257_4781_33_112_25_835}
              />
              <View style={styles.View_I257_4781_33_112_25_840}>
                <View style={styles.View_I257_4781_33_112_25_841}>
                  <Text style={styles.Text_I257_4781_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I257_4781_33_114}>
            <Text style={styles.Text_I257_4781_33_114}>Settings</Text>
          </View>
          <View style={styles.View_I257_4781_33_165}>
            <View style={styles.View_I257_4781_33_165_33_148}>
              <View style={styles.View_I257_4781_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51355aec-5ff9-4495-bf63-7173660a8e09"
                }}
                style={styles.ImageBackground_I257_4781_33_165_33_150}
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
  View_257_4775: {
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
  View_I257_4775_80_938: {
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
  View_268_5317: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("68%")
  },
  View_258_4855: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I258_4855_258_4835: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I258_4855_258_4835: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I258_4855_258_4837: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I258_4855_258_4838: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4855_258_4838_33_161: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I258_4855_258_4838_33_162: {
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
  ImageBackground_I258_4855_258_4838_33_163: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_258_4887: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I258_4887_258_4835: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I258_4887_258_4835: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I258_4887_258_4837: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I258_4887_258_4838: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4887_258_4838_33_161: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I258_4887_258_4838_33_162: {
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
  ImageBackground_I258_4887_258_4838_33_163: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_258_4853: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_258_4853: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5318: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_258_4655: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I258_4655_258_4642: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4655_258_4643: {
    width: wp("33%"),
    minWidth: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I258_4655_258_4643: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4655_258_4644: {
    width: wp("44%"),
    minWidth: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I258_4655_258_4644: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4655_258_4649: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4655_258_4649_33_161: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I258_4655_258_4649_33_162: {
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
  ImageBackground_I258_4655_258_4649_33_163: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_258_4675: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I258_4675_258_4596: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4675_258_4597: {
    width: wp("31%"),
    minWidth: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I258_4675_258_4597: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4675_258_4598: {
    width: wp("53%"),
    minWidth: wp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I258_4675_258_4598: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4675_258_4599: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4675_258_4599_258_4569: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I258_4675_258_4599_258_4570: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 164, 93, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I258_4675_258_4599_258_4571: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_258_4689: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I258_4689_258_4596: {
    flexGrow: 1,
    width: wp("54%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4689_258_4597: {
    width: wp("33%"),
    minWidth: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I258_4689_258_4597: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4689_258_4598: {
    width: wp("54%"),
    minWidth: wp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I258_4689_258_4598: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4689_258_4599: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4689_258_4599_258_4569: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I258_4689_258_4599_258_4570: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(34, 164, 93, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I258_4689_258_4599_258_4571: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_258_4703: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I258_4703_258_4596: {
    flexGrow: 1,
    width: wp("52%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4703_258_4597: {
    width: wp("30%"),
    minWidth: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I258_4703_258_4597: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4703_258_4598: {
    width: wp("52%"),
    minWidth: wp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "center"
  },
  Text_I258_4703_258_4598: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I258_4703_258_4599: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I258_4703_258_4599_258_4585: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I258_4703_258_4599_258_4586: {
    width: wp("13%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(134, 134, 134, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I258_4703_258_4599_258_4587: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_268_5319: {
    width: wp("76%"),
    minWidth: wp("76%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_258_4671: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_258_4671: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_258_4672: {
    width: wp("76%"),
    minWidth: wp("76%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_258_4672: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_4780: {
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
  View_257_4781: {
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
  View_I257_4781_33_111: {
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
  View_I257_4781_33_112: {
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
  View_I257_4781_33_112_25_824: {
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
  View_I257_4781_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I257_4781_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4781_33_112_25_827: {
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
  View_I257_4781_33_112_25_828: {
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
  ImageBackground_I257_4781_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I257_4781_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I257_4781_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I257_4781_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I257_4781_33_112_25_840: {
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
  View_I257_4781_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4781_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I257_4781_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I257_4781_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4781_33_165: {
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
  View_I257_4781_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I257_4781_33_165_33_149: {
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
  ImageBackground_I257_4781_33_165_33_150: {
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
