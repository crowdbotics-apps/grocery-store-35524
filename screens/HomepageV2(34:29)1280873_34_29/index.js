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
      <View style={styles.View_264_5651}>
        <View style={styles.View_66_337}>
          <View style={styles.View_66_335}>
            <ImageBackground style={styles.ImageBackground_66_289}>
              <View style={styles.View_I66_289_49_107}>
                <View style={styles.View_I66_289_49_108}>
                  <View style={styles.View_I66_289_49_109}>
                    <Text style={styles.Text_I66_289_49_109}>20% off</Text>
                  </View>
                </View>
                <View style={styles.View_I66_289_49_110}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9546ea35-f480-4b91-a3f4-dc5d84aa498a"
                    }}
                    style={styles.ImageBackground_I66_289_49_111}
                  />
                </View>
              </View>
              <View style={styles.View_I66_289_49_104}>
                <View style={styles.View_I66_289_49_105}>
                  <Text style={styles.Text_I66_289_49_105}>
                    Jeans shirt full
                  </Text>
                </View>
                <View style={styles.View_I66_289_49_106}>
                  <Text style={styles.Text_I66_289_49_106}>$20.50 $25.50</Text>
                </View>
              </View>
            </ImageBackground>
            <ImageBackground style={styles.ImageBackground_66_300}>
              <View style={styles.View_I66_300_49_107}>
                <View style={styles.View_I66_300_49_108}>
                  <View style={styles.View_I66_300_49_109}>
                    <Text style={styles.Text_I66_300_49_109}>20% off</Text>
                  </View>
                </View>
                <View style={styles.View_I66_300_49_110}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29a85407-1c8e-41c4-8258-36ba44cf5645"
                    }}
                    style={styles.ImageBackground_I66_300_49_111}
                  />
                </View>
              </View>
              <View style={styles.View_I66_300_49_104}>
                <View style={styles.View_I66_300_49_105}>
                  <Text style={styles.Text_I66_300_49_105}>
                    Yeallo full shirtf
                  </Text>
                </View>
                <View style={styles.View_I66_300_49_106}>
                  <Text style={styles.Text_I66_300_49_106}>$20.50 $25.50</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.View_66_336}>
            <ImageBackground style={styles.ImageBackground_66_311}>
              <View style={styles.View_I66_311_49_107}>
                <View style={styles.View_I66_311_49_108}>
                  <View style={styles.View_I66_311_49_109}>
                    <Text style={styles.Text_I66_311_49_109}>20% off</Text>
                  </View>
                </View>
                <View style={styles.View_I66_311_49_110}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35f92464-c331-489b-aaa8-f45b8cfdcabd"
                    }}
                    style={styles.ImageBackground_I66_311_49_111}
                  />
                </View>
              </View>
              <View style={styles.View_I66_311_49_104}>
                <View style={styles.View_I66_311_49_105}>
                  <Text style={styles.Text_I66_311_49_105}>
                    Men’s casual shirt
                  </Text>
                </View>
                <View style={styles.View_I66_311_49_106}>
                  <Text style={styles.Text_I66_311_49_106}>$20.50 $25.50</Text>
                </View>
              </View>
            </ImageBackground>
            <ImageBackground style={styles.ImageBackground_66_312}>
              <View style={styles.View_I66_312_49_107}>
                <View style={styles.View_I66_312_49_108}>
                  <View style={styles.View_I66_312_49_109}>
                    <Text style={styles.Text_I66_312_49_109}>20% off</Text>
                  </View>
                </View>
                <View style={styles.View_I66_312_49_110}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b3353ea-11d2-405b-bdba-348379b705e0"
                    }}
                    style={styles.ImageBackground_I66_312_49_111}
                  />
                </View>
              </View>
              <View style={styles.View_I66_312_49_104}>
                <View style={styles.View_I66_312_49_105}>
                  <Text style={styles.Text_I66_312_49_105}>
                    Charming hat man{" "}
                  </Text>
                </View>
                <View style={styles.View_I66_312_49_106}>
                  <Text style={styles.Text_I66_312_49_106}>$20.50 $25.50</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>
        <View style={styles.View_66_251}>
          <View style={styles.View_66_256}>
            <View style={styles.View_66_258}>
              <Text style={styles.Text_66_258}>Explore</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_62_561}>
        <View style={styles.View_62_562}>
          <ImageBackground style={styles.ImageBackground_62_563}>
            <View style={styles.View_I62_563_49_107}>
              <View style={styles.View_I62_563_49_108}>
                <View style={styles.View_I62_563_49_109}>
                  <Text style={styles.Text_I62_563_49_109}>40% off</Text>
                </View>
              </View>
              <View style={styles.View_I62_563_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f59a9c51-ff39-4126-9e69-d01c1e5d300d"
                  }}
                  style={styles.ImageBackground_I62_563_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I62_563_49_104}>
              <View style={styles.View_I62_563_49_105}>
                <Text style={styles.Text_I62_563_49_105}>
                  Mens full sleev shirt{" "}
                </Text>
              </View>
              <View style={styles.View_I62_563_49_106}>
                <Text style={styles.Text_I62_563_49_106}>$15.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground style={styles.ImageBackground_62_564}>
            <View style={styles.View_I62_564_49_107}>
              <View style={styles.View_I62_564_49_108}>
                <View style={styles.View_I62_564_49_109}>
                  <Text style={styles.Text_I62_564_49_109}>20% off</Text>
                </View>
              </View>
              <View style={styles.View_I62_564_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2030e50-5643-46f4-acd8-c626901b0da7"
                  }}
                  style={styles.ImageBackground_I62_564_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I62_564_49_104}>
              <View style={styles.View_I62_564_49_105}>
                <Text style={styles.Text_I62_564_49_105}>
                  Rose pink hoodie{" "}
                </Text>
              </View>
              <View style={styles.View_I62_564_49_106}>
                <Text style={styles.Text_I62_564_49_106}>$20.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground style={styles.ImageBackground_62_565}>
            <View style={styles.View_I62_565_49_107}>
              <View style={styles.View_I62_565_49_108}>
                <View style={styles.View_I62_565_49_109}>
                  <Text style={styles.Text_I62_565_49_109}>20% off</Text>
                </View>
              </View>
              <View style={styles.View_I62_565_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63ab2d78-f2ee-4e2f-8aea-cece0b4b3f53"
                  }}
                  style={styles.ImageBackground_I62_565_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I62_565_49_104}>
              <View style={styles.View_I62_565_49_105}>
                <Text style={styles.Text_I62_565_49_105}>
                  Pink girl’s hoodie{" "}
                </Text>
              </View>
              <View style={styles.View_I62_565_49_106}>
                <Text style={styles.Text_I62_565_49_106}>$20.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.View_62_566}>
          <View style={styles.View_62_567}>
            <Text style={styles.Text_62_567}>See all</Text>
          </View>
          <View style={styles.View_62_568}>
            <Text style={styles.Text_62_568}>Popular</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_268_4704}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03f1a0ff-9e50-4177-99b2-6ac99d748965"
          }}
          style={styles.ImageBackground_264_5636}
        />
      </View>
      <View style={styles.View_56_125}>
        <View style={styles.View_56_126}>
          <ImageBackground style={styles.ImageBackground_56_127}>
            <View style={styles.View_I56_127_49_107}>
              <View style={styles.View_I56_127_49_108}>
                <View style={styles.View_I56_127_49_109}>
                  <Text style={styles.Text_I56_127_49_109}>40% off</Text>
                </View>
              </View>
              <View style={styles.View_I56_127_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c38e87b2-6d21-4c54-9bd6-974c66ce67b6"
                  }}
                  style={styles.ImageBackground_I56_127_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I56_127_49_104}>
              <View style={styles.View_I56_127_49_105}>
                <Text style={styles.Text_I56_127_49_105}>
                  Mens full sleev shirt{" "}
                </Text>
              </View>
              <View style={styles.View_I56_127_49_106}>
                <Text style={styles.Text_I56_127_49_106}>$15.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground style={styles.ImageBackground_56_128}>
            <View style={styles.View_I56_128_49_107}>
              <View style={styles.View_I56_128_49_108}>
                <View style={styles.View_I56_128_49_109}>
                  <Text style={styles.Text_I56_128_49_109}>20% off</Text>
                </View>
              </View>
              <View style={styles.View_I56_128_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efd0bfd8-58cb-4622-a9f0-2bdf754e4592"
                  }}
                  style={styles.ImageBackground_I56_128_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I56_128_49_104}>
              <View style={styles.View_I56_128_49_105}>
                <Text style={styles.Text_I56_128_49_105}>
                  Rose pink hoodie{" "}
                </Text>
              </View>
              <View style={styles.View_I56_128_49_106}>
                <Text style={styles.Text_I56_128_49_106}>$20.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground style={styles.ImageBackground_56_129}>
            <View style={styles.View_I56_129_49_107}>
              <View style={styles.View_I56_129_49_108}>
                <View style={styles.View_I56_129_49_109}>
                  <Text style={styles.Text_I56_129_49_109}>20% off</Text>
                </View>
              </View>
              <View style={styles.View_I56_129_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/769a8c51-a20a-495e-8c60-6ef7248d671a"
                  }}
                  style={styles.ImageBackground_I56_129_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I56_129_49_104}>
              <View style={styles.View_I56_129_49_105}>
                <Text style={styles.Text_I56_129_49_105}>
                  Pink girl’s hoodie{" "}
                </Text>
              </View>
              <View style={styles.View_I56_129_49_106}>
                <Text style={styles.Text_I56_129_49_106}>$20.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.View_56_130}>
          <View style={styles.View_56_131}>
            <Text style={styles.Text_56_131}>See all</Text>
          </View>
          <View style={styles.View_56_132}>
            <Text style={styles.Text_56_132}>New arrival</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_53_160}>
        <View style={styles.View_53_157}>
          <ImageBackground style={styles.ImageBackground_50_120}>
            <View style={styles.View_I50_120_49_107}>
              <View style={styles.View_I50_120_49_108}>
                <View style={styles.View_I50_120_49_109}>
                  <Text style={styles.Text_I50_120_49_109}>20% off</Text>
                </View>
              </View>
              <View style={styles.View_I50_120_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/732c10bb-51e6-4600-b4fe-7bdf6d4529f6"
                  }}
                  style={styles.ImageBackground_I50_120_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I50_120_49_104}>
              <View style={styles.View_I50_120_49_105}>
                <Text style={styles.Text_I50_120_49_105}>
                  Pink girl’s hoodie{" "}
                </Text>
              </View>
              <View style={styles.View_I50_120_49_106}>
                <Text style={styles.Text_I50_120_49_106}>$20.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground style={styles.ImageBackground_50_131}>
            <View style={styles.View_I50_131_49_107}>
              <View style={styles.View_I50_131_49_108}>
                <View style={styles.View_I50_131_49_109}>
                  <Text style={styles.Text_I50_131_49_109}>20% off</Text>
                </View>
              </View>
              <View style={styles.View_I50_131_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60f63ae4-bf3f-46db-9deb-fd5e8947347e"
                  }}
                  style={styles.ImageBackground_I50_131_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I50_131_49_104}>
              <View style={styles.View_I50_131_49_105}>
                <Text style={styles.Text_I50_131_49_105}>
                  Girl’s casual shirt{" "}
                </Text>
              </View>
              <View style={styles.View_I50_131_49_106}>
                <Text style={styles.Text_I50_131_49_106}>$15.50 $20.50</Text>
              </View>
            </View>
          </ImageBackground>
          <ImageBackground style={styles.ImageBackground_53_146}>
            <View style={styles.View_I53_146_49_107}>
              <View style={styles.View_I53_146_49_108}>
                <View style={styles.View_I53_146_49_109}>
                  <Text style={styles.Text_I53_146_49_109}>20% off</Text>
                </View>
              </View>
              <View style={styles.View_I53_146_49_110}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/360a058f-3dd3-43ac-8031-84e6477d44fb"
                  }}
                  style={styles.ImageBackground_I53_146_49_111}
                />
              </View>
            </View>
            <View style={styles.View_I53_146_49_104}>
              <View style={styles.View_I53_146_49_105}>
                <Text style={styles.Text_I53_146_49_105}>
                  Pink girl’s hoodie{" "}
                </Text>
              </View>
              <View style={styles.View_I53_146_49_106}>
                <Text style={styles.Text_I53_146_49_106}>$20.50 $25.50</Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.View_56_124}>
          <View style={styles.View_53_142}>
            <Text style={styles.Text_53_142}>See all</Text>
          </View>
          <View style={styles.View_41_90}>
            <Text style={styles.Text_41_90}>Popular products</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_53_161}>
        <View style={styles.View_39_343}>
          <View style={styles.View_39_318}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af1983e9-a801-4f47-b73a-ea4b2b3e7349"
              }}
              style={styles.ImageBackground_34_302}
            />
          </View>
          <View style={styles.View_39_313}>
            <View style={styles.View_39_312}>
              <Text style={styles.Text_39_312}>Best selling</Text>
            </View>
          </View>
          <View style={styles.View_39_314}>
            <View style={styles.View_39_315}>
              <Text style={styles.Text_39_315}>For women</Text>
            </View>
          </View>
          <View style={styles.View_39_316}>
            <View style={styles.View_39_317}>
              <Text style={styles.Text_39_317}>New arrival</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_5624}>
        <View style={styles.View_264_5625}>
          <View style={styles.View_264_5626}>
            <Text style={styles.Text_264_5626}>Stories</Text>
          </View>
        </View>
        <View style={styles.View_264_5627}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae2d289d-f6a2-4c43-99ad-e90ca5ae149c"
            }}
            style={styles.ImageBackground_264_5628}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d7f6f6d-3a46-415a-b7ee-93597c121f41"
            }}
            style={styles.ImageBackground_264_5629}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/975dee61-0b10-4dad-be8a-12d50535a6c3"
            }}
            style={styles.ImageBackground_264_5630}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5af4884-7456-4076-87e8-d3105942466f"
            }}
            style={styles.ImageBackground_264_5631}
          />
        </View>
      </View>
      <View style={styles.View_268_4703}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09bad901-ddf9-4294-8525-1ca7f6e81633"
          }}
          style={styles.ImageBackground_109_1318}
        />
      </View>
      <View style={styles.View_39_342}>
        <View style={styles.View_34_255}>
          <View style={styles.View_I34_255_34_165}>
            <View style={styles.View_I34_255_34_166}>
              <Text style={styles.Text_I34_255_34_166}>Search here…</Text>
            </View>
          </View>
          <View style={styles.View_I34_255_34_167}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f21912c5-381b-48cb-9bec-09bdedf4c7f5"
              }}
              style={styles.ImageBackground_I34_255_34_168}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_98_2886}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3eb0de4-48db-4f01-bb78-2218092b62b0"
          }}
          style={styles.ImageBackground_I98_2886_98_2841}
        />
        <View style={styles.View_I98_2886_98_2842}>
          <View style={styles.View_I98_2886_98_2842_80_938} />
        </View>
        <View style={styles.View_I98_2886_98_2843}>
          <View style={styles.View_I98_2886_98_2844}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b222392c-97c6-4ac1-9d7d-f13d511fac8c"
              }}
              style={styles.ImageBackground_I98_2886_98_2845}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc8308ca-1bb7-4460-a69a-2cbc5b86a8dd"
              }}
              style={styles.ImageBackground_I98_2886_98_2846}
            />
          </View>
          <View style={styles.View_I98_2886_98_2847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25369793-4e3f-430b-ad38-0e7318e1a655"
              }}
              style={styles.ImageBackground_I98_2886_98_2848}
            />
            <View style={styles.View_I98_2886_98_2849}>
              <Text style={styles.Text_I98_2886_98_2849}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I98_2886_98_2850}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b9fee69-da40-4d23-bf80-05e084967bb8"
            }}
            style={styles.ImageBackground_I98_2886_98_2852}
          />
          <View style={styles.View_I98_2886_98_2853}>
            <Text style={styles.Text_I98_2886_98_2853}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_I98_2886_98_2854}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d5e9c9c-1d30-4a8a-aed4-53928a4dcd5b"
            }}
            style={styles.ImageBackground_I98_2886_98_2856}
          />
          <View style={styles.View_I98_2886_98_2857}>
            <Text style={styles.Text_I98_2886_98_2857}>Favourit</Text>
          </View>
        </View>
        <View style={styles.View_I98_2886_98_2858}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8030b7f5-b231-4919-8883-6c7167997d50"
            }}
            style={styles.ImageBackground_I98_2886_98_2860}
          />
          <View style={styles.View_I98_2886_98_2861}>
            <Text style={styles.Text_I98_2886_98_2861}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I98_2886_98_2862}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e750d413-1673-49d4-a95f-041cd4423939"
            }}
            style={styles.ImageBackground_I98_2886_98_2864}
          />
          <View style={styles.View_I98_2886_98_2865}>
            <Text style={styles.Text_I98_2886_98_2865}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_39_320}>
        <View style={styles.View_34_30}>
          <View style={styles.View_I34_30_33_111} />
          <View style={styles.View_I34_30_33_112}>
            <View style={styles.View_I34_30_33_112_25_824} />
            <View style={styles.View_I34_30_33_112_25_825}>
              <View style={styles.View_I34_30_33_112_25_826} />
              <View style={styles.View_I34_30_33_112_25_827}>
                <View style={styles.View_I34_30_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa031c43-3a63-4123-9144-24ca417b474b"
                  }}
                  style={styles.ImageBackground_I34_30_33_112_25_829}
                />
                <View style={styles.View_I34_30_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcb1edf3-a341-41f4-9207-7d67bca231dc"
                }}
                style={styles.ImageBackground_I34_30_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab7fa970-a040-4ac8-8c2d-26b0c977e23d"
                }}
                style={styles.ImageBackground_I34_30_33_112_25_835}
              />
              <View style={styles.View_I34_30_33_112_25_840}>
                <View style={styles.View_I34_30_33_112_25_841}>
                  <Text style={styles.Text_I34_30_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I34_30_33_114}>
            <Text style={styles.Text_I34_30_33_114}>Feed</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b51dab7e-b7c2-4aa8-a782-ad487847dd87"
            }}
            style={styles.ImageBackground_I34_30_33_165}
          />
          <View style={styles.View_I34_30_34_66}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ffa5daea-5a5b-4201-ad70-d1a5b7170d93"
              }}
              style={styles.ImageBackground_I34_30_34_66_103_673}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e947ef77-20dc-4c94-a9ca-60346916f999"
              }}
              style={styles.ImageBackground_I34_30_34_66_103_674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d44ed9e-0fcf-47ad-b58e-8c1964aa696f"
              }}
              style={styles.ImageBackground_I34_30_34_66_103_675}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I34_30_34_66_103_676}
            />
            <View style={styles.View_I34_30_34_66_103_659}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2fd9b1b0-5a4a-46d6-a00f-1072098f44db"
                }}
                style={styles.ImageBackground_I34_30_34_66_103_660}
              />
              <View style={styles.View_I34_30_34_66_103_661}>
                <Text style={styles.Text_I34_30_34_66_103_661}>2</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("306%") },
  View_264_5651: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("237%")
  },
  View_66_337: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("54%"),
    minHeight: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_66_335: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_66_289: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_289_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_289_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_289_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I66_289_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_289_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I66_289_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I66_289_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I66_289_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I66_289_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_289_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I66_289_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_66_300: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_300_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_300_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_300_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I66_300_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_300_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I66_300_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I66_300_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I66_300_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I66_300_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_300_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I66_300_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_336: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_66_311: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_311_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_311_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_311_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I66_311_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_311_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I66_311_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I66_311_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I66_311_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I66_311_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_311_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I66_311_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_66_312: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_312_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_312_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I66_312_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I66_312_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_312_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I66_312_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I66_312_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I66_312_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I66_312_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I66_312_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I66_312_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_66_251: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_66_256: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_66_258: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_66_258: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_561: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("200%")
  },
  View_62_562: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_62_563: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_563_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_563_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_563_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I62_563_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I62_563_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I62_563_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I62_563_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I62_563_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I62_563_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I62_563_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I62_563_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_62_564: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_564_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_564_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_564_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I62_564_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I62_564_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I62_564_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I62_564_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I62_564_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I62_564_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I62_564_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I62_564_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_62_565: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_565_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_565_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I62_565_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I62_565_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I62_565_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I62_565_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I62_565_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I62_565_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I62_565_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I62_565_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I62_565_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_566: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_62_567: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_62_567: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_62_568: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_62_568: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_4704: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("169%")
  },
  ImageBackground_264_5636: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_56_125: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("132%")
  },
  View_56_126: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_56_127: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_127_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_127_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_127_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_127_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_127_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_127_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_127_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I56_127_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I56_127_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_127_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I56_127_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_56_128: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_128_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_128_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_128_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_128_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_128_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_128_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_128_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I56_128_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I56_128_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_128_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I56_128_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_56_129: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_129_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_129_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I56_129_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I56_129_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_129_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I56_129_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I56_129_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I56_129_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I56_129_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I56_129_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I56_129_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_130: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_56_131: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_56_131: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_132: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_56_132: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_160: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("95%")
  },
  View_53_157: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_50_120: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I50_120_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I50_120_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I50_120_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I50_120_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I50_120_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I50_120_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I50_120_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I50_120_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I50_120_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I50_120_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I50_120_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_50_131: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I50_131_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I50_131_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I50_131_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I50_131_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I50_131_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I50_131_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I50_131_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I50_131_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I50_131_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I50_131_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I50_131_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_53_146: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_146_49_107: {
    flexGrow: 1,
    width: wp("37%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_146_49_108: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I53_146_49_109: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I53_146_49_109: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I53_146_49_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I53_146_49_111: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I53_146_49_104: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("15%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I53_146_49_105: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I53_146_49_105: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I53_146_49_106: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I53_146_49_106: {
    color: "rgba(76, 79, 89, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_56_124: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_53_142: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_53_142: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_41_90: {
    width: wp("48%"),
    minWidth: wp("48%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_41_90: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_53_161: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("84%")
  },
  View_39_343: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_318: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 70, 78, 1)"
  },
  ImageBackground_34_302: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_39_313: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_39_312: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_39_312: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_314: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_39_315: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_39_315: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_316: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)"
  },
  View_39_317: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_39_317: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5624: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("57%")
  },
  View_264_5625: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_264_5626: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_264_5626: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5627: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_264_5628: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_264_5629: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("0%")
  },
  ImageBackground_264_5630: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("0%")
  },
  ImageBackground_264_5631: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("93%"),
    top: hp("0%")
  },
  View_268_4703: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%")
  },
  ImageBackground_109_1318: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_39_342: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%")
  },
  View_34_255: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I34_255_34_165: {
    flexGrow: 1,
    width: wp("77%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(247, 248, 249, 1)",
    overflow: "hidden"
  },
  View_I34_255_34_166: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I34_255_34_166: {
    color: "rgba(175, 177, 181, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I34_255_34_167: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 70, 78, 1)"
  },
  ImageBackground_I34_255_34_168: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_98_2886: {
    width: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("292%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_2886_98_2841: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_I98_2886_98_2842: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I98_2886_98_2842_80_938: {
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
  View_I98_2886_98_2843: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_I98_2886_98_2844: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I98_2886_98_2845: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I98_2886_98_2846: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I98_2886_98_2847: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_I98_2886_98_2848: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I98_2886_98_2849: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I98_2886_98_2849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_2886_98_2850: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_2886_98_2852: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I98_2886_98_2853: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I98_2886_98_2853: {
    color: "rgba(224, 70, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_2886_98_2854: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_2886_98_2856: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I98_2886_98_2857: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I98_2886_98_2857: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_2886_98_2858: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_2886_98_2860: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I98_2886_98_2861: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I98_2886_98_2861: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I98_2886_98_2862: {
    flexGrow: 1,
    width: wp("20%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I98_2886_98_2864: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I98_2886_98_2865: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I98_2886_98_2865: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_39_320: {
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
  View_34_30: {
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
  View_I34_30_33_111: {
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
  View_I34_30_33_112: {
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
  View_I34_30_33_112_25_824: {
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
  View_I34_30_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I34_30_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I34_30_33_112_25_827: {
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
  View_I34_30_33_112_25_828: {
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
  ImageBackground_I34_30_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I34_30_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I34_30_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I34_30_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I34_30_33_112_25_840: {
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
  View_I34_30_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I34_30_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I34_30_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I34_30_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I34_30_33_165: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  View_I34_30_34_66: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I34_30_34_66_103_673: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I34_30_34_66_103_674: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I34_30_34_66_103_675: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_I34_30_34_66_103_676: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I34_30_34_66_103_659: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I34_30_34_66_103_660: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I34_30_34_66_103_661: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_I34_30_34_66_103_661: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
