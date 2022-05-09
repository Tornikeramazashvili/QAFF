import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function ListenScreen() {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.contactBox}>
            <Icon
              name="chevron-back"
              size={20}
              color="#7D90A8"
              style={styles.notificationIcon}
            />
            <Text style={styles.contactFont}>კონტაქტი</Text>
            <Icon
              name="notifications"
              size={20}
              color="#7D90A8"
              style={styles.notificationIcon}
            />
          </View>
          <View style={styles.contactBoxCompany}>
            <View style={styles.contactBoxCompanyPhone}>
              <View>
                <Icon
                  name="ios-call"
                  size={18}
                  color="#3585EF"
                  style={styles.contactBoxCompanyIcon}
                />
              </View>
              <View style={styles.contactBoxPhoneBox}>
                <Text style={styles.contactBoxCompanyPhoneColor}>ტელეფონი</Text>
                <Text style={styles.contactBoxCompanyPhoneNumberColor}>
                  +995 (322) 2 00 00 00
                </Text>
              </View>
            </View>
            <View style={styles.contactBoxCompanyEmail}>
              <View style={styles.contactBoxCompanyPhone}>
                <View>
                  <Icon
                    name="mail"
                    size={18}
                    color="#3585EF"
                    style={styles.contactBoxCompanyIcon}
                  />
                </View>
                <View style={styles.contactBoxPhoneBox}>
                  <Text style={styles.contactBoxCompanyPhoneColor}>
                    ელ.ფოსტა
                  </Text>
                  <Text style={styles.contactBoxCompanyPhoneNumberColor}>
                    info@dropapp.ge
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.contactBoxCompanyAddress}>
              <View style={styles.contactBoxCompanyPhone}>
                <View>
                  <Icon
                    name="location"
                    size={18}
                    color="#3585EF"
                    style={styles.contactBoxCompanyIcon}
                  />
                </View>
                <View style={styles.contactBoxPhoneBox}>
                  <Text style={styles.contactBoxCompanyPhoneColor}>
                    მისამართი
                  </Text>
                  <Text style={styles.contactBoxCompanyPhoneNumberColor}>
                    აღმაშენებლის ხეივანი #13
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputEachBox}>
              <Text style={styles.inputText}>სახელი</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="ეკატერინე"
                  placeholderTextColor="#000"
                />
              </View>
            </View>
            <View style={styles.inputEachBox}>
              <Text style={styles.inputText}>ტელეფონის ნომერი</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="+995 595 595 595"
                  placeholderTextColor="#000"
                />
              </View>
            </View>
            <View style={styles.inputEachBox}>
              <Text style={styles.inputText}>დანიშნულება</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.input}
                  placeholder="აპლიკაციის ხარვეზი"
                  placeholderTextColor="#000"
                />
              </View>
            </View>
            <View style={styles.inputEachBox}>
              <Text style={styles.inputText}>შეტყობინება</Text>
              <View style={styles.inputBox}>
                <TextInput
                  style={styles.inputWriteText}
                  placeholder="თქვენი შეტყობინება"
                  placeholderTextColor="#000"
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  contactBox: {
    marginTop: "4%",
    marginBottom: "6%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationIcon: {
    borderWidth: 1,
    borderColor: "#E3EEFC",
    borderRadius: 8,
    padding: 8,
  },
  contactFont: {
    fontSize: 16,
    color: "#2E313B",
  },
  contactBoxCompany: {
    borderRadius: 15,
    backgroundColor: "#E9f2fd",
  },
  contactBoxCompanyPhone: {
    flexDirection: "row",
  },
  contactBoxCompanyIcon: {
    margin: 14,
    borderColor: "#E3EEFC",
    borderRadius: 30,
    padding: 10,
    backgroundColor: "#FFFFFF",
  },
  contactBoxCompanyPhoneColor: {
    fontWeight: "bold",
    color: "#7D90A8",
    fontSize: 10,
  },
  contactBoxCompanyPhoneNumberColor: {
    color: "#000514",
    fontWeight: "bold",
    fontSize: 12,
  },
  contactBoxPhoneBox: {
    justifyContent: "center",
  },
  inputBox: {
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E3EEFC",
    borderRadius: 8,
    paddingLeft: 10,
    width: "90%",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
    padding: 5,
  },
  inputEachBox: {
    marginTop: 10,
  },
  inputText: {
    fontWeight: "bold",
    color: "#7D90A8",
    fontSize: 10,
    marginLeft: 30,
    marginBottom: "1%",
  },
  inputWriteText: {
    borderWidth: 1,
    borderColor: "#E3EEFC",
    borderRadius: 8,
    paddingLeft: 10,
    width: "90%",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 10,
    paddingBottom: 40,
  },
});
