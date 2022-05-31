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
      <View style={styles.View_268_4698}>
        <View style={styles.View_262_4688}>
          <View style={styles.View_262_4689}>
            <View style={styles.View_262_4690}>
              <Text style={styles.Text_262_4690}>Explore</Text>
            </View>
          </View>
          <View style={styles.View_262_4691}>
            <View style={styles.View_262_4692}>
              <View style={styles.View_262_4693}>
                <ImageBackground
                  style={styles.ImageBackground_I262_4693_70_659}
                >
                  <View style={styles.View_I262_4693_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48560060-2c75-40ad-b502-d1e22d86f235"
                      }}
                      style={styles.ImageBackground_I262_4693_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I262_4693_73_667}>
                  <View style={styles.View_I262_4693_73_668}>
                    <View style={styles.View_I262_4693_73_669}>
                      <Text style={styles.Text_I262_4693_73_669}>
                        Jeans shirt full
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I262_4693_73_670}>
                    <View style={styles.View_I262_4693_73_671}>
                      <Text style={styles.Text_I262_4693_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_262_4694}>
                <ImageBackground
                  style={styles.ImageBackground_I262_4694_70_659}
                >
                  <View style={styles.View_I262_4694_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9b24b53-887b-4c98-a7ad-9f9fc1f87692"
                      }}
                      style={styles.ImageBackground_I262_4694_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I262_4694_73_667}>
                  <View style={styles.View_I262_4694_73_668}>
                    <View style={styles.View_I262_4694_73_669}>
                      <Text style={styles.Text_I262_4694_73_669}>
                        Yello shirt full
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I262_4694_73_670}>
                    <View style={styles.View_I262_4694_73_671}>
                      <Text style={styles.Text_I262_4694_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_262_4695}>
              <View style={styles.View_262_4696}>
                <ImageBackground
                  style={styles.ImageBackground_I262_4696_70_659}
                >
                  <View style={styles.View_I262_4696_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3ef3145-d510-4dc4-8099-b197bcafcce7"
                      }}
                      style={styles.ImageBackground_I262_4696_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I262_4696_73_667}>
                  <View style={styles.View_I262_4696_73_668}>
                    <View style={styles.View_I262_4696_73_669}>
                      <Text style={styles.Text_I262_4696_73_669}>
                        Mens casual shirt
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I262_4696_73_670}>
                    <View style={styles.View_I262_4696_73_671}>
                      <Text style={styles.Text_I262_4696_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_262_4697}>
                <ImageBackground
                  style={styles.ImageBackground_I262_4697_70_659}
                >
                  <View style={styles.View_I262_4697_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12a15358-6dbe-44dc-9629-c0a65f412d50"
                      }}
                      style={styles.ImageBackground_I262_4697_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I262_4697_73_667}>
                  <View style={styles.View_I262_4697_73_668}>
                    <View style={styles.View_I262_4697_73_669}>
                      <Text style={styles.Text_I262_4697_73_669}>
                        Charming man hat
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I262_4697_73_670}>
                    <View style={styles.View_I262_4697_73_671}>
                      <Text style={styles.Text_I262_4697_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_4697}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/109d6a23-4278-43b7-8c44-c6630c607ae1"
          }}
          style={styles.ImageBackground_264_5094}
        />
      </View>
      <View style={styles.View_262_4680}>
        <View style={styles.View_262_4681}>
          <View style={styles.View_262_4682}>
            <Text style={styles.Text_262_4682}>See all</Text>
          </View>
          <View style={styles.View_262_4683}>
            <Text style={styles.Text_262_4683}>New arrival</Text>
          </View>
        </View>
        <View style={styles.View_262_4684}>
          <View style={styles.View_262_4685}>
            <ImageBackground style={styles.ImageBackground_I262_4685_70_659}>
              <View style={styles.View_I262_4685_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4cecbbe8-5081-4c63-a727-1358df62381d"
                  }}
                  style={styles.ImageBackground_I262_4685_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I262_4685_73_667}>
              <View style={styles.View_I262_4685_73_668}>
                <View style={styles.View_I262_4685_73_669}>
                  <Text style={styles.Text_I262_4685_73_669}>
                    Mens full sleev shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I262_4685_73_670}>
                <View style={styles.View_I262_4685_73_671}>
                  <Text style={styles.Text_I262_4685_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_262_4686}>
            <ImageBackground style={styles.ImageBackground_I262_4686_70_659}>
              <View style={styles.View_I262_4686_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67765a38-c80a-470a-898c-cac36ac598b0"
                  }}
                  style={styles.ImageBackground_I262_4686_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I262_4686_73_667}>
              <View style={styles.View_I262_4686_73_668}>
                <View style={styles.View_I262_4686_73_669}>
                  <Text style={styles.Text_I262_4686_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I262_4686_73_670}>
                <View style={styles.View_I262_4686_73_671}>
                  <Text style={styles.Text_I262_4686_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_262_4687}>
            <ImageBackground style={styles.ImageBackground_I262_4687_70_659}>
              <View style={styles.View_I262_4687_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d80bb6a7-6e8f-473d-9cee-5541bd1f9b5c"
                  }}
                  style={styles.ImageBackground_I262_4687_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I262_4687_73_667}>
              <View style={styles.View_I262_4687_73_668}>
                <View style={styles.View_I262_4687_73_669}>
                  <Text style={styles.Text_I262_4687_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I262_4687_73_670}>
                <View style={styles.View_I262_4687_73_671}>
                  <Text style={styles.Text_I262_4687_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_262_4672}>
        <View style={styles.View_262_4673}>
          <View style={styles.View_262_4674}>
            <Text style={styles.Text_262_4674}>See all</Text>
          </View>
          <View style={styles.View_262_4675}>
            <Text style={styles.Text_262_4675}>Popular products</Text>
          </View>
        </View>
        <View style={styles.View_262_4676}>
          <View style={styles.View_262_4677}>
            <ImageBackground style={styles.ImageBackground_I262_4677_70_659}>
              <View style={styles.View_I262_4677_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9796fda0-4484-48fc-b434-3be7e278ab83"
                  }}
                  style={styles.ImageBackground_I262_4677_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I262_4677_73_667}>
              <View style={styles.View_I262_4677_73_668}>
                <View style={styles.View_I262_4677_73_669}>
                  <Text style={styles.Text_I262_4677_73_669}>
                    Pink girls hoodie
                  </Text>
                </View>
              </View>
              <View style={styles.View_I262_4677_73_670}>
                <View style={styles.View_I262_4677_73_671}>
                  <Text style={styles.Text_I262_4677_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_262_4678}>
            <ImageBackground style={styles.ImageBackground_I262_4678_70_659}>
              <View style={styles.View_I262_4678_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ae122c9-2c44-4191-a50a-a105bcd7103a"
                  }}
                  style={styles.ImageBackground_I262_4678_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I262_4678_73_667}>
              <View style={styles.View_I262_4678_73_668}>
                <View style={styles.View_I262_4678_73_669}>
                  <Text style={styles.Text_I262_4678_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I262_4678_73_670}>
                <View style={styles.View_I262_4678_73_671}>
                  <Text style={styles.Text_I262_4678_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_262_4679}>
            <ImageBackground style={styles.ImageBackground_I262_4679_70_659}>
              <View style={styles.View_I262_4679_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c412aa83-b030-416f-9a3c-cdf36689c115"
                  }}
                  style={styles.ImageBackground_I262_4679_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I262_4679_73_667}>
              <View style={styles.View_I262_4679_73_668}>
                <View style={styles.View_I262_4679_73_669}>
                  <Text style={styles.Text_I262_4679_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I262_4679_73_670}>
                <View style={styles.View_I262_4679_73_671}>
                  <Text style={styles.Text_I262_4679_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_262_4651}>
        <View style={styles.View_262_4652}>
          <View style={styles.View_262_4653}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c24a15f-f2e1-4587-97ad-893cf46a2675"
              }}
              style={styles.ImageBackground_262_4654}
            />
          </View>
          <View style={styles.View_262_4655}>
            <View style={styles.View_262_4656}>
              <Text style={styles.Text_262_4656}>Best selling</Text>
            </View>
          </View>
          <View style={styles.View_262_4657}>
            <View style={styles.View_262_4658}>
              <Text style={styles.Text_262_4658}>For women</Text>
            </View>
          </View>
          <View style={styles.View_262_4659}>
            <View style={styles.View_262_4660}>
              <Text style={styles.Text_262_4660}>New arrival</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_4696}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f59188eb-8f97-453f-b6bb-731478654470"
          }}
          style={styles.ImageBackground_262_4698}
        />
      </View>
      <View style={styles.View_264_5093}>
        <View style={styles.View_262_4903}>
          <View style={styles.View_262_4905}>
            <Text style={styles.Text_262_4905}>Stories</Text>
          </View>
        </View>
        <View style={styles.View_262_4921}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a9c5762-a8b0-4040-9ec0-e75775315241"
            }}
            style={styles.ImageBackground_262_4913}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e45dcab3-1dd8-4406-b7e0-390686db2a36"
            }}
            style={styles.ImageBackground_262_4915}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b42ba233-fabe-48d9-9280-70a8763d30d8"
            }}
            style={styles.ImageBackground_262_4917}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d13792b-ec7e-4e36-ae21-0121cb7b50ae"
            }}
            style={styles.ImageBackground_262_4919}
          />
        </View>
      </View>
      <View style={styles.View_262_4699}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/21ae0044-855c-4fce-ac7f-e03be62f3025"
          }}
          style={styles.ImageBackground_I262_4699_98_2841}
        />
        <View style={styles.View_I262_4699_98_2842}>
          <View style={styles.View_I262_4699_98_2842_80_938} />
        </View>
        <View style={styles.View_I262_4699_98_2843}>
          <View style={styles.View_I262_4699_98_2844}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8aee7dd6-53c2-462b-8f76-f095217c6e74"
              }}
              style={styles.ImageBackground_I262_4699_98_2845}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f5852c6-dc15-44ca-ae32-1436c9f7b9e0"
              }}
              style={styles.ImageBackground_I262_4699_98_2846}
            />
          </View>
          <View style={styles.View_I262_4699_98_2847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d94bbcd4-bbc0-444e-a21b-b61e031a8694"
              }}
              style={styles.ImageBackground_I262_4699_98_2848}
            />
            <View style={styles.View_I262_4699_98_2849}>
              <Text style={styles.Text_I262_4699_98_2849}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I262_4699_98_2850}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0433cab-df34-482d-b72d-4a5d89f2acaf"
            }}
            style={styles.ImageBackground_I262_4699_98_2852}
          />
          <View style={styles.View_I262_4699_98_2853}>
            <Text style={styles.Text_I262_4699_98_2853}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_I262_4699_98_2854}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa29fb3e-d051-4799-ae4a-c5c718f4cae2"
            }}
            style={styles.ImageBackground_I262_4699_98_2856}
          />
          <View style={styles.View_I262_4699_98_2857}>
            <Text style={styles.Text_I262_4699_98_2857}>Favourit</Text>
          </View>
        </View>
        <View style={styles.View_I262_4699_98_2858}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/282593b8-9a95-44eb-a2c6-9bd4a6c5d388"
            }}
            style={styles.ImageBackground_I262_4699_98_2860}
          />
          <View style={styles.View_I262_4699_98_2861}>
            <Text style={styles.Text_I262_4699_98_2861}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I262_4699_98_2862}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1de5eb1-821f-4de7-950d-b9ba6e0de758"
            }}
            style={styles.ImageBackground_I262_4699_98_2864}
          />
          <View style={styles.View_I262_4699_98_2865}>
            <Text style={styles.Text_I262_4699_98_2865}>Profile</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_262_4700}>
        <View style={styles.View_262_4701}>
          <View style={styles.View_I262_4701_33_111} />
          <View style={styles.View_I262_4701_33_112}>
            <View style={styles.View_I262_4701_33_112_25_824} />
            <View style={styles.View_I262_4701_33_112_25_825}>
              <View style={styles.View_I262_4701_33_112_25_826} />
              <View style={styles.View_I262_4701_33_112_25_827}>
                <View style={styles.View_I262_4701_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11455735-cac4-4bd8-8eb1-308d6c18a68a"
                  }}
                  style={styles.ImageBackground_I262_4701_33_112_25_829}
                />
                <View style={styles.View_I262_4701_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0626de81-9168-4eb2-af7e-2c4e0b03dac4"
                }}
                style={styles.ImageBackground_I262_4701_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ac4a84f-2072-4619-ba5a-aeb28af0a1cc"
                }}
                style={styles.ImageBackground_I262_4701_33_112_25_835}
              />
              <View style={styles.View_I262_4701_33_112_25_840}>
                <View style={styles.View_I262_4701_33_112_25_841}>
                  <Text style={styles.Text_I262_4701_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I262_4701_33_114}>
            <Text style={styles.Text_I262_4701_33_114}>Explore</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5902b583-ea02-4b84-b0e3-6512fe846a11"
            }}
            style={styles.ImageBackground_I262_4701_33_165}
          />
          <View style={styles.View_I262_4701_34_66}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10f151c5-24c0-4fcc-b3c5-936b084e0e11"
              }}
              style={styles.ImageBackground_I262_4701_34_66_103_673}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ace87b3e-41be-4f82-8947-427d5a8222d4"
              }}
              style={styles.ImageBackground_I262_4701_34_66_103_674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f08b735e-c80c-44db-8e0b-e2ac91fc6ee7"
              }}
              style={styles.ImageBackground_I262_4701_34_66_103_675}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I262_4701_34_66_103_676}
            />
            <View style={styles.View_I262_4701_34_66_103_659}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f41fd44b-2cab-4221-b205-2f6a887dce7e"
                }}
                style={styles.ImageBackground_I262_4701_34_66_103_660}
              />
              <View style={styles.View_I262_4701_34_66_103_661}>
                <Text style={styles.Text_I262_4701_34_66_103_661}>2</Text>
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
  View_2: { height: hp("342%") },
  View_268_4698: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("231%")
  },
  View_262_4688: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_262_4689: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_262_4690: {
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
  Text_262_4690: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4691: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("95%"),
    minHeight: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_262_4692: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_262_4693: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4693_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4693_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4693_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4693_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4693_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4693_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4693_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4693_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4693_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4693_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4694: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4694_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4694_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4694_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4694_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4694_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4694_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4694_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4694_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4694_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4694_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4695: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_262_4696: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4696_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4696_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4696_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4696_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4696_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4696_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4696_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4696_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4696_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4696_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4697: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4697_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4697_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4697_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4697_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4697_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4697_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4697_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4697_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4697_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4697_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_4697: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("199%")
  },
  ImageBackground_264_5094: {
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
  View_262_4680: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("142%")
  },
  View_262_4681: {
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
  View_262_4682: {
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
  Text_262_4682: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4683: {
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
  Text_262_4683: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4684: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_262_4685: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4685_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4685_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4685_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4685_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4685_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4685_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4685_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4685_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4685_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4685_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4686: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4686_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4686_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4686_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4686_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4686_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4686_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4686_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4686_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4686_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4686_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4687: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4687_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4687_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4687_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4687_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4687_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4687_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4687_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4687_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4687_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4687_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4672: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("84%")
  },
  View_262_4673: {
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
  View_262_4674: {
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
  Text_262_4674: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4675: {
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
  Text_262_4675: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4676: {
    width: wp("140%"),
    minWidth: wp("140%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_262_4677: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4677_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4677_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4677_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4677_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4677_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4677_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4677_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4677_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4677_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4677_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4678: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4678_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4678_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4678_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4678_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4678_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4678_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4678_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4678_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4678_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4678_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4679: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("96%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4679_70_659: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I262_4679_70_653: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4679_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4679_73_667: {
    flexGrow: 1,
    width: wp("44%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("37%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I262_4679_73_668: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4679_73_669: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4679_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4679_73_670: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I262_4679_73_671: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I262_4679_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4651: {
    width: wp("114%"),
    minWidth: wp("114%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("73%")
  },
  View_262_4652: {
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
  View_262_4653: {
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
  ImageBackground_262_4654: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_262_4655: {
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
  View_262_4656: {
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
  Text_262_4656: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4657: {
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
  View_262_4658: {
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
  Text_262_4658: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4659: {
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
  View_262_4660: {
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
  Text_262_4660: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_4696: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("42%")
  },
  ImageBackground_262_4698: {
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
  View_264_5093: {
    width: wp("119%"),
    minWidth: wp("119%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%")
  },
  View_262_4903: {
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
  View_262_4905: {
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
  Text_262_4905: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4921: {
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
  ImageBackground_262_4913: {
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
  ImageBackground_262_4915: {
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
  ImageBackground_262_4917: {
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
  ImageBackground_262_4919: {
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
  View_262_4699: {
    width: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("329%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I262_4699_98_2841: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_I262_4699_98_2842: {
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
  View_I262_4699_98_2842_80_938: {
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
  View_I262_4699_98_2843: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_I262_4699_98_2844: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I262_4699_98_2845: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I262_4699_98_2846: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I262_4699_98_2847: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_I262_4699_98_2848: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4699_98_2849: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I262_4699_98_2849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4699_98_2850: {
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
  ImageBackground_I262_4699_98_2852: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I262_4699_98_2853: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I262_4699_98_2853: {
    color: "rgba(224, 70, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4699_98_2854: {
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
  ImageBackground_I262_4699_98_2856: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I262_4699_98_2857: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I262_4699_98_2857: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4699_98_2858: {
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
  ImageBackground_I262_4699_98_2860: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I262_4699_98_2861: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I262_4699_98_2861: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I262_4699_98_2862: {
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
  ImageBackground_I262_4699_98_2864: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I262_4699_98_2865: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I262_4699_98_2865: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_262_4700: {
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
  View_262_4701: {
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
  View_I262_4701_33_111: {
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
  View_I262_4701_33_112: {
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
  View_I262_4701_33_112_25_824: {
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
  View_I262_4701_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I262_4701_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4701_33_112_25_827: {
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
  View_I262_4701_33_112_25_828: {
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
  ImageBackground_I262_4701_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I262_4701_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I262_4701_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I262_4701_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I262_4701_33_112_25_840: {
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
  View_I262_4701_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I262_4701_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I262_4701_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I262_4701_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I262_4701_33_165: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  View_I262_4701_34_66: {
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
  ImageBackground_I262_4701_34_66_103_673: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I262_4701_34_66_103_674: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I262_4701_34_66_103_675: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_I262_4701_34_66_103_676: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I262_4701_34_66_103_659: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I262_4701_34_66_103_660: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I262_4701_34_66_103_661: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_I262_4701_34_66_103_661: {
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
