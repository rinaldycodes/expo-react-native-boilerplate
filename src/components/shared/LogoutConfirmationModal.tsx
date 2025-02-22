import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import { useAtom } from "jotai";
import { logoutModalAtom } from "@/src/atoms/atoms";
import useAuth from "@/src/hooks/useAuth";

const LogoutConfirmationModal = () => {
  const [visible, setVisible] = useAtom(logoutModalAtom);
    const { logout } = useAuth();

  const handleLogout = async () => {
    await logout();
    setVisible(false);
    console.log("User logged out"); 
  };

  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
      onRequestClose={() => setVisible(false)}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          {/* <Text style={styles.title}>Logout Confirmation</Text> */}
          <Text style={styles.message}>Are you sure you want to log out?</Text>

          <View style={styles.buttonContainer}>
            <Button title="Cancel" onPress={() => setVisible(false)} />
            <Button title="Logout" onPress={handleLogout} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

export default LogoutConfirmationModal;
