import CryptoJS from "crypto-js";

/**
 * Simulates end-to-end encryption.
 * In a real app, the key would be derived from a password or a hardware key.
 * For this demo, we'll use a consistent key for simplicity per user.
 */
export function encryptData(data: string, secretKey: string): string {
  return CryptoJS.AES.encrypt(data, secretKey).toString();
}

export function decryptData(encryptedData: string, secretKey: string): string {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch (e) {
    return "DECRYPTION_FAILED";
  }
}
