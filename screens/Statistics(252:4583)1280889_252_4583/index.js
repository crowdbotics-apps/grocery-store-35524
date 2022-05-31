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
      <View style={styles.View_268_5316}>
        <View style={styles.View_254_4417}>
          <View style={styles.View_254_4416}>
            <View style={styles.View_254_4332}>
              <Text style={styles.Text_254_4332}>
                Previous order this month
              </Text>
            </View>
          </View>
          <View style={styles.View_254_4372}>
            <View style={styles.View_I254_4372_228_3356}>
              <View style={styles.View_I254_4372_228_3355}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4e9c42d-c6a2-43e0-8669-f8b887fd7e82"
                  }}
                  style={styles.ImageBackground_I254_4372_228_3273}
                />
              </View>
              <View style={styles.View_I254_4372_228_3352}>
                <View style={styles.View_I254_4372_228_3275}>
                  <View style={styles.View_I254_4372_228_3276}>
                    <Text style={styles.Text_I254_4372_228_3276}>
                      Girls orange full sleev dress
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I254_4372_228_3285}>
                  <Text style={styles.Text_I254_4372_228_3285}>
                    Slim fit soft material
                  </Text>
                </View>
                <View style={styles.View_I254_4372_228_3277}>
                  <View style={styles.View_I254_4372_228_3278}>
                    <Text style={styles.Text_I254_4372_228_3278}>x1</Text>
                  </View>
                  <View style={styles.View_I254_4372_228_3279}>
                    <Text style={styles.Text_I254_4372_228_3279}>
                      $20.50 ($5 save)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_254_4383}>
            <View style={styles.View_I254_4383_228_3356}>
              <View style={styles.View_I254_4383_228_3355}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d01213a-f236-4e27-862c-df5b31e3a773"
                  }}
                  style={styles.ImageBackground_I254_4383_228_3273}
                />
              </View>
              <View style={styles.View_I254_4383_228_3352}>
                <View style={styles.View_I254_4383_228_3275}>
                  <View style={styles.View_I254_4383_228_3276}>
                    <Text style={styles.Text_I254_4383_228_3276}>
                      Full casual sport dress
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I254_4383_228_3285}>
                  <Text style={styles.Text_I254_4383_228_3285}>
                    Slim fit soft material
                  </Text>
                </View>
                <View style={styles.View_I254_4383_228_3277}>
                  <View style={styles.View_I254_4383_228_3278}>
                    <Text style={styles.Text_I254_4383_228_3278}>x1</Text>
                  </View>
                  <View style={styles.View_I254_4383_228_3279}>
                    <Text style={styles.Text_I254_4383_228_3279}>
                      $20.50 ($5 save)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_254_4394}>
            <View style={styles.View_I254_4394_228_3356}>
              <View style={styles.View_I254_4394_228_3355}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d38f1b2-c8f1-41c6-aed6-48e183b57f8d"
                  }}
                  style={styles.ImageBackground_I254_4394_228_3273}
                />
              </View>
              <View style={styles.View_I254_4394_228_3352}>
                <View style={styles.View_I254_4394_228_3275}>
                  <View style={styles.View_I254_4394_228_3276}>
                    <Text style={styles.Text_I254_4394_228_3276}>
                      Casual summer party dress
                    </Text>
                  </View>
                </View>
                <View style={styles.View_I254_4394_228_3285}>
                  <Text style={styles.Text_I254_4394_228_3285}>
                    Slim fit soft material
                  </Text>
                </View>
                <View style={styles.View_I254_4394_228_3277}>
                  <View style={styles.View_I254_4394_228_3278}>
                    <Text style={styles.Text_I254_4394_228_3278}>x1</Text>
                  </View>
                  <View style={styles.View_I254_4394_228_3279}>
                    <Text style={styles.Text_I254_4394_228_3279}>
                      $20.50 ($5 save)
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5315}>
        <View style={styles.View_257_4383}>
          <View style={styles.View_I257_4383_257_4349}>
            <View style={styles.View_I257_4383_257_4350}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d50957d-4232-4143-8f5e-064cd2860476"
                }}
                style={styles.ImageBackground_I257_4383_257_4351}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71f7efa8-7750-403f-b0f3-8b880a74b027"
                }}
                style={styles.ImageBackground_I257_4383_257_4352}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a36ccdcb-5366-466d-a2b4-1a3770807179"
                }}
                style={styles.ImageBackground_I257_4383_257_4353}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f450614-7e2e-48d7-aa64-68b2c9d84694"
                }}
                style={styles.ImageBackground_I257_4383_257_4354}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11d111a0-707f-4d3f-b943-be5b3937183a"
                }}
                style={styles.ImageBackground_I257_4383_257_4355}
              />
              <View style={styles.View_I257_4383_257_4356}>
                <Text style={styles.Text_I257_4383_257_4356}>53 order</Text>
              </View>
            </View>
            <View style={styles.View_I257_4383_257_4357}>
              <View style={styles.View_I257_4383_257_4358}>
                <View style={styles.View_I257_4383_257_4359} />
                <View style={styles.View_I257_4383_257_4360}>
                  <Text style={styles.Text_I257_4383_257_4360}>Shirts</Text>
                </View>
              </View>
              <View style={styles.View_I257_4383_257_4361}>
                <View style={styles.View_I257_4383_257_4362} />
                <View style={styles.View_I257_4383_257_4363}>
                  <Text style={styles.Text_I257_4383_257_4363}>Pants</Text>
                </View>
              </View>
              <View style={styles.View_I257_4383_257_4364}>
                <View style={styles.View_I257_4383_257_4365} />
                <View style={styles.View_I257_4383_257_4366}>
                  <Text style={styles.Text_I257_4383_257_4366}>Tops</Text>
                </View>
              </View>
              <View style={styles.View_I257_4383_257_4367}>
                <View style={styles.View_I257_4383_257_4368} />
                <View style={styles.View_I257_4383_257_4369}>
                  <Text style={styles.Text_I257_4383_257_4369}>Extras</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I257_4383_257_4370}>
            <View style={styles.View_I257_4383_257_4371}>
              <View style={styles.View_I257_4383_257_4372}>
                <Text style={styles.Text_I257_4383_257_4372}>
                  Total spend of this month
                </Text>
              </View>
            </View>
            <View style={styles.View_I257_4383_257_4373}>
              <View style={styles.View_I257_4383_257_4374}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/695fc156-aafe-4a45-9fa9-04deb7c9bcc2"
                  }}
                  style={styles.ImageBackground_I257_4383_257_4375}
                />
                <View style={styles.View_I257_4383_257_4380}>
                  <Text style={styles.Text_I257_4383_257_4380}>
                    Total spend
                  </Text>
                </View>
                <View style={styles.View_I257_4383_257_4381}>
                  <Text style={styles.Text_I257_4383_257_4381}>$502.88</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_252_4588}>
        <View style={styles.View_I252_4588_80_938} />
      </View>
      <View style={styles.View_252_4593}>
        <View style={styles.View_252_4594}>
          <View style={styles.View_I252_4594_33_111} />
          <View style={styles.View_I252_4594_33_112}>
            <View style={styles.View_I252_4594_33_112_25_824} />
            <View style={styles.View_I252_4594_33_112_25_825}>
              <View style={styles.View_I252_4594_33_112_25_826} />
              <View style={styles.View_I252_4594_33_112_25_827}>
                <View style={styles.View_I252_4594_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c1d6639-eebb-447a-bb69-2e9fd3e297a9"
                  }}
                  style={styles.ImageBackground_I252_4594_33_112_25_829}
                />
                <View style={styles.View_I252_4594_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f9832f0-e4e0-47f7-bd60-dc720cd74b13"
                }}
                style={styles.ImageBackground_I252_4594_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cf04bc3-e070-4b9c-bbd7-9e3b092e1e61"
                }}
                style={styles.ImageBackground_I252_4594_33_112_25_835}
              />
              <View style={styles.View_I252_4594_33_112_25_840}>
                <View style={styles.View_I252_4594_33_112_25_841}>
                  <Text style={styles.Text_I252_4594_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I252_4594_33_114}>
            <Text style={styles.Text_I252_4594_33_114}>Order statistics</Text>
          </View>
          <View style={styles.View_I252_4594_33_165}>
            <View style={styles.View_I252_4594_33_165_33_148}>
              <View style={styles.View_I252_4594_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be4e3745-86fe-4942-bb12-6407339dc60a"
                }}
                style={styles.ImageBackground_I252_4594_33_165_33_150}
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
  View_268_5316: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%")
  },
  View_254_4417: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_254_4416: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_254_4332: {
    width: wp("60%"),
    minWidth: wp("60%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_254_4332: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_254_4372: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I254_4372_228_3356: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4372_228_3355: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I254_4372_228_3273: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I254_4372_228_3352: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4372_228_3275: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4372_228_3276: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4372_228_3276: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4372_228_3285: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I254_4372_228_3285: {
    color: "rgba(96, 98, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4372_228_3277: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4372_228_3278: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4372_228_3278: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4372_228_3279: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4372_228_3279: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_254_4383: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I254_4383_228_3356: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4383_228_3355: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I254_4383_228_3273: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I254_4383_228_3352: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4383_228_3275: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4383_228_3276: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4383_228_3276: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4383_228_3285: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I254_4383_228_3285: {
    color: "rgba(96, 98, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4383_228_3277: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4383_228_3278: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4383_228_3278: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4383_228_3279: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4383_228_3279: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_254_4394: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I254_4394_228_3356: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4394_228_3355: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I254_4394_228_3273: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I254_4394_228_3352: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4394_228_3275: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4394_228_3276: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4394_228_3276: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4394_228_3285: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I254_4394_228_3285: {
    color: "rgba(96, 98, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4394_228_3277: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I254_4394_228_3278: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4394_228_3278: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I254_4394_228_3279: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I254_4394_228_3279: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5315: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_257_4383: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I257_4383_257_4349: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I257_4383_257_4350: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I257_4383_257_4351: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I257_4383_257_4352: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I257_4383_257_4353: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I257_4383_257_4354: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I257_4383_257_4355: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I257_4383_257_4356: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4356: {
    color: "rgba(21, 112, 239, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4383_257_4357: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I257_4383_257_4358: {
    width: wp("15%"),
    minWidth: wp("15%"),
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
  View_I257_4383_257_4359: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(23, 92, 211, 1)",
    overflow: "hidden"
  },
  View_I257_4383_257_4360: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4360: {
    color: "rgba(96, 98, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4383_257_4361: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I257_4383_257_4362: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(204, 18, 45, 1)",
    overflow: "hidden"
  },
  View_I257_4383_257_4363: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4363: {
    color: "rgba(96, 98, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4383_257_4364: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I257_4383_257_4365: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(255, 197, 173, 1)",
    overflow: "hidden"
  },
  View_I257_4383_257_4366: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4366: {
    color: "rgba(96, 98, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4383_257_4367: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I257_4383_257_4368: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(132, 202, 255, 1)",
    overflow: "hidden"
  },
  View_I257_4383_257_4369: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4369: {
    color: "rgba(96, 98, 107, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4383_257_4370: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("31%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I257_4383_257_4371: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I257_4383_257_4372: {
    width: wp("58%"),
    minWidth: wp("58%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4372: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4383_257_4373: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I257_4383_257_4374: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I257_4383_257_4375: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  View_I257_4383_257_4380: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4380: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4383_257_4381: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I257_4383_257_4381: {
    color: "rgba(97, 3, 52, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_252_4588: {
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
  View_I252_4588_80_938: {
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
  View_252_4593: {
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
  View_252_4594: {
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
  View_I252_4594_33_111: {
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
  View_I252_4594_33_112: {
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
  View_I252_4594_33_112_25_824: {
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
  View_I252_4594_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I252_4594_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I252_4594_33_112_25_827: {
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
  View_I252_4594_33_112_25_828: {
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
  ImageBackground_I252_4594_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I252_4594_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I252_4594_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I252_4594_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I252_4594_33_112_25_840: {
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
  View_I252_4594_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I252_4594_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I252_4594_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I252_4594_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I252_4594_33_165: {
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
  View_I252_4594_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I252_4594_33_165_33_149: {
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
  ImageBackground_I252_4594_33_165_33_150: {
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
