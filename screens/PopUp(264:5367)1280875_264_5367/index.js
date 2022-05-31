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
      <View style={styles.View_268_4699}>
        <View style={styles.View_264_5368}>
          <View style={styles.View_264_5369}>
            <View style={styles.View_264_5370}>
              <Text style={styles.Text_264_5370}>Explore</Text>
            </View>
          </View>
          <View style={styles.View_264_5371}>
            <View style={styles.View_264_5372}>
              <View style={styles.View_264_5373}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5373_70_659}
                >
                  <View style={styles.View_I264_5373_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3c48f1a-41f4-4b15-a4f0-28118abf924b"
                      }}
                      style={styles.ImageBackground_I264_5373_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5373_73_667}>
                  <View style={styles.View_I264_5373_73_668}>
                    <View style={styles.View_I264_5373_73_669}>
                      <Text style={styles.Text_I264_5373_73_669}>
                        Jeans shirt full
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5373_73_670}>
                    <View style={styles.View_I264_5373_73_671}>
                      <Text style={styles.Text_I264_5373_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_264_5374}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5374_70_659}
                >
                  <View style={styles.View_I264_5374_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3c2768d-16fd-41c5-b7f8-e5385fe2f04d"
                      }}
                      style={styles.ImageBackground_I264_5374_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5374_73_667}>
                  <View style={styles.View_I264_5374_73_668}>
                    <View style={styles.View_I264_5374_73_669}>
                      <Text style={styles.Text_I264_5374_73_669}>
                        Yello shirt full
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5374_73_670}>
                    <View style={styles.View_I264_5374_73_671}>
                      <Text style={styles.Text_I264_5374_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_264_5375}>
              <View style={styles.View_264_5376}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5376_70_659}
                >
                  <View style={styles.View_I264_5376_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9eda1032-67b7-4fc4-8732-07b4e992cb3e"
                      }}
                      style={styles.ImageBackground_I264_5376_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5376_73_667}>
                  <View style={styles.View_I264_5376_73_668}>
                    <View style={styles.View_I264_5376_73_669}>
                      <Text style={styles.Text_I264_5376_73_669}>
                        Mens casual shirt
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5376_73_670}>
                    <View style={styles.View_I264_5376_73_671}>
                      <Text style={styles.Text_I264_5376_73_671}>
                        $15.50 %20.50
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_264_5377}>
                <ImageBackground
                  style={styles.ImageBackground_I264_5377_70_659}
                >
                  <View style={styles.View_I264_5377_70_653}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa317882-8766-4b35-bc60-9b97bd059c2d"
                      }}
                      style={styles.ImageBackground_I264_5377_73_682}
                    />
                  </View>
                </ImageBackground>
                <View style={styles.View_I264_5377_73_667}>
                  <View style={styles.View_I264_5377_73_668}>
                    <View style={styles.View_I264_5377_73_669}>
                      <Text style={styles.Text_I264_5377_73_669}>
                        Charming man hat
                      </Text>
                    </View>
                  </View>
                  <View style={styles.View_I264_5377_73_670}>
                    <View style={styles.View_I264_5377_73_671}>
                      <Text style={styles.Text_I264_5377_73_671}>
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
      <View style={styles.View_268_4700}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8eb34629-d4e9-43fb-b31c-08a095544a95"
          }}
          style={styles.ImageBackground_264_5378}
        />
      </View>
      <View style={styles.View_264_5379}>
        <View style={styles.View_264_5380}>
          <View style={styles.View_264_5381}>
            <Text style={styles.Text_264_5381}>See all</Text>
          </View>
          <View style={styles.View_264_5382}>
            <Text style={styles.Text_264_5382}>New arrival</Text>
          </View>
        </View>
        <View style={styles.View_264_5383}>
          <View style={styles.View_264_5384}>
            <ImageBackground style={styles.ImageBackground_I264_5384_70_659}>
              <View style={styles.View_I264_5384_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/472d6a4f-3ad1-40aa-b29a-c015f30f1077"
                  }}
                  style={styles.ImageBackground_I264_5384_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5384_73_667}>
              <View style={styles.View_I264_5384_73_668}>
                <View style={styles.View_I264_5384_73_669}>
                  <Text style={styles.Text_I264_5384_73_669}>
                    Mens full sleev shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5384_73_670}>
                <View style={styles.View_I264_5384_73_671}>
                  <Text style={styles.Text_I264_5384_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5385}>
            <ImageBackground style={styles.ImageBackground_I264_5385_70_659}>
              <View style={styles.View_I264_5385_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51f6b0e7-8916-47e9-b391-7492d7cc707c"
                  }}
                  style={styles.ImageBackground_I264_5385_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5385_73_667}>
              <View style={styles.View_I264_5385_73_668}>
                <View style={styles.View_I264_5385_73_669}>
                  <Text style={styles.Text_I264_5385_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5385_73_670}>
                <View style={styles.View_I264_5385_73_671}>
                  <Text style={styles.Text_I264_5385_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5386}>
            <ImageBackground style={styles.ImageBackground_I264_5386_70_659}>
              <View style={styles.View_I264_5386_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ea2596e-8da9-4536-aeed-8d302fb1948a"
                  }}
                  style={styles.ImageBackground_I264_5386_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5386_73_667}>
              <View style={styles.View_I264_5386_73_668}>
                <View style={styles.View_I264_5386_73_669}>
                  <Text style={styles.Text_I264_5386_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5386_73_670}>
                <View style={styles.View_I264_5386_73_671}>
                  <Text style={styles.Text_I264_5386_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_5387}>
        <View style={styles.View_264_5388}>
          <View style={styles.View_264_5389}>
            <Text style={styles.Text_264_5389}>See all</Text>
          </View>
          <View style={styles.View_264_5390}>
            <Text style={styles.Text_264_5390}>Popular products</Text>
          </View>
        </View>
        <View style={styles.View_264_5391}>
          <View style={styles.View_264_5392}>
            <ImageBackground style={styles.ImageBackground_I264_5392_70_659}>
              <View style={styles.View_I264_5392_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a8233ff-ae2f-4d3c-a1c5-ddb16ae8cdbf"
                  }}
                  style={styles.ImageBackground_I264_5392_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5392_73_667}>
              <View style={styles.View_I264_5392_73_668}>
                <View style={styles.View_I264_5392_73_669}>
                  <Text style={styles.Text_I264_5392_73_669}>
                    Pink girls hoodie
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5392_73_670}>
                <View style={styles.View_I264_5392_73_671}>
                  <Text style={styles.Text_I264_5392_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5393}>
            <ImageBackground style={styles.ImageBackground_I264_5393_70_659}>
              <View style={styles.View_I264_5393_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73a4ebe6-5708-4c65-a6e7-70fa413a8069"
                  }}
                  style={styles.ImageBackground_I264_5393_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5393_73_667}>
              <View style={styles.View_I264_5393_73_668}>
                <View style={styles.View_I264_5393_73_669}>
                  <Text style={styles.Text_I264_5393_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5393_73_670}>
                <View style={styles.View_I264_5393_73_671}>
                  <Text style={styles.Text_I264_5393_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_264_5394}>
            <ImageBackground style={styles.ImageBackground_I264_5394_70_659}>
              <View style={styles.View_I264_5394_70_653}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b511bde-918d-45a1-be2e-dba7f6773614"
                  }}
                  style={styles.ImageBackground_I264_5394_73_682}
                />
              </View>
            </ImageBackground>
            <View style={styles.View_I264_5394_73_667}>
              <View style={styles.View_I264_5394_73_668}>
                <View style={styles.View_I264_5394_73_669}>
                  <Text style={styles.Text_I264_5394_73_669}>
                    Girl’s casual shirt
                  </Text>
                </View>
              </View>
              <View style={styles.View_I264_5394_73_670}>
                <View style={styles.View_I264_5394_73_671}>
                  <Text style={styles.Text_I264_5394_73_671}>
                    $15.50 %20.50
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_5395}>
        <View style={styles.View_264_5396}>
          <View style={styles.View_264_5397}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d604257-6e97-4065-a437-b7071d0982a2"
              }}
              style={styles.ImageBackground_264_5398}
            />
          </View>
          <View style={styles.View_264_5399}>
            <View style={styles.View_264_5400}>
              <Text style={styles.Text_264_5400}>Best selling</Text>
            </View>
          </View>
          <View style={styles.View_264_5401}>
            <View style={styles.View_264_5402}>
              <Text style={styles.Text_264_5402}>For women</Text>
            </View>
          </View>
          <View style={styles.View_264_5403}>
            <View style={styles.View_264_5404}>
              <Text style={styles.Text_264_5404}>New arrival</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_268_4701}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/785bd3f7-393b-449f-b454-a5e7e3287926"
          }}
          style={styles.ImageBackground_264_5405}
        />
      </View>
      <View style={styles.View_264_5406}>
        <View style={styles.View_264_5407}>
          <View style={styles.View_264_5408}>
            <Text style={styles.Text_264_5408}>Stories</Text>
          </View>
        </View>
        <View style={styles.View_264_5409}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/499ceb18-6de2-4e68-b349-52993e184c32"
            }}
            style={styles.ImageBackground_264_5410}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efff2183-8684-44b5-bf80-8cbfa2a40154"
            }}
            style={styles.ImageBackground_264_5411}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82ffbe8f-9a43-4160-b25e-e0a52ba22990"
            }}
            style={styles.ImageBackground_264_5412}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d564882b-e4b2-4551-9d66-cf2a561714df"
            }}
            style={styles.ImageBackground_264_5413}
          />
        </View>
      </View>
      <View style={styles.View_264_5415}>
        <View style={styles.View_264_5416}>
          <View style={styles.View_I264_5416_33_111} />
          <View style={styles.View_I264_5416_33_112}>
            <View style={styles.View_I264_5416_33_112_25_824} />
            <View style={styles.View_I264_5416_33_112_25_825}>
              <View style={styles.View_I264_5416_33_112_25_826} />
              <View style={styles.View_I264_5416_33_112_25_827}>
                <View style={styles.View_I264_5416_33_112_25_828} />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a741a94f-6588-4ae4-864a-5f22479500ba"
                  }}
                  style={styles.ImageBackground_I264_5416_33_112_25_829}
                />
                <View style={styles.View_I264_5416_33_112_25_830} />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/851da289-d502-40e4-8a53-826edbc28eb4"
                }}
                style={styles.ImageBackground_I264_5416_33_112_25_831}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b29c7ee-6293-4d8c-8ff8-989757a6de77"
                }}
                style={styles.ImageBackground_I264_5416_33_112_25_835}
              />
              <View style={styles.View_I264_5416_33_112_25_840}>
                <View style={styles.View_I264_5416_33_112_25_841}>
                  <Text style={styles.Text_I264_5416_33_112_25_841}>9:41</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_I264_5416_33_114}>
            <Text style={styles.Text_I264_5416_33_114}>Explore</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9696a19-2fb8-4b2b-afe5-51f573df5b2b"
            }}
            style={styles.ImageBackground_I264_5416_33_165}
          />
          <View style={styles.View_I264_5416_34_66}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a39018e5-189d-47e3-818d-e320fc97db52"
              }}
              style={styles.ImageBackground_I264_5416_34_66_103_673}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d10993aa-2758-4ddf-be2c-d0fbc3ddd921"
              }}
              style={styles.ImageBackground_I264_5416_34_66_103_674}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32b7d183-9eda-4d57-a024-ef9110af33b6"
              }}
              style={styles.ImageBackground_I264_5416_34_66_103_675}
            />
            <View
              source={{ uri: "null" }}
              style={styles.View_I264_5416_34_66_103_676}
            />
            <View style={styles.View_I264_5416_34_66_103_659}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/64b7c9e8-9358-4391-85c8-b9b00d92b734"
                }}
                style={styles.ImageBackground_I264_5416_34_66_103_660}
              />
              <View style={styles.View_I264_5416_34_66_103_661}>
                <Text style={styles.Text_I264_5416_34_66_103_661}>2</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_264_5414}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fa50a2b-4a8d-423a-8a85-3d37cb3bba21"
          }}
          style={styles.ImageBackground_I264_5414_98_2841}
        />
        <View style={styles.View_I264_5414_98_2842}>
          <View style={styles.View_I264_5414_98_2842_80_938} />
        </View>
        <View style={styles.View_I264_5414_98_2843}>
          <View style={styles.View_I264_5414_98_2844}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3461cff-7325-424f-8013-6da4df4d5e25"
              }}
              style={styles.ImageBackground_I264_5414_98_2845}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6755db25-26be-4ef4-9dd8-19d7bd6ce19b"
              }}
              style={styles.ImageBackground_I264_5414_98_2846}
            />
          </View>
          <View style={styles.View_I264_5414_98_2847}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/897cfddb-4ade-4b8f-b1fc-cfda9e81c529"
              }}
              style={styles.ImageBackground_I264_5414_98_2848}
            />
            <View style={styles.View_I264_5414_98_2849}>
              <Text style={styles.Text_I264_5414_98_2849}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I264_5414_98_2850}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86b0dac2-1cf8-43a9-a6e7-d4074cb33e8d"
            }}
            style={styles.ImageBackground_I264_5414_98_2852}
          />
          <View style={styles.View_I264_5414_98_2853}>
            <Text style={styles.Text_I264_5414_98_2853}>Explore</Text>
          </View>
        </View>
        <View style={styles.View_I264_5414_98_2854}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d68f0f3-5b03-49a5-b44e-d98ab6de0d72"
            }}
            style={styles.ImageBackground_I264_5414_98_2856}
          />
          <View style={styles.View_I264_5414_98_2857}>
            <Text style={styles.Text_I264_5414_98_2857}>Favourit</Text>
          </View>
        </View>
        <View style={styles.View_I264_5414_98_2858}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/493cdead-1346-4bb7-a693-ce900a8f3763"
            }}
            style={styles.ImageBackground_I264_5414_98_2860}
          />
          <View style={styles.View_I264_5414_98_2861}>
            <Text style={styles.Text_I264_5414_98_2861}>Search</Text>
          </View>
        </View>
        <View style={styles.View_I264_5414_98_2862}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cceb6589-9783-4677-81f5-a8025629370f"
            }}
            style={styles.ImageBackground_I264_5414_98_2864}
          />
          <View style={styles.View_I264_5414_98_2865}>
            <Text style={styles.Text_I264_5414_98_2865}>Profile</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01308a97-7d72-4643-8901-a41d56484a5b"
        }}
        style={styles.ImageBackground_252_4827}
      />
      <View style={styles.View_268_4702}>
        <View style={styles.View_252_5054}>
          <View style={styles.View_I252_5054_252_4742}>
            <View style={styles.View_I252_5054_252_4743}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbbac8bd-d259-4baa-87de-160ae6710391"
                }}
                style={styles.ImageBackground_I252_5054_252_4744}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b476a65a-f626-4afd-82ca-dad289e67901"
                }}
                style={styles.ImageBackground_I252_5054_252_4745}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/592eb9cc-8964-4280-8cf3-a7ff0fab3181"
                }}
                style={styles.ImageBackground_I252_5054_252_4746}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ade2ea89-005a-4754-b4ad-e68299b976b6"
                }}
                style={styles.ImageBackground_I252_5054_252_4747}
              />
            </View>
          </View>
          <View style={styles.View_I252_5054_252_4748}>
            <View style={styles.View_I252_5054_252_4749}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d231597c-ee71-4cfa-b154-ad6a7661972a"
                }}
                style={styles.ImageBackground_I252_5054_252_4770}
              />
              <View style={styles.View_I252_5054_252_4752}>
                <Text style={styles.Text_I252_5054_252_4752}>New trends</Text>
              </View>
            </View>
            <View style={styles.View_I252_5054_252_4753}>
              <Text style={styles.Text_I252_5054_252_4753}>
                Check out our newly added peoduct in the store exclusively!
              </Text>
            </View>
            <View style={styles.View_I252_5054_252_4772}>
              <View style={styles.View_I252_5054_252_4772_25_85}>
                <Text style={styles.Text_I252_5054_252_4772_25_85}>View</Text>
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
  View_2: { height: hp("111%") },
  View_268_4699: {
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
  View_264_5368: {
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
  View_264_5369: {
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
  View_264_5370: {
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
  Text_264_5370: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5371: {
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
  View_264_5372: {
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
  View_264_5373: {
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
  ImageBackground_I264_5373_70_659: {
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
  View_I264_5373_70_653: {
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
  ImageBackground_I264_5373_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5373_73_667: {
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
  View_I264_5373_73_668: {
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
  View_I264_5373_73_669: {
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
  Text_I264_5373_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5373_73_670: {
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
  View_I264_5373_73_671: {
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
  Text_I264_5373_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5374: {
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
  ImageBackground_I264_5374_70_659: {
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
  View_I264_5374_70_653: {
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
  ImageBackground_I264_5374_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5374_73_667: {
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
  View_I264_5374_73_668: {
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
  View_I264_5374_73_669: {
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
  Text_I264_5374_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5374_73_670: {
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
  View_I264_5374_73_671: {
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
  Text_I264_5374_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5375: {
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
  View_264_5376: {
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
  ImageBackground_I264_5376_70_659: {
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
  View_I264_5376_70_653: {
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
  ImageBackground_I264_5376_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5376_73_667: {
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
  View_I264_5376_73_668: {
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
  View_I264_5376_73_669: {
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
  Text_I264_5376_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5376_73_670: {
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
  View_I264_5376_73_671: {
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
  Text_I264_5376_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5377: {
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
  ImageBackground_I264_5377_70_659: {
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
  View_I264_5377_70_653: {
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
  ImageBackground_I264_5377_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5377_73_667: {
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
  View_I264_5377_73_668: {
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
  View_I264_5377_73_669: {
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
  Text_I264_5377_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5377_73_670: {
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
  View_I264_5377_73_671: {
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
  Text_I264_5377_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_4700: {
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
  ImageBackground_264_5378: {
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
  View_264_5379: {
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
  View_264_5380: {
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
  View_264_5381: {
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
  Text_264_5381: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5382: {
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
  Text_264_5382: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5383: {
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
  View_264_5384: {
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
  ImageBackground_I264_5384_70_659: {
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
  View_I264_5384_70_653: {
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
  ImageBackground_I264_5384_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5384_73_667: {
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
  View_I264_5384_73_668: {
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
  View_I264_5384_73_669: {
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
  Text_I264_5384_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5384_73_670: {
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
  View_I264_5384_73_671: {
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
  Text_I264_5384_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5385: {
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
  ImageBackground_I264_5385_70_659: {
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
  View_I264_5385_70_653: {
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
  ImageBackground_I264_5385_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5385_73_667: {
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
  View_I264_5385_73_668: {
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
  View_I264_5385_73_669: {
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
  Text_I264_5385_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5385_73_670: {
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
  View_I264_5385_73_671: {
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
  Text_I264_5385_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5386: {
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
  ImageBackground_I264_5386_70_659: {
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
  View_I264_5386_70_653: {
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
  ImageBackground_I264_5386_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5386_73_667: {
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
  View_I264_5386_73_668: {
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
  View_I264_5386_73_669: {
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
  Text_I264_5386_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5386_73_670: {
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
  View_I264_5386_73_671: {
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
  Text_I264_5386_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5387: {
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
  View_264_5388: {
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
  View_264_5389: {
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
  Text_264_5389: {
    color: "rgba(136, 137, 144, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5390: {
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
  Text_264_5390: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5391: {
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
  View_264_5392: {
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
  ImageBackground_I264_5392_70_659: {
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
  View_I264_5392_70_653: {
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
  ImageBackground_I264_5392_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5392_73_667: {
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
  View_I264_5392_73_668: {
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
  View_I264_5392_73_669: {
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
  Text_I264_5392_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5392_73_670: {
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
  View_I264_5392_73_671: {
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
  Text_I264_5392_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5393: {
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
  ImageBackground_I264_5393_70_659: {
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
  View_I264_5393_70_653: {
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
  ImageBackground_I264_5393_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5393_73_667: {
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
  View_I264_5393_73_668: {
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
  View_I264_5393_73_669: {
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
  Text_I264_5393_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5393_73_670: {
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
  View_I264_5393_73_671: {
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
  Text_I264_5393_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5394: {
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
  ImageBackground_I264_5394_70_659: {
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
  View_I264_5394_70_653: {
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
  ImageBackground_I264_5394_73_682: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5394_73_667: {
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
  View_I264_5394_73_668: {
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
  View_I264_5394_73_669: {
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
  Text_I264_5394_73_669: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5394_73_670: {
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
  View_I264_5394_73_671: {
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
  Text_I264_5394_73_671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5395: {
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
  View_264_5396: {
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
  View_264_5397: {
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
  ImageBackground_264_5398: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_264_5399: {
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
  View_264_5400: {
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
  Text_264_5400: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5401: {
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
  View_264_5402: {
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
  Text_264_5402: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5403: {
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
  View_264_5404: {
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
  Text_264_5404: {
    color: "rgba(116, 118, 126, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_268_4701: {
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
  ImageBackground_264_5405: {
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
  View_264_5406: {
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
  View_264_5407: {
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
  View_264_5408: {
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
  Text_264_5408: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5409: {
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
  ImageBackground_264_5410: {
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
  ImageBackground_264_5411: {
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
  ImageBackground_264_5412: {
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
  ImageBackground_264_5413: {
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
  View_264_5415: {
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
  View_264_5416: {
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
  View_I264_5416_33_111: {
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
  View_I264_5416_33_112: {
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
  View_I264_5416_33_112_25_824: {
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
  View_I264_5416_33_112_25_825: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I264_5416_33_112_25_826: {
    width: wp("100%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5416_33_112_25_827: {
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
  View_I264_5416_33_112_25_828: {
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
  ImageBackground_I264_5416_33_112_25_829: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_I264_5416_33_112_25_830: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_I264_5416_33_112_25_831: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_I264_5416_33_112_25_835: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_I264_5416_33_112_25_840: {
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
  View_I264_5416_33_112_25_841: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I264_5416_33_112_25_841: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_I264_5416_33_114: {
    flexGrow: 1,
    width: wp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("8%"),
    justifyContent: "center"
  },
  Text_I264_5416_33_114: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I264_5416_33_165: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  View_I264_5416_34_66: {
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
  ImageBackground_I264_5416_34_66_103_673: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I264_5416_34_66_103_674: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I264_5416_34_66_103_675: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  View_I264_5416_34_66_103_676: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I264_5416_34_66_103_659: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I264_5416_34_66_103_660: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5416_34_66_103_661: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "center"
  },
  Text_I264_5416_34_66_103_661: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_264_5414: {
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
  ImageBackground_I264_5414_98_2841: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_I264_5414_98_2842: {
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
  View_I264_5414_98_2842_80_938: {
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
  View_I264_5414_98_2843: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("0%")
  },
  View_I264_5414_98_2844: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I264_5414_98_2845: {
    width: wp("16%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I264_5414_98_2846: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I264_5414_98_2847: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_I264_5414_98_2848: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I264_5414_98_2849: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "center"
  },
  Text_I264_5414_98_2849: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5414_98_2850: {
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
  ImageBackground_I264_5414_98_2852: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5414_98_2853: {
    width: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5414_98_2853: {
    color: "rgba(224, 70, 78, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5414_98_2854: {
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
  ImageBackground_I264_5414_98_2856: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5414_98_2857: {
    width: wp("11%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5414_98_2857: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5414_98_2858: {
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
  ImageBackground_I264_5414_98_2860: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5414_98_2861: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5414_98_2861: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I264_5414_98_2862: {
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
  ImageBackground_I264_5414_98_2864: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_I264_5414_98_2865: {
    width: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "center"
  },
  Text_I264_5414_98_2865: {
    color: "rgba(249, 171, 158, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_252_4827: {
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
  View_268_4702: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%")
  },
  View_252_5054: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("71%"),
    minHeight: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  View_I252_5054_252_4742: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I252_5054_252_4743: {
    width: wp("78%"),
    minWidth: wp("78%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I252_5054_252_4744: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_I252_5054_252_4745: {
    width: wp("70%"),
    height: hp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I252_5054_252_4746: {
    width: wp("70%"),
    height: hp("31%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I252_5054_252_4747: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  View_I252_5054_252_4748: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I252_5054_252_4749: {
    width: wp("81%"),
    minWidth: wp("81%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I252_5054_252_4770: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I252_5054_252_4752: {
    width: wp("66%"),
    minWidth: wp("66%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I252_5054_252_4752: {
    color: "rgba(224, 70, 78, 1)",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I252_5054_252_4753: {
    width: wp("81%"),
    minWidth: wp("81%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_I252_5054_252_4753: {
    color: "rgba(56, 59, 70, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I252_5054_252_4772: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("19%"),
    backgroundColor: "rgba(224, 70, 78, 1)"
  },
  View_I252_5054_252_4772_25_85: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I252_5054_252_4772_25_85: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.24000020325183868,
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
