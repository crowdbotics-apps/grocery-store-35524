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
      <View style={styles.View_257_4418}>
        <View style={styles.View_I257_4418_80_938} />
      </View>
      <View style={styles.View_257_4419}>
        <View style={styles.View_I257_4419_23_14}>
          <Text style={styles.Text_I257_4419_23_14}>Sign in</Text>
        </View>
      </View>
      <View style={styles.View_267_4695}>
        <View style={styles.View_257_4592}>
          <View style={styles.View_I257_4592_25_844} />
          <View style={styles.View_I257_4592_25_845}>
            <View style={styles.View_I257_4592_25_846} />
          </View>
          <View style={styles.View_I257_4592_25_847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20b6d0d7-85d6-4c83-a78a-5cd287c317e3"
              }}
              style={styles.ImageBackground_I257_4592_25_848}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f77d17e1-80f2-41c7-8602-07d13bc0d49c"
              }}
              style={styles.ImageBackground_I257_4592_25_854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/210bbf2b-a82c-4442-8083-39f871b99ba9"
              }}
              style={styles.ImageBackground_I257_4592_25_855}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/125e9606-e095-407d-9849-38f41c6214d6"
            }}
            style={styles.ImageBackground_I257_4592_25_856}
          />
          <View style={styles.View_I257_4592_25_863}>
            <View style={styles.View_I257_4592_25_864}>
              <View style={styles.View_I257_4592_25_865}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a179b57-669a-49a5-8399-d7bfc1ecbcf5"
                  }}
                  style={styles.ImageBackground_I257_4592_25_866}
                />
                <View style={styles.View_I257_4592_25_867}>
                  <Text style={styles.Text_I257_4592_25_867}>return</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_868}>
                <View style={styles.View_I257_4592_25_869} />
                <View style={styles.View_I257_4592_25_870}>
                  <Text style={styles.Text_I257_4592_25_870}>space</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_871}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/993a7d72-d60e-4fe4-8522-fa810ca09ad3"
                  }}
                  style={styles.ImageBackground_I257_4592_25_872}
                />
                <View style={styles.View_I257_4592_25_873}>
                  <Text style={styles.Text_I257_4592_25_873}>123</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I257_4592_25_874}>
              <View style={styles.View_I257_4592_25_875}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b555fd4d-16c0-4c5c-a235-e8e1d6e8c79f"
                  }}
                  style={styles.ImageBackground_I257_4592_25_876}
                />
                <View style={styles.View_I257_4592_25_877}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a5cd7b5-1f85-4b27-9dac-41da85662cd0"
                    }}
                    style={styles.ImageBackground_I257_4592_25_878}
                  />
                </View>
                <View style={styles.View_I257_4592_25_881} />
                <View style={styles.View_I257_4592_25_882} />
              </View>
              <View style={styles.View_I257_4592_25_883}>
                <View style={styles.View_I257_4592_25_884} />
                <View style={styles.View_I257_4592_25_885}>
                  <Text style={styles.Text_I257_4592_25_885}>M</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_886}>
                <View style={styles.View_I257_4592_25_887} />
                <View style={styles.View_I257_4592_25_888}>
                  <Text style={styles.Text_I257_4592_25_888}>N</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_889}>
                <View style={styles.View_I257_4592_25_890} />
                <View style={styles.View_I257_4592_25_891}>
                  <Text style={styles.Text_I257_4592_25_891}>B</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_892}>
                <View style={styles.View_I257_4592_25_893} />
                <View style={styles.View_I257_4592_25_894}>
                  <Text style={styles.Text_I257_4592_25_894}>V</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_895}>
                <View style={styles.View_I257_4592_25_896} />
                <View style={styles.View_I257_4592_25_897}>
                  <Text style={styles.Text_I257_4592_25_897}>C</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_898}>
                <View style={styles.View_I257_4592_25_899} />
                <View style={styles.View_I257_4592_25_900}>
                  <Text style={styles.Text_I257_4592_25_900}>X</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_901}>
                <View style={styles.View_I257_4592_25_902} />
                <View style={styles.View_I257_4592_25_903}>
                  <Text style={styles.Text_I257_4592_25_903}>Z</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_904}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/648b9603-b592-468e-ace1-d2c7ae31367c"
                  }}
                  style={styles.ImageBackground_I257_4592_25_905}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e52532a3-5758-4e7b-b79f-38ecedbd38ca"
                  }}
                  style={styles.ImageBackground_I257_4592_25_906}
                />
              </View>
            </View>
            <View style={styles.View_I257_4592_25_907}>
              <View style={styles.View_I257_4592_25_908}>
                <View style={styles.View_I257_4592_25_909} />
                <View style={styles.View_I257_4592_25_910}>
                  <Text style={styles.Text_I257_4592_25_910}>L</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_911}>
                <View style={styles.View_I257_4592_25_912} />
                <View style={styles.View_I257_4592_25_913}>
                  <Text style={styles.Text_I257_4592_25_913}>K</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_914}>
                <View style={styles.View_I257_4592_25_915} />
                <View style={styles.View_I257_4592_25_916}>
                  <Text style={styles.Text_I257_4592_25_916}>J</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_917}>
                <View style={styles.View_I257_4592_25_918} />
                <View style={styles.View_I257_4592_25_919}>
                  <Text style={styles.Text_I257_4592_25_919}>H</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_920}>
                <View style={styles.View_I257_4592_25_921} />
                <View style={styles.View_I257_4592_25_922}>
                  <Text style={styles.Text_I257_4592_25_922}>G</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_923}>
                <View style={styles.View_I257_4592_25_924} />
                <View style={styles.View_I257_4592_25_925}>
                  <Text style={styles.Text_I257_4592_25_925}>F</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_926}>
                <View style={styles.View_I257_4592_25_927} />
                <View style={styles.View_I257_4592_25_928}>
                  <Text style={styles.Text_I257_4592_25_928}>D</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_929}>
                <View style={styles.View_I257_4592_25_930} />
                <View style={styles.View_I257_4592_25_931}>
                  <Text style={styles.Text_I257_4592_25_931}>S</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_932}>
                <View style={styles.View_I257_4592_25_933} />
                <View style={styles.View_I257_4592_25_934}>
                  <Text style={styles.Text_I257_4592_25_934}>A</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I257_4592_25_935}>
              <View style={styles.View_I257_4592_25_936}>
                <View style={styles.View_I257_4592_25_937} />
                <View style={styles.View_I257_4592_25_938}>
                  <Text style={styles.Text_I257_4592_25_938}>P</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_939}>
                <View style={styles.View_I257_4592_25_940} />
                <View style={styles.View_I257_4592_25_941}>
                  <Text style={styles.Text_I257_4592_25_941}>O</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_942}>
                <View style={styles.View_I257_4592_25_943} />
                <View style={styles.View_I257_4592_25_944}>
                  <Text style={styles.Text_I257_4592_25_944}>I</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_945}>
                <View style={styles.View_I257_4592_25_946} />
                <View style={styles.View_I257_4592_25_947}>
                  <Text style={styles.Text_I257_4592_25_947}>U</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_948}>
                <View style={styles.View_I257_4592_25_949} />
                <View style={styles.View_I257_4592_25_950}>
                  <Text style={styles.Text_I257_4592_25_950}>Y</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_951}>
                <View style={styles.View_I257_4592_25_952} />
                <View style={styles.View_I257_4592_25_953}>
                  <Text style={styles.Text_I257_4592_25_953}>T</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_954}>
                <View style={styles.View_I257_4592_25_955} />
                <View style={styles.View_I257_4592_25_956}>
                  <Text style={styles.Text_I257_4592_25_956}>R</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_957}>
                <View style={styles.View_I257_4592_25_958} />
                <View style={styles.View_I257_4592_25_959}>
                  <Text style={styles.Text_I257_4592_25_959}>E</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_960}>
                <View style={styles.View_I257_4592_25_961} />
                <View style={styles.View_I257_4592_25_962}>
                  <Text style={styles.Text_I257_4592_25_962}>W</Text>
                </View>
              </View>
              <View style={styles.View_I257_4592_25_963}>
                <View style={styles.View_I257_4592_25_964} />
                <View style={styles.View_I257_4592_25_965}>
                  <Text style={styles.Text_I257_4592_25_965}>Q</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I257_4592_25_966}>
            <View style={styles.View_I257_4592_25_967} />
            <View style={styles.View_I257_4592_25_968} />
            <View style={styles.View_I257_4592_25_969} />
            <View style={styles.View_I257_4592_25_970}>
              <Text style={styles.Text_I257_4592_25_970}>I’m</Text>
            </View>
            <View style={styles.View_I257_4592_25_971}>
              <Text style={styles.Text_I257_4592_25_971}>the</Text>
            </View>
            <View style={styles.View_I257_4592_25_972}>
              <Text style={styles.Text_I257_4592_25_972}>I</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_257_4722}>
        <View style={styles.View_257_4723}>
          <Text style={styles.Text_257_4723}>Didn’t get the code?</Text>
        </View>
        <View style={styles.View_257_4724}>
          <Text style={styles.Text_257_4724}>Send again</Text>
        </View>
      </View>
      <View style={styles.View_267_4694}>
        <View style={styles.View_257_4575}>
          <View style={styles.View_I257_4575_257_4530}>
            <Text style={styles.Text_I257_4575_257_4530}>Enter the pin</Text>
          </View>
          <View style={styles.View_I257_4575_257_4531}>
            <View style={styles.View_I257_4575_257_4532}>
              <View style={styles.View_I257_4575_257_4552}>
                <Text style={styles.Text_I257_4575_257_4552}>5</Text>
              </View>
            </View>
            <View style={styles.View_I257_4575_257_4534}>
              <View style={styles.View_I257_4575_257_4535}>
                <Text style={styles.Text_I257_4575_257_4535}>6</Text>
              </View>
            </View>
            <View style={styles.View_I257_4575_257_4536}>
              <View style={styles.View_I257_4575_257_4537}>
                <Text style={styles.Text_I257_4575_257_4537}>8</Text>
              </View>
            </View>
            <View style={styles.View_I257_4575_257_4538}>
              <View style={styles.View_I257_4575_257_4539}>
                <Text style={styles.Text_I257_4575_257_4539}>9</Text>
              </View>
            </View>
            <View style={styles.View_I257_4575_257_4540}>
              <View style={styles.View_I257_4575_257_4541}>
                <Text style={styles.Text_I257_4575_257_4541}>8</Text>
              </View>
            </View>
            <View style={styles.View_I257_4575_257_4542}>
              <View style={styles.View_I257_4575_257_4543}>
                <Text style={styles.Text_I257_4575_257_4543}>7</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_257_4425}>
        <View style={styles.View_257_4426}>
          <Text style={styles.Text_257_4426}>Enter the code</Text>
        </View>
        <View style={styles.View_257_4427}>
          <Text style={styles.Text_257_4427}>
            We’ve sent you an email to confirmation that it is you. Enter the
            code from mail
          </Text>
        </View>
      </View>
      <View style={styles.View_257_4428}>
        <View style={styles.View_257_4429}>
          <View style={styles.View_I257_4429_33_111} />
          <View style={styles.View_I257_4429_33_112}>
            <View style={styles.View_I257_4429_33_112_25_824} />
            <View style={styles.View_I257_4429_33_112_25_825}>
              <View style={styles.View_I257_4429_33_112_25_826} />
              <View style={styles.View_I257_4429_33_112_25_827}>
                <View style={styles.View_I257_4429_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e83b5b7-3bac-4f3f-8fde-6820f40fc4c3"
                  }}
                  style={styles.ImageBackground_I257_4429_33_112_25_829}
                />
                <View style={styles.View_I257_4429_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c24bce38-dd99-4b3e-8362-12d68727cb33"
                }}
                style={styles.ImageBackground_I257_4429_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b72fe92e-bb91-4414-a785-dc68c3f7292a"
                }}
                style={styles.ImageBackground_I257_4429_33_112_25_835}
              />
              <View style={styles.View_I257_4429_33_112_25_840}>
                <View style={styles.View_I257_4429_33_112_25_841}>
                  <Text style={styles.Text_I257_4429_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I257_4429_33_114}>
            <Text style={styles.Text_I257_4429_33_114}>Verify</Text>
          </View>
          <View style={styles.View_I257_4429_33_165}>
            <View style={styles.View_I257_4429_33_165_33_148}>
              <View style={styles.View_I257_4429_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9b1bd55-2929-48a0-8761-52ee1dc62214"
                }}
                style={styles.ImageBackground_I257_4429_33_165_33_150}
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
  View_257_4418: {
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
  View_I257_4418_80_938: {
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
  View_257_4419: {
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
  View_I257_4419_23_14: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I257_4419_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_267_4695: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  View_257_4592: {
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
  View_I257_4592_25_844: {
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
  View_I257_4592_25_845: {
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
  View_I257_4592_25_846: {
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
  View_I257_4592_25_847: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("39%")
  },
  ImageBackground_I257_4592_25_848: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I257_4592_25_854: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I257_4592_25_855: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I257_4592_25_856: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%")
  },
  View_I257_4592_25_863: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%")
  },
  View_I257_4592_25_864: {
    width: wp("99%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_865: {
    width: wp("24%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I257_4592_25_866: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_867: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_867: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I257_4592_25_868: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I257_4592_25_869: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_870: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_870: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I257_4592_25_871: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I257_4592_25_872: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_873: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_873: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I257_4592_25_874: {
    width: wp("98%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_875: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_I257_4592_25_876: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_877: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_I257_4592_25_878: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_881: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(1, 15, 7, 1)"
  },
  View_I257_4592_25_882: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(1, 15, 7, 1)"
  },
  View_I257_4592_25_883: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  View_I257_4592_25_884: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_885: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_885: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_886: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_I257_4592_25_887: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_888: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_888: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_889: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_I257_4592_25_890: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_891: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_891: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_892: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_I257_4592_25_893: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_894: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_894: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_895: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_I257_4592_25_896: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_897: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_897: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_898: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I257_4592_25_899: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_900: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_900: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_901: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I257_4592_25_902: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_903: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_903: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_904: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I257_4592_25_905: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I257_4592_25_906: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I257_4592_25_907: {
    width: wp("89%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I257_4592_25_908: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_I257_4592_25_909: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_910: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_910: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_911: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_I257_4592_25_912: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_913: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_913: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_914: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_I257_4592_25_915: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_916: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_916: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_917: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_I257_4592_25_918: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_919: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_919: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_920: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_I257_4592_25_921: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_922: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_922: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_923: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I257_4592_25_924: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_925: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_925: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_926: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I257_4592_25_927: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_928: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_928: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_929: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I257_4592_25_930: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_931: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_931: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_932: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_933: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_934: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_934: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_935: {
    width: wp("98%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_936: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_I257_4592_25_937: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_938: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_938: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_939: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_I257_4592_25_940: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_941: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_941: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_942: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_I257_4592_25_943: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_944: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_944: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_945: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_I257_4592_25_946: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_947: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_947: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_948: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_I257_4592_25_949: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_950: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_950: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_951: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_I257_4592_25_952: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_953: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_953: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_954: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I257_4592_25_955: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_956: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_956: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_957: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I257_4592_25_958: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_959: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_959: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_960: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I257_4592_25_961: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_962: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_962: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_963: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4592_25_964: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I257_4592_25_965: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_965: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4592_25_966: {
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
  View_I257_4592_25_967: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(187, 194, 202, 1)"
  },
  View_I257_4592_25_968: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 214, 218, 1)"
  },
  View_I257_4592_25_969: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 214, 218, 1)"
  },
  View_I257_4592_25_970: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_I257_4592_25_971: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_971: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_I257_4592_25_972: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I257_4592_25_972: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_257_4722: {
    width: wp("53%"),
    minWidth: wp("53%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("58%")
  },
  View_257_4723: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_257_4723: {
    color: "rgba(1, 15, 7, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_4724: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_257_4724: {
    color: "rgba(224, 70, 78, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_267_4694: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38%")
  },
  View_257_4575: {
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
  View_I257_4575_257_4530: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I257_4575_257_4530: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4575_257_4531: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I257_4575_257_4532: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_I257_4575_257_4552: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I257_4575_257_4552: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38400033116340637,
    textTransform: "none"
  },
  View_I257_4575_257_4534: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_I257_4575_257_4535: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4575_257_4535: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4575_257_4536: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_I257_4575_257_4537: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4575_257_4537: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4575_257_4538: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_I257_4575_257_4539: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4575_257_4539: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4575_257_4540: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_I257_4575_257_4541: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I257_4575_257_4541: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4575_257_4542: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(250, 251, 255, 1)"
  },
  View_I257_4575_257_4543: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I257_4575_257_4543: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.38400033116340637,
    textTransform: "none"
  },
  View_257_4425: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("16%")
  },
  View_257_4426: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_257_4426: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_4427: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "center"
  },
  Text_257_4427: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_257_4428: {
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
  View_257_4429: {
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
  View_I257_4429_33_111: {
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
  View_I257_4429_33_112: {
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
  View_I257_4429_33_112_25_824: {
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
  View_I257_4429_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I257_4429_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I257_4429_33_112_25_827: {
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
  View_I257_4429_33_112_25_828: {
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
  ImageBackground_I257_4429_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I257_4429_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I257_4429_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I257_4429_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I257_4429_33_112_25_840: {
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
  View_I257_4429_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I257_4429_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I257_4429_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I257_4429_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I257_4429_33_165: {
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
  View_I257_4429_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I257_4429_33_165_33_149: {
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
  ImageBackground_I257_4429_33_165_33_150: {
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
