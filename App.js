import React, { useState } from 'react';
import { Pressable, StyleSheet, View, Text,TextInput } from "react-native";
import { Image } from 'react-native';
import { Border, Color, FontSize, FontFamily } from "./GlobalStyles";

const M4Profile = () => {
  const [text, setText] = useState('');
  return (
    <View style={styles.m4Profile}>
      <View style={[styles.groupParent, styles.groupParentPosition]}>

        <View style={[styles.rectangleParent, styles.rectangleLayout]}>
          <View style={[styles.groupChild, styles.groupLayout]} />
          <Text style={[styles.dataUsageConsent, styles.methodBriefTypo]}>
            Data Usage Consent
          </Text>
        </View>

        <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
          <View style={[styles.groupItem, styles.groupLayout]} />
          <Text
            style={[styles.dataUsageConsent, styles.methodBriefTypo]}
          >{`Pilot
Rules`}</Text>
        </View>
        
        <View style={styles.rectangleContainer}>
          <View style={[styles.groupInner, styles.groupLayout]} />
          <Text style={[styles.methodBrief, styles.methodBriefTypo]}>{`Method
Brief`}</Text>
        </View>

        <Image
          style={styles.uboxIcon}
          contentFit="cover"
          source={require("./assets/ubox.png")}
        />
        <Image
          style={[styles.ureceiptAltIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("./assets/ureceiptalt.png")}
        />
        <Image
          style={[styles.uchartLineIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("./assets/uchartline.png")}
        />
        
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Please leave us a message here if you have anything to say to us!"
            onChangeText={(inputText) => setText(inputText)}
            value={text}
          />
        </View>


    </View>
    <Image
        style={styles.component1Icon}
        contentFit="cover"
        source={require("./assets/component-1.png")}//暂时未拆开
      />

      
          <View style={[styles.vectorParent, styles.vectorPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.vectorPosition]}
          contentFit="cover"
          source={require("./assets/rectangle-45.png")}
        />
        <View style={styles.vOTE}>
          <Text style={[styles.letUsKnow, styles.signOutTypo]}>
            Let us know
          </Text>
        </View>
      </View>
      <View style={[styles.vectorGroup, styles.vectorPosition]}>
        <Image
          style={[styles.rectangleIcon, styles.vectorPosition]}
          contentFit="cover"
          source={require("./assets/rectangle-451.png")}
        />
        <View style={styles.vOTE}>
          <Text style={[styles.signOut, styles.signOutTypo]}>Sign out</Text>
        </View>
      </View>





      
      <Text style={styles.hiCharlotteItContainer}>
        <Text style={styles.hiCharlotte}>{`Hi, Charlotte\n`}</Text>
        <Text style={styles.itHasBeen}>It has been 10 days with</Text>
        <Image
        style={styles.m4ProfileChild}
        contentFit="cover"
        source={require("./assets/group-667.png")}
      />
      </Text>


      



      
    </View>
  );
};



const styles = StyleSheet.create({
  groupParentPosition: {
  left: "50%",
  position: "absolute",
},

  rectangleLayout: {
    width: 116,
    height: 89,
  },
  groupLayout: {
    width: 105,
    borderRadius: Border.br_5xs,
    left: 0,
    top: 0,
    height: 89,
    position: "absolute",
  },
  methodBriefTypo: {
    height: 45,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 12,
    fontSize: FontSize.size_xs,
    top: 34,
    textAlign: "left",
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    top: 53,
    position: "absolute",
    overflow: "hidden",
  },
  vectorPosition: {
    height: 40,
    width: 300,
    top: "50%",
    marginLeft: -150,
    left: "50%",
    position: "absolute",
  },
  signOutTypo: {
    justifyContent: "center",
    textAlign: "center",
    fontFamily: FontFamily.sourceSansPro,
    fontWeight: "700",
    lineHeight: 38, //TBD
    letterSpacing: -0.3,
    left: "0%",
    top: "0%",
    height: "100%",
    fontSize: FontSize.size_sm,
    alignItems: "center",
    display: "flex",
    position: "absolute",
    width: "100%",
  },
  groupChild: {
    backgroundColor: "rgba(162, 184, 77, 0.4)",
  },
  dataUsageConsent: {
    left: 47,
    width: 62,
  },
  rectangleParent: {
    zIndex: 0,
    height: 90,
  },
  groupItem: {
    backgroundColor: "rgba(255, 199, 0, 0.4)",
  },
  rectangleGroup: {
    zIndex: 1,
    marginLeft: 5,
    height: 89,
  },
  groupInner: {
    backgroundColor: "rgba(121, 193, 200, 0.4)",
  },
  methodBrief: {
    left: 43,
    width: 70,
  },
  rectangleContainer: {
    width: 113,
    zIndex: 2,
    marginLeft: 5,
    height: 89,
  },

  uboxIcon: {
    top: 49,
    left: 26,
    width: 32,
    height: 32,
    zIndex: 4,
    position: "absolute",
    overflow: "hidden",
  },
  ureceiptAltIcon: {
    left: 145,
    zIndex: 5,
  },
  uchartLineIcon: {
    left: 270,
    zIndex: 6,
  },
  groupParent: {
    marginLeft: -195,
    top: 155,
    borderRadius: 32,

    backgroundColor: "#f6f7f9", 
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 390,
    height: 800,
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 17,
    paddingVertical: 33,
    overflow: "hidden",
  },
component1Icon: {
    position: 'absolute',
    left: '50%',     // 水平居中
    bottom: 0,       // 位于底部
    marginLeft: -196,
    width: 392,
    height: 72,
  },


  hiCharlotte: {
    fontSize: 32,
    fontFamily: FontFamily.openSansSemiBold,
    fontWeight: "600",
  },
  itHasBeen: {
    fontSize: 20,
    letterSpacing: -0.7,
    // fontFamily: FontFamily.openSansRegular,
  },
  hiCharlotteItContainer: {
    top: 67,
    left: 31,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  m4ProfileChild: {
    position: 'relative', // 使用相对定位
    top: 0, 
    left: 0, 
    width: 28,
    height: 28,
  },

  rectangleIcon: {
    marginTop: -20,
    borderRadius: Border.br_11xl,
  },
  letUsKnow: {
    color: Color.colorWhite,
  },
  vOTE: {
    top: 0,
    left: 67,
    width: 163,
    height: 30,

    position: "absolute",
  },
  vectorParent: {
    marginTop: 240,
  },
  signOut: {
    color: "#a2b84d",
  },
  vectorGroup: {
    marginTop: 290,
  },
  m4Profile: {
    borderRadius: 40,
    backgroundColor: "#0f5720",
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
  container: {
    borderRadius: 20,
    width: 355,
    height: 350,
    zIndex: 3,
    position: "relative",
    backgroundColor: "white", 
    overflow: "hidden",
    marginTop: 15,
  },
  input: {
    flex: 1,
    padding: 10,
    fontFamily: FontFamily.openSansRegular,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    textAlignVertical: "top", //TBD没效果
    color: Color.colorBlack,
  },
});

export default M4Profile;
