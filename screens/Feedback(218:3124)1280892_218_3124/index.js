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
      <View style={styles.View_218_3125}>
        <View style={styles.View_I218_3125_80_938} />
      </View>
      <View style={styles.View_218_3126}>
        <View style={styles.View_I218_3126_23_14}>
          <Text style={styles.Text_I218_3126_23_14}>Write your feedback</Text>
        </View>
      </View>
      <View style={styles.View_268_5111}>
        <View style={styles.View_218_3131}>
          <View style={styles.View_I218_3131_218_2707}>
            <Text style={styles.Text_I218_3131_218_2707}>Your review</Text>
          </View>
          <View style={styles.View_I218_3131_218_2708}>
            <View style={styles.View_I218_3131_218_2709}>
              <Text style={styles.Text_I218_3131_218_2709}>
                Lorem ipsum dolor sit amet, consectetur for adipiscing elit.
                Proin ut semper libero. There Phasellus ut enim volutpat,
                rhoncus magna eget, egestas ex
              </Text>
            </View>
            <View style={styles.View_I218_3131_218_2710}>
              <Text style={styles.Text_I218_3131_218_2710}>0 / 200</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5139}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ee0e8db-4c18-4e1c-9b5a-4119a7fcbf32"
          }}
          style={styles.ImageBackground_268_5136}
        />
        <View style={styles.View_268_5137}>
          <Text style={styles.Text_268_5137}>Add photo</Text>
        </View>
      </View>
      <View style={styles.View_268_5110}>
        <View style={styles.View_218_3222}>
          <View style={styles.View_I218_3222_25_844} />
          <View style={styles.View_I218_3222_25_845}>
            <View style={styles.View_I218_3222_25_846} />
          </View>
          <View style={styles.View_I218_3222_25_847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fecf08a-f664-439a-893c-6c6c64865982"
              }}
              style={styles.ImageBackground_I218_3222_25_848}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fb62a27d-0043-49fc-a916-d44f358eff0a"
              }}
              style={styles.ImageBackground_I218_3222_25_854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44a45674-a38e-4f8b-b42f-a042d77ec8a4"
              }}
              style={styles.ImageBackground_I218_3222_25_855}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7fbd921-cc1a-48d2-a31a-ea618bf05caf"
            }}
            style={styles.ImageBackground_I218_3222_25_856}
          />
          <View style={styles.View_I218_3222_25_863}>
            <View style={styles.View_I218_3222_25_864}>
              <View style={styles.View_I218_3222_25_865}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44cd5e70-e763-4f3e-b713-6bc774733e0c"
                  }}
                  style={styles.ImageBackground_I218_3222_25_866}
                />
                <View style={styles.View_I218_3222_25_867}>
                  <Text style={styles.Text_I218_3222_25_867}>return</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_868}>
                <View style={styles.View_I218_3222_25_869} />
                <View style={styles.View_I218_3222_25_870}>
                  <Text style={styles.Text_I218_3222_25_870}>space</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_871}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86df16f7-5488-4765-90ff-89adb689fadf"
                  }}
                  style={styles.ImageBackground_I218_3222_25_872}
                />
                <View style={styles.View_I218_3222_25_873}>
                  <Text style={styles.Text_I218_3222_25_873}>123</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I218_3222_25_874}>
              <View style={styles.View_I218_3222_25_875}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4213db8b-293e-4ece-a85b-f1f08c0f5c2d"
                  }}
                  style={styles.ImageBackground_I218_3222_25_876}
                />
                <View style={styles.View_I218_3222_25_877}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a326a28f-9700-45db-b88d-23c8eae82b4f"
                    }}
                    style={styles.ImageBackground_I218_3222_25_878}
                  />
                </View>
                <View style={styles.View_I218_3222_25_881} />
                <View style={styles.View_I218_3222_25_882} />
              </View>
              <View style={styles.View_I218_3222_25_883}>
                <View style={styles.View_I218_3222_25_884} />
                <View style={styles.View_I218_3222_25_885}>
                  <Text style={styles.Text_I218_3222_25_885}>M</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_886}>
                <View style={styles.View_I218_3222_25_887} />
                <View style={styles.View_I218_3222_25_888}>
                  <Text style={styles.Text_I218_3222_25_888}>N</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_889}>
                <View style={styles.View_I218_3222_25_890} />
                <View style={styles.View_I218_3222_25_891}>
                  <Text style={styles.Text_I218_3222_25_891}>B</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_892}>
                <View style={styles.View_I218_3222_25_893} />
                <View style={styles.View_I218_3222_25_894}>
                  <Text style={styles.Text_I218_3222_25_894}>V</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_895}>
                <View style={styles.View_I218_3222_25_896} />
                <View style={styles.View_I218_3222_25_897}>
                  <Text style={styles.Text_I218_3222_25_897}>C</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_898}>
                <View style={styles.View_I218_3222_25_899} />
                <View style={styles.View_I218_3222_25_900}>
                  <Text style={styles.Text_I218_3222_25_900}>X</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_901}>
                <View style={styles.View_I218_3222_25_902} />
                <View style={styles.View_I218_3222_25_903}>
                  <Text style={styles.Text_I218_3222_25_903}>Z</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_904}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b256def7-71bd-4aaf-b329-71444bac99b7"
                  }}
                  style={styles.ImageBackground_I218_3222_25_905}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/329405eb-cea6-48e2-9f23-531ea9b2ba9e"
                  }}
                  style={styles.ImageBackground_I218_3222_25_906}
                />
              </View>
            </View>
            <View style={styles.View_I218_3222_25_907}>
              <View style={styles.View_I218_3222_25_908}>
                <View style={styles.View_I218_3222_25_909} />
                <View style={styles.View_I218_3222_25_910}>
                  <Text style={styles.Text_I218_3222_25_910}>L</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_911}>
                <View style={styles.View_I218_3222_25_912} />
                <View style={styles.View_I218_3222_25_913}>
                  <Text style={styles.Text_I218_3222_25_913}>K</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_914}>
                <View style={styles.View_I218_3222_25_915} />
                <View style={styles.View_I218_3222_25_916}>
                  <Text style={styles.Text_I218_3222_25_916}>J</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_917}>
                <View style={styles.View_I218_3222_25_918} />
                <View style={styles.View_I218_3222_25_919}>
                  <Text style={styles.Text_I218_3222_25_919}>H</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_920}>
                <View style={styles.View_I218_3222_25_921} />
                <View style={styles.View_I218_3222_25_922}>
                  <Text style={styles.Text_I218_3222_25_922}>G</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_923}>
                <View style={styles.View_I218_3222_25_924} />
                <View style={styles.View_I218_3222_25_925}>
                  <Text style={styles.Text_I218_3222_25_925}>F</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_926}>
                <View style={styles.View_I218_3222_25_927} />
                <View style={styles.View_I218_3222_25_928}>
                  <Text style={styles.Text_I218_3222_25_928}>D</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_929}>
                <View style={styles.View_I218_3222_25_930} />
                <View style={styles.View_I218_3222_25_931}>
                  <Text style={styles.Text_I218_3222_25_931}>S</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_932}>
                <View style={styles.View_I218_3222_25_933} />
                <View style={styles.View_I218_3222_25_934}>
                  <Text style={styles.Text_I218_3222_25_934}>A</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_I218_3222_25_935}>
              <View style={styles.View_I218_3222_25_936}>
                <View style={styles.View_I218_3222_25_937} />
                <View style={styles.View_I218_3222_25_938}>
                  <Text style={styles.Text_I218_3222_25_938}>P</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_939}>
                <View style={styles.View_I218_3222_25_940} />
                <View style={styles.View_I218_3222_25_941}>
                  <Text style={styles.Text_I218_3222_25_941}>O</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_942}>
                <View style={styles.View_I218_3222_25_943} />
                <View style={styles.View_I218_3222_25_944}>
                  <Text style={styles.Text_I218_3222_25_944}>I</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_945}>
                <View style={styles.View_I218_3222_25_946} />
                <View style={styles.View_I218_3222_25_947}>
                  <Text style={styles.Text_I218_3222_25_947}>U</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_948}>
                <View style={styles.View_I218_3222_25_949} />
                <View style={styles.View_I218_3222_25_950}>
                  <Text style={styles.Text_I218_3222_25_950}>Y</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_951}>
                <View style={styles.View_I218_3222_25_952} />
                <View style={styles.View_I218_3222_25_953}>
                  <Text style={styles.Text_I218_3222_25_953}>T</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_954}>
                <View style={styles.View_I218_3222_25_955} />
                <View style={styles.View_I218_3222_25_956}>
                  <Text style={styles.Text_I218_3222_25_956}>R</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_957}>
                <View style={styles.View_I218_3222_25_958} />
                <View style={styles.View_I218_3222_25_959}>
                  <Text style={styles.Text_I218_3222_25_959}>E</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_960}>
                <View style={styles.View_I218_3222_25_961} />
                <View style={styles.View_I218_3222_25_962}>
                  <Text style={styles.Text_I218_3222_25_962}>W</Text>
                </View>
              </View>
              <View style={styles.View_I218_3222_25_963}>
                <View style={styles.View_I218_3222_25_964} />
                <View style={styles.View_I218_3222_25_965}>
                  <Text style={styles.Text_I218_3222_25_965}>Q</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I218_3222_25_966}>
            <View style={styles.View_I218_3222_25_967} />
            <View style={styles.View_I218_3222_25_968} />
            <View style={styles.View_I218_3222_25_969} />
            <View style={styles.View_I218_3222_25_970}>
              <Text style={styles.Text_I218_3222_25_970}>I’m</Text>
            </View>
            <View style={styles.View_I218_3222_25_971}>
              <Text style={styles.Text_I218_3222_25_971}>the</Text>
            </View>
            <View style={styles.View_I218_3222_25_972}>
              <Text style={styles.Text_I218_3222_25_972}>I</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_5054}>
        <View style={styles.View_268_5055}>
          <Text style={styles.Text_268_5055}>
            Write something about the product
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e27888c3-afc9-4f35-afa7-a66f93e2de74"
          }}
          style={styles.ImageBackground_268_5056}
        />
      </View>
      <View style={styles.View_268_5057}>
        <View style={styles.View_268_5058}>
          <Text style={styles.Text_268_5058}>
            How are you feeling about our service?
          </Text>
        </View>
        <View style={styles.View_268_5059}>
          <View style={styles.View_I268_5059_218_3017}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18fdb800-25b9-48d7-98b0-a130f7f1be0b"
              }}
              style={styles.ImageBackground_I268_5059_218_3018}
            />
          </View>
          <View style={styles.View_I268_5059_218_3030}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cf8ed5e-2429-440a-9fb9-c0456e1cce40"
              }}
              style={styles.ImageBackground_I268_5059_218_3031}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6351cfc-fe3d-4a6d-adab-fe197103416d"
            }}
            style={styles.ImageBackground_I268_5059_218_3051}
          />
          <View style={styles.View_I268_5059_218_3024}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7df5448-eea6-4e01-9b5e-104ef32f7215"
              }}
              style={styles.ImageBackground_I268_5059_218_3025}
            />
          </View>
          <View style={styles.View_I268_5059_218_3038}>
            <View style={styles.View_I268_5059_218_3039}>
              <View style={styles.View_I268_5059_218_3041} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c83592c-389d-4d45-9c1b-e3bb63f77c40"
                }}
                style={styles.ImageBackground_I268_5059_218_3042}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63c83f90-89db-4cb4-a17a-67776e403574"
                }}
                style={styles.ImageBackground_I268_5059_218_3043}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb5a0592-2e86-447f-be86-afd98cdc0aea"
                }}
                style={styles.ImageBackground_I268_5059_218_3044}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77ddd2db-5c0d-4953-9fdd-c78c034333f2"
                }}
                style={styles.ImageBackground_I268_5059_218_3045}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35e7104b-423d-4446-9f85-3aad860cdff3"
                }}
                style={styles.ImageBackground_I268_5059_218_3046}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4de0fa47-7cfd-4b68-848a-c5e2f5486467"
                }}
                style={styles.ImageBackground_I268_5059_218_3047}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6287daed-57b1-455e-8de0-db167da68049"
                }}
                style={styles.ImageBackground_I268_5059_218_3048}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0aae0b6e-bb23-4617-8038-013deadf7d4b"
                }}
                style={styles.ImageBackground_I268_5059_218_3049}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0624175e-f2f9-4058-a3be-3b855f5e0a98"
                }}
                style={styles.ImageBackground_I268_5059_218_3050}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_218_3132}>
        <View style={styles.View_218_3133}>
          <View style={styles.View_I218_3133_33_111} />
          <View style={styles.View_I218_3133_33_112}>
            <View style={styles.View_I218_3133_33_112_25_824} />
            <View style={styles.View_I218_3133_33_112_25_825}>
              <View style={styles.View_I218_3133_33_112_25_826} />
              <View style={styles.View_I218_3133_33_112_25_827}>
                <View style={styles.View_I218_3133_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e034898a-8388-45db-967a-e243539ed8af"
                  }}
                  style={styles.ImageBackground_I218_3133_33_112_25_829}
                />
                <View style={styles.View_I218_3133_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6e5e071-088b-4fb8-b007-5e0e08fafd34"
                }}
                style={styles.ImageBackground_I218_3133_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9495f8ad-8b1f-4f48-9dc4-3eb3bf8c1212"
                }}
                style={styles.ImageBackground_I218_3133_33_112_25_835}
              />
              <View style={styles.View_I218_3133_33_112_25_840}>
                <View style={styles.View_I218_3133_33_112_25_841}>
                  <Text style={styles.Text_I218_3133_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I218_3133_33_114}>
            <Text style={styles.Text_I218_3133_33_114}>Write feedback</Text>
          </View>
          <View style={styles.View_I218_3133_33_165}>
            <View style={styles.View_I218_3133_33_165_33_148}>
              <View style={styles.View_I218_3133_33_165_33_149} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/261347ca-fe55-48f1-9a34-d6128da73c84"
                }}
                style={styles.ImageBackground_I218_3133_33_165_33_150}
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
  View_218_3125: {
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
  View_I218_3125_80_938: {
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
  View_218_3126: {
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
  View_I218_3126_23_14: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I218_3126_23_14: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5111: {
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
  View_218_3131: {
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
  View_I218_3131_218_2707: {
    flexGrow: 1,
    width: wp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-end"
  },
  Text_I218_3131_218_2707: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3131_218_2708: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    backgroundColor: "rgba(250, 251, 255, 1)",
    overflow: "hidden"
  },
  View_I218_3131_218_2709: {
    flexGrow: 1,
    width: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I218_3131_218_2709: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3131_218_2710: {
    width: wp("83%"),
    minWidth: wp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "flex-end"
  },
  Text_I218_3131_218_2710: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5139: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("75%")
  },
  ImageBackground_268_5136: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    resizeMode: "cover"
  },
  View_268_5137: {
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
  Text_268_5137: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.20000000298023224,
    textTransform: "none"
  },
  View_268_5110: {
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
  View_218_3222: {
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
  View_I218_3222_25_844: {
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
  View_I218_3222_25_845: {
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
  View_I218_3222_25_846: {
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
  View_I218_3222_25_847: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("39%")
  },
  ImageBackground_I218_3222_25_848: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I218_3222_25_854: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I218_3222_25_855: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I218_3222_25_856: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("39%")
  },
  View_I218_3222_25_863: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%")
  },
  View_I218_3222_25_864: {
    width: wp("99%"),
    height: hp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_865: {
    width: wp("24%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I218_3222_25_866: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_867: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_867: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I218_3222_25_868: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I218_3222_25_869: {
    width: wp("49%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_870: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_870: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I218_3222_25_871: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I218_3222_25_872: {
    width: wp("23%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_873: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_873: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.3199999928474426,
    textTransform: "none"
  },
  View_I218_3222_25_874: {
    width: wp("98%"),
    height: hp("6%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_875: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%")
  },
  ImageBackground_I218_3222_25_876: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_877: {
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  ImageBackground_I218_3222_25_878: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_881: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(1, 15, 7, 1)"
  },
  View_I218_3222_25_882: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(1, 15, 7, 1)"
  },
  View_I218_3222_25_883: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%")
  },
  View_I218_3222_25_884: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_885: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_885: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_886: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%")
  },
  View_I218_3222_25_887: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_888: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_888: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_889: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_I218_3222_25_890: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_891: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_891: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_892: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  View_I218_3222_25_893: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_894: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_894: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_895: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_I218_3222_25_896: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_897: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_897: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_898: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%")
  },
  View_I218_3222_25_899: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_900: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_900: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_901: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_I218_3222_25_902: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_903: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_903: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_904: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I218_3222_25_905: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I218_3222_25_906: {
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_I218_3222_25_907: {
    width: wp("89%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I218_3222_25_908: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_I218_3222_25_909: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_910: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_910: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_911: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_I218_3222_25_912: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_913: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_913: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_914: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_I218_3222_25_915: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_916: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_916: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_917: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_I218_3222_25_918: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_919: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_919: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_920: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_I218_3222_25_921: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_922: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_922: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_923: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I218_3222_25_924: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_925: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_925: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_926: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I218_3222_25_927: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_928: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_928: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_929: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I218_3222_25_930: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_931: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_931: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_932: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_933: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_934: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_934: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_935: {
    width: wp("98%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_936: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_I218_3222_25_937: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_938: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_938: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_939: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_I218_3222_25_940: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_941: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_941: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_942: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  View_I218_3222_25_943: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_944: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_944: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_945: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%")
  },
  View_I218_3222_25_946: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_947: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_947: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_948: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%")
  },
  View_I218_3222_25_949: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_950: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_950: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_951: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%")
  },
  View_I218_3222_25_952: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_953: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_953: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_954: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_I218_3222_25_955: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_956: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_956: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_957: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  View_I218_3222_25_958: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_959: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_959: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_960: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_I218_3222_25_961: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_962: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_962: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_963: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3222_25_964: {
    width: wp("8%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I218_3222_25_965: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_965: {
    color: "rgba(3, 3, 3, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3222_25_966: {
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
  View_I218_3222_25_967: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(187, 194, 202, 1)"
  },
  View_I218_3222_25_968: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 214, 218, 1)"
  },
  View_I218_3222_25_969: {
    width: wp("0%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    top: hp("0%"),
    backgroundColor: "rgba(209, 214, 218, 1)"
  },
  View_I218_3222_25_970: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_970: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_I218_3222_25_971: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_971: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_I218_3222_25_972: {
    width: wp("28%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I218_3222_25_972: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.44999998807907104,
    textTransform: "none"
  },
  View_268_5054: {
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
  View_268_5055: {
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
  Text_268_5055: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_268_5056: {
    width: wp("60%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_268_5057: {
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
  View_268_5058: {
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
  Text_268_5058: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_5059: {
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
  View_I268_5059_218_3017: {
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
  ImageBackground_I268_5059_218_3018: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I268_5059_218_3030: {
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
  ImageBackground_I268_5059_218_3031: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I268_5059_218_3051: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("0%")
  },
  View_I268_5059_218_3024: {
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
  ImageBackground_I268_5059_218_3025: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I268_5059_218_3038: {
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
  View_I268_5059_218_3039: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I268_5059_218_3041: {
    width: wp("15%"),
    height: hp("9%"),
    top: hp("-2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%")
  },
  ImageBackground_I268_5059_218_3042: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I268_5059_218_3043: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I268_5059_218_3044: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I268_5059_218_3045: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I268_5059_218_3046: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I268_5059_218_3047: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I268_5059_218_3048: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I268_5059_218_3049: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I268_5059_218_3050: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_218_3132: {
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
  View_218_3133: {
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
  View_I218_3133_33_111: {
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
  View_I218_3133_33_112: {
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
  View_I218_3133_33_112_25_824: {
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
  View_I218_3133_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I218_3133_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I218_3133_33_112_25_827: {
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
  View_I218_3133_33_112_25_828: {
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
  ImageBackground_I218_3133_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I218_3133_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I218_3133_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I218_3133_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I218_3133_33_112_25_840: {
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
  View_I218_3133_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I218_3133_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I218_3133_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I218_3133_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I218_3133_33_165: {
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
  View_I218_3133_33_165_33_148: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I218_3133_33_165_33_149: {
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
  ImageBackground_I218_3133_33_165_33_150: {
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
