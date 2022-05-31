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
      <View style={styles.View_168_2437}>
        <View style={styles.View_I168_2437_23_14}>
          <Text style={styles.Text_I168_2437_23_14}>Save</Text>
        </View>
      </View>
      <View style={styles.View_268_5301}>
        <View style={styles.View_168_2427}>
          <View style={styles.View_168_2428}>
            <View style={styles.View_I168_2428_162_2090}>
              <Text style={styles.Text_I168_2428_162_2090}>First name</Text>
            </View>
            <View style={styles.View_I168_2428_162_2091}>
              <View style={styles.View_I168_2428_162_2092}>
                <Text style={styles.Text_I168_2428_162_2092}>Sayef</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2429}>
            <View style={styles.View_I168_2429_162_2090}>
              <Text style={styles.Text_I168_2429_162_2090}>Last name</Text>
            </View>
            <View style={styles.View_I168_2429_162_2091}>
              <View style={styles.View_I168_2429_162_2092}>
                <Text style={styles.Text_I168_2429_162_2092}>Mahmud</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2430}>
            <View style={styles.View_I168_2430_165_2186}>
              <Text style={styles.Text_I168_2430_165_2186}>
                Country or region
              </Text>
            </View>
            <View style={styles.View_I168_2430_165_2187}>
              <View style={styles.View_I168_2430_165_2188}>
                <View style={styles.View_I168_2430_165_2190}>
                  <Text style={styles.Text_I168_2430_165_2190}>
                    United Kingdom
                  </Text>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c438770-a534-43ee-9273-fc7553b58f7c"
                }}
                style={styles.ImageBackground_I168_2430_165_2191}
              />
            </View>
          </View>
          <View style={styles.View_168_2431}>
            <View style={styles.View_I168_2431_162_2035}>
              <Text style={styles.Text_I168_2431_162_2035}>State / City</Text>
            </View>
            <View style={styles.View_I168_2431_162_2036}>
              <View style={styles.View_I168_2431_162_2037}>
                <View style={styles.View_I168_2431_162_2038}>
                  <Text style={styles.Text_I168_2431_162_2038}>Input here</Text>
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01beae4f-560a-471e-a804-aa8f30bb9a99"
                  }}
                  style={styles.ImageBackground_I168_2431_162_2039}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_168_2432}>
            <View style={styles.View_I168_2432_162_1941}>
              <Text style={styles.Text_I168_2432_162_1941}>Street adress</Text>
            </View>
            <View style={styles.View_I168_2432_162_1942}>
              <View style={styles.View_I168_2432_162_1943}>
                <Text style={styles.Text_I168_2432_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2433}>
            <View style={styles.View_I168_2433_162_1941}>
              <Text style={styles.Text_I168_2433_162_1941}>Aditional info</Text>
            </View>
            <View style={styles.View_I168_2433_162_1942}>
              <View style={styles.View_I168_2433_162_1943}>
                <Text style={styles.Text_I168_2433_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2434}>
            <View style={styles.View_I168_2434_162_1941}>
              <Text style={styles.Text_I168_2434_162_1941}>Zip code</Text>
            </View>
            <View style={styles.View_I168_2434_162_1942}>
              <View style={styles.View_I168_2434_162_1943}>
                <Text style={styles.Text_I168_2434_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2435}>
            <View style={styles.View_I168_2435_162_1941}>
              <Text style={styles.Text_I168_2435_162_1941}>Zip code</Text>
            </View>
            <View style={styles.View_I168_2435_162_1942}>
              <View style={styles.View_I168_2435_162_1943}>
                <Text style={styles.Text_I168_2435_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_168_2436}>
            <View style={styles.View_I168_2436_162_1941}>
              <Text style={styles.Text_I168_2436_162_1941}>Phone number</Text>
            </View>
            <View style={styles.View_I168_2436_162_1942}>
              <View style={styles.View_I168_2436_162_1943}>
                <Text style={styles.Text_I168_2436_162_1943}>
                  Street adress
                </Text>
              </View>
            </View>
            <View style={styles.View_I168_2436_162_1945}>
              <Text style={styles.Text_I168_2436_162_1945}>
                Enter vallid phone number
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5302}>
        <View style={styles.View_168_2776}>
          <View style={styles.View_I168_2776_25_844} />
          <View style={styles.View_I168_2776_25_845}>
            <View style={styles.View_I168_2776_25_846} />
          </View>
          <View style={styles.View_I168_2776_25_847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/226bc2a4-14af-496b-909e-d9f354934831"
              }}
              style={styles.ImageBackground_I168_2776_25_848}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b174de1-4c60-47da-b8ce-5880aa27860b"
              }}
              style={styles.ImageBackground_I168_2776_25_854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fee176e0-3ba7-46b6-911c-3036676b98fb"
              }}
              style={styles.ImageBackground_I168_2776_25_855}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fa0d515-8187-4158-8e85-484575fb3dc0"
            }}
            style={styles.ImageBackground_I168_2776_25_856}
          />
          <View style={styles.View_I168_2776_25_863}>
            <View style={styles.View_I168_2776_25_864}>
              <View style={styles.View_I168_2776_25_865}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d2ddd16-3914-4cde-9cf1-7f268a782979"
                  }}
                  style={styles.ImageBackground_I168_2776_25_866}
                />
                <View style={styles.View_I168_2776_25_867}>
                  <Text style={styles.Text_I168_2776_25_867}>return</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_868}>
                <View style={styles.View_I168_2776_25_869} />
                <View style={styles.View_I168_2776_25_870}>
                  <Text style={styles.Text_I168_2776_25_870}>space</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_871}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2dcf81f-c9cf-4c8b-8f0c-67bab6981b94"
                  }}
                  style={styles.ImageBackground_I168_2776_25_872}
                />
                <View style={styles.View_I168_2776_25_873}>
                  <Text style={styles.Text_I168_2776_25_873}>123</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I168_2776_25_874}>
              <View style={styles.View_I168_2776_25_875}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d215991-427d-42fe-87c5-6ae66c3bc27d"
                  }}
                  style={styles.ImageBackground_I168_2776_25_876}
                />
                <View style={styles.View_I168_2776_25_877}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ef364bee-af15-4268-9467-c84305ebec1e"
                    }}
                    style={styles.ImageBackground_I168_2776_25_878}
                  />
                </View>
                <View style={styles.View_I168_2776_25_881} />
                <View style={styles.View_I168_2776_25_882} />
              </View>
              <View style={styles.View_I168_2776_25_883}>
                <View style={styles.View_I168_2776_25_884} />
                <View style={styles.View_I168_2776_25_885}>
                  <Text style={styles.Text_I168_2776_25_885}>M</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_886}>
                <View style={styles.View_I168_2776_25_887} />
                <View style={styles.View_I168_2776_25_888}>
                  <Text style={styles.Text_I168_2776_25_888}>N</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_889}>
                <View style={styles.View_I168_2776_25_890} />
                <View style={styles.View_I168_2776_25_891}>
                  <Text style={styles.Text_I168_2776_25_891}>B</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_892}>
                <View style={styles.View_I168_2776_25_893} />
                <View style={styles.View_I168_2776_25_894}>
                  <Text style={styles.Text_I168_2776_25_894}>V</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_895}>
                <View style={styles.View_I168_2776_25_896} />
                <View style={styles.View_I168_2776_25_897}>
                  <Text style={styles.Text_I168_2776_25_897}>C</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_898}>
                <View style={styles.View_I168_2776_25_899} />
                <View style={styles.View_I168_2776_25_900}>
                  <Text style={styles.Text_I168_2776_25_900}>X</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_901}>
                <View style={styles.View_I168_2776_25_902} />
                <View style={styles.View_I168_2776_25_903}>
                  <Text style={styles.Text_I168_2776_25_903}>Z</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_904}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/701f651e-b596-47d5-b62b-461cb351dfda"
                  }}
                  style={styles.ImageBackground_I168_2776_25_905}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9c43645-a48c-4cfa-bb00-ed98626d2e5d"
                  }}
                  style={styles.ImageBackground_I168_2776_25_906}
                />
              </View>
            </View>
            <View style={styles.View_I168_2776_25_907}>
              <View style={styles.View_I168_2776_25_908}>
                <View style={styles.View_I168_2776_25_909} />
                <View style={styles.View_I168_2776_25_910}>
                  <Text style={styles.Text_I168_2776_25_910}>L</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_911}>
                <View style={styles.View_I168_2776_25_912} />
                <View style={styles.View_I168_2776_25_913}>
                  <Text style={styles.Text_I168_2776_25_913}>K</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_914}>
                <View style={styles.View_I168_2776_25_915} />
                <View style={styles.View_I168_2776_25_916}>
                  <Text style={styles.Text_I168_2776_25_916}>J</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_917}>
                <View style={styles.View_I168_2776_25_918} />
                <View style={styles.View_I168_2776_25_919}>
                  <Text style={styles.Text_I168_2776_25_919}>H</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_920}>
                <View style={styles.View_I168_2776_25_921} />
                <View style={styles.View_I168_2776_25_922}>
                  <Text style={styles.Text_I168_2776_25_922}>G</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_923}>
                <View style={styles.View_I168_2776_25_924} />
                <View style={styles.View_I168_2776_25_925}>
                  <Text style={styles.Text_I168_2776_25_925}>F</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_926}>
                <View style={styles.View_I168_2776_25_927} />
                <View style={styles.View_I168_2776_25_928}>
                  <Text style={styles.Text_I168_2776_25_928}>D</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_929}>
                <View style={styles.View_I168_2776_25_930} />
                <View style={styles.View_I168_2776_25_931}>
                  <Text style={styles.Text_I168_2776_25_931}>S</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_932}>
                <View style={styles.View_I168_2776_25_933} />
                <View style={styles.View_I168_2776_25_934}>
                  <Text style={styles.Text_I168_2776_25_934}>A</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I168_2776_25_935}>
              <View style={styles.View_I168_2776_25_936}>
                <View style={styles.View_I168_2776_25_937} />
                <View style={styles.View_I168_2776_25_938}>
                  <Text style={styles.Text_I168_2776_25_938}>P</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_939}>
                <View style={styles.View_I168_2776_25_940} />
                <View style={styles.View_I168_2776_25_941}>
                  <Text style={styles.Text_I168_2776_25_941}>O</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_942}>
                <View style={styles.View_I168_2776_25_943} />
                <View style={styles.View_I168_2776_25_944}>
                  <Text style={styles.Text_I168_2776_25_944}>I</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_945}>
                <View style={styles.View_I168_2776_25_946} />
                <View style={styles.View_I168_2776_25_947}>
                  <Text style={styles.Text_I168_2776_25_947}>U</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_948}>
                <View style={styles.View_I168_2776_25_949} />
                <View style={styles.View_I168_2776_25_950}>
                  <Text style={styles.Text_I168_2776_25_950}>Y</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_951}>
                <View style={styles.View_I168_2776_25_952} />
                <View style={styles.View_I168_2776_25_953}>
                  <Text style={styles.Text_I168_2776_25_953}>T</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_954}>
                <View style={styles.View_I168_2776_25_955} />
                <View style={styles.View_I168_2776_25_956}>
                  <Text style={styles.Text_I168_2776_25_956}>R</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_957}>
                <View style={styles.View_I168_2776_25_958} />
                <View style={styles.View_I168_2776_25_959}>
                  <Text style={styles.Text_I168_2776_25_959}>E</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_960}>
                <View style={styles.View_I168_2776_25_961} />
                <View style={styles.View_I168_2776_25_962}>
                  <Text style={styles.Text_I168_2776_25_962}>W</Text>
                </View>
              </View>
              <View style={styles.View_I168_2776_25_963}>
                <View style={styles.View_I168_2776_25_964} />
                <View style={styles.View_I168_2776_25_965}>
                  <Text style={styles.Text_I168_2776_25_965}>Q</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I168_2776_25_966}>
            <View style={styles.View_I168_2776_25_967} />
            <View style={styles.View_I168_2776_25_968} />
            <View style={styles.View_I168_2776_25_969} />
            <View style={styles.View_I168_2776_25_970}>
              <Text style={styles.Text_I168_2776_25_970}>I’m</Text>
            </View>
            <View style={styles.View_I168_2776_25_971}>
              <Text style={styles.Text_I168_2776_25_971}>the</Text>
            </View>
            <View style={styles.View_I168_2776_25_972}>
              <Text style={styles.Text_I168_2776_25_972}>I</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_168_2439}>
        <View style={styles.View_168_2440}>
          <View style={styles.View_I168_2440_33_111} />
          <View style={styles.View_I168_2440_33_112}>
            <View style={styles.View_I168_2440_33_112_25_824} />
            <View style={styles.View_I168_2440_33_112_25_825}>
              <View style={styles.View_I168_2440_33_112_25_826} />
              <View style={styles.View_I168_2440_33_112_25_827}>
                <View style={styles.View_I168_2440_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf3af10f-2f8e-4ebc-ad4e-804666efc2ea"
                  }}
                  style={styles.ImageBackground_I168_2440_33_112_25_829}
                />
                <View style={styles.View_I168_2440_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2c04ed2-470a-4e2c-8bfe-7827dad53198"
                }}
                style={styles.ImageBackground_I168_2440_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d85918fd-0310-4668-aaeb-cdd3d0720171"
                }}
                style={styles.ImageBackground_I168_2440_33_112_25_835}
              />
              <View style={styles.View_I168_2440_33_112_25_840}>
                <View style={styles.View_I168_2440_33_112_25_841}>
                  <Text style={styles.Text_I168_2440_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I168_2440_33_114}>
            <Text style={styles.Text_I168_2440_33_114}>Change adress</Text>
          </View>
          <View style={styles.View_I168_2440_33_165}>
            <View style={styles.View_I168_2440_33_165_33_148}>
              <View style={styles.View_I168_2440_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39230d55-4a0c-4251-8b12-4dcb7076935c"
                }}
                style={styles.ImageBackground_I168_2440_33_165_33_150}
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
  View_2: { height: hp("153%") },
  View_168_2437: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("138%"),
    backgroundColor: "rgba(224, 70, 78, 1)",
    overflow: "hidden"
  },
  View_I168_2437_23_14: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2437_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5301: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_168_2427: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("120%"),
    minHeight: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_168_2428: {
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
  View_I168_2428_162_2090: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2428_162_2090: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2428_162_2091: {
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
  View_I168_2428_162_2092: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2428_162_2092: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2429: {
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
  View_I168_2429_162_2090: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2429_162_2090: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2429_162_2091: {
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
  View_I168_2429_162_2092: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2429_162_2092: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2430: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2430_165_2186: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2430_165_2186: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2430_165_2187: {
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
  View_I168_2430_165_2188: {
    width: wp("29%"),
    minWidth: wp("29%"),
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
  View_I168_2430_165_2190: {
    flexGrow: 1,
    width: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I168_2430_165_2190: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I168_2430_165_2191: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_168_2431: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2431_162_2035: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2431_162_2035: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2431_162_2036: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(250, 251, 255, 1)",
    overflow: "hidden"
  },
  View_I168_2431_162_2037: {
    width: wp("19%"),
    minWidth: wp("19%"),
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
  View_I168_2431_162_2038: {
    flexGrow: 1,
    width: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I168_2431_162_2038: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I168_2431_162_2039: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_168_2432: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2432_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2432_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2432_162_1942: {
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
  View_I168_2432_162_1943: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2432_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2433: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("66%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2433_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2433_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2433_162_1942: {
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
  View_I168_2433_162_1943: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2433_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2434: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("79%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2434_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2434_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2434_162_1942: {
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
  View_I168_2434_162_1943: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2434_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2435: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2435_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2435_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2435_162_1942: {
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
  View_I168_2435_162_1943: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2435_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_168_2436: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("105%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2436_162_1941: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I168_2436_162_1941: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2436_162_1942: {
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
  View_I168_2436_162_1943: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I168_2436_162_1943: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2436_162_1945: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I168_2436_162_1945: {
    color: "rgba(183, 125, 2, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5302: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("107%")
  },
  View_168_2776: {
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
  View_I168_2776_25_844: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(210, 213, 219, 1)",
    opacity: 0.8999999761581421,
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_I168_2776_25_845: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I168_2776_25_846: {
    width: wp("36%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I168_2776_25_847: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("39%")
  },
  ImageBackground_I168_2776_25_848: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I168_2776_25_854: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I168_2776_25_855: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I168_2776_25_856: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%")
  },
  View_I168_2776_25_863: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%")
  },
  View_I168_2776_25_864: {
    width: wp("99%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_865: {
    width: wp("24%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I168_2776_25_866: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_867: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_867: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I168_2776_25_868: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I168_2776_25_869: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_870: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_870: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I168_2776_25_871: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I168_2776_25_872: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_873: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_873: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I168_2776_25_874: {
    width: wp("98%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_875: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_I168_2776_25_876: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_877: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_I168_2776_25_878: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_881: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(1, 15, 7, 1)"
  },
  View_I168_2776_25_882: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(1, 15, 7, 1)"
  },
  View_I168_2776_25_883: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  View_I168_2776_25_884: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_885: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_885: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_886: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_I168_2776_25_887: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_888: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_888: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_889: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_I168_2776_25_890: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_891: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_891: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_892: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_I168_2776_25_893: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_894: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_894: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_895: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_I168_2776_25_896: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_897: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_897: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_898: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I168_2776_25_899: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_900: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_900: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_901: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I168_2776_25_902: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_903: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_903: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_904: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I168_2776_25_905: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I168_2776_25_906: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I168_2776_25_907: {
    width: wp("89%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I168_2776_25_908: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_I168_2776_25_909: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_910: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_910: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_911: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_I168_2776_25_912: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_913: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_913: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_914: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_I168_2776_25_915: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_916: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_916: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_917: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_I168_2776_25_918: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_919: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_919: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_920: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_I168_2776_25_921: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_922: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_922: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_923: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I168_2776_25_924: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_925: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_925: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_926: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I168_2776_25_927: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_928: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_928: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_929: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I168_2776_25_930: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_931: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_931: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_932: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_933: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_934: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_934: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_935: {
    width: wp("98%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_936: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_I168_2776_25_937: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_938: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_938: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_939: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_I168_2776_25_940: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_941: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_941: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_942: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_I168_2776_25_943: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_944: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_944: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_945: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_I168_2776_25_946: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_947: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_947: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_948: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_I168_2776_25_949: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_950: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_950: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_951: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_I168_2776_25_952: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_953: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_953: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_954: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I168_2776_25_955: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_956: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_956: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_957: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I168_2776_25_958: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_959: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_959: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_960: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I168_2776_25_961: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_962: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_962: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_963: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2776_25_964: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I168_2776_25_965: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_965: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2776_25_966: {
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
  View_I168_2776_25_967: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(187, 194, 202, 1)"
  },
  View_I168_2776_25_968: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 214, 218, 1)"
  },
  View_I168_2776_25_969: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 214, 218, 1)"
  },
  View_I168_2776_25_970: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_I168_2776_25_971: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_971: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_I168_2776_25_972: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I168_2776_25_972: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_168_2439: {
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
  View_168_2440: {
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
  View_I168_2440_33_111: {
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
  View_I168_2440_33_112: {
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
  View_I168_2440_33_112_25_824: {
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
  View_I168_2440_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I168_2440_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I168_2440_33_112_25_827: {
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
  View_I168_2440_33_112_25_828: {
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
  ImageBackground_I168_2440_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I168_2440_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I168_2440_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I168_2440_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I168_2440_33_112_25_840: {
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
  View_I168_2440_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I168_2440_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I168_2440_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I168_2440_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I168_2440_33_165: {
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
  View_I168_2440_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I168_2440_33_165_33_149: {
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
  ImageBackground_I168_2440_33_165_33_150: {
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
