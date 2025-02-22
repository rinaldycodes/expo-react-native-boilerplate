import { MyEnv } from "../utils/MyEnv";

export class EncryptHelper {

    static strToArrayBuffer(str: string) {
        return new TextEncoder().encode(str);
    }

    static bufferToBase64(buffer: any) {
        return btoa(String.fromCharCode(...new Uint8Array(buffer)));
    }

    static base64ToBuffer(base64: any) {
        return Uint8Array.from(atob(base64), c => c.charCodeAt(0)).buffer;
    }

    static async generateKey(key: any) {
        return crypto.subtle.importKey(
            'raw',
            this.strToArrayBuffer(key.padEnd(32, ' ')), // Pad key to 32 characters
            { name: 'AES-GCM' },
            false,
            ['encrypt', 'decrypt']
        );
    }

    static async encrypt(text: string, key = MyEnv.APP_KEY) {
        const cryptoKey = await this.generateKey(key);
        const iv = crypto.getRandomValues(new Uint8Array(12)); // Generate random IV
        const encrypted = await crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            cryptoKey,
            this.strToArrayBuffer(text)
        );

        return this.bufferToBase64(iv) + ':' + this.bufferToBase64(encrypted);
    }

    static async decrypt(encryptedText: string, key = MyEnv.APP_KEY) {
        const [ivBase64, dataBase64] = encryptedText.split(':');
        const iv = this.base64ToBuffer(ivBase64);
        const encryptedData = this.base64ToBuffer(dataBase64);
        const cryptoKey = await this.generateKey(key);

        const decrypted = await crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: new Uint8Array(iv) },
            cryptoKey,
            encryptedData
        );

        return new TextDecoder().decode(decrypted);
    }
}
