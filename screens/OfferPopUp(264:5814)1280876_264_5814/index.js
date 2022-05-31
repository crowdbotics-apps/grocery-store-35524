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
      <View style={styles.View_268_4708}>
        <View style={styles.View_264_5815}>
          <View style={styles.View_264_5816}>
            <View style={styles.View_264_5817}>
              <Text style={styles.Text_264_5817}>Explore</Text>
            </View>
          </View>
          <View style={styles.View_264_5818}>
            <View style={styles.View_264_5819}>
              <View style={styles.View_264_5820}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5820_70_659}
                >
                  <View style={styles.View_I264_5820_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b2d3af1-4d59-4be9-a024-389df1fb8241"
                      }}
                      style={styles.ImageBackground_I264_5820_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5820_73_667}>
                  <View style={styles.View_I264_5820_73_668}>
                    <View style={styles.View_I264_5820_73_669}>
                      <Text style={styles.Text_I264_5820_73_669}>
                        Jeans shirt full
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5820_73_670}>
                    <View style={styles.View_I264_5820_73_671}>
                      <Text style={styles.Text_I264_5820_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_264_5821}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5821_70_659}
                >
                  <View style={styles.View_I264_5821_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63ceca11-8690-4f69-8ce9-715f12f2929c"
                      }}
                      style={styles.ImageBackground_I264_5821_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5821_73_667}>
                  <View style={styles.View_I264_5821_73_668}>
                    <View style={styles.View_I264_5821_73_669}>
                      <Text style={styles.Text_I264_5821_73_669}>
                        Yello shirt full
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5821_73_670}>
                    <View style={styles.View_I264_5821_73_671}>
                      <Text style={styles.Text_I264_5821_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_264_5822}>
              <View style={styles.View_264_5823}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5823_70_659}
                >
                  <View style={styles.View_I264_5823_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8d12c47-7ab2-425e-bb15-fc5e4e8019fa"
                      }}
                      style={styles.ImageBackground_I264_5823_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5823_73_667}>
                  <View style={styles.View_I264_5823_73_668}>
                    <View style={styles.View_I264_5823_73_669}>
                      <Text style={styles.Text_I264_5823_73_669}>
                        Mens casual shirt
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5823_73_670}>
                    <View style={styles.View_I264_5823_73_671}>
                      <Text style={styles.Text_I264_5823_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_264_5824}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5824_70_659}
                >
                  <View style={styles.View_I264_5824_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/723bc6e4-14e2-4174-b2df-d78cefd1b6ee"
                      }}
                      style={styles.ImageBackground_I264_5824_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5824_73_667}>
                  <View style={styles.View_I264_5824_73_668}>
                    <View style={styles.View_I264_5824_73_669}>
                      <Text style={styles.Text_I264_5824_73_669}>
                        Charming man hat
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5824_73_670}>
                    <View style={styles.View_I264_5824_73_671}>
                      <Text style={styles.Text_I264_5824_73_671}>
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
      <View style={styles.View_268_4710}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3678ea5-aec1-426e-ad75-4eb2787bfcc0"
          }}
          style={styles.ImageBackground_264_5825}
        />
      </View>
      <View style={styles.View_264_5826}>
        <View style={styles.View_264_5827}>
          <View style={styles.View_264_5828}>
            <Text style={styles.Text_264_5828}>See all</Text>
          </View>
          <View style={styles.View_264_5829}>
            <Text style={styles.Text_264_5829}>New arrival</Text>
          </View>
        </View>
        <View style={styles.View_264_5830}>
          <View style={styles.View_264_5831}>
            <ImageBackground style={styles.ImageBackground_I264_5831_70_659}>
              <View style={styles.View_I264_5831_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17d815eb-540c-4849-9bd0-f740347d6e10"
                  }}
                  style={styles.ImageBackground_I264_5831_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5831_73_667}>
              <View style={styles.View_I264_5831_73_668}>
                <View style={styles.View_I264_5831_73_669}>
                  <Text style={styles.Text_I264_5831_73_669}>
                    Mens full sleev shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5831_73_670}>
                <View style={styles.View_I264_5831_73_671}>
                  <Text style={styles.Text_I264_5831_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5832}>
            <ImageBackground style={styles.ImageBackground_I264_5832_70_659}>
              <View style={styles.View_I264_5832_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e9249b9-f3b8-43f8-8e9a-29279144e323"
                  }}
                  style={styles.ImageBackground_I264_5832_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5832_73_667}>
              <View style={styles.View_I264_5832_73_668}>
                <View style={styles.View_I264_5832_73_669}>
                  <Text style={styles.Text_I264_5832_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5832_73_670}>
                <View style={styles.View_I264_5832_73_671}>
                  <Text style={styles.Text_I264_5832_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5833}>
            <ImageBackground style={styles.ImageBackground_I264_5833_70_659}>
              <View style={styles.View_I264_5833_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ca4ce2f-c445-495c-8b9a-27ba97ff66a5"
                  }}
                  style={styles.ImageBackground_I264_5833_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5833_73_667}>
              <View style={styles.View_I264_5833_73_668}>
                <View style={styles.View_I264_5833_73_669}>
                  <Text style={styles.Text_I264_5833_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5833_73_670}>
                <View style={styles.View_I264_5833_73_671}>
                  <Text style={styles.Text_I264_5833_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_5834}>
        <View style={styles.View_264_5835}>
          <View style={styles.View_264_5836}>
            <Text style={styles.Text_264_5836}>See all</Text>
          </View>
          <View style={styles.View_264_5837}>
            <Text style={styles.Text_264_5837}>Popular products</Text>
          </View>
        </View>
        <View style={styles.View_264_5838}>
          <View style={styles.View_264_5839}>
            <ImageBackground style={styles.ImageBackground_I264_5839_70_659}>
              <View style={styles.View_I264_5839_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e57f2fb-cc1c-45d1-be52-26fb27235348"
                  }}
                  style={styles.ImageBackground_I264_5839_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5839_73_667}>
              <View style={styles.View_I264_5839_73_668}>
                <View style={styles.View_I264_5839_73_669}>
                  <Text style={styles.Text_I264_5839_73_669}>
                    Pink girls hoodie
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5839_73_670}>
                <View style={styles.View_I264_5839_73_671}>
                  <Text style={styles.Text_I264_5839_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5840}>
            <ImageBackground style={styles.ImageBackground_I264_5840_70_659}>
              <View style={styles.View_I264_5840_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d729aa70-e553-4e69-ac09-dc9290aee6a8"
                  }}
                  style={styles.ImageBackground_I264_5840_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5840_73_667}>
              <View style={styles.View_I264_5840_73_668}>
                <View style={styles.View_I264_5840_73_669}>
                  <Text style={styles.Text_I264_5840_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5840_73_670}>
                <View style={styles.View_I264_5840_73_671}>
                  <Text style={styles.Text_I264_5840_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5841}>
            <ImageBackground style={styles.ImageBackground_I264_5841_70_659}>
              <View style={styles.View_I264_5841_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09d46b99-d097-444c-a964-bd9cf57f513c"
                  }}
                  style={styles.ImageBackground_I264_5841_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5841_73_667}>
              <View style={styles.View_I264_5841_73_668}>
                <View style={styles.View_I264_5841_73_669}>
                  <Text style={styles.Text_I264_5841_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5841_73_670}>
                <View style={styles.View_I264_5841_73_671}>
                  <Text style={styles.Text_I264_5841_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_5842}>
        <View style={styles.View_264_5843}>
          <View style={styles.View_264_5844}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/691f2b22-370e-43a0-b7ff-3798c86c3b22"
              }}
              style={styles.ImageBackground_264_5845}
            />
          </View>
          <View style={styles.View_264_5846}>
            <View style={styles.View_264_5847}>
              <Text style={styles.Text_264_5847}>Best selling</Text>
            </View>
          </View>
          <View style={styles.View_264_5848}>
            <View style={styles.View_264_5849}>
              <Text style={styles.Text_264_5849}>For women</Text>
            </View>
          </View>
          <View style={styles.View_264_5850}>
            <View style={styles.View_264_5851}>
              <Text style={styles.Text_264_5851}>New arrival</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_4709}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5eb058f7-d5e9-4695-a5be-3fe9e953b3a0"
          }}
          style={styles.ImageBackground_264_5852}
        />
      </View>
      <View style={styles.View_264_5853}>
        <View style={styles.View_264_5854}>
          <View style={styles.View_264_5855}>
            <Text style={styles.Text_264_5855}>Stories</Text>
          </View>
        </View>
        <View style={styles.View_264_5856}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f43c9c2-a7b7-4b27-ba62-9338bc51344e"
            }}
            style={styles.ImageBackground_264_5857}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae9a4b25-7e41-4b14-aade-03f0478cd417"
            }}
            style={styles.ImageBackground_264_5858}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb243b4b-01b2-423e-ae34-b36fd562a4f1"
            }}
            style={styles.ImageBackground_264_5859}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fcdeadf-1819-4f31-9ce4-fc002eb2c00b"
            }}
            style={styles.ImageBackground_264_5860}
          />
        </View>
      </View>
      <View style={styles.View_264_5861}>
        <View style={styles.View_264_5862}>
          <View style={styles.View_I264_5862_33_111} />
          <View style={styles.View_I264_5862_33_112}>
            <View style={styles.View_I264_5862_33_112_25_824} />
            <View style={styles.View_I264_5862_33_112_25_825}>
              <View style={styles.View_I264_5862_33_112_25_826} />
              <View style={styles.View_I264_5862_33_112_25_827}>
                <View style={styles.View_I264_5862_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/033370b1-3cba-48bd-ae77-8e8836e0542a"
                  }}
                  style={styles.ImageBackground_I264_5862_33_112_25_829}
                />
                <View style={styles.View_I264_5862_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bfcf8f1-efa3-4d36-85c3-db6f226b7399"
                }}
                style={styles.ImageBackground_I264_5862_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2989bb43-ae63-4717-ad54-c0a294929a7e"
                }}
                style={styles.ImageBackground_I264_5862_33_112_25_835}
              />
              <View style={styles.View_I264_5862_33_112_25_840}>
                <View style={styles.View_I264_5862_33_112_25_841}>
                  <Text style={styles.Text_I264_5862_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I264_5862_33_114}>
            <Text style={styles.Text_I264_5862_33_114}>Explore</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81a06023-cf92-4548-89c2-183672b6e4ed"
            }}
            style={styles.ImageBackground_I264_5862_33_165}
          />
          <View style={styles.View_I264_5862_34_66}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76286f2c-7b9a-4f06-81f0-6bf33e0104ca"
              }}
              style={styles.ImageBackground_I264_5862_34_66_103_673}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdd68a9a-7023-4ec4-9450-ed991bff6159"
              }}
              style={styles.ImageBackground_I264_5862_34_66_103_674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ff0606f-4ced-4769-9882-9d09abbb25c8"
              }}
              style={styles.ImageBackground_I264_5862_34_66_103_675}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I264_5862_34_66_103_676}
            />
            <View style={styles.View_I264_5862_34_66_103_659}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9633077-0619-4163-8a77-b1060a46548a"
                }}
                style={styles.ImageBackground_I264_5862_34_66_103_660}
              />
              <View style={styles.View_I264_5862_34_66_103_661}>
                <Text style={styles.Text_I264_5862_34_66_103_661}>2</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_5863}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fddadd92-92c3-4054-babe-0e07e2cad3ff"
          }}
          style={styles.ImageBackground_I264_5863_98_2841}
        />
        <View style={styles.View_I264_5863_98_2842}>
          <View style={styles.View_I264_5863_98_2842_80_938} />
        </View>
        <View style={styles.View_I264_5863_98_2843}>
          <View style={styles.View_I264_5863_98_2844}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/212aaf75-dd50-40df-a75c-4b8765e8dc55"
              }}
              style={styles.ImageBackground_I264_5863_98_2845}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2dc32b6-1791-4868-9923-2728609ddb06"
              }}
              style={styles.ImageBackground_I264_5863_98_2846}
            />
          </View>
          <View style={styles.View_I264_5863_98_2847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/237aaf41-8669-41c4-9f6b-bad79fd7a6ef"
              }}
              style={styles.ImageBackground_I264_5863_98_2848}
            />
            <View style={styles.View_I264_5863_98_2849}>
              <Text style={styles.Text_I264_5863_98_2849}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I264_5863_98_2850}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/19fea344-8b05-495a-ae69-7bce2b8469c1"
            }}
            style={styles.ImageBackground_I264_5863_98_2852}
          />
          <View style={styles.View_I264_5863_98_2853}>
            <Text style={styles.Text_I264_5863_98_2853}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_I264_5863_98_2854}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b0d2c1c-b2c3-4947-8e7a-4404894db667"
            }}
            style={styles.ImageBackground_I264_5863_98_2856}
          />
          <View style={styles.View_I264_5863_98_2857}>
            <Text style={styles.Text_I264_5863_98_2857}>Favourit</Text>
          </View>
        </View>
        <View style={styles.View_I264_5863_98_2858}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efa28e7c-e1f7-49f5-ba1b-55ef06c51b72"
            }}
            style={styles.ImageBackground_I264_5863_98_2860}
          />
          <View style={styles.View_I264_5863_98_2861}>
            <Text style={styles.Text_I264_5863_98_2861}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I264_5863_98_2862}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f58ac012-9117-4243-9e01-ad48cda8f525"
            }}
            style={styles.ImageBackground_I264_5863_98_2864}
          />
          <View style={styles.View_I264_5863_98_2865}>
            <Text style={styles.Text_I264_5863_98_2865}>Profile</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0672e7c3-4fc5-454f-9b1c-ee8784b4f58c"
        }}
        style={styles.ImageBackground_264_5864}
      />
      <View style={styles.View_268_4711}>
        <View style={styles.View_264_5865}>
          <View style={styles.View_I264_5865_249_3738}>
            <View style={styles.View_I264_5865_249_3739}>
              <View style={styles.View_I264_5865_249_3740}>
                <View style={styles.View_I264_5865_249_3741}>
                  <Text style={styles.Text_I264_5865_249_3741}>
                    Special offer is going to end, hurry!
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5865_249_3742}>
                <View style={styles.View_I264_5865_249_3743}>
                  <Text style={styles.Text_I264_5865_249_3743}>
                    Mauris etiam ut amet nibh pursfus risus. Mattis magnis sem
                    quis at faibus dam ipsum donec varius..
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5865_249_4033}>
                <View style={styles.View_I264_5865_249_4033_25_85}>
                  <Text style={styles.Text_I264_5865_249_4033_25_85}>View</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I264_5865_249_3744}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e759376-2693-47bb-aa8a-1054d92a4b23"
              }}
              style={styles.ImageBackground_I264_5865_249_3745}
            />
            <View style={styles.View_I264_5865_249_3750}>
              <Text style={styles.Text_I264_5865_249_3750}>!</Text>
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
  View_268_4708: {
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
  View_264_5815: {
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
  View_264_5816: {
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
  View_264_5817: {
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
  Text_264_5817: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5818: {
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
  View_264_5819: {
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
  View_264_5820: {
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
  ImageBackground_I264_5820_70_659: {
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
  View_I264_5820_70_653: {
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
  ImageBackground_I264_5820_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5820_73_667: {
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
  View_I264_5820_73_668: {
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
  View_I264_5820_73_669: {
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
  Text_I264_5820_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5820_73_670: {
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
  View_I264_5820_73_671: {
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
  Text_I264_5820_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5821: {
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
  ImageBackground_I264_5821_70_659: {
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
  View_I264_5821_70_653: {
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
  ImageBackground_I264_5821_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5821_73_667: {
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
  View_I264_5821_73_668: {
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
  View_I264_5821_73_669: {
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
  Text_I264_5821_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5821_73_670: {
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
  View_I264_5821_73_671: {
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
  Text_I264_5821_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5822: {
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
  View_264_5823: {
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
  ImageBackground_I264_5823_70_659: {
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
  View_I264_5823_70_653: {
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
  ImageBackground_I264_5823_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5823_73_667: {
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
  View_I264_5823_73_668: {
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
  View_I264_5823_73_669: {
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
  Text_I264_5823_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5823_73_670: {
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
  View_I264_5823_73_671: {
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
  Text_I264_5823_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5824: {
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
  ImageBackground_I264_5824_70_659: {
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
  View_I264_5824_70_653: {
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
  ImageBackground_I264_5824_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5824_73_667: {
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
  View_I264_5824_73_668: {
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
  View_I264_5824_73_669: {
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
  Text_I264_5824_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5824_73_670: {
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
  View_I264_5824_73_671: {
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
  Text_I264_5824_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_4710: {
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
  ImageBackground_264_5825: {
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
  View_264_5826: {
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
  View_264_5827: {
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
  View_264_5828: {
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
  Text_264_5828: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5829: {
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
  Text_264_5829: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5830: {
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
  View_264_5831: {
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
  ImageBackground_I264_5831_70_659: {
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
  View_I264_5831_70_653: {
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
  ImageBackground_I264_5831_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5831_73_667: {
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
  View_I264_5831_73_668: {
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
  View_I264_5831_73_669: {
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
  Text_I264_5831_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5831_73_670: {
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
  View_I264_5831_73_671: {
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
  Text_I264_5831_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5832: {
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
  ImageBackground_I264_5832_70_659: {
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
  View_I264_5832_70_653: {
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
  ImageBackground_I264_5832_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5832_73_667: {
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
  View_I264_5832_73_668: {
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
  View_I264_5832_73_669: {
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
  Text_I264_5832_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5832_73_670: {
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
  View_I264_5832_73_671: {
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
  Text_I264_5832_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5833: {
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
  ImageBackground_I264_5833_70_659: {
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
  View_I264_5833_70_653: {
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
  ImageBackground_I264_5833_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5833_73_667: {
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
  View_I264_5833_73_668: {
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
  View_I264_5833_73_669: {
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
  Text_I264_5833_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5833_73_670: {
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
  View_I264_5833_73_671: {
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
  Text_I264_5833_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5834: {
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
  View_264_5835: {
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
  View_264_5836: {
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
  Text_264_5836: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5837: {
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
  Text_264_5837: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5838: {
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
  View_264_5839: {
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
  ImageBackground_I264_5839_70_659: {
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
  View_I264_5839_70_653: {
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
  ImageBackground_I264_5839_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5839_73_667: {
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
  View_I264_5839_73_668: {
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
  View_I264_5839_73_669: {
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
  Text_I264_5839_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5839_73_670: {
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
  View_I264_5839_73_671: {
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
  Text_I264_5839_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5840: {
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
  ImageBackground_I264_5840_70_659: {
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
  View_I264_5840_70_653: {
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
  ImageBackground_I264_5840_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5840_73_667: {
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
  View_I264_5840_73_668: {
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
  View_I264_5840_73_669: {
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
  Text_I264_5840_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5840_73_670: {
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
  View_I264_5840_73_671: {
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
  Text_I264_5840_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5841: {
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
  ImageBackground_I264_5841_70_659: {
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
  View_I264_5841_70_653: {
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
  ImageBackground_I264_5841_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5841_73_667: {
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
  View_I264_5841_73_668: {
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
  View_I264_5841_73_669: {
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
  Text_I264_5841_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5841_73_670: {
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
  View_I264_5841_73_671: {
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
  Text_I264_5841_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5842: {
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
  View_264_5843: {
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
  View_264_5844: {
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
  ImageBackground_264_5845: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_264_5846: {
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
  View_264_5847: {
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
  Text_264_5847: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5848: {
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
  View_264_5849: {
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
  Text_264_5849: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5850: {
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
  View_264_5851: {
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
  Text_264_5851: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_4709: {
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
  ImageBackground_264_5852: {
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
  View_264_5853: {
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
  View_264_5854: {
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
  View_264_5855: {
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
  Text_264_5855: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5856: {
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
  ImageBackground_264_5857: {
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
  ImageBackground_264_5858: {
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
  ImageBackground_264_5859: {
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
  ImageBackground_264_5860: {
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
  View_264_5861: {
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
  View_264_5862: {
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
  View_I264_5862_33_111: {
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
  View_I264_5862_33_112: {
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
  View_I264_5862_33_112_25_824: {
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
  View_I264_5862_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I264_5862_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5862_33_112_25_827: {
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
  View_I264_5862_33_112_25_828: {
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
  ImageBackground_I264_5862_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I264_5862_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I264_5862_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I264_5862_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I264_5862_33_112_25_840: {
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
  View_I264_5862_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I264_5862_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I264_5862_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I264_5862_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I264_5862_33_165: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  View_I264_5862_34_66: {
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
  ImageBackground_I264_5862_34_66_103_673: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I264_5862_34_66_103_674: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I264_5862_34_66_103_675: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_I264_5862_34_66_103_676: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I264_5862_34_66_103_659: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I264_5862_34_66_103_660: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5862_34_66_103_661: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_I264_5862_34_66_103_661: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5863: {
    width: wp("100%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("98%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I264_5863_98_2841: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_I264_5863_98_2842: {
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
  View_I264_5863_98_2842_80_938: {
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
  View_I264_5863_98_2843: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_I264_5863_98_2844: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I264_5863_98_2845: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I264_5863_98_2846: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I264_5863_98_2847: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_I264_5863_98_2848: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5863_98_2849: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I264_5863_98_2849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5863_98_2850: {
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
  ImageBackground_I264_5863_98_2852: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5863_98_2853: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5863_98_2853: {
    color: "rgba(224, 70, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5863_98_2854: {
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
  ImageBackground_I264_5863_98_2856: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5863_98_2857: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5863_98_2857: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5863_98_2858: {
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
  ImageBackground_I264_5863_98_2860: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5863_98_2861: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5863_98_2861: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5863_98_2862: {
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
  ImageBackground_I264_5863_98_2864: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5863_98_2865: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5863_98_2865: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_264_5864: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("111%"),
    minHeight: hp("111%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_268_4711: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("35%")
  },
  View_264_5865: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("42%"),
    minHeight: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I264_5865_249_3738: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I264_5865_249_3739: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I264_5865_249_3740: {
    width: wp("49%"),
    minWidth: wp("49%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I264_5865_249_3741: {
    width: wp("49%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I264_5865_249_3741: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5865_249_3742: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I264_5865_249_3743: {
    width: wp("75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I264_5865_249_3743: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5865_249_4033: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("22%"),
    backgroundColor: "rgba(224, 70, 78, 1)"
  },
  View_I264_5865_249_4033_25_85: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I264_5865_249_4033_25_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24000020325183868,
    textTransform: "none"
  },
  View_I264_5865_249_3744: {
    flexGrow: 1,
    width: wp("17%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%")
  },
  ImageBackground_I264_5865_249_3745: {
    width: wp("17%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5865_249_3750: {
    width: wp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "center"
  },
  Text_I264_5865_249_3750: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "700",
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
