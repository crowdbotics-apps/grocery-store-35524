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
      <View style={styles.View_168_2280}>
        <View style={styles.View_I168_2280_23_14}>
          <Text style={styles.Text_I168_2280_23_14}>Save</Text>
        </View>
      </View>
      <View style={styles.View_268_5300}>
        <View style={styles.View_168_2270}>
          <View style={styles.View_168_2271}>
            <View style={styles.View_I168_2271_162_1941}>
              <Text style={styles.Text_I168_2271_162_1941}>First name</Text>
            </View>
            <View style={styles.View_I168_2271_162_1942}>
              <View style={styles.View_I168_2271_162_1943}>
                <Text style={styles.Text_I168_2271_162_1943}>Name here</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2272}>
            <View style={styles.View_I168_2272_162_1941}>
              <Text style={styles.Text_I168_2272_162_1941}>Last name</Text>
            </View>
            <View style={styles.View_I168_2272_162_1942}>
              <View style={styles.View_I168_2272_162_1943}>
                <Text style={styles.Text_I168_2272_162_1943}>Name here</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2273}>
            <View style={styles.View_I168_2273_168_2212}>
              <View style={styles.View_I168_2273_168_2213}>
                <Text style={styles.Text_I168_2273_168_2213}>
                  Country or region
                </Text>
              </View>
              <View style={styles.View_I168_2273_168_2214}>
                <View style={styles.View_I168_2273_168_2215}>
                  <View style={styles.View_I168_2273_168_2217}>
                    <Text style={styles.Text_I168_2273_168_2217}>
                      Bangladesh
                    </Text>
                  </View>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb2ae8e2-7403-4a4e-9bb4-75500251c10b"
                  }}
                  style={styles.ImageBackground_I168_2273_168_2218}
                />
              </View>
            </View>
            <View style={styles.View_I168_2273_168_2161}>
              <View style={styles.View_I168_2273_168_2243}>
                <View style={styles.View_I168_2273_168_2244}>
                  <View style={styles.View_I168_2273_168_2246}>
                    <Text style={styles.Text_I168_2273_168_2246}>
                      United States
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I168_2273_168_2247}>
                  <View style={styles.View_I168_2273_168_2247_33_161}>
                    <View style={styles.View_I168_2273_168_2247_33_162} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8d49b13-c922-44d3-b598-fba2a5de0264"
                      }}
                      style={styles.ImageBackground_I168_2273_168_2247_33_163}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I168_2273_168_2236}>
                <View style={styles.View_I168_2273_168_2237}>
                  <View style={styles.View_I168_2273_168_2239}>
                    <Text style={styles.Text_I168_2273_168_2239}>
                      United Kingdom
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I168_2273_168_2240}>
                  <View style={styles.View_I168_2273_168_2240_33_161}>
                    <View style={styles.View_I168_2273_168_2240_33_162} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5311d10e-cd99-4bcc-8242-af5886f0623b"
                      }}
                      style={styles.ImageBackground_I168_2273_168_2240_33_163}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.View_I168_2273_168_2258}>
                <View style={styles.View_I168_2273_168_2259}>
                  <View style={styles.View_I168_2273_168_2261}>
                    <Text style={styles.Text_I168_2273_168_2261}>
                      United Arab Amirats
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I168_2273_168_2262}>
                  <View style={styles.View_I168_2273_168_2262_33_161}>
                    <View style={styles.View_I168_2273_168_2262_33_162} />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3b77741-0932-4f39-ab3f-2169d221ab02"
                      }}
                      style={styles.ImageBackground_I168_2273_168_2262_33_163}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2274}>
            <View style={styles.View_I168_2274_162_1941}>
              <Text style={styles.Text_I168_2274_162_1941}>State / City</Text>
            </View>
            <View style={styles.View_I168_2274_162_1942}>
              <View style={styles.View_I168_2274_162_1943}>
                <Text style={styles.Text_I168_2274_162_1943}>City name</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2275}>
            <View style={styles.View_I168_2275_162_1941}>
              <Text style={styles.Text_I168_2275_162_1941}>Street adress</Text>
            </View>
            <View style={styles.View_I168_2275_162_1942}>
              <View style={styles.View_I168_2275_162_1943}>
                <Text style={styles.Text_I168_2275_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2276}>
            <View style={styles.View_I168_2276_162_1941}>
              <Text style={styles.Text_I168_2276_162_1941}>Aditional info</Text>
            </View>
            <View style={styles.View_I168_2276_162_1942}>
              <View style={styles.View_I168_2276_162_1943}>
                <Text style={styles.Text_I168_2276_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2277}>
            <View style={styles.View_I168_2277_162_1941}>
              <Text style={styles.Text_I168_2277_162_1941}>Zip code</Text>
            </View>
            <View style={styles.View_I168_2277_162_1942}>
              <View style={styles.View_I168_2277_162_1943}>
                <Text style={styles.Text_I168_2277_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2278}>
            <View style={styles.View_I168_2278_162_1941}>
              <Text style={styles.Text_I168_2278_162_1941}>Zip code</Text>
            </View>
            <View style={styles.View_I168_2278_162_1942}>
              <View style={styles.View_I168_2278_162_1943}>
                <Text style={styles.Text_I168_2278_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2279}>
            <View style={styles.View_I168_2279_162_1941}>
              <Text style={styles.Text_I168_2279_162_1941}>Phone number</Text>
            </View>
            <View style={styles.View_I168_2279_162_1942}>
              <View style={styles.View_I168_2279_162_1943}>
                <Text style={styles.Text_I168_2279_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
            <View style={styles.View_I168_2279_162_1945}>
              <Text style={styles.Text_I168_2279_162_1945}>
                Enter vallid phone number
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_168_2281}>
        <View style={styles.View_I168_2281_80_938} />
      </View>
      <View style={styles.View_168_2282}>
        <View style={styles.View_168_2283}>
          <View style={styles.View_I168_2283_33_111} />
          <View style={styles.View_I168_2283_33_112}>
            <View style={styles.View_I168_2283_33_112_25_824} />
            <View style={styles.View_I168_2283_33_112_25_825}>
              <View style={styles.View_I168_2283_33_112_25_826} />
              <View style={styles.View_I168_2283_33_112_25_827}>
                <View style={styles.View_I168_2283_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5f45925-2fc0-40d4-8771-b5ee5a12334a"
                  }}
                  style={styles.ImageBackground_I168_2283_33_112_25_829}
                />
                <View style={styles.View_I168_2283_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c33e56f-0487-48a5-b680-0df38f6a909d"
                }}
                style={styles.ImageBackground_I168_2283_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9e539df-e1cd-4f79-8ff9-d29d9a238b7c"
                }}
                style={styles.ImageBackground_I168_2283_33_112_25_835}
              />
              <View style={styles.View_I168_2283_33_112_25_840}>
                <View style={styles.View_I168_2283_33_112_25_841}>
                  <Text style={styles.Text_I168_2283_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I168_2283_33_114}>
            <Text style={styles.Text_I168_2283_33_114}>Change adress</Text>
          </View>
          <View style={styles.View_I168_2283_33_165}>
            <View style={styles.View_I168_2283_33_165_33_148}>
              <View style={styles.View_I168_2283_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad6a4c70-deb5-4be6-9b49-77523e389a1f"
                }}
                style={styles.ImageBackground_I168_2283_33_165_33_150}
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
  View_2: { height: hp("173%") },
  View_168_2280: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("159%"),
    backgroundColor: "rgba(224, 70, 78, 1)",
    overflow: "hidden"
  },
  View_I168_2280_23_14: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2280_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5300: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_168_2270: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("139%"),
    minHeight: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_2271: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2271_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2271_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2271_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2271_162_1943: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2271_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2272: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2272_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2272_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2272_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2272_162_1943: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2272_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2273: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2273_168_2212: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2273_168_2213: {
    flexGrow: 1,
    width: wp("91%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2273_168_2213: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2273_168_2214: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(250, 251, 255, 1)",
    overflow: "hidden"
  },
  View_I168_2273_168_2215: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I168_2273_168_2217: {
    flexGrow: 1,
    width: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I168_2273_168_2217: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I168_2273_168_2218: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_I168_2273_168_2161: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I168_2273_168_2243: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I168_2273_168_2244: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I168_2273_168_2246: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I168_2273_168_2246: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2273_168_2247: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2273_168_2247_33_161: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I168_2273_168_2247_33_162: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I168_2273_168_2247_33_163: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I168_2273_168_2236: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2273_168_2237: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I168_2273_168_2239: {
    flexGrow: 1,
    width: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I168_2273_168_2239: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2273_168_2240: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2273_168_2240_33_161: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I168_2273_168_2240_33_162: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I168_2273_168_2240_33_163: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_I168_2273_168_2258: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I168_2273_168_2259: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I168_2273_168_2261: {
    flexGrow: 1,
    width: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I168_2273_168_2261: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2273_168_2262: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2273_168_2262_33_161: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I168_2273_168_2262_33_162: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I168_2273_168_2262_33_163: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_168_2274: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2274_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2274_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2274_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2274_162_1943: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2274_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2275: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2275_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2275_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2275_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2275_162_1943: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2275_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2276: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("85%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2276_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2276_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2276_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2276_162_1943: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2276_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2277: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2277_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2277_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2277_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2277_162_1943: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2277_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2278: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2278_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2278_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2278_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2278_162_1943: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2278_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2279: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("125%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2279_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2279_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2279_162_1942: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I168_2279_162_1943: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2279_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2279_162_1945: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I168_2279_162_1945: {
    color: "rgba(183, 125, 2, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2281: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("168%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2281_80_938: {
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
  View_168_2282: {
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
  View_168_2283: {
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
  View_I168_2283_33_111: {
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
  View_I168_2283_33_112: {
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
  View_I168_2283_33_112_25_824: {
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
  View_I168_2283_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I168_2283_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2283_33_112_25_827: {
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
  View_I168_2283_33_112_25_828: {
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
  ImageBackground_I168_2283_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I168_2283_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I168_2283_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I168_2283_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I168_2283_33_112_25_840: {
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
  View_I168_2283_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I168_2283_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I168_2283_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I168_2283_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2283_33_165: {
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
  View_I168_2283_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I168_2283_33_165_33_149: {
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
  ImageBackground_I168_2283_33_165_33_150: {
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
