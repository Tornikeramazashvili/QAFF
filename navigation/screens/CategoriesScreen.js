import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useRef } from "react";
import { Modalize } from "react-native-modalize";
import Icon from "react-native-vector-icons/Ionicons";

export default function CategoriesScreen() {
  const modalizeRef = useRef(null);

  function onOpen() {
    modalizeRef.current?.open();
  }

  function onClosed() {
    modalizeRef.current?.close();
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onOpen}>
        <Text>ჩემი ავტომობილები</Text>
      </TouchableOpacity>
      <Modalize
        ref={modalizeRef}
        snapPoint={480}
        modalHeight={480}
        handleStyle={{ backgroundColor: "transparent" }}
        handlePosition={"inside"}
        HeaderComponent={
          <View style={styles.modalHeader}>
            <Text style={styles.modalHeaderText}>ჩემი ავტომობილები</Text>
            <Icon
              name="ios-close-outline"
              size={28}
              style={styles.closeIcon}
              onPress={onClosed}
            />
          </View>
        }
      >
        <View style={styles.modalContent}>
          <View style={styles.eachCarContainer}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="md-car-sport-outline"
                size={22}
                style={styles.carIcon}
              />
              <View>
                <Text style={styles.carType}>E46 კუპე</Text>
                <Text style={styles.carNumber}>BB 426 NN</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="checkmark-circle-sharp"
                size={32}
                color="#046CEC"
                style={styles.checkMarkIcon}
              />
              <Icon
                name="ellipsis-vertical"
                size={30}
                color="#00051459"
                style={styles.checkMarkIcon}
              />
            </View>
          </View>
          <View style={styles.eachCarContainer}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="md-car-sport-outline"
                size={22}
                style={styles.carIcon}
              />
              <View>
                <Text style={styles.carType}>CSL 63 სედანი</Text>
                <Text style={styles.carNumber}>GT 013 RS</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="ellipse"
                size={34}
                color="#e9f2fd"
                style={styles.checkMarkIcon}
              />
              <Icon
                name="ellipsis-vertical"
                size={30}
                color="#00051459"
                style={styles.checkMarkIcon}
              />
            </View>
          </View>
          <View style={styles.eachCarContainer}>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="md-car-sport-outline"
                size={22}
                style={styles.carIcon}
              />
              <View>
                <Text style={styles.carType}>WRANGLER ჯიპი</Text>
                <Text style={styles.carNumber}>GT 013 RS</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="ellipse"
                size={34}
                color="#e9f2fd"
                style={styles.checkMarkIcon}
              />
              <Icon
                name="ellipsis-vertical"
                size={30}
                color="#00051459"
                style={styles.checkMarkIcon}
              />
            </View>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity style={styles.addButton} activeOpacity={0.6}>
              <Icon name="ios-add" size={20} style={styles.addButtonIcon} />
              <Text style={styles.addButtonText}>დამატება</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptButton} activeOpacity={0.6}>
              <Icon
                name="checkmark"
                size={20}
                style={styles.checkmarkButtonIcon}
              />
              <Text style={styles.acceptButtonText}>დადასტურება</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modalize>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeader: {
    margin: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalHeaderText: {
    fontWeight: "bold",
  },
  closeIcon: {
    borderWidth: 1,
    borderColor: "#E3EEFC",
    borderRadius: 30,
    paddingLeft: 2,
  },
  carIcon: {
    borderWidth: 1,
    borderColor: "#E3EEFC",
    borderRadius: 16,
    padding: 10,
    backgroundColor: "#E9F2FD",
  },
  eachCarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E9F2FD",
    borderRadius: 20,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 16,
    marginTop: 10,
  },
  carType: {
    marginLeft: 6,
    color: "#7D90A8",
    fontWeight: "bold",
    fontSize: 12,
  },
  carNumber: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
  modalContent: {
    marginLeft: 20,
    marginRight: 20,
  },
  buttonBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 14,
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9f2fd",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 12,
  },
  addButtonText: {
    marginLeft: 12,
  },
  acceptButtonText: {
    color: "#FFFFFF",
  },
  addButtonIcon: {
    color: "#000000",
    backgroundColor: "#ffffff",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  acceptButton: {
    paddingHorizontal: 6,
    paddingVertical: 8,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#3585ee",
  },
  checkmarkButtonIcon: {
    color: "#ffffff",
    backgroundColor: "#428af2",
    borderRadius: 30,
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
});
